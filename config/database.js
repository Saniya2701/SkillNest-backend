const mongoose = require('mongoose');
require('dotenv').config();

exports.connectDB = async () => {
    try {

        if (!process.env.MONGODB_URL) {
            console.log("MongoDB URL not found in environment variables");
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URL);

        console.log("Database connected successfully");

    } catch (error) {
        console.log("Error while connecting server with Database");
        console.error(error);
        process.exit(1);
    }
};