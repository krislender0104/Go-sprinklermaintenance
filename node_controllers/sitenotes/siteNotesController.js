
exports.siteNotes_list = function(req, res, next) {
     console.log('/siteNotes get');

  // connect to your database
      siteNotesQuery="select * from siteNotes";



     // sqlCall(siteNotesQuery, function(err, data) {
     //     if (typeof err !== "undefined" && err !== null) {
    //        res.status(500).send({
    //          error: err
    //        });
    //        return;
   //       }
    //     siteNotes=data;
    //      res.json(siteNotes);
    //   });

new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(siteNotesQuery)
  }).then(result => {
    let siteNotes = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(siteNotes);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });


      //sql.close();
            //var query = "select * from [siteNotes]";
              //       executeQuery (res, query);

		//Chat.getsiteNotes(function (err, siteNotes) {
	  //  if (err) return next(err);
	  //  console.log ("siteNotes: " + JSON.stringify(siteNotes));
	  //  res.json(siteNotes);
 	 // });
};

// Display detail page for a specific siteNotes
exports.siteNotes_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: siteNotes detail: ' + req.params.id);
};

// Display siteNotes create form on GET
exports.siteNotes_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: siteNotes create GET');
};

// Handle siteNotes create on POST
exports.siteNotes_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: siteNotes create POST');
};

// Display siteNotes delete form on GET
exports.siteNotes_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: siteNotes delete GET');
};

// Handle siteNotes delete on POST
exports.siteNotes_delete_post = function(req, res, next) {
   //
};

// Display siteNotes update form on GET
exports.siteNotes_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: siteNotes update GET');
};

// Handle siteNotes update on POST
exports.siteNotes_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: siteNotes update POST');
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
