const Sequelize = require('sequelize')
const db = require('../database')

module.exports = db.define('robot', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isNull: {
                msg: 'Robot name cannot be null'
            }
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: '/images/r2d2.png'
    },
    fuelType: {
        type: Sequelize.STRING,
        defaultValue: 'electric'
    },
    fuelLevel: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0,
            max: 100
        },
        defaultValue: 100
    }
})
