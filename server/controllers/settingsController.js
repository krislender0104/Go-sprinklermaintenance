var sql = require('mssql');
var jwt = require('jsonwebtoken');

module.exports = function (app, express, dbConfig, config, appConstants) {
  app.get(appConstants.SETTINGS_TABLES_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        tablequery = "select distinct(TableName) as tablename from fields order by tablename asc";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(tablequery)
        }).then(result => {
          let tables = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(tables);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.SETTINGS_TABLEFIELDS_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        fieldsquery = "select * from fields";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(fieldsquery)
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

  app.get(appConstants.SETTINGS_MAILMERGE_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        fieldsquery = "select * from mailmerge";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(fieldsquery)
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


  app.delete(appConstants.SETTINGS_MAILMERGE_DELETE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var code = req.params.Ncode;
        fieldsquery = "delete from mailmerge where Ncode='" + code + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(fieldsquery)
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

  app.get(appConstants.SETTINGS_MAILMERGE_GETBYID, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var code = req.params.Ncode;
        fieldsquery = "select * from mailmerge where Ncode='" + code + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(fieldsquery)
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

  app.post(appConstants.SETTINGS_MAILMERGE_UPDATEBYID, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var fieldsdata = req.body["data"];
        var Ncode = fieldsdata.Ncode;
        var LetterType = fieldsdata.LetterType;
        if (LetterType == null) { LetterType = '' }
        var SystemName = fieldsdata.SystemName;
        if (SystemName == null) { SystemName = '' }
        var SystemAbbreviation = fieldsdata.SystemAbbreviation;
        if (SystemAbbreviation == null) { SystemAbbreviation = '' }
        var ImageAlt = fieldsdata.ImageAlt;
        if (ImageAlt == null) { ImageAlt = '' }
        var SystemState = fieldsdata.SystemState;
        if (SystemState == null) { SystemState = '' }
        var ExpectedMailDate = fieldsdata.ExpectedMailDate;
        if (ExpectedMailDate == null) { ExpectedMailDate = '' }
        var ShutoffThreatDate = fieldsdata.ShutoffThreatDate;
        if (ShutoffThreatDate == null) { ShutoffThreatDate = '' }
        mailmergequery = "Update Mailmerge set LetterType='" + LetterType + "', SystemName='" + SystemName + "', SystemAbbreviation='" + SystemAbbreviation + "', ImageAlt='" + ImageAlt + "', SystemState='" + SystemState + "', ExpectedMailDate='" + ExpectedMailDate + "', ShutoffThreatDate='" + ShutoffThreatDate + "' where Ncode='" + Ncode + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(mailmergequery)
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

  app.post(appConstants.SETTINGS_MAILMERGE_CREATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var fieldsdata = req.body["data"];
        var Ncode = fieldsdata.Ncode;
        var LetterType = fieldsdata.LetterType;
        if (LetterType == null) { LetterType = '' }
        var SystemName = fieldsdata.SystemName;
        if (SystemName == null) { SystemName = '' }
        var SystemAbbreviation = fieldsdata.SystemAbbreviation;
        if (SystemAbbreviation == null) { SystemAbbreviation = '' }
        var ImageAlt = fieldsdata.ImageAlt;
        if (ImageAlt == null) { ImageAlt = '' }
        var SystemState = fieldsdata.SystemState;
        if (SystemState == null) { SystemState = '' }
        var ExpectedMailDate = fieldsdata.ExpectedMailDate;
        if (ExpectedMailDate == null) { ExpectedMailDate = '' }
        var ShutoffThreatDate = fieldsdata.ShutoffThreatDate;
        if (ShutoffThreatDate == null) { ShutoffThreatDate = '' }
        mailmergequery = "Insert into Mailmerge values ('" + Ncode + "', '" + LetterType + "','" + SystemName + "','" + SystemAbbreviation + "','" + ImageAlt + "','" + SystemState + "','" + ExpectedMailDate + "','" + ShutoffThreatDate + "')";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(mailmergequery)
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

  app.post(appConstants.SETTINGS_TABLEFIELDS_SEARCH, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var fieldsdata = req.body["filter"];
        var tablename = fieldsdata.tablename;
        var fieldname = fieldsdata.fieldname;
        fieldsearchsquery = "select  * from fields where Tablename='" + tablename + "'";
        if (!!fieldname) {
          fieldsearchsquery = fieldsearchsquery + " and FieldName='" + fieldname + "'";
        }
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

  app.post(appConstants.SETTINGS_TABLEFIELDS_UPDATE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var fieldsdata = req.body["data"];
        fieldsdata.forEach(field => {
          var TableName = field.TableName;
          var FieldName = field.FieldName;
          var DefaultCaption = field.DefaultCaption;
          var Caption = field.Caption;
          var DefaultValue = field.DefaultValue;
          var Disable = field.Disable;
          var Required = field.Required;
          var DisplayOrder = field.DisplayOrder;
          var conn = new sql.ConnectionPool(config);
          conn.connect().then(function (conn) {
            var requestRol = new sql.Request(conn);
            requestRol.input('TableName', sql.VarChar(20), TableName);
            requestRol.input('FieldName', sql.VarChar(20), FieldName);
            requestRol.input('DefaultCaption', sql.VarChar(15), DefaultCaption);
            requestRol.input('Caption', sql.VarChar(20), Caption);
            requestRol.input('DefaultValue', sql.VarChar(50), DefaultValue);
            requestRol.input('Disable', sql.Bit, Disable);
            requestRol.input('Required', sql.Bit, Required);
            requestRol.input('DisplayOrder', sql.Int, DisplayOrder);
            requestRol.execute('sp_UpdateFields').then(function (errRol, recordsetsRol, returnValueRol, affectedRol) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.status(200).json('field updated');
                sql.close();
              }).catch(function (err) {
                res.status(500).send({ message: err })
                sql.close();
              });
          });
        });
      }
    });
  });

  app.get(appConstants.SETTINGS_FIELDS_BYTABLENAME, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var tablename = req.params.tablename;
        fieldsearchsquery = "select  * from fields where Tablename='" + tablename + "'";
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
