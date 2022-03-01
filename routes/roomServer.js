var express = require('express');
var router = express.Router();
var app = express();
room_controller = require('../controllers/roomController');

/// room ROUTES ///
/* GET request for creating a room. NOTE This must come before route that displays room (uses id) */
router.get('/create', room_controller.room_create_get);

/* POST request for creating room. */
router.post('/', room_controller.room_create_post);

/* GET request to delete room. */
router.get('/:id/delete', room_controller.room_delete_get);

// POST request to delete room
router.post('/:id/delete', room_controller.room_delete_post);

/* GET request to update room. */
router.get('/:id/update', room_controller.room_update_get);

// POST request to update room
router.post('/:id/update', room_controller.room_update_post);

/* GET request for one room. */
router.get('/:id', room_controller.room_detail);

/* GET request for list of all room. */
router.get('/', room_controller.room_list);

module.exports = router;
