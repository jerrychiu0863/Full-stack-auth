import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";
import router from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/api/auth/", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
