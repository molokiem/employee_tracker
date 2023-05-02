INSERT INTO department (name) VALUES 
    ("Sales"),
    ("Finance"),
    ("Engineering"),
    ("Legal");

INSERT INTO role (title, department_id, salary) VALUES 
    ("Sales Lead", 1, 100000),
    ("Salesperson", 1, 80000),
    ("Account Manager", 2, 150000),
    ("Accountant", 2, 120000),
    ("Lead Engineer", 3, 160000),
    ("Software Engineer", 3, 125000),
    ("Legal Team Lead", 4, 250000),
    ("Lawyer", 4, 190000);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ("John", "Doe", 1, NULL),
    ("Mike", "Chan", 2, 1),
    ("Kunal", "Singh", 3, NULL),
    ("Malia", "Brown", 4, 3),
    ("Ashley", "Rodriguez", 5, NULL),
    ("Kevin", "Tupik", 6, 5),
    ("Sarah", "Lourd", 7, NULL),
    ("Tom", "Allen", 8, 7);




