const sequelize = require('../config/connection');
const { User, Project, Grocery, Address } = require('../models');


const userData = require('./userData.json');
const projectData = require('./projectData.json');
const groceryData = require('./groceryData.json');
const addressData = require('./addressData.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const grocery of groceryData) {
    await Grocery.create({
      ...grocery,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const address of addressData) {
    await Address.create({
      ...address,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();


// ?????? IS THIS FORMATTED CORRECTLY