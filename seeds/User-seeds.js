const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "rdsherpa",
    email: "sherpariwa@gmail.com",
    password: "password123",
  },
  {
    username: "AnnieS",
    email: "Annie@gamil.com",
    password: "password1234",
  },
  {
    username: "Julian",
    email: "Julain@gamil.com",
    password: "password1235",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
