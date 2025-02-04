'use strict';

const { User } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("users", [
      {
      first_name: 'John',
      last_name: "Doe",
      user_name: "john_doe",
      joined_date: "24-02-2025",
      website: "johndoe.com",
      description: "Johndoe.com",
      avatar_url: "https://www.deepseek.com/favicon.ico",
      banner_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepSeek_logo.svg/1024px-DeepSeek_logo.svg.png",
      workplace: "deepseek",
      location: "Earth",
      birthdate: "20-02-1999",
      email: 'john@example.com',
      password: await User.generatePassword("1234")
    }
    ]);
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  }
};
