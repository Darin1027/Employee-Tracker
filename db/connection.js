const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Charlie",
  database: "company_db",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
