'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("logins", [
      {
        user_id: 2,
        browser: "Firefox",
        ip: "127.0.0.1",
      },
      {
        user_id: 2,
        browser: "Chrome",
        ip: "127.0.0.1"
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
