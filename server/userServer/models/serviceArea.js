const Sequelize = require('sequelize');
const sequelize = require('../database');

const ServiceArea = sequelize.define('serviceArea', {
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    geoCoordinates: Sequelize.GEOMETRY('POLYGON'), 
    active: { type: Sequelize.BOOLEAN, defaultValue: true },
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});

  module.exports = ServiceArea;