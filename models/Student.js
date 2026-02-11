const mongoose = require("mongoose");

module.exports = mongoose.model("Student", new mongoose.Schema({
  name: String,
  kelas: String,
  nis: String
}));
