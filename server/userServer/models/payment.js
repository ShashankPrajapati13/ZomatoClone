const Sequelize = require('sequelize');
const sequelize = require('../database');

const Payment = sequelize.define('payment', {
    orderId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    amount: Sequelize.FLOAT,
    paymentMethod: Sequelize.STRING, 
    status: Sequelize.ENUM('pending', 'completed', 'failed', 'refunded'),
    transactionId: Sequelize.STRING,
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});

  module.exports = Payment;
