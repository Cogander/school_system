const mongoose = require("mongoose");

module.exports = mongoose.model("Staff", new mongoose.Schema({
  name: String,
  position: String
}));
