var sql = require('mssql');
var jwt = require('jsonwebtoken');

module.exports = function (app, express, dbConfig, config, appConstants) {


  // exports.companies_list = function(req, res, next) {
  app.get(appConstants.COMPANY_DATA_SET_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        companiesQuery = "select clientId,ClientName from dataset order by ClientName asc";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(companiesQuery)
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

  app.get(appConstants.GET_COMPANY_USER_DATA_SET_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        
        if(req.params.is_accessAll == 'true'){
          companiesQuery = "select D.clientId,D.ClientName from DataSet D order by D.ClientName asc";
        }else{
          companiesQuery = "select D.clientId,D.ClientName from DataSet D join UserDataSet UD on D.ClientID=UD.DataSetID where UD.UserID=" + req.params.id + " and UD.Access=1 order by D.ClientName asc";
        }
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(companiesQuery)
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

  app.get(appConstants.COMPANYUSERS_DATA_SET_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        companiesQuery = "select  clientId,ClientName,0 as a_checkedOrUnchecked,0 as m_checkedOrUnchecked  from dataset order by ClientName asc";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(companiesQuery)
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

  app.get(appConstants.COMPANY_ALL_TESTER, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var query = "select TesterID,FirstName,LastName,TestCertNum from Technicians";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query)
        }).then(result => {
          let datasets = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(datasets);
          sql.close();
        }).catch(err => {
          res.status(200).send({ message: err })
          sql.close();
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
            sql.close();
          }).catch(function (err) {
            res.status(500).json(err);
            sql.close();
          });
        });
      }
    });
  });


  app.get(appConstants.COMPANY_NOTICETYPE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('noticeType', sql.VarChar(50), req.params.noticetype);

          request.execute('sp_GetCustomerNotice').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.recordset
            res.status(200).json(datasets);
            sql.close();
          }).catch(function (err) {
            res.status(200).json(err);
            sql.close();
          });
        });
      }
    });
  });



  app.post(appConstants.CREATE_COMPANY_NOTICETYPE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var jsondata = req.body["data"];
        jsondata.forEach(arr => {

          var ClientID = arr.ClientID;
          var NoticeType = arr.NoticeType;
          var Letter = arr.Letter;
          var TestRPT = arr.TestRPT;
          var Testers = arr.Testers;
          var Regs = arr.Regs;
          var Survey = arr.Survey;
          var Doc6 = arr.Doc6;
          var Doc7 = arr.Doc7;
          var Doc8 = arr.Doc8;
          var Doc9 = arr.Doc9;
          var Doc10 = arr.Doc10;


          var conn = new sql.ConnectionPool(config);
          conn.connect().then(function (conn) {
            var request = new sql.Request(conn);

            request.input('ClientID', sql.Int, ClientID);
            request.input('NoticeType', sql.VarChar(10), NoticeType);
            request.input('Letter', sql.VarChar(10), Letter);
            request.input('TestRPT', sql.VarChar(10), TestRPT);
            request.input('Testers', sql.VarChar(10), Testers);
            request.input('Regs', sql.VarChar(10), Regs);
            request.input('Survey', sql.VarChar(10), Survey);
            request.input('Doc6', sql.VarChar(10), Doc6);
            request.input('Doc7', sql.VarChar(10), Doc7);
            request.input('Doc8', sql.VarChar(10), Doc8);
            request.input('Doc9', sql.VarChar(10), Doc9);
            request.input('Doc10', sql.VarChar(10), Doc10);

            request.execute('sp_CreateAuto').then(function (err, recordsets, returnValue, affected) {
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.status(200).json('Notice Code Updated');
              sql.close();
              //res.send('Notice Code Updated');
            }).catch(function (err) {
              res.status(500).send({ message: err })
              sql.close();
            });
          });
        });
      }
    });
  });




  app.post(appConstants.EXPORT_LETTERS, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var data = req.body["data"];
        filterquery = "sp_ExportLetters'" + data.dueDate + "','" + data.noticeType + "','" + data.columnName + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(filterquery)
        }).then(result => {
          let user = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(user);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });


  app.post(appConstants.UPDATE_EXPORT_LETTERS, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var data = req.body["data"];
        filterquery = "sp_UpdateExportLetters'" + data.dueDate + "','" + data.noticeType + "','" + data.columnName + "','" + data.user + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(filterquery)
        }).then(result => {
          let user = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(user);
          sql.close();
        }).catch(err => {
          res.status(200).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.UPDATE_HISTORY_TABLE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var data = req.body["data"];
        filterquery = "sp_UpdateHistoryTable '" + data.dueDate + "','" + data.noticeType + "','" + data.columnName + "','" + data.user + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(filterquery)
        }).then(result => {
          let user = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(user);
          sql.close();
        }).catch(err => {
          res.status(200).send({ message: err })
          sql.close();
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

