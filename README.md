🤖 QA Automation Assistant

A full-stack QA Automation Assistant that answers questions related to Manual Testing, Automation Testing, Selenium, Playwright, Cypress, API Testing, and QA interviews using Google Gemini AI.

This project demonstrates real-world backend–frontend integration, proper API error handling, environment variable security, and clean GitHub practices.

🚀 Features

💬 Ask QA & Automation-related questions

🧠 AI-powered answers using Google Gemini API

🧪 Focused on:

Manual Testing

Automation Testing

Selenium

Playwright

Cypress

API Testing

QA Interview Questions

⚠️ Proper handling of:

API quota errors (429)

Server errors (500)

Validation errors (400)

🔐 Secure API key handling using .env

🧹 Clean Git history with .gitignore

🛠️ Tech Stack
Frontend

HTML5

CSS3

Vanilla JavaScript

Fetch API

Backend

Node.js

Express.js

Google Gemini REST API (v1)

Tools & Practices

Environment Variables (dotenv)

Git & GitHub

RESTful API design

📂 Project Structure
qa-automation-assistant/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   └── index.html
│
├── .gitignore
└── README.md

⚙️ How to Run Locally
1️⃣ Clone the Repository
git clone https://github.com/Vikrama0103IT/qa-automation-assistant.git
cd qa-automation-assistant

2️⃣ Setup Backend
cd backend
npm install

3️⃣ Create .env File

Inside the backend folder, create a .env file:

GEMINI_API_KEY=your_gemini_api_key_here


⚠️ Never commit .env to GitHub.

4️⃣ Start the Server
npm start


You should see:

🚀 Using Gemini model: gemini-1.0-pro
✅ Server running at http://localhost:3000

5️⃣ Open the App

Open your browser and visit:

http://localhost:3000

🧪 Example Questions

What is smoke testing?

Difference between regression and retesting

Write Selenium login test in Java

What is Playwright and why is it better than Selenium?

Explain API testing with example

QA interview questions for 2 years experience

🔐 Security Best Practices Used

API key stored in environment variables

.env excluded via .gitignore

node_modules excluded from repository

No secrets committed to GitHub

🧠 Key Learning Outcomes

Frontend ↔ Backend communication

Handling third-party API quota & errors

Using REST APIs instead of unstable SDKs

Real-world error handling (429 vs 500)

Professional GitHub workflow

📌 Future Improvements

🔁 OpenAI API fallback

⏳ Retry mechanism for quota limits

📊 Chat history

🌍 Deployment (Render / Vercel)

🎨 UI enhancements
