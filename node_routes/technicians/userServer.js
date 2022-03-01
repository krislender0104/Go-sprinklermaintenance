var express = require("express");
var router = express.Router();
var app = express();
//technicians_controller = require("../../node_controllers/technicians/technicicansController");
technicians_controller = require("../../node_controllers/technicians/technicicansController");
/// USER ROUTES ///
/* GET request for creating a user. NOTE This must come before route that displays user (uses id) */
// router.get("/create", technicians_controller.technicians_create_get);

// /* POST request for creating user. */
// router.post("/", technicians_controller.technicians_create_post);

// /* GET request to delete user. */
// router.get("/:id/delete", technicians_controller.technicians_delete_get);

// // POST request to delete user
// router.post("/:id/delete", technicians_controller.technicians_delete_post);

// /* GET request to update user. */
// router.get("/:id/update", technicians_controller.technicians_update_get);

// // POST request to update user
// router.post("/:id/update", technicians_controller.technicians_update_post);

// /* GET request for one user. */
// router.get("/:id", technicians_controller.technicians_detail);

/* GET request for list of all user. */
router.get("/", technicians_controller.technicians_list);


router.get('/devtypes/', technicians_controller.devtypes_list);
router.get('/testkit/', technicians_controller.testkit_list);
router.get('/companies/', technicians_controller.companies_list);

router.post('/devtypecreate', technicians_controller.devtypes_create_post);
router.post('/testkitcreate', technicians_controller.testkit_create_post);
router.post('/companiescreate', technicians_controller.companies_create_post);
router.post('/technicianscreate', technicians_controller.technicians_create_post);


router.post('/devtypeupdate', technicians_controller.devtypes_update_post);
router.post('/testkitupdate', technicians_controller.testkit_update_post);
router.post('/companiesupdate', technicians_controller.companies_update_post);
router.post('/techniciansupdate', technicians_controller.technicians_Update_postData);



router.get('/devtype/:id', technicians_controller.devtypes_details_get);
router.get('/testkit/:id', technicians_controller.testkit_details_get);
router.get('/Company/:id', technicians_controller.companies_details_get);
router.get('/technician/:id', technicians_controller.technicians_details_get);

module.exports = router;
