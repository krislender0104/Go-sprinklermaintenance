var express = require('express');
var path = require('path');

var fs = require('fs');
var https = require('http');
// var https = require('https');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
var sql = require('mssql');
var app = module.exports = express();
var appConstants = require("./server/utils/appConstents.js");
var newJson = {};

// email packages
const mailer = require('express-mailer'); // call express
var cron = require('node-cron');



var config = {
  server: 'U21356133\\SQLSERVER2016',
  database: 'sprinkler ',
   user: 'sa',
   password: 'dan@999',
  options: {
      encrypt: false // Use this if you're on Windows Azure
  }
}

var dbConfig = {
  companies: 'sa',
  password: 'hms360!',
  server: '127.0.0.1\\SQLEXPRESS',
   database: 'MeanChat',
   name: 'default',
     pool: {
       max: 10,
       min: 4,
       idleTimeoutMillis: 30000,
     },
};
app.use(logger('dev'));
// app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.json({ limit: '50mb' }))
// const fileUpload = require('express-fileupload');
// app.use(fileUpload());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(express.static('server/pictures/ka200'));
app.use('/images', express.static(__dirname + '/Images'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());
require('./server/controllers/companyController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/deviceHistoryController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/historyController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/siteController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/siteNotesController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/surveysController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/technicicansController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/userController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/violationsController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/hazardController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/testController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/settingsController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/reportsController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/emailController.js')(app, express, cron, mailer, config, appConstants, dbConfig);
require('./server/controllers/webtestController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/letterController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/dashboardController.js')(app, express, cron, dbConfig, config, appConstants);
require('./server/controllers/imageProcessingController.js')(app, express, dbConfig, config, appConstants);
require('./server/controllers/paymentController.js')(app, express, dbConfig, config, appConstants);

console.log("Node Started");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/companieslist', function(request, response) {

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
    console.log("recordset");
    var newJson=recordset.recordsets[0];
       response.send(newJson);
    }
    conn.close();
    });
    });
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
});

// {
// key: fs.readFileSync('./certs/cert-enc.key'),
// cert: fs.readFileSync('./certs/cert.crt'),
// passphrase: 'qwert'
// },
https.createServer(app).listen(3333, function () {
  console.log('Example app listening on port 3333! Go to http://localhost:3333/')
})