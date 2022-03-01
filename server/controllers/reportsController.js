var sql = require('mssql');
var jwt = require('jsonwebtoken');
module.exports = function (app, express, dbConfig, config, appConstants) {

  app.get(appConstants.REPORTS_EXPORT_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        exportsquery = "select * from Exports order by ExportName asc";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(exportsquery)
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


  app.get(appConstants.REPORTS_EXPORT_REPORT, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        //exportreportquery="select Sites.SiteID,Sites.AccountNum,Hazards.Meter from sites,hazards";
        exportreportquery = "select  Sites.SiteID,Sites.AccountNum,Hazards.Meter from sites";
        exportreportquery = exportreportquery + " inner join hazards on Sites.SiteID=Hazards.SiteID inner join Companies on Companies.CompanyID=Sites.ClientID";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(exportreportquery)
        }).then(result => {
          let exportreport = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(exportreport);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  //kbs
  app.post(appConstants.REPORTS_EXPORT_CREATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var formdata = req.body["formdata"];
        var tablename = formdata.tablename;
        var exportname = formdata.ExportName;

        var selectedfields = req.body["exportdata"];

        var DateStamp = new Date();
        var LastUpdate = new Date();
        exportcreatequery = "INSERT INTO [dbo].[Exports]([ExportName],[ExportType],[Definition],[DefinitionCondition]) ";
        exportcreatequery = exportcreatequery + " VALUES('" + exportname + "',0, '" + selectedfields.definition + "', '" + selectedfields.definitionCondition + "')"
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(exportcreatequery)
        }).then(result => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json('Created');
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  //KBS
  app.get(appConstants.REPORTS_TABLEFIELDS_SEARCH, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var fieldsdata = req.body["filter"];
        var tablename = req.params.id;
        fieldsearchsquery = "select TableName+'.'+FieldName as Name from fields where TableName ='" + tablename + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(fieldsearchsquery)
        }).then(result => {
          let fields = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(fields);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  //KBS
  app.get(appConstants.REPORTS_TABLEFIELDS_EDIT_SEARCH, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var tablename = req.params.tablename;
        fieldsearchsquery = "select * from fields where ";
        //if(!!exportname)
        {
          fieldsearchsquery = fieldsearchsquery + "TableName='" + tablename + "'";
        }
        //res.send(fieldsearchsquery);
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(fieldsearchsquery)
        }).then(result => {
          let fields = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(fields);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.REPORTS_EXPORT_GET_CONDITION_BYID, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var exportId = req.params.id;

        exportdetailsByid = "select * from exports where ";
        exportdetailsByid = exportdetailsByid + "ExportID='" + exportId + "'";

        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(exportdetailsByid)
        }).then(result => {
          let fields = result.recordset;
          var ids = [];
          let values = fields[0].DefinitionCondition.split(",");;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(values);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.REPORTS_EXPORT_EDIT_BYID, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var exportId = req.params.id;

        exportdetailsByid = "select * from exports where ";
        exportdetailsByid = exportdetailsByid + "ExportID='" + exportId + "'";

        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(exportdetailsByid)
        }).then(result => {
          let fields = result.recordset;
          var ids = [];
          let values = fields[0].Definition.split(",");;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(values);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });


  app.delete(appConstants.REPORTS_EXPORT_DELETE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var exportId = req.params.id;
        exportdeleteByid = "Delete from exports where ExportID=" + exportId;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(exportdeleteByid)
        }).then(result => {
          let fields = result.rowsAffected;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(fields);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.REPORTS_EXPORT_UPDATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var exportdata = req.body["data"];
        var definition = exportdata.definition;
        var definitionCondition = exportdata.definitionCondition;

        var exportId = req.params.id;
        exportupdatequery = "update Exports set Definition= '" + definition + "' , DefinitionCondition= '" + definitionCondition + "'";
        //if(!!exportId)
        {
          exportupdatequery = exportupdatequery + " where ExportID='" + exportId + "'";
        }

        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(exportupdatequery)
        }).then(result => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json('updated');
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.GET_MONTH_COUNT, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('userid', sql.VarChar, req.params.userid);
          request.execute('sp_GetDateDetails').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.recordset;
            res.status(200).json(datasets);

          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });


  app.post(appConstants.GET_DAY_COUNT, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var exportdata = req.body["data"];

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('name', sql.VarChar(50), exportdata.name);
          request.input('date', sql.Date, exportdata.date);
          request.input('userid', sql.VarChar(255), exportdata.userid);
          request.execute('sp_GetCalendarDataType').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.recordset;
            res.status(200).json(datasets);

          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });

  app.get(appConstants.EXPORT_TABLE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('exportID', sql.Int, req.params.id);

          request.execute('sp_ExportTables').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.recordset
            res.status(200).json(datasets);
            sql.close();
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
