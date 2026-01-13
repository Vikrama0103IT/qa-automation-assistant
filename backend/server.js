import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ---------- PATH SETUP ----------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------- SERVE FRONTEND ----------
const frontendPath = path.join(__dirname, "../frontend");
app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ---------- API KEY CHECK ----------
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY missing");
  process.exit(1);
}

// ---------- GEMINI CLIENT ----------
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ GEMINI 2.5 FLASH (REQUIRES BILLING)
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});

console.log("🚀 Gemini SDK initialized (gemini-2.5-flash)");

// ---------- ASK API ----------
app.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question required" });
    }

    const prompt = `
You are a QA Automation Assistant.

You ONLY answer questions related to:
- QA Testing
- Manual Testing
- Automation Testing
- Selenium
- Playwright
- Cypress
- API Testing

If the question is NOT related to QA or testing, reply rudely.

User Question:
${question}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ answer: text });

  } catch (err) {
    console.error("❌ Gemini error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ---------- HEALTH CHECK ----------
app.get("/health", (req, res) => {
  res.send("OK");
});

// ---------- START SERVER ----------
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
