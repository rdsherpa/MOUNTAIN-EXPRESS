const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nb_passengers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    car_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "car",
        key: "id",
      },

      // ADD MODEL OF THE CAR
    },
    // travelling from and travelling to
    destination: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "trip",
  }
);

module.exports = Trip;
