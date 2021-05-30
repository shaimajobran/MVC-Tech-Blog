const Post = require('./Post');

const User = require('./User');

const Comments = require('./Comments');

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  
  Post.hasMany(Comments, {
      foreignKey: 'post_id',
      onDelete: 'CASCADE'
  });
  
  
  module.exports = {Post, User, Comments};