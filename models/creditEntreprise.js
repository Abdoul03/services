const { DataTypes } = require('sequelize')
const db = require('../config/db')


const CreditEntreprises = db.define('CreditEntreprises',
  {
    nom_client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    motif: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    montant: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    montant_paye: {
      type: DataTypes.INTEGE,
      allowNull: true,
    },
    montant_restant: {
      type: DataTypes.INTEGE,
      allowNull: true,
    },
    sold: {
      type: DataTypes.INTEGE,
      allowNull: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = CreditEntreprises;
