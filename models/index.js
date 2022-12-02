// importing all models
const Car = require("./Car");
const User = require("./User");
const Trip = require("./Trip");

// creating associations
User.hasMany(Trip, {
  foreignKey: "user_id",
});

Trip.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Car.hasMany(Trip, {
  foreignKey: "car_id",
});

Trip.belongsTo(Car, {
  foreignKey: "car_id",
  onDelete: "SET NULL",
});

module.exports = { Car, User, Trip };
