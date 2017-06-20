const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const tasks = await knex('tasks').orderBy('id')

    // Uncomment the lines below to enable Salesforce connect
    const accounts = await knex('account')
    const accountsIndex = accounts.reduce((result, account) => {
      result[account.id] = account
      return result
    }, {})
    tasks.forEach(task => {
      if (task.account_id && accountsIndex[task.account_id]) {
        task.accountName = accountsIndex[task.account_id].name
      }
    })

    res.render('index', { tasks, accounts })
  } catch(error) {
    return next(error);
  }
})

router.post('/tasks', async (req, res, next) => {
  try {
    if (!req.body.name) return next('Name cannot be blank')
    const task = {name: req.body.name}

    if (req.body.account_id) {
      task.account_id = req.body.account_id
    }

    await knex('tasks').insert(task)
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
