import pkg_register from '../models/register.cjs';
import pkg_vehicle from '../models/vehicle.cjs';
import pkg_type from '../models/type.cjs';
import pkg from '../models/index.cjs';
import { jsPDF } from "jspdf";
const { sequelize } = pkg
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

    const exitRegister = await Register.findOne({
      attributes: ["id", "checkInTime", "checkOutTime", "collectMoney", "vehicleId"],
      required: true,
      where: {"checkOutTime": null },
      order: [["id", "ASC"]],
      include: [
        { 
          model: Vehicle, 
          as: 'Vehicle', 
          attributes: ["id", "licensePlate", "typeId"],
          required: true,
          where: { "licensePlate": licensePlate },
          include: [
            { 
              model: Type, as: 'Type',
              attributes: ["id", "title", "costPerMinute"],
            }
          ]
        },
      ]
    });

    if (exitRegister === null)
      return res.status(400).json({ message: "error" });

    // Se calcula las diferencias en minutos para generar el cobro
    const checkOutTime  = new Date();
    const checkInTime   = exitRegister.checkInTime;
    const costPerMinute = exitRegister.Vehicle.Type.costPerMinute;
    const timeInMinutes = Math.round((checkOutTime.getTime() - checkInTime.getTime()) / (1000 * 60));
    const collectMoney  = timeInMinutes * costPerMinute;
    const vehicleId     = exitRegister.Vehicle.id;

    const registerVehicle = {
      checkOutTime: checkOutTime,
      timeInMinutes: timeInMinutes,
      collectMoney: collectMoney,
      vehicleId:    vehicleId,
      updatedAt:    checkOutTime
    }

    exitRegister.set(registerVehicle);

    await exitRegister.save();

    res.json(exitRegister);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  return res.status(200);
}

async function registerVehicle(req, res, typeVehicle){
  try {
    const { licensePlate } = req.body;

    const type = await Type.findOne({
      attributes: ["id", "title"],
      where: { "title": typeVehicle },
    });

    if (type === null)
      return res.status(400).json({ message: "error" });;
    const typeId = type.id;

    const newVehicle = await Vehicle.create({
      licensePlate: licensePlate,
      typeId: typeId
    });

    return res.json(newVehicle);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export function registerOfficialVehicle(req, res) {
  return registerVehicle(req, res, "Oficial");
}

export async function registerResidentVehicle(req, res) {
  return registerVehicle(req, res, "Residente");
}


export async function startMonth(req, res) {
  try{
    const register1 = await Register.findAll({
      attributes: ["id", "checkInTime", "checkOutTime", "collectMoney", "vehicleId"],
      required: true,
      include: [
        { 
          model: Vehicle, 
          as: 'Vehicle', 
          attributes: ["id", "licensePlate", "typeId"],
          required: true,
          include: [
            { 
              model: Type, as: 'Type',
              attributes: ["id", "title", "costPerMinute"],
              where: { "title": "Oficial" },
            }
          ]
        },
      ]
    });

    
    const register2 = await Register.findAll({
      attributes: [
        "vehicleId",
        [sequelize.fn('sum', sequelize.col('collectMoney')), 'totalCollectMoney'],
        [sequelize.fn('sum', sequelize.col('timeInMinutes')), 'parkerTimes']
      ],
      required: true,
      include: [
        { 
          model: Vehicle, 
          as: 'Vehicle', 
          attributes: ["licensePlate"],
          required: true,
          include: [
            { 
              model: Type, as: 'Type',
              attributes: ["title"],
              where: { "title": "Residente" },
            }
          ]
          
        },
      ],
      group : ['vehicleId'],
      raw: true
    });
    

    //const r = JSON.stringify(register);
    //r.filter(obj => obj.value == "true")

    res.json(register2);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export async function residentPayments(req, res) {
  try{
    const { nameFile } = req.body;
    const register = await Register.findAll({
      attributes: [
        [sequelize.fn('sum', sequelize.col('collectMoney')), 'totalCollectMoney'],
        [sequelize.fn('sum', sequelize.col('timeInMinutes')), 'parkerTimes']
      ],
      required: true,
      include: [
        { 
          model: Vehicle, 
          as: 'Vehicle', 
          attributes: ["licensePlate"],
          required: true,
          include: [
            { 
              model: Type, as: 'Type',
              attributes: [],
              where: { "title": "Residente" },
            }
          ]
          
        },
      ],
      group : ['vehicleId'],
      raw: true
    });

    const doc = new jsPDF();
    
    doc.text(JSON.stringify(register, null, 4), 10, 10);
    
    res.contentType("application/pdf");
    res.send(doc.output());

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}