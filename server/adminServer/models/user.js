const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: { type: Sequelize.STRING, unique: true },
    password: Sequelize.STRING,
    phone: Sequelize.STRING,
    address: Sequelize.STRING,
    profilePhoto: Sequelize.STRING,
    lastLogin: Sequelize.DATE,
    isActive: { type: Sequelize.BOOLEAN, defaultValue: true },
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});
  

module.exports = User;

