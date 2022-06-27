const { sequelize, Sequelize, DataTypes } = require('../models/index.cjs');

const Register = sequelize.define(
  "Register",
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
      type: DataTypes.DATE
    },
    timeInMinutes: {
      type: Sequelize.INTEGER,
      defaultValue: 0.00
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

module.exports = { Register };

/*
'use strict';
import { Model } from 'sequelize';
//import { Vehicle } from'../models/vehicle.js';


module.exports = (sequelize, DataTypes) => {
  class Register extends Model {};

  Register.init({
    checkInTime: DataTypes.DATE,
    checkOutTime: DataTypes.DATE,
    collectMoney: DataTypes.INTEGER,
    vehicleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Register',
  });

  //Register.hasMany(Vehicle, { foreignKey: 'vehicleId'});
  //Vehicle.belongsTo(Register);

  return Register;
};
*/