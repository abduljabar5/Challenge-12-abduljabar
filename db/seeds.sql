INSERT INTO department (department_name)
VALUES ("services"),
        ("Engineer");

INSERT INTO roles (title, salary, department)
VALUES ("service","20000",1),
        ("sales","100000",1),
        ( "manager","800001",2);

INSERT INTO employee (first_name, last_name, manager_id, roles)
VALUES ("john","kic",NULL,3),
        ("sam","king",1,2),
        ("monta","rowge",1,2);