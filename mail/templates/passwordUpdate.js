exports.passwordUpdated = (email, name) => {
  return `<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>SkillNest - Password Updated</title>

  <style>
    body {
      background-color: #ffffff;
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.4;
      color: #333333;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }

    .logo {
      max-width: 180px;
      margin-bottom: 20px;
    }

    .message {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #4F46E5;
    }

    .body {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .support {
      font-size: 14px;
      color: #666666;
      margin-top: 20px;
    }

    .highlight {
      font-weight: bold;
      color: #22C55E;
    }
  </style>

</head>

<body>

  <div class="container">

    <!-- Logo (Optional) -->
    <img class="logo"
      src="https://via.placeholder.com/180x60?text=SkillNest"
      alt="SkillNest Logo">

    <div class="message">
      Password Successfully Updated
    </div>

    <div class="body">

      <p>Hi ${name}, 👋</p>

      <p>
        Your password has been successfully updated for:
      </p>

      <p class="highlight">${email}</p>

      <p>
        If this was not you, please contact our support team immediately.
      </p>

    </div>

    <div class="support">

      Need help? Contact us at:
      <br>
      <b>manesaniya0987@gmail.com</b>

      <br><br>

      © 2026 SkillNest. All rights reserved.

    </div>

  </div>

</body>

</html>`;
};
