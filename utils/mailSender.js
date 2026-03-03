const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        console.log("Starting mail send process...");

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        console.log("Transporter created");

        const info = await transporter.sendMail({
            from: `"SkillNest" <${process.env.MAIL_USER}>`,
            to: email,
            subject: title,
            html: body,
        });

        console.log("Mail sent successfully:", info.response);

        return info;
    } catch (error) {
        console.log("FULL MAIL ERROR BELOW ⬇️");
        console.log(error);   // 🔥 THIS IS IMPORTANT
        throw error;
    }
};

module.exports = mailSender;
