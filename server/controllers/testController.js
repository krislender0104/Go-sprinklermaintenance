var sql = require('mssql');
var jwt = require('jsonwebtoken');

module.exports = function (app, express, dbConfig, config, appConstants) {

  app.get(appConstants.TEST_DETAILS, ensuretoken,function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    // testdetailQuery="select testid as testId, siteId as siteId , HazId as hazardId , iDate as itestdate , iTestById as itesterid , iTestBy as itestername , icompany as icompany , iType as itesttype , iTestKit as itestkit , '' as ilinepsi , '' as itestflag , '' as itestudt5 , '' as ivalue1 , '' as ivalue1_close , '' as ivalue1_leak , '' as ivalue2 , '' as ivalue2_close , '' as ivalue2_leak , '' as ivaluerelief , '' as ivaluerelief_close , '' as ivaluerelief_leak , '' as ibuffer , '' as inotes , fdate as ftestdate , ftestbyid as ftesterid , ftestby as ftestername , fcompany as fcompany , ftype as ftesttype , ftestkit as ftestkit , '' as flinepsi , '' as ftestflag , '' as ftestudt5 , '' as fvalue1 , '' as fvalue1_close , '' as fvalue1_leak , '' as fvalue2 , '' as fvalue2_close , '' as fvalue2_leak , '' as fvaluerelief , '' as fvaluerelief_close , '' as fvaluerelief_leak , fbuffer as fbuffer , '' as fnotes , testdue as testdue , '' as scheduledate , noticesent1 as notice1 , noticesent2 as notice2 , noticesent3 as notice3 , noticesent4 as notice4 from devtests where testid=" + req.params.id;
    var testdetailQuery = '';
    testdetailQuery = testdetailQuery + " select ipass,testid as testId, siteId as siteId , HazId as hazardId , ";
    testdetailQuery = testdetailQuery + " iDate as itestdate , iTestById as itesterid , iTestBy as itestername ,";
    testdetailQuery = testdetailQuery + " icompany as icompany , iType as itesttype ,";
    testdetailQuery = testdetailQuery + " iTestKit as itestkit , LinePsi as ilinepsi ,(select Notes from devtestnotes where testid='"+req.params.id+"') as inotes, ";
    testdetailQuery = testdetailQuery + " I1AiPsi as ivalue1 ,I1Ai as ivalue1_close ,   ";
    testdetailQuery = testdetailQuery + " I2CvPsi as ivalue2 , I2Cv  as ivalue2_close , ";
    testdetailQuery = testdetailQuery + " IrPsi as ivaluerelief ,    Irp  as ivaluerelief_close ,  UDT4 as UDT4 , ";
    testdetailQuery = testdetailQuery + " IBuffer as ibuffer ,  fdate as ftestdate ,";

    testdetailQuery = testdetailQuery + " ftestbyid as ftesterid , ftestby as ftestername ,";
    testdetailQuery = testdetailQuery + " fcompany as fcompany , ftype as ftesttype , ";
    testdetailQuery = testdetailQuery + " ftestkit as ftestkit ,Failtype as failtype, ";
    testdetailQuery = testdetailQuery + " RepairType as frepairtype, RepairBy as frepairby, ";
    testdetailQuery = testdetailQuery + "  F1AiPsi as fvalue1 , f1Ai as fvalue1_close , ";
    testdetailQuery = testdetailQuery + "  F2CvPsi as fvalue2 , f2Cv as fvalue2_close ,  ";
    testdetailQuery = testdetailQuery + "  FrPsi as fvaluerelief , frp as fvaluerelief_close , fpass, ";
    testdetailQuery = testdetailQuery + "  fbuffer as fbuffer ,  testdue as testdue , ";
    testdetailQuery = testdetailQuery + "  repairdate as repairdate ,repair as repair,udt8 as tranid,udt9,";
    testdetailQuery = testdetailQuery + "   noticesent1 as notice1 , ";
    testdetailQuery = testdetailQuery + "  noticesent2 as notice2 , noticesent3 as notice3 , noticesent4 as notice4 ";
    testdetailQuery = testdetailQuery + " from devtests where testid=" + req.params.id;

    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(testdetailQuery)
    }).then(result => {
      let test = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(test);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
    });
  }
});
  });

  app.delete(appConstants.SITE_TEST_DELETE,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    testQuery = "delete  from devtests where testid=" + req.params.id;
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(testQuery)
    }).then(result => {
      let test = result.rowsAffected;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(test);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
    });
  }
});
  });

  app.post(appConstants.TEST_CREATE,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    var testdata = req.body["data"];
    var siteId = testdata.siteId;
    var hazardId = testdata.hazardId;
    var devicesn1 = testdata.devicesn1;
    var testdate1 = testdata.testdate1;
    var tester1 = testdata.tester1;
    var result1 = testdata.result1;
    var comments1 = testdata.comments1;
    var lasttest1 = testdata.lasttest1;

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
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function (conn) {
      var request = new sql.Request(conn);
      request.input('siteId', sql.Int, siteId);
      request.input('hazardId', sql.Int, hazardId);
      //Initial Test results
      request.input('devicesn1', sql.VarChar(50), devicesn1);
      request.input('testdate1', sql.VarChar(50), testdate1);
      request.input('tester1', sql.VarChar(50), tester1);
      request.input('result1', sql.VarChar(50), result1);
      request.input('comments1', sql.VarChar(50), comments1);
      request.input('lasttest1', sql.VarChar(50), lasttest1);

      request.execute('sp_CreateTest').then(function (err, recordsets, returnValue, affected) {
        res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json('Test Created' );
      sql.close();
      }).catch(function (err) {
        res.status(500).send({ message: err })
        sql.close();
      });
    });
  }
});
  });

  app.post(appConstants.TEST_UPDATE,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    var testdata = req.body["data"];

    //Insert or update on companyId,siteId and hazardId
    var siteId = testdata.siteId;
    var hazardId = testdata.hazardId;
    var testid = testdata.testid;

    //Initial Test results
    var itestdate = testdata.itestdate;
    if (itestdate == ''||itestdate == null) {
      itestdate = null;
    }
    var itesterid = testdata.itesterid;
    var itestername = testdata.itestername;
    var icompany = testdata.icompany;
    var itesttype = testdata.itesttype;
    var itestkit = testdata.itestkit;
    var ilinepsi = testdata.ilinepsi;
    var itestflag = testdata.itestflag;
    var itestudt5 = testdata.itestudt5;
    var ivalue1 = testdata.ivalue1;
    var ivalue1_close = testdata.ivalue1_close;
    var ivalue1_leak = testdata.ivalue1_leak;
    var ivalue2 = testdata.ivalue2;
    var ivalue2_close = testdata.ivalue2_close;
    var ivalue2_leak = testdata.ivalue2_leak;
    var ivaluerelief = testdata.ivaluerelief;
    var ivaluerelief_close = testdata.ivaluerelief_close;
    var ivaluerelief_leak = testdata.ivaluerelief_leak;
    var ibuffer = testdata.ibuffer;
    var inotes = testdata.inotes;
    var UDT4 = testdata.UDT4;

    //final test results
    var ftestdate = testdata.ftestdate;
    if (ftestdate == ''||ftestdate == null) {
      ftestdate = null;
    }
    var ftesterid = testdata.ftesterid;
    var ftestername = testdata.ftestername;
    var fcompany = testdata.fcompany;
    var ftesttype = testdata.ftesttype;
    var ftestkit = testdata.ftestkit;
    var flinepsi = testdata.flinepsi;
    var ftestflag = testdata.ftestflag;
    var ftestudt5 = testdata.ftestudt5;
    var fvalue1 = testdata.fvalue1;
    var fvalue1_close = testdata.fvalue1_close;
    var fvalue1_leak = testdata.fvalue1_leak;
    var fvalue2 = testdata.fvalue2;
    var fvalue2_close = testdata.fvalue2_close;
    var fvalue2_leak = testdata.fvalue2_leak;
    var fvaluerelief = testdata.fvaluerelief;
    var fvaluerelief_close = testdata.fvaluerelief_close;
    var fvaluerelief_leak = testdata.fvaluerelief_leak;
    var fbuffer = testdata.fbuffer;
    var fnotes = testdata.fnotes;
    var frepairby = testdata.frepairby;
    var frepairtype = testdata.frepairtype;

    //Test Report
    var testdue = testdata.testdue;
    if (testdue == ''||testdue == null) {
      testdue = null;
    }
    var ipass = testdata.ipass;
    var fpass = testdata.fpass;

    var repairdate = testdata.repairdate;
    if (repairdate == ''||repairdate == null) {
      repairdate = null;
    }
    var tranid = testdata.tranid;
    var failtype = testdata.failtype;
    var repair = testdata.repair;
    var udt9 = testdata.udt9;

    //db transaction to insert fields through sp or inline query goes here
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function (conn) {
      var request = new sql.Request(conn);
      request.input('siteId', sql.Int, siteId);
      request.input('hazardId', sql.Int, hazardId);
      request.input('testId', sql.Int, testid);
      //Initial Test results
      request.input('itestdate', sql.Date, itestdate);
      request.input('itesterid', sql.VarChar(50), itesterid);
      request.input('itestername', sql.VarChar(50), itestername);
      request.input('icompany', sql.VarChar(50), icompany);
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
      request.input('inotes', sql.VarChar(1000), inotes);
      //final test results
      request.input('ftestdate', sql.Date, ftestdate);
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
      request.input('frepairby', sql.VarChar(40), frepairby);
      request.input('frepairtype', sql.VarChar(1000), frepairtype);
      request.input('UDT4', sql.VarChar(1000), UDT4);
      //Test Report
      request.input('testdue', sql.Date, testdue);

      request.input('ipass', sql.VarChar(50), ipass);
      request.input('fpass', sql.VarChar(50), fpass);

      request.input('failtype', sql.VarChar(50), failtype);
      request.input('repairdate', sql.Date, repairdate);
      request.input('tranid', sql.VarChar(50), tranid);
      request.input('udt9', sql.VarChar(50), udt9);
      request.input('repair', sql.VarChar(50), repair);

      request.execute('sp_updatetest').then(function (err, recordsets, returnValue, affected) {
        let tests = err.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(tests);
      sql.close();
      }).catch(function (err) {
        res.status(500).send({ message: err })
      sql.close();
      });
    });
  }
});
  });



  app.post(appConstants.TEST_SITE_CREATE,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    var testdata = req.body;
    var hazardId = testdata.hazardId;

    //Initial Test results
    var itestdate = testdata.itestdate;
    if (itestdate == '') {
      itestdate = null;
    }
    var itesterid = testdata.itesterid;
    if(itesterid==''){
      itesterid=null;
    }
    var itestername = testdata.itestername;
    var icompany = testdata.icompany;
    var itesttype = testdata.itesttype;
    var itestkit = testdata.itestkit;
    var ilinepsi = testdata.ilinepsi;
    var itestflag = testdata.itestflag;
    var itestudt5 = testdata.itestudt5;
    var ivalue1 = testdata.ivalue1;
    if(ivalue1==''){
      ivalue1=null;
    }
    var ivalue1_close = testdata.ivalue1_close;
    var ivalue2 = testdata.ivalue2;
    if(ivalue2==''){
      ivalue2=null;
    }
    var ivalue2_close = testdata.ivalue2_close;
    var ivaluerelief = testdata.ivaluerelief;
    if(ivaluerelief==''){
      ivaluerelief=null;
    }
    var ivaluerelief_close = testdata.ivaluerelief_close;
    var ibuffer = testdata.ibuffer;
    if(ibuffer==''){
      ibuffer=null;
    }
    var inotes = testdata.inotes;
    var UDT6 = testdata.UDT6;
    var UDT7 = testdata.UDT7;

    //final test results
    var ftestdate = testdata.ftestdate;
    if (ftestdate == '') {
      ftestdate = null;
    }
    var ftesterid = testdata.ftesterid;
    if(ftesterid==''){
      ftesterid=null;
    }
    var ftestername = testdata.ftestername;
    var fcompany = testdata.fcompany;
    var ftesttype = testdata.ftesttype;
    var ftestkit = testdata.ftestkit;
    var fvalue1 = testdata.fvalue1;
    if(fvalue1==''){
      fvalue1=null;
    }
    var fvalue1_close = testdata.fvalue1_close;
    var fvalue2 = testdata.fvalue2;
    if(fvalue2==''){
      fvalue2=null;
    }
    var fvalue2_close = testdata.fvalue2_close;
    var fvaluerelief = testdata.fvaluerelief;
    if(fvaluerelief==''){
      fvaluerelief=null;
    }
    var fvaluerelief_close = testdata.fvaluerelief_close;
    var fbuffer = testdata.fbuffer;
    if(fbuffer==''){
      fbuffer=null;
    }
    var frepairby = testdata.frepairby;

    //Test Report
    var testdue = testdata.testdue;
    if (testdue == '') {
      testdue = null;
    }
    var notice1 = testdata.notice1;
    if (notice1 == '') {
      notice1 = null;
    }
    var notice2 = testdata.notice2;
    if (notice2 == '') {
      notice2 = null;
    }
    var notice3 = testdata.notice3;
    if (notice3 == '') {
      notice3 = null;
    }
    var notice4 = testdata.notice4;
    if (notice4 == '') {
      notice4 = null;
    }
    var ipass = testdata.ipass;
    var fpass = testdata.fpass;

    var repairdate = testdata.repairdate;
    if (repairdate == '') {
      repairdate = null;
    }

    var tranid = testdata.tranid;
    var failtype = testdata.failtype;
    var repairtype = testdata.repairtype;
    var udt9 = testdata.udt9;

    //db transaction to insert fields through sp or inline query goes here
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function (conn) {
      var request = new sql.Request(conn);
      request.input('hazardId', sql.Int, hazardId);
      //Initial Test results
      request.input('itestdate', sql.Date, itestdate);
      request.input('itesterid', sql.Int, itesterid);
      request.input('itestername', sql.VarChar(50), itestername);
      request.input('icompany', sql.VarChar(50), icompany)
      request.input('itesttype', sql.VarChar(50), itesttype);
      request.input('itestkit', sql.VarChar(50), itestkit);
      request.input('ilinepsi', sql.VarChar(50), ilinepsi);
      request.input('itestflag', sql.VarChar(50), itestflag);
      request.input('itestudt5', sql.VarChar(50), itestudt5);
      request.input('ivalue1', sql.Numeric(4,1), ivalue1);
      request.input('ivalue1_close', sql.VarChar(50), ivalue1_close);
      request.input('ivalue2', sql.Numeric(4,1), ivalue2);
      request.input('ivalue2_close', sql.VarChar(50), ivalue2_close);
      request.input('ivaluerelief', sql.Numeric(4,1), ivaluerelief);
      request.input('ivaluerelief_close', sql.VarChar(50), ivaluerelief_close);
      request.input('ibuffer', sql.Numeric(4,1), ibuffer);
      request.input('inotes', sql.VarChar(50), inotes);
      request.input('UDT6', sql.VarChar(25), UDT6);
      request.input('UDT7', sql.VarChar(25), UDT7);
      //final test results
      request.input('ftestdate', sql.Date, ftestdate);
      request.input('ftesterid', sql.Int, ftesterid);
      request.input('ftestername', sql.VarChar(50), ftestername);
      request.input('fcompany', sql.VarChar(50), fcompany);
      request.input('ftesttype', sql.VarChar(50), ftesttype);
      request.input('ftestkit', sql.VarChar(50), ftestkit);
      request.input('fvalue1', sql.Numeric(4,1), fvalue1);
      request.input('fvalue1_close', sql.VarChar(50), fvalue1_close);
      request.input('fvalue2', sql.Numeric(4,1), fvalue2);
      request.input('fvalue2_close', sql.VarChar(50), fvalue2_close);
      request.input('fvaluerelief', sql.Numeric(4,1), fvaluerelief);
      request.input('fvaluerelief_close', sql.VarChar(6), fvaluerelief_close);
      request.input('fbuffer', sql.Numeric(4,1), fbuffer);
      request.input('frepairby', sql.VarChar(40), frepairby);

      //Test Report
      request.input('testdue', sql.Date, testdue);
      request.input('notice1', sql.VarChar(50), notice1);
      request.input('notice2', sql.VarChar(50), notice2);
      request.input('notice3', sql.VarChar(50), notice3);
      request.input('notice4', sql.VarChar(50), notice4);
      request.input('ipass', sql.VarChar(50), ipass);
      request.input('fpass', sql.VarChar(4), fpass);

      request.input('failtype', sql.VarChar(50), failtype);
      request.input('repairdate', sql.Date, repairdate);
      request.input('tranid', sql.VarChar(50), tranid);
      request.input('udt9', sql.VarChar(50), udt9);
      request.input('repairtype', sql.VarChar(8000), repairtype);

      request.execute('sp_CreatesiteTest').then(function (result, recordsets, returnValue, affected) {
        let test = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(test);
      }).catch(function (err) {
        res.status(500).send({ message: err })
        sql.close();
      });
    });
  }
});
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
