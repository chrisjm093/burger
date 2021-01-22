const mysql = require("mysql");

if (process.env.JAWSDB_URL){ 
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
<<<<<<< HEAD
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
=======
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
>>>>>>> 36220df94ba2d6c3136372bb4e376d9406419f5d

    });
 };

connection.connect( (err) =>{
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log(" connected as id" + connection.threadId);

});

module.exports = connection;
