var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'gywns',
  password : 'q1w2e3',
  database : 'nodejs'
});

connection.connect();
 
connection.query('SELECT * from topic', function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});
 
connection.end();