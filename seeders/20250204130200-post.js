'use strict';

const { Post } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("posts", [
      {
        user_id: 7,
        content: "Hello everybody!",
        image_url: "testurl.com",
        reposts_count: 0,
        comments_count: 0,
        views_count: 1,
        likes_count: 1,
        parent_post_id: null,
        bookmarked: false,
    }
    ]);
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("posts", null, {});
  }
};
