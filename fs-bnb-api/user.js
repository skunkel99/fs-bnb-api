var mysqlConn = require("./db");

//Task object constructor
var User = function(user) {
  this.name = user.name;
  this.role = user.role;
//   this.surname = user.surname;
//   this.cellPhone = user.cellPhone;
  this.email = user.email;
  this.password = user.password;
  
//   this.date_created = new Date();
};


User.createUser = function(newUser, result) {
    mysqlConn.query("INSERT INTO user set ?", newUser, function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      //   if (err.code === 'ER_DUP_ENTRY') {
      //     return res.status(400).json({message: err.sqlMessage});
      // } else {
      //     return res.status(500).json({message: "Failed to insert. Please try again."});
      // }
  }
     else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  };

  User.getAllUsers = function(result) {
    mysqlConn.query("Select * from user", function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("Users : ", res);
        result(null, res);
      }
    });
  };

  User.getUserById = function(userId, result) {
    mysqlConn.query("Select * from user where id = ? ", userId, function(
      err,
      res
    ) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
  };

  User.getUserByEmail = function(userEmail, result) {
    mysqlConn.query("Select * from user where email = ? ", userEmail, function(
      err,
      res
    ) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    });
  };

  User.updateUserById = function(userId, name, role, email, password, result) {
    mysqlConn.query(
      "UPDATE user SET name = ?, role = ?, email = ?, password = ? WHERE id = ?",
      [name, role, email, password, userId],
      function(err, res) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  };

  

  User.removeUser = function(userId, result) {
    mysqlConn.query("DELETE FROM user WHERE id = ?", userId, function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };

  module.exports = User;