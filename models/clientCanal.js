const { DataTypes } = require('sequelize');
const db = require("../config/db");

const ClientCanals = db.define('ClientCanal',
  {
    // Model attributes are defined here
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    num_tel: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    num_abonnee: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_fin_abonnée: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      // allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      // allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = ClientCanals;
