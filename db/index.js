const connection = require("./connection");

class DataBase {
  constructor(connection) {
    this.connection = connection;
  }

  // WHEN I choose to view all departments
  // THEN I am presented with a formatted table showing department names and department ids
  viewDepartments() {
    return this.connection
      .promise()
      .query("SELECT department.id, department.name FROM department;");
  }
}

module.exports = new DataBase(connection);
