INSERT INTO department (department_name)
VALUES ("Finance"),
        ("Engineer"),
        ("Sales"),
        ("Legal");

INSERT INTO roles (title, salary, department)
VALUES ("SalesLead","20000",3),
        ("SalesPerson","100000",3),
        ( "LeadEngineer","800001",2),
        ( "SoftwearEngineer","200001",2),
        ( "Account Manager","800000",1),
        ( "Accountant","100001",1),
        ( "Legal Team Lead","102000",4),
        ( "Lawyer","100000",4);

INSERT INTO employee (first_name, last_name, roles, manager)
VALUES ("john","kiky",1,NULL),
        ("sam","king",2,"john"),
        ("monta","rowge",3,NULL),
        ("sarha","wane",4,"monta"),
        ("klark","ben",5,NULL),
        ("keven","smith",6,"klark"),
        ("luke","bent",6,"klark"),
        ("kissandra","hanes",7,NULL),
        ("manula","fague",8,"kissandra");