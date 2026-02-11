const express = require("express");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const Staff = require("../models/Staff");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, async (req, res) => {
  const students = await Student.countDocuments();
  const teachers = await Teacher.countDocuments();
  const staff = await Staff.countDocuments();

  res.json({
    total_students: students,
    total_teachers: teachers,
    total_staff: staff
  });
});

module.exports = router;
