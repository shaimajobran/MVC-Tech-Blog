const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(

    {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
  
    },
  
    {
      sequelize
    }
  );

module.exports = Post;