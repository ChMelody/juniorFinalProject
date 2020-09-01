const { green, red } = require('chalk');
const { db } = require('./server/db');

const Project = require('./server/db/models/Project')
const Robot = require('./server/db/models/Robot')

// fake data
const robots = [{
  name: 'Terminator',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc31R-FBk8W8uHqASX4SgmSWA_i6xtol4A9w&usqp=CAU',
  fuelType: 'electric',
  fuelLevel: 90.99
}, {
  name: 'SuperDog',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4II4ail5V-cpt6tdmlyVXF_dR19zLYt6gwQ&usqp=CAU',
  fuelType: 'electric',
  fuelLevel: 80.00
}, {
  name: 'BlackPanther',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdwLx2vECwe_iU3dbCLuPnW28Ncz063KZzdw&usqp=CAU',
  fuelType: 'electric',
  fuelLevel: 100
}]

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(robots.map(robot => {
      return Robot.create(robot)
    }))

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
