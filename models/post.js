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
      // Post.belongsTo(models.User, { targetKey: 'id', foreignKey: "user_id"});
      Post.belongsTo(models.User, { targetKey: 'id', foreignKey: "user_id", as: "user" });
      Post.hasMany(models.Comment, { foreignKey: "post_id", as: "comments" });
      // define association here
    }
  }
  Post.init({
    user_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    image_url: DataTypes.TEXT,
    reposts_count: DataTypes.INTEGER,
    comments_count: DataTypes.INTEGER,
    views_count: DataTypes.INTEGER,
    likes_count: DataTypes.INTEGER,
    parent_post_id: DataTypes.INTEGER,
    bookmarked: DataTypes.BOOLEAN,
    // user: {
    //   type:DataTypes.VIRTUAL,
    //   get() {
    //     if (!this.user_id || !this.user) return false;
    //     return this.user;
    //   }
    // }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};