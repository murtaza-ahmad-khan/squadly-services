const mysql = require("mysql2");
const config = require("config");

const pool = mysql.createPool({
  host: config.get("db.MYSQL_HOST"),
  user: config.get("db.MYSQL_USER"),
  database: config.get("db.MYSQL_DATABASE"),
  password: config.get("db.MYSQL_PASSWORD"),
});

module.exports = pool.promise();
