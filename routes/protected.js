const express = require("express");
const { authenticate, authorize } = require("../middlewares/auth");
const router = express.Router();

router.get("/admin", authenticate, authorize("Admin"), (req, res) => {
  res.send("Welcome Admin!");
});

router.get("/user", authenticate, authorize("User", "Admin"), (req, res) => {
  res.send("Welcome User!");
});

module.exports = router;
