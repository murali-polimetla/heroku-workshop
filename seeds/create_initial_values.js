exports.seed = async function(knex, Promise) {
  await knex('account').del()
  await knex('tasks').del()

  const heroku = await knex('account').insert({name: 'Heroku'}).returning('*')
  const galvanize = await knex('account').insert({name: 'Galvanize'}).returning('*')

  await knex('tasks').insert([
    {account_id: heroku[0].id, name: 'Setup Pipelines'},
    {account_id: heroku[0].id, name: 'Setup Tests'},
    {account_id: heroku[0].id, name: 'Setup Review Apps'},
    {account_id: heroku[0].id, name: 'Monitor Apps'},
  ])
}
