exports.up = async function(knex, Promise) {
  await knex.schema.withSchema('public').createTable('account', function(table) {
    table.increments('id').primary()
    table.string('name')
  })
};

exports.down = async function(knex, Promise) {
  await knex.schema.withSchema('public').createTable('account')
};
