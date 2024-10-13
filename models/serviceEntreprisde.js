const { DataTypes } = require('sequelize')
const db = require('../config/db')


const serviceEntreprises = db.define('serviceEntreprises',
  {
    nom_service: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        isIn: {
          args: [['CANAL +', 'DECODEUR CANAL +', 'MALIVISION', 'WAVE MONEY', 'CREDIT ENTREPRISE', 'ORANGE PERSONNEL',
            'UV ORANGE MONEY', 'MOBI CASH', 'CREDIT ORANGE', 'TELECEL', 'SEWA CREDIT', 'SAMA MONEY', 'W-MG-RIA'
          ]],  // Liste des valeurs acceptées
          msg: "Vous ne pouvez chosir que les service proposés",
        }

      },
    },
    solde_a_nouveau: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    credit: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGE,
      allowNull: false,
    },
    soldes: {
      type: DataTypes.INTEGE,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = serviceEntreprises;
