import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

// Connect to DB for every invocation (cached)
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// ❌ Remove app.listen()
// ✅ Export app for Vercel serverless function
export default app;
