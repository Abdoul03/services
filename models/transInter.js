const { DataTypes } = require('sequelize')
const db = require('../config/db')


const TransferExterieur = db.define('TransferExterieur',
  {
    montant_initial: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    sercice: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['WESTERUNION', 'MONEYGRAM', 'RIA']],  // Liste des valeurs acceptées
          msg: "Vous ne pouvez chosir que les service proposés",
        }

      },
    },
    montant_trans: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    montant_reçus: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    date_debit: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_fin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    solde: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    decouvert: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    credit: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    debit_caise: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    debit_bnda: {
      type: DataTypes.INTEGE,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = TransferExterieur;
