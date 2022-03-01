var sql = require('mssql');
var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
module.exports = function (app, express, dbConfig, config, appConstants) {



  app.get(appConstants.LETTER_GET_NOTICETEMPLATE,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    noticetemplate = "SELECT [RowNum],[NoticeName],[Header],[Body],[Updated]  FROM [dbo].[NoticeTemplatesNew] order by Updated desc";
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(noticetemplate)
    }).then(result => {
      let lstnotice = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(lstnotice);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
    });
  }
});
  });

  app.post(appConstants.LETTER_EDIT_NOTICETEMPLATE,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    var noticedata = req.body["data"];
    var noticeName = noticedata.NoticeName;
    var header = noticedata.Header;
    var body = noticedata.Body;
    var rowNum = noticedata.RowNum;
    var isCreate = noticedata.IsCreate;
    var selectedDefinition=noticedata.SelectedDefinition;
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function (conn) {
      var request = new sql.Request(conn);
      request.input('noticeName', sql.VarChar(100), noticeName);
      request.input('header', sql.VarChar(8000), header);
      request.input('selectedDefinition', sql.VarChar(8000), selectedDefinition);
      request.input('body', sql.VarChar(sql.MAX), body);
      request.input('rowNum', sql.Int, rowNum);
      request.input('isCreate', sql.Bit, isCreate);

      request.execute('sp_EditNoticeTemplate').then(function (err, recordsets, returnValue, affected) {
        res.send(returnValue);
      }).catch(function (err) {
        res.status(500).send({ message: err })
        sql.close();
      });
    });
  }
});
  });

  app.post(appConstants.NOTICE_CREATE_EDIT,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    var data = req.body["data"];
    data.forEach(noticedata => {


    var ClientID = noticedata.ClientID;
    var Type = noticedata.Type;
    var Days = noticedata.Days;

    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function (conn) {
      var request = new sql.Request(conn);
      request.input('clientID', sql.Int, ClientID);
      request.input('type', sql.VarChar(10), Type);
      request.input('days', sql.Int, Days);
      request.execute('sp_createNoticeDays').then(function (err, recordsets, returnValue, affected) {
        res.send(returnValue);
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

  app.get(appConstants.GET_NOTICE_DAYS,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    noticeDays= "select ClientID,Type NoticeType,Days from NoticeDays where ClientID ="+ req.params.clientID;
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(noticeDays)
    }).then(result => {
      let lstnotice = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(lstnotice);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
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
};

