var express = require("express");
var router = express.Router();
var app = express();

var path = require("path");
//var controllerpth=path.resolve("./")  +'/node_controllers/tests/testsController';
var controllerpth='../../node_controllers/tests/testsController';
test_controller = require(controllerpth);

 router.get('/:id', test_controller.test_detail);

 router.post('/testupdate/:id', test_controller.test_update_post);
 router.post('/testcreate', test_controller.test_create_post);
 
module.exports = router;