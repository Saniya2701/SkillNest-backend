const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  otp: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 10 * 60, // OTP expires after 10 minutes
  },
});

// function to send email
async function sendVerificationEmail(email, otp) {
  try {
    await mailSender(email, "Verification Email from SkillNest", otp);
    console.log("Email sent successfully to - ", email);
  } catch (error) {
    console.log("Error while sending an email to ", email);
    console.error(error);
  }
}

// IMPORTANT: use function() not arrow function
OTPSchema.pre("save", async function (next) {
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

module.exports = mongoose.model("OTP", OTPSchema);