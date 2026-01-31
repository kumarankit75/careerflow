const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const pool = require("../config/db");

// Get notes for a job
router.get("/:jobId", authMiddleware, async (req, res) => {
  const { jobId } = req.params;
  const userId = req.user.userId;

  const result = await pool.query(
    `SELECT * FROM careerflow_job_notes
     WHERE job_id = $1 AND user_id = $2
     ORDER BY created_at DESC`,
    [jobId, userId]
  );

  res.json(result.rows);
});

// Add note
router.post("/:jobId", authMiddleware, async (req, res) => {
  const { jobId } = req.params;
  const { content } = req.body;
  const userId = req.user.userId;

  if (!content) {
    return res.status(400).json({ message: "Note content required" });
  }

  const result = await pool.query(
    `INSERT INTO careerflow_job_notes (job_id, user_id, content)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [jobId, userId, content]
  );

  res.status(201).json(result.rows[0]);
});

module.exports = router;
