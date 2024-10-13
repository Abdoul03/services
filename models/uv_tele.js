const { DataTypes } = require('sequelize')
const db = require('../config/db')


const UvAbonnements = db.define('UvAbonnements',
  {
    produit: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['CANAL +', 'MALIVISION']],  // Liste des valeurs acceptées
          msg: "Vous ne pouvez chosir que les service proposés",
        }

      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    montant: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UvAbonnements;
