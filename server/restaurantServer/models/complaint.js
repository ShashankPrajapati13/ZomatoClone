const Sequelize = require('sequelize');
const sequelize = require('../database');

const Complaint = sequelize.define('complaint', {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    orderId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    description: Sequelize.TEXT,
    response: Sequelize.TEXT,
    resolved: { type: Sequelize.BOOLEAN, defaultValue: false },
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});

  module.exports = Complaint;
