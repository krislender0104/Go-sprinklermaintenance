var sql = require('mssql');
var jwt = require('jsonwebtoken');
module.exports = function (app, express, dbConfig, config, appConstants) {

  app.get(appConstants.HAZARD_DETAILS, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        hazarddetailQuery = "select UDh7 as devid, udh15 as surveyId, udh12 as assemblyid, webfee, udh18, udh13, TestDue, ServiceNo as svcPntId, siteId, hazid as hazardid, HazardCat as category, priority as priority,(select accountnum from Sites where Sites.SiteID=Hazards.SiteID) as customer, UDh1 as servclass ,UDh2 as protection, UDh4 as seasonal , UDh5 as heattype,meter as meter, linesize as linesize,Status as linestatus, UDh7 as tap , link as link1 , location as location , Location2 as meterlocation, recommend as recommendations, 	installed as devicestatus , serialnum as serial,    mfg as manufacturer , model as model, Type as type, devSize as size, fireline,bypass,InstallDue as installdueate, InstalledDate as installed, RemovedDate as removereplacedate,  Noticesent1 as notice1, Noticesent2 as notice2, Noticesent3 as notice3, Noticesent4 as notice4, iNoticeSent1 ,iNoticeSent2,iNoticeSent3,iNoticeSent4,LastTest as lastdate, lastletter as lastletter, linkcode as	 linkcode, UDH10 as udh10, shutoffdate as shutoffdate from hazards where HazId=" + req.params.id;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(hazarddetailQuery)
        }).then(result => {
          let hazard = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(hazard);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.HAZARD_VERIFY_SITE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        hazarddetailQuery = "select * from Hazards where hazid='" + req.params.hazid + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(hazarddetailQuery)
        }).then(result => {
          let hazard = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(hazard);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.HAZARD_UPDATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var hazarddata = req.body["data"];
        var siteId = hazarddata.siteId;
        var hazardid = hazarddata.hazardid;
        var category = hazarddata.category;
        var priority = hazarddata.priority;
        var servclass = hazarddata.servclass;
        var protection = hazarddata.protection;
        //var testmonhts = hazarddata.testmonhts;
        var seasonal = hazarddata.seasonal;
        var heattype = hazarddata.heattype;
        var meter = hazarddata.meter;
        var linesize = hazarddata.linesize;
        var linestatus = hazarddata.linestatus;
        var tap = hazarddata.tap;
        var link1 = hazarddata.link1;
        //var device = hazarddata.device;
        var location = hazarddata.location;
        var meterlocation = hazarddata.meterlocation;
        var recommendations = hazarddata.recommendations;
        //var notes1 = hazarddata.notes1;
        var devicestatus = hazarddata.devicestatus;
        var serial = hazarddata.serial;
        var manufacturer = hazarddata.manufacturer;
        var model = hazarddata.model;
        var type = hazarddata.type;
        var size = hazarddata.size;
        //var location1 = hazarddata.location1;
        //var location2 = hazarddata.location2;
        //var leadfree = hazarddata.leadfree;
        //var recommendations = hazarddata.Recommendation;
        //var notes2 = hazarddata.note2;
        var installdueate = hazarddata.installdueate;
        var installed = hazarddata.installed;
        var removereplacedate = hazarddata.removereplacedate;
        //var replaceddate = hazarddata.replaceddate;
        var notice1 = hazarddata.notice1;
        var notice2 = hazarddata.notice2;
        var notice3 = hazarddata.notice3;
        var notice4 = hazarddata.notice4;
        var iNoticeSent1 = hazarddata.iNoticeSent1;
        var iNoticeSent2 = hazarddata.iNoticeSent2;
        var iNoticeSent3 = hazarddata.iNoticeSent3;
        var iNoticeSent4 = hazarddata.iNoticeSent4;
        var lastdate = hazarddata.lastdate;
        var lastletter = hazarddata.lastletter;
      //var link2 = hazarddata.link2;
        var udh10 = hazarddata.udh10;
        var shutoffdate = hazarddata.shutoffdate;
        var fireline = hazarddata.fireline;
        var bypass = hazarddata.bypass;
        var udh13 = hazarddata.udh13;
        var udh18 = hazarddata.udh18;
        var webfee = hazarddata.webfee;
        var assemblyid = hazarddata.assemblyid;
        var surveyId = hazarddata.surveyId;
        var TestDue = hazarddata.TestDue;
        // if(TestDue==null){
        //   TestDue='';
        // }
        if (assemblyid == '') { assemblyid = 0 }
        if (surveyId == '') { surveyId = 0 }
        if (webfee == '') { webfee = 0 }

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('siteId', sql.Int, siteId);
          request.input('hazardid', sql.Int, hazardid);
          request.input('category', sql.VarChar(30), category);
          request.input('priority', sql.VarChar(30), priority);
          request.input('servclass', sql.VarChar(30), servclass);
          request.input('protection', sql.VarChar(30), protection);
          //request.input('testmonhts', sql.VarChar(30), testmonhts);
          request.input('seasonal', sql.VarChar(30), seasonal);
          request.input('heattype', sql.VarChar(30), heattype);
          request.input('meter', sql.VarChar(30), meter);
          request.input('linesize', sql.VarChar(30), linesize);
          request.input('linestatus', sql.VarChar(30), linestatus);
          request.input('tap', sql.VarChar(30), tap);
          request.input('link1', sql.VarChar(30), link1);
          //request.input('device', sql.VarChar(30), device);
          request.input('location', sql.VarChar(30), location);
          request.input('meterlocation', sql.VarChar(30), meterlocation);
          request.input('recommendations', sql.VarChar(1000), recommendations);
          //request.input('notes1', sql.VarChar(30), notes1);
          request.input('devicestatus', sql.VarChar(30), devicestatus);
          request.input('serial', sql.VarChar(30), serial);
          request.input('manufacturer', sql.VarChar(30), manufacturer);
          request.input('model', sql.VarChar(30), model);
          request.input('type', sql.VarChar(30), type);
          request.input('size', sql.VarChar(30), size);
          //request.input('location1', sql.VarChar(30), location1);
          //request.input('location2', sql.VarChar(30), location2);
          //request.input('leadfree', sql.VarChar(30), leadfree);
          //request.input('Orient', sql.VarChar(30), Orient);
          //request.input('Recommendation', sql.VarChar(30), Recommendation);
          //request.input('notes2', sql.VarChar(30), "");
          request.input('installdueate', sql.VarChar(30), installdueate);
          request.input('installeddate', sql.VarChar(30), installed);
          request.input('removereplacedate', sql.VarChar(30), removereplacedate);
          //request.input('replaceddate', sql.VarChar(30), replaceddate);
          request.input('notice1', sql.Date, notice1);
          request.input('notice2', sql.Date, notice2);
          request.input('notice3', sql.Date, notice3);
          request.input('notice4', sql.Date, notice4);
          request.input('iNoticeSent1', sql.Date, iNoticeSent1);
          request.input('iNoticeSent2', sql.Date, iNoticeSent2);
          request.input('iNoticeSent3', sql.Date, iNoticeSent3);
          request.input('iNoticeSent4', sql.Date, iNoticeSent4);
          request.input('lastdate', sql.VarChar(30), lastdate);
          request.input('lastletter', sql.VarChar(30), lastletter);
          //request.input('link2', sql.VarChar(30), "");
          request.input('udh10', sql.VarChar(30), udh10);
          request.input('shutoffdate', sql.VarChar(30), shutoffdate);
          request.input('fireline', sql.Bit, fireline);
          request.input('bypass', sql.Bit, bypass);
          request.input('udh13', sql.VarChar(30), udh13);
          request.input('udh18', sql.VarChar(30), udh18);
          request.input('webfee', sql.Decimal, webfee);
          request.input('assemblyid', sql.Int, assemblyid);
          request.input('surveyId', sql.Int, surveyId);
          request.input('testdue', sql.Date, TestDue);
          request.execute('sp_updateHazard').then(function (err, recordsets, returnValue, affected) {
            // res.setHeader('Access-Control-Allow-Origin', '*');
            // res.status(200).json('Hazard Updated');
            res.status(200).json('Hazard Updated');
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });

      }
    });
  });

  app.post(appConstants.HAZARD_CREATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var hazarddata = req.body["data"];
        //res.send(hazarddata);
        var siteId = hazarddata.siteId;
        var categoty = hazarddata.categoty;
        var priority = hazarddata.priority;
        var servclass = hazarddata.servclass;
        var protection = hazarddata.protection;
        var testmonths = hazarddata.testmonths;
        var seasonal = hazarddata.seasonal;
        var heattype = hazarddata.heattype;

        var meter = hazarddata.meter;
        var linesize = hazarddata.linesize;
        var linestatus = hazarddata.linestatus;
        var tap = hazarddata.tap;
        var link = hazarddata.link;
        var device = hazarddata.device;

        var devicestatus = hazarddata.devicestatus;
        if (devicestatus == null || devicestatus == '') {
          devicestatus = 'Active';
        }

        var serial = hazarddata.serial;
        var manufacturer = hazarddata.manufacturer;
        var model = hazarddata.model;
        var type = hazarddata.type;
        var installer = hazarddata.installer;

        var location = hazarddata.location;
        var meterlocation = hazarddata.meterlocation;
        var recommendations = hazarddata.recommendations;
        var notes = hazarddata.notes;
        var installeddate = hazarddata.installeddate;
        /* if(installeddate==null || installeddate=='')
        {
          installeddate= new Date();
        } */
        // res.send(installeddate);

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('siteId', sql.Int, siteId);
          request.input('categoty', sql.VarChar(30), categoty);
          request.input('priority', sql.VarChar(30), priority);
          request.input('servclass', sql.VarChar(30), servclass);
          request.input('protection', sql.VarChar(30), protection);
          request.input('testmonths', sql.VarChar(30), testmonths);
          request.input('seasonal', sql.VarChar(30), seasonal);
          request.input('heattype', sql.VarChar(30), heattype);
          request.input('meter', sql.VarChar(30), meter);
          request.input('linesize', sql.VarChar(30), linesize);
          request.input('linestatus', sql.VarChar(30), linestatus);
          request.input('tap', sql.VarChar(30), tap);
          request.input('link', sql.VarChar(30), link);
          request.input('device', sql.VarChar(30), device);
          request.input('devicestatus', sql.VarChar(30), devicestatus);
          request.input('serial', sql.VarChar(30), serial);
          request.input('manufacturer', sql.VarChar(30), manufacturer);
          request.input('model', sql.VarChar(30), model);
          request.input('type', sql.VarChar(30), type);
          request.input('installer', sql.VarChar(30), installer);
          request.input('location', sql.VarChar(30), location);
          request.input('meterlocation', sql.VarChar(30), meterlocation);
          request.input('recommendations', sql.VarChar(1000), recommendations);
          request.input('notes', sql.VarChar(30), notes);
          request.input('installeddate', sql.DateTime, installeddate);

          request.execute('sp_CreateHazard').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.returnValue;
            res.status(200).json(datasets);
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
        //res.send('Hazard Created');
      }
    });
  });

  app.post(appConstants.GET_SITE_HAZARD, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var hazarddata = req.body["data"];
        var serialNum = hazarddata.serialNum;
        var hazid = hazarddata.hazid;

        var meter = hazarddata.meter;
        // var  address= hazarddata.address;

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('hazid', sql.VarChar(20), hazid);
          request.input('meter', sql.VarChar(25), meter);
          request.input('serialNum', sql.VarChar(50), serialNum);

          request.execute('sp_GetSiteHazard').then(function (err, recordsets, returnValue, affected) {
            let hazard = err.recordset[0];
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json(hazard);
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });


  app.post(appConstants.HAZARD_UPDATE_FROM_TESTVERIFY, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var hazarddata = req.body["data"];

        //var hazard_id			=hazarddata.hazard_id		 ;
        var site_id = hazarddata.site_id;
        var haz_id = hazarddata.haz_id;
        var location = hazarddata.location;
        var location2 = hazarddata.location2;
        var hazardcat = hazarddata.hazardcat;
        var meter = hazarddata.meter;
        var serialnum = hazarddata.serialnum;
        var mfg = hazarddata.mfg;
        var model = hazarddata.model;
        var devtype = hazarddata.devtype;
        var devsize = hazarddata.devsize;

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('site_id', sql.Int, site_id);
          request.input('haz_id', sql.Int, haz_id);
          request.input('location', sql.VarChar(80), location);
          request.input('location2', sql.VarChar(80), location2);
          request.input('hazardcat', sql.VarChar(80), hazardcat);
          request.input('meter', sql.VarChar(25), meter);
          request.input('serialnum', sql.VarChar(25), serialnum);
          request.input('mfg', sql.VarChar(25), mfg);
          request.input('model', sql.VarChar(25), model);
          request.input('devtype', sql.VarChar(25), devtype);
          request.input('devsize', sql.VarChar(25), devsize);
          request.execute('sp_UpdateHazardFromTest').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.rowsAffected;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json(datasets);
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
        //res.send('Hazard Updated');
      }
    });
  });


  app.post(appConstants.HAZARD_HISTORY_CREATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var hazarddata = req.body["data"];

        //var hazard_id			=hazarddata.hazard_id		 ;
        var site_id = hazarddata.site_id;
        var haz_id = hazarddata.haz_id;
        var address = hazarddata.address;
        var address_current = hazarddata.address_current;
        var company = hazarddata.company;
        var company_current = hazarddata.company_current;
        var location = hazarddata.location;
        var location_current = hazarddata.location_current;
        var location2 = hazarddata.location2;
        var location2_current = hazarddata.location2_current;
        var hazardcat = hazarddata.hazardcat;
        var hazardcat_current = hazarddata.hazardcat_current;
        var meter = hazarddata.meter;
        var meter_current = hazarddata.meter_current;
        var serialnum = hazarddata.serialnum;
        var serialnum_current = hazarddata.serialnum_current;
        var mfg = hazarddata.mfg;
        var mfg_current = hazarddata.mfg_current;
        var model = hazarddata.model;
        var model_current = hazarddata.model_current;
        var devtype = hazarddata.devtype;
        var devtype_current = hazarddata.devtype_current;
        var devsize = hazarddata.devsize;
        var devsize_current = hazarddata.devsize_current;
        var testerid_mod = hazarddata.testerid_mod;
        var tester_name = hazarddata.tester_name;
        var companyid = hazarddata.companyid;
        var tester_Company = hazarddata.tester_Company;
        var uID = hazarddata.uID;
        var dateStamp = hazarddata.dateStamp;

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          //request.input('hazard_id',				sql.Int         ,hazard_id		  )	;
          request.input('site_id', sql.Int, site_id);
          request.input('haz_id', sql.Int, haz_id);
          request.input('address', sql.VarChar(50), address);
          request.input('address_current', sql.VarChar(50), address_current);
          request.input('company', sql.VarChar(50), company);
          request.input('company_current', sql.VarChar(50), company_current);
          request.input('location', sql.VarChar(80), location);
          request.input('location_current', sql.VarChar(80), location_current);
          request.input('location2', sql.VarChar(80), location2);
          request.input('location2_current', sql.VarChar(80), location2_current);
          request.input('hazardcat', sql.VarChar(80), hazardcat);
          request.input('hazardcat_current', sql.VarChar(80), hazardcat_current);
          request.input('meter', sql.VarChar(25), meter);
          request.input('meter_current', sql.VarChar(25), meter_current);
          request.input('serialnum', sql.VarChar(25), serialnum);
          request.input('serialnum_current', sql.VarChar(25), serialnum_current);
          request.input('mfg', sql.VarChar(25), mfg);
          request.input('mfg_current', sql.VarChar(25), mfg_current);
          request.input('model', sql.VarChar(25), model);
          request.input('model_current', sql.VarChar(25), model_current);
          request.input('devtype', sql.VarChar(25), devtype);
          request.input('devtype_current', sql.VarChar(25), devtype_current);
          request.input('devsize', sql.VarChar(25), devsize);
          request.input('devsize_current', sql.VarChar(25), devsize_current);
          request.input('testerid_mod', sql.Int, testerid_mod);
          request.input('tester_name', sql.VarChar(50), tester_name);
          request.input('companyid', sql.Int, companyid);
          request.input('tester_Company', sql.VarChar(50), tester_Company);
          request.input('uID', sql.VarChar(25), uID);
          request.input('dateStamp', sql.Date, dateStamp);
          request.execute('sp_CreateHazardsHistory').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.rowsAffected;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json(datasets);
          }).catch(function (err) {
            res.status(200).json(err);
          });
        });
        //res.send('Hazard History Created');
      }
    });
  });

  app.delete(appConstants.HAZARD_DELETE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('hazardId', sql.Int, req.params.id);
          request.execute('sp_DeleteHazard').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.rowsAffected;
            res.status(200).json(datasets);
          }).catch(function (err) {
            res.status(200).json(err);
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

}
