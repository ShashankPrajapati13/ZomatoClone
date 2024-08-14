const Sequelize = require('sequelize');
const sequelize = require('../database');

const Restaurant = sequelize.define('restaurant', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: { type: Sequelize.STRING, unique: true },
    ownerName: Sequelize.STRING,
    cuisine: Sequelize.STRING,
    description: Sequelize.TEXT,
    averageCost: Sequelize.FLOAT,
    rating: Sequelize.FLOAT,
    isOpen: Sequelize.BOOLEAN,
    imageUrl: Sequelize.STRING,
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});
  
  module.exports = Restaurant;
  