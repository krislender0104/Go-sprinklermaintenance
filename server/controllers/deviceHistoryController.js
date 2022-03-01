var mongoose = require('mongoose');
//var mysql = require('mysql');
var sql = require('mssql');
var jwt = require('jsonwebtoken');
var db = require('../../database/schemas/chat2');

module.exports = function(app, express, dbConfig, config, appConstants){
    // exports.user_list = function(req, res, next) {

      // exports.deviceHistory_list = function(req, res, next) {
  app.get(appConstants.DEVICE_HISTORY_LIST, ensuretoken, function(req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
     // connect to your database
    deviceHistoryQuery="select * from deviceHistory";
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
    }
  });
   });



   // Handle violatons delete on POST
    // exports.violatons_delete_post = function(req, res, next) {
    app.get(appConstants.DEVICE_HISTORY_DELETE, function(req, res) {
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

}
