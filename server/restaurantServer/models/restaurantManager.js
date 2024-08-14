const { Sequelize, sequelize } = require('../database/database');
const bcrypt = require('bcryptjs');
const User = require('./user');

const RestaurantManager = sequelize.define('RestaurantManager', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: { 
        type: Sequelize.STRING, 
        unique: true 
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: { 
        type: Sequelize.STRING, 
        unique: true,
        allowNull: true 
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    dob: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    profileImageUrl: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastLogin: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    hooks: {
        beforeCreate: async (manager) => {
            const salt = await bcrypt.genSalt(10);
            manager.password = await bcrypt.hash(manager.password, salt);
        }
    },
    timestamps: true,
    paranoid: true
});


module.exports = RestaurantManager;
