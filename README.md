🧠 QGen – AI-Powered Interview Preparation Tool
QGen is a full-stack web application that helps users prepare for job interviews by generating AI-driven questions and answers tailored to their role, topics, and experience level. It provides a personalized dashboard, secure login, and session saving for effective and structured interview prep.

🚀 Features
🔐 User Authentication – Secure signup and login using JWT

🧑‍💼 Role-Based Q&A Generation – Choose job role, topics, and experience level to get relevant questions

🤖 AI-Powered Answers – Gemini API provides both brief and detailed responses

💾 Session Saving – Automatically saves generated questions and answers

📊 Personalized Dashboard – Track and manage all your past Q&A sessions

⚡ Fast Performance – Response time under 2 seconds, with <300ms DB query speed

📱 Responsive UI – Works smoothly on both desktop and mobile devices

🛠️ Tech Stack
🧩 Frontend
React.js

Tailwind CSS

React Router

Axios

Framer Motion

React Hot Toast

⚙️ Backend
Node.js

Express.js

MongoDB + Mongoose

JWT (Authentication)

Multer (Optional File Handling)

dotenv

🧠 AI Integration
Gemini API (@google/genai)

📷 Screenshots
Landing Pages :
![image](https://github.com/user-attachments/assets/70497be9-bf76-4ab4-ab5e-4187c6fe003b)
![image](https://github.com/user-attachments/assets/02d06750-540e-42ac-94b6-f704e1753732)

Signup/Login :
![image](https://github.com/user-attachments/assets/7383932e-2d79-4fc5-9d2d-f9535e8659c6)
![image](https://github.com/user-attachments/assets/6d7dd5e5-f445-407b-b11d-425e4bb2d328)

User Dashboard :
![image](https://github.com/user-attachments/assets/fc29fde3-a815-4fbb-833f-e49254ea6b6a)

Ques Generation :
![image](https://github.com/user-attachments/assets/a41f42a8-8c26-4432-b87c-d8961075c4c1)

Short Answer/Full Explanation :
![image](https://github.com/user-attachments/assets/ca1916de-5f8c-425e-8c15-9c42d74667fe)



🖥️ Dashboard

📋 Question Generator Form

🧠 AI Answers Section

📁 Saved Sessions List

📂 Project Structure
bash
Copy
Edit
QGen/
├── client/         # React frontend
│   └── ...
├── server/         # Node.js + Express backend
│   └── ...
├── .env            # Environment variables
└── README.md
🔑 Environment Variables
Create a .env file in the root of server/:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
PORT=8000
Also in client/ if needed:

ini
Copy
Edit
VITE_API_URL=http://localhost:8000
🧪 How to Run Locally
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/qgen.git
Install frontend & backend dependencies:

bash
Copy
Edit
cd client && npm install
cd ../server && npm install
Start the backend:

bash
Copy
Edit
npm run dev
Start the frontend:

bash
Copy
Edit
cd ../client
npm run dev
📊 Usage Flow
Create an account or login

Select role, topics, and experience

Generate a set of 10–15 questions using Gemini AI

View and save questions with detailed explanations

Access past sessions from your dashboard

🌐 Live Demo
https://qgen-project.vercel.app/
👉 Live Site

📈 Performance Highlights
⏱️ Average AI response time: < 2 seconds

🔒 Secured using JWT-based auth

💡 1000+ questions generated and saved across sessions

🙋‍♂️ Author
Yash Sharma
