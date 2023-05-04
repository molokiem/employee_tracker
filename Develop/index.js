const db = require("./db/connection");
const queries = require("./db/queries");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;

function init() {
  startPrompt();
}

function startPrompt() {
  inquirer
    .prompt({
      type: "list",
      name: "menu",
      message: "Choose from the list below.",
      choices: [
        "View Departments",
        "Add New Department",
        "View Roles",
        "Add New Role",
        "View Employees",
        "Add New Employee",
      ],
    })
    .then((choices) => {
      switch (choices.menu) {
        case "View Departments":
          viewDepartments();
          break;
        case "Add New Department":
          addNewDepartment();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "Add New Role":
          addNewRole();
          break;
        case "View Employees":
          viewEmployees();
          break;
        case "Add New Employee":
          addNewEmployee();
          break;
      }
    });
}

function viewDepartments() {
  queries
    .viewDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => startPrompt());
}

function addNewDepartment() {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        message: "What is the name of the department you would like to add?",
      },
    ])
    .then((newDepartment) => {
      console.log(newDepartment);
      queries
        .addNewDepartment(newDepartment)
        .then(() => console.log("New Department Added Successfully"))
        .then(() => startPrompt());
    });
}

function viewRoles() {
  queries
    .viewRoles()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => startPrompt());
}

function addNewRole() {
  queries.viewDepartments().then(([rows]) => {
    let departments = rows;
    const departmentList = departments.map(({ id, departmentName }) => ({
      name: departmentName,
      value: id,
    }));
    inquirer
      .prompt([
        {
          name: "title",
          message: "What is the name of the role you would like to add?",
        },
        {
          type: "list",
          name: "department_id",
          message: "What department does the the role fall under?",
          choices: departmentList,
        },
        {
          name: "salary",
          message: "What is the salary of the role you would like to add?",
        },
      ])
      .then((newRole) => {
        queries
          .createRole(newRole)
          .then(() => console.log("New Role Added Successfully"))
          .then(() => startPrompt());
      });
  });
}

function viewEmployees() {
  queries
    .viewEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => startPrompt());
}

function addNewEmployee() {
  queries.viewRoles().then(([rows]) => {
    let departments = rows;
    const departmentList = departments.map(({ id, title }) => ({
      name: title,
      value: id,
    }));
    inquirer
      .prompt([
        {
          name: "firstName",
          message:
            "What is the first name of the employee you would like to add?",
        },
        {
          name: "lastName",
          message:
            "What is the last name of the employee you would like to add?",
        },
        {
          type: "list",
          name: "roles_id",
          message: "What role does the the role fall under?",
          choices: departmentList,
        },
      ])
      .then((employees) => {
        queries
          .addEmployee(employees)
          .then(() => console.log("New Employee Added Successfully"));
      });
  });
}

init();
