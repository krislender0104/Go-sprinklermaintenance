var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mysql = require('mysql');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var db = require('../database');
//var CryptoJS = require('crypto-js');
var Chat = db.chat;

server.listen(4000);

// socket io
io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('disconnect', function() {
    console.log('User disconnected');
  });
  socket.on('save-message', function (data) {

    console.log('save-msg-chat.js'+JSON.stringify(data));
    io.emit('new-message', { message: data });
  });
});


/* login */
router.post('/login', function(req, res, next) {
  console.log('/login  post');
  console.log('req.body Login: ' +  JSON.stringify(req.body));
  Chat.login(eq.body.room, req.body.user, function (err, logins) {
  console.log('trying login:');
    if (err) return next(err);
    console.log ("return login data: " + JSON.stringify(logins));
    res.json(logins);
  });
});


/* GET ALL Rooms */
router.get('/rooms', function(req, res, next) {
console.log('/:room get');
Chat.getAllRooms(req.params.room , function (err, rooms) {
    if (err) return next(err);
    console.log ("rooms: " + JSON.stringify(rooms));
    res.json(rooms);
  });
});


/* SAVE room */
router.post('/rooms', function(req, res, next) {
console.log('/  post');
  Chat.addUser(req.body, function (err, post) {
  console.log('req.body: ' +  JSON.stringify(req.body));
    if (err) return next(err);
    console.log ("sav room res: " + JSON.stringify(post));
        res.json(req.body);
  });

});


/* Delete rooms */
router.put('/rooms', function(req, res, next) {
console.log('/rooms  put');
  Chat.deleteUser(req.body, function (err, put) {
console.log('deleteing...');
    if (err) return next(err);
    console.log ("del rooms res: " + JSON.stringify(put));
    res.json(put);
  });
});


/* GET ALL Users */
router.get('/users', function(req, res, next) {
console.log('/users get');
Chat.getAllUsers(req.params.room , function (err, users) {
    if (err) return next(err);
    console.log ("rooms: " + JSON.stringify(users));
    res.json(users);
  });
});

/* SAVE User */
router.post('/saveuser', function(req, res, next) {
console.log('/  post');
  Chat.addUser(req.body, function (err, post) {
  console.log('req.body: ' +  JSON.stringify(req.body));
    if (err) return next(err);
    console.log ("sav user res: " + JSON.stringify(post));
        res.json(req.body);
  });

});

/* Delete Users */
router.put('/users', function(req, res, next) {
console.log('/users  put');
  Chat.deleteUser(req.body, function (err, put) {
console.log('deleteing...');
    if (err) return next(err);
    console.log ("del user res: " + JSON.stringify(put));
    res.json(put);
  });
});


/* GET ALL CHATS */
router.get('/:room', function(req, res, next) {
console.log('/:room get');
console.log('room = ' + req.params.room);
Chat.getAllByRoom(req.params.room , function (err, chats) {
console.log('Chat find');
    if (err) return next(err);
    console.log ("room chat chats: " + JSON.stringify(chats));
    res.json(chats);
  });
});


/* Delete CHATS */
router.put('/', function(req, res, next) {
  console.log('/deletechat  put');
  Chat.deleteChat(req.body, function (err, put) {
    console.log('deleteing...');
    if (err) return next(err);
    console.log ("del chat res: " + JSON.stringify(put));
    res.json(put);
  });
});



router.get('/:room/:user/:toWhom', function(req, res, next) {
  console.log('/:room get');
  console.log('room = ' + req.params.room);
  Chat.getAllByRoomAndUserAndWhom(req.params.room, req.params.user, req.params.toWhom, function (err, chats) {
      console.log('Chat find');
      if (err) return next(err);
      console.log ("room chat chats: " + JSON.stringify(chats));
      res.json(chats);
    });
});


/* SAVE CHAT */
//router.post('/', function(req, res, next) {
//console.log('/  post');
//  var password = "HackersSeeIT";
//  var message = req.body.message.toString().replace(' ', '+');
//  req.body.message = CryptoJS.AES.decrypt(message, password).toString(CryptoJS.enc.Utf8);
//  Chat.addChat(req.body, function (err, post) {
//    if (err) return next(err);
//    res.json(post);
//  });
//});


/* SAVE CHAT */
router.post('/', function(req, res, next) {
console.log('/  post');

  Chat.addChat(req.body, function (err, post) {
  console.log('req.body: ' +  JSON.stringify(req.body));
    if (err) return next(err);
    console.log ("sav chat res: " + JSON.stringify(post));
    var person = {
       room: req.room, nickname: req.user, toWhom: req.toWhom, message: ''
    };

      res.json(req.body);

     //res.json(person);
  // res.json(post);
  });

});




module.exports = router;
