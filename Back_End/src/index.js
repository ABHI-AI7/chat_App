import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.route.js";
import connectDB from "./lib/db.js"; 
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

// 🚀 Connect to MongoDB before starting the server
connectDB().then(() => {
    app.use("/api/auth", authRoutes);
    app.use("/api/message", messageRoutes);

    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("❌ Server startup failed due to MongoDB connection error:", error);
});

