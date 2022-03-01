var mongoose = require('mongoose');
//var mysql = require('mysql');
var sql = require('mssql');
var db = require('../database/schemas/chat2');
//var db = require('../database');
// Display list of all users


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
     },
};
var newJson={};
var db2 = new sql.ConnectionPool(dbConfig);


//var mongoose = require('mongoose');
//var mysql = require('mysql');
//var db = require('../database');
//var Chat = db.chat;

// Display list of all users
exports.room_list = function(req, res, next) {
    console.log('/rooms get');
    console.log ("i am here");


  // connect to your database
 var roomSql="select * from rooms";
  //   sqlCall(userQuery, function(err, data) {
  //          if (typeof err !== "undefined" && err !== null) {
  //           console.log ("room err--: " + err);
  //            res.status(500).send({
  //              error: err
  //            });
  //            return;
  //          }
  //          rooms=data;
  //          console.log ("rooms: " + JSON.stringify(rooms));
   //         res.json(rooms);
   //      });

   new sql.ConnectionPool(dbConfig).connect().then(pool => {
     return pool.request().query(roomSql)
     }).then(result => {
       let rooms = result.recordset;
       res.setHeader('Access-Control-Allow-Origin', '*');
       res.status(200).json(rooms);
       sql.close();
     }).catch(err => {
       res.status(500).send({ message: err})
       sql.close();
     });



	//	Chat.getRooms(function (err, rooms) {
	 //   if (err) return next(err);
	 //   console.log ("rooms: " + JSON.stringify(rooms));
	 //   res.json(rooms);
 	//  });
};

// Display detail page for a specific room
exports.room_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: room detail: ' + req.params.id);
};

// Display room create form on GET
exports.room_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: room create GET');
};

// Handle room create on POST
exports.room_create_post = function(req, res, next) {
   // Chat.addroom(req.body, function (err, post) {
	// 	  console.log('req.body: ' +  JSON.stringify(req.body));
	 //   if (err) return next(err);
	 //   console.log ("sav room res: " + JSON.stringify(post));
	//        res.json(req.body);
	 // });
};

// Display room delete form on GET
exports.room_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: room delete GET');
};

// Handle room delete on POST
exports.room_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: room delete POST');
		 // Chat.deleteroom(req.body, function (err, put) {
		//		console.log('deleteing...');
		//    if (err) return next(err);
		//    console.log ("del rooms res: " + JSON.stringify(put));
		//    res.json(put);
		//  });
};

// Display room update form on GET
exports.room_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: room update GET');
};

// Handle room update on POST
exports.room_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: room update POST');
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

async function execute2(query) {

    return new Promise((resolve, reject) => {

        new sql.ConnectionPool(dbConfig).connect().then(pool => {
            return pool.request().query(query)
        }).then(result => {

            resolve(result.recordset);

            sql.close();
        }).catch(err => {

            reject(err)
            sql.close();
        });
    });


}
