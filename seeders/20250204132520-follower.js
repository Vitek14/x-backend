'use strict';

const { Follower } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("followers", [
      {
        follower_id: 1,
        following_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    ]);
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("followers", null, {});
  }
};
