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
(19, "CEO", 500000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
(1, "Iron", "Man", 18, 16),
(2, "Spider", "Man", 17, 16),
(3, "The", "Hulk", 16, 19),
(4, "Doctor", "Strange", 15, 13),
(5, "Captian", "America", 14, 13),
(6, "Ant", "Man", 13, 19),
(7, "Hawk", "Eye", 12, 10),
(8, "Black", "Panther", 11, 10),
(9, "Professor", "Xavier", 10, 19),
(10, "Mag", "Neto", 9, 7),
(11, "Scott", "Summers", 8, 7),
(12, "Unstoppable", "Juggernaut", 7, 19),
(13, "Night", "Crawler", 6, 4),
(14, "Silver", "Surfer", 5, 4),
(15, "Human", "Torch", 4, 19),
(16, "Invisible", "Woman", 3, 1),
(17, "Reed", "Richards", 2, 1),
(18, "Jean", "Grey", 1, 19),
(19, "Darin", "Palombo", 19, 19);