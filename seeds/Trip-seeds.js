const { Trip } = require("../models");

const tripdata = [
  {
    nb_passengers: 6,
    user_id: 1,
    car_id: 1,
  },
];

const seedCars = () => Trip.bulkCreate(tripdata);

module.exports = seedCars;
