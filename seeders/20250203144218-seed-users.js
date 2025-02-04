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
      },
      {
        first_name: 'Jane',
        last_name: "Smith",
        user_name: "jane_smith",
        joined_date: "25-02-2025",
        website: "janesmith.com",
        description: "Jane's blog",
        avatar_url: "https://www.janesmith.com/favicon.ico",
        banner_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/JaneSmith_logo.svg/1024px-JaneSmith_logo.svg.png",
        workplace: "exampleCorp",
        location: "Mars",
        birthdate: "15-05-2000",
        email: 'jane@example.com',
        password: await User.generatePassword("5678")
      },
      {
        first_name: 'Alice',
        last_name: "Johnson",
        user_name: "alice_johnson",
        joined_date: "26-02-2025",
        website: "alicejohnson.com",
        description: "Tech reviews",
        avatar_url: "https://www.alicejohnson.com/favicon.ico",
        banner_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/AliceJohnson_logo.svg/1024px-AliceJohnson_logo.svg.png",
        workplace: "techcorp",
        location: "Venus",
        birthdate: "10-10-1995",
        email: 'alice@example.com',
        password: await User.generatePassword("91011")
      },
      {
        first_name: 'Bob',
        last_name: "Brown",
        user_name: "bob_brown",
        joined_date: "27-02-2025",
        website: "bobbrown.com",
        description: "Bob's portfolio",
        avatar_url: "https://www.bobbrown.com/favicon.ico",
        banner_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/BobBrown_logo.svg/1024px-BobBrown_logo.svg.png",
        workplace: "creativeagency",
        location: "Jupiter",
        birthdate: "05-09-1992",
        email: 'bob@example.com',
        password: await User.generatePassword("1213")
      }

    ]);
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  }
};
