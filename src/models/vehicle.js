'use strict';
const { Model } = require('sequelize');
const Type = require('../models/type');

module.exports = (sequelize, DataTypes) => {
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