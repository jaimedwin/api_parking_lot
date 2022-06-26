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

console.log("Dato1FromType: ", Vehicle);
console.log("Dato2FromType: ", Type);

Type.hasMany(Vehicle, { foreinkey: "id", targetKey: "typeId" });
Vehicle.belongsTo(Type, { foreinkey: "typeId", targetId: "id" });

/*
Type.belongsTo(Vehicle, { foreinkey: "typeId", targetKey: "id" });

/*
Vehicle.belongsTo(Type, { foreinkey: "typeId", targetId: "id" });
Type.hasMany(Vehicle, {
  foreinkey: "typeId",
  sourceKey: "id",
});
*/

module.exports = { Type };

/*
'use strict';
import { DataTypes, Model } from 'sequelize';


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
*/