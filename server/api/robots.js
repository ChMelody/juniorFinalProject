const router = require('express').Router()
const { Robot } = require('../db/index')

router.get('/', async (req, res, next) => {
    try {
        const robots = await Robot.findAll()
        res.json(robots)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const robot = await Robot.findByPk(req.params.id)
        res.json(robot)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        console.log('testing post: ', req.body)
        const robotFromPost = await Robot.create(req.body)
        res.send(robotFromPost)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id = +req.params.id;
        const robotToDelete = await Robot.findByPk(id)
        await robotToDelete.destroy()
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
})

module.exports = router
