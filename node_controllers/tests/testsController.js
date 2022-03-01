var sql = require('mssql');
var constringFile = require('../../src/urlconstants');
var dbConfig = constringFile.dbConfig;

  exports.test_detail=function(req,res,next){
      //res.send("test Details");
    testdetailQuery="select testid as testId, siteId as siteId , HazId as hazardId , iDate as itestdate , iTestById as itesterid , iTestBy as itestername , icompany as icompany , iType as itesttype , iTestKit as itestkit , '' as ilinepsi , '' as itestflag , '' as itestudt5 , '' as ivalue1 , '' as ivalue1_close , '' as ivalue1_leak , '' as ivalue2 , '' as ivalue2_close , '' as ivalue2_leak , '' as ivaluerelief , '' as ivaluerelief_close , '' as ivaluerelief_leak , '' as ibuffer , '' as inotes , fdate as ftestdate , ftestbyid as ftesterid , ftestby as ftestername , fcompany as fcompany , ftype as ftesttype , ftestkit as ftestkit , '' as flinepsi , '' as ftestflag , '' as ftestudt5 , '' as fvalue1 , '' as fvalue1_close , '' as fvalue1_leak , '' as fvalue2 , '' as fvalue2_close , '' as fvalue2_leak , '' as fvaluerelief , '' as fvaluerelief_close , '' as fvaluerelief_leak , fbuffer as fbuffer , '' as fnotes , testdue as testdue , '' as scheduledate , noticesent1 as notice1 , noticesent2 as notice2 , noticesent3 as notice3 , noticesent4 as notice4 from devtests where testid=" + req.params.id;
    new sql.ConnectionPool(dbConfig).connect().then(pool => {
    return pool.request().query(testdetailQuery)
    }).then(result => {
      let test = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(test);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err})
      sql.close();
    });
  }
  exports.test_create_post = function(req, res, next) {
    var testdata = req.body["data"];
  //res.send(testdata);
    var siteId = testdata.siteId;
    var hazardId = testdata.hazardId;
    //var testId = testdata.testId;
//res.send(testdata);
    var devicesn1 =testdata.devicesn1;
    var testdate1 =testdata.testdate1;
    var tester1 =testdata.tester1;
    var result1 =testdata.result1;
    var comments1 =testdata.comments1;
    var lasttest1 =testdata.lasttest1;

    // var devicesn2 =testdata.devicesn2;
    // var testdate2 =testdata.testdate2;
    // var tester2 =testdata.tester2;
    // var result2 =testdata.result2;
    // var comments2 =testdata.comments2;
    // var lasttest2 =testdata.lasttest2;

    // var devicesn3 =testdata.devicesn3;
    // var testdate3 =testdata.testdate3;
    // var tester3 =testdata.tester3;
    // var result3 =testdata.result3;
    // var comments3 =testdata.comments3;
    // var lasttest3 =testdata.lasttest3;

    //res.send(sitedata);
  var conn = new sql.ConnectionPool(dbConfig);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('siteId',   sql.Int, siteId);
    request.input('hazardId',  sql.Int, hazardId);
    //Initial Test results
    request.input('devicesn1', sql.VarChar(50), devicesn1);
    request.input('testdate1', sql.VarChar(50), testdate1);
    request.input('tester1', sql.VarChar(50), tester1);
    request.input('result1', sql.VarChar(50), result1);
    request.input('comments1', sql.VarChar(50), comments1);
    request.input('lasttest1', sql.VarChar(50), lasttest1);
    
    request.execute('sp_Createtest').then(function(err, recordsets, returnValue, affected) {
      res.send('Created test');
      console.dir(err);
    }).catch(function(err) {
      console.log(err);
    });
  });
    res.send('test Created');
  };

  exports.test_update_post = function(req, res, next) {
    //Read data from request 
    var testdata = req.body["data"];
  
    //Insert or update on companyId,siteId and hazardId
    var siteId = testdata.siteId;
    var hazardId = testdata.hazardId;
    var testid = testdata.testid;

    //Initial Test results
    var itestdate =testdata.itestdate;
    var itesterid =testdata.itesterid;
    var itestername =testdata.itestername;
    var icompany =testdata.icompany;
    var itesttype =testdata.itesttype;
    var itestkit =testdata.itestkit;
    var ilinepsi =testdata.ilinepsi;
    var itestflag =testdata.itestflag;
    var itestudt5 =testdata.itestudt5;
    var ivalue1 =testdata.ivalue1;
    var ivalue1_close =testdata.ivalue1_close;
    var ivalue1_leak =testdata.ivalue1_leak;
    var ivalue2 =testdata.ivalue2;
    var ivalue2_close =testdata.ivalue2_close;
    var ivalue2_leak =testdata.ivalue2_leak;
    var ivaluerelief =testdata.ivaluerelief;
    var ivaluerelief_close =testdata.ivaluerelief_close;
    var ivaluerelief_leak =testdata.ivaluerelief_leak;
    var ibuffer =testdata.ibuffer;
    var inotes =testdata.inotes;

    //final test results
    var ftestdate =testdata.ftestdate;
    var ftesterid =testdata.ftesterid;
    var ftestername =testdata.ftestername;
    var fcompany =testdata.fcompany;
    var ftesttype =testdata.ftesttype;
    var ftestkit =testdata.ftestkit;
    var flinepsi =testdata.flinepsi;
    var ftestflag =testdata.ftestflag;
    var ftestudt5 =testdata.ftestudt5;
    var fvalue1 =testdata.fvalue1;
    var fvalue1_close =testdata.fvalue1_close;
    var fvalue1_leak =testdata.fvalue1_leak;
    var fvalue2 =testdata.fvalue2;
    var fvalue2_close =testdata.fvalue2_close;
    var fvalue2_leak =testdata.fvalue2_leak;
    var fvaluerelief =testdata.fvaluerelief;
    var fvaluerelief_close =testdata.fvaluerelief_close;
    var fvaluerelief_leak =testdata.fvaluerelief_leak;
    var fbuffer =testdata.fbuffer;
    var fnotes =testdata.fnotes;

    //Test Report
    var testdue =testdata.testdue;
    var scheduledate =testdata.scheduledate;
    var notice1 =testdata.notice1;
    var notice2 =testdata.notice2;
    var notice3 =testdata.notice3;
    var notice4 =testdata.notice4;

    //db transaction to insert fields through sp or inline query goes here
    var conn = new sql.ConnectionPool(dbConfig);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('siteId',   sql.Int, siteId);
    request.input('hazardId',  sql.Int, hazardId);
    request.input('testId',  sql.Int, testid);
      //Initial Test results
   request.input('itestdate', sql.VarChar(50), itestdate);
   request.input('itesterid', sql.VarChar(50), itesterid);
   request.input('itestername', sql.VarChar(50), itestername);
   request.input('icompany', sql.VarChar(50), icompany)
   request.input('itesttype', sql.VarChar(50), itesttype);
   request.input('itestkit', sql.VarChar(50), itestkit);
   request.input('ilinepsi', sql.VarChar(50), ilinepsi);
   request.input('itestflag', sql.VarChar(50), itestflag);
   request.input('itestudt5', sql.VarChar(50), itestudt5);
   request.input('ivalue1', sql.VarChar(50), ivalue1);
   request.input('ivalue1_close', sql.VarChar(50), ivalue1_close);
   request.input('ivalue1_leak', sql.VarChar(50), ivalue1_leak);
   request.input('ivalue2', sql.VarChar(50), ivalue2);
   request.input('ivalue2_close', sql.VarChar(50), ivalue2_close);
   request.input('ivalue2_leak', sql.VarChar(50), ivalue2_leak);
   request.input('ivaluerelief', sql.VarChar(50), ivaluerelief);
   request.input('ivaluerelief_close', sql.VarChar(50), ivaluerelief_close);
   request.input('ivaluerelief_leak', sql.VarChar(50), ivaluerelief_leak)
   request.input('ibuffer', sql.VarChar(50), ibuffer);
   request.input('inotes', sql.VarChar(50), inotes);
      //final test results
   request.input('ftestdate', sql.VarChar(50), ftestdate);
   request.input('ftesterid', sql.VarChar(50), ftesterid);
   request.input('ftestername', sql.VarChar(50), ftestername);
   request.input('fcompany', sql.VarChar(50), fcompany);
   request.input('ftesttype', sql.VarChar(50), ftesttype);
   request.input('ftestkit', sql.VarChar(50), ftestkit);
   request.input('flinepsi', sql.VarChar(50), flinepsi);
   request.input('ftestflag', sql.VarChar(50), ftestflag);
   request.input('ftestudt5', sql.VarChar(50), ftestudt5);
   request.input('fvalue1', sql.VarChar(50), fvalue1);
   request.input('fvalue1_close', sql.VarChar(50), fvalue1_close);
   request.input('fvalue1_leak', sql.VarChar(50), fvalue1_leak);
   request.input('fvalue2', sql.VarChar(50), fvalue2);
   request.input('fvalue2_close', sql.VarChar(50), fvalue2_close);
   request.input('fvalue2_leak', sql.VarChar(50), fvalue2_leak);
   request.input('fvaluerelief', sql.VarChar(50), fvaluerelief);
   request.input('fvaluerelief_close', sql.VarChar(50), fvaluerelief_close);
   request.input('fvaluerelief_leak', sql.VarChar(50), fvaluerelief_leak);
   request.input('fbuffer', sql.VarChar(50), fbuffer);
   request.input('fnotes', sql.VarChar(50), fnotes);
    //Test Report
   request.input('testdue', sql.VarChar(50), testdue);
   request.input('scheduledate', sql.VarChar(50), scheduledate);
   request.input('notice1', sql.VarChar(50), notice1);
   request.input('notice2', sql.VarChar(50), notice2);
   request.input('notice3', sql.VarChar(50), notice3);
   request.input('notice4',sql.VarChar(50) ,notice4);
    request.execute('sp_updatetest').then(function(err, recordsets, returnValue, affected) {
      res.send('Updated test');
      console.dir(err);
    }).catch(function(err) {
      console.log(err);
    });
  });
    res.send('test Updated');
  };