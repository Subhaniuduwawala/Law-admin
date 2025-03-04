const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

// Test database connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Signup route
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err);
            return res.send(createError.InternalServerError());
        }
        return res.json(data);
    });
});

// Login route
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json({ user: data[0], message: "Success" });
        } else {
            return res.status(401).json("Fail");
        }
    });
});

// Appointments CRUD routes

// Create a new appointment
app.post('/appointments', (req, res) => {
    const sql = "INSERT INTO appointments (`name`, `email`, `date`, `time`, `lawType`, `lawyer`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.date,
        req.body.time,
        req.body.lawType,
        req.body.lawyer
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err);
            return res.send(createError.InternalServerError());
        }
        return res.status(201).json({ message: "Appointment saved successfully", data });
    });
});

// Get all appointments
app.get('/appointments', (req, res) => {
    const sql = "SELECT * FROM appointments";
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return res.send(createError.InternalServerError());
        }
        return res.json(data);
    });
});

// Update an appointment by ID
app.put('/appointments/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, date, time, lawType, lawyer } = req.body;
    const sql = "UPDATE appointments SET `name` = ?, `email` = ?, `date` = ?, `time` = ?, `lawType` = ?, `lawyer` = ? WHERE `id` = ?";
    db.query(sql, [name, email, date, time, lawType, lawyer, id], (err, data) => {
        if (err) {
            console.log(err); // Log the error
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (data.affectedRows === 0) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        return res.json({ message: "Appointment updated successfully" });
    });
});

// Delete an appointment by ID
app.delete('/appointments/:id', (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM appointments WHERE `id` = ?";
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.log(err);
            return res.send(createError.InternalServerError());
        }
        return res.json({ message: "Appointment deleted successfully" });
    });
});

// Admin-specific routes

// Get all users
app.get('/admin/users', (req, res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Failed to fetch users" });
        }
        return res.json(data);
    });
});

// Get all messages from users
app.get('/admin/messages', (req, res) => {
    const sql = "SELECT * FROM messages"; // Assuming you have a `messages` table
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Failed to fetch messages" });
        }
        return res.json(data);
    });
});

// Delete a user by ID
app.delete('/admin/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM login WHERE `id` = ?";
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Failed to delete user" });
        }
        return res.json({ message: "User deleted successfully" });
    });
});

// Redirect root to login
app.get('/', (req, res) => {
    res.redirect('/login');
});

// Start the server
app.listen(8081, () => {
    console.log("Server is running on port 8081");
});

// Get all users
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      return res.json(data);
    });
  });
  
  // Update a user by ID
  app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, password, type } = req.body;
    const sql = "UPDATE login SET name = ?, email = ?, password = ?, type = ? WHERE id = ?";
    db.query(sql, [name, email, password, type, id], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      return res.json({ message: "User updated successfully!" });
    });
  });
  
  // Delete a user by ID
  app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM login WHERE id = ?";
    db.query(sql, [id], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      return res.json({ message: "User deleted successfully!" });
    });
  });
  
  