// https://github.com/tgriesser/knex/issues/852
// NOTE: if you have any issues connecting to Heroku standard plans uncomment the following code:
//
// if(process.env.DATABASE_URL) {
//   var pg = require('pg');
//   pg.defaults.ssl = true;
// }
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/heroku-tasks',
    searchPath: 'salesforce,public',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    searchPath: 'salesforce,public',
  },

  test: {
    client: 'pg',
    connection: process.env.TEST_DATABASE_URL || process.env.DATABASE_URL || 'postgres://localhost/heroku-tasks-test',
    searchPath: 'salesforce,public',
  }

};
