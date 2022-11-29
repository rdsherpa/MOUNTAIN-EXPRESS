const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    name: "Riwa Sherpa",
    email: "sherpariwa@gmail.com",
    password: "password123",
    address: "Los Angeles",
    contact_info: "91827373664",
  },
  {
    name: "Annie S",
    email: "Annie@gamil.com",
    password: "password1234",
    address: "Los Angeles",
    contact_info: "91327373664",
  },
  {
    name: "Julian B",
    email: "Julain@gamil.com",
    password: "password1235",
    address: "Los Angeles",
    contact_info: "91227373664",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
