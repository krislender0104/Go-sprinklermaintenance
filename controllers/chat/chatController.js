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

//chatController


// Display all chat GET
exports.chat_get = function(req, res, next) {

// connect to your database
console.log("calling ALL chat");
  var allChatSQL="select * from chat";
//      sqlCall(allChatSQL, function(err, data) {
//                  if (typeof err !== "undefined" && err !== null) {
//                    res.status(500).send({
//                      error: err
//                    });
//                    return;
//                  }
//                  chats=data;
//                  res.json(chats);
//               });


  new sql.ConnectionPool(dbConfig).connect().then(pool => {
     return pool.request().query(allChatSQL)
     }).then(result => {
       let chats = result.recordset;
       res.setHeader('Access-Control-Allow-Origin', '*');
       res.status(200).json(chats);
       sql.close();
     }).catch(err => {
       res.status(500).send({ message: err})
       sql.close();
     });
	//Chat.getAllChat(function (err, chats) {
	//console.log('Chat find');
	//    if (err) return next(err);
  //  console.log ("chat chats: " + JSON.stringify(chats));
	//    res.json(chats);
	//  });
};

// Display all chat by room GET
exports.chat_all_by_room_get = function(req, res, next) {
console.log("calling ALL chat by room");
	console.log('/:room get');
	// connect to your database
	var whichQuery="";
	 if (req.params.room != undefined){
	       // var replaced = req.params.room;
         //	 var room = replaced.replace("%20", " ");
       whichQuery="select * from chat where room = '" + req.params.room + "'";
       console.log("chat by room sql: " +  whichQuery);
   } else {
       whichQuery="select * from chat";
 }
//              sqlCall(whichQuery, function(err, data) {
//                   if (typeof err !== "undefined" && err !== null) {
//                     res.status(500).send({
//                       error: err
//                     });
//                     return;
//                   }
//
//                    chats=data;
//                    res.json(chats);
//                });

  new sql.ConnectionPool(dbConfig).connect().then(pool => {
     return pool.request().query(whichQuery)
     }).then(result => {
       let chats = result.recordset;
       res.setHeader('Access-Control-Allow-Origin', '*');
       res.status(200).json(chats);
       sql.close();
     }).catch(err => {
       res.status(500).send({ message: err})
       sql.close();
     });
	//console.log('room = ' + req.params.room);
	//Chat.getAllByRoom(req.params.room , function (err, chats) {
	//console.log('Chat find');
	//    if (err) return next(err);
	//    console.log ("room chat chats: " + JSON.stringify(chats));
	//    res.json(chats);
	//  });
};

// GET ROOM-USER-toWhomE CHATS
exports.chat_all_by_room_and_user_and_whom_get = function(req, res, next) {
	console.log('/:room get');
	console.log("calling ALL chat by room user and toWhom");
	console.log('room = ' + req.params.room);

	var whichQuery="";
  	 if (req.params.room != undefined && req.params.room != undefined && req.params.user != undefined && req.params.toWhom != undefined ){
  	    whichQuery= "select * from chat where room='" + req.params.room + "' and nickname='" + req.params.user + "' and toWhom='" + req.params.toWhom + "' or room='" + req.params.room + "' and nickname='" + req.params.toWhom + "' and toWhom='" + req.params.user + "'";
     } else {
         whichQuery="select * from chat";
     }
//                   sqlCall(whichQuery, function(err, data) {
//                      if (typeof err !== "undefined" && err !== null) {
//                        res.status(500).send({
//                          error: err
//                        });
//                        return;
//                      }
//
//                       chats=data;
//                       res.json(chats);
//                   });

  new sql.ConnectionPool(dbConfig).connect().then(pool => {
     return pool.request().query(whichQuery)
     }).then(result => {
       let chats = result.recordset;
       res.setHeader('Access-Control-Allow-Origin', '*');
       res.status(200).json(chats);
       sql.close();
     }).catch(err => {
       res.status(500).send({ message: err})
       sql.close();
     });
	//Chat.getAllByRoomAndUserAndWhom(req.params.room, req.params.user, req.params.toWhom, function (err, chats) {
	//console.log('Chat find');
	//    if (err) return next(err);
	//    console.log ("room chat chats: " + JSON.stringify(chats));
	//    res.json(chats);
	//  });
};

// GET ROOM-USER-toWhomE CHATS
exports.chat_all_by_room_and_user = function(req, res, next) {

console.log("calling ALL chat by room  and user");
	var whichQuery="";
  	 if (req.params.room != undefined && req.params.room != undefined  && req.params.user != undefined && req.params.toWhom != undefined ){

  	    whichQuery= "select * from chat where room='" + req.params.room + "' and nickname='" + req.params.user + "' or room='" + req.params.room + "' and toWhom='" + req.params.user + "'";
        console.log("chat room and user sql: " + whichQuery );
     } else {
         whichQuery="select * from chat";
     }
//                   sqlCall(whichQuery, function(err, data) {
//                      if (typeof err !== "undefined" && err !== null) {
//                        res.status(500).send({
//                          error: err
//                        });
//                        return;
//                      }
//
//                       chats=data;
//                       res.json(chats);
//                   });

  new sql.ConnectionPool(dbConfig).connect().then(pool => {
     return pool.request().query(whichQuery)
     }).then(result => {
       let chats = result.recordset;
       res.setHeader('Access-Control-Allow-Origin', '*');
       res.status(200).json(chats);
       sql.close();
     }).catch(err => {
       res.status(500).send({ message: err})
       sql.close();
     });
	//Chat.getAllByRoomAndUser(req.params.room, req.params.user, function (err, chats) {
	//console.log('Chat find');
	//    if (err) return next(err);
	//    console.log ("room chat chats: " + JSON.stringify(chats));
	//    res.json(chats);
	//  });
};

// Handle chat create on POST
exports.chat_create_post = function(req, res, next) {
console.log("create chat");
var d = new Date();
var n = d.toISOString();
var chatQuery="insert into chat (room, nickname, message, updated_at, toWhom) values ('" + req.body.room + "', '" + req.body.nickname + "', '" + req.body.message + "', '" +  n + "', '" + req.body.toWhom + "')";
//var chatQuery="insert into chat (room, nickname, message, updated_at, toWhom) values ('" + req.body.room + "', '" + req.body.nickname + "', '" + req.body.message + "', " +  new Date(date).toISOString().slice(0,10) + ", '" + req.body.toWhom + "')";

console.log("save chat sql: " + chatQuery);
//var chatQuery="insert into chat (room, nickname, message, updated_at, toWhom) values (?, ?, ?, ?, ?)", [req.body.room , req.body.nickname, req.body.message, new Date(), req.body.message];

//        sqlCall(chatQuery, function(err, data) {
//            if (typeof err !== "undefined" && err !== null) {
//              res.status(500).send({
//                error: err
//              });
//              return;
//            }
//             var person = {
//                       room: req.body.room, nickname: req.body.user, toWhom: req.body.toWhom, message: ''
//                };
//            res.json(data);
//         });

  new sql.ConnectionPool(dbConfig).connect().then(pool => {
     return pool.request().query(chatQuery)
     }).then(result => {
      // let chats = result.recordset;
       res.setHeader('Access-Control-Allow-Origin', '*');
        var person = {
            room: req.body.room, nickname: req.body.user, toWhom: req.body.toWhom, message: ''
         };

       res.status(200).json(req.body);
       sql.close();
     }).catch(err => {
       res.status(500).send({ message: err})
       sql.close();
     });

   // Chat.addChat(req.body, function (err, post) {
	//	  console.log('req.body: ' +  JSON.stringify(req.body));
//		    if (err) return next(err);
//		    console.log ("sav chat res: " + JSON.stringify(post));
//		    var person = {
//		       room: req.room, nickname: req.user, toWhom: req.toWhom, message: ''
//		    };

//		      res.json(req.body);

		     //res.json(person);
		  // res.json(post);
 		//});
};

// Display chat delete form on GET
exports.chat_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: chat delete GET');
};

// Handle chat delete on POST
exports.chat_delete_post = function(req, res, next) {
		console.log('/deletechat  put');
	 // Chat.deleteChat(req.body, function (err, put) {
	//	console.log('deleteing...');
	//    if (err) return next(err);
	//    console.log ("del chat res: " + JSON.stringify(put));
	//    res.json(put);
	//  });
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

