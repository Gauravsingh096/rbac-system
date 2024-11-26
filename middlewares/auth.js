const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

// Verify Token
exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

// Role-based Access Control
exports.authorize =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send("Forbidden: Insufficient permissions");
    }
    next();
  };
