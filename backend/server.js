const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error("Database connection error:", err);  // Log database connection error
    throw err;
  }
  console.log("MySQL connected");
});

// Check if email exists (for sign-up logic)
app.post("/api/check-email", (req, res) => {
  const { email } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error("Database query error:", err);  // Log error if any database issue occurs
      return res.status(500).json({ message: "Database error during email check" });
    }

    if (results.length > 0) {
      return res.status(200).json({ exists: true });  // Email exists
    } else {
      return res.status(200).json({ exists: false }); // Email does not exist
    }
  });
});

// Sign-Up Route
app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if the email already exists
    const checkUserSql = "SELECT * FROM users WHERE email = ?";
    db.query(checkUserSql, [email], (err, results) => {
      if (err) {
        console.error("Database query error:", err);  // Log any database query error
        return res.status(500).json({ message: "Database error during email check" });
      }

      if (results.length > 0) {
        console.log("Email already exists");  // Log if the email already exists
        return res.status(400).json({ message: "Email already exists. Please log in." });
      }

      // Insert the new user into the database
      const insertSql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      db.query(insertSql, [username, email, hashedPassword], (err) => {
        if (err) {
          console.error("Database insert error:", err);  // Log database insert error
          return res.status(500).json({ message: "Error registering user" });
        }
        res.status(201).json({ message: "User registered successfully" });
      });
    });
  } catch (error) {
    console.error("Error during sign-up process:", error);  // Log unexpected errors
    res.status(500).json({ message: "Error processing the sign-up request" });
  }
});

// Login Route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ?";

  db.query(sql, [username], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found. Please sign up." });
    }

    const validPassword = await bcrypt.compare(password, results[0].password);
    if (!validPassword) return res.status(401).json({ message: "Invalid password" });

    res.status(200).json({ message: "Login successful", token: "dummyTokenForNow" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
