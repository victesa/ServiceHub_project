const { createUser, signInUser } = require('../models/userModels');
const db = require('../config/db');

function registerUser(req, res) {
  const userData = req.body;
  const { emailAddress } = userData;

  db.query("SELECT * FROM USERS WHERE email = ?", [emailAddress], (err, rows) => {
    if (err) {
      console.error("Error checking user existence:", err);
      return res.status(500).send("Internal Server Error");
    }

    if (rows.length > 0) {
      return res.status(400).json({
        message: "Email Address already exists"
      });
    }

    createUser(userData, (createErr, result) => {
      if (createErr) {
        console.error("Error creating user:", createErr);
        return res.status(500).send("Internal Server Error");
      }
      res.status(200).send("User created successfully");
    });
  });
}

function signInUserController(req, res) {
  const userData = req.body;

  signInUser(userData, (err, result) => {
    if (err) {
      console.error("Error signing in user:", err);
      return res.status(500).send("Internal Server Error");
    }

    if (result.error) {
      return res.status(400).json({
        type: result.type,
        msg: result.msg
      });
    }

    res.status(200).json({
      message: "User signed in successfully",
      user: result.user
    });
  });
}

module.exports = { registerUser, signInUserController };
