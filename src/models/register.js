'use strict';
const { Model } = require('sequelize');
const Vehicle = require('../models/vehicle');

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

  Register.hasMany(Vehicle, { foreignKey: 'vehicleId'});
  Vehicle.belongsTo(Register);

  return Register;
};