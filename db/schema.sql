DROP DATABASE IF EXISTS work_db;
CREATE DATABASE work_db;

USE work_db;

CREATE TABLE department (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department INT,
  FOREIGN KEY (department)
    REFERENCES department(id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
manager VARCHAR(30),
roles INT,
  FOREIGN KEY (roles)
    REFERENCES roles(id),
    department INT,
  FOREIGN KEY (department)
    REFERENCES department(id),
    employee INT,
  FOREIGN KEY (employee)
    REFERENCES employee(id)
);