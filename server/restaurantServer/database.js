const Sequelize = require('sequelize');

const sequelize = new Sequelize('zomatoclone', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: true, 
    paranoid: true,
    deletedAt: 'deletedAt' 
}
});

module.exports = sequelize;
