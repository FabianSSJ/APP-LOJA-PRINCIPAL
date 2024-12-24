const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connect');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idneighborhood: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true, // Habilita `createdAt` y `updatedAt`
  createdAt: 'createdAt', // Usa los nombres predeterminados
  updatedAt: 'updatedAt',
});

module.exports = User;
