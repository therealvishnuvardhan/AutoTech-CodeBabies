import Slot from "../models/Slot.js";

export const getAllSlots = async (req, res) => {
  try {
    const slots = await Slot.find();
    res.json(slots);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch slots", error });
  }
};

export const createSlot = async (req, res) => {
  try {
    const { slotNumber, location } = req.body;
    const slot = await Slot.create({ slotNumber, location });
    res.status(201).json({ message: "Slot created successfully", slot });
  } catch (error) {
    res.status(500).json({ message: "Failed to create slot", error });
  }
};