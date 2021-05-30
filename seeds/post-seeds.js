const { Post } = require('../models');

const postdata = [
  {
    title: 'JavaScript',
    body : 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros'  ,
    user_id: 10
  },
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
    body: 'Nulla mollis placerat tellus.',
    user_id: 4
  },
  {
    title: 'Mysql',
    body: 'Nulla mollis placerat tellus.',
    user_id: 7
  },
  {
    title: 'Express.js',
    body: 'Nunc ut ornare metus.',
    user_id: 4
  },
  {
    title: 'APIs',
    body: ' Sed tempus massa quis augue bibendum, vitae consectetur tellus imperdiet.',
    user_id: 1
  },
  {
    title: 'HTML',
    body: 'Praesent volutpat a neque et vestibulum.',
    user_id: 1
  },
  {
    title: 'CSS',
    body: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 9
  },
  {
    title: 'Object-Oriented Programming',
    body: 'Ut quam erat, auctor sit amet bibendum ut, posuere ut neque.',
    user_id: 5
  },
  {
    title: 'node Server',
    body: 'Vestibulum bibendum libero at mi euismod, et tincidunt arcu maximus.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    body: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    body: 'Aliquam nibh nibh, sagittis quis est sed, pellentesque finibus nisl.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    body: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    body: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    body: 'Etiam accumsan tincidunt consectetur.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    body: 'In ac suscipit turpis.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    body: 'Nulla facilisi.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    body: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;