const { User } = require('../models');

const userData =
    [
        {
            username: 'shaima22',
            password: 'passcode123'
        },
        {
            username: 'ruslana',
            password: 'passcode123'
        },
        {
            username: 'juliele',
            password: 'passcode123'
        }
    ];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;