var sql = require('mssql');

var constringFile = require('../../src/urlconstants');
var dbConfig = constringFile.dbConfig;

  exports.filter_sites_list = function(req, res, next) {
    var sitedata = req.body["filter"];
    var companyId = sitedata.datasetId;
    var siteId = sitedata.siteId;
    sitesQuery="select  SiteId,SiteType,Company,Address,clientID as PremiseID from sites where ";
   
    sitesfilterQuery="";
  if(!!companyId)
  {
    //res.send("companyID");  
    sitesfilterQuery=sitesQuery+" clientId ="+companyId ;
  }
  if(!!siteId)
  {
    if(!!companyId)
    {
      sitesfilterQuery=sitesfilterQuery+" and ";
    }
    sitesfilterQuery=sitesfilterQuery+" SiteID="+siteId ;
  }

  sitesQuery=sitesfilterQuery;
  //res.send(sitesQuery);
  new sql.ConnectionPool(dbConfig).connect().then(pool => {
    return pool.request().query(sitesQuery)
    }).then(result => {
      let sites = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(sites);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err})
      sql.close();
    });
  };
exports.sites_list = function(req, res, next) {
 
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
     console.log('/sites get');
      // connect to your database
      sitesQuery="select top 20 SiteId,SiteType,Company,Address,clientID as PremiseID from sites";

new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(sitesQuery)
  }).then(result => {
    let sites = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(sites);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });
};
exports.sites_search = function(req, res, next) {
 
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  
     console.log('/sites get');
      // connect to your database
      sitesQuery="select top 20 SiteId as ClientId,Company as ClientName from sites where   DATALENGTH(Company) > 0  and   address like '%"+req.params.id+"%'";

new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(sitesQuery)
  }).then(result => {
    let sites = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(sites);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });
};

// Display detail page for a specific sites
exports.sites_detail = function(req, res, next) {
    // connect to your database
    sitesdetailQuery="select  siteid,sitetype,siteuse,contact,company,address,clientid as  PremiseID,city ,state ,zip,phone,email from sites where SiteId=" + req.params.id;
new sql.ConnectionPool(dbConfig).connect().then(pool => {
return pool.request().query(sitesdetailQuery)
}).then(result => {
  let sites = result.recordset;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(sites);
  sql.close();
}).catch(err => {
  res.status(500).send({ message: err})
  sql.close();
});
};

//Sites Hazards List
exports.sites_hazrdslist = function(req, res, next) {
    // connect to your database
    sitehazardsQuery="select HazID as HazardID,SerialNum as SerialNo,CONVERT(VARCHAR(10), InstalledDate, 101) as InstalledDate,status as DeviceStatus from Hazards where siteId=" + req.params.id;
new sql.ConnectionPool(dbConfig).connect().then(pool => {
return pool.request().query(sitehazardsQuery)
}).then(result => {
  let sites = result.recordset;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(sites);
  sql.close();
}).catch(err => {
  res.status(500).send({ message: err})
  sql.close();
});
};

exports.sites_hazards_testslist = function(req, res, next) {
  // connect to your database
sitehaztestQuery="select distinct(dt.testId) as TestID,d.clientId,s.siteId,h.HazId,t.testerId as TesterID,CONVERT(VARCHAR(10), h.InstalledDate, 101) as InstalledDate,h.status as TestStatus from dataset d inner join sites s on s.clientId=d.clientid inner join hazards h on h.siteId=s.siteId inner join devtests dt on dt.hazId=h.hazid inner join TesterDataSet td on td.datasetId=d.clientid inner join technicians t on t.testerid=td.testerid where s.siteId=" + req.params.id+"  and dt.itestbyID=t.testerID order by dt.testId";
new sql.ConnectionPool(dbConfig).connect().then(pool => {
return pool.request().query(sitehaztestQuery)
}).then(result => {
let tests = result.recordset;
res.setHeader('Access-Control-Allow-Origin', '*');
res.status(200).json(tests);
sql.close();
}).catch(err => {
res.status(500).send({ message: err})
sql.close();
});
};
var mongoose = require('mongoose');

var SiteSchema = new mongoose.Schema({
 sites:[{
   siteId:String,
      hazards:[{
          HazardId: String,
                tests:[{testId: String}]
          }]
 }]
});
var PUser = mongoose.model('PowerUsers', SiteSchema);

function groupBy(key, array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var added = false;
    for (var j = 0; j < result.length; j++) {
      if (result[j][key] == array[i][key]) {
        result[j].items.push(array[i]);
        added = true;
        break;
      }
    }
    if (!added) {
      var entry = {items: []};
      entry[key] = array[i][key];
      entry.items.push(array[i]);
      result.push(entry);
    }
  }
  return result;
}
var groupArray = require('group-array');
const groupBy1 = require('group-object-array');

exports.sites_tree_list = function(req, res, next) {
  // connect to your database
 sitestreequery="select d.clientId,s.siteId,s.address +''+ s.address2 as address ,(select company from companies where companyid=d.clientid) as companyname,s.company sitename,h.HazId,t.testerId as TesterID, (dt.testId) as TestID, CONVERT(VARCHAR(10), h.InstalledDate, 101) as InstalledDate,h.status as TestStatus from dataset d inner join sites s on s.clientId=d.clientid inner join hazards h on h.siteId=s.siteId inner join devtests dt on dt.hazId=h.hazid inner join TesterDataSet td on td.datasetId=d.clientid inner join technicians t on t.testerid=td.testerid where d.ClientID=" + req.params.id+"  and dt.itestbyID=t.testerID order by dt.testId";
 //sqlproc="call TestProcedure";
new sql.ConnectionPool(dbConfig).connect().then(pool => {
return pool.request().query(sitestreequery)
}).then(result => {

  let sitestree = result.recordset;

res.setHeader('Access-Control-Allow-Origin', '*');
var arr = sitestree;
//var test1=groupArray(arr, 'siteId','HazId','TestID');
//var test1=groupArray(arr, 'companyname',"address","TestId");
//var test1=groupBy1(arr,['companyname',"address","HazId","TestID"]);
var test1=groupBy1(arr,'companyname','address','HazId','TestID','InstalledDate');
//schema.add(test);
res.status(200).json(test1);
//test.
//res.status(200).json(test);
sql.close();
}).catch(err => {
res.status(500).send({ message: err})
sql.close();
});
};

// Display sites create form on GET
exports.sites_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: sites create GET');
};

// Handle sites create on POST
exports.sites_create_post = function(req, res, next) {

  var sitedata = req.body["data"];
  
  var companyId = sitedata.clientId;
  var company = sitedata.company;
  var siteType = sitedata.sitetype;
  var siteUse = sitedata.siteuse;
  var address = sitedata.address;
  var address2 = sitedata.address2;
  var city = sitedata.city;
  var state = sitedata.state;
  var postalcode = sitedata.zip;
  var contact = sitedata.contact;
  var phonenumber = sitedata.phone;
  var email = sitedata.email;
  
  //res.send(sitedata);
var conn = new sql.ConnectionPool(dbConfig);
conn.connect().then(function(conn) {
  var request = new sql.Request(conn);
  request.input('clientId', sql.Int, 3);
  request.input('company', sql.VarChar(30), company);
  request.input('contact', sql.VarChar(30), contact);
  request.input('siteuse', sql.VarChar(30), siteUse);
  request.input('sitetype', sql.VarChar(30), siteType);
  request.input('address', sql.VarChar(50), address);
  request.input('address2', sql.VarChar(50), address2);
  request.input('city', sql.VarChar(35), city);
  request.input('state', sql.VarChar(10), state);
  request.input('zip', sql.VarChar(10), postalcode);
  request.input('phone', sql.VarChar(30), phonenumber);
  request.input('email', sql.VarChar(30), email);
  //request.output('siteid', sql.int);

  request.execute('sp_CreateSite').then(function(result, err, recordsets,recordset, returnValue, affected) {
    //res.send(recordset);
    let sites =result.recordset;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(sites);
  sql.close();
    console.dir(err);
  }).catch(function(err) {
    console.log(err);
  });
});

};

// Display sites delete form on GET
exports.sites_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: companies delete GET');
};

// Handle sites delete on POST
exports.companies_delete_post = function(req, res, next) {
   //
};

// Display sites update form on GET
exports.sites_update_get = function(req, res, next) {
   
    updateSites(req, res, next);
    res.send('site updated');
};

var updateSites = function(req, res, next) {
  
 var sitedata=req.body["data"];
    var companyId = sitedata.clientId;
    var siteId = sitedata.siteId;
    var company = sitedata.company;
    var siteType = sitedata.sitetype;
    var siteUse = sitedata.siteuse;
    var address = sitedata.address;
    var address2 = sitedata.address2;
    var city = sitedata.city;
    var state = sitedata.state;
    var postalcode = sitedata.zip;
    var phonenumber = sitedata.phone;
    var email = sitedata.email;
    var contact = sitedata.contact;
    
    
  var conn = new sql.ConnectionPool(dbConfig);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('siteId', sql.Int, siteId);
    request.input('clientId', sql.Int, companyId);
    request.input('company', sql.VarChar(30), company);
    request.input('sitetype', sql.VarChar(30), siteType);
    request.input('address', sql.VarChar(50), address);
    request.input('address2', sql.VarChar(50), address2);
    request.input('city', sql.VarChar(35), city);
    request.input('state', sql.VarChar(10), state);
    request.input('zip', sql.VarChar(10), postalcode);
    request.input('phone', sql.VarChar(30), phonenumber);
    request.input('email', sql.VarChar(30), email);
    request.input('siteuse', sql.VarChar(30), siteUse);
    request.input('contact', sql.VarChar(30), contact);
    
    request.execute('sp_updateSite').then(function(err, recordsets, returnValue, affected) {
      //console.dir(recordsets);
      res.send(returnValue);
      console.dir(err);
    }).catch(function(err) {
      console.log(err);
    });
  });
}

// Handle sites update on POST
exports.sites_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: sites update POST');
};
var passwordHash = require('password-hash');
//var passwordHashver = require('./lib/password-hash');

var sha1 = require('sha1');

// Handle sites update on POST
exports.user_login_post = function(req, res, next) {
//  res.send("Login User");
   var userdata = req.body["data"];

   var userid = userdata.email;
   var pwd = userdata.password;
//res.send(req.body);
//var hashedPassword = passwordHash.generate(pwd);
var hashedPassword = sha1(pwd);
//console.log(passwordHashver.verify('password123', hashedPassword)); // true
 console.log('password--------------', hashedPassword);
 var logquery="select * from users where username='"+userid+"' and upassword='"+hashedPassword+"'";
  //res.send(logquery);
  new sql.ConnectionPool(dbConfig).connect().then(pool => {
    return pool.request().query(logquery)
    }).then(result => {
      let user = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(user);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err})
      sql.close();
    });
};


function sqlCall(query, cb) {
  sql.close();
  sql.connect(dbConfig,function (err) {
    if (typeof err !== "undefined" && err !== null) {
      cb( err );
      return
    }

   var request = new sql.Request();// or: var request = connection.request();
    request.query(query, function(err, recordset) {
     var newJson=recordset.recordsets[0];
      cb( err, newJson );
    });

  });

}

