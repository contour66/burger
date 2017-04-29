var mysql = require("mysql");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password: "z1qatgb5",
	database:"burgers_db"
});
connection.connect(function(err){
	if(err) throw err;

	console.log("connected to: " + connection.threadId);
});

module.exports= connection;