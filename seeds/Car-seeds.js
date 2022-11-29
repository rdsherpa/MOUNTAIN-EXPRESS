const { Car } = require("../models");

const cardata = [
  {
    make: "subarban",
    description: "large vehicle",
    no_space: "6",
  },
];

const seedCars = () => Car.bulkCreate(cardata);

module.exports = seedCars;
