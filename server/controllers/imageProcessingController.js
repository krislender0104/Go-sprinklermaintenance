var sql = require('mssql');
var multer = require('multer')
var fs = require('fs');
var jwt = require('jsonwebtoken');
// var storage = multer.diskStorage({
// 	destination: function(req, file, callback) {
// 		callback(null, './uploads')
// 	},
// 	filename: function(req, file, callback) {
// 		console.log(file)
// 		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
// 	}
// })

var upload = multer();//= multer({ dest:  './server/pictures/012345'})
module.exports = function(app, express, dbConfig, config, appConstants){
  // var fs = require('fs');
  //  var type = multer().single('file');

  // var storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, './server/pictures/ka200')
  //   },
  //   filename: function (req, file, cb) {
  //     console.log('-------');
  //     console.log(req);
  //     cb(null, file.fieldname +'_' + Date.now()+'.jpg')
  //   }
  // });
  var multerUpload = multer({ dest: './server/pictures/ka200',  });
  // var multerUpload = multer({});

  app.post(appConstants.STORE_TESTER_IMAGE, multerUpload.single('file'), ensuretoken,function (req, res, next) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
    //upload = multer({ dest:  './server/pictures/'+testerId})
    var testId = req.body['testId'];
    var testerId = req.body['testerId'];
    var name  = req.file.filename;
    var dir = './server/pictures/'+testId;
    var originalFileName = req.file.filename;
    var file = req.file;
    multerUpload= multer({ dest: dir })
    var storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, dir)
      },
      filename: (req, file, cb) => {
        cb(null, file.fieldname +'_' + Date.now()+'.jpg')

      }

    });
    var imageAddQuery = "insert into TesterImage ( TestId, TesterID, ImageName) values ('"+ testId +"',"+ testerId +",'"+ name+"')";
    console.log(imageAddQuery);
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(imageAddQuery)
    }).then(result => {
      let addresses = "success done!";
      res.setHeader('Access-Control-Allow-Origin', '*');
    //res.status(200).json('success');
      res.status(200).json(addresses);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
    });
  }
});
});


app.post(appConstants.DELETE_TESTER_IMAGE,ensuretoken,function (req, res) {
  jwt.verify(req.token, 'Secretkey', function (err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
  var imageSelector = "delete from TesterImage where TestId = "+ req.body.testId + "and ImageName = '" + req.body.imageName +"'";
  console.log("req.testId===>", req.body.testId)
  console.log("req.testId===>", req.body.imageName)
  //var imageAddQuery = "delete from TesterImage where TestId  ( TestId, TesterID, ImageName) values ('"+ testId +"',"+ testerId +",'"+ name+"')";

  new sql.ConnectionPool(config).connect().then(pool => {
    return pool.request().query(imageSelector)
  }).then(result => {
    let addresses = "success done!";
    res.setHeader('Access-Control-Allow-Origin', '*');
  //res.status(200).json('success');
    res.status(200).json(addresses);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err })
    sql.close();
  });
    }
  });
});

app.get(appConstants.GET_TESTER_IMAGE,ensuretoken, function(req, res){
  //console.log(req.params.testId)
  jwt.verify(req.token, 'Secretkey', function (err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
  var getimageDetails = "select Imagename from TesterImage where TestId='" +req.params.testId+"'"; //"select Imagename from TesterImage where TestId='" +req.params.teserId+"'";
  new sql.ConnectionPool(config).connect().then(pool => {
    return pool.request().query(getimageDetails)
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

  app.post(appConstants.STORE_TESTER_IMAGE1,ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var img = req.body.testdot;
        var ext = img.split(';')[0].match(/jpeg|png|gif/)[0];
        var data = img.replace(/^data:image\/\w+;base64,/, "");
        var buf = Buffer.from(data, 'base64');
        //var buf = new Buffer(data, 'base64');
        var name = 'image_' + Date.now();
        fs.writeFileSync('./server/pictures/ka200/' + name, buf, function (err) {
          console.log('File created');
        });
        var testId = req.body['testId'];
        var testerId = req.body['testerId'];
        var imageAddQuery = "insert into TesterImage ( TestId, TesterID, ImageName) values ('" + testId + "'," + testerId + ",'" + name + "')";
        console.log(imageAddQuery);
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(imageAddQuery)
        }).then(result => {
          let addresses = "success done!";
          res.setHeader('Access-Control-Allow-Origin', '*');
          //res.status(200).json('success');
          res.status(200).json(addresses);
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

