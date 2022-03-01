var mongoose = require('mongoose');
//var mysql = require('mysql');
var sql = require('mssql');
var db = require('../database/schemas/chat2');
//var db = require('../database');
// Display list of all technicians

var dbConfig = {
  technicians: 'sa',
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

exports.technicians_list = function(req, res, next) {
     console.log('/technicianss get');

  // connect to your database
      techniciansQuery="select * from technicians";



     // sqlCall(techniciansQuery, function(err, data) {
     //     if (typeof err !== "undefined" && err !== null) {
    //        res.status(500).send({
    //          error: err
    //        });
    //        return;
   //       }
    //     technicianss=data;
    //      res.json(technicianss);
    //   });

new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(techniciansQuery)
  }).then(result => {
    let technicianss = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(technicianss);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });


      //sql.close();
            //var query = "select * from [technicianss]";
              //       executeQuery (res, query);

		//Chat.gettechnicianss(function (err, technicianss) {
	  //  if (err) return next(err);
	  //  console.log ("technicianss: " + JSON.stringify(technicianss));
	  //  res.json(technicianss);
 	 // });
};

exports.devtype_list = function(req, res, next) {
  console.log('/devtype get');

// connect to your database
   techniciansQuery="select * from DevTypes";



new sql.ConnectionPool(dbConfig).connect().then(pool => {
return pool.request().query(techniciansQuery)
}).then(result => {
 let technicianss1 = result.recordset;
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.status(200).json(technicianss1);
 sql.close();
}).catch(err => {
 res.status(500).send({ message: err})
 sql.close();
});

};
// Display detail page for a specific technicians
exports.technicians_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: technicians detail: ' + req.params.id);
};

// Display technicians create form on GET
exports.technicians_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: technicians create GET');
};

// Handle technicians create on POST
exports.technicians_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: technicians create POST');
};

// Display technicians delete form on GET
exports.technicians_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: technicians delete GET');
};

// Handle technicians delete on POST
exports.technicians_delete_post = function(req, res, next) {
   //
};

// Display technicians update form on GET
exports.technicians_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: technicians update GET');
};

// Handle technicians update on POST
exports.technicians_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: technicians update POST');
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
