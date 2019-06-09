const mysql = require("mysql");

const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "fs_bnb"
};


var connection = mysql.createConnection(config);
connection.connect();

// connection.query("SELECT * FROM user", function(err, results, fields) {
//     console.log(err);
//     console.log(results);
//     console.log(fields);
// });

module.exports = connection;