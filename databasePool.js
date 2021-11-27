const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool(databaseConfiguration);

module.exports = pool;

pool.query('SELECT * FROM generation', (error, response) => {
  if (error) {
    console.error('error', error);
  } else {
    console.log('response.rows', response.rows);
  }
});
