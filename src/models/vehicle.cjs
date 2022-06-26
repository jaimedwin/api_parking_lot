const { sequelize, Sequelize, DataTypes } = require('../models/index.cjs');
const Register = require('./register.cjs').Register;

const Vehicle = sequelize.define(
  "Vehicles",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    licensePlate: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    typeId: {
      allowNull: false,
      type: DataTypes.INTEGER
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

Vehicle.hasMany(Register, { foreinkey: "id", targetKey: "vehicleId" });
Register.belongsTo(Vehicle, { foreinkey: "vehicleId", targetId: "id" });

module.exports = { Vehicle };
