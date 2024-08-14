const Sequelize = require('sequelize');
const sequelize = require('../database');

const Order = sequelize.define('order', {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'restaurants',
        key: 'id'
      }
    },
    orderTime: Sequelize.DATE,
    totalPrice: Sequelize.FLOAT,
    status: Sequelize.ENUM('pending', 'accepted', 'cooked', 'on the way', 'delivered'),
    paymentMethod: Sequelize.STRING,
    isPaid: { type: Sequelize.BOOLEAN, defaultValue: false },
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});
  
  
  module.exports = Order;
 
  