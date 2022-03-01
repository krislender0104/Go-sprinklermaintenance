var express = require('express');
var router = express.Router();
var app = express();
chat_controller = require('../controllers/chatController');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

//var CryptoJS = require('crypto-js');


server.listen(4000);

// socket io
io.on('connection', function (socket) {
  console.log('chatuser connected');
  socket.on('disconnect', function() {
    console.log('chatuser disconnected');
  });
  socket.on('save-message', function (data) {

    console.log('save-msg-chat.js'+JSON.stringify(data));
    io.emit('new-message', { message: data });
  });
});


router.get('/', chat_controller.chat_get);

router.get('/:room', chat_controller.chat_all_by_room_get);

/* GET ROOM-chatuser-toWhomE CHATS */
router.get('/:room/:chatuser/:toWhom', chat_controller.chat_all_by_room_and_chatuser_and_whom_get);

/* GET ROOM-chatuser-toWhomE CHATS */
router.get('/:room/:chatuser', chat_controller.chat_all_by_room_and_chatuser);

/* POST request for creating chat. */
router.post('/', chat_controller.chat_create_post);

// POST request to delete chat
router.post('/:id/delete', chat_controller.chat_delete_post);


module.exports = router;


