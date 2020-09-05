const router = require('express').Router()
const { Project } = require('../db/index')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.findAll()
        res.json(projects)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
       const project = await Project.findByPk(req.params.id)
       res.json(project)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const project = await Project.create(req.body)
        res.send(project)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id = +req.params.id;
        const projectToDelete = await Project.findByPk(id)
        await projectToDelete.destroy()
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
})

module.exports = router
