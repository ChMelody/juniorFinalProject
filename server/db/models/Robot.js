const Sequelize = require('sequelize')
const db = require('../database')

module.exports = db.define('robot', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: '/images/r2d2.png'
    },
    fuelType: {
        type: Sequelize.ENUM('gas', 'diesel', 'electric'),
        defaultValue: 'electric'
    },
    fuelLevel: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            min: 0,
            max: 100
        },
        defaultValue: 100
    }
})
