'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type extends Model {};

  Type.init({
    title: DataTypes.STRING,
    costPerMinute: DataTypes.DECIMAL(15, 2)
  }, {
    sequelize,
    modelName: 'Type',
  });

  

  return Type;
};