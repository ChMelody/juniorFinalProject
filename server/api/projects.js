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

router.post('/addProject', async (req, res, next) => {
    Project.create(req.body)
      .then(project => res.json(project))
      .catch(next)
})

module.exports = router
