import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    vehicleType: {
      type: String,
      required: true,
      enum: ["Car", "Bike", "EV", "Truck"],
    },
    location: { type: String, required: true },
    slot: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    paymentMode: {
      type: String,
      required: true,
      enum: ["UPI", "Card", "NetBanking"],
    },
    qrCodeData: { type: String },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;