const { Sequelize } = require("sequelize");


const db = new Sequelize('fayaService', 'root', '@tuwindi2024', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = db;
