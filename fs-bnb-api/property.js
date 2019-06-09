var mysqlConn = require("./db");


var Property = function(property) {
  this.destinatino= property.destination;
    this.houseName = property.housename;
    this.hostName = property.hostname;
    this.pricePerNight = property.nightprice;
    this.location = property.destination;
    this.imageUrl = property.imageUrl;
    this.providerId = property.providerId;
}



Property.createProperty = function(newProperty, result) {
    mysqlConn.query("INSERT INTO property set ?", newProperty, function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  };

  Property.getAllProperties = function(result) {
    mysqlConn.query("Select * from property", function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("Properties : ", res);
        result(null, res);
      }
    });
  };

  Property.getPropertyById = function(PropertyId, result) {
    mysqlConn.query("Select * from property where id = ? ", PropertyId, function(
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



  Property.updatePropertyById = function(propertyId, houseName, hostName, pricePerNight, location, imageUrl, providerId, result) {
    mysqlConn.query(
      "UPDATE property SET houseName = ?, hostName = ?, pricePerNight = ?, location = ?, imageUrl = ?, providerId = ? WHERE id = ?",
      [houseName, hostName, pricePerNight, location, imageUrl, providerId, propertyId],
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

  Property.removeProperty = function(propertyId, result) {
    mysqlConn.query("DELETE FROM property WHERE id = ?", propertyId, function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };


  module.exports = Property;
