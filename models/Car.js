const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// Creating our Car model
class Car extends Model {}

// Creating fields/columns for Car model
Car.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // no of people the car can fit
    no_space: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "car",
  }
);

module.exports = Car;
