const mysql2 = require("mysql2");

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Charlie",
  database: "company_db",
});

db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
