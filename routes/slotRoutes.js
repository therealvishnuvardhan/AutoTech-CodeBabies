import express from "express";
import { getAllSlots, createSlot } from "../controllers/slotController.js";

const router = express.Router();

router.get("/", getAllSlots);
router.post("/", createSlot);

export default router;