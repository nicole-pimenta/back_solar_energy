const mongoose = require("mongoose");

const CalculateSchema = new mongoose.Schema({
  energy: { type: Number, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
});

const Calculate = mongoose.model("Calculate", CalculateSchema);

module.exports = Calculate;
