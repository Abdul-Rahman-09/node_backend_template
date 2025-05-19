import mongoose from "mongoose";

const connectDB = async () => {
  const { MONGO_URI, DB_NAME } = process.env;
  if (!MONGO_URI || !DB_NAME) {
    throw new Error("Missing MONGO_URI or DB_NAME in environment variables");
  }
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      dbName: DB_NAME || "node_template",
    });

    console.log(`🟢 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("🔴 MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
