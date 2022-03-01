var sql = require('mssql');
var constringFile = require('../../src/urlconstants');
var dbConfig = constringFile.dbConfig;

  exports.hazard_detail=function(req,res,next){
      //res.send("Hazard Details");
    hazarddetailQuery="  select siteId , hazid as hazardid, '' as category, priority as priority, '' as servclass , '' as protection , '' as testmonhts , '' as seasonal , '' as heattype, meter as meter, linesize as linesize, '' as linestatus, '' as tap , link as link1 , '' as device , location as location , '' as meterlocation, recommend as recommendations, '' as notes1, status as devicestatus , serialnum as serial, mfg as manufacturer , model as model, hazardtype as type , linesize as size, '' as location1 , '' as location2, '' as leadfree, Orientation as Orient, '' as Recommendation, '' as notes2, InstalledDate as installdueate, InstalledDate as installed, RemovedDate as removereplacedate, '' as replaceddate, Noticesent1 as notice1, Noticesent2 as notice2, Noticesent3 as notice3, Noticesent4 as notice4, '' as lastdate, lastletter as lastletter, '' as link2, linkcode as linkcode, UDH10 as udh10, shutoffdate as shutoffdate from hazards where HazId=" + req.params.id;
    new sql.ConnectionPool(dbConfig).connect().then(pool => {
    return pool.request().query(hazarddetailQuery)
    }).then(result => {
      let hazard = result.recordset;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(hazard);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err})
      sql.close();
    });
  }
  exports.hazard_create_post = function(req, res, next) {
    var hazarddata = req.body["data"];
  //res.send(hazarddata);
    var siteId = hazarddata.siteId;
    var categoty = hazarddata.categoty;
    var priority = hazarddata.priority;
    var servclass = hazarddata.servclass;
    var protection = hazarddata.protection;
    var testmonhts = hazarddata.testmonhts;
    var seasonal = hazarddata.seasonal;
    var heattype = hazarddata.heattype;

    var meter = hazarddata.meter;
    var linesize = hazarddata.linesize;
    var linestatus = hazarddata.linestatus;
    var tap = hazarddata.tap;
    var link = hazarddata.link;
    var device = hazarddata.device;

    var devicestatus = hazarddata.devicestatus;
    if(devicestatus==null || devicestatus=='')
    {
      devicestatus='Active';
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
    var installeddate=hazarddata.installeddate;
    if(installeddate==null || installeddate=='')
    {
      installeddate= new Date();
    }
   // res.send(installeddate);
    
  var conn = new sql.ConnectionPool(dbConfig);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('siteId', sql.Int, siteId);
    request.input('categoty', sql.VarChar(30),  categoty);
    request.input('priority', sql.VarChar(30), priority);
    request.input('servclass', sql.VarChar(30), servclass);
    request.input('protection', sql.VarChar(30), protection);
    request.input('testmonhts', sql.VarChar(30), testmonhts);
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
    request.input('recommendations', sql.VarChar(30), recommendations);
    request.input('notes', sql.VarChar(30), notes);
    request.input('installeddate', sql.DateTime, installeddate);

    request.execute('sp_CreateHazard').then(function(err, recordsets, returnValue, affected) {
      res.send('Created Hazard');
      console.dir(err);
    }).catch(function(err) {
      console.log(err);
    });
  });
    res.send('Hazard Updated');
  };

  exports.hazard_update_post = function(req, res, next) {

    var hazarddata = req.body["data"];
    var siteId= hazarddata.siteId;
    var  hazardid= hazarddata.hazardid;
    var  category= hazarddata.category;
    var  priority= hazarddata.priority;
    var  servclass= hazarddata.servclass;
    var  protection= hazarddata.protection;
    var  testmonhts= hazarddata.testmonhts;
    var  seasonal= hazarddata.seasonal;
    var  heattype= hazarddata.heattype;
    var  meter= hazarddata.meter;
    var  linesize= hazarddata.linesize;
    var  linestatus= hazarddata.linestatus;
    var  tap= hazarddata.tap;
    var  link1= hazarddata.link1;
    var  device= hazarddata.device;
    var  location= hazarddata.location;
    var  meterlocation= hazarddata.meterlocation;
    var  recommendations= hazarddata.recommendations;
    var  notes1= hazarddata.notes1;
    var  devicestatus= hazarddata.devicestatus;
    var  serial= hazarddata.serial;
    var  manufacturer= hazarddata.manufacturer;
    var  model= hazarddata.model;
    var  type= hazarddata.type;
    var  size= hazarddata.size;
    var  location1= hazarddata.location1;
    var  location2= hazarddata.location2;
    var  leadfree= hazarddata.leadfree;
    var  orient= hazarddata.Orient;
    var  recommendation= hazarddata.Recommendation;
    var  notes2= hazarddata.note2;
    var  installdueate= hazarddata.installdueate;
    var  installed= hazarddata.installed;
    var  removereplacedate= hazarddata.removereplacedate;
    var  replaceddate= hazarddata.replaceddate;
    var  notice1= hazarddata.notice1;
    var  notice2= hazarddata.notice2;
    var  notice3  = hazarddata.notice3;
    var  notice4  = hazarddata.notice4;
    var  lastdate  = hazarddata.lastdate;
    var  lastletter  = hazarddata.lastletter;
    var  link2  = hazarddata.link2;
    var  linkcode  = hazarddata.linkcode;
    var  udh10  = hazarddata.udh10;
    var  shutoffdate  = hazarddata.shutoffdate;
    
  var conn = new sql.ConnectionPool(dbConfig);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('siteId', sql.Int, siteId);
request.input('hazardid', sql.Int, hazardid);
// request.input('categoty', sql.VarChar(30), categoty);
request.input('priority', sql.VarChar(30), priority);
request.input('servclass', sql.VarChar(30), servclass);
request.input('protection', sql.VarChar(30), protection);
request.input('testmonhts', sql.VarChar(30), testmonhts);
request.input('seasonal', sql.VarChar(30), seasonal);
request.input('heattype', sql.VarChar(30), heattype);
request.input('meter', sql.VarChar(30), meter);
request.input('linesize', sql.VarChar(30), linesize);
request.input('linestatus', sql.VarChar(30), linestatus);
request.input('tap', sql.VarChar(30), tap);
request.input('link1', sql.VarChar(30), link1);
request.input('device', sql.VarChar(30), device);
request.input('location', sql.VarChar(30), location);
request.input('meterlocation', sql.VarChar(30), meterlocation);
request.input('recommendations', sql.VarChar(30), recommendations);
request.input('notes1', sql.VarChar(30), notes1);
request.input('devicestatus', sql.VarChar(30), devicestatus);
request.input('serial', sql.VarChar(30), serial);
request.input('manufacturer', sql.VarChar(30), manufacturer);
request.input('model', sql.VarChar(30), model);
request.input('type', sql.VarChar(30), type);
request.input('size', sql.VarChar(30), size);
request.input('location1', sql.VarChar(30), location1);
request.input('location2', sql.VarChar(30), location2);
request.input('leadfree', sql.VarChar(30), leadfree);
//request.input('Orient', sql.VarChar(30), Orient);
//request.input('Recommendation', sql.VarChar(30), Recommendation);
request.input('notes2', sql.VarChar(30), "");
request.input('installdueate', sql.VarChar(30), installdueate);
request.input('installed', sql.VarChar(30), installed);
request.input('removereplacedate', sql.VarChar(30), removereplacedate);
request.input('replaceddate', sql.VarChar(30), replaceddate);
request.input('notice1', sql.VarChar(30), notice1);
request.input('notice2', sql.VarChar(30), notice2);
request.input('notice3', sql.VarChar(30), notice3);
request.input('notice4', sql.VarChar(30), notice4);
request.input('lastdate', sql.VarChar(30), lastdate);
request.input('lastletter', sql.VarChar(30), lastletter);
request.input('link2', sql.VarChar(30), "");
request.input('linkcode', sql.VarChar(30), linkcode);
request.input('udh10', sql.VarChar(30), udh10);
request.input('shutoffdate', sql.VarChar(30), shutoffdate);

    request.execute('sp_updateHazard').then(function(err, recordsets, returnValue, affected) {
      res.send('Hazard Updated');
      console.dir(err);
    }).catch(function(err) {
      console.log(err);
    });
  });
    res.send('Hazard Updated');
  };