const Sequelize = require('sequelize');
const sequelize = require('../database');

const Delivery = sequelize.define('delivery', {
    orderId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    riderId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'riders',
        key: 'id'
      }
    },
    pickedUpTime: Sequelize.DATE,
    deliveryTime: Sequelize.DATE,
    status: Sequelize.ENUM('pending', 'picked up', 'delivered'),
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});
  
  
  module.exports = Delivery;

  