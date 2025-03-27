'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostView extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // PostView.belongsTo(models.User, { foreignKey: "id", as: "user" });
      // PostView.belongsTo(models.Post, { foreignKey: "id", as: "post" });
    }
  }
  PostView.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostView',
  });
  return PostView;
};