'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async generatePassword(password) {
      return await bcrypt.hash(password, bcrypt.genSaltSync(8));
    }

    // I don't tested this func, use carefully
    async validatePassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }


  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    joined_date: DataTypes.DATE,
    website: DataTypes.STRING,
    description: DataTypes.TEXT,
    avatar_url: DataTypes.STRING,
    banner_url: DataTypes.STRING,
    workplace: DataTypes.STRING,
    location: DataTypes.STRING,
    followers_count: DataTypes.INTEGER,
    following_count: DataTypes.INTEGER,
    posts_count: DataTypes.INTEGER,
    verified: DataTypes.BOOLEAN,
    birthdate: DataTypes.DATE,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};