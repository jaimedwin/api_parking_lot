import { Router } from 'express';
import {
  entryVehicleRecord,
  exitVehicleRecord, 
} from '../controllers/register-vehicle.js';

import {
  createType,
  getTypes,
  getType,
  updateType,
  deleteType
} from '../controllers/type.js';

const router = Router();



router.get('/', (req, res) => {
  res
    .status(300)
    .setHeader('Content-Type', 'text/plain')
    .end('Hello world');
})

router.post("/register-vehicle/", entryVehicleRecord);
router.put("/register-vehicle/:licensePlate", exitVehicleRecord);

router.get("/type/", getTypes)
router.get("/type/:id", getType)
router.post("/type/", createType);
router.put("/type/:id", updateType);
router.delete("/type/:id", deleteType);

export default router;