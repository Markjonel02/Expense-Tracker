const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDb = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    console.error("Connection to database failed: MONGO_URI not found!");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI); // no extra options needed in Mongoose v6+
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
};

module.exports = connectDb;
