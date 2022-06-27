import { Router } from 'express';
import {
  entryVehicleRecord,
  exitVehicleRecord, 
  registerOfficialVehicle,
  registerResidentVehicle,
  startMonth,
  residentPayments
} from '../controllers/register-vehicle.js';

const router = Router();

router.post("/entry-vehicle-record/", entryVehicleRecord);
router.put("/exit-vehicle-record/", exitVehicleRecord);
router.post("/register-official-vehicle/", registerOfficialVehicle);
router.post("/register-resident-vehicle/", registerResidentVehicle);
router.get("/start-month/", startMonth);
router.get("/resident-payments/", residentPayments);

export default router;