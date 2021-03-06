// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Project = require('./models/Project')
const Robot = require('./models/Robot')

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

Project.belongsToMany(Robot, {through: 'projectId'})
Robot.belongsToMany(Project, {through: 'robotId'})

// Project.belongsTo(Robot)
// Project.hasMany(Robot)

// Robot.belongsTo(Project)
// Robot.hasMany(Project)

module.exports = {
  db,
  Project,
  Robot,
}
