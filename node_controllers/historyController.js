var mongoose = require('mongoose');
//var mysql = require('mysql');
var sql = require('mssql');
var db = require('../database/schemas/chat2');
//var db = require('../database');
// Display list of all history

var dbConfig = {
  history: 'sa',
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

exports.history_list = function(req, res, next) {
     console.log('/history get');

  // connect to your database
      historyQuery="select * from history";



     // sqlCall(historyQuery, function(err, data) {
     //     if (typeof err !== "undefined" && err !== null) {
    //        res.status(500).send({
    //          error: err
    //        });
    //        return;
   //       }
    //     history=data;
    //      res.json(history);
    //   });

new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(historyQuery)
  }).then(result => {
    let history = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(history);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });


      //sql.close();
            //var query = "select * from [history]";
              //       executeQuery (res, query);

		//Chat.gethistory(function (err, history) {
	  //  if (err) return next(err);
	  //  console.log ("history: " + JSON.stringify(history));
	  //  res.json(history);
 	 // });
};

// Display detail page for a specific history
exports.history_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: history detail: ' + req.params.id);
};

// Display history create form on GET
exports.history_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: history create GET');
};

// Handle history create on POST
exports.history_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: history create POST');
};

// Display history delete form on GET
exports.history_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: history delete GET');
};

// Handle history delete on POST
exports.history_delete_post = function(req, res, next) {
   //
};

// Display history update form on GET
exports.history_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: history update GET');
};

// Handle history update on POST
exports.history_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: history update POST');
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
