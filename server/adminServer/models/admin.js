const Sequelize = require('sequelize');
const sequelize = require('../database');

const Admin = sequelize.define('admin', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: { type: Sequelize.STRING, unique: true },
    password: Sequelize.STRING,
   }, {
  timestamps: true, 
  paranoid: true, 
  deletedAt: 'deletedAt' 
});
  

module.exports = Admin;
