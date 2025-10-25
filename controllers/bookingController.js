import Booking from "../models/Booking.js";
import QRCode from "qrcode";

// Create Booking
export const createBooking = async (req, res) => {
  const { vehicleType, location, slot, startTime, endTime, paymentMode } = req.body;
  try {
    const bookingData = { vehicleType, location, slot, startTime, endTime, paymentMode, user: req.user._id };
    const qrData = JSON.stringify(bookingData);
    const qrCodeData = await QRCode.toDataURL(qrData);

    const booking = await Booking.create({ ...bookingData, qrCodeData });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all bookings
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};