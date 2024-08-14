const Sequelize = require('sequelize');
const sequelize = require('../database');

const Review = sequelize.define('review', {
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
    dishId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'dishes',
        key: 'id'
      }
    },
    rating: Sequelize.INTEGER,
    comment: Sequelize.TEXT,
    photoUrl: Sequelize.STRING,
    reviewDate: Sequelize.DATE,
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});

  module.exports = Review;
