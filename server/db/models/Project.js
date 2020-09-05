const Sequelize = require('sequelize')
const db = require('../database')

const Project = db.define('project', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true }
    },
    deadline: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(`NOW() + INTERVAL '1h'`)
    },
    priority: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 10
        },
        defaultValue: 5
    },
    completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    description: {
        type: Sequelize.TEXT,
        defaultValue: '*** no description was provided ***'
    }
})

// Project.assignedRobot = function () {
//     return this.getRobot() ? this.getRobot() : console.log('No robot is assigned to this project')
// }

module.exports  = Project
