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
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLj3TDBHiTbQYel0FsqfHTzvkNJrnArXeA2g&usqp=CAU'
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
