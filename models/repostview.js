'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RepostView extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RepostView.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RepostView',
  });
  return RepostView;
};