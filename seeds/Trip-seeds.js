const { Trip } = require("../models");

const tripdata = [
  {
    id: "passanger id",
    nb_passangers: "6",
    user_id: "92817A",
    car_id: "72726B",
  },
];

const seedCars = () => Trip.bulkCreate(tripdata);

module.exports = seedCars;
