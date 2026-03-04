const instance = require('../config/rajorpay');
const crypto = require('crypto');
const mailSender = require('../utils/mailSender');
const { courseEnrollmentEmail } = require('../mail/templates/courseEnrollmentEmail');
require('dotenv').config();

const User = require('../models/user');
const Course = require('../models/course');
const CourseProgress = require("../models/courseProgress");
const { default: mongoose } = require('mongoose');


// ================= CAPTURE PAYMENT =================
exports.capturePayment = async (req, res) => {

    const { coursesId } = req.body;
    const userId = req.user.id;

    if (!coursesId || coursesId.length === 0) {
        return res.status(400).json({
            success: false,
            message: "Please provide Course Id"
        });
    }

    let totalAmount = 0;

    // 🔹 Calculate total amount first
    for (const course_id of coursesId) {
        try {
            const course = await Course.findById(course_id);

            if (!course) {
                return res.status(404).json({
                    success: false,
                    message: "Could not find the course"
                });
            }

            const uid = new mongoose.Types.ObjectId(userId);

            if (course.studentsEnrolled.includes(uid)) {
                return res.status(400).json({
                    success: false,
                    message: "Student is already Enrolled"
                });
            }

            totalAmount += course.price;
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    // ================= FREE COURSE HANDLING =================
    if (totalAmount === 0) {

        for (const courseId of coursesId) {

            await Course.findByIdAndUpdate(
                courseId,
                { $push: { studentsEnrolled: userId } },
                { new: true }
            );

            const courseProgress = await CourseProgress.create({
                courseID: courseId,
                userId: userId,
                completedVideos: [],
            });

            await User.findByIdAndUpdate(
                userId,
                {
                    $push: {
                        courses: courseId,
                        courseProgress: courseProgress._id,
                    },
                },
                { new: true }
            );
        }

        return res.status(200).json({
            success: true,
            message: "Enrolled Successfully (Free Course)"
        });
    }

    // ================= RAZORPAY CHECK (ONLY FOR PAID COURSES) =================
    if (!instance) {
        return res.status(500).json({
            success: false,
            message: "Payment service not configured yet"
        });
    }

    // ================= CREATE RAZORPAY ORDER =================
    try {

        const options = {
            amount: totalAmount * 100,
            currency: "INR",
            receipt: Math.random(Date.now()).toString(),
        };

        const paymentResponse = await instance.orders.create(options);

        return res.status(200).json({
            success: true,
            message: paymentResponse,
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Could not Initiate Order"
        });
    }
};


// ================= VERIFY PAYMENT =================
exports.verifyPayment = async (req, res) => {

    if (!instance) {
        return res.status(500).json({
            success: false,
            message: "Payment service not configured yet"
        });
    }

    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        coursesId
    } = req.body;

    const userId = req.user.id;

    if (!razorpay_order_id || !razorpay_payment_id ||
        !razorpay_signature || !coursesId || !userId) {
        return res.status(400).json({
            success: false,
            message: "Payment Failed, data not found"
        });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(body.toString())
        .digest("hex");

    if (expectedSignature === razorpay_signature) {

        await enrollStudents(coursesId, userId);

        return res.status(200).json({
            success: true,
            message: "Payment Verified"
        });
    }

    return res.status(400).json({
        success: false,
        message: "Payment Failed"
    });
};


// ================= ENROLL STUDENTS =================
const enrollStudents = async (courses, userId) => {

    for (const courseId of courses) {

        const enrolledCourse = await Course.findOneAndUpdate(
            { _id: courseId },
            { $push: { studentsEnrolled: userId } },
            { new: true },
        );

        const courseProgress = await CourseProgress.create({
            courseID: courseId,
            userId: userId,
            completedVideos: [],
        });

        const enrolledStudent = await User.findByIdAndUpdate(
            userId,
            {
                $push: {
                    courses: courseId,
                    courseProgress: courseProgress._id,
                },
            },
            { new: true }
        );

        await mailSender(
            enrolledStudent.email,
            `Successfully Enrolled into ${enrolledCourse.courseName}`,
            courseEnrollmentEmail(
                enrolledCourse.courseName,
                `${enrolledStudent.firstName}`
            )
        );
    }
};