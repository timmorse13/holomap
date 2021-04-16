const sequelize = require('../config/connection');

const { Planets, Characters } = require('../models');

// const userData = require('./userData.json');

const planetData = require('./planetData.json');

const characterData = require('./characterData.json');


const seedDatabase = async () => {

  await sequelize.sync({ force: false });

//   const users = await User.bulkCreate(userData, {

//     individualHooks: true,

//     returning: true,

//   });

    // const characters = await Characters.bulkCreate(characterData);

//   const planets = await Planets.bulkCreate(planetData);

  



  process.exit(0);
  
};

seedDatabase();