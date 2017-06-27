const express = require('express')
const router = express.Router()
const knex = require('../db')
const sendgrid = require('../lib/sendgrid')

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

module.exports = router
