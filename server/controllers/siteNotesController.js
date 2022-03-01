var mongoose = require('mongoose');
//var mysql = require('mysql');
var sql = require('mssql');
var db = require('../../database/schemas/chat2');
var jwt = require('jsonwebtoken');

module.exports = function(app, express, dbConfig, config, appConstants){
  // exports.siteNotes_list = function(req, res, next) {
  app.get(appConstants.SITE_NOTE_LIST,ensuretoken, function(req, res) {
      //console.log('/siteNotes get');
      jwt.verify(req.token, 'Secretkey', function (err, data) {
        if (err) {
          res.sendStatus(403);
        } else {
   // connect to your database
       siteNotesQuery="select * from siteNotes";

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
  }
});
 });

// exports.siteNotes_delete_post = function(req, res, next) {
  app.post(appConstants.SITE_NOTE_DELETE_POST, function(req, res) {
  //
});
function ensuretoken(req,res,next){
  const bearerHeader = req.headers["authorization"];
  if(typeof bearerHeader != 'undefined'){
    const bearer=bearerHeader.split(" ");
    const bearertoken=bearer[1];
    req.token=bearertoken;
    next();
  }else{
    res.sendStatus(403);
  }
}


};
