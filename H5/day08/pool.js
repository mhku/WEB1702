const mysql = require('mysql');

module.exports = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'jd',
  port: 3306,
  connectionLimit: 5
});