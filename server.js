require("dotenv").config();
const express = require("express");
const app = express();

// Packages
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// DB & Cloudinary
const { connectDB } = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

// Routes
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const paymentRoutes = require("./routes/payments");
const courseRoutes = require("./routes/course");
const contactRoute = require("./routes/contact");

// ✅ MIDDLEWARE
app.use(express.json());
app.use(cookieParser());

// ✅ FIXED CORS CONFIGURATION
app.use(
  cors({
    origin: [
      "http://localhost:5173", // for local frontend
      "https://skill-nest-frontend-eight.vercel.app", // deployed frontend
    ],
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// ✅ ROUTES
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1", contactRoute);

// ✅ DEFAULT ROUTE
app.get("/", (req, res) => {
  res.send(`
    <div>
      This is Default Route  
      <p>Everything is OK</p>
    </div>
  `);
});

// ✅ CONNECTIONS
connectDB();
cloudinaryConnect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`);
});