const Sequelize = require('sequelize');
const sequelize = require('../database');

const Dish = sequelize.define('dish', {
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'restaurants',
        key: 'id'
      }
    },
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    price: Sequelize.FLOAT,
    imageUrl: Sequelize.STRING,
    available: { type: Sequelize.BOOLEAN, defaultValue: true },
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});

  
  
  module.exports = Dish;

  