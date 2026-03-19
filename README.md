🚀 SkillNest Backend

💡 A scalable and secure backend powering the SkillNest EdTech Platform — enabling authentication, course management, payments, and seamless learning experiences.

🌐 Live API Base URL
https://skillnest-backend-9mg4.onrender.com/api/v1
📌 Table of Contents
🔹 Overview
🔹 Tech Stack
🔹 Features
🔹 Project Architecture
🔹 API Endpoints
🔹 Environment Variables
🔹 Installation & Setup
🔹 Future Improvements
🔹 Author
🧠 Overview

The SkillNest Backend is built using Node.js & Express, designed to support a full-fledged EdTech platform with:

Secure Authentication (JWT + OTP)

Role-based Authorization (Student / Instructor / Admin)

Course & Category Management

Review & Rating System

Payment Integration Ready (Razorpay)

Cloud Media Storage

⚙️ Tech Stack
Technology	Usage
🟢 Node.js	Backend Runtime
🚀 Express.js	Server Framework
🍃 MongoDB	Database
🔐 JWT	Authentication
🔑 bcrypt	Password Hashing
📧 Nodemailer	Email & OTP
☁️ Cloudinary	Media Storage
💳 Razorpay	Payment Integration (Planned)
✨ Features
🔐 Authentication & Authorization

User Signup with OTP Verification

Secure Login using JWT

Password Encryption using bcrypt

Role-based access control

📚 Course Management

Create, Update & Delete Courses

Categorize Courses

Instructor Dashboard Support

⭐ Reviews & Ratings

Students can rate & review courses

Dynamic average rating calculation

🛒 Cart & Purchase System

Add/Remove courses to cart

Purchase flow ready

Payment integration (Razorpay - upcoming)

📩 OTP & Email System

Email verification via OTP

Auto-expiry of OTP (Mongo TTL)

Secure OTP validation (latest OTP only)

☁️ Media Handling

Upload course thumbnails/videos using Cloudinary

🏗️ Project Architecture
SkillNest Backend
│
├── controllers/        # Business Logic
├── models/             # Mongoose Schemas
├── routes/             # API Routes
├── middlewares/        # Auth & Validation
├── utils/              # Helper Functions (mail, upload)
├── config/             # DB & Cloud Config
└── server.js           # Entry Point
🔌 API Endpoints
🔑 Auth Routes
POST   /auth/sendOTP
POST   /auth/signup
POST   /auth/login
POST   /auth/changePassword
📚 Course Routes
GET    /course/showAllCategories
GET    /course/getCategoryPageDetails
GET    /course/getReviews
POST   /course/createCourse
👤 Profile Routes
GET    /profile/getUserDetails
PUT    /profile/updateProfile
🔐 Environment Variables

Create a .env file in root:

PORT=4000
DATABASE_URL=your_mongodb_connection
JWT_SECRET=your_secret_key

MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email
MAIL_PASS=your_password

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret
⚡ Installation & Setup
📥 Clone Repository
git clone https://github.com/your-username/SkillNest-backend.git
cd SkillNest-backend
📦 Install Dependencies
npm install
▶️ Run Server
npm run dev
🚀 Future Improvements

💳 Razorpay Payment Integration

🎓 Course Completion Certificates

📊 Instructor Analytics Dashboard

🔔 Notifications System

🧾 Order History & Invoice System

📱 Mobile Optimization APIs

👨‍💻 Author

Saniya Mane
🎓 Computer Science Engineering Student
