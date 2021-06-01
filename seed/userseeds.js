const { User } = require('../models');

const userData =
    [
        {
            username: 'shaima22',
            email:'shaima@gmail.com',
            password: 'passcode123'
        },
        {
            username: 'ruslana',
            email:'ruslana@gmail.com',
            password: 'passcode123'
        },
        {
            username: 'juliele',
            email:'jele@yahoo.com',
            password: 'passcode123'
        }
    ];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;