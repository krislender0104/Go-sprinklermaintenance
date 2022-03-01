var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
var sql = require('mssql');
//var db = require('../database');

var passwordHash = require('password-hash');
//var passwordHash = require('./lib/password-hash');

var newJson = {};
//var db2 = new sql.ConnectionPool(dbConfig);

//var chat = require('./routes/chat/chatServer');
//var users = require('./routes/chat/userServer');
//var rooms = require('./routes/chat/roomServer');
var app = express();
var router = express.Router();

app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());
app.use('/api', router);

var companyRouter = require('./node_routes/companies/company'); 
app.use('/company', companyRouter);

var siteRouter = require('./node_routes/sites/site'); 
app.use('/site', siteRouter);

var hazardRouter = require('./node_routes/hazards/hazard');
app.use('/hazard', hazardRouter);

var testRouter = require('./node_routes/tests/test');
app.use('/test', testRouter);


var techniciansRouter = require('./node_routes/technicians/userServer');
app.use('/technician', techniciansRouter);

console.log("Node Started");
// var hashedPassword = passwordHash.generate('test');
// console.log(hashedPassword);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/users', function (req, res) {
  res.send("users");
})
router.get('/roles', function (req, res) {
  res.send("roles");
})
var constringFile = require('./src/urlconstants');
var config = constringFile.dbConfig;

router.get('/companyById', function(request, response) {
  
  var conn=new sql.ConnectionPool(config);

  var req=new sql.Request(conn);
  conn.connect(function(err){
    if(err){
    console.log(err);
    return;
    }
    var companyId=request.query.id;
    console.log(companyId);
    var query ="select  * from Companies where companyId= " + companyId;
    req.query(query,function(err,recordset){
    if(err){
    console.log(err);
    }
    else{
    //console.log(recordset);
    var newJson=recordset.recordsets[0];
       response.send(newJson);
    }
    conn.close();
    });
    });
});
// const Cryptr = require('cryptr');
// const cryptr = new Cryptr('myTotalySecretKey');
// const encryptedString = cryptr.encrypt('test');
// const decryptedString = cryptr.decrypt(encryptedString);
 
//console.log(encryptedString); // 5590fd6409be2494de0226f5d7
//console.log(decryptedString); // bacon
// var sha1 = require('sha1');
// console.log(sha1("test"));
router.get('/companieslist', function(request, response) {
  
  var conn=new sql.ConnectionPool(config);
  //conn.connect();
  var req=new sql.Request(conn);
  conn.connect(function(err){
    if(err){
    console.log(err);
    return;
    }
    req.query("select  top 10 * from Companies ",function(err,recordset){
    if(err){
    console.log(err);
    }
    else{
    console.log(recordset);
    var newJson=recordset.recordsets[0];
       response.send(newJson);
    }
    conn.close();
    });
    });
});

// router.post('/company', function(req, res) {
//   var company_id = req.body.id;
//   var Name = req.body.Name;
//   console.log("Tokay123 log "+company_id + '/ ' + Name);
//   //res.send(company_id + ' ' + Name);
//   res.send("Insert Success");
// });

//app.use('/chat', chat);
//app.use('/chatusers', chatusers);
//app.use('/rooms', rooms);

var foods = [
  { "id": 1, "name": "Donuts" },
  { "id": 2, "name": "Pizza" },
  { "id": 3, "name": "Tacos" }
];
// the GET "books" API endpoint
app.get('/api/foods', function (req, res) {
  res.send(foods);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

	res.json({
		message: res.locals.message,
    error: {}
	});
//  res.render('error');
});

app.listen(3333);
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);
module.exports = app;
