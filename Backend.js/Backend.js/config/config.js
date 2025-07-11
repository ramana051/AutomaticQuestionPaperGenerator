const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Attendance',
    password: 'ram123',
    port: 5432
  });
  
module.exports = pool;