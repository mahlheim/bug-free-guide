const seedPosts = require('./postSeeds');
const seedUsers = require('./userSeeds');
const seedComments = require('./commentSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();
  
  await seedPosts();

  await seedComments();
    console.log('\n----- DATABASE SEEDED -----\n');

  process.exit(0);
};

seedAll();