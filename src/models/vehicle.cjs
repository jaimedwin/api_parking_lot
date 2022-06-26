const { sequelize, Sequelize, DataTypes } = require('../models/index.cjs');
//const Type = require('./type.cjs').Type;
//const Type = require('./type.cjs');

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

/*
console.log("Dato1FromVehicle: ", Vehicle);
console.log("Dato2FromVehicle: ", Type);

Vehicle.hasMany(Type, {
  foreinkey: "id",
  targetKey: "typeId",
});

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