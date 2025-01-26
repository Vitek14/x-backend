const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('post', {
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
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  reposts_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  views_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  likes_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comments_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Post;
