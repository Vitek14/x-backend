'use strict';

const {User} = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("notifications", [
      {
        user_id: 2,
        type: "Login",
        parent_id: 1,
        created_at: "2025-02-12",
      },
      {
        user_id: 2,
        type: "Login",
        parent_id: 2,
        created_at: new Date(),
      }
      ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
