const Sequelize = require('sequelize');
const sequelize = require('../database');

const Promotion = sequelize.define('promotion', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    discountPercent: Sequelize.FLOAT,
    startDate: Sequelize.DATE,
    endDate: Sequelize.DATE,
    active: { type: Sequelize.BOOLEAN, defaultValue: true },
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'restaurants',
        key: 'id'
      },
      allowNull: true 
    },
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});

  module.exports = Promotion;
