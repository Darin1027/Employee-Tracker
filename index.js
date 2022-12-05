// import modules
const inquirer = require("inquirer");
const mysql = require("mysql2");
const connection = require("./db/connection");
// Import the connection object
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// start app
init();

//  function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
  });
}
// TODO-- add initial questions
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function startQuestions() {
  prompt([
    {
      type: "list",
      name: "choices",
      messages: "Select an option.",
      choices: [
        {
          name: "View all departments",
          value: "VIEW_ALL_DEPARTMENTS",
        },
        {
          name: "View all roles",
          value: "VIEW_ALL_ROLES",
        },
        {
          name: "View all employees",
          value: "VIEW_ALL_EMPLOYEES",
        },
        {
          name: "Add a department",
          value: "ADD_A_DEPARTMENT",
        },
        {
          name: "Add a role",
          value: "ADD_A_ROLE",
        },
        {
          name: "Add an employee",
          value: "ADD_AN_EMPLOYEE",
        },
        {
          name: "Update an employee",
          value: "UPDATE_AN_EMPLOYEE",
        },
      ],
    },
  ]);
}

// TODO-- add a department
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// TODO-- add a role
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// TODO-- add a employee
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// TODO-- Update employee role.
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

// TODO-- View all departments
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// TODO-- View all roles
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// TODO-- View all employees
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// BONUS:
// TODO-- Update employee managers.

// BONUS:
// TODO-- View employees by manager.

// BONUS:
// TODO-- View employees by department.

// BONUS:
// TODO-- Delete departments

// BONUS:
// TODO-- Delete roles

// BONUS:
// TODO-- Delete employees

// BONUS:
// TODO-- View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
