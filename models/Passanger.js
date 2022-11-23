const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Passanger extends Model {}

Passanger.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Passanger_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    Trips: {
      type: DataTypes.INTEGER,
      references: {
        model: "trips",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "passanger",
  }
);

module.exports = Passanger;
