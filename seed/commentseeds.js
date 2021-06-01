const { Comment } = require('../models');

const Commentsdata = [
  {
    Comments_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  },

  {
    Comments_text:'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 8,
    post_id: 10
  },
  {
    Comments_text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    post_id: 15
  },
]

const seedComments = () => Comment.bulkCreate(Commentsdata);

module.exports = seedComments;