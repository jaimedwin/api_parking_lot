const { sequelize, Sequelize, DataTypes} = require('../models/index.cjs');
const Vehicle = require('./vehicle.cjs').Vehicle;

const Type = sequelize.define(
  "Types",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    costPerMinute: {
      allowNull: false,
      type: DataTypes.DECIMAL(15, 2)
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  },
  {
    timestamps: false,
  }
);

Type.hasMany(Vehicle, { foreinkey: "id", targetKey: "typeId" });
Vehicle.belongsTo(Type, { foreinkey: "typeId", targetId: "id" });

module.exports = { Type };
