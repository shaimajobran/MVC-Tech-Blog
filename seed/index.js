const sequelize = require('../config/connection');
 const { User } = require('../models');

  
const seedUsers = require('./userseeds');
const seedPosts = require('./postseeds');
const seedComments = require('./commentseeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();