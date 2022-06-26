import pkg_vehicle from '../models/vehicle.cjs';
import pkg_type from '../models/type.cjs';
const { Vehicle } = pkg_vehicle;
const { Type } = pkg_type;


export async function getVehicles(req, res) {
  try {
    const vehicles = await Vehicle.findAll(
      {
        attributes: ["id", "licensePlate", "typeId"],
        order: [["id", "DESC"]],
        include: [
          {model: Type, as: 'Type'}
        ]
      }
    );
    res.json(vehicles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getVehicle(req, res) {
  const { id } = req.params;
  try {
    const vehicle = await Vehicle.findOne({
      where: { id },
      attributes: ["id", "licensePlate", "typeId", "createdAt", "updatedAt"],
      include: [
        {model: Type, as: 'Type'}
      ]
    });
    res.json(vehicle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function createVehicle(req, res) {
  try {
    const { licensePlate, typeId } = req.body;
    const newVehicle = await Vehicle.create({
      licensePlate,
      typeId,
    });
    res.json(newVehicle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateVehicle(req, res) {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findOne({
      attributes: ["id", "licensePlate", "typeId", "updatedAt"],
      where: { id: id },
    });

    req.body["updatedAt"] = new Date();
    vehicle.set(req.body);

    await vehicle.save();

    res.json(vehicle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteVehicle(req, res) {
  const { id } = req.params;
  try {
    await Vehicle.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

