var sql = require('mssql');
var constringFile = require('../../src/urlconstants');
var dbConfig = constringFile.dbConfig;


  exports.dataset_list = function(req, res, next) {
     companiesQuery="select clientId,ClientName from dataset";
new sql.ConnectionPool(dbConfig).connect().then(pool => {
 return pool.request().query(companiesQuery)
 }).then(result => {
   let datasets = result.recordset;
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.status(200).json(datasets);
   sql.close();
 }).catch(err => {
   res.status(500).send({ message: err})
   sql.close();
 });
};
exports.companies_list = function(req, res, next) {
     console.log('/companiess get');
  // connect to your database
      companiesQuery="select * from companies";
new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(companiesQuery)
  }).then(result => {
    let companiess = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(companiess);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });
};

// Display detail page for a specific companies
exports.companies_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies detail: ' + req.params.id);
};

// Display companies create form on GET
exports.companies_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies create GET');
};

// Handle companies create on POST
exports.companies_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies create POST');
};

// Display companies delete form on GET
exports.companies_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies delete GET');
};

// Handle companies delete on POST
exports.companies_delete_post = function(req, res, next) {
   //
};

// Display companies update form on GET
exports.companies_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies update GET');
};

// Handle companies update on POST
exports.companies_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies update POST');
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
