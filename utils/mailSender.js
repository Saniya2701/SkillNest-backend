
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const mailSender = async (email, title, body) => {
  try {
    const mailOptions = {
      from: `"SkillNest" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    };

    const response = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully to:", email);

    return response;
  } catch (error) {
    console.error("Nodemailer Error:", error.message);
    throw error;
  }
};

module.exports = mailSender;
