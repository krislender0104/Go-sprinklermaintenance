var mongoose = require('mongoose');
//var mysql = require('mysql');
var sql = require('mssql');
var db = require('../database/schemas/chat2');
//var db = require('../database');
// Display list of all companies

var dbConfig = {
  companies: 'sa',
  password: 'hms360!',
  server: '127.0.0.1\\SQLEXPRESS',
   database: 'MeanChat',
   name: 'default',
     pool: {
       max: 10,
       min: 4,
       idleTimeoutMillis: 30000,
     },
};
var newJson={};
var cp = new sql.ConnectionPool(dbConfig);

exports.companies_list = function(req, res, next) {
     console.log('/companiess get');

  // connect to your database
      companiesQuery="select * from companies";



     // sqlCall(companiesQuery, function(err, data) {
     //     if (typeof err !== "undefined" && err !== null) {
    //        res.status(500).send({
    //          error: err
    //        });
    //        return;
   //       }
    //     companiess=data;
    //      res.json(companiess);
    //   });

new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(companiesQuery)
  }).then(result => {
    let companiess = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(companiess);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });


      //sql.close();
            //var query = "select * from [companiess]";
              //       executeQuery (res, query);

		//Chat.getcompaniess(function (err, companiess) {
	  //  if (err) return next(err);
	  //  console.log ("companiess: " + JSON.stringify(companiess));
	  //  res.json(companiess);
 	 // });
};

// Display detail page for a specific companies
exports.companies_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies detail: ' + req.params.id);
};

// Display companies create form on GET
exports.companies_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies create GET');
};

// Handle companies create on POST
exports.companies_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies create POST');
};

// Display companies delete form on GET
exports.companies_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies delete GET');
};

// Handle companies delete on POST
exports.companies_delete_post = function(req, res, next) {
   //
};

// Display companies update form on GET
exports.companies_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies update GET');
};

// Handle companies update on POST
exports.companies_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies update POST');
};


function sqlCall(query, cb) {
  sql.close();
  sql.connect(dbConfig,function (err) {
    if (typeof err !== "undefined" && err !== null) {
      cb( err );
      return
    }

   var request = new sql.Request();// or: var request = connection.request();
    request.query(query, function(err, recordset) {
     var newJson=recordset.recordsets[0];
      cb( err, newJson );
    });

  });

}
