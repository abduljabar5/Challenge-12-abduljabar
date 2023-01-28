const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

let allRoles = []
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: 'abduljabar',
    database: 'work_db'
  },
  console.log(`Connected to the books_db database.`)
);

//   db.query(`INSERT INTO department(id, department_name) VALUES(5,'customer service')`, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });
//   db.query('SELECT * FROM department', function (err, results) {
//     console.log(results);
//   });

function start() {

  function questions() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do?",
          name: "select",
          choices: ["View All Employees", "Add Employee", "Update Employee", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
        }])
      .then(function (response) {
        console.log(response);
        console.log(response.name);
        if (response.select === "Add Department") {
          adddepartment();
        } else if (response.select === "Add Role") {
          addRole();
        } else if (response.select === "Add Employee") {
          addemployee();
        } else if (response.select === "View All Employees") {
          viewallemployees();
        } else if (response.select === "View All Roles") {
          viewallroles();
        } else if (response.select === "View All Departments") {
          viewalldepartments();
        } else if (response.select === "Update Employee") {
          updateemployee();
        } else if (response.select === "Quit") {
          Quit();
        }
      })
  }

  questions();

  function adddepartment() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the name of the department?',
          name: 'departmentname',
        }

      ])
      .then(function (response) {
        console.log(response);
        console.log(response.departmentname);
        db.query(`INSERT INTO department( department_name) VALUES('${response.departmentname}')`, (err, result) => {
          if (err) {
            console.log(err);
          }
          db.query('SELECT * FROM department', function (err, results) {
            console.log(results);
          });

        });
        questions();
      })

  }

  function addRole() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the name of the role?',
          name: 'rolename',
        },
        {
          type: 'input',
          message: 'What is the salary?',
          name: 'salary',
        },
        {
          type: 'input',
          message: 'What department is the role for?',
          name: 'rolesdepartment',
        }

      ])
      .then(function (response) {
        console.log(response);
        console.log(response.rolename);
        db.query(`INSERT INTO roles(id, title, department, salary) VALUES(5,'${response.rolename}','${response.rolesdepartment}','${response.salary}')`, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            allRoles.push(response)
            console.log(allRoles);
          }
        })

        questions();
      })

  }
  function addemployee() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the employees first name?',
          name: 'firstname',
        },
        {
          type: 'input',
          message: 'What is the employees last name?',
          name: 'lastname',
        },
        {
          type: 'list',
          message: 'What is the employees role?',
          name: 'employeesrole',
          choices: alltheroles
        },
        {
          type: 'input',
          message: 'Who is the employees manager?',
          name: 'employeesmanager',
        }

      ])
      .then(function (response) {
        console.log(response);
        console.log(response.firstname);
        db.query(`INSERT INTO roles(firstname, lastname, employeesrole, employeesmanager) VALUES(5,'${response.firstname}','${response.lastname}','${response.employeesmanager}')`, (err, result) => {
          if (err) {
            console.log(err);
          }
        })
        questions();
      })

  }
  function viewallemployees() {
    db.query('SELECT employee.id,employee.first_name,employee.last_name,roles.title,department.department_name,roles.salary,manager_id FROM employee JOIN roles ON employee.roles = roles.id LEFT JOIN department ON roles.department = department.id;', function (err, results) {
      console.table(['Table'],results)})
      questions();
  }
  let alltheroles = []
  function viewallroles() {

    db.query('SELECT roles.id,roles.title,department_name,roles.salary FROM roles JOIN department ON roles.department = department.id;', function (err, results) {
      console.table(['id', 'title', 'department', 'salary'], results);
      for (let i = 0; i < results.length; i++) {
        alltheroles.push(results[i].title)
      }
      console.log(alltheroles);
    })

    questions();
  }
  function viewalldepartments() {
    db.query('SELECT * FROM department', function (err, results) {
      console.table(['id', 'department_name'], results);

    });
    questions();
  }
  function Quit() {

  }
}
start();