import {Router } from "express";
import {createAlert,getAlerts} from "../controllers/alertsController";

const router = Router();

// Create a new alert in controller.ts
router.post("/", createAlert);

// Get all alerts it is in the controller.ts
router.get("/", getAlerts);

// Get alert history for a specific symbol

export default router;