// importing all models
const Car = require("./Car");
const User = require("./User");
const Trips = require("./Trips");
const Passanger = require("./Passanger");

// creating associations
User.hasMany(Trips, {
  foreignKey: "user_id",
});

Trips.beongs(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Car.belongs(Passanger, {
  foreignKey: "passanger_id",
  onDelete: "SET NUll",
});
Passanger.hasMany(Trips, {
  foreignKey: "passanger_id",
  onDelete: "SET NULL",
});

module.exports = { Car, User, Trips, Passanger };
