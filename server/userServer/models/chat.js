const Sequelize = require('sequelize');
const sequelize = require('../database');

const Chat = sequelize.define('chat', {
    senderId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    receiverId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    message: Sequelize.TEXT,
    messageType: Sequelize.ENUM('text', 'image'),
    readStatus: { type: Sequelize.BOOLEAN, defaultValue: false },
    timestamp: Sequelize.DATE
  });

  module.exports = Chat;


  