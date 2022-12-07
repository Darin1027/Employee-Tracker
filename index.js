// import dependencies
const inquirer = require("inquirer");
const db = require("./db");
require("console.table");
const logo = require("asciiart-logo");

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Charlie",
  database: "company_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(
    logo({
      name: "Employees!",
      font: "Speed",
      lineChars: 10,
      padding: 2,
      margin: 3,
      borderColor: "bold-blue",
      logoColor: "bold-red",
      textColor: "bold-white",
    }).render()
  );
  startQuestions();
});

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function startQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "WHY IS IT LOADING THE NAME",
        messages: "SELECT AN ACTION",
        choices: [
          {
            name: "View all Departments",
            value: "VIEW_ALL_DEPARTMENTS",
          },
          {
            name: "View all Roles",
            value: "VIEW_ALL_ROLES",
          },
          {
            name: "View all Employees",
            value: "VIEW_ALL_EMPLOYEES",
          },
          {
            name: "Add Department",
            value: "ADD_DEPARTMENT",
          },
          {
            name: "Add Role",
            value: "ADD_ROLE",
          },
          {
            name: "Add Employee",
            value: "ADD_EMPLOYEE",
          },
          {
            name: "Update Employee",
            value: "UPDATE_EMPLOYEE",
          },
        ],
      },
    ])
    .then((res) => {
      let choice = res.choice;
      switch (choice) {
        case "VIEW_ALL_DEPARTMENTS":
          viewAllDepartments();
          break;
        case "VIEW_ALL_ROLES":
          viewAllRoles();
          break;
        case "VIEW_ALL_EMPLOYEES":
          viewAllEmployees();
          break;
        case "ADD_DEPARTMENT":
          AddDepartment();
          break;
        case "ADD_ROLE":
          AddRole();
          break;
        case "ADD_EMPLOYEE":
          AddEmployee();
          break;
        case "UPDATE_EMPLOYEE":
          UpdateEmployee();
          break;
      }
    });
}
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewAllDepartments() {
  db.viewDepartments()
  .then(([rows]) => {
    let departments = rows;
    console.log("\n");
    cTable(departments);
  });
  .then(() => startQuestions());
}
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// TODO-- function to add a department
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// TODO-- function to add a role
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// TODO-- function to add a employee
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// TODO-- function to Update employee role.
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

// BONUS:
// TODO-- function to Update employee managers.

// BONUS:
// TODO-- function to View employees by manager.

// BONUS:
// TODO-- function to View employees by department.

// BONUS:
// TODO-- function to Delete departments

// BONUS:
// TODO-- function to Delete roles

// BONUS:
// TODO-- function to Delete employees

// BONUS:
// TODO-- function to View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
