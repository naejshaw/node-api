// Uso do mysql
var mysql = require('mysql');

// Criação da conexão
export var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

// Verificação da conexão e criação de uma tabela
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE nome_da_tabela (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

// CRUD
// Create
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO nome_da_tabela (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
// Read
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM nome_da_tabela", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
// Update
con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE nome_da_tabela SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
// Delete
con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM nome_da_tabela WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
// Drop Table
con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE nome_da_tabela";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});
// Modifiers
// Where
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM nome_da_tabela WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
// Order By
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM nome_da_tabela ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
// Limit
con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM nome_da_tabela LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
// Starting from another position: OFFSET
con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM nome_da_tabela LIMIT 5 OFFSET 2";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
