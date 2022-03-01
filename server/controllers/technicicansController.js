var sql = require('mssql');
var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
module.exports = function (app, express, dbConfig, config, appConstants) {

  app.get(appConstants.TECHNICIANDEV_TYPE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        devtypesQuery = "SELECT * FROM DevTypes";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(devtypesQuery)
        }).then(result => {
          let devtypes = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(devtypes);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.TESTKIT_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        testkitQuery = "select * from TestKit";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(testkitQuery)
        }).then(result => {
          let testkit = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(testkit);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.SEARCH_TESTKIT, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        searchQuery = "select top 20 Testkitid ,SerialNum from TestKit where CompanyID is null and SerialNum like '%" + req.params.id + "%'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(searchQuery)
        }).then(result => {
          let testkit = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(testkit);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.SEARCH_TESTKIT_FROMEDIT, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        searchQuery = "select top 20 Testkitid ,SerialNum from TestKit where CompanyID is null and SerialNum like '%" + req.params.search + "%' or (CompanyID="+req.params.cid+")";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(searchQuery)
        }).then(result => {
          let testkit = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(testkit);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.SEARCH_COMPANY, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        searchQuery = "select top 20 CompanyID ,Company from Companies where Company like '%" + req.params.searchtext + "%'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(searchQuery)
        }).then(result => {
          let company = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(company);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.TECHNICAN_CHANGEPASSWORD, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var userdata = req.body["data"];
        var pwd = userdata.newpassword;
        //var hashedPassword = sha1(userdata.newpassword);
        var logquery = "UPDATE Technicians SET Password='" + pwd + "' where TesterID=" + userdata.id + "";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(logquery)
        }).then(result => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).send({ status: true, message: "Password Updated Successfully!" });
          sql.close();
        }).catch(err => {
          res.status(500).send({ status: false, message: err });
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.TECHNICIAN_COMPANY_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        companiesQuery = "select * from Companies";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(companiesQuery)
        }).then(result => {
          let companiess = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(companiess);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.TECHNICIAN_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        techniciansQuery = "select TesterID,FirstName,LastName,Status,TestCertExp, TestCertNum from Technicians";

        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(techniciansQuery)
        }).then(result => {
          let technicianss = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(technicianss);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });


  app.post(appConstants.TECHNICIAN__DEV_CREATE_POST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var devtypedata = req.body["data"];
        var devCode = devtypedata.devCode;
        var mFG = devtypedata.mFG;
        var model = devtypedata.model;
        var description = devtypedata.description;
        var devSize = devtypedata.devSize;
        var devType = devtypedata.devType;
        var cost = devtypedata.cost;
        var details = devtypedata.details;
        var devDate = devtypedata.devDate;
        var inspecPer = devtypedata.inspecPer;
        var devCode2 = devtypedata.devCode2;
        var inUse = devtypedata.inUse;
        var myList = devtypedata.myList;
        var testable = devtypedata.testable;
        var testFreq = devtypedata.testFreq;
        var testFreqUnit = devtypedata.testFreqUnit;
        var aSSE = devtypedata.aSSE;
        var cSA = devtypedata.cSA;
        var dateStamp = devtypedata.dateStamp;
        var UID = devtypedata.UID;
        var leadFree = devtypedata.leadFree;

        if (dateStamp == null || dateStamp == '') {
          dateStamp = new Date();
        }
        if (testFreq == null || testFreq == '') {
          testFreq = 0;
        }
        if (devDate == 'null' || devDate == '') {
          devDate = null;
        }

        //res.send(sitedata);
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('devCode', sql.VarChar(10), devCode);
          request.input('mFG', sql.VarChar(15), mFG);
          request.input('model', sql.VarChar(15), model);
          request.input('description', sql.VarChar(50), description);
          request.input('devSize', sql.VarChar(15), devSize);
          request.input('devType', sql.VarChar(10), devType);
          request.input('cost', sql.VarChar(10), cost);
          request.input('details', sql.VarChar(1000), details);
          request.input('devDate', sql.Date, devDate);
          request.input('inspecPer', sql.VarChar(10), inspecPer);
          request.input('devCode2', sql.VarChar(10), devCode2);
          request.input('inUse', sql.Bit, inUse);
          request.input('myList', sql.Bit, myList);
          request.input('testable', sql.Bit, testable);
          request.input('testFreq', sql.Int, testFreq);
          request.input('testFreqUnit', sql.VarChar(5), testFreqUnit);
          request.input('aSSE', sql.VarChar(10), aSSE);
          request.input('cSA', sql.VarChar(10), cSA);
          request.input('dateStamp', sql.Date, dateStamp);
          request.input('UID', sql.VarChar(50), UID);
          request.input('leadFree', sql.Bit, leadFree);

          request.execute('sp_CreateDevTypes').then(function (err, recordsets, returnValue, affected) {
            let devtype = err.recordset;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json(devtype);
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.post(appConstants.TECHNICIAN_TESTKIT_CREATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var testkitdata = req.body["data"];
        var status = testkitdata.status;
        var showOnList = testkitdata.showOnList;
        var serialNum = testkitdata.serialNum;
        var testKitMfg = testkitdata.testKitMfg;
        var testKitMod = testkitdata.testKitMod;
        var issueDate = testkitdata.issueDate;
        var renewDate = testkitdata.renewDate;
        var calDate = testkitdata.calDate;
        var calCompany = testkitdata.calCompany;
        var calAddress = testkitdata.calAddress;
        var calCity = testkitdata.calCity;
        var calState = testkitdata.calState;
        var calZip = testkitdata.calZip;
        var calPhone = testkitdata.calPhone;
        var calFax = testkitdata.calFax;
        var calEmail = testkitdata.calEmail;
        var comments = testkitdata.comments;
        var Datestamp = testkitdata.dateStamp;
        if (issueDate == null || issueDate == '') {
          issueDate = null;
        }
        if (renewDate == null || renewDate == '') {
          renewDate = null;
        }
        if (calDate == null || calDate == '') {
          calDate = null;
        }
        if (Datestamp == null || Datestamp == '') {
          Datestamp = new Date();
        }
        //res.send(sitedata);
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);

          request.input('status', sql.VarChar(25), status);
          request.input('showOnList', sql.Bit, showOnList);
          request.input('serialNum', sql.VarChar(20), serialNum);
          request.input('testKitMfg', sql.VarChar(20), testKitMfg);
          request.input('testKitMod', sql.VarChar(20), testKitMod);
          request.input('issueDate', sql.Date, issueDate);
          request.input('renewDate', sql.Date, renewDate);
          request.input('calDate', sql.Date, calDate);
          request.input('calCompany', sql.VarChar(20), calCompany);
          request.input('calAddress', sql.VarChar(50), calAddress);
          request.input('calCity', sql.VarChar(25), calCity);
          request.input('calState', sql.VarChar(3), calState);
          request.input('calZip', sql.VarChar(10), calZip);
          request.input('calPhone', sql.VarChar(15), calPhone);
          request.input('calFax', sql.VarChar(15), calFax);
          request.input('calEmail', sql.VarChar(50), calEmail);
          request.input('comments', sql.VarChar(200), comments);
          request.input('DateStamp', sql.Date, Datestamp);

          request.execute('sp_CreateTestKit').then(function (err, recordsets, returnValue, affected) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json('Created testkit');
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.post(appConstants.TECHNICIAN_DEV_TYPE_CREATE_POST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var devtypedata = req.body;



        var devCode = devtypedata.devCode;
        var mFG = devtypedata.mFG;
        var model = devtypedata.model;
        var description = devtypedata.description;
        var devSize = devtypedata.devSize;
        var devType = devtypedata.devType;
        var cost = devtypedata.cost;
        var details = devtypedata.details;
        var devDate = devtypedata.devDate;
        var inspecPer = devtypedata.inspecPer;
        var devCode2 = devtypedata.devCode2;
        var inUse = devtypedata.inUse;
        var myList = devtypedata.myList;
        var testable = devtypedata.testable;
        var testFreq = devtypedata.testFreq;
        var testFreqUnit = devtypedata.testFreqUnit;
        var aSSE = devtypedata.aSSE;
        var cSA = devtypedata.cSA;
        var dateStamp = devtypedata.dateStamp;
        if (dateStamp == null || dateStamp == '' || dateStamp == 'null') {
          dateStamp = new Date();
        }
        var UID = devtypedata.UID;
        var leadFree = devtypedata.leadFree;

        //res.send(sitedata);
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('devCode', sql.VarChar(10), devCode);
          request.input('mFG', sql.VarChar(15), mFG);
          request.input('model', sql.VarChar(15), model);
          request.input('description', sql.VarChar(50), description);
          request.input('devSize', sql.VarChar(15), devSize);
          request.input('devType', sql.VarChar(10), devType);
          request.input('cost', sql.VarChar(10), cost);
          request.input('details', sql.VarChar(1000), details);
          request.input('devDate', sql.Date, devDate);
          request.input('inspecPer', sql.VarChar(10), inspecPer);
          request.input('devCode2', sql.VarChar(10), devCode2);
          request.input('inUse', sql.Bit, inUse);
          request.input('myList', sql.Bit, myList);
          request.input('testable', sql.Bit, testable);
          request.input('testFreq', sql.Int, testFreq);
          request.input('testFreqUnit', sql.VarChar(5), testFreqUnit);
          request.input('aSSE', sql.VarChar(10), aSSE);
          request.input('cSA', sql.VarChar(10), cSA);
          request.input('dateStamp', sql.Date, dateStamp);
          request.input('UID', sql.VarChar(50), UID);
          request.input('leadFree', sql.Bit, leadFree);

          request.execute('sp_CreateDevTypes').then(function (err, recordsets, returnValue, affected) {
            let devtype = result.recordset;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json(devtype);
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });

  });


  app.post(appConstants.TECHNICIAN_COMPANY_CREATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var companiesdata = req.body["data"];

        var company = companiesdata.Company;
        var address1 = companiesdata.Address1;
        var address2 = companiesdata.Address2;
        var city = companiesdata.City;
        var state = companiesdata.State;
        var zip = companiesdata.Zip;
        var phone = companiesdata.Phone;
        var ext = companiesdata.Ext;
        var fax = companiesdata.Fax;
        var cntyLicNum = companiesdata.CntyLicNum;
        var cITYLICNUM = companiesdata.CITYLICNUM;
        var lICEXPDATE = companiesdata.LICEXPDATE;
        var insurance = companiesdata.Insurance;
        var policy = companiesdata.Policy;
        var liability = companiesdata.Liability;
        var iNSUREXP = companiesdata.INSUREXP;
        var iNSURAGT = companiesdata.INSURAGT;
        var iNSURPHO = companiesdata.INSURPHO;
        var showOnList = companiesdata.ShowOnList;
        var email = companiesdata.Email;
        var cell = companiesdata.Cell;
        var udf1 = companiesdata.udf1;
        var notes = companiesdata.Notes;
        var cert_City = companiesdata.Cert_City;
        var cert_County = companiesdata.Cert_County;
        var county_Expire = companiesdata.County_Expire;
        var cert_Test = companiesdata.Cert_Test;
        var cert_Survey = companiesdata.Cert_Survey;
        var cert_Install = companiesdata.Cert_Install;
        var cert_Repair = companiesdata.Cert_Repair;
        var cert_Land = companiesdata.Cert_Land;
        var cert_Fire = companiesdata.Cert_Fire;
        var cert_Confine = companiesdata.Cert_Confine;
        var udf2 = companiesdata.udf2;
        var udf2a = companiesdata.udf2a;
        var udf3 = companiesdata.udf3;
        var udf3a = companiesdata.udf3a;
        var status = companiesdata.Status;
        var lastLetter = companiesdata.LastLetter;
        var lastLetterName = companiesdata.LastLetterName;
        var dateStamp = companiesdata.DateStamp;
        var uID = companiesdata.UID;
        var companyUserID = companiesdata.CompanyUserID;
        var password = companiesdata.Password;
        var contact = companiesdata.Contact;
        var lastUpdate = companiesdata.LastUpdate;
        var lastUpdateID = companiesdata.LastUpdateID;
        var lastUpdateBy = companiesdata.LastUpdateBy;
        var testkitID = companiesdata.TestKitID;
        if (lastUpdate == null || lastUpdate == '') {
          lastUpdate = new Date();
        }
        if (lastLetter == null || lastLetter == '') {
          lastLetter = null;
        }
        if (dateStamp == null || dateStamp == '') {
          dateStamp = new Date();
        }
        if (lICEXPDATE == null || lICEXPDATE == '') {
          lICEXPDATE = null;
        }
        if (iNSUREXP == null || iNSUREXP == '') {
          iNSUREXP = null;
        }
        if (county_Expire == null || county_Expire == '') {
          county_Expire = null;
        }
        //res.send(sitedata);
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('company', sql.VarChar(70), company);
          request.input('address1', sql.VarChar(70), address1);
          request.input('address2', sql.VarChar(70), address2);
          request.input('city', sql.VarChar(35), city);
          request.input('state', sql.VarChar(10), state);
          request.input('zip', sql.VarChar(15), zip);
          request.input('phone', sql.VarChar(30), phone);
          request.input('ext', sql.VarChar(30), ext);
          request.input('fax', sql.VarChar(30), fax);
          request.input('cntyLicNum', sql.VarChar(20), cntyLicNum);
          request.input('cITYLICNUM', sql.VarChar(20), cITYLICNUM);
          request.input('lICEXPDATE', sql.Date, lICEXPDATE);
          request.input('insurance', sql.VarChar(25), insurance);
          request.input('policy', sql.VarChar(20), policy);
          request.input('liability', sql.Int, liability);
          request.input('iNSUREXP', sql.Date, iNSUREXP);
          request.input('iNSURAGT', sql.VarChar(25), iNSURAGT);
          request.input('iNSURPHO', sql.VarChar(20), iNSURPHO);
          request.input('showOnList', sql.Bit, showOnList);
          request.input('email', sql.VarChar(200), email);
          request.input('cell', sql.VarChar(30), cell);
          request.input('udf1', sql.VarChar(25), udf1);
          request.input('notes', sql.VarChar(200), notes);
          request.input('cert_City', sql.Bit, cert_City);
          request.input('cert_County', sql.Bit, cert_County);
          request.input('county_Expire', sql.Date, county_Expire);
          request.input('cert_Test', sql.Bit, cert_Test);
          request.input('cert_Survey', sql.Bit, cert_Survey);
          request.input('cert_Install', sql.Bit, cert_Install);
          request.input('cert_Repair', sql.Bit, cert_Repair);
          request.input('cert_Land', sql.Bit, cert_Land);
          request.input('cert_Fire', sql.Bit, cert_Fire);
          request.input('cert_Confine', sql.Bit, cert_Confine);
          request.input('udf2', sql.VarChar(25), udf2);
          request.input('udf2a', sql.Bit, udf2a);
          request.input('udf3', sql.VarChar(25), udf3);
          request.input('udf3a', sql.Bit, udf3a);
          request.input('status', sql.VarChar(25), status);
          request.input('lastLetter', sql.Date, lastLetter);
          request.input('lastLetterName', sql.VarChar(100), lastLetterName);
          request.input('dateStamp', sql.Date, dateStamp);
          request.input('uID', sql.VarChar(50), uID);
          request.input('companyUserID', sql.VarChar(15), companyUserID);
          request.input('password', sql.VarChar(15), password);
          request.input('contact', sql.VarChar(50), contact);
          request.input('lastUpdate', sql.Date, lastUpdate);
          request.input('lastUpdateID', sql.VarChar(50), lastUpdateID);
          request.input('lastUpdateBy', sql.VarChar(3), lastUpdateBy);
          request.input('testkit', sql.VarChar(255), testkitID);
       
          request.execute('sp_CreateCompanies').then(function (err, recordsets, returnValue, affected) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json('Created Company');
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.post(appConstants.TECHNICIAN_CREATE_POST, ensuretoken, function (req, res) {
    // exports.technicians_create_post = function(req, res, next) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var techniciansdata = req.body["data"];
        var status = techniciansdata.Status;
        var firstName = techniciansdata.FirstName;
        var lastName = techniciansdata.LastName;
        var address1 = techniciansdata.Address1;
        var address2 = techniciansdata.Address2;
        var city = techniciansdata.City;
        var state = techniciansdata.State;
        var zip = techniciansdata.Zip;
        var phone = techniciansdata.Phone;
        var ext = techniciansdata.Ext;
        var fax = techniciansdata.Fax;
        var testCertified = techniciansdata.TestCertified;
        var survCertified = techniciansdata.SurvCertified;
        var instCertified = techniciansdata.InstCertified;
        var testCertNum = techniciansdata.TestCertNum;
        var survCertNum = techniciansdata.SurvCertNum;
        var instCertNum = techniciansdata.InstCertNum;
        var testCertExp = techniciansdata.TestCertExp;
        var survCertExp = techniciansdata.SurvCertExp;
        var instCertExp = techniciansdata.InstCertExp;
        var fee = techniciansdata.Fee;
        var feePaid = techniciansdata.FeePaid;
        var comments = techniciansdata.Comments;
        var dateStamp = techniciansdata.DateStamp;
        var uID = techniciansdata.UID;
        var cOLICENSE = techniciansdata.COLICENSE;
        var rEPCERTIFIED = techniciansdata.REPCERTIFIED;
        var cNTRYLICex = techniciansdata.CNTRYLICex;
        var cITYLICNUM = techniciansdata.CITYLICNUM;
        var lICEXPDATE = techniciansdata.LICEXPDATE;
        var cERTDATE = techniciansdata.CERTDATE;
        var cERTAGCY = techniciansdata.CERTAGCY;
        var pLUMNUM = techniciansdata.PLUMNUM;
        var pLUMEXPIR = techniciansdata.PLUMEXPIR;
        var lANDEXPIR = techniciansdata.LANDEXPIR;
        var lANDNUM = techniciansdata.LANDNUM;
        var fIREEXPIR = techniciansdata.FIREEXPIR;
        var fIRENUM = techniciansdata.FIRENUM;
        var iNSURANCE = techniciansdata.INSURANCE;
        var pOLICY = techniciansdata.POLICY;
        var lIABILITY = techniciansdata.LIABILITY;
        var iNSUREXP = techniciansdata.INSUREXP;
        var iNSURAGT = techniciansdata.INSURAGT;
        var iNSURPHO = techniciansdata.INSURPHO;
        var allDataSets = techniciansdata.AllDataSets;
        var init = techniciansdata.Init;
        var email = techniciansdata.Email;
        var cell = techniciansdata.Cell;
        var uDF1 = techniciansdata.UDF1;
        var repCertNum = techniciansdata.RepCertNum;
        var repCertExp = techniciansdata.RepCertExp;
        var survCertAgcy = techniciansdata.SurvCertAgcy;
        var instCertAgcy = techniciansdata.InstCertAgcy;
        var repCertAgcy = techniciansdata.RepCertAgcy;
        var survCertDate = techniciansdata.SurvCertDate;
        var instCertDate = techniciansdata.InstCertDate;
        var repCertDate = techniciansdata.RepCertDate;
        var testCertNum2 = techniciansdata.TestCertNum2;
        var testCertExp2 = techniciansdata.TestCertExp2;
        var certAgcy2 = techniciansdata.CertAgcy2;
        var certDate2 = techniciansdata.CertDate2;
        var survCertNum2 = techniciansdata.SurvCertNum2;
        var survCertExp2 = techniciansdata.SurvCertExp2;
        var survCertAgcy2 = techniciansdata.SurvCertAgcy2;
        var survCertDate2 = techniciansdata.SurvCertDate2;
        var instCertNum2 = techniciansdata.InstCertNum2;
        var instCertExp2 = techniciansdata.InstCertExp2;
        var instCertAgcy2 = techniciansdata.InstCertAgcy2;
        var instCertDate2 = techniciansdata.InstCertDate2;
        var repCertNum2 = techniciansdata.RepCertNum2;
        var repCertExp2 = techniciansdata.RepCertExp2;
        var repCertAgcy2 = techniciansdata.RepCertAgcy2;
        var repCertDate2 = techniciansdata.RepCertDate2;
        var showOnList = techniciansdata.ShowOnList;
        var cityCheck = techniciansdata.CityCheck;
        var countyCheck = techniciansdata.CountyCheck;
        var plumberCheck = techniciansdata.PlumberCheck;
        var landScapeCheck = techniciansdata.LandScapeCheck;
        var fireCheck = techniciansdata.FireCheck;
        var confinedCheck = techniciansdata.ConfinedCheck;
        var confinedLicNum = techniciansdata.ConfinedLicNum;
        var confinedLicExp = techniciansdata.ConfinedLicExp;
        var lastLetter = techniciansdata.LastLetter;
        var lastLetterName = techniciansdata.LastLetterName;
        var testerUserID = techniciansdata.TesterUserID;
        var password = techniciansdata.Password;
        var lastUpdate = techniciansdata.LastUpdate;
        var lastUpdateID = techniciansdata.LastUpdateID;
        var lastUpdateBy = techniciansdata.LastUpdateBy;
        var webStatus = techniciansdata.WebStatus;
        var logon = techniciansdata.Logon;
        var fullName = techniciansdata.FullName;
        var intials = techniciansdata.Intials;
        var companyList = techniciansdata.CompanyID;
        if (testCertExp == null || testCertExp == '') {
          testCertExp = null;
        }
        if (survCertExp == null || survCertExp == '') {
          survCertExp = null;
        }
        if (feePaid == null || feePaid == '') {
          feePaid = null;
        }
        dateStamp = new Date();
        
        if (lIABILITY == null || lIABILITY == '') {
          lIABILITY = 0;
        }
        if (!fullName) {
          fullName = firstName + '' + lastName;
        }

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('status', sql.VarChar(10), status);
          request.input('firstName', sql.VarChar(20), firstName);
          request.input('lastName', sql.VarChar(20), lastName);
          request.input('address1', sql.VarChar(70), address1);
          request.input('address2', sql.VarChar(70), address2);
          request.input('city', sql.VarChar(35), city);
          request.input('state', sql.VarChar(10), state);
          request.input('zip', sql.VarChar(15), zip);
          request.input('phone', sql.VarChar(30), phone);
          request.input('ext', sql.VarChar(30), ext);
          request.input('fax', sql.VarChar(30), fax);
          request.input('testCertified', sql.Bit, testCertified);
          request.input('survCertified', sql.Bit, survCertified);
          request.input('instCertified', sql.Bit, instCertified);
          request.input('testCertNum', sql.VarChar(20), testCertNum);
          request.input('survCertNum', sql.VarChar(20), survCertNum);
          request.input('instCertNum', sql.VarChar(20), instCertNum);
          request.input('testCertExp', sql.Date, testCertExp);
          request.input('survCertExp', sql.Date, survCertExp);
          request.input('instCertExp', sql.Date, instCertExp);
          request.input('fee', sql.VarChar(10), fee);
          request.input('feePaid', sql.Date, feePaid);
          request.input('comments', sql.VarChar(6000), comments);
          request.input('dateStamp', sql.Date, dateStamp);
          request.input('uID', sql.VarChar(50), uID);
          request.input('cOLICENSE', sql.VarChar(20), cOLICENSE);
          request.input('rEPCERTIFIED', sql.Bit, rEPCERTIFIED);
          request.input('cNTRYLICex', sql.Date, cNTRYLICex);
          request.input('cITYLICNUM', sql.VarChar(20), cITYLICNUM);
          request.input('lICEXPDATE', sql.Date, lICEXPDATE);
          request.input('cERTDATE', sql.Date, cERTDATE);
          request.input('cERTAGCY', sql.VarChar(25), cERTAGCY);
          request.input('pLUMNUM', sql.VarChar(20), pLUMNUM);
          request.input('pLUMEXPIR', sql.Date, pLUMEXPIR);
          request.input('lANDEXPIR', sql.Date, lANDEXPIR);
          request.input('lANDNUM', sql.VarChar(20), lANDNUM);
          request.input('fIREEXPIR', sql.Date, fIREEXPIR);
          request.input('fIRENUM', sql.VarChar(20), fIRENUM);
          request.input('iNSURANCE', sql.VarChar(25), iNSURANCE);
          request.input('pOLICY', sql.VarChar(20), pOLICY);
          request.input('lIABILITY', sql.Int, lIABILITY);
          request.input('iNSUREXP', sql.Date, iNSUREXP);
          request.input('iNSURAGT', sql.VarChar(25), iNSURAGT);
          request.input('iNSURPHO', sql.VarChar(20), iNSURPHO);
          request.input('allDataSets', sql.Bit, allDataSets);
          request.input('init', sql.VarChar(3), init);
          request.input('email', sql.VarChar(200), email);
          request.input('cell', sql.VarChar(30), cell);
          request.input('uDF1', sql.VarChar(25), uDF1);
          request.input('repCertNum', sql.VarChar(20), repCertNum);
          request.input('repCertExp', sql.Date, repCertExp);
          request.input('survCertAgcy', sql.VarChar(25), survCertAgcy);
          request.input('instCertAgcy', sql.VarChar(25), instCertAgcy);
          request.input('repCertAgcy', sql.VarChar(25), repCertAgcy);
          request.input('survCertDate', sql.Date, survCertDate);
          request.input('instCertDate', sql.Date, instCertDate);
          request.input('repCertDate', sql.Date, repCertDate);
          request.input('testCertNum2', sql.VarChar(20), testCertNum2);
          request.input('testCertExp2', sql.Date, testCertExp2);
          request.input('certAgcy2', sql.VarChar(25), certAgcy2);
          request.input('certDate2', sql.Date, certDate2);
          request.input('survCertNum2', sql.VarChar(20), survCertNum2);
          request.input('survCertExp2', sql.Date, survCertExp2);
          request.input('survCertAgcy2', sql.VarChar(25), survCertAgcy2);
          request.input('survCertDate2', sql.Date, survCertDate2);
          request.input('instCertNum2', sql.VarChar(20), instCertNum2);
          request.input('instCertExp2', sql.Date, instCertExp2);
          request.input('instCertAgcy2', sql.VarChar(25), instCertAgcy2);
          request.input('instCertDate2', sql.Date, instCertDate2);
          request.input('repCertNum2', sql.VarChar(20), repCertNum2);
          request.input('repCertExp2', sql.Date, repCertExp2);
          request.input('repCertAgcy2', sql.VarChar(25), repCertAgcy2);
          request.input('repCertDate2', sql.Date, repCertDate2);
          request.input('showOnList', sql.Bit, showOnList);
          request.input('cityCheck', sql.Bit, cityCheck);
          request.input('countyCheck', sql.Bit, countyCheck);
          request.input('plumberCheck', sql.Bit, plumberCheck);
          request.input('landScapeCheck', sql.Bit, landScapeCheck);
          request.input('fireCheck', sql.Bit, fireCheck);
          request.input('confinedCheck', sql.Bit, confinedCheck);
          request.input('confinedLicNum', sql.VarChar(20), confinedLicNum);
          request.input('confinedLicExp', sql.Date, confinedLicExp);
          request.input('lastLetter', sql.Date, lastLetter);
          request.input('lastLetterName', sql.VarChar(100), lastLetterName);
          request.input('testerUserID', sql.VarChar(15), testerUserID);
          request.input('password', sql.VarChar(15), password);
          request.input('lastUpdate', sql.Date, lastUpdate);
          request.input('lastUpdateID', sql.VarChar(50), lastUpdateID);
          request.input('lastUpdateBy', sql.VarChar(3), lastUpdateBy);
          request.input('webStatus', sql.VarChar(10), webStatus);
          request.input('logon', sql.VarChar(25), logon);
          request.input('fullName', sql.VarChar(50), fullName);
          request.input('intials', sql.VarChar(3), intials);
          request.execute('sp_CreateTechnicians').then(function (err, recordsets, returnValue, affected) {
            var testerId=err.recordset[0].testerid;
            
              if (companyList != null) {
                companyList.forEach((company, index) => {
                  var insertQuery = "insert into TechCompany(CompanyID, TesterID, DefaultCompany, defaulttestkitid) values ";
                  insertQuery += "(" + company.id + "," + testerId + "," + 0 + "," + null + ")";
                  new sql.ConnectionPool(config).connect().then(pool => {
                    return pool.request().query(insertQuery)
                  }).then(result => {
                    if (index === companyList.length - 1) {
                      res.setHeader('Access-Control-Allow-Origin', '*');
                      res.status(200).json('Created Technicians');
                    }
                    sql.close();
                  }).catch(err => {
                    res.status(200).send({ message: err, q: insertQuery })
                    sql.close();
                  });
                });
              }else{
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.status(200).json('Created Technicians');
                sql.close();
              }
          }).catch(function (err) {
            console.log("error-------------------------------->");
            console.log(err);
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });


  // exports.devtypes_update_post = function(req, res, next) {
  app.post(appConstants.TECHNICIAN_DEV_TYPE_UPDATE_POST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var devtypedata = req.body["data"];

        //res.send(devtypedata);
        var devId = req.params.id;
        var devCode = devtypedata.DevCode;
        var mFG = devtypedata.MFG;
        var model = devtypedata.Model;
        var description = devtypedata.Description;
        var devSize = devtypedata.DevSize;
        var devType = devtypedata.DevType;
        var cost = devtypedata.Cost;
        var details = devtypedata.Details;
        var devDate = devtypedata.DevDate;
        if (devDate == null || devDate == '' || devDate == 'null') {
          devDate = null;
        }
        //devDate=ConvertJsonDateToDate(devDate);
        var inspecPer = devtypedata.InspecPer;
        var devCode2 = devtypedata.DevCode2;
        var inUse = devtypedata.InUse;
        if (inUse === null || inUse == '' || inUse == 'null') {
          inUse = false;
        }
        var myList = devtypedata.MyList;
        if (myList == null || myList == '' || myList == 'null') {
          myList = false;
        }

        var testable = devtypedata.Testable;
        if (testable == null || testable == '' || testable == 'null') {
          testable = false;
        }

        var leadFree = devtypedata.LeadFree;
        if (leadFree == null || leadFree == '' || leadFree == 'null') {
          leadFree = false;
        }
        var testFreq = devtypedata.TestFreq;
        if (testFreq == null || testFreq == '' || testFreq == 'null') {
          testFreq = 0;
        }

        var testFreqUnit = devtypedata.TestFreqUnit;
        var aSSE = devtypedata.ASSE;
        var cSA = devtypedata.CSA;
        var dateStamp = devtypedata.DateStamp;
        //if (dateStamp == null || dateStamp == '') {
        dateStamp = new Date();
        dateStamp = ConvertJsonDateToDate(dateStamp);

        //}
        var UID = devtypedata.UID;
        var devCodeHis = devtypedata.DevCodeHistory;
        var mFGHis = devtypedata.MFGHistory;
        var modelHis = devtypedata.ModelHistory;
        var descriptionHis = devtypedata.DescriptionHistory;
        var devSizeHis = devtypedata.DevSizeHistory;
        var devTypeHis = devtypedata.DevTypeHistory;
        var costHis = devtypedata.CostHistory;
        var detailsHis = devtypedata.DetailsHistory;
        var devDateHis = devtypedata.DevDateHistory;
        if (devDateHis == null || devDateHis == '' || devDateHis == 'null') {
          devDateHis = null;

        }
        //devDateHis=ConvertJsonDateToDate(devDateHis);
        var inspecPerHis = devtypedata.InspecPerHistory;
        var devCode2His = devtypedata.DevCode2History;
        var inUseHis = devtypedata.InUseHistory;
        var myListHis = devtypedata.MyListHistory;
        var testableHis = devtypedata.TestableHistory;
        var leadFreeHis = devtypedata.LeadFreeHistory;
        var testFreqHis = devtypedata.TestFreqHistory;
        if (testFreqHis == null || testFreqHis == 'null' || testFreqHis == '') {
          testFreqHis = 0;
        }
        var testFreqUnitHis = devtypedata.TestFreqUnitHistory;
        var aSSEHis = devtypedata.ASSEHistory;
        var cSAHis = devtypedata.CSAHistory;
        var dateStampHis = devtypedata.DateStampHistory;
        if (dateStampHis == null || dateStampHis == '' || dateStampHis == 'null') {
          dateStampHis = new Date();
        }
        dateStampHis = ConvertJsonDateToDate(dateStampHis);

        var UIDHis = devtypedata.UIDHistory;

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);

          request.input('devId', sql.Int, devId);
          request.input('devCode', sql.VarChar(10), devCode);
          request.input('devCodeHis', sql.VarChar(10), devCodeHis);
          request.input('mFG', sql.VarChar(15), mFG);
          request.input('mFGHis', sql.VarChar(15), mFGHis);
          request.input('description', sql.VarChar(50), description);
          request.input('descriptionHis', sql.VarChar(50), descriptionHis);
          request.input('devSize', sql.VarChar(15), devSize);
          request.input('devSizeHis', sql.VarChar(15), devSizeHis);
          request.input('model', sql.VarChar(15), model);
          request.input('modelHis', sql.VarChar(15), modelHis);
          request.input('devType', sql.VarChar(10), devType);
          request.input('devTypeHis', sql.VarChar(10), devTypeHis);
          request.input('cost', sql.VarChar(10), cost);
          request.input('costHis', sql.VarChar(10), costHis);
          request.input('details', sql.VarChar(1000), details);
          request.input('detailsHis', sql.VarChar(1000), detailsHis);
          request.input('devDate', sql.Date, devDate);
          request.input('devDateHis', sql.Date, devDateHis);
          request.input('inspecPer', sql.VarChar(10), inspecPer);
          request.input('inspecPerHis', sql.VarChar(10), inspecPerHis);
          request.input('devCode2', sql.VarChar(10), devCode2);
          request.input('devCode2His', sql.VarChar(10), devCode2His);
          request.input('inUse', sql.Bit, inUse);
          request.input('inUseHis', sql.Bit, inUseHis);
          request.input('myList', sql.Bit, myList);
          request.input('myListHis', sql.Bit, myListHis);
          request.input('testable', sql.Bit, testable);
          request.input('testableHis', sql.Bit, testableHis);
          request.input('testFreq', sql.Int, testFreq);
          request.input('testFreqHis', sql.Int, testFreqHis);
          request.input('testFreqUnit', sql.VarChar(5), testFreqUnit);
          request.input('testFreqUnitHis', sql.VarChar(5), testFreqUnitHis);
          request.input('aSSE', sql.VarChar(10), aSSE);
          request.input('aSSEHis', sql.VarChar(10), aSSEHis);
          request.input('cSA', sql.VarChar(10), cSA);
          request.input('cSAHis', sql.VarChar(10), cSAHis);
          request.input('dateStamp', sql.Date, dateStamp);
          request.input('dateStampHis', sql.Date, dateStampHis);
          request.input('UID', sql.VarChar(50), UID);
          request.input('UIDHis', sql.VarChar(50), UIDHis);
          request.input('leadFree', sql.Bit, leadFree);
          request.input('leadFreeHis', sql.Bit, leadFreeHis);

          request.execute('sp_UpdateDevTypes').then(function (err, recordsets, returnValue, affected) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json({ status: 'success' });
          }).catch(function (err) {
            console.log(err);
            res.status(500).send({ message: err })
            sql.close();
          });
        });

        /* var query = "Update DevTypes SET DevCode='"+devCode+"', MFG='"+mFG+"', Model='"+model+"', Description='"+description+"', DevSize='"+devSize+"', DevType='"+devType+"', Cost= '"+cost+"',"
        +" Details= '"+details+"', DevDate='"+devDate+"', InspecPer='"+inspecPer+"', DevCode2='"+devCode2+"', InUse='"+inUse+"', MyList='"+myList+"', Testable='"+testable+"', TestFreq='"+testFreq+"', TestFreqUnit='"+testFreqUnit+"'"
        +", ASSE = '"+aSSE+"', CSA='"+cSA+"', DateStamp='"+dateStamp+"', LeadFree='"+leadFree+"', DevCodeHistory='"+devCodeHis+"', MFGHistory= '"+mFGHis+"',"
        +"ModelHistory = '"+modelHis+"', DescriptionHistory='"+descriptionHis+"', DevSizeHistory='"+devSizeHis+"', DevTypeHistory='"+devTypeHis+"',"
        +"CostHistory='"+costHis+"', DetailsHistory='"+detailsHis+"', DevDateHistory='"+devDateHis+"', InspecPerHistory='"+inspecPerHis+"', "
        +"DevCode2History= '"+devCode2His+"', InUseHistory='"+inUseHis+"', MyListHistory='"+myListHis+"', TestableHistory='"+testableHis+"',"
        +" TestFreqHistory='"+testFreqHis+"', TestFreqUnitHistory='"+testFreqUnitHis+"', ASSEHistory='"+aSSEHis+"', CSAHistory='"+cSAHis+"',"
        +"DateStampHistory='"+dateStampHis+"', UIDHistory='"+UIDHis+"', LeadFreeHistory='"+leadFreeHis+"', UID='"+UID+"'"
        +" where DevID="+devId;
         console.log(query);
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query)
        }).then(result => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json({ status: 'success' });
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        }); */
        // res.status(200).send(query);

        //res.send(sitedata);
        // var conn = new sql.ConnectionPool(config);
        // conn.connect().then(function (conn) {
        //   var request = new sql.Request(conn);
        //   request.input('devId', sql.Int, devId);
        //   request.input('devCode', sql.VarChar(10), devCode);
        //   request.input('mFG', sql.VarChar(15), mFG);
        //   request.input('model', sql.VarChar(15), model);
        //   request.input('description', sql.VarChar(50), description);
        //   request.input('devSize', sql.VarChar(15), devSize);
        //   request.input('devType', sql.VarChar(10), devType);
        //   request.input('cost', sql.VarChar(10), cost);
        //   request.input('details', sql.VarChar(1000), details);
        //   request.input('devDate', sql.Date, devDate);
        //   request.input('inspecPer', sql.VarChar(10), inspecPer);
        //   request.input('devCode2', sql.VarChar(10), devCode2);
        //   request.input('inUse', sql.Bit, inUse);
        //   request.input('myList', sql.Bit, myList);
        //   request.input('testable', sql.Bit, testable);
        //   request.input('testFreq', sql.Int, testFreq);
        //   request.input('testFreqUnit', sql.VarChar(5), testFreqUnit);
        //   request.input('aSSE', sql.VarChar(10), aSSE);
        //   request.input('cSA', sql.VarChar(10), cSA);
        //   request.input('dateStamp', sql.Date, dateStamp);
        //   request.input('UID', sql.VarChar(50), UID);
        //   request.input('leadFree', sql.Bit, leadFree);

        //   request.execute('sp_UpdateDevTypes').then(function (err, recordsets, returnValue, affected) {
        //     res.send('Updated devtypes');
        //     console.dir(err);
        //   }).catch(function (err) {
        //     console.log(err);
        //   });
        // });
      }
    });
  });

  // exports.testkit_update_post = function(req, res, next) {
  app.post(appConstants.TECHNICIAN_TESTKIT_UPDATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var testkitdata = req.body["data"];
        //res.send(testkitdata);

        var testKitId = testkitdata.TestKitID;
        var status = testkitdata.Status;
        var showOnList = testkitdata.ShowOnList;
        if (showOnList == null || showOnList == "") {
          showOnList = false;
        }
        var serialNum = testkitdata.SerialNum;
        var testKitMfg = testkitdata.TestKitMfg;
        var testKitMod = testkitdata.TestKitMod;
        var issueDate = testkitdata.IssueDate;
        var renewDate = testkitdata.RenewDate;
        var calDate = testkitdata.CalDate;
        var calCompany = testkitdata.CalCompany;
        var calAddress = testkitdata.CalAddress;
        var calCity = testkitdata.CalCity;
        var calState = testkitdata.CalState;
        var calZip = testkitdata.CalZip;
        var calPhone = testkitdata.CalPhone;
        var calFax = testkitdata.CalFax;
        var calEmail = testkitdata.CalEmail;
        var comments = testkitdata.Comments;
        var lastUpdate = testkitdata.LastUpdate;
        var dateStamp = testkitdata.DateStamp;
        if (issueDate == null || issueDate == '') {
          issueDate = null;
        }
        if (renewDate == null || renewDate == '') {
          renewDate = null;
        }
        if (calDate == null || calDate == '') {
          calDate = null;
        }
        if (lastUpdate == null || lastUpdate == '') {
          lastUpdate = new Date();
        }
        if (dateStamp == null || dateStamp == '') {
          dateStamp = new Date();
        }
        //res.send(sitedata);
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);

          request.input('testKitId', sql.Int, testKitId);
          request.input('status', sql.VarChar(25), status);
          request.input('showOnList', sql.Bit, showOnList);
          request.input('serialNum', sql.VarChar(20), serialNum);
          request.input('testKitMfg', sql.VarChar(20), testKitMfg);
          request.input('testKitMod', sql.VarChar(20), testKitMod);
          request.input('issueDate', sql.Date, issueDate);
          request.input('renewDate', sql.Date, renewDate);
          request.input('calDate', sql.Date, calDate);
          request.input('calCompany', sql.VarChar(20), calCompany);
          request.input('calAddress', sql.VarChar(50), calAddress);
          request.input('calCity', sql.VarChar(25), calCity);
          request.input('calState', sql.VarChar(20), calState);
          request.input('calZip', sql.VarChar(10), calZip);
          request.input('calPhone', sql.VarChar(15), calPhone);
          request.input('calFax', sql.VarChar(15), calFax);
          request.input('calEmail', sql.VarChar(50), calEmail);
          request.input('comments', sql.VarChar(200), comments);
          request.input('LastUpdate', sql.Date, lastUpdate);
          request.input('DateStamp', sql.Date, dateStamp);
          request.execute('sp_UpdateTestKit').then(function (err, recordsets, returnValue, affected) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json({ status: 'success' });
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  // exports.companies_update_post = function(req, res, next) {
  app.post(appConstants.TECHNICIAN_COMPANY_UPDATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var companiesdata = req.body["data"];

        var companyId = companiesdata.CompanyID;
        var company = companiesdata.Company;
        var address1 = companiesdata.Address1;
        var address2 = companiesdata.Address2;
        var city = companiesdata.City;
        var state = companiesdata.State;
        var zip = companiesdata.Zip;
        var phone = companiesdata.Phone;
        var ext = companiesdata.Ext;
        var fax = companiesdata.Fax;
        var cntyLicNum = companiesdata.CntyLicNum;
        var cITYLICNUM = companiesdata.CITYLICNUM;
        var lICEXPDATE = companiesdata.LICEXPDATE;
        var insurance = companiesdata.Insurance;
        var policy = companiesdata.Policy;
        var liability = companiesdata.Liability;
        var iNSUREXP = companiesdata.INSUREXP;
        var iNSURAGT = companiesdata.INSURAGT;
        var iNSURPHO = companiesdata.INSURPHO;
        //var showOnList = companiesdata.ShowOnList;
        var email = companiesdata.Email;
        var cell = companiesdata.Cell;
        var udf1 = companiesdata.udf1;
        var notes = companiesdata.Notes;
        var cert_City = companiesdata.Cert_City;
        var cert_County = companiesdata.Cert_County;
        var county_Expire = companiesdata.County_Expire;
        var cert_Test = companiesdata.Cert_Test;
        var cert_Survey = companiesdata.Cert_Survey;
        var cert_Install = companiesdata.Cert_Install;
        var cert_Repair = companiesdata.Cert_Repair;
        var cert_Land = companiesdata.Cert_Land;
        var cert_Fire = companiesdata.Cert_Fire;
        var cert_Confine = companiesdata.Cert_Confine;
        var udf2 = companiesdata.udf2;
        var udf2a = companiesdata.udf2a;
        var udf3 = companiesdata.udf3;
        var udf3a = companiesdata.udf3a;
        var status = companiesdata.Status;
        var lastLetter = companiesdata.LastLetter;
        var lastLetterName = companiesdata.LastLetterName;
        var dateStamp = companiesdata.DateStamp;
        var uID = companiesdata.UID;
        var companyUserID = companiesdata.CompanyUserID;
        var password = companiesdata.Password;
        var contact = companiesdata.Contact;
        var lastUpdate = companiesdata.LastUpdate;
        var lastUpdateID = companiesdata.LastUpdateID;
        var lastUpdateBy = companiesdata.LastUpdateBy;
        var testkitID = companiesdata.testKitIds;
        console.log("testing -------->");
        console.log(testkitID);
        // var testKitList = companiesdata.TestKitIDs;
        if (lastUpdate == null || lastUpdate == '') {
          lastUpdate = new Date();
        }
        if (lastLetter == null || lastLetter == '') {
          lastLetter = null;
        }
        if (dateStamp == null || dateStamp == '') {
          dateStamp = new Date();
        }
        if (lICEXPDATE == null || lICEXPDATE == '') {
          lICEXPDATE = null;
        }
        if (iNSUREXP == null || iNSUREXP == '') {
          iNSUREXP = null;
        }
        if (county_Expire == null || county_Expire == '') {
          county_Expire = null;
        }
        //res.send(sitedata);
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('companyId', sql.Int, companyId);
          request.input('company', sql.VarChar(70), company);
          request.input('address1', sql.VarChar(70), address1);
          request.input('address2', sql.VarChar(70), address2);
          request.input('city', sql.VarChar(35), city);
          request.input('state', sql.VarChar(10), state);
          request.input('zip', sql.VarChar(15), zip);
          request.input('phone', sql.VarChar(30), phone);
          request.input('ext', sql.VarChar(30), ext);
          request.input('fax', sql.VarChar(30), fax);
          request.input('cntyLicNum', sql.VarChar(20), cntyLicNum);
          request.input('cITYLICNUM', sql.VarChar(20), cITYLICNUM);
          request.input('lICEXPDATE', sql.Date, lICEXPDATE);
          request.input('insurance', sql.VarChar(25), insurance);
          request.input('policy', sql.VarChar(20), policy);
          request.input('liability', sql.Int, liability);
          request.input('iNSUREXP', sql.Date, iNSUREXP);
          request.input('iNSURAGT', sql.VarChar(25), iNSURAGT);
          request.input('iNSURPHO', sql.VarChar(20), iNSURPHO);
          //request.input('showOnList', sql.Bit, showOnList);
          request.input('email', sql.VarChar(200), email);
          request.input('cell', sql.VarChar(30), cell);
          request.input('udf1', sql.VarChar(25), udf1);
          request.input('notes', sql.VarChar(200), notes);
          request.input('cert_City', sql.Bit, cert_City);
          request.input('cert_County', sql.Bit, cert_County);
          request.input('county_Expire', sql.Date, county_Expire);
          request.input('cert_Test', sql.Bit, cert_Test);
          request.input('cert_Survey', sql.Bit, cert_Survey);
          request.input('cert_Install', sql.Bit, cert_Install);
          request.input('cert_Repair', sql.Bit, cert_Repair);
          request.input('cert_Land', sql.Bit, cert_Land);
          request.input('cert_Fire', sql.Bit, cert_Fire);
          request.input('cert_Confine', sql.Bit, cert_Confine);
          request.input('udf2', sql.VarChar(25), udf2);
          request.input('udf2a', sql.Bit, udf2a);
          request.input('udf3', sql.VarChar(25), udf3);
          request.input('udf3a', sql.Bit, udf3a);
          request.input('status', sql.VarChar(25), status);
          request.input('lastLetter', sql.Date, lastLetter);
          request.input('lastLetterName', sql.VarChar(100), lastLetterName);
          request.input('dateStamp', sql.Date, dateStamp);
          request.input('uID', sql.VarChar(50), uID);
          request.input('companyUserID', sql.VarChar(15), companyUserID);
          request.input('password', sql.VarChar(15), password);
          request.input('contact', sql.VarChar(50), contact);
          request.input('lastUpdate', sql.Date, lastUpdate);
          request.input('lastUpdateID', sql.VarChar(50), lastUpdateID);
          request.input('lastUpdateBy', sql.VarChar(3), lastUpdateBy);
          request.input('testkit', sql.VarChar(255), testkitID);
          request.execute('sp_UpdateCompanies').then(function (err, recordsets, returnValue, affected) {
            

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json({ status: 'success' });

            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });         

        });
      }
    });
  });

  // exports.technicians_Update_postData = function(req, res, next) {
  app.post(appConstants.TECHNICIAN_UPDATE_POST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var techniciansdata = req.body["data"];
        //res.send(techniciansdata);

        var testerId = techniciansdata.TesterID;
        var status = techniciansdata.Status;
        var firstName = techniciansdata.FirstName;
        var lastName = techniciansdata.LastName;
        var address1 = techniciansdata.Address1;
        var address2 = techniciansdata.Address2;
        var city = techniciansdata.City;
        var state = techniciansdata.State;
        var zip = techniciansdata.Zip;
        var phone = techniciansdata.Phone;
        var ext = techniciansdata.Ext;
        var fax = techniciansdata.Fax;
        var testCertified = techniciansdata.TestCertified;
        var survCertified = techniciansdata.SurvCertified;
        var instCertified = techniciansdata.InstCertified;
        var testCertNum = techniciansdata.TestCertNum;
        var survCertNum = techniciansdata.SurvCertNum;
        var instCertNum = techniciansdata.InstCertNum;
        var testCertExp = techniciansdata.TestCertExp;
        var survCertExp = techniciansdata.SurvCertExp;
        var instCertExp = techniciansdata.InstCertExp;
        var fee = techniciansdata.Fee;
        var feePaid = techniciansdata.FeePaid;
        var comments = techniciansdata.Comments;
        var dateStamp = techniciansdata.DateStamp;
        var uID = techniciansdata.UID;
        var cOLICENSE = techniciansdata.COLICENSE;
        var rEPCERTIFIED = techniciansdata.REPCERTIFIED;
        var cNTRYLICex = techniciansdata.CNTRYLICex;
        var cITYLICNUM = techniciansdata.CITYLICNUM;
        var lICEXPDATE = techniciansdata.LICEXPDATE;
        var cERTDATE = techniciansdata.CERTDATE;
        var cERTAGCY = techniciansdata.CERTAGCY;
        var pLUMNUM = techniciansdata.PLUMNUM;
        var pLUMEXPIR = techniciansdata.PLUMEXPIR;
        var lANDEXPIR = techniciansdata.LANDEXPIR;
        var lANDNUM = techniciansdata.LANDNUM;
        var fIREEXPIR = techniciansdata.FIREEXPIR;
        var fIRENUM = techniciansdata.FIRENUM;
        var iNSURANCE = techniciansdata.INSURANCE;
        var pOLICY = techniciansdata.POLICY;
        var lIABILITY = techniciansdata.LIABILITY;
        var iNSUREXP = techniciansdata.INSUREXP;
        var iNSURAGT = techniciansdata.INSURAGT;
        var iNSURPHO = techniciansdata.INSURPHO;
        var allDataSets = techniciansdata.AllDataSets;
        var init = techniciansdata.Init;
        var email = techniciansdata.Email;
        var cell = techniciansdata.Cell;
        var uDF1 = techniciansdata.UDF1;
        var repCertNum = techniciansdata.RepCertNum;
        var repCertExp = techniciansdata.RepCertExp;
        var survCertAgcy = techniciansdata.SurvCertAgcy;
        var instCertAgcy = techniciansdata.InstCertAgcy;
        var repCertAgcy = techniciansdata.RepCertAgcy;
        var survCertDate = techniciansdata.SurvCertDate;
        var instCertDate = techniciansdata.InstCertDate;
        var repCertDate = techniciansdata.RepCertDate;
        var testCertNum2 = techniciansdata.TestCertNum2;
        var testCertExp2 = techniciansdata.TestCertExp2;
        var certAgcy2 = techniciansdata.CertAgcy2;
        var certDate2 = techniciansdata.CertDate2;
        var survCertNum2 = techniciansdata.SurvCertNum2;
        var survCertExp2 = techniciansdata.SurvCertExp2;
        var survCertAgcy2 = techniciansdata.SurvCertAgcy2;
        var survCertDate2 = techniciansdata.SurvCertDate2;
        var instCertNum2 = techniciansdata.InstCertNum2;
        var instCertExp2 = techniciansdata.InstCertExp2;
        var instCertAgcy2 = techniciansdata.InstCertAgcy2;
        var instCertDate2 = techniciansdata.InstCertDate2;
        var repCertNum2 = techniciansdata.RepCertNum2;
        var repCertExp2 = techniciansdata.RepCertExp2;
        var repCertAgcy2 = techniciansdata.RepCertAgcy2;
        var repCertDate2 = techniciansdata.RepCertDate2;
        var showOnList = techniciansdata.ShowOnList;
        var cityCheck = techniciansdata.CityCheck;
        var countyCheck = techniciansdata.CountyCheck;
        var plumberCheck = techniciansdata.PlumberCheck;
        var landScapeCheck = techniciansdata.LandScapeCheck;
        var fireCheck = techniciansdata.FireCheck;
        var confinedCheck = techniciansdata.ConfinedCheck;
        var confinedLicNum = techniciansdata.ConfinedLicNum;
        var confinedLicExp = techniciansdata.ConfinedLicExp;
        var lastLetter = techniciansdata.LastLetter;
        var lastLetterName = techniciansdata.LastLetterName;
        var testerUserID = techniciansdata.TesterUserID;
        var password = techniciansdata.Password;
        var lastUpdate = techniciansdata.LastUpdate;
        var lastUpdateID = techniciansdata.LastUpdateID;
        var lastUpdateBy = techniciansdata.LastUpdateBy;
        var webStatus = techniciansdata.WebStatus;
        var companyid = techniciansdata.CompanyID;
        var companyList = techniciansdata.companyIds;
        dateStamp = new Date();
        if (lastUpdate == null || lastUpdate == '') {
          lastUpdate = new Date();
        }
        if (testCertExp == null || testCertExp == '') {
          testCertExp = null;
        }
        if (survCertExp == null || survCertExp == '') {
          survCertExp = null;
        }
        if (feePaid == null || feePaid == '') {
          feePaid = null;
        }
        if (lICEXPDATE == null || lICEXPDATE == '') {
          lICEXPDATE = null;
        }
        if (iNSUREXP == null || iNSUREXP == '') {
          iNSUREXP = null;
        }
        if (cNTRYLICex == null || cNTRYLICex == '') {
          cNTRYLICex = null;
        }
        if (instCertExp == null || instCertExp == '') {
          instCertExp = null;
        }
        if (confinedLicExp == null || confinedLicExp == '') {
          confinedLicExp = null;
        }
        if (repCertDate == null || repCertDate == '') {
          repCertDate = null;
        }
        if (instCertDate == null || instCertDate == '') {
          instCertDate = null;
        }
        if (survCertDate == null || survCertDate == '') {
          survCertDate = null;
        }
        if (repCertExp == null || repCertExp == '') {
          repCertExp = null;
        }
        if (fIREEXPIR == null || fIREEXPIR == '') {
          fIREEXPIR = null;
        }
        if (lANDEXPIR == null || lANDEXPIR == '') {
          lANDEXPIR = null;
        }
        if (pLUMEXPIR == null || pLUMEXPIR == '') {
          pLUMEXPIR = null;
        }
        if (cERTDATE == null || cERTDATE == '') {
          cERTDATE = null;
        }
        if (testCertExp2 == null || testCertExp2 == '') {
          testCertExp2 = null;
        }
        if (certDate2 == null || certDate2 == '') {
          certDate2 = null;
        }
        if (survCertExp2 == null || survCertExp2 == '') {
          survCertExp2 = null;
        }
        if (survCertDate2 == null || survCertDate2 == '') {
          survCertDate2 = null;
        }
        if (instCertExp2 == null || instCertExp2 == '') {
          instCertExp2 = null;
        }
        if (repCertExp2 == null || repCertExp2 == '') {
          repCertExp2 = null;
        }
        if (lastLetter == null || lastLetter == '') {
          lastLetter = null;
        }
        if (instCertDate2 == null || instCertDate2 == '') {
          instCertDate2 = null;
        }
        if (repCertDate2 == null || repCertDate2 == '') {
          repCertDate2 = null;
        }
        if (lIABILITY == null || lIABILITY == '') {
          lIABILITY = 0;
        }

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);


          request.input('testerId', sql.Int, testerId);
          request.input('status', sql.VarChar(10), status);
          request.input('firstName', sql.VarChar(20), firstName);
          request.input('lastName', sql.VarChar(20), lastName);
          request.input('address1', sql.VarChar(70), address1);
          request.input('address2', sql.VarChar(70), address2);
          request.input('city', sql.VarChar(35), city);
          request.input('state', sql.VarChar(10), state);
          request.input('zip', sql.VarChar(15), zip);
          request.input('phone', sql.VarChar(30), phone);
          request.input('ext', sql.VarChar(30), ext);
          request.input('fax', sql.VarChar(30), fax);
          request.input('testCertified', sql.Bit, testCertified);
          request.input('survCertified', sql.Bit, survCertified);
          request.input('instCertified', sql.Bit, instCertified);
          request.input('testCertNum', sql.VarChar(20), testCertNum);
          request.input('survCertNum', sql.VarChar(20), survCertNum);
          request.input('instCertNum', sql.VarChar(20), instCertNum);
          request.input('testCertExp', sql.Date, testCertExp);
          request.input('survCertExp', sql.Date, survCertExp);
          request.input('instCertExp', sql.Date, instCertExp);
          request.input('fee', sql.VarChar(10), fee);
          request.input('feePaid', sql.Date, feePaid);
          request.input('comments', sql.VarChar(6000), comments);
          request.input('dateStamp', sql.Date, dateStamp);
          request.input('uID', sql.VarChar(50), uID);
          request.input('cOLICENSE', sql.VarChar(20), cOLICENSE);
          request.input('rEPCERTIFIED', sql.Bit, rEPCERTIFIED);
          request.input('cNTRYLICex', sql.Date, cNTRYLICex);
          request.input('cITYLICNUM', sql.VarChar(20), cITYLICNUM);
          request.input('lICEXPDATE', sql.Date, lICEXPDATE);
          request.input('cERTDATE', sql.Date, cERTDATE);
          request.input('cERTAGCY', sql.VarChar(25), cERTAGCY);
          request.input('pLUMNUM', sql.VarChar(20), pLUMNUM);
          request.input('pLUMEXPIR', sql.Date, pLUMEXPIR);
          request.input('lANDEXPIR', sql.Date, lANDEXPIR);
          request.input('lANDNUM', sql.VarChar(20), lANDNUM);
          request.input('fIREEXPIR', sql.Date, fIREEXPIR);
          request.input('fIRENUM', sql.VarChar(20), fIRENUM);
          request.input('iNSURANCE', sql.VarChar(25), iNSURANCE);
          request.input('pOLICY', sql.VarChar(20), pOLICY);
          request.input('lIABILITY', sql.Int, lIABILITY);
          request.input('iNSUREXP', sql.Date, iNSUREXP);
          request.input('iNSURAGT', sql.VarChar(25), iNSURAGT);
          request.input('iNSURPHO', sql.VarChar(20), iNSURPHO);
          request.input('allDataSets', sql.Bit, allDataSets);
          request.input('init', sql.VarChar(3), init);
          request.input('email', sql.VarChar(200), email);
          request.input('cell', sql.VarChar(30), cell);
          request.input('uDF1', sql.VarChar(25), uDF1);
          request.input('repCertNum', sql.VarChar(20), repCertNum);
          request.input('repCertExp', sql.Date, repCertExp);
          request.input('survCertAgcy', sql.VarChar(25), survCertAgcy);
          request.input('instCertAgcy', sql.VarChar(25), instCertAgcy);
          request.input('repCertAgcy', sql.VarChar(25), repCertAgcy);
          request.input('survCertDate', sql.Date, survCertDate);
          request.input('instCertDate', sql.Date, instCertDate);
          request.input('repCertDate', sql.Date, repCertDate);
          request.input('testCertNum2', sql.VarChar(20), testCertNum2);
          request.input('testCertExp2', sql.Date, testCertExp2);
          request.input('certAgcy2', sql.VarChar(25), certAgcy2);
          request.input('certDate2', sql.Date, certDate2);
          request.input('survCertNum2', sql.VarChar(20), survCertNum2);
          request.input('survCertExp2', sql.Date, survCertExp2);
          request.input('survCertAgcy2', sql.VarChar(25), survCertAgcy2);
          request.input('survCertDate2', sql.Date, survCertDate2);
          request.input('instCertNum2', sql.VarChar(20), instCertNum2);
          request.input('instCertExp2', sql.Date, instCertExp2);
          request.input('instCertAgcy2', sql.VarChar(25), instCertAgcy2);
          request.input('instCertDate2', sql.Date, instCertDate2);
          request.input('repCertNum2', sql.VarChar(20), repCertNum2);
          request.input('repCertExp2', sql.Date, repCertExp2);
          request.input('repCertAgcy2', sql.VarChar(25), repCertAgcy2);
          request.input('repCertDate2', sql.Date, repCertDate2);
          request.input('showOnList', sql.Bit, showOnList);
          request.input('cityCheck', sql.Bit, cityCheck);
          request.input('countyCheck', sql.Bit, countyCheck);
          request.input('plumberCheck', sql.Bit, plumberCheck);
          request.input('landScapeCheck', sql.Bit, landScapeCheck);
          request.input('fireCheck', sql.Bit, fireCheck);
          request.input('confinedCheck', sql.Bit, confinedCheck);
          request.input('confinedLicNum', sql.VarChar(20), confinedLicNum);
          request.input('confinedLicExp', sql.Date, confinedLicExp);
          request.input('lastLetter', sql.Date, lastLetter);
          request.input('lastLetterName', sql.VarChar(100), lastLetterName);
          request.input('testerUserID', sql.VarChar(15), testerUserID);
          request.input('password', sql.VarChar(15), password);
          request.input('lastUpdate', sql.Date, lastUpdate);
          request.input('lastUpdateID', sql.VarChar(50), lastUpdateID);
          request.input('lastUpdateBy', sql.VarChar(3), lastUpdateBy);
          request.input('webStatus', sql.VarChar(10), webStatus);
          request.execute('sp_UpdateTechnicians').then(function (err, recordsets, returnValue, affected) {

            new sql.ConnectionPool(config).connect().then(pool => {
              return pool.request().query("delete from TechCompany where TesterID = " + testerId)
            }).then(result => {
              if (companyList.length != null) {
                // InsertValues.push([company.id, testerId, 0, null])
                companyList.forEach((company, index) => {
                  var insertQuery = "insert into TechCompany(CompanyID, TesterID, DefaultCompany, defaulttestkitid) values ";
                  insertQuery += "(" + company.id + "," + testerId + "," + 0 + "," + null + ")";
                  new sql.ConnectionPool(config).connect().then(pool => {
                    return pool.request().query(insertQuery)
                  }).then(result => {
                    if (index === companyList.length - 1) {
                      res.setHeader('Access-Control-Allow-Origin', '*');
                      res.status(200).json({ status: 'success' });
                    }
                    sql.close();
                  }).catch(err => {
                    res.status(200).send({ message: err, q: insertQuery })
                    sql.close();
                  });
                });
              }
              sql.close();
            }).catch(error => {
              res.status(200).send({ message: error, q: 'delete from TechCompany where TesterID = ' + testerId })
              sql.close();
            });

          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.get(appConstants.GET_COMPANYBYFILTER, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        // getcompanyQuery = "sp_GetCompanies '" + req.params.search + "','" + req.params.fromdate + "','" + req.params.todate + "'";
        getcompanyQuery = 'sp_GetCompanies "' + req.params.search + '", "' + req.params.fromdate + '", "' + req.params.todate + '"';
        
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(getcompanyQuery)
        }).then(result => {
          let getcompany = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(getcompany);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.GET_TESTKITBYFILTER, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        getcompanyQuery = "sp_GetTestKitByFilter '" + req.params.search + "','" + req.params.fromdate + "','" + req.params.todate + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(getcompanyQuery)
        }).then(result => {
          let getcompany = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(getcompany);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.TECHNICIAN_DEVTYPE_DETAIL, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        devtypesQuery = "SELECT * FROM DevTypes where DevId=" + req.params.id;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(devtypesQuery)
        }).then(result => {
          let devtypes = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(devtypes);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.GET_TECHNICIANSBYFILTER, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
       
        gettechniciansQuery = 'sp_GetTechnicians "' + req.params.search + '", "' + req.params.fromdate + '", "' + req.params.todate + '"';
        // gettechniciansQuery = "sp_GetTechnicians '" + req.params.search + "','" + req.params.fromdate + "','" + req.params.todate + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(gettechniciansQuery)
        }).then(result => {
          let gettechnicians = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(gettechnicians);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });
  // exports.testkit_details_get = function(req, res, next) {
  app.get(appConstants.TECHNICIAN_TESTKIT_DETAIL, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        testkitQuery = "select * from TestKit where TestKitID='" + req.params.id + "'";
        //res.send(testkitQuery);
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(testkitQuery)
        }).then(result => {
          let testkit = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(testkit);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  // exports.companies_details_get = function(req, res, next) {
  app.get(appConstants.TECHNICIAN_COMPANY_DETAIL, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        // connect to your database
        companiesQuery = "select C.*,T.serialnum as TestKitID from Companies C left join TestKit T on T.CompanyID=C.CompanyID where C.CompanyId=" + req.params.id;
        //res.send(companiesQuery);
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(companiesQuery)
        }).then(result => {
          let companiess = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(companiess);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.TECHNICIAN_TECHNICIAN_DETAIL, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var testerId = req.params.id;
        techniciansQuery = "select Te.*,C.Company+'-'+CAST(TC.CompanyID as varchar(10))as Company from Technicians Te left join TechCompany TC on TC.TesterID=Te.TesterID left join Companies C on TC.CompanyID=c.CompanyID where Te.TesterID=" + testerId;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(techniciansQuery)
        }).then(result => {
          let technicianss = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(technicianss);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.TECHNICIAN_FAILTYPE_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        query = "select RowNum,Code as code,Description as description,Datestamp,uid from Failtypes";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query)
        }).then(result => {
          let techfailtypes = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(techfailtypes);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.TECHNICIAN_REPAIRTYPE_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        query = "select * from Repairtypes";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query)
        }).then(result => {
          let techrepairtype = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(techrepairtype);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.TECHNICIAN_FAILTYPE_CREATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var failtypedata = req.body["data"];
        var code = failtypedata.code;
        var description = failtypedata.description;
        var dateStamp = failtypedata.dateStamp;
        var UID = failtypedata.UID;
        if (dateStamp == null || dateStamp == '') {
          dateStamp = new Date();
        }

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('code', sql.VarChar(6000), code);
          request.input('description', sql.VarChar(6000), description);
          request.input('dateStamp', sql.Date, dateStamp);
          request.input('UID', sql.VarChar(6000), UID);
          request.execute('sp_CreateFailTypes').then(function (err, recordsets, returnValue, affected) {
            res.status(200).json('failtype created');
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.post(appConstants.TECHNICIAN_FAILTYPE_UPDATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var failtypedata = req.body["data"];
        var RowNum = failtypedata.RowNum;
        var code = failtypedata.code;
        var description = failtypedata.description;
        var dateStamp = failtypedata.Datestamp;
        var UID = failtypedata.uid;
        if (dateStamp == null || dateStamp == '') {
          dateStamp = new Date();
        }

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('RowNum', sql.Int, RowNum);
          request.input('code', sql.VarChar(6000), code);
          request.input('description', sql.VarChar(6000), description);
          request.input('dateStamp', sql.Date, dateStamp);
          request.input('UID', sql.VarChar(6000), UID);
          request.execute('sp_UpdateFailTypes').then(function (err, recordsets, returnValue, affected) {
            res.status(200).json('failtype updated');
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.post(appConstants.TECHNICIAN_REPAIRTYPE_UPDATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var failtypedata = req.body["data"];
        var RowNum = failtypedata.RowNum;
        var code = failtypedata.Code;
        var description = failtypedata.Description;

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('RowNum', sql.Int, RowNum);
          request.input('code', sql.VarChar(6000), code);
          request.input('description', sql.VarChar(6000), description);
          request.execute('sp_UpdateRepairTypes').then(function (err, recordsets, returnValue, affected) {
            res.status(200).json('repair type updated');
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.post(appConstants.TECHNICIAN_REPAIRTYPE_CREATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var repairtypedata = req.body["data"];
        var code = repairtypedata.code;
        var description = repairtypedata.description;

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('code', sql.VarChar(6000), code);
          request.input('description', sql.VarChar(6000), description);
          request.execute('sp_CreateRepairTypes').then(function (err, recordsets, returnValue, affected) {
            res.status(200).json('repairtype created');
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.get(appConstants.COMPANY_TESTER, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var conn = new sql.ConnectionPool(config);

        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('testerId', sql.Int, req.params.id);

          request.execute('sp_GetCompanyByTester').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.recordset
            res.status(200).json(datasets);

          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.get(appConstants.TECHNICIAN_GETCOMPANY, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        getCompanyQuery = "select CompanyID,Company from Companies";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(getCompanyQuery)
        }).then(result => {
          let getCompany = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(getCompany);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.TECHNICIAN_GETTESTKIT_COMPANY, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        gettestkitQuery = "select TestKitID,TestKitMod from TestKit where CompanyID=" + req.params.companyid;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(gettestkitQuery)
        }).then(result => {
          let gettestkit = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(gettestkit);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.GET_COMPANYLIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        query = "select CompanyID,Company from Companies";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query)
        }).then(result => {
          let companylist = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(companylist);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.GET_TESTKITBYCOMPANY, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        query = "select TestKitID,TestKitMod from TestKit where CompanyID=" + req.params.companyID;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query)
        }).then(result => {
          let testkitlist = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(testkitlist);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.GET_TESTKIT, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        query = "select TestKitID,TestKitMod from TestKit ";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query)
        }).then(result => {
          let testkitlist = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(testkitlist);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.delete(appConstants.TECHNICIAN_DELETE_DEVTYPE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        testQuery = "delete  from DevTypes where DevID=" + req.params.id;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(testQuery)
        }).then(result => {
          let test = result.rowsAffected;
          res.status(200).json(test);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.delete(appConstants.TECHNICIAN_DELETE_TESTKIT, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        testQuery = "delete  from TestKit where TestKitID=" + req.params.id;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(testQuery)
        }).then(result => {
          let test = result.rowsAffected;
          res.status(200).json(test);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.delete(appConstants.TECHNICIAN_DELETE_TECHNICIAN, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('testerId', sql.Int, req.params.id);
          request.execute('sp_DeleteTechnician').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.rowsAffected;
            res.status(200).json(datasets);
          }).catch(function (err) {
            res.status(200).json(err);
          });
        });
      }
    });
  });

  app.delete(appConstants.TECHNICIAN_DELETE_COMPANY, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('CompanyID', sql.Int, req.params.id);
          request.execute('sp_DeleteCompany').then(function (err, recordsets, returnValue, affected) {
            res.status(200).json(err.rowsAffected);
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.delete(appConstants.TECHNICIAN_DELETE_FAILTYPE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('RowNum', sql.Int, req.params.id);
          request.execute('sp_DeleteFailType').then(function (err, recordsets, returnValue, affected) {
            res.status(200).json('failtype deleted');
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  function ConvertJsonDateToDate(date) {
    // var currentTime = new Date(parseInt(date.substr(6)));
    // var month = ("0" + (currentTime.getMonth() + 1)).slice(-2);
    // var day = ("0" + currentTime.getDate()).slice(-2);
    // var year = currentTime.getFullYear();
    // var date = year + '-' + month + '-' + day;
    date = new Date(date);
    date = date.getUTCFullYear() + '-' +
      ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
      ('00' + date.getUTCDate()).slice(-2) + ' ' +
      ('00' + date.getUTCHours()).slice(-2) + ':' +
      ('00' + date.getUTCMinutes()).slice(-2) + ':' +
      ('00' + date.getUTCSeconds()).slice(-2);

    return date;
  }

  function ensuretoken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader != 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearertoken = bearer[1];
      req.token = bearertoken;
      next();
    } else {
      res.sendStatus(403);
    }
  }

}
