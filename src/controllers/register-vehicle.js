
//import { createRequire } from 'module'
//const require = createRequire(import.meta.url);
//const { sequelize } = require('../models/index.cjs');
//const Vehicle = require('../models/vehicle.cjs');

import pkg_register from '../models/register.cjs';
import pkg_vehicle from '../models/vehicle.cjs';
import pkg_type from '../models/type.cjs';
const { Register } = pkg_register;
const { Vehicle } = pkg_vehicle;
const { Type } = pkg_type;


export async function entryVehicleRecord(req, res) {
  try {
    const { licensePlate } = req.body;

    const vehicle = await Vehicle.findOne({
      attributes: ["id", "typeId", "licensePlate"],
      where: { "licensePlate": licensePlate },
    });

    const vehicleId = vehicle.id;
    if (!vehicle.id) return null;
    const checkInTime = new Date();

    const newRegister = await Register.create({
      checkInTime,
      vehicleId
    });

    return res.json(newRegister);
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function exitVehicleRecord(req, res) {
  try {
    const { licensePlate } = req.body;
    console.log(licensePlate);

    const vehicle = await Vehicle.findOne({
      attributes: ["id", "licensePlate"],
      where: { "licensePlate": licensePlate },
      include: [
        {model: Type, as: 'Type'}
      ]
    });

    if (vehicle === null) 
      return res.status(400).json({ message: "error"});;
    const vehicleId = vehicle.id;
    
    const register = await Register.findOne({
      attributes: ["id", "checkInTime"],
      where: { "vehicleId": vehicleId, "checkOutTime": null },
    })
    
    if (register === null) 
      return res.status(400).json({ message: "error" });;

    // Se calcula las diferencias en minutos para generar el cobro
    const checkOutTime  =  new Date();
    const checkInTime   = register.checkInTime;
    const diff          = (checkOutTime.getTime() - checkInTime.getTime())/(1000*60);
    const collectMoney  = Math.round(diff) * vehicle.Type.costPerMinute;

    const registerVehicle = {
      checkOutTime: checkOutTime,
      collectMoney: collectMoney,
      vehicleId: vehicleId,
      updatedAt: checkOutTime
    }

    register.set(registerVehicle);

    await register.save();

    res.json(registerVehicle);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  return res.status(200);
}
