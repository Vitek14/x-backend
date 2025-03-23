'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("comments", [
      {
        user_id: 2,
        post_id: 1,
        content: "Wampus already waiting you here!"
      },
      {
        user_id: 1,
        post_id: 1,
        content: "I'm want to play with Wampus 👀"
      },
      {
        user_id: 1,
        post_id: 12,
        content: "Test..."
      },
      {
        user_id: 7,
        post_id: 12,
        content: "Русские есть?"
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
