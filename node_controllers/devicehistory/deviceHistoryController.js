
exports.deviceHistory_list = function(req, res, next) {
     console.log('/deviceHistory get');

  // connect to your database
      deviceHistoryQuery="select * from deviceHistory";



     // sqlCall(deviceHistoryQuery, function(err, data) {
     //     if (typeof err !== "undefined" && err !== null) {
    //        res.status(500).send({
    //          error: err
    //        });
    //        return;
   //       }
    //     deviceHistory=data;
    //      res.json(deviceHistory);
    //   });

new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(deviceHistoryQuery)
  }).then(result => {
    let deviceHistory = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(deviceHistory);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });


      //sql.close();
            //var query = "select * from [deviceHistory]";
              //       executeQuery (res, query);

		//Chat.getdeviceHistory(function (err, deviceHistory) {
	  //  if (err) return next(err);
	  //  console.log ("deviceHistory: " + JSON.stringify(deviceHistory));
	  //  res.json(deviceHistory);
 	 // });
};

// Display detail page for a specific deviceHistory
exports.deviceHistory_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: deviceHistory detail: ' + req.params.id);
};

// Display deviceHistory create form on GET
exports.deviceHistory_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: deviceHistory create GET');
};

// Handle deviceHistory create on POST
exports.deviceHistory_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: deviceHistory create POST');
};

// Display deviceHistory delete form on GET
exports.deviceHistory_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: deviceHistory delete GET');
};

// Handle deviceHistory delete on POST
exports.deviceHistory_delete_post = function(req, res, next) {
   //
};

// Display deviceHistory update form on GET
exports.deviceHistory_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: deviceHistory update GET');
};

// Handle deviceHistory update on POST
exports.deviceHistory_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: deviceHistory update POST');
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
