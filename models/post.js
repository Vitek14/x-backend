const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('posts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  reposts_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  comments_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  views_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  likes_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  parent_post_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bookmarked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, {
  timestamps: false,
});

// Хук для установки parent_post_id равным id
Post.beforeCreate((post) => {
  if (!post.parent_post_id) {
    post.parent_post_id = post.id; // Устанавливаем parent_post_id равным id
  }
});

module.exports = Post;
