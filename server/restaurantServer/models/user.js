const Sequelize = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("user", {
  name: { type: Sequelize.STRING},
  username: { type: Sequelize.STRING, unique: true },
    email: { type: Sequelize.STRING, unique: true },
    password: Sequelize.STRING,
    phone: { type: Sequelize.STRING, unique: true },
    address: Sequelize.STRING,
    profilePhoto: Sequelize.STRING,
    lastLogin: Sequelize.DATE,
    isActive: { type: Sequelize.BOOLEAN, defaultValue: true },
    isSubscription: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    startSubscriptionDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    endSubscriptionDate: {
      type: Sequelize.DATE,
      allowNull: true,
    } 
  },
  {
    timestamps: true,
    paranoid: true,
    deletedAt: "deletedAt",
  }
);

module.exports = User;
