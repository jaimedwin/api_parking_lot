
import { createRequire } from 'module'
const require = createRequire(import.meta.url);
//import Register from "../models/register.js";
//import Vehicle from "../models";
const { sequelize } = require('../models/index.cjs');
const Vehicle = require('../models/vehicle.cjs');



export async function entryVehicleRecord(req, res) {
  try {
    const { licensePlate } = req.body;

    console.log(Vehicle)
    console.log(Register)
    //console.log(sequelize)
    //Vehicle.create({licensePlate: licensePlate, typeId: 1});
    const vehicle = await Vehicle.findOne({
      attributes: ["id", "typeId", "licensePlate"],
      where: { "licensePlate": licensePlate },
    });
    

    /*
    const newRegister = await Register.create({
      checkInTime,
      checkOutTime,
      vehicle.id
    });
    return res.json(newRegister);
    */
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function exitVehicleRecord(req, res) {
  return res.status(200);
}

/*
export async function createTask(req, res) {
    try {
      const { name, done, projectId } = req.body;
      const newTask = await Task.create({
        projectId,
        name,
        done,
      });
      res.json(newTask);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  export async function updateTask(req, res) {
    const { id } = req.params;
    // const { projectid, name, done } = req.body;
    try {
      // const updatedTask = await Task.update(
      //   { name, done, projectid },
      //   { where: { id } }
      // );
  
      const task = await Task.findOne({
        attributes: ["name", "projectId", "done", "id"],
        where: { id },
      });
  
      task.set(req.body);
  
      await task.save();
  
      res.json(task);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

*/