const nodemailer = require("nodemailer");

exports.contactUs = async (req, res) => {
  try {
    const { firstname, lastname, email, message, phoneNo, countrycode } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: email,
      to: process.env.MAIL_USER, // You receive message here
      subject: `New Contact Message from ${firstname} ${lastname}`,
      html: `
        <h3>New Message from SkillNest Contact Form</h3>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countrycode} ${phoneNo}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.log("Contact Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};