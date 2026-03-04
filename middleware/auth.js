// AUTH , IS STUDENT , IS INSTRUCTOR , IS ADMIN

const jwt = require("jsonwebtoken");
require("dotenv").config();


// ================= AUTH =================
// User Authentication by validating token
exports.auth = (req, res, next) => {
    try {
        let token;

        // 1️⃣ First check Authorization header (Best for production)
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
        }

        // 2️⃣ Then check cookies
        else if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        }

        // 3️⃣ Then check body (fallback)
        else if (req.body && req.body.token) {
            token = req.body.token;
        }

        // If token missing
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is Missing"
            });
        }

        // Verify token
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Token is Invalid"
            });
        }

        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while validating token"
        });
    }
};



// ================= IS STUDENT =================
exports.isStudent = (req, res, next) => {
    try {
        if (req.user?.accountType !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This page is protected only for Students"
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while verifying Student role"
        });
    }
};



// ================= IS INSTRUCTOR =================
exports.isInstructor = (req, res, next) => {
    try {
        if (req.user?.accountType !== "Instructor") {
            return res.status(401).json({
                success: false,
                message: "This page is protected only for Instructors"
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while verifying Instructor role"
        });
    }
};



// ================= IS ADMIN =================
exports.isAdmin = (req, res, next) => {
    try {
        if (req.user?.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This page is protected only for Admins"
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while verifying Admin role"
        });
    }
};