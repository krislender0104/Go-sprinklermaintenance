var express = require("express");
var router = express.Router();
var app = express();

var path = require("path");
//var controllerpth=path.resolve("./")  +'/node_controllers/sites/sitesController';
var controllerpth='../../node_controllers/sites/sitesController';
site_controller = require(controllerpth);

 router.get('/', site_controller.sites_list);
 router.get('/:id', site_controller.sites_detail);
 router.get('/sitehazards/:id', site_controller.sites_hazrdslist);
 router.get('/sitehazardstests/:id', site_controller.sites_hazards_testslist);
 router.get('/sitesTree/:id', site_controller.sites_tree_list);
 router.post('/authenticate/:id', site_controller.user_login_post);

 //router.post('/', site_controller.sites_create_post);

 router.post('/siteupdateget/:id', site_controller.sites_update_get);
 router.post('/sitecreate', site_controller.sites_create_post);

 

 router.post('/filtersite/:id', site_controller.filter_sites_list);
 router.get('/sitesearch/:id', site_controller.sites_search);
  
module.exports = router;