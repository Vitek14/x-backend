'use strict';

const { Follower } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("followers", [
      {
        follower_id: 1,
        following_id: 2,
      },
      {
        follower_id: 3,
        following_id: 2,
      },
      {
        follower_id: 4,
        following_id: 2,
      }
    ]);
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("followers", null, {});
  }
};
