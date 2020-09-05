const Sequelize = require('sequelize')
const db = require('../database')

module.exports = db.define('project', {
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
        defaultValue: '* No description was provided *'
    }
})

