const Sequelize = require('sequelize');
const sequelize = require('../database');

const Location = sequelize.define('location', {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT,
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});

  module.exports = Location;
 
  