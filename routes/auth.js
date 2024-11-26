const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();
const { JWT_SECRET } = process.env;

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = new User({ username, password, role });
    await user.save();
    res.status(201).send("User registered successfully!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send("Invalid credentials");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(400).send("Invalid credentials");

  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

module.exports = router;
