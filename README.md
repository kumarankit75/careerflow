🚀 CareerFlow – Job Application Tracker

CareerFlow is a full-stack SaaS-style job application tracker that helps users manage, track, and analyze their job applications efficiently.
It includes authentication, job tracking, workflow management with a Kanban board, and analytics — all deployed to production.

🌐 Live App:
👉 Frontend: https://careerflow-lac.vercel.app/
👉 Backend API: https://careerflow-backend-oy7i.onrender.com

✨ Features
🔐 Authentication

User registration & login

JWT-based authentication

Protected routes

Persistent login (refresh-safe)

Secure logout

📋 Job Management

Add, view, update, and delete job applications

Each job is linked to the logged-in user

Status-based workflow:

APPLIED

INTERVIEW

OFFER

REJECTED

🧱 Kanban Board

Drag & drop jobs between statuses

Real-time status updates

Backend-synced workflow (persists on refresh)

📊 Analytics Dashboard

Visual breakdown of jobs by status

Application funnel insight

Auto-updates when job status changes

☁️ Production Ready

Backend deployed on Render

Frontend deployed on Vercel

PostgreSQL database

Monorepo architecture

🛠️ Tech Stack
Frontend

React (Vite)

Tailwind CSS v3

React Router DOM

Axios

Recharts (analytics)

Backend

Node.js

Express.js

PostgreSQL

JWT Authentication

bcrypt (password hashing)

Deployment

Frontend: Vercel

Backend: Render

Database: PostgreSQL (Render)

📁 Project Structure (Monorepo)
careerflow/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   └── config/
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   └── api/
    └── package.json

⚙️ Environment Variables
Backend (backend/.env)
PORT=5000
DATABASE_URL=your_postgres_url
JWT_SECRET=your_secret_key
NODE_ENV=production

🧪 Run Locally
Backend
cd backend
npm install
npm run dev


API Health Check:

http://localhost:5000/api/health

Frontend
cd frontend
npm install
npm run dev


App runs at:

http://localhost:5173

🔍 Key Learnings & Challenges

Handling PostgreSQL SSL differences between local & cloud

Implementing JWT auth with protected frontend routes

Managing monorepo deployment (Render + Vercel)

Fixing SPA routing issues in production

Designing workflow-based systems (Kanban + status sync)

🚀 Future Improvements

Notes per job application

Email reminders for follow-ups

Dark mode

Role-based access (admin/user)

Resume upload & parsing

AI-based job insights

👨‍💻 Author

Ankit Kumar
Full-Stack Developer

GitHub: https://github.com/kumarankit75

Project Repo: https://github.com/kumarankit75/careerflow

⭐ Final Note

CareerFlow is built as a real-world, production-ready application, not a demo project.
It reflects end-to-end ownership: design → development → deployment.

If you’re reviewing this project — thanks for checking it out! 🙌
