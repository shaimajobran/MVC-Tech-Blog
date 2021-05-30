const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = 
[
  {
    username: 'shaima22',
    password: 'passcode123'
},
{
    username: 'ryank',
    password: 'passcode123'
},
{
    username: 'medj',
    password: 'passcode123'
},
{
    username: 'colenorcio',
    password: 'passcode123'
},
{
    username: 'robertwyatt',
    password: 'passcode123'
},
{
    username: 'ruslana',
    password: 'passcode123'
},
{
    username: 'kylelopez',
    password: 'passcode123'
},
{
    username: 'ayia',
    password: 'passcode123'
},
{
    username: 'madisonbull',
    password: 'passcode123'
},
{
    username: 'juliele',
    password: 'passcode123'
}
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;