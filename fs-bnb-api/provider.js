var mysqlConn = require("./db");


var Provider = function(provider) {
    this.name = provider.name;
    this.role = provider.role;
    this.email = provider.email;
    this.password = provider.password;
    
}



Provider.createProvider = function(newProvider, result) {
    mysqlConn.query("INSERT INTO provider set ?", newProvider, function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  };

  Provider.getAllProviders = function(result) {
    mysqlConn.query("Select * from provider", function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("Providers : ", res);
        result(null, res);
      }
    });
  };

  Provider.getProviderByEmail = function(userEmail, result) {
    mysqlConn.query("Select * from provider where email = ? ", userEmail, function(
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

  Provider.getProviderById = function(ProviderId, result) {
    mysqlConn.query("Select * from provider where id = ? ", ProviderId, function(
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

  Provider.updateProviderById = function(providerId, name, role, email, password, result) {
    mysqlConn.query(
      "UPDATE provider SET name = ?, role = ?, email = ?, password = ? WHERE id = ?",
      [name, role, email, password, providerId],
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

  Provider.removeProvider = function(providerId, result) {
    mysqlConn.query("DELETE FROM provider WHERE id = ?", providerId, function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };


  module.exports = Provider;
