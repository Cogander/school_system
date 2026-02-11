require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");
const Student = require("./models/Student");
const Teacher = require("./models/Teacher");
const Staff = require("./models/Staff");

mongoose.connect(process.env.MONGO_URI);

async function seed() {

  await User.deleteMany();
  await Student.deleteMany();
  await Teacher.deleteMany();
  await Staff.deleteMany();

  const hashed = await bcrypt.hash("k@mb0j@PLG351", 12);

  await User.create({
    username: "smpxonesiswaguru",
    password: hashed,
    role: "superadmin"
  });

  for (let i = 1; i <= 653; i++) {
    await Student.create({
      name: `Siswa ${i}`,
      kelas: `Kelas ${Math.ceil(i/30)}`,
      nis: `NIS${1000+i}`
    });
  }

  for (let i = 1; i <= 108; i++) {
    await Teacher.create({
      name: `Guru ${i}`,
      subject: `Mapel ${i}`
    });
  }

  for (let i = 1; i <= 78; i++) {
    await Staff.create({
      name: `Pengurus ${i}`,
      position: `Jabatan ${i}`
    });
  }

  console.log("✅ Database Seeded");
  process.exit();
}

seed();
