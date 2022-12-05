USE company_db;

INSERT INTO department (name)
VALUES 
("Human Resources"),
("Sales"),
("Operations"),
("Maintenance"),
("IT"),
("Legal");

INSERT INTO role (title, salary, department_id)
VALUES 
("HR Manager", 70000, 1),
("HR Supervisor", 50000, 1),
("HR Intern", 40000, 1),
("Sales Manager", 120000, 2),
("Sales Supervisor", 100000, 2),
("Sales Representative", 80000, 2),
("Operations Manager", 90000, 3),
("Operations Supervisor", 60000, 3),
("Dispatcher", 40000, 3),
("Maintenance Manager", 60000, 4),
("Maintenance Supervisor", 60000, 4),
("Maintenance Intern", 60000, 4),
("IT Manager", 80000, 5),
("IT Supervisor", 60000, 5),
("IT Intern", 40000, 5),
("Legal Manager", 250000, 6),
("Consultant", 200000, 6),
("Lawyer", 150000, 6),
("CEO", 500000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Iron", "Man", 18, 16),
("Spider", "Man", 17, 16),
("The", "Hulk", 16, 19),
("Doctor", "Strange", 15, 13),
("Captian", "America", 14, 13),
("Ant", "Man", 13, 19),
("Hawk", "Eye", 12, 10),
("Black", "Panther", 11, 10),
("Professor", "Xavier", 10, 19),
("Mag", "Neto", 9, 7),
("Scott", "Summers", 8, 7),
("Unstoppable", "Juggernaut", 7, 19),
("Night", "Crawler", 6, 4),
("Silver", "Surfer", 5, 4),
("Human", "Torch", 4, 19),
("Invisible", "Woman", 3, 1),
("Reed", "Richards", 2, 1),
("Jean", "Grey", 1, 19),
("Darin", "Palombo", 19, 19);