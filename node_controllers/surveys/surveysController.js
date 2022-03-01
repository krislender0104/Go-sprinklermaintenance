
exports.surveys_list = function(req, res, next) {
     console.log('/surveyss get');

  // connect to your database
      surveysQuery="select * from surveys";



     // sqlCall(surveysQuery, function(err, data) {
     //     if (typeof err !== "undefined" && err !== null) {
    //        res.status(500).send({
    //          error: err
    //        });
    //        return;
   //       }
    //     surveyss=data;
    //      res.json(surveyss);
    //   });

new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(surveysQuery)
  }).then(result => {
    let surveyss = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(surveyss);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });


      //sql.close();
            //var query = "select * from [surveyss]";
              //       executeQuery (res, query);

		//Chat.getsurveyss(function (err, surveyss) {
	  //  if (err) return next(err);
	  //  console.log ("surveyss: " + JSON.stringify(surveyss));
	  //  res.json(surveyss);
 	 // });
};

// Display detail page for a specific surveys
exports.surveys_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: surveys detail: ' + req.params.id);
};

// Display surveys create form on GET
exports.surveys_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: surveys create GET');
};

// Handle surveys create on POST
exports.surveys_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: surveys create POST');
};

// Display surveys delete form on GET
exports.surveys_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: surveys delete GET');
};

// Handle surveys delete on POST
exports.surveys_delete_post = function(req, res, next) {
   //
};

// Display surveys update form on GET
exports.surveys_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: surveys update GET');
};

// Handle surveys update on POST
exports.surveys_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: surveys update POST');
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
