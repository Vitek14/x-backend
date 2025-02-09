'use strict';

const { Post } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("posts", [
      {
        id: 1,
        user_id: 2,
        content: "Now Available: Join Discord Voice Chat Directly From Your Xbox!",
        image_url: "https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/62d0746010f70706d1341f68_image3.png",
        reposts_count: 1,
        comments_count: 0,
        views_count: 1,
        likes_count: 1,
        parent_post_id: null,
        bookmarked: false,
      },
      {
        id: 2,
        user_id: 2,
        content: "Now Available: Join Discord Voice Chat Directly From Your Xbox!",
        image_url: "https://cdn.prod.website-files.com/5f9072399b2640f14d6a2bf4/62d0746010f70706d1341f68_image3.png",
        reposts_count: 1,
        comments_count: 0,
        views_count: 1,
        likes_count: 1,
        parent_post_id: 1,
        bookmarked: false,
      },
      {
        id: 3,
        user_id: 4,
        content: "Have a nice day!",
        image_url: "https://cdn.sanity.io/images/cq7w2e71/production/eb8b3a7c228cd611bf8a0925cdac0987cc4f006a-1200x800.jpg",
        reposts_count: 1,
        comments_count: 0,
        views_count: 1,
        likes_count: 1,
        parent_post_id: null,
        bookmarked: false,
      },
      {
        id: 4,
        user_id: 4,
        content: "Have a nice day!",
        image_url: "https://cdn.sanity.io/images/cq7w2e71/production/eb8b3a7c228cd611bf8a0925cdac0987cc4f006a-1200x800.jpg",
        reposts_count: 1,
        comments_count: 0,
        views_count: 1,
        likes_count: 1,
        parent_post_id: 3,
        bookmarked: false,
      },
      {
        id: 6,
        user_id: 5,
        content: "Hello world",
        reposts_count: 0,
        comments_count: 0,
        views_count: 1,
        likes_count: 1,
        parent_post_id: null,
        bookmarked: false,
      },
      {
        id: 7,
        user_id: 5,
        content: "If ... then ....",
        image_url: "https://blogger.googleusercontent.com/img/a/AVvXsEjk0zReNuF0d2FReAWYUGo6pU69lNO-yCYqJRbQT2qgx2AzUN7bnu0BKLWMtZLlAaFM9Y_3b_Ecb9eEbzgdz-9MmoBVUFvwLgLBOfZu1vAlU7wFauiutYNQrDLaNwQQIO4WY1zD3z02qaKRVhQddIt77QsZ9Zb874ifbGO4GcyqHrpCpHcwAK8pgSGu=w1200-h630-p-k-no-nu",
        reposts_count: 0,
        comments_count: 0,
        views_count: 1,
        likes_count: 1,
        parent_post_id: null,
        bookmarked: false,
      },
      {
        id: 8,
        user_id: 6,
        content: "meow",
        image_url: "https://blogger.googleusercontent.com/img/a/AVvXsEjk0zReNuF0d2FReAWYUGo6pU69lNO-yCYqJRbQT2qgx2AzUN7bnu0BKLWMtZLlAaFM9Y_3b_Ecb9eEbzgdz-9MmoBVUFvwLgLBOfZu1vAlU7wFauiutYNQrDLaNwQQIO4WY1zD3z02qaKRVhQddIt77QsZ9Zb874ifbGO4GcyqHrpCpHcwAK8pgSGu=w1200-h630-p-k-no-nu",
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
