import express from "express";
import con from "../UTILS/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

// Admin login route
router.post("/adminlogin", async (req, res) => {
  const sql = "SELECT * FROM admin WHERE email = ?";
  con.query(sql, [req.body.email], async (err, result) => {
            
    if (err) {
      console.error("Database error:", err); // Log the actual error
      return res.json({ loginStatus: false, Error: "Query error" });
  }
    
    if (result.length > 0) {
      const isPasswordValid = await bcrypt.compare(req.body.password, result[0].password);
      if (isPasswordValid) {
        const token = jwt.sign({ role: "admin", email: result[0].email }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.cookie('token', token);
        return res.json({ loginStatus: true });
      } else {
        return res.json({ loginStatus: false, Error: "Invalid email or password" });
      }
    } else {
      return res.json({ loginStatus: false, Error: "Invalid email or password" });
    }
  });
});

// Book slot route
router.post('/auth/book_slot', (req, res) => {
  const { day, date, time, client_id } = req.body;

  // Validate request data
  if (!day || !date || !time || !client_id) {
    return res.json({ Status: false, Error: "Missing required fields" });
  }

  const sql = "INSERT INTO bookings (day, date, time, client_id) VALUES (?, ?, ?, ?)";
  con.query(sql, [day, date, time, client_id], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.json({ Status: false, Error: "Query error" });
    }
    return res.json({ Status: true });
  });
});

export { router as adminRouter };
