
exports.chatuser_list = function(req, res, next) {
     console.log('/users get');

  // connect to your database
      userQuery="select * from chatusers";



     // sqlCall(userQuery, function(err, data) {
     //     if (typeof err !== "undefined" && err !== null) {
    //        res.status(500).send({
    //          error: err
    //        });
    //        return;
   //       }
    //     users=data;
    //      res.json(users);
    //   });

new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(userQuery)
  }).then(result => {
    let users = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(users);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });


      //sql.close();
            //var query = "select * from [users]";
              //       executeQuery (res, query);

		//Chat.getUsers(function (err, users) {
	  //  if (err) return next(err);
	  //  console.log ("users: " + JSON.stringify(users));
	  //  res.json(users);
 	 // });
};

// Display detail page for a specific user
exports.chatuser_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: user detail: ' + req.params.id);
};

// Display user create form on GET
exports.chatuser_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: user create GET');
};

// Handle user create on POST
exports.chatuser_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: user create POST');
};

// Display user delete form on GET
exports.chatuser_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: user delete GET');
};

// Handle user delete on POST
exports.chatuser_delete_post = function(req, res, next) {
   // console.log('/rooms  put');
	//	  Chat.deleteUser(req.body, function (err, put) {
	//			console.log('deleteing...');
	//	    if (err) return next(err);
	//	    console.log ("del rooms res: " + JSON.stringify(put));
	//	    res.json(put);
	//	  });
};

// Display user update form on GET
exports.chatuser_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: user update GET');
};

// Handle user update on POST
exports.chatuser_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: user update POST');
};



