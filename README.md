🚀 SkillNest Backend
<p align="center"> <b>Scalable Backend for an EdTech Platform 🚀</b><br/> Built with Node.js, Express & MongoDB </p>
🌐 Live API

🔗 https://skillnest-backend-9mg4.onrender.com/api/v1

📌 Table of Contents

🧠 Overview

⚙️ Tech Stack

✨ Features

🏗️ Architecture

🔌 API Endpoints

🔐 Environment Variables

⚡ Installation

🚀 Future Improvements

👨‍💻 Author

🧠 Overview

SkillNest Backend powers a full-featured EdTech platform with secure authentication, course management, and scalable APIs.

✔ Built for real-world production
✔ Clean architecture
✔ Placement-ready project

⚙️ Tech Stack
<p> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge"/> <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge"/> </p>
✨ Features
🔐 Authentication

OTP-based Signup

JWT Login System

Password Encryption (bcrypt)

Role-based Authorization

📚 Course Management

Create / Update / Delete Courses

Category-wise filtering

Instructor Dashboard Support

⭐ Reviews & Ratings

Add Course Reviews

Dynamic Rating Calculation

🛒 Cart System

Add to Cart

Remove from Cart

Purchase-ready flow

📩 Email & OTP

OTP Email Verification

Auto-expiry using MongoDB TTL

Only latest OTP works

☁️ Media Upload

Cloudinary Integration

Image & Video Upload

🏗️ Architecture
SkillNest Backend
│
├── controllers/      # Business Logic
├── models/           # Database Schemas
├── routes/           # API Routes
├── middlewares/      # Auth & Validation
├── utils/            # Helpers (mail, upload)
├── config/           # DB & Cloud Setup
└── server.js         # Entry Point
🔌 API Endpoints
🔑 Auth
POST /auth/sendOTP
POST /auth/signup
POST /auth/login
POST /auth/changePassword
📚 Courses
GET  /course/showAllCategories
GET  /course/getCategoryPageDetails
GET  /course/getReviews
POST /course/createCourse
👤 Profile
GET /profile/getUserDetails
PUT /profile/updateProfile
🔐 Environment Variables

Create .env file:

PORT=4000
DATABASE_URL=your_mongodb_url
JWT_SECRET=your_secret

MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email
MAIL_PASS=your_password

CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret
⚡ Installation
git clone https://github.com/your-username/SkillNest-backend.git
cd SkillNest-backend
npm install
npm run dev
🚀 Future Improvements

💳 Razorpay Payment Integration

🎓 Course Completion Certificates

📊 Instructor Analytics

🔔 Notifications System

📱 Mobile Optimization APIs

👨‍💻 Author

Saniya Mane
🎓 CSE Student | 💼 Aspiring Developer
