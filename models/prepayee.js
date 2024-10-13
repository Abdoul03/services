const { DataTypes } = require('sequelize')
const db = require('../config/db')


const Prepayees = db.define('Prepayees',
  {
    nom_client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    montant_initial: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    montant_depense: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    montant_restant: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Prepayees;
