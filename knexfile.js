// https://github.com/tgriesser/knex/issues/852
// NOTE: if you have any issues connecting to Heroku standard plans uncomment the following code:
//
// if(process.env.DATABASE_URL) {
//   var pg = require('pg');
//   pg.defaults.ssl = true;
// }

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/heroku-tasks'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/heroku-tasks-test'
  }

};
