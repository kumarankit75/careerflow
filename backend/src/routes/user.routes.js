const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const pool = require("../config/db");

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;

    const result = await pool.query(
      "SELECT id, name, email, created_at FROM careerflow_users WHERE id = $1",
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Me route error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
