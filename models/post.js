'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    user_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    image_url: DataTypes.STRING,
    reposts_count: DataTypes.INTEGER,
    comments_count: DataTypes.INTEGER,
    views_count: DataTypes.INTEGER,
    likes_count: DataTypes.INTEGER,
    parent_post_id: DataTypes.INTEGER,
    bookmarked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};