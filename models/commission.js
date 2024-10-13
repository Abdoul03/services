const { DataTypes } = require('sequelize')
const db = require('../config/db')


const Commissions = db.define('Commissions',
  {
    mom_sevice: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['Canal +', 'WAVE', 'ORANGE MONEY', 'MOBICASH', 'CREDIT ORANGE', 'CREDIT TELECEL', 'SAMA MONEY']],  // Liste des valeurs acceptées
          msg: "Vous ne pouvez chosir que les service proposés",
        }

      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    debit: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    montant: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    sold: {
      type: DataTypes.INTEGE,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Commissions;
