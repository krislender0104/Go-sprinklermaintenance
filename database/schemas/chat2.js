var sql = require('mssql');
var mongoose = require('mongoose');
//var db = require('../database');
//var Chat = db.chat;

//Initiallising connection string
//Initiallising connection string


var dbConfig = {
  user: 'sa',
  password: 'hms360!',
  server: '127.0.0.1\\SQLEXPRESS',
   database: 'MeanChat',
   name: 'default',
     pool: {
       max: 10,
       min: 4,
       idleTimeoutMillis: 30000,
     }
};
var cp = new sql.ConnectionPool(dbConfig);


//var connection = new sql.ConnectionPool(dbConfig);
//var conOptions = dbConfig //store your connection options wherever
//var mssql = require('mssql');
//var Promise = require('i-promise'); //use whatever promise library you like
//var cp = null;


module.exports = myConnect;


//getConnection module


function myConnect(){
  cp.connect().then(function(){
   console.log('MSSQL Connected');
   return cp
  });
}

//function getConnection(){
//  if (cp) return cp;
//  return cp = new Promise(function(resolve,reject){
//    var conn = new mssql.Connection(dbConfig, function(err){
//      if (err){
 //       cp = null;
 //       return reject(err);
 //     }
 //     return resolve(conn);
 //   });
//  });
//}
