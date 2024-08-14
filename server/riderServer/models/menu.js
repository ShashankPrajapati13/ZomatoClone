const Sequelize = require('sequelize');
const sequelize = require('../database');

const Menu = sequelize.define('menu', {
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'restaurants',
        key: 'id'
      }
    },
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    active: { type: Sequelize.BOOLEAN, defaultValue: true },
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});

  module.exports = Menu;
 