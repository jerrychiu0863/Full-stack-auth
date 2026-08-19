import express from "express";
import bcrypt from "bcrypt";
import pool from "../config/db.js";
import jwt from "jsonwebtoken";
import { protect } from "../middleware/auth.js";

const router = express.Router();
const saltRounds = 10;

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "Strict",
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user already exists
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length === 0) {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        const newUser = await pool.query(
          "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
          [email, hash],
        );
        const token = generateToken(newUser.rows[0].id);
        // Express - cookie
        res.cookie("token", token, cookieOptions);
        res.status(201).json({ user: newUser.rows[0] });
      });
    } else {
      res.status(400).json({ message: "Email has been registered!" });
    }
  } catch (err) {
    console.error("Register Error:" + err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      const userData = user.rows[0];
      const isMatch = await bcrypt.compare(password, userData.password);
      if (isMatch) {
        const token = generateToken(userData.id);
        // Express - store token in cookie
        res.cookie("token", token, cookieOptions);
        res
          .status(201)
          .json({ user: { id: userData.id, email: userData.email } });
        // res.status(200).json({ message: "Login successfully!" });
      } else {
        res.status(400).json({ message: "Wrong password!" });
      }
    } else {
      res.status(400).json({ message: "User hasn't been registered!" });
    }
  } catch (err) {
    console.error(err);
    res.json({ message: "Server Error!" });
  }
});

// Me - proteced route
router.get("/me", protect, async (req, res) => {
  // console.log(req.user);
  // Send login user info from protected middleware
  res.json(req.user);
});

// Logout
router.post("/logout", (req, res) => {
  res.cookie("token", "", { ...cookieOptions, maxAge: 1 });
  res.json({ message: "Logout successfully!" });
});

export default router;
