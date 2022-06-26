const { sequelize, Sequelize, DataTypes } = require('../models/index.cjs');
const Register = require('./register.cjs');

const Vehicle = sequelize.define(
  "Vehicle",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    checkInTime: {
      type: DataTypes.DATE
    },
    checkOutTime: {
      type: Sequelize.DATE
    },
    collectMoney: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0.00
    },
    vehicleId: {
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

/*
Vehicle.hasMany(Register, {
  foreinkey: "vehicleId",
  sourceKey: "id",
});
Register.belongsTo(Vehicle, { foreinkey: "vehicleId", targetId: "id" });
*/

module.exports = { Vehicle };

/*
'use strict';
import Sequelize from "sequelize";
//import Type from '../models';
const { sequelize } = require('../models/index.cjs');

console.log(Sequelize)

module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {};

  Vehicle.init({
    licensePlate: DataTypes.STRING,
    typeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehicle',
  });

  //Vehicle.hasMany(Type, { foreignKey: 'typeId'});
  //Type.belongsTo(Vehicle);
  return Vehicle;
};

*/


/*
export default (sequelize, DataTypes) => {
  class Vehicle extends Model {};

  Vehicle.init({
    licensePlate: DataTypes.STRING,
    typeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehicle',
  });

  Vehicle.hasMany(Type, { foreignKey: 'typeId'});
  Type.belongsTo(Vehicle);
  return Vehicle;
};

*/