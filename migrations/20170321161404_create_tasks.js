exports.up = async function(knex, Promise) {
  await knex.schema.createTable('tasks', function(table) {
    table.increments('id').primary()
    table.string('name')
    table.dateTime('completed_at')
  })
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('tasks')
};
