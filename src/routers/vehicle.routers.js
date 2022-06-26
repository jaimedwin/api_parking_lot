import { Router } from 'express';

import {
  createVehicle,
  getVehicles,
  getVehicle,
  updateVehicle,
  deleteVehicle
} from '../controllers/vehicle.js';

const router = Router();

router.get("/", getVehicles)
router.get("/:id", getVehicle)
router.post("/", createVehicle);
router.put("/:id", updateVehicle);
router.delete("/:id", deleteVehicle);

export default router;