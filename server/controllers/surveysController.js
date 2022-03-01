var mongoose = require('mongoose');
//var mysql = require('mysql');
var sql = require('mssql');
var db = require('../../database/schemas/chat2');
var jwt = require('jsonwebtoken');

module.exports = function(app, express, dbConfig, config, appConstants){
    // exports.user_list = function(req, res, next) {

app.get(appConstants.SURVEYS_LIST, ensuretoken,function(req, res) {
  jwt.verify(req.token, 'Secretkey', function (err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
  // connect to your database
    surveysQuery="select * from surveys";
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
  }
});
});

// Handle user delete on POST surveys_delete_post
app.post(appConstants.SURVEYS_LIST_DELETE_POST, ensuretoken,function(req, res) {
    // console.log('/rooms  put');
     //	  Chat.deleteUser(req.body, function (err, put) {
     //			console.log('deleteing...');
     //	    if (err) return next(err);
     //	    console.log ("del rooms res: " + JSON.stringify(put));
     //	    res.json(put);
     //	  });
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
