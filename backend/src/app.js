const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const jobRoutes = require("./routes/job.routes");
const noteRoutes = require("./routes/note.routes");

const app = express();

// app.use(cors());

app.use(
    cors({
        origin: "*", // later you can restrict to Vercel URL
    })
);
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/notes", noteRoutes);


//test route
// app.get("/api/health", (req, res) => {
    //         res.json({ status: "OK", message: "CareerFlow backend running"});
    
    //     });
    
    const pool = require("./config/db");
    

app.get("/api/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      success: true,
      time: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
}
});
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);



module.exports = app;