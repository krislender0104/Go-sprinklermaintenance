var express = require('express');
var router = express.Router();
var app = express();
chatUser_controller = require('../controllers/chat/chatUserController');

/// USER ROUTES ///
/* GET request for creating a user. NOTE This must come before route that displays user (uses id) */
router.get("/create", chatUser_controller.user_create_get);

/* POST request for creating user. */
router.post("/", chatUser_controller.user_create_post);

/* GET request to delete user. */
router.get("/:id/delete", chatUser_controller.user_delete_get);

// POST request to delete user
router.post("/:id/delete", chatUser_controller.user_delete_post);

/* GET request to update user. */
router.get("/:id/update", chatUser_controller.user_update_get);

// POST request to update user
router.post("/:id/update", chatUser_controller.user_update_post);

/* GET request for one user. */
router.get("/:id", chatUser_controller.user_detail);

/* GET request for list of all user. */
router.get('/', user_controller.user_list);

module.exports = router;