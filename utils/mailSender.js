
require("dotenv").config();

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const mailSender = async (email, title, body) => {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.MAIL_FROM) {
      throw new Error(
        "RESEND_API_KEY or MAIL_FROM is missing"
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: email,
      subject: title,
      html: body,
    });

    if (error) {
      throw new Error(error.message);
    }

    console.log("Email accepted by Resend:", data?.id);

    return data;
  } catch (error) {
    console.error("Email sending failed:", error.message);
    throw error;
  }
};

module.exports = mailSender;
