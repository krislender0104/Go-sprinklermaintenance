var express = require("express");
var router = express.Router();
var app = express();

var path = require("path");
//var controllerpth=path.resolve("./")  +'/node_controllers/hazards/hazardsController';
var controllerpth='../../node_controllers/hazards/hazardsController';
hazard_controller = require(controllerpth);

 router.get('/:id', hazard_controller.hazard_detail);

 router.post('/hazardupdate/:id', hazard_controller.hazard_update_post);
 router.post('/hazardcreate', hazard_controller.hazard_create_post);
 
module.exports = router;