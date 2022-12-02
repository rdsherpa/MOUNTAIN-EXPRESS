const seedUsers = require("./User-seeds");
const seedCars = require("./Car-seeds");
const seedTrips = require("./Trip-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedCars();
  console.log("--------------");

  await seedTrips();
  console.log("--------------");

  process.exit(0);
};

seedAll();
