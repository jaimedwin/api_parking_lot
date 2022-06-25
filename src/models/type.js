'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type extends Model {};

  Type.init({
    costPerMinute: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type',
  });

  

  return Type;
};