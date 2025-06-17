const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ error: "Invalid email or password" });

    const validPass = await bcrypt.compare(password, admin.password);
    if (!validPass) return res.status(400).json({ error: "Invalid email or password" });

    // Create and assign token
    const token = jwt.sign({ id: admin._id }, "secret123", { expiresIn: '1h' }); // secret key should be in env

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
