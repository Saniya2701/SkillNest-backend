const mailSender = require("../utils/mailSender");

exports.contactUs = async (req, res) => {
  try {
    const { firstname, lastname, email, message, phoneNo, countrycode } = req.body;

    // validation
    if (!firstname || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email content
    const emailBody = `
      <h2>New Contact Message from SkillNest</h2>
      <p><strong>Name:</strong> ${firstname} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${countrycode} ${phoneNo}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // send email using SendGrid
    await mailSender(
      process.env.MAIL_USER,
      `New Contact Message from ${firstname}`,
      emailBody
    );

    return res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });

  } catch (error) {
    console.log("Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};