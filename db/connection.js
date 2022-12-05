const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  // connection
  host: "localhost",
  // mysql login info
  user: "root",
  password: "charlie",
  // db from schema.sql
  database: "company_db",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
