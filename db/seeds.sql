INSERT INTO department (id, name)
VALUES 
(1, "Human Resources"),
(2, "Sales"),
(3, "Operations"),
(4, "Maintenance"),
(5, "IT"),
(6, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES 
(1, "HR Manager", 70000, 1),
(2, "HR Supervisor", 50000, 1),
(3, "HR Intern", 40000, 1),
(4, "Sales Manager", 120000, 2),
(5, "Sales Supervisor", 100000, 2),
(6, "Sales Representative", 80000, 2),
(7, "Operations Manager", 90000, 3),
(8, "Operations Supervisor", 60000, 3),
(9, "Dispatcher", 40000, 3),
(10, "Maintenance Manager", 60000, 4),
(11, "Maintenance Supervisor", 60000, 4),
(12, "Maintenance Intern", 60000, 4),
(13, "IT Manager", 80000, 5),
(14, "IT Supervisor", 60000, 5),
(15, "IT Intern", 40000, 5),
(16, "Legal Manager", 250000, 6),
(17, "Consultant", 200000, 6),
(18, "Lawyer", 150000, 6),

INSERT INTO employee ()
VALUES 
(),



-- DROP DATABASE IF EXISTS company_db;
-- CREATE DATABASE company_db;

-- USE company_db;

-- CREATE TABLE department (
--     id INT PRIMARY KEY,
--     name VARCHAR(30)
-- );

-- CREATE TABLE role (
--     id INT PRIMARY KEY,
--     title VARCHAR(30),
--     salary DECIMAL,
--     department_id INT
-- );

-- CREATE TABLE employee (
--     id INT PRIMARY KEY,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     role_id INT,
--     manager_id INT
-- );


-- WHEN I start the application
-- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

-- WHEN I choose to view all departments
-- THEN I am presented with a formatted table showing department names and department ids

-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

-- WHEN I choose to add a department
-- THEN I am prompted to enter the name of the department and that department is added to the database

-- WHEN I choose to add a role
-- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

-- WHEN I choose to add an employee
-- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

-- WHEN I choose to update an employee role
-- THEN I am prompted to select an employee to update and their new role and this information is updated in the database 