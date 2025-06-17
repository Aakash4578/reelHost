// routes/admin.js
const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const verifyToken = require("../models/middleware/verifyToken"); // apne hisab se path sahi karo

// Get current admin data (email, etc.)
router.get("/", verifyToken, async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select("-password");
    if (!admin) return res.status(404).json({ error: "Admin not found" });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ error: "Error fetching admin data" });
  }
});

// Update current admin profile (email + password)
router.put("/", verifyToken, async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    // 1. Admin dhundo
    const admin = await Admin.findById(req.user.id);
    if (!admin) return res.status(404).json({ error: "Admin not found" });

    // 2. Current password verify karo
    const isMatch = await bcrypt.compare(currentPassword, admin.password);
    if (!isMatch) return res.status(401).json({ error: "Incorrect current password" });

    // 3. Update fields prepare karo
    const updatedFields = {};
    if (email) updatedFields.email = email;
    if (newPassword) {
      updatedFields.password = await bcrypt.hash(newPassword, 10);
    }

    // 4. Update admin
    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.user.id,
      { $set: updatedFields },
      { new: true }
    ).select("-password");

    res.json({ message: "Profile updated successfully", admin: updatedAdmin });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Failed to update profile" });
  }
});

module.exports = router;
