var mongoose = require('mongoose');
//var mysql = require('mysql');
var sql = require('mssql');
var db = require('../../database/schemas/chat2');
var sha1 = require('sha1');
var jwt = require('jsonwebtoken');

module.exports = function (app, express, dbConfig, config, appConstants) {
  // exports.user_list = function(req, res, next) {

  app.get(appConstants.USER_LIST,ensuretoken,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    // connect to your database
    userQuery = "select * from users";
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(userQuery)
    }).then(result => {
      let users = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(users);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
    });
  }
});
  });

  app.get(appConstants.USER_ADMINPRIVILAGES,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    // connect to your database
    useradminQuery = "select * from users where userid=" + req.params.id;
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(useradminQuery)
    }).then(result => {
      let users = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(users);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
    });
  }
});
  });

  app.get(appConstants.USER_DATAPRIVILAGES, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        // connect to your database
        //userdataQuery="select UserID,DataSetID,Access as a_checkedOrUnchecked,Modify as m_checkedOrUnchecked,(select ClientName from DataSet where ClientID=UserDataSet.DataSetID) as ClientName  from UserDataSet where userid="+req.params.id;
        userdataQuery = "select UserID,DataSetID,Access as a_checkedOrUnchecked,Modify  as m_checkedOrUnchecked,(select ClientName from DataSet where ClientID=UserDataSet.DataSetID) as ClientName  from UserDataSet where userid=" + req.params.id;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(userdataQuery)
        }).then(result => {
          let users = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(users);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });


  app.get(appConstants.ROLE_LIST,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    roleQuery = "select * from Roles";
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(roleQuery)
    }).then(result => {
      let roles = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(roles);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
    });
  }
});
  });

  app.get(appConstants.USER_TESTER_GET,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    roleQuery = "select * from Technicians where TesterID = " + req.params.id;
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(roleQuery)
    }).then(result => {
      let roles = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(roles);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
    });
  }
});
  });


  // Handle user delete on POST
  app.post(appConstants.USER_DELETE_LIST,ensuretoken, function (req, res) {
    // console.log('/rooms  put');
    //	  Chat.deleteUser(req.body, function (err, put) {
    //			console.log('deleteing...');
    //	    if (err) return next(err);
    //	    console.log ("del rooms res: " + JSON.stringify(put));
    //	    res.json(put);
    //	  });
  });

  app.post(appConstants.USER_DELETE_MULTIPLE,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    var userList = req.body['userIds'];
    userQuery = "delete from users where UserID in (" + userList + ")";
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(userQuery)
    }).then(result => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json({ status: true, message: result });
      sql.close();
    }).catch(err => {
      res.status(500).send({ status: false, message: err })
      sql.close();
    });
  }
});
  });




  app.post(appConstants.USER_CREATE_POST,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    var userdata = req.body["data"];

    var logon = userdata.logon;
    var fullName = userdata.fullName;
    var initials = userdata.initials;
    var notes = userdata.notes;
    var disabled = userdata.disabled;
    var sysAdmin = userdata.sysAdmin;
    // var setupLists = userdata.setupLists;
    var advanceReporting = userdata.advanceReporting;
    // var setupFields = userdata.setupFields;
    var setup = userdata.setup;
    var customizeGrids = userdata.customizeGrids;
    // var setupLetters = userdata.setupLetters;
    // var setupNotices = userdata.setupNotices;
    var accessAll = userdata.accessAll;
    var modifyAll = userdata.modifyAll;
    var uID = userdata.uID;
    var dateStamp = userdata.dateStamp;
    var licenseType = userdata.licenseType;
    var createSiteInfo = userdata.createSiteInfo;
    var editSiteInfo = userdata.editSiteInfo;
    var viewSiteInfo = userdata.viewSiteInfo;
    var viewTechnicalInfo = userdata.viewTechnicalInfo;
    var editTechnicalInfo = userdata.editTechnicalInfo;
    var createTechnicalInfo = userdata.createTechnicalInfo;
    var webTestEdit = userdata.WebTestEdit;
    var lettersItem = userdata.letters;
    var adminItem = userdata.admin;
    var emailItem = userdata.email;
    var dashboard = userdata.dashboard;
    var dashboard2 = userdata.dashboard2;
    var password = userdata.password;
    var WebTestTester = userdata.WebTestTester;
    var Dataset = userdata.Dataset;

    var roles = req.body["roles"];
    password = sha1(password);
    if (dateStamp == null || dateStamp == '') {
      dateStamp = new Date();
    }
    if (licenseType == null) { licenseType = "N" }
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function (conn) {
      var request = new sql.Request(conn);
      request.input('logon', sql.VarChar(25), logon);
      request.input('fullName', sql.VarChar(50), fullName);
      request.input('initials', sql.VarChar(3), initials);
      request.input('notes', sql.VarChar(250), notes);
      request.input('disabled', sql.Bit, disabled);
      request.input('sysAdmin', sql.Bit, sysAdmin);
      // request.input('setupLists', sql.Bit, setupLists);
      request.input('AdvanceReporting', sql.Bit, advanceReporting);
      // request.input('setupFields', sql.Bit, setupFields);
      request.input('Setup', sql.Bit, setup);
      request.input('customizeGrids', sql.Bit, customizeGrids);
      // request.input('setupLetters', sql.Bit, setupLetters);
      // request.input('setupNotices', sql.Bit, setupNotices);
      request.input('accessAll', sql.Bit, accessAll);
      request.input('modifyAll', sql.Bit, modifyAll);
      request.input('uID', sql.VarChar(25), uID);
      request.input('dateStamp', sql.Date, dateStamp);
      request.input('licenseType', sql.VarChar(1), licenseType);
      request.input('createSiteInfo', sql.Bit, createSiteInfo);
      request.input('editSiteInfo', sql.Bit, editSiteInfo);
      request.input('viewSiteInfo', sql.Bit, viewSiteInfo);
      request.input('viewTechnicalInfo', sql.Bit, viewTechnicalInfo);
      request.input('editTechnicalInfo', sql.Bit, editTechnicalInfo);
      request.input('createTechnicalInfo', sql.Bit, createTechnicalInfo);
      request.input('webTestEdit', sql.Bit, webTestEdit);
      request.input('letters', sql.Bit, lettersItem);
      request.input('admin', sql.Bit,adminItem);
      request.input('email', sql.Bit, emailItem);
      request.input('dashboard', sql.Bit, dashboard);
      request.input('dashboard2', sql.Bit, dashboard2);
      request.input('password', sql.VarChar(128), password);
      request.input('WebTestTester', sql.Bit, WebTestTester);
      request.input('Dataset', sql.Bit, Dataset);

      request.execute('sp_CreateUser').then(function (err, recordsets, returnValue, affected) {
        var userID = err.recordset[0];
        roles.forEach((rol, index) => {
          var dataSetID = rol.clientId;
          var access = rol.a_checkedOrUnchecked;
          var modify = rol.m_checkedOrUnchecked;
          var requestRol = new sql.Request(conn);
          requestRol.input('userID', sql.Int, userID.UserID);
          requestRol.input('dataSetID', sql.Int, dataSetID);
          requestRol.input('access', sql.Bit, access);
          requestRol.input('modify', sql.Bit, modify);
          requestRol.execute('sp_CreateUserDataSet').then(function (errRol, recordsetsRol, returnValueRol, affectedRol) {
            // res.send('Created Roles');
            if (index === roles.length - 1) {
              res.status(200).send({ status: true, msg: 'Success' });
            }
          }).catch(function (err) {
            if (index === roles.length - 1) {
              res.status(500).send({ status: false, msg: err });
            }
          });
        });
      }).catch(function (err) {
        res.status(500).send({ status: false, msg: err });
      });
    });
  }
});
  });

  app.post(appConstants.USER_UPDATE_POST,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    var userdata = req.body["data"];
    var userID = userdata.UserID;
    var logon = userdata.logon;
    var fullName = userdata.fullName;
    var initials = userdata.initials;
    var notes = userdata.notes;
    var disabled = userdata.disabled;
    var sysAdmin = userdata.sysAdmin;
    // var setupLists = userdata.setupLists;
    var advanceReporting = userdata.advanceReporting;
    // var setupFields = userdata.setupFields;
    var setup = userdata.setup;
    var customizeGrids = userdata.customizeGrids;
    // var setupLetters = userdata.setupLetters;
    // var setupNotices = userdata.setupNotices;
    var accessAll = userdata.accessAll;
    var modifyAll = userdata.modifyAll;
    var uID = userdata.uID;
    var dateStamp = userdata.dateStamp;
    var licenseType = userdata.licenseType;
    var createSiteInfo = userdata.createSiteInfo;
    var editSiteInfo = userdata.editSiteInfo;
    var viewSiteInfo = userdata.viewSiteInfo;
    var viewTechnicalInfo = userdata.viewTechnicalInfo;
    var editTechnicalInfo = userdata.editTechnicalInfo;
    var createTechnicalInfo = userdata.createTechnicalInfo;
    var webTestEdit = userdata.webTestEdit;
    var lettersItem = userdata.letters;
    var adminItem = userdata.admin;
    var emailItem = userdata.email;
    var dashboard = userdata.dashboard;
    var dashboard2 = userdata.dashboard2;
    var password = userdata.password;
    var webtesttester = userdata.WebTestTester;
    var Dataset = userdata.Dataset;
    var roles = req.body["roles"];
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function (conn) {
      var request = new sql.Request(conn);

      request.input('userID', sql.Int, userID);

      request.input('logon', sql.VarChar(25), logon);
      request.input('fullName', sql.VarChar(50), fullName);
      request.input('initials', sql.VarChar(3), initials);
      request.input('notes', sql.VarChar(250), notes);
      request.input('disabled', sql.Bit, disabled);
      request.input('sysAdmin', sql.Bit, sysAdmin);
      // request.input('setupLists', sql.Bit, setupLists);
      request.input('AdvanceReporting', sql.Bit, advanceReporting);
      // request.input('setupFields', sql.Bit, setupFields);
      request.input('Setup', sql.Bit, setup);
      request.input('customizeGrids', sql.Bit, customizeGrids);
      // request.input('setupLetters', sql.Bit, setupLetters);
      // request.input('setupNotices', sql.Bit, setupNotices);
      request.input('accessAll', sql.Bit, accessAll);
      request.input('modifyAll', sql.Bit, modifyAll);
      request.input('uID', sql.VarChar(25), uID);
      request.input('dateStamp', sql.Date, dateStamp);
      request.input('licenseType', sql.VarChar(1), licenseType);
      request.input('createSiteInfo', sql.Bit, createSiteInfo);
      request.input('editSiteInfo', sql.Bit, editSiteInfo);
      request.input('viewSiteInfo', sql.Bit, viewSiteInfo);
      request.input('viewTechnicalInfo', sql.Bit, viewTechnicalInfo);
      request.input('editTechnicalInfo', sql.Bit, editTechnicalInfo);
      request.input('createTechnicalInfo', sql.Bit, createTechnicalInfo);
      request.input('webTestEdit', sql.Bit, webTestEdit);
      request.input('letters', sql.Bit, lettersItem);
      request.input('admin', sql.Bit, adminItem);
      request.input('email', sql.Bit, emailItem);
      request.input('dashboard', sql.Bit, dashboard);
      request.input('dashboard2', sql.Bit, dashboard2);
      request.input('password', sql.VarChar(128), password);
      request.input('webtesttester', sql.Bit, webtesttester);
      request.input('Dataset', sql.Bit, Dataset);

      request.execute('sp_EditUser').then(function (err, recordsets, returnValue, affected) {
        var userID1 = err.recordset[0];
        roles.forEach((rol, index) => {
          var dataSetID = rol.clientId;
          var access = rol.a_checkedOrUnchecked;
          if (access == null) { access = 0; }
          var modify = rol.m_checkedOrUnchecked;
          var requestRol = new sql.Request(conn);
          requestRol.input('userID', sql.Int, userID1.UserID);
          requestRol.input('dataSetID', sql.Int, dataSetID);
          requestRol.input('access', sql.Bit, access);
          requestRol.input('modify', sql.Bit, modify);
          requestRol.execute('sp_CreateUserDataSet').
            then(function (errRol, recordsetsRol, returnValueRol, affectedRol) {
              if (index === roles.length - 1) {
                res.status(200).send({ status: true, msg: 'Success' });
              }
            }).catch(function (err) {
              if (index === roles.length - 1) {
                res.status(500).send({ status: false, msg: err });
              }
            });
        });
      }).catch(function (err) {
        res.status(500).send({ status: false, msg: err });
      });
    });
  }
});
  });

  app.get(appConstants.USER_ADMIN_ACCESS, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var conn = new sql.ConnectionPool(config);

        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('userID', sql.Int, req.params.id);

          request.execute('sp_GetAdminAccess').then(function (err, recordsets, returnValue, affected) {
            let datasets = {
              userDetails: [],
              userDataSet: []
            };
            datasets.userDetails = err.recordsets[0];
            datasets.userDataSet = err.recordsets[1]
            res.status(200).json(datasets);

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
}
