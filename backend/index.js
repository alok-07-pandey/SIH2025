// index.js
import dotenv from "dotenv";
dotenv.config(); // Must be first

import app from "./app.js";
import connectDB from "./src/db/db.js";

// Connect to MongoDB and start server
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  });
