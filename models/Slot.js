import mongoose from "mongoose";

const slotSchema = new mongoose.Schema(
  {
    slotNumber: { type: String, required: true },
    location: { type: String, required: true },
    isBooked: { type: Boolean, default: false },
    vehicleTypeAllowed: {
      type: String,
      enum: ["Car", "Bike", "EV", "Truck", "Any"],
      default: "Any",
    },
    level: { type: String, default: "" },
  },
  { timestamps: true }
);

const Slot = mongoose.model("Slot", slotSchema);
export default Slot;