import pkg from '../models/type.cjs';
const { Type } = pkg;

export async function getTypes(req, res) {
  try {
    const types = await Type.findAll({
      attributes: ["id", "title", "costPerMinute"],
      order: [["id", "DESC"]],
    });
    res.json(types);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getType(req, res) {
  const { id } = req.params;
  try {
    const type = await Type.findOne({
      where: { id },
      attributes: ["id", "title", "costPerMinute", "createdAt", "updatedAt"],
    });
    res.json(type);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function createType(req, res) {
  try {
    const { title, costPerMinute } = req.body;
    const newType = await Type.create({
      title,
      costPerMinute,
    });
    res.json(newType);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateType(req, res) {
  try {
    const { id } = req.params;
    const type = await Type.findOne({
      attributes: ["id", "title", "costPerMinute", "updatedAt"],
      where: { id: id },
    });

    console.log(type);
    type.set(req.body);

    await type.save();

    res.json(type);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteType(req, res) {
  const { id } = req.params;
  try {
    await Type.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

