const sequelize = require('../config/database');

// /models/init.js
const User = require('./user');  // Import models
const Post = require('./post');

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();  // Test the database connection
    console.log('Database connection has been established successfully.');

    // Sync models with the database
    await sequelize.sync({ force: false });  // force: true to drop tables and re-sync, force: false to create new ones
    console.log('All models were synchronized successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = initializeDatabase;
