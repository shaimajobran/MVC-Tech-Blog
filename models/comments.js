const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Commentss extends Model {}

Commentss.init(
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize
    }
  );
  
  module.exports = Commentss;