const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Follower = sequelize.define('followers', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  follower_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  following_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  timestamps: false,
});

module.exports = Follower;
