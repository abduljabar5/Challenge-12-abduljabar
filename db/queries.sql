-- SELECT department_name,roles.id,roles.salary,roles.title
-- FROM roles
-- LEFT JOIN department ON roles.department = department.id;


-- SELECT employee.id,employee.first_name,employee.last_name,roles.title,department.department_name,roles.salary,manager_id
-- FROM employee
-- JOIN roles ON employee.roles = roles.id
-- LEFT JOIN department ON employee.department = department.id;


SELECT employee.id,employee.first_name,employee.last_name,roles.title,department.department_name,roles.salary,manager_id FROM employee JOIN roles ON employee.roles = roles.id LEFT JOIN department ON roles.department = department.id;