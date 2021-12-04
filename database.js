var mysql = require('mysql2')
require('dotenv').config()

//*******************************DB SCHEMA*************************
// CREATE TABLE users (
//   id int default null,
//   full_name varchar(45) DEFAULT NULL,
//   street_name varchar(45) DEFAULT NULL,
//   city_name varchar(45) DEFAULT NULL,
//   postal_code int default null
// ) ;


// CREATE TABLE login (
//   id int not null ,
//   user_name varchar(45) DEFAULT NULL,
//   password varchar(256) DEFAULT NULL,
//   email varchar(100) DEFAULT NULL
// ) ;


var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  insecureAuth:true,
  user: process.env.DB_USER,

  
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

connection.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('Database connected');
})

module.exports=connection;