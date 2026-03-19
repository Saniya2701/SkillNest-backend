🚀 SkillNest Backend
<p align="center"> <b>Scalable Backend for an EdTech Platform</b><br/> Built with <b>Node.js, Express & MongoDB</b> </p> <p align="center"> <a href="https://skillnest-backend-9mg4.onrender.com/api/v1"> <img src="https://img.shields.io/badge/Live API-Click Here-blue?style=for-the-badge&logo=render"/> </a> </p>
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

✔ Production-ready backend
✔ Clean & modular architecture
✔ Built for real-world applications
✔ Perfect for placements & portfolio

⚙️ Tech Stack
<p align="center"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge"/> <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge"/> </p>
✨ Features
🔐 Authentication

OTP-based Signup

Secure JWT Login System

Password Encryption (bcrypt)

Role-based Authorization

📚 Course Management

Create / Update / Delete Courses

Category-wise filtering

Instructor Dashboard support

⭐ Reviews & Ratings

Add Course Reviews

Dynamic Rating Calculation

🛒 Cart System

Add to Cart

Remove from Cart

Purchase-ready flow

📩 Email & OTP

OTP Email Verification

MongoDB TTL-based auto expiry

Only latest OTP is valid

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
GET  /profile/getUserDetails
PUT  /profile/updateProfile
🔐 Environment Variables

Create a .env file in root:

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
# Clone the repository
git clone https://github.com/your-username/SkillNest-backend.git

# Navigate to project folder
cd SkillNest-backend

# Install dependencies
npm install

# Run the server
npm run dev
🚀 Future Improvements

💳 Razorpay Payment Integration

🎓 Course Completion Certificates

📊 Instructor Analytics Dashboard

🔔 Notification System

📱 Mobile Optimization APIs

👨‍💻 Author

Saniya Mane
🎓 CSE Student
💼 Aspiring Software Developer
