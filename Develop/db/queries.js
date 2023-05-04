const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  viewDepartments() {
    return this.connection.promise().query("SELECT * from department");
  }
  addNewDepartment(department) {
    return this.connection
      .promise()
      .query(`INSERT INTO department (name) VALUES ("${department}")`);
  }
  viewRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.title, role.id, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id"
      );
  }
  addNewRole(role) {
    return this.connection
      .promise()
      .query(
        `INSERT INTO role (title, department_id, salary) VALUES ("${role.title}", role.department_id, role.salary)`
      );
  }
  viewEmployees() {
    return this.connection.promise().query("SELECT * FROM employee");
  }
  addNewEmployee() {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET", employee);
  }
}

module.exports = new DB(connection);
