# 🚀 SkillNest Backend

<p align="center">
  <b>Scalable Backend for an EdTech Platform</b><br/>
  Built with Node.js, Express & MongoDB
</p>

<p align="center">
  <a href="https://skill-nest-frontend-eight.vercel.app/">
    <img src="https://img.shields.io/badge/Live URL-Click Here-blue?style=for-the-badge&logo=render"/>
  </a>
</p>

---

## 📌 Table of Contents
- [🧠 Overview](#-overview)
- [⚙️ Tech Stack](#️-tech-stack)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🔌 API Endpoints](#-api-endpoints)
- [🔐 Environment Variables](#-environment-variables)
- [⚡ Installation](#-installation)
- [🚀 Future Improvements](#-future-improvements)
- [👨‍💻 Author](#-author)

---

## 🧠 Overview

SkillNest Backend powers a full-featured **EdTech platform** with:

- ✅ Secure authentication  
- ✅ Course management system  
- ✅ Scalable REST APIs  

✔ Production-ready backend  
✔ Clean & modular architecture  
✔ Built for real-world applications  
✔ Perfect for placements  

---

## ⚙️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge"/>
</p>

---

## ✨ Features

### 🔐 Authentication
- OTP-based Signup  
- Secure JWT Login  
- Password Encryption (bcrypt)  
- Role-based Authorization  

### 📚 Course Management
- Create / Update / Delete Courses  
- Category-wise filtering  
- Instructor Dashboard support  

### ⭐ Reviews & Ratings
- Add Course Reviews  
- Dynamic Rating Calculation  

### 🛒 Cart System
- Add to Cart  
- Remove from Cart  
- Purchase-ready flow  

### 📩 Email & OTP
- OTP Email Verification  
- MongoDB TTL auto expiry  
- Only latest OTP works  

### ☁️ Media Upload
- Cloudinary Integration  
- Image & Video Upload  

---

## 🏗️ Architecture


SkillNest Backend
│
├── controllers/ # Business Logic
├── models/ # Database Schemas
├── routes/ # API Routes
├── middlewares/ # Auth & Validation
├── utils/ # Helpers
├── config/ # DB & Cloud Setup
└── server.js # Entry Point



---

## 🔌 API Endpoints

### 🔑 Auth

POST /auth/sendOTP
POST /auth/signup
POST /auth/login
POST /auth/changePassword


### 📚 Courses

GET /course/showAllCategories
GET /course/getCategoryPageDetails
GET /course/getReviews
POST /course/createCourse


### 👤 Profile

GET /profile/getUserDetails
PUT /profile/updateProfile


---

## 🔐 Environment Variables

Create a `.env` file:

```env
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

'''

### ⚡ Installation
git clone https://github.com/your-username/SkillNest-backend.git
cd SkillNest-backend
npm install
npm run dev

---

🚀 Future Improvements

💳 Razorpay Payment Integration

🎓 Course Certificates

📊 Instructor Analytics

🔔 Notification System

📱 Mobile APIs

👨‍💻 Author

Saniya Mane
🎓 CSE Student
💼 Aspiring Developer
