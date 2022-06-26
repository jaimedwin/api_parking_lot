import { Router } from 'express';

import {
  createType,
  getTypes,
  getType,
  updateType,
  deleteType
} from '../controllers/type.js';

const router = Router();

router.get("/", getTypes)
router.get("/:id", getType)
router.post("/", createType);
router.put("/:id", updateType);
router.delete("/:id", deleteType);

export default router;