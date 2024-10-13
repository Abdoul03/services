const { DataTypes } = require('sequelize');
const db = require("../config/db");

const CaisseEntreprises = db.define('CaisseEntreprises',
  {

  },
  {
    timestamps: true,
  }
);

module.exports = CaisseEntreprises;
