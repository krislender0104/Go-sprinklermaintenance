var sql = require('mssql');
var fs = require('fs');
var jwt = require('jsonwebtoken');

module.exports = function (app, express, dbConfig, config, appConstants) {
  app.get(appConstants.WEBTEST_APPOINTMENTS_INSTALLATION_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var installdate = req.params.installdate;
        var installationappointmentsQuery = "select  *,'' as selectedId,Hazards.InstallDue as date,'Installation' as TestType,(select  Company from sites where Sites.SiteID= Hazards.SiteID) as SiteName,(select  Address from sites where Sites.SiteID= Hazards.SiteID)  as SiteAddress ,(select count(*) from Assignments where Assignments.siteid=Hazards.SiteID) as TestCount from Hazards where  InstallDue='" + installdate + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(installationappointmentsQuery)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  var NodeGeocoder = require('node-geocoder');

  var options = {
    provider: 'google',

    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'AIzaSyBhDFV2aHjt3TCuquYVugJnDwVHGwvmk7c', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
  };

  var geocoder = NodeGeocoder(options);

  app.get(appConstants.GET_LOCATION_FROMGOOGLE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        // Or using Promise
        geocoder.geocode('BRITE REALTY SERVICES, INC, 677 EXTON COMMONS, EXTON, PA')
          .then(function (res) {
            console.log(res);
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    });
  });

  app.get(appConstants.WEBTEST_APPOINTMENTS_TEST_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var testdue = req.params.testdue;
        var testappointmentsQuery = "select  *,'' as selectedId,Hazards.TestDue as date,'Test' as TestType,(select  Company from sites where Sites.SiteID= Hazards.SiteID) as SiteName,(select  Address from sites where Sites.SiteID= Hazards.SiteID) as SiteAddress ,(select count(*) from Assignments where Assignments.siteid=Hazards.SiteID) as TestCount from Hazards where  TestDue='" + testdue + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(testappointmentsQuery)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.WEBTEST_APPOINTMENTS_TESTERS_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var appointmenttype = req.params.appointmenttype;
        var testerlistquery;
        if (appointmenttype == 'Installation') {
          testerlistquery = "select Contact, TesterID from Technicians where InstCertified=1 and Status = 'active' order by Contact";
        }
        else {
          testerlistquery = "select Contact, TesterID from Technicians where TestCertified=1 and Status = 'active' order by Contact";

        }
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(testerlistquery)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.WEBTEST_APPOINTMENTS_CREATE_POST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var appointmentdata = req.body["data"];

        var sites = appointmentdata.assigntester

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          sites.forEach(appdata => {
            var request = new sql.Request(conn);
            var testerId = appointmentdata.testerId;
            var siteId = appdata.SiteID;
            console.log("HazID", appdata.HazID);
            if (siteId.length > 0) {
              siteId = siteId[0];
            }
            var testtype = appdata.TestType;
            if (appdata.TestType == 'Test') {
              var date = new Date(appdata.TestDue);
            }
            else {
              var date = new Date(appdata.InstallDue);
            }
            if (appdata.Status == undefined || appdata.Status == null) {
              appdata.Status = 'Active'
            }
            var status = appdata.Status;
            var appointmentdate = new Date(appointmentdata.appointmentdate);

            request.input('TesterID', sql.Int, testerId);
            request.input('SiteID', sql.Int, appdata.SiteID);
            request.input('HazID', sql.Int, appdata.HazID);
            request.input('TestType', sql.VarChar(50), testtype);
            request.input('Date', sql.DateTime, date);
            request.input('appointmentdate', sql.DateTime, appointmentdate);
            request.input('Status', sql.VarChar(50), status);
            console.log(testerId + '-' + siteId + '-' + testtype + '-' + date + '-' + status + '-');
            request.execute('sp_CreateAssignment').
              then(function (errRol, recordsetsRol, returnValueRol, affectedRol) {
                //console.log('Created Apointments');
                res.status(200).json("Created Appointment");
              }).catch(function (err) {
                res.status(500).send({ message: err })
                sql.close();
              });
          });
        });
      }
    });
  });

  app.get(appConstants.WEBTEST_APPOINTMENTS_ASSIGNED_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        //var testdue = req.params.testdue;
        var testerId = req.params.id;
        var appointmentsQuery = "Select Assignments.*,   (select FirstName +' '+ LastName from Technicians where Assignments.TesterID=Technicians.TesterID) as TesterName,  (select Company from Sites where Assignments.SiteID=Sites.SiteID) as SiteName,SerialNum,Meter    from Assignments Assignments inner join      Hazards H on H.HazID=Assignments.HazID where (Assignments.TestCompleteStatus is null or Assignments.TestCompleteStatus=0) and  TesterId=" + testerId;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(appointmentsQuery)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.WEBTEST_SETUP_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var webtestsetup = "SELECT Code,Description,(CASE Rating WHEN 1     THEN 'Accurate'      WHEN 2 THEN 'Low Risk'   WHEN 3 THEN 'General Risk' 			   WHEN 4 THEN 'Significant Risk' 					   WHEN 5 THEN 'High Risk'                                          ELSE 'Severe Risk'        END) AS Rating,Accept,Expr,EmailMessage FROM cRssetup order by Code asc";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(webtestsetup)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.WEBTEST_REVIEW_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var webtestreview = "select * from webHazardHistory_Tokay where Accepted is NULL order by dateStamp desc";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(webtestreview)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.WEBTEST_HAZARD_HISTORY_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var webtestreview = "select * from webHazardHistory_Tokay order by dateStamp desc";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(webtestreview)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.delete(appConstants.WEBTEST_REVIEW_HISTORY_DELETE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var id = req.params['id'];
        var query1 = "delete from webHazardHistory_Tokay where webHazardHistory_id = " + id;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query1)
        }).then(result => {
          let datasets = result.rowsAffected;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          error = err;
          sql.close();
          res.status(500).send({ status: false, message: error });
        });
      }
    });
  });

  app.post(appConstants.WEBTEST_REVIEW_UPDATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var fileds = req.body['columns'];
        var values = req.body['values'];
        var id = req.body['webtestId'];
        var Siteid = req.body['s_id'];
        var Hazid = req.body['h_id'];
        var query1 = "update webHazardHistory_Tokay SET Accepted = GETDATE() where webHazardHistory_id = " + id;
        var query2 = '';
        var query3 = '';
        var isQuery1 = false;
        var error = '';

        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query1)
        }).then(result => {
          isQuery1 = true;
          sql.close();
        }).catch(err => {
          error = err;
          sql.close();
          res.status(500).send({ status: false, message: error });
        });


        // Updating siteTable
        if (fileds['address'] && fileds['company']) {
          query2 = "update Sites SET Address = '" + values['address'] + "', Company = '" + values['company'] + "' Where SiteID = " + Siteid;
        } else if (fileds['address']) {
          query2 = "update Sites SET Address = '" + values['address'] + "' Where SiteID = " + Siteid;
        } else if (fileds['company']) {
          query2 = "update Sites SET Company = '" + values['company'] + "' Where SiteID = " + Siteid;
        }

        if (query2 !== '') {
          new sql.ConnectionPool(config).connect().then(pool => {
            return pool.request().query(query2)
          }).then(result => {
            sql.close();
          }).catch(err => {
            res.status(500).send({ status: false, message: err, q: query2 })
            sql.close();
          });
        }

        // Updating Hazard Table
        if (fileds['location'] || fileds['location2'] || fileds['meter'] || fileds['serial'] || fileds['mfg'] ||
          fileds['model'] || fileds['type'] || fileds['size']) {
          query3 = "Update Hazards SET ";
          if (fileds['location'])
            query3 += "Location = '" + values['location'] + "' ,";
          if (fileds['location2'])
            query3 += "Location2 = '" + values['location2'] + "' ,";
          if (fileds['meter'])
            query3 += "Meter = '" + values['meter'] + "' ,";
          if (fileds['serial'])
            query3 += "SerialNum = '" + values['serial'] + "' ,";
          if (fileds['mfg'])
            query3 += "MFG = '" + values['mfg'] + "' ,";
          if (fileds['model'])
            query3 += "Model = '" + values['model'] + "' ,";
          if (fileds['type'])
            query3 += "Type = '" + values['type'] + "' ,";
          if (fileds['size'])
            query3 += "devSize = '" + values['size'] + "' ,";

          query3 += "WHERE HazID = " + Hazid;
          query3 = query3.replace(",WHERE", " WHERE");

        }
        if (query3 !== '') {
          new sql.ConnectionPool(config).connect().then(pool => {
            return pool.request().query(query3)
          }).then(result => {
            sql.close();
          }).catch(err => {
            res.status(500).send({ status: false, message: err, q: query3 })
            sql.close();
          });
        }

        res.status(200).send({ status: true, message: 'successfully updated' });
      }
    });
  });

  app.post(appConstants.WEBTEST_REVIEW_DELETE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var testlist = req.body['Testname'];
        testQuery = "delete  from WebTestHistory where test_data_pk in (" + testlist + ")";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(testQuery)
        }).then(result => {
          var output = testlist.split(',');

          var output_with_qoutes = "'" + output.join("','") + "'";
          testQuery1 = "delete  from TesterImage where TestId in (" + output_with_qoutes + ")";
          new sql.ConnectionPool(config).connect().then(pool => {
            return pool.request().query(testQuery1)
          }).then(result1 => {

            let test = result.rowsAffected;
            res.status(200).json(test);
            sql.close();
          }).catch(err => {
            res.status(500).send({ message: err })
            sql.close();
          });

          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });


  app.get(appConstants.WEBTEST_FULLNAMEBYID, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var testid = req.params.id;
        testQuery = "select FullName from Users U join Technicians T on T.TesterUserID=U.Logon where T.TesterID=" + testid;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(testQuery)
        }).then(result => {
          let test = result.recordsets;
          res.status(200).json(test);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.SEARCH_TESTER, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        // "select TesterID,FirstName,LastName,TestCertNum from Technicians"
        var searchQuery = "";
        var val = req.params.searchtext;
        if((val != null) && (val.indexOf(' ') >= 0)){
          var string = val.split(" ");
          // var stringArray = new Array();
          searchQuery = "select  top 20  TesterID,FirstName,LastName,TestCertNum from Technicians where ((FirstName like '%" + string[0] + "%') and (LastName like '%" + string[1] + "%') )or (TestCertNum like '%" + val + "%') ";
          // for(var i =0; i < string.length; i++){
            // stringArray.push(string[i]);
            // if(i == 0){
            //   searchQuery = + "(FirstName like '%" + string[i] + "%') or (LastName like '%" + string[i] + "%') or (TestCertNum like '%" + string[i] + "%') ";
              
            // }else{
            //   searchQuery = + "or (FirstName like '%" + string[i] + "%') or (LastName like '%" + string[i] + "%') or (TestCertNum like '%" + string[i] + "%') ";

            // }

          // }
        }else{
          searchQuery = "select  top 20  TesterID,FirstName,LastName,TestCertNum from Technicians where (FirstName like '%" + req.params.searchtext + "%') or (LastName like '%" + req.params.searchtext + "%') or (TestCertNum like '%" + req.params.searchtext + "%') ";
          
        }
        // console.log("search testing ------------->");
        // console.log(searchQuery);
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


  app.get(appConstants.WEBTEST_TESTENTRY_GETTESTKIT, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var companyid = req.params.id;
        testQuery = " select TestKitID,TestKitMod, SerialNum from TestKit where CompanyID=" + companyid;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(testQuery)
        }).then(result => {
          let test = result.recordsets;
          res.status(200).json(test);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });


  app.post(appConstants.WEBTEST_SETUP_UPDATE_POST, ensuretoken, function (req, res) {
    var webtestsdata = req.body["data"];
    var code = webtestsdata.code;
    var rating = webtestsdata.rating;
    var accept = webtestsdata.accept;
    if (accept == "1") {
      accept = "Accept";
    }
    else {
      accept = "Reject";
    }
    var description = webtestsdata.description;

    var webtestsetup = "update CRSSetup set Accept='" + accept + "', Code='" + code + "',Description='" + description + "',Rating=" + rating + " where Code='" + code + "'";
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(webtestsetup)
    }).then(result => {
      let datasets = result.rowsAffected;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(datasets);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
    });
  });
  app.post(appConstants.WEBTEST_SETUP_CREATE_POST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var webtestsdata = req.body["data"];
        var code = webtestsdata.code;
        var rating = webtestsdata.rating;
        var accept = webtestsdata.accept;
        var expr = "";
        var emailmessage = "";
        if (accept == "1") {
          accept = "Accept";
        }
        else {
          accept = "Reject";
        }
        var description = webtestsdata.description;

        var webtestsetup = "Insert into CRSSetup values('" + code + "','" + description + "'," + rating + ",'" + accept + "','" + expr + "','" + emailmessage + "')";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(webtestsetup)
        }).then(result => {
          let datasets = result.rowsAffected;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });


  app.post(appConstants.CREATE_WEBTESTHISTORY, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var webtesthistorydata = req.body["data"];
        var testCompany = webtesthistorydata.testCompany;
        var companyid = webtesthistorydata.companyid;
        var code = webtesthistorydata.code;
        var testerid = webtesthistorydata.testerid;
        
        if (testerid == undefined) {
          testerid = null;
        }
        var haz_id = webtesthistorydata.haz_id;
        var ipass = webtesthistorydata.ipass;
        if (ipass == '1') {
          ipass = 'Pass';
        } else if (ipass == '2') {
          ipass = 'Fail';
        }
        // console.log("test create_webtest history =======>");
        // console.log(webtesthistorydata);
        var idate = webtesthistorydata.idate;
        var itestkit = webtesthistorydata.itestkit;
        var i1ai = webtesthistorydata.i1ai;
        if (i1ai == '1') {
          i1ai = 'Pass';
        } else if (i1ai == '2') {
          i1ai = 'Fail';
        }
        var i1aipsi = webtesthistorydata.i1aipsi;
        var i2cv = webtesthistorydata.i2cv;
        if (i2cv == '1') {
          i2cv = 'Pass';
        } else if (i2cv == '2') {
          i2cv = 'Fail';
        }
        var i2cvpsi = webtesthistorydata.i2cvpsi;
        var irp = webtesthistorydata.irp;
        if (irp == '1') {
          irp = 'Pass';
        } else if (irp == '2') {
          irp = 'Fail';
        }
        var irpsi = webtesthistorydata.irpsi;
        var ipvbai = webtesthistorydata.ipvbai;
        if (ipvbai == '1') {
          ipvbai = 'Pass';
        } else if (ipvbai == '2') {
          ipvbai = 'Fail';
        }
        var ipvbaipsi = webtesthistorydata.ipvbaipsi;
        var ipvbcv = webtesthistorydata.ipvbcv;
        if (ipvbcv == '1') {
          ipvbcv = 'Pass';
        } else if (ipvbcv == '2') {
          ipvbcv = 'Fail';
        }
        var ipvbcvpsi = webtesthistorydata.ipvbcvpsi;
        var repdate = webtesthistorydata.repdate;
        var repairs = webtesthistorydata.repairs;
        var fpass = webtesthistorydata.fpass;
        // console.log("testing fpass ------------->");
        // console.log(fpass);
        if (fpass == true) { fpass = 'Pass'; } 
        if (fpass == false) { fpass = 'Fail'; }
        if (fpass == '') { fpass = null; }
        // console.log(webtesthistorydata.fpass,fpass);
        var fdate = webtesthistorydata.fdate;
        var f1ai = webtesthistorydata.f1ai;
        if (f1ai == true) { f1ai = 'Pass'; } 
        if (f1ai == false) { f1ai = 'Fail'; }
        if (f1ai == '') { f1ai = null; }
        // console.log(webtesthistorydata.f1ai,f1ai);
        var f1aipsi = webtesthistorydata.f1aipsi;
        var f2cv = webtesthistorydata.f2cv;
        if (f2cv == true) {
          f2cv = 'Pass';
        } else if (f2cv == false) {
          f2cv = 'Fail';
        }else{
          f2cv=null;
        }
        if (f2cv == true) { f2cv = 'Pass'; } 
        if (f2cv == false) { f2cv = 'Fail'; }
        if (f2cv == '') { f2cv = null; }
        // console.log(webtesthistorydata.f2cv,f2cv);
        var f2cvpsi = webtesthistorydata.f2cvpsi;
        var fpvbaipsi = webtesthistorydata.fpvbaipsi;
        var fpvbcvpsi = webtesthistorydata.fpvbcvpsi;
        var frpsi = webtesthistorydata.frpsi;
        var udt4 = webtesthistorydata.udt4;
        var clean = webtesthistorydata.clean;
        var rubber = webtesthistorydata.rubber;
        var rebuild = webtesthistorydata.rebuild;
        // var dt_submitted=   webtesthistorydata.dt_submitted	;
        var address = webtesthistorydata.address;
        var company = webtesthistorydata.company;
        var siteType = webtesthistorydata.siteType;
        var siteUse = webtesthistorydata.siteUse;
        var contact = webtesthistorydata.contact;
        var location = webtesthistorydata.location;
        var location2 = webtesthistorydata.location2;
        var hazardCat = webtesthistorydata.hazardCat;
        var serialNum = webtesthistorydata.serialNum;
        var orientation = webtesthistorydata.orientation;
        var meter = webtesthistorydata.meter;
        var installed = webtesthistorydata.installed;
        var mFG = webtesthistorydata.mFG;
        var model = webtesthistorydata.model;
        var type = webtesthistorydata.type;
        var devSize = webtesthistorydata.devSize;
        var proper = webtesthistorydata.proper;
        var shut2 = webtesthistorydata.shut2;
        var restore = webtesthistorydata.restore;
        var backPres = webtesthistorydata.backPres;
        var linePSI = webtesthistorydata.linePSI;
        var latLong = webtesthistorydata.latLong;
        var webFee = webtesthistorydata.webFee;
        var assignmentid = webtesthistorydata.assignmentid;

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('testCompany', sql.VarChar(50), testCompany);
          request.input('companyid', sql.Int, companyid);
          request.input('code', sql.VarChar(25), code);
          request.input('testerid', sql.Int, testerid);
          request.input('haz_id', sql.Int, haz_id);
          request.input('ipass', sql.VarChar(4), ipass);
          request.input('idate', sql.Date, idate);
          request.input('itestkit', sql.VarChar(20), itestkit);
          request.input('i1ai', sql.VarChar(6), i1ai);
          request.input('i1aipsi', sql.Numeric(4, 1), i1aipsi);
          request.input('i2cv', sql.VarChar(4), i2cv);
          request.input('i2cvpsi', sql.Numeric(4, 1), i2cvpsi);
          request.input('irp', sql.VarChar(4), irp);
          request.input('irpsi', sql.Numeric(4, 1), irpsi);
          request.input('ipvbai', sql.VarChar(4), ipvbai);
          request.input('ipvbaipsi', sql.Numeric(4, 1), ipvbaipsi);
          request.input('ipvbcv', sql.VarChar(4), ipvbcv);
          request.input('ipvbcvpsi', sql.Numeric(4, 1), ipvbcvpsi);
          request.input('repdate', sql.Date, repdate);
          request.input('repairs', sql.VarChar(1000), repairs);
          request.input('fpass', sql.VarChar(4), fpass);
          request.input('fdate', sql.Date, fdate);
          request.input('f1ai', sql.VarChar(6), f1ai);
          request.input('f1aipsi', sql.Numeric(4, 1), f1aipsi);
          request.input('f2cv', sql.VarChar(4), f2cv);
          request.input('f2cvpsi', sql.Numeric(4, 1), f2cvpsi);
          request.input('fpvbaipsi', sql.Numeric(4, 1), fpvbaipsi);
          request.input('fpvbcvpsi', sql.Numeric(4, 1), fpvbcvpsi);
          request.input('frpsi', sql.Numeric(4,1), frpsi);
          request.input('udt4', sql.VarChar(8000), udt4);
          request.input('clean', sql.Bit, clean);
          request.input('rubber', sql.Bit, rubber);
          request.input('rebuild', sql.Bit, rebuild);
          //request.input('dt_submitted',sql.Date ,		 dt_submitted		 );
          request.input('address', sql.VarChar(50), address);
          request.input('company', sql.VarChar(50), company);
          request.input('siteType', sql.VarChar(50), siteType);
          request.input('siteUse', sql.VarChar(50), siteUse);
          request.input('contact', sql.VarChar(50), contact);
          request.input('location', sql.VarChar(80), location);
          request.input('location2', sql.VarChar(80), location2);
          request.input('hazardCat', sql.VarChar(50), hazardCat);
          request.input('serialNum', sql.VarChar(25), serialNum);
          request.input('orientation', sql.VarChar(15), orientation);
          request.input('meter', sql.VarChar(25), meter);
          request.input('installed', sql.VarChar(25), installed);
          request.input('mFG', sql.VarChar(25), mFG);
          request.input('model', sql.VarChar(25), model);
          request.input('type', sql.VarChar(25), type);
          request.input('devSize', sql.VarChar(25), devSize);
          request.input('proper', sql.Bit, proper);
          request.input('shut2', sql.Bit, shut2);
          request.input('restore', sql.Bit, restore);
          request.input('backPres', sql.Bit, backPres);
          request.input('linePSI', sql.VarChar(5), linePSI);
          request.input('latLong', sql.NVarChar(100), latLong);
          request.input('webFee', sql.Numeric(9, 2), webFee);
          request.input('assignmentid', sql.Int, assignmentid);
          request.execute('sp_CreateWebTestHistory').then(function (err, recordsets, returnValue, affected) {
            // var dir = './server/pictures/'+err.recordset[0].TestId;
            // if (!fs.existsSync(dir)){
            //   fs.mkdirSync(dir);
            // }

            res.send(err.recordset[0]);
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.post(appConstants.EDIT_WEBTESTHISTORY, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var webtesthistorydata = req.body["data"];

        var test_data_pk = webtesthistorydata.test_data_pk;
        var testCompany = webtesthistorydata.testCompany;
        var companyid = webtesthistorydata.companyid;
        var code = webtesthistorydata.code;
        var testerid = webtesthistorydata.testerid;
        var haz_id = webtesthistorydata.haz_id;
        var ipass = webtesthistorydata.ipass;
        if (ipass == '1') {
          ipass = 'Pass';
        } else if (ipass == '2') {
          ipass = 'Fail';
        }
        var idate = webtesthistorydata.idate;
        var itestkit = webtesthistorydata.itestkit;
        var i1ai = webtesthistorydata.i1ai;
        if (i1ai == '1') {
          i1ai = 'Pass';
        } else if (i1ai == '2') {
          i1ai = 'Fail';
        }
        var i1aipsi = webtesthistorydata.i1aipsi;
        var i2cv = webtesthistorydata.i2cv;
        if (i2cv == '1') {
          i2cv = 'Pass';
        } else if (i2cv == '2') {
          i2cv = 'Fail';
        }
        var i2cvpsi = webtesthistorydata.i2cvpsi;
        var irp = webtesthistorydata.irp;
        if (irp == '1') {
          irp = 'Pass';
        } else if (irp == '2') {
          irp = 'Fail';
        }
        var irpsi = webtesthistorydata.irpsi;
        var ipvbai = webtesthistorydata.ipvbai;
        if (ipvbai == '1') {
          ipvbai = 'Pass';
        } else if (ipvbai == '2') {
          ipvbai = 'Fail';
        }
        var ipvbaipsi = webtesthistorydata.ipvbaipsi;
        var ipvbcv = webtesthistorydata.ipvbcv;
        if (ipvbcv == '1') {
          ipvbcv = 'Pass';
        } else if (ipvbcv == '2') {
          ipvbcv = 'Fail';
        }
        var ipvbcvpsi = webtesthistorydata.ipvbcvpsi;
        var repdate = webtesthistorydata.repdate;
        var repairs = webtesthistorydata.repairs;
        var fpass = webtesthistorydata.fpass;
        if (fpass == 'true') {
          fpass = 'Pass';
        } else if (fpass == false) {
          fpass = 'Fail';
        }else{
          fpass = null;
        }
        var fdate = webtesthistorydata.fdate;
        var f1ai = webtesthistorydata.f1ai;
        if (f1ai == true) {
          f1ai = 'Pass';
        } else if (f1ai == false) {
          f1ai = 'Fail';
        }else{
          f1ai = null;
        }
        var f1aipsi = webtesthistorydata.f1aipsi;
        var f2cv = webtesthistorydata.f2cv;
        if (f2cv == true) {
          f2cv = 'Pass';
        } else if (f2cv == false) {
          f2cv = 'Fail';
        }else{
          f2cv = null;
        }
        var f2cvpsi = webtesthistorydata.f2cvpsi;
        var fpvbaipsi = webtesthistorydata.fpvbaipsi;
        var fpvbcvpsi = webtesthistorydata.fpvbcvpsi;
        var frpsi = webtesthistorydata.frpsi;
        var udt4 = webtesthistorydata.udt4;
        var clean = webtesthistorydata.clean;
        var rubber = webtesthistorydata.rubber;
        var rebuild = webtesthistorydata.rebuild;
        //var dt_submitted=   webtesthistorydata.dt_submitted	;
        var address = webtesthistorydata.address;
        var company = webtesthistorydata.company;
        var siteType = webtesthistorydata.siteType;
        var siteUse = webtesthistorydata.siteUse;
        var contact = webtesthistorydata.contact;
        var location = webtesthistorydata.location;
        var location2 = webtesthistorydata.location2;
        var hazardCat = webtesthistorydata.hazardCat;
        var serialNum = webtesthistorydata.serialNum;
        var orientation = webtesthistorydata.orientation;
        var meter = webtesthistorydata.meter;
        var installed = webtesthistorydata.installed;
        var mFG = webtesthistorydata.mFG;
        var model = webtesthistorydata.model;
        var type = webtesthistorydata.type;
        var devSize = webtesthistorydata.devSize;
        var proper = webtesthistorydata.proper;
        var shut2 = webtesthistorydata.shut2;
        var restore = webtesthistorydata.restore;
        var backPres = webtesthistorydata.backPres;
        var linePSI = webtesthistorydata.linePSI;
        var latLong = webtesthistorydata.latLong;

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);

          request.input('test_data_pk', sql.Int, test_data_pk);

          request.input('testCompany', sql.VarChar(50), testCompany);
          request.input('companyid', sql.Int, companyid);
          request.input('code', sql.VarChar(25), code);
          request.input('testerid', sql.Int, testerid);
          request.input('haz_id', sql.Int, haz_id);
          request.input('ipass', sql.VarChar(4), ipass);
          request.input('idate', sql.Date, idate);
          request.input('itestkit', sql.VarChar(20), itestkit);
          request.input('i1ai', sql.VarChar(6), i1ai);
          request.input('i1aipsi', sql.Numeric(4, 1), i1aipsi);
          request.input('i2cv', sql.VarChar(4), i2cv);
          request.input('i2cvpsi', sql.Numeric(4, 1), i2cvpsi);
          request.input('irp', sql.VarChar(4), irp);
          request.input('irpsi', sql.Numeric(4, 1), irpsi);
          request.input('ipvbai', sql.VarChar(4), ipvbai);
          request.input('ipvbaipsi', sql.Numeric(4, 1), ipvbaipsi);
          request.input('ipvbcv', sql.VarChar(4), ipvbcv);
          request.input('ipvbcvpsi', sql.Numeric(4, 1), ipvbcvpsi);
          request.input('repdate', sql.Date, repdate);
          request.input('repairs', sql.VarChar(1000), repairs);
          request.input('fpass', sql.VarChar(4), fpass);
          request.input('fdate', sql.Date, fdate);
          request.input('f1ai', sql.VarChar(6), f1ai);
          request.input('f1aipsi', sql.Numeric(4, 1), f1aipsi);
          request.input('f2cv', sql.VarChar(4), f2cv);
          request.input('f2cvpsi', sql.Numeric(4, 1), f2cvpsi);
          request.input('fpvbaipsi', sql.Numeric(4, 1), fpvbaipsi);
          request.input('fpvbcvpsi', sql.Numeric(4, 1), fpvbcvpsi);
          request.input('frpsi', sql.Numeric(4, 1), frpsi)
          request.input('udt4', sql.VarChar(8000), udt4);
          request.input('clean', sql.Bit, clean);
          request.input('rubber', sql.Bit, rubber);
          request.input('rebuild', sql.Bit, rebuild);
          //request.input('dt_submitted',sql.Date ,		 dt_submitted		 );
          request.input('address', sql.VarChar(50), address);
          request.input('company', sql.VarChar(50), company);
          request.input('siteType', sql.VarChar(50), siteType);
          request.input('siteUse', sql.VarChar(50), siteUse);
          request.input('contact', sql.VarChar(50), contact);
          request.input('location', sql.VarChar(80), location);
          request.input('location2', sql.VarChar(80), location2);
          request.input('hazardCat', sql.VarChar(50), hazardCat);
          request.input('serialNum', sql.VarChar(25), serialNum);
          request.input('orientation', sql.VarChar(15), orientation);
          request.input('meter', sql.VarChar(25), meter);
          request.input('installed', sql.VarChar(25), installed);
          request.input('mFG', sql.VarChar(25), mFG);
          request.input('model', sql.VarChar(25), model);
          request.input('type', sql.VarChar(25), type);
          request.input('devSize', sql.VarChar(25), devSize);
          request.input('proper', sql.Bit, proper);
          request.input('shut2', sql.Bit, shut2);
          request.input('restore', sql.Bit, restore);
          request.input('backPres', sql.Bit, backPres);
          request.input('linePSI', sql.VarChar(5), linePSI);
          request.input('latLong', sql.NVarChar(100), latLong);
          request.execute('sp_EditWebTestHistory').then(function (err, recordsets, returnValue, affected) {
            let sites = err.rowsAffected;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json('WebTestHistory  updated');
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
        //res.send('WebTestHistory  updated');
      }
    });
  });

  app.get(appConstants.GET_WEBTESTHISTORY, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var code = req.params.code;
        var getwebtestQuery = "Exec sp_GetWebTestHistory '" + code + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(getwebtestQuery)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.GET_SUBMITTEDWEBTESTHISTORY, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var code = req.params.code;
        var getwebtestQuery = "Exec sp_SubmittedWebTestHistory '" + code + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(getwebtestQuery)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });


  app.get(appConstants.GET_SUBMITTEDWEBTESTHISTORY_FROM_ADMIN, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var getwebtestQuery = "Exec sp_SubmittedWebTestHistoryfromadmin";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(getwebtestQuery)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.GET_HAZARDHISTORYDETAILSDATA, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var getwebtestQuerynew = "Exec sp_GetHazardHistory ";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(getwebtestQuerynew)
        }).then(result => {

          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });


  app.post(appConstants.UPDATE_HAZARDHISTORYDETAILS, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var hazarddata = req.body["data"];
        var siteID = hazarddata.siteID;
        var hazID = hazarddata.hazID;
        var location = hazarddata.location;
        var hazardcat = hazarddata.hazardcat;
        var meter = hazarddata.meter;
        var serialnum = hazarddata.serialnum;
        var mfg = hazarddata.mfg;
        var model = hazarddata.model;
        var type = hazarddata.type;
        var devsize = hazarddata.devsize;
        var company = hazarddata.company;
        var address = hazarddata.address;

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('siteID', sql.Int, siteID);
          request.input('hazID', sql.Int, hazID);
          request.input('location', sql.VarChar(80), location);
          request.input('hazardcat', sql.VarChar(50), hazardcat);
          request.input('meter', sql.VarChar(25), meter);
          request.input('serialnum', sql.VarChar(25), serialnum);
          request.input('mfg', sql.VarChar(25), mfg);
          request.input('model', sql.VarChar(25), model);
          request.input('type', sql.VarChar(25), type);
          request.input('devsize', sql.VarChar(25), devsize);
          request.input('company', sql.VarChar(70), company);
          request.input('address', sql.VarChar(50), address);
          request.execute('sp_UpdateSiteHazard').then(function (err, recordsets, returnValue, affected) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json('Hazard History  updated');
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
        //res.send('Updated Sucessfully');
      }
    });
  });


  app.get(appConstants.GET_ALLWEBTESTHISTORY, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var code = req.params.code;
        var getwebtestQuery = "Exec sp_GetAllWebTestHistory";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(getwebtestQuery)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  // app.post(appConstants.WEBTEST_SUBMITEST_POST, function (req, res) {
  //   var test = req.body;
  //   console.log(test);
  //   var query1 = "update WebTestHistory SET Accepted = GETDATE() where test_data_pk = " + test.test_data_pk;
  //   var query2;
  //   var Idate = test.idate;
  //   var RepDate = test.repdate;
  //   var Fdate = test.fdate;
  //   if (Idate === null || Idate === '' || Idate === undefined || Idate === 'null') {
  //     Idate = null;
  //   } else {
  //     Idate = "'" + Idate + "'";
  //   }
  //   if (RepDate === null || RepDate === '' || RepDate === undefined || RepDate === 'null') {
  //     RepDate = null;
  //   } else {
  //     RepDate = "'" + RepDate + "'";
  //   }
  //   if (Fdate === null || Fdate === '' || Fdate === undefined || Fdate === 'null') {
  //     Fdate = null;
  //   } else {
  //     Fdate = "'" + Fdate + "'";
  //   }
  //   if (test.ipass === '1') {
  //     query2 = "Insert INTO DevTests(itestbyid, SiteID, HazID,  iPass, iDate, I1Ai, I1AiPsi, I2Cv, I2CvPsi, RepairDate, Repair, fPass, fDate, F1Ai, F2CvPsi, F2Cv, FrPsi, iTestKit, iCompany, iTestBy) values "
  //       + "('" + test.testerid + "','" + test.siteid + "','" + test.haz_id + "','" + test.ipass + "', " + Idate + ", '" + test.i1ai + "', " + test.i1aipsi + ", '" + test.i2cv + "', " + test.i2cvpsi + ", " + RepDate + ", " + test.repairs + ", '" + test.fpass + "', "
  //       + Fdate + ", '" + test.f1ai + "', " + test.f2cvpsi + ", '" + test.f2cv + "', " + test.f2cvpsi + ", '" + test.itestkit + "', '" + test.companyid + "', '" + test.testerid + "')";
  //   } else if (test.fpass === 'Pass') {
  //     query2 = "Insert INTO DevTests(itestbyid, SiteID, HazID, iPass, iDate, I1Ai, I1AiPsi, I2Cv, I2CvPsi, RepairDate, Repair, fPass, fDate, F1Ai, F2CvPsi, F2Cv, FrPsi, fTestKit, fCompany, fTestBy) values "
  //       + "('" + test.testerid + "','" + test.siteid + "','" + test.haz_id + "','" + test.ipass + "', " + Idate + ", '" + test.i1ai + "', " + test.i1aipsi + ", '" + test.i2cv + "', " + test.i2cvpsi + ", " + RepDate + ", " + test.repairs + ", '" + test.fpass + "', "
  //       + Fdate + ", '" + test.f1ai + "', " + test.f2cvpsi + ", '" + test.f2cv + "', " + test.f2cvpsi + ", '" + test.itestkit + "', '" + test.companyid + "', '" + test.testerid + "')";
  //   }

  //   new sql.ConnectionPool(config).connect().then(pool => {
  //     return pool.request().query(query1)
  //   }).then(result => {
  //     new sql.ConnectionPool(config).connect().then(pool => {
  //       return pool.request().query(query2)
  //     }).then(result => {
  //       res.status(200).json({ status: true, msg: 'Successfully submitted!' });
  //       sql.close();
  //     }).catch(err => {
  //       res.status(500).send({ status: false, msg: err })
  //       sql.close();
  //     });
  //     sql.close();
  //   }).catch(err => {
  //     res.status(500).send({ status: false, msg: err })
  //     sql.close();
  //   });
  // });

  app.post(appConstants.SUBMIT_TEST_FROM_ADMIN, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var test = req.body["data"];
        var testbyid = test.testerid;
        var SiteID = test.siteid;
        var HazID = test.haz_id;
        var companyId = test.companyid;
        console.log("testing-------> Submit_Test_from_Admin");
        console.log(test);
        var iPass = test.ipass;
        if (iPass == '1') {
          iPass = 'Pass';
        } else if (iPass == '2') {
          iPass = 'Fail';
        }
        var iDate = test.idate;
        var I1Ai = test.i1ai;
        if (I1Ai == '1') {
          I1Ai = 'Pass';
        } else if (I1Ai == '2') {
          I1Ai = 'Fail';
        }
        var I1AiPsi = test.i1aipsi;
        var I2Cv = test.i2cv;
        if (I2Cv == '1') {
          I2Cv = 'Pass';
        } else if (I2Cv == '2') {
          I2Cv = 'Fail';
        }
        var I2CvPsi = test.i2cvpsi;
        var RepairDate = test.repdate;
        var Repairtype = test.repairs;
        var fPass = test.fpass;
        if (fPass == true) {
          fPass = 'Pass';
        } else if (fPass == false) {
          fPass = 'Fail';
        }else{
          fPass=null;
        }
        var fDate = test.fdate;
        var F1Ai = test.f1ai;
        if (F1Ai == true) {
          F1Ai = 'Pass';
        } else if (F1Ai == false) {
          F1Ai = 'Fail';
        }else{
          F1Ai=null;
        }
        var f1aipsi = test.f1aipsi;
        var F2CvPsi = test.f2cvpsi;
        var F2Cv = test.f2cv;
        if (F2Cv == true) {
          F2Cv = 'Pass';
        } else if (F2Cv == false) {
          F2Cv = 'Fail';
        }else{
          F2Cv=null;
        }
        var FrPsi = test.frpsi;
        var TestKit = test.itestkit;
        var clean = test.clean;
        var rubber = test.rubber;
        var rebuild = test.rebuild;
        var proper = test.proper;
        var shut2 = test.shut2;
        var restore = test.restore;
        var backPres = test.backPres;
        var linePSI = test.linePSI;
        var udt4 = test.udt4;
        var irpsi = test.irpsi;
        var irp = test.irp;
        if (irp == '1') {
          irp = 'Pass';
        } else if (irp == '2') {
          irp = 'Fail';
        }
        var SubmittedBy = test.SubmittedBy;
        var datesubmitted = new Date();
        var feepaid=0; //Always 0 for feepaid, whenever the test submitted from admin login.

        if (iDate === null || iDate === '' || iDate === undefined || iDate === 'null') {
          iDate = null;
        }
        if (RepairDate === null || RepairDate === '' || RepairDate === undefined || RepairDate === 'null') {
          RepairDate = null;
        }
        if (fDate === null || fDate === '' || fDate === undefined || fDate === 'null') {
          fDate = null;
        }
        if (testbyid == undefined) {
          testbyid = null;
        }
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('testbyid', sql.Int, testbyid);
          request.input('SiteID', sql.Int, SiteID);
          request.input('HazID', sql.Int, HazID);
          request.input('companyId', sql.Int, companyId);
          request.input('iPass', sql.VarChar(10), iPass);
          request.input('iDate', sql.Date, iDate);
          request.input('I1Ai', sql.VarChar(6), I1Ai);
          request.input('I1AiPsi', sql.Numeric(4, 1), I1AiPsi);
          request.input('I2Cv', sql.VarChar(6), I2Cv);
          request.input('I2CvPsi', sql.Numeric(4, 1), I2CvPsi);
          request.input('irp', sql.VarChar(6), irp);
          request.input('irpsi', sql.Numeric(4, 1), irpsi);
          request.input('RepairDate', sql.Date, RepairDate);
          request.input('Repairtype', sql.VarChar(8000), Repairtype);
          request.input('fPass', sql.VarChar(4), fPass);
          request.input('fDate', sql.Date, fDate);
          request.input('F1Ai', sql.VarChar(6), F1Ai);
          request.input('f1aipsi', sql.Numeric(4, 1), f1aipsi)
          request.input('F2Cv', sql.VarChar(6), F2Cv);
          request.input('F2CvPsi', sql.Numeric(4, 1), F2CvPsi);
          request.input('FrPsi', sql.Numeric(4, 1), FrPsi);
          request.input('TestKit', sql.VarChar(20), TestKit);
          request.input('proper', sql.Bit, proper);
          request.input('shut2', sql.Bit, shut2);
          request.input('restore', sql.Bit, restore);
          request.input('backPres', sql.Bit, backPres);
          request.input('linePSI', sql.VarChar(5), linePSI);
          request.input('udt4', sql.VarChar(8000), udt4);
          request.input('datesubmitted', sql.Date, datesubmitted);
          request.input('SubmittedBy', sql.VarChar(25), SubmittedBy);
          request.input('FeePaid', sql.Numeric(7,2), feepaid);
          request.execute('sp_SubmittedWebTestFromAdmin').then(function (err, recordsets, returnValue, affected) {
            console.log("data value", err.recordset[0]);
            res.send(err.recordset[0]);
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.post(appConstants.WEBTEST_SUBMITEST_POST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var test = req.body;
        var test_data_pk = test.test_data_pk
        var testbyid = test.testerid;
        var SiteID = test.siteid;
        var HazID = test.haz_id;
        var companyId = test.companyid;
        var iPass = test.ipass;
        if (iPass == '1') {
          iPass = 'Pass';
        } else if (iPass == '2') {
          iPass = 'Fail';
        }
        var iDate = test.idate;
        var I1Ai = test.i1ai;
        if (I1Ai == '1') {
          I1Ai = 'Pass';
        } else if (I1Ai == '2') {
          I1Ai = 'Fail';
        }
        var I1AiPsi = test.i1aipsi;
        var I2Cv = test.i2cv;
        if (I2Cv == '1') {
          I2Cv = 'Pass';
        } else if (I2Cv == '2') {
          I2Cv = 'Fail';
        }
        var I2CvPsi = test.i2cvpsi;
        var RepairDate = test.repdate;
        var Repairtype = test.repairs;
        var fPass = test.fpass;
        console.log(fPass);
        if (fPass == true||fPass == 'true') {
          fPass = 'Pass';
        } else if (fPass == false||fPass == 'false') {
          fPass = 'Fail';
        }else{
          fPass = null;
        }
        var fDate = test.fdate;
        var F1Ai = test.f1ai;
        if (F1Ai == true||F1Ai == 'true') {
          F1Ai = 'Pass';
        } else if (F1Ai == false||F1Ai == 'false') {
          F1Ai = 'Fail';
        }else{
          F1Ai = null;
        }
        var f1aipsi = test.f1aipsi;
        var F2CvPsi = test.f2cvpsi;
        var F2Cv = test.f2cv;
        if (F2Cv == true||F2Cv == 'true') {
          F2Cv = 'Pass';
        } else if (F2Cv == false||F2Cv == 'false') {
          F2Cv = 'Fail';
        }else{
          F2Cv = null;
        }
        var FrPsi = test.frpsi;
        var TestKit = test.itestkit;
        var clean = test.clean;
        var rubber = test.rubber;
        var rebuild = test.rebuild;
        var proper = test.proper;
        var shut2 = test.shut2;
        var restore = test.restore;
        var backPres = test.backPres;
        var linePSI = test.linePSI;
        var udt4 = test.udt4;
        var irpsi = test.irpsi;
        var irp = test.irp;
        if (irp == '1') {
          irp = 'Pass';
        } else if (irp == '2') {
          irp = 'Fail';
        }
        var datesubmitted = new Date();

        if (iDate === null || iDate === '' || iDate === undefined || iDate === 'null') {
          iDate = null;
        }
        if (RepairDate === null || RepairDate === '' || RepairDate === undefined || RepairDate === 'null') {
          RepairDate = null;
        }
        if (fDate === null || fDate === '' || fDate === undefined || fDate === 'null') {
          fDate = null;
        }
        if (testbyid == undefined) {
          testbyid = null;
        }
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('test_data_pk', sql.Int, test_data_pk);
          request.input('testbyid', sql.Int, testbyid);
          request.input('SiteID', sql.Int, SiteID);
          request.input('HazID', sql.Int, HazID);
          request.input('companyId', sql.Int, companyId);
          request.input('iPass', sql.VarChar(10), iPass);
          request.input('iDate', sql.Date, iDate);
          request.input('I1Ai', sql.VarChar(6), I1Ai);
          request.input('I1AiPsi', sql.Numeric(4, 1), I1AiPsi);
          request.input('I2Cv', sql.VarChar(6), I2Cv);
          request.input('I2CvPsi', sql.Numeric(4, 1), I2CvPsi);
          request.input('irp', sql.VarChar(6), irp);
          request.input('irpsi', sql.Numeric(4, 1), irpsi);
          request.input('RepairDate', sql.Date, RepairDate);
          request.input('Repairtype', sql.VarChar(8000), Repairtype);
          request.input('fPass', sql.VarChar(4), fPass);
          request.input('fDate', sql.Date, fDate);
          request.input('F1Ai', sql.VarChar(6), F1Ai);
          request.input('f1aipsi', sql.Numeric(4, 1), f1aipsi)
          request.input('F2Cv', sql.VarChar(6), F2Cv);
          request.input('F2CvPsi', sql.Numeric(4, 1), F2CvPsi);
          request.input('FrPsi', sql.Numeric(4, 1), FrPsi);
          request.input('TestKit', sql.VarChar(20), TestKit);
          request.input('proper', sql.Bit, proper);
          request.input('shut2', sql.Bit, shut2);
          request.input('restore', sql.Bit, restore);
          request.input('backPres', sql.Bit, backPres);
          request.input('linePSI', sql.VarChar(5), linePSI);
          request.input('udt4', sql.VarChar(8000), udt4);
          request.input('datesubmitted', sql.Date, datesubmitted);
          request.execute('sp_SubmittedWebTest').then(function (err, recordsets, returnValue, affected) {
            console.log("data value", err.recordset[0]);
            //res.send(err.recordset[0]);
            res.status(200).json({ status: true, msg: 'Successfully submitted!' });
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });
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
};
