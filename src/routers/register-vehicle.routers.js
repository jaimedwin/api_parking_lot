import { Router } from 'express';
import {
  entryVehicleRecord,
  exitVehicleRecord, 
} from '../controllers/register-vehicle.js';

const router = Router();

router.post("/", entryVehicleRecord);
router.put("/:licensePlate", exitVehicleRecord);

export default router;