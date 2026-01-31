const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const pool = require("../config/db");

// CREATE JOB
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { company, role, status, job_link, applied_date } = req.body;
    const userId = req.user.userId;

    if (!company || !role) {
      return res.status(400).json({ message: "Company and role are required" });
    }

    const result = await pool.query(
      `INSERT INTO careerflow_jobs
       (user_id, company, role, status, job_link, applied_date)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        userId,
        company,
        role,
        status || "APPLIED",
        job_link || null,
        applied_date || null,
      ]
    );

    res.status(201).json({
      message: "Job added successfully",
      job: result.rows[0],
    });
  } catch (error) {
    console.error("Add job error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// GET ALL JOBS (for logged-in user)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;

    const result = await pool.query(
      `SELECT * FROM careerflow_jobs
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [userId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Get jobs error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE JOB STATUS
router.put("/:id/status", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const jobId = req.params.id;
    const userId = req.user.userId;

    const validStatus = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];
    if (!validStatus.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const result = await pool.query(
      `UPDATE careerflow_jobs
       SET status = $1
       WHERE id = $2 AND user_id = $3
       RETURNING *`,
      [status, jobId, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({
      message: "Job status updated",
      job: result.rows[0],
    });
  } catch (error) {
    console.error("Update job error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// DELETE JOB
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const jobId = req.params.id;
    const userId = req.user.userId;

    const result = await pool.query(
      `DELETE FROM careerflow_jobs
       WHERE id = $1 AND user_id = $2
       RETURNING id`,
      [jobId, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Delete job error:", error);
    res.status(500).json({ message: "Server error" });
  }
});




module.exports = router;
