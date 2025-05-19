import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./lib/mongodb.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
};

startServer();
