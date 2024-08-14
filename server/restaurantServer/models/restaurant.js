const Sequelize = require('sequelize');
const sequelize = require('../database');
const RestaurantManager = require('./restaurantManager'); 

const Restaurant = sequelize.define('restaurant', {
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: {
      type: Sequelize.STRING,
      unique: true
  },
  ownerName: Sequelize.STRING,
  cuisine: Sequelize.STRING,
  description: Sequelize.TEXT,
  averageCost: Sequelize.FLOAT,
  rating: Sequelize.FLOAT,
  isOpen: Sequelize.BOOLEAN,
  imageUrl: Sequelize.STRING,
  restaurantManagerId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
          model: RestaurantManager,
          key: 'id'
      }
  },
  isSubscription: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
  },
  startSubscriptionDate: {
      type: Sequelize.DATE,
      allowNull: true
  },
  endSubscriptionDate: {
      type: Sequelize.DATE,
      allowNull: true
  }
}, {
  timestamps: true,
  paranoid: true,
  deletedAt: 'deletedAt'
});



module.exports = Restaurant;

  