import mongoose from "mongoose";

const CalculateSchema = new mongoose.Schema({
  solarPanelQuantity: { type: Number, required: true },
  microinverterQuantity: { type: Number, required: true },
  solarPanelLength: { type: Number, required: true },
  availableArea: { type: Number, required: true },
});

const Calculate = mongoose.model("Calculate", CalculateSchema);

export default Calculate;
