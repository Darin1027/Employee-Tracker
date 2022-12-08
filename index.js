// import dependencies
const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");
const logo = require("asciiart-logo");

function init() {
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
}

init();

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function startQuestions() {
  prompt([
    {
      type: "list",
      name: "choices",
      messages: "What would you ike to do",
      choices: [
        {
          name: "View Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "View Roles",
          value: "VIEW_ROLES",
        },
        {
          name: "View Employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "Add Department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Add Roles",
          value: "ADD_ROLE",
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "End",
          value: "END",
        },
      ],
    },
  ]).then(function (res) {
    let choices = res.choices;
    switch (choices) {
      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;
      case "VIEW_ROLES":
        viewRoles();
        break;
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "ADD_DEPARTMENT":
        addDepartment();
        break;
      case "ADD_ROLE":
        addRole();
        break;
      case "ADD_EMPLOYEE":
        addEmployee();
        break;
      case "UPDATE_EMPLOYEE_ROLE":
        updateEmployeeRole();
        break;
      default:
        endApp();
    }
  });
}
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewDepartments() {
  db.viewAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => startQuestions());
}
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewRoles() {
  db.viewAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => startQuestions());
}
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewEmployees() {
  db.viewAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => startQuestions());
}

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
function addDepartment() {
  prompt([
    {
      name: "name",
      message: "Enter Department Name:",
    },
  ]).then((res) => {
    let name = res;
    db.addNewDepartment(name)
      .then(() => console.log(`Created ${name.name} Successfully!`))
      .then(() => startQuestions());
  });
}

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
function addRole() {
  db.viewAllDepartments().then(([rows]) => {
    let departments = rows;
    const departmentOptions = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    }));
    prompt([
      {
        name: "title",
        message: "Input title of new role:",
      },
      {
        name: "salary",
        message: "Input salary of new role:",
      },
      {
        type: "list",
        name: "department_id",
        message: "Input salary of new role:",
        choices: departmentOptions,
      },
    ]).then((role) => {
      db.addNewRole(role)
        .then(() => console.log(`Created ${role.title} Successfully!`))
        .then(() => startQuestions());
    });
  });
}

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
function addEmployee() {
  prompt([
    {
      name: "first_name",
      message: "Input new employees first name:",
    },
    {
      name: "last_name",
      message: "Input new employees last name:",
    },
  ]).then((res) => {
    let firstName = res.first_name;
    let lastName = res.last_name;

    db.viewAllRoles().then(([rows]) => {
      let roles = rows;
      const roleOptions = roles.map(({ id, title }) => ({
        name: title,
        value: id,
      }));

      prompt({
        type: "list",
        name: "roleId",
        message: "Input new employees role:",
        choices: roleOptions,
      }).then((res) => {
        let roleId = res.roleId;

        db.viewAllEmployees().then(([rows]) => {
          let employees = rows;
          const managerOptions = employees.map(
            ({ id, first_name, last_name }) => ({
              name: `${first_name} ${last_name}`,
              value: id,
            })
          );

          managerOptions.unshift({ name: "None", value: null });

          prompt({
            type: "list",
            name: "managersId",
            message: "Input new employees manager:",
            choices: managerOptions,
          })
            .then((res) => {
              let employee = {
                manager_id: res.managersId,
                role_id: roleId,
                first_name: firstName,
                last_name: lastName,
              };

              db.addNewEmployee(employee);
            })
            .then(() =>
              console.log(`Added ${firstName} ${lastName} Successfully!`)
            )
            .then(() => startQuestions());
        });
      });
    });
  });
}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
function updateEmployeeRole() {
  db.viewAllEmployees().then(([rows]) => {
    let employees = rows;
    const employeeOptions = employees.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    }));
    prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Input employee to update:",
        choices: employeeOptions,
      },
    ]).then((res) => {
      let employeeId = res.employeeId;
      db.viewAllRoles().then(([rows]) => {
        let roles = rows;
        const roleOptions = roles.map(({ id, title }) => ({
          name: title,
          value: id,
        }));

        prompt([
          {
            type: "list",
            name: "roleId",
            message: "Input updated role for employee:",
            choices: roleOptions,
          },
        ])
          .then((res) => db.updateEmployeeRole(employeeId, res.roleId))
          .then(() => console.log("Updates accepted!"))
          .then(() => startQuestions());
      });
    });
  });
}

// End app
function endApp() {
  console.log("Have a great day!");
  process.exit();
}

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
