const Sequelize = require('sequelize');
const sequelize = require('../database');

const Rider = sequelize.define('rider', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: { type: Sequelize.STRING, unique: true },
    password: Sequelize.STRING,
    phone: Sequelize.STRING,
    isAvailable: { type: Sequelize.BOOLEAN, defaultValue: true },
    currentLocation: Sequelize.STRING,
    totalDeliveries: Sequelize.INTEGER,
    rating: Sequelize.FLOAT,
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});
  
  
  module.exports = Rider;
  