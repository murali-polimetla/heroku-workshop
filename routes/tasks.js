const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const tasks = await knex('tasks').orderBy('id')
    res.render('index', { tasks })
  } catch(error) {
    return next(error);
  }
})

router.post('/tasks', async (req, res, next) => {
  try {
    if (!req.body.name) return next('Name cannot be blank')
    await knex('tasks').insert({name: req.body.name})
    res.redirect('/')
  } catch(error) {
    return next(error);
  }
})

router.post('/tasks/:id', async (req, res, next) => {
  try {
    await knex('tasks').where({id: req.params.id}).delete()
    res.redirect('/')
  } catch(error) {
    return next(error);
  }
})

router.post('/tasks/:id/complete', async (req, res, next) => {
  try {
    const task = await knex('tasks').where({id: req.params.id}).first()
    if (task) {
      if (task.completed_at) {
        await knex('tasks').where({id: req.params.id}).update({completed_at: null})
      } else {
        await knex('tasks').where({id: req.params.id}).update({completed_at: new Date()})
      }
    }
    res.redirect('/')
  } catch(error) {
    return next(error);
  }
})

module.exports = router
