const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Grocery extends Model {}

// Do we need to change file names because Grocery.js is the same in Models and in public JS.


Grocery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'grocery',
  }
);

module.exports = Grocery;
