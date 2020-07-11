
const mysql = require("mysql")
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST,
    user :process.env.DB_USER,
    password :process.env.DB_PASS,
    database : process.env.DB_NAME
  }
  
})



module.exports = knex;

