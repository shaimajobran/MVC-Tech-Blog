const { Post } = require('../models');

const postdata = [

  {
    title: 'Node.js',
    body: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    user_id: 8
  },
  {
    title: 'MVC',
    body: 'Quisque nisi ante, auctor sed ex quis, consectetur tempor lacus.',
    user_id: 1
  },


  {
    title: 'ORM',
    body: 'Nulla ut erat id mauris vulputate elementum.',
    user_id: 6
  },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;