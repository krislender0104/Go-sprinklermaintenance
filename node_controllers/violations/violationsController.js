
exports.violatons_list = function(req, res, next) {
     console.log('/violatonss get');

  // connect to your database
      violatonsQuery="select * from violatons";



     // sqlCall(violatonsQuery, function(err, data) {
     //     if (typeof err !== "undefined" && err !== null) {
    //        res.status(500).send({
    //          error: err
    //        });
    //        return;
   //       }
    //     violatonss=data;
    //      res.json(violatonss);
    //   });

new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(violatonsQuery)
  }).then(result => {
    let violatonss = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(violatonss);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });


      //sql.close();
            //var query = "select * from [violatonss]";
              //       executeQuery (res, query);

		//Chat.getviolatonss(function (err, violatonss) {
	  //  if (err) return next(err);
	  //  console.log ("violatonss: " + JSON.stringify(violatonss));
	  //  res.json(violatonss);
 	 // });
};

// Display detail page for a specific violatons
exports.violatons_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: violatons detail: ' + req.params.id);
};

// Display violatons create form on GET
exports.violatons_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: violatons create GET');
};

// Handle violatons create on POST
exports.violatons_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: violatons create POST');
};

// Display violatons delete form on GET
exports.violatons_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: violatons delete GET');
};

// Handle violatons delete on POST
exports.violatons_delete_post = function(req, res, next) {
   //
};

// Display violatons update form on GET
exports.violatons_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: violatons update GET');
};

// Handle violatons update on POST
exports.violatons_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: violatons update POST');
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
