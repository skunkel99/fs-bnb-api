var mysqlConn = require("./db");

//Task object constructor
var Booking = function(booking) {
  this.dateTo = booking.dateTo;
  this.dateFrom = booking.dateFrom;
  this.propertyId = booking.propertyId;
  this.userId = booking.userId;
};

Booking.createBooking = function(newBooking, result) {
    mysqlConn.query("INSERT INTO booking set ?", newBooking, function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  };

  
 

  Booking.getAllBookings = function(result) {
    mysqlConn.query("Select * from booking", function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("Bookings : ", res);
        result(null, res);
      }
    });
  };

  Booking.getBookingById = function(bookingId, result) {
    mysqlConn.query("Select * from booking where id = ? ", bookingId, function(
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

  

  Booking.updateBookingById = function(bookingId, dateTo, dateFrom, propertyId, userId, result) {
    mysqlConn.query(
      "UPDATE property SET dateTo = ?, dateFrom = ?, propertyId = ?, userId = ? WHERE id = ?",
      [dateTo, dateFrom, propertyId, userId, bookingId],
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

  Booking.removeUser = function(bookingId, result) {
    mysqlConn.query("DELETE FROM booking WHERE id = ?", bookingId, function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };

  module.exports = Booking;