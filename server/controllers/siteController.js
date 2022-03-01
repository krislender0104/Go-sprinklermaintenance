var sql = require('mssql');
var sha1 = require('sha1');
var jwt = require('jsonwebtoken');
var async = require('async');
module.exports = function (app, express, dbConfig, config, appConstants) {

  app.post(appConstants.SITE_FILTER_SITE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var sitedata = req.body["filter"];
        var companyId = sitedata.datasetId;
        var siteId = sitedata.siteId;
        var sitesQuery = "select top 1000  AccountNum,SiteId,SiteType,Company,Address,(select count(*) from hazards where hazards.siteid=sites.siteid) as Hazardcount  from sites where ";

        sitesfilterQuery = "";

        if (companyId != null) {
          if (companyId == 0) {
            sitesfilterQuery = sitesQuery + " 0 =" + companyId;
          }
          else {
            sitesfilterQuery = sitesQuery + " clientId =" + companyId;
          }

        }
        if (!!siteId) {
          if (!!companyId) {
            sitesfilterQuery = sitesfilterQuery + " and ";
          }
          sitesfilterQuery = sitesfilterQuery + " AccountNum='" + siteId + "'";
        }

        sitesQuery = sitesfilterQuery;
        //res.send(sitesQuery);
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sitesQuery)
        }).then(result => {
          let sites = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(sites);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });


  app.get(appConstants.SITE_SITES_DETAIL, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        // connect to your database
        sitesdetailQuery = "select  siteid, AccountNum, sitetype,siteuse,contact,company,address,clientid as  PremiseID,city ,state ,zip,phone,email,Latitude,Longitude from sites where SiteId=" + req.params.id;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sitesdetailQuery)
        }).then(result => {
          let sites = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(sites);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.delete(appConstants.SITE_SITES_DELETE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('siteId', sql.Int, req.params.id);
          request.execute('sp_DeleteSite').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.rowsAffected;
            res.status(200).json(datasets);
          }).catch(function (err) {
            res.status(200).json(err);
          });
        });
      }
    });
  });

  app.delete(appConstants.SITE_MAIL_ADDRESS_DELETE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('AddressID', sql.Int, req.params.id);
          request.execute('sp_DeleteSiteMailAddress').then(function (err, recordsets, returnValue, affected) {
            let datasets = err.rowsAffected;
            res.status(200).json(datasets);
          }).catch(function (err) {
            res.status(200).json(err);
          });
        });
      }
    });
  });

  app.get(appConstants.SITE_SITES_MAIL_DETAIL, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        // connect to your database

        sitesdetailQuery1 = "select s.siteid,s.AddressID,s.AddressType,a.Mcontact,a.Mcompany,a.Maddress,a.Mcity ,a.Mstate ,a.Mzip,a.phone,a.email from Addresses a inner join SiteMailing s on a.AddressID=s.AddressID where s.SiteID=" + req.params.id;
        // sitesdetailQuery1 = "select s.siteid from Addresses a inner join SiteMailing s on a.AddressID=s.AddressID where s.SiteID=" + req.params.id;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sitesdetailQuery1)
        }).then(result => {
          let sitesm = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(sitesm);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.SITE_FILTER_SITEHAZARDS_POST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var sitedata = req.body["filter"];
        var companyId = sitedata.datasetId;
        var siteId = sitedata.siteId;
        var hazardId = sitedata.hazardId;
        //Params
        //CompanyName,address,accountnumber
        //HazardId,SerialNumber
        sitesQuery = "select s.AccountNum,s.SiteId,s.SiteType,s.Company,s.Address,s.clientID as PremiseID,h.HazID,h.SerialNum from sites s inner join Hazards h on s.siteId=h.siteid where";

        sitesfilterQuery = "";

        if (!!companyId) {
          sitesfilterQuery = sitesQuery + " s.clientId =" + companyId;
        }
        if (!!siteId) {
          if (!!companyId) {
            sitesfilterQuery = sitesfilterQuery + " and ";
          }
          sitesfilterQuery = sitesfilterQuery + " s.AccountNum='" + siteId + "'";
        }
        if (!!hazardId) {
          sitesfilterQuery = sitesfilterQuery + " and h.HazID='" + hazardId + "'";
        }

        sitesQuery = sitesfilterQuery;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sitesQuery)
        }).then(result => {
          let sites = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(sites);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.SITE_FILTER_SITEHAZARDTESTS_POST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var sitedata = req.body["filter"];
        var companyId = sitedata.datasetId;
        var siteId = sitedata.siteId;
        var hazardId = sitedata.hazardId;
        var testdate = sitedata.testdate;
        //Params
        //CompanyName,address,accountnumber
        //HazardId,SerialNumber
        sitesQuery = "select s.AccountNum,s.SiteId,s.SiteType,s.Company,s.Address,s.clientID as PremiseID,h.HazID,d.TestID,h.SerialNum,d.idate from sites s inner join Hazards h on s.siteId=h.siteid inner join devtests d on d.hazID=h.HazId where";

        sitesfilterQuery = "";

        if (!!companyId) {
          sitesfilterQuery = sitesQuery + " s.clientId =" + companyId;
        }
        if (!!siteId) {
          if (!!companyId) {
            sitesfilterQuery = sitesfilterQuery + " and ";
          }
          sitesfilterQuery = sitesfilterQuery + " s.AccountNum='" + siteId + "'";
        }
        if (!!hazardId) {
          sitesfilterQuery = sitesfilterQuery + " and  h.HazID='" + hazardId + "'";
        }
        if (!!testdate) {
          testdate = GetFormattedDate(testdate);

          sitesfilterQuery = sitesfilterQuery + " and  d.idate='" + testdate + "'";
        }
        sitesQuery = sitesfilterQuery;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sitesQuery)
        }).then(result => {
          let sites = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(sites);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.SITE_FILTERED_LIST_POST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var searchCriteria = req.body["criteria"];
        var sitedata = req.body["data"];
        var headers;
        var query;
        var dataSetId = sitedata.datasetId;
        switch (searchCriteria) {
          case 'ALLWithDatasetId':
            headers = ["Site ID", "Site Type", "Company Name", "Site Address", "No of Hazards"];
            query = "select top 1000 AccountNum,SiteId,SiteType,Company,Address,(select count(*) from hazards where hazards.siteid=sites.siteid) as Hazardcount  from sites where ";
            if (dataSetId !== null) {
              if (dataSetId === 0) {
                query = query + " 0 = " + dataSetId;
              } else {
                query = query + " clientId =" + dataSetId;
              }
            }
            break;
          case 'DatatsetWithAddress':
            headers = ["Site ID", "Site Type", "Company Name", "Site Address", "No of Hazards"];
            query = "select top 1000 AccountNum,SiteId,SiteType,Company,Address,(select count(*) from hazards where hazards.siteid=sites.siteid) as Hazardcount  from sites where ";
            if (dataSetId !== null) {
              if (dataSetId === 0) {
                query = query + " 0 = " + dataSetId;
              } else {
                query = query + " clientId = " + dataSetId;
              }
              if (sitedata.address !== null && sitedata.address !== '') {
                query = query + " and Address = '" + sitedata.address + "'";
              }
            }
            break;
          case 'DatasetWithSitId':
            headers = ["Site ID", "Site Type", "Company Name", "Site Address", "No of Hazards"];
            query = "select AccountNum,SiteId,SiteType,Company,Address,(select count(*) from hazards where hazards.siteid=sites.siteid) as Hazardcount  from sites where ";
            if (dataSetId !== null) {
              if (dataSetId === 0) {
                query = query + " 0 = " + dataSetId;
              } else {
                query = query + " clientId =" + dataSetId;
              }
            }
            if (sitedata.site_Id !== null && sitedata.site_Id !== '') {
              query = query + " and SiteId = '" + sitedata.site_Id + "'";
            }
            break;
          case 'DatasetWithCustomer':
            headers = ["Customer Number", "Site Type", "Company Name", "Site Address", "No of Hazards"];
            query = "select top 1000 AccountNum,SiteId,SiteType,Company,Address,(select count(*) from hazards where hazards.siteid=sites.siteid) as Hazardcount  from sites where ";
            if (dataSetId !== null) {
              if (dataSetId === 0) {
                query = query + " 0 = " + dataSetId;
              } else {
                query = query + " clientId =" + dataSetId;
              }
            }
            if (sitedata.customerNumber !== null && sitedata.customerNumber !== '') {
              query = query + " and AccountNum = '" + sitedata.customerNumber + "'";
            }
            break;
          case 'DatasetWithSerialNumber':
            headers = ["Serial No", "Hazard ID", "Company Name", "Address", "Model"];
            query = "select s.AccountNum,s.SiteId,s.Company,s.Address,h.HazID,h.SerialNum, h.Model from sites s inner join Hazards h on s.siteId=h.siteid where";
            if (dataSetId !== null) {
              if (dataSetId === 0) {
                query = query + " 0 = " + dataSetId;
              } else {
                query = query + " s.clientId =" + dataSetId;
              }
            }
            if (sitedata.serialNumber !== null && sitedata.serialNumber !== '') {
              query = query + " and h.SerialNum = '" + sitedata.serialNumber + "'";
            }
            break;
          case 'DatasetWithInitialTest':
            headers = ["Site ID", "Company Name", "Hazard ID", "iTest Date", "Test ID"];
            query = "select s.AccountNum,s.SiteId,s.Company,s.Address,h.HazID,d.TestID,d.idate from sites s inner join Hazards h on s.siteId=h.siteid inner join devtests d on d.hazID=h.HazId where";
            if (dataSetId === 0) {
              query = query + " 0 = " + dataSetId;
            } else {
              query = query + " s.clientId =" + dataSetId;
            }
            if (sitedata.hazardId !== null && sitedata.hazardId !== '') {
              query = query + " and h.HazID = " + sitedata.hazardId;
            }
            if (sitedata.hazardId !== null && sitedata.hazardId !== '') {
              query = query + " and d.idate = '" + sitedata.testdate + "'";
            }
            break;
          case 'DatasetWithFinalTest':
            headers = ["Site ID", "Company Name", "Hazard ID", "Test ID", "fTest Date"];
            query = "select s.AccountNum,s.SiteId,s.Company,s.Address,h.HazID,d.TestID,d.fdate from sites s inner join Hazards h on s.siteId=h.siteid inner join devtests d on d.hazID=h.HazId where";
            if (dataSetId === 0) {
              query = query + " 0 = " + dataSetId;
            } else {
              query = query + " s.clientId =" + dataSetId;
            }
            if (sitedata.hazardId !== null && sitedata.hazardId !== '') {
              query = query + " and h.HazID = " + sitedata.hazardId;
            }
            if (sitedata.finalTestDate !== null && sitedata.finalTestDate !== '') {
              query = query + " and d.fdate = '" + sitedata.finalTestDate + "'";
            }
            break;
          case 'DatasetWithHarzarId':
            headers = ["Customer No", "Site Type", "Company Name", "Site Address", "Hazard ID"];
            query = "select s.AccountNum,s.SiteType, s.SiteId,s.Company,s.Address,h.HazID from sites s inner join Hazards h on s.siteId=h.siteid where";
            if (dataSetId !== null) {
              if (dataSetId === 0) {
                query = query + " 0 = " + dataSetId;
              } else {
                query = query + " s.clientId =" + dataSetId;
              }
            }
            if (sitedata.hazardId !== null && sitedata.hazardId !== '') {
              query = query + " and h.HazID = " + sitedata.hazardId;
            }
            break;
          default:
            res.status(500).send("invalid criteria");
            break;
        };
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query)
        }).then(result => {
          let sites = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json({ headers: headers, siteList: sites });
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.SITE_ADDRESS_SEARCH, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var addressSearchQuery = "select distinct top 100 (Address) from Sites where Address like '%" + req.body['address'] + "%'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(addressSearchQuery)
        }).then(result => {
          let addresses = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(addresses);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.SITE_MOVEDATASET, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var movedataset = "update Sites set ClientID=" + req.body['cdatasetId'] + " where SiteID=" + req.body['csiteID'];
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(movedataset)
        }).then(result => {
          let addresses = result.rowsAffected;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(addresses);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.SITE_CREATEDATASET, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var datasetname = req.body['cname'];
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('datasetname', sql.VarChar(100), datasetname);
          request.execute('sp_CreateDataset').then(function (result, err, recordsets, recordset, returnValue, affected) {
            let addresses = result.recordset;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json(addresses);
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });
      }
    });
  });
  // let addresses = result.rowsAffected;
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.status(200).json(addresses);
  // res.status(500).send({ message: err })


  // app.post(appConstants.SITE_EXCEL_IMPORT, function (req, res) {
  //   var siteArray = req.body["data1"];
  //   console.log(req.body["data2"]);
  //   var inserted = [];
  //   var notInserted = [];
  //   queryNextItem(0);
  //   function queryNextItem(i) {
  //     if (i >= siteArray.length) {
  //       res.setHeader('Access-Control-Allow-Origin', '*');
  //       res.status(200).json({ success: inserted, error: notInserted });
  //     } else {
  //       var site = siteArray[i];
  //       var cols = Object.keys(site);
  //       var columns = '';
  //       var values = '';
  //       for (var j = 0; j < cols.length; j++) {
  //         var col = cols[j];
  //         columns += col + ",";
  //         values += "'" + site[col] + "',";
  //       }
  //       columns = columns.substr(0, columns.length - 1);
  //       values = values.substr(0, values.length - 1);
  //       var insertQuery = "insert into Sites (" + columns + ") values (" + values + ")";
  //       new sql.ConnectionPool(config).connect().then(pool => {
  //         return pool.request().query(insertQuery)
  //       }).then(result => {
  //         inserted.push(values);
  //         sql.close();
  //         queryNextItem(i + 1);
  //       }).catch(err => {
  //         notInserted.push({ values: values, error: err });
  //         sql.close();
  //         queryNextItem(i + 1);
  //       });
  //     }

  //   }
  // });

  // app.post(appConstants.SITE_EXCEL_IMPORT_OLD, function (req, res) {
  //   var siteArray = req.body["data"];
  //   console.log(siteArray);
  //   //var hazardArray = req.body["data2"];
  //   //var addressArray = req.body["data3"];
  //   var inserted = [];
  //   var notInserted = [];
  //   queryNextItem(0);
  //   function queryNextItem(i) {
  //     if (i >= siteArray.length) {
  //       res.setHeader('Access-Control-Allow-Origin', '*');
  //       res.status(200).json({ success: inserted, error: notInserted });
  //     } else {
  //       //Site Array
  //       var ClientID = siteArray[i].ClientID;
  //       if (ClientID == undefined) {
  //         ClientID = null;
  //       }
  //       var AccountNum = siteArray[i].AccountNum;
  //       if (AccountNum == undefined) {
  //         AccountNum = null;
  //       }
  //       var Contact = siteArray[i].Contact;
  //       if (Contact == undefined) {
  //         Contact = null;
  //       }
  //       var Company = siteArray[i].Company;
  //       if (Company == undefined) {
  //         Company = null;
  //       }
  //       var Address = siteArray[i].Address;
  //       if (Address == undefined) {
  //         Address = null;
  //       }
  //       var Address2 = siteArray[i].Address2;
  //       if (Address2 == undefined) {
  //         Address2 = null;
  //       }
  //       var City = siteArray[i].City;
  //       if (City == undefined) {
  //         City = null;
  //       }
  //       var State = siteArray[i].State;
  //       if (State == undefined) {
  //         State = null;
  //       }
  //       var zip = siteArray[i].zip;
  //       if (zip == undefined) {
  //         zip = null;
  //       }
  //       var Phone = siteArray[i].Phone;
  //       if (Phone == undefined) {
  //         Phone = null;
  //       }
  //       var Ext = siteArray[i].Ext;
  //       if (Ext == undefined) {
  //         Ext = null;
  //       }
  //       var Cell1 = siteArray[i].Cell1;
  //       if (Cell1 == undefined) {
  //         Cell1 = null;
  //       }
  //       var Fax = siteArray[i].Fax;
  //       if (Fax == undefined) {
  //         Fax = null;
  //       }
  //       var Email = siteArray[i].Email;
  //       if (Email == undefined) {
  //         Email = null;
  //       }
  //       var LocationID = siteArray[i].LocationID;
  //       if (LocationID == undefined) {
  //         LocationID = null;
  //       }
  //       var SiteType = siteArray[i].SiteType;
  //       if (SiteType == undefined) {
  //         SiteType = null;
  //       }
  //       var SiteUse = siteArray[i].SiteUse;
  //       if (SiteUse == undefined) {
  //         SiteUse = null;
  //       }
  //       var TestMonth = siteArray[i].TestMonth;
  //       if (TestMonth == undefined) {
  //         TestMonth = null;
  //       }
  //       var TestDay = siteArray[i].TestDay;
  //       if (TestDay == undefined) {
  //         TestDay = null;
  //       }
  //       var SurveyDue = siteArray[i].SurveyDue;
  //       if (SurveyDue == undefined) {
  //         SurveyDue = null;
  //       }else{
  //         SurveyDue=new Date(SurveyDue);
  //       }
  //       var SurveyDue2 = siteArray[i].SurveyDue2;
  //       if (SurveyDue2 == undefined) {
  //         SurveyDue2 = null;
  //       }else{
  //         SurveyDue2=new Date(SurveyDue2);
  //       }
  //       var SurveyFreq = siteArray[i].SurveyFreq;
  //       if (SurveyFreq == undefined) {
  //         SurveyFreq = null;
  //       }
  //       var CityLimits = siteArray[i].CityLimits;
  //       if (CityLimits == undefined) {
  //         CityLimits = null;
  //       }
  //       var UDF1 = siteArray[i].UDF1;
  //       if (UDF1 == undefined) {
  //         UDF1 = null;
  //       }
  //       var UDF2 = siteArray[i].UDF2;
  //       if (UDF2 == undefined) {
  //         UDF2 = null;
  //       }
  //       var UDF3 = siteArray[i].UDF3;
  //       if (UDF3 == undefined) {
  //         UDF3 = null;
  //       }
  //       var UDF4 = siteArray[i].UDF4;
  //       if (UDF4 == undefined) {
  //         UDF4 = null;
  //       }
  //       var UDF5 = siteArray[i].UDF5;
  //       if (UDF5 == undefined) {
  //         UDF5 = null;
  //       }
  //       var UDF6 = siteArray[i].UDF6;
  //       if (UDF6 == undefined) {
  //         UDF6 = null;
  //       }else{
  //         UDF6=new Date(UDF6);
  //       }
  //       var UDF7 = siteArray[i].UDF7;
  //       if (UDF7 == undefined) {
  //         UDF7 = null;
  //       }
  //       var UDF8 = siteArray[i].UDF8;
  //       if (UDF8 == undefined) {
  //         UDF8 = null;
  //       }
  //       var UDF9 = siteArray[i].UDF9;
  //       if (UDF9 == undefined) {
  //         UDF9 = null;
  //       }else{
  //         UDF9=new Date(UDF9);
  //       }
  //       var UDF10 = siteArray[i].UDF10;
  //       if (UDF10 == undefined) {
  //         UDF10 = null;
  //       }
  //       var UDF11 = siteArray[i].UDF11;
  //       if (UDF11 == undefined) {
  //         UDF11 = null;
  //       }
  //       var UDF12 = siteArray[i].UDF12;
  //       if (UDF12 == undefined) {
  //         UDF12 = null;
  //       }else{
  //         UDF12=new Date(UDF12);
  //       }
  //       var UDF13 = siteArray[i].UDF13;
  //       if (UDF13 == undefined) {
  //         UDF13 = null;
  //       }
  //       var UDF14 = siteArray[i].UDF14;
  //       if (UDF14 == undefined) {
  //         UDF14 = null;
  //       }
  //       var UDF15 = siteArray[i].UDF15;
  //       if (UDF15 == undefined) {
  //         UDF15 = null;
  //       }else{
  //         UDF15=new Date(UDF15);
  //       }
  //       var UDF16 = siteArray[i].UDF16;
  //       if (UDF16 == undefined) {
  //         UDF16 = null;
  //       }
  //       var UDF17 = siteArray[i].UDF17;
  //       if (UDF17 == undefined) {
  //         UDF17 = null;
  //       }
  //       var UDF18 = siteArray[i].UDF18;
  //       if (UDF18 == undefined) {
  //         UDF18 = null;
  //       }else{
  //         UDF18=new Date(UDF18);
  //       }
  //       var UDF19 = siteArray[i].UDF19;
  //       if (UDF19 == undefined) {
  //         UDF19 = null;
  //       }
  //       var UDF20 = siteArray[i].UDF20;
  //       if (UDF20 == undefined) {
  //         UDF20 = null;
  //       }
  //       var UDF21 = siteArray[i].UDF21;
  //       if (UDF21 == undefined) {
  //         UDF21 = null;
  //       }else{
  //         UDF21=new Date(UDF21);
  //       }
  //       var UDF22 = siteArray[i].UDF22;
  //       if (UDF22 == undefined) {
  //         UDF22 = null;
  //       }

  //       //Hazard Array
  //       var hAccountNum = siteArray[i].hAccountNum;
  //       if (hAccountNum == undefined) {
  //         hAccountNum = null;
  //       }
  //       var hSerialNum = siteArray[i].hSerialNum;
  //       if (hSerialNum == undefined) {
  //         hSerialNum = null;
  //       }
  //       var hMFG = siteArray[i].hMFG;
  //       if (hMFG == undefined) {
  //         hMFG = null;
  //       }
  //       var hModel = siteArray[i].hModel;
  //       if (hModel == undefined) {
  //         hModel = null;
  //       }
  //       var hType = siteArray[i].hType;
  //       if (hType == undefined) {
  //         hType = null;
  //       }
  //       var hdevSize = siteArray[i].hdevSize;
  //       if (hdevSize == undefined) {
  //         hdevSize = null;
  //       }
  //       var hMeter = siteArray[i].hMeter;
  //       if (hMeter == undefined) {
  //         hMeter = null;
  //       }
  //       var hHazardCat = siteArray[i].hHazardCat;
  //       if (hHazardCat == undefined) {
  //         hHazardCat = null;
  //       }
  //       var hLineSize = siteArray[i].hLineSize;
  //       if (hLineSize == undefined) {
  //         hLineSize = null;
  //       }
  //       var hLocation = siteArray[i].hLocation;
  //       if (hLocation == undefined) {
  //         hLocation = null;
  //       }
  //       var hLocation2 = siteArray[i].hLocation2;
  //       if (hLocation2 == undefined) {
  //         hLocation2 = null;
  //       }
  //       var hRecommend = siteArray[i].hRecommend;
  //       if (hRecommend == undefined) {
  //         hRecommend = null;
  //       }
  //       var hUDH1 = siteArray[i].hUDH1;
  //       if (hUDH1 == undefined) {
  //         hUDH1 = null;
  //       }
  //       var hUDH2 = siteArray[i].hUDH2;
  //       if (hUDH2 == undefined) {
  //         hUDH2 = null;
  //       }
  //       var hUDH3 = siteArray[i].hUDH3;
  //       if (hUDH3 == undefined) {
  //         hUDH3 = null;
  //       }
  //       var hUDH4 = siteArray[i].hUDH4;
  //       if (hUDH4 == undefined) {
  //         hUDH4 = null;
  //       }
  //       var hUDH5 = siteArray[i].hUDH5;
  //       if (hUDH5 == undefined) {
  //         hUDH5 = null;
  //       }
  //       var hUDH6 = siteArray[i].hUDH6;
  //       if (hUDH6 == undefined) {
  //         hUDH6 = null;
  //       }
  //       var hUDH7 = siteArray[i].hUDH7;
  //       if (hUDH7 == undefined) {
  //         hUDH7 = null;
  //       }
  //       var hUDH8 = siteArray[i].hUDH8;
  //       if (hUDH8 == undefined) {
  //         hUDH8 = null;
  //       }
  //       var hUDH9 = siteArray[i].hUDH9;
  //       if (hUDH9 == undefined) {
  //         hUDH9 = null;
  //       }
  //       var hUDH10 = siteArray[i].hUDH10;
  //       if (hUDH10 == undefined) {
  //         hUDH10 = null;
  //       }
  //       var hUDH11 = siteArray[i].hUDH11;
  //       if (hUDH11 == undefined) {
  //         hUDH11 = null;
  //       }else{
  //         hUDH11=new Date(hUDH11);
  //       }
  //       var hTestDue = siteArray[i].hTestDue;
  //       if (hTestDue == undefined) {
  //         hTestDue = null;
  //       }else{
  //         hTestDue=new Date(hTestDue);
  //       }
  //       var hInstallDue = siteArray[i].hInstallDue;
  //       if (hInstallDue == undefined) {
  //         hInstallDue = null;
  //       }else{
  //         hInstallDue=new Date(hInstallDue);
  //       }
  //       //MailAddress Array
  //       var MCompany = siteArray[i].MCompany;
  //       if (MCompany == undefined) {
  //         MCompany = null;
  //       }
  //       var MContact = siteArray[i].MContact;
  //       if (MContact == undefined) {
  //         MContact = null;
  //       }
  //       var MAddress = siteArray[i].MAddress;
  //       if (MAddress == undefined) {
  //         MAddress = null;
  //       }
  //       var MAddress2 = siteArray[i].MAddress2;
  //       if (MAddress2 == undefined) {
  //         MAddress2 = null;
  //       }
  //       var MCity = siteArray[i].MCity;
  //       if (MCity == undefined) {
  //         MCity = null;
  //       }
  //       var MState = siteArray[i].MState;
  //       if (MState == undefined) {
  //         MState = null;
  //       }
  //       var Mzip = siteArray[i].Mzip;
  //       if (Mzip == undefined) {
  //         Mzip = null;
  //       }
  //       var MPhone = siteArray[i].MPhone;
  //       if (MPhone == undefined) {
  //         MPhone = null;
  //       }
  //       var MEmail = siteArray[i].MEmail;
  //       if (MEmail == undefined) {
  //         MEmail = null;
  //       }

  //       var conn = new sql.ConnectionPool(config);
  //       conn.connect().then(function (conn) {
  //         var request = new sql.Request(conn);

  //         request.input('ClientID', sql.Int, ClientID);
  //         request.input('AccountNum', sql.VarChar(50), AccountNum);
  //         request.input('Contact', sql.VarChar(50), Contact);
  //         request.input('Company', sql.VarChar(70), Company);
  //         request.input('Address', sql.VarChar(50), Address);
  //         request.input('Address2', sql.VarChar(50), Address2);
  //         request.input('City', sql.VarChar(35), City);
  //         request.input('State', sql.VarChar(10), State);
  //         request.input('zip', sql.VarChar(25), zip);
  //         request.input('Phone', sql.VarChar(50), Phone);
  //         request.input('Ext', sql.VarChar(30), Ext);
  //         request.input('Cell1', sql.VarChar(30), Cell1);
  //         request.input('Fax', sql.VarChar(30), Fax);
  //         request.input('Email', sql.VarChar(200), Email);
  //         request.input('LocationID', sql.VarChar(25), LocationID);
  //         request.input('SiteType', sql.VarChar(50), SiteType);
  //         request.input('SiteUse', sql.VarChar(50), SiteUse);
  //         request.input('TestMonth', sql.VarChar(2), TestMonth);
  //         request.input('TestDay', sql.VarChar(2), TestDay);
  //         request.input('SurveyDue', sql.Date, SurveyDue);
  //         request.input('SurveyDue2', sql.Date, SurveyDue2);
  //         request.input('SurveyFreq', sql.VarChar(3), SurveyFreq);
  //         request.input('CityLimits', sql.Bit, CityLimits);
  //         request.input('UDF1', sql.VarChar(25), UDF1);
  //         request.input('UDF2', sql.VarChar(25), UDF2);
  //         request.input('UDF3', sql.VarChar(50), UDF3);
  //         request.input('UDF4', sql.VarChar(10), UDF4);
  //         request.input('UDF5', sql.VarChar(25), UDF5);
  //         request.input('UDF6', sql.Date, UDF6);
  //         request.input('UDF7', sql.VarChar(10), UDF7);
  //         request.input('UDF8', sql.VarChar(25), UDF8);
  //         request.input('UDF9', sql.Date, UDF9);
  //         request.input('UDF10', sql.VarChar(10), UDF10);
  //         request.input('UDF11', sql.VarChar(25), UDF11);
  //         request.input('UDF12', sql.Date, UDF12);
  //         request.input('UDF13', sql.VarChar(10), UDF13);
  //         request.input('UDF14', sql.VarChar(25), UDF14);
  //         request.input('UDF15', sql.Date, UDF15);
  //         request.input('UDF16', sql.VarChar(10), UDF16);
  //         request.input('UDF17', sql.VarChar(25), UDF17);
  //         request.input('UDF18', sql.Date, UDF18);
  //         request.input('UDF19', sql.VarChar(10), UDF19);
  //         request.input('UDF20', sql.VarChar(25), UDF20);
  //         request.input('UDF21', sql.Date, UDF21);
  //         request.input('UDF22', sql.VarChar(100), UDF22);

  //         request.input('hAccountNum', sql.VarChar(25), hAccountNum);
  //         request.input('hSerialNum', sql.VarChar(25), hSerialNum);
  //         request.input('hMFG', sql.VarChar(25), hMFG);
  //         request.input('hModel', sql.VarChar(25), hModel);
  //         request.input('hType', sql.VarChar(25), hType);
  //         request.input('hdevSize', sql.VarChar(25), hdevSize);
  //         request.input('hMeter', sql.VarChar(25), hMeter);
  //         request.input('hHazardCat', sql.VarChar(50), hHazardCat);
  //         request.input('hLineSize', sql.VarChar(25), hLineSize);
  //         request.input('hLocation', sql.VarChar(80), hLocation);
  //         request.input('hLocation2', sql.VarChar(80), hLocation2);
  //         request.input('hRecommend', sql.VarChar(1000), hRecommend);
  //         request.input('hUDH1', sql.VarChar(25), hUDH1);
  //         request.input('hUDH2', sql.VarChar(25), hUDH2);
  //         request.input('hUDH3', sql.VarChar(25), hUDH3);
  //         request.input('hUDH4', sql.VarChar(25), hUDH4);
  //         request.input('hUDH5', sql.VarChar(25), hUDH5);
  //         request.input('hUDH6', sql.VarChar(80), hUDH6);
  //         request.input('hUDH7', sql.VarChar(25), hUDH7);
  //         request.input('hUDH8', sql.VarChar(25), hUDH8);
  //         request.input('hUDH9', sql.VarChar(25), hUDH9);
  //         request.input('hUDH10', sql.VarChar(25), hUDH10);
  //         request.input('hUDH11', sql.Date, hUDH11);
  //         request.input('hTestDue', sql.Date, hTestDue);
  //         request.input('hInstallDue', sql.Date, hInstallDue);

  //         request.input('MCompany', sql.VarChar(70), MCompany);
  //         request.input('MContact', sql.VarChar(50), MContact);
  //         request.input('MAddress', sql.VarChar(70), MAddress);
  //         request.input('MAddress2', sql.VarChar(70), MAddress2);
  //         request.input('MCity', sql.VarChar(35), MCity);
  //         request.input('MState', sql.VarChar(10), MState);
  //         request.input('Mzip', sql.VarChar(25), Mzip);
  //         request.input('MPhone', sql.VarChar(50), MPhone);
  //         request.input('MEmail', sql.VarChar(200), MEmail);

  //         request.execute('sp_ImportExcel').then(function (err, recordsets, returnValue, affected) {
  //           inserted.push('1');
  //           sql.close();
  //           queryNextItem(i + 1);
  //         }).catch(function (err) {
  //           notInserted.push({ error: err });
  //           sql.close();
  //           queryNextItem(i + 1);
  //         });
  //       });
  //     }
  //   }
  // });

  app.post(appConstants.SITE_EXCEL_IMPORT, ensuretoken, function (req, res) {
    var siteArray = req.body["data"];
    //var hazardArray = req.body["data2"];
    //var addressArray = req.body["data3"];
    var inserted = [];
    var notInserted = [];
    queryNextItem(0);

    function formatDate() {
      var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    }

    // queryclearimport();
    function queryNextItem(i) {
      if (i >= siteArray.length) {
        var date = formatDate();
        var query1 = "update Sites SET ImportID=null where ImportID like '" + date + "%'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query1)
        });

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({ success: inserted, error: notInserted });


      } else {
        //Site Array
        var IncNum = siteArray[i].IncNum;
        var ClientID = siteArray[i].ClientID;
        if (ClientID == undefined) {
          ClientID = null;
        }
        var AccountNum = siteArray[i].AccountNum;
        if (AccountNum == undefined) {
          AccountNum = null;
        }
        var Contact = siteArray[i].Contact;
        if (Contact == undefined) {
          Contact = null;
        }
        var Company = siteArray[i].Company;
        if (Company == undefined) {
          Company = null;
        }
        var Address = siteArray[i].Address;
        if (Address == undefined) {
          Address = null;
        }
        var Address2 = siteArray[i].Address2;
        if (Address2 == undefined) {
          Address2 = null;
        }
        var City = siteArray[i].City;
        if (City == undefined) {
          City = null;
        }
        var State = siteArray[i].State;
        if (State == undefined) {
          State = null;
        }
        var zip = siteArray[i].zip;
        if (zip == undefined) {
          zip = null;
        }
        var Phone = siteArray[i].Phone;
        if (Phone == undefined) {
          Phone = null;
        }
        var Ext = siteArray[i].Ext;
        if (Ext == undefined) {
          Ext = null;
        }
        var Cell1 = siteArray[i].Cell1;
        if (Cell1 == undefined) {
          Cell1 = null;
        }
        var Fax = siteArray[i].Fax;
        if (Fax == undefined) {
          Fax = null;
        }
        var Email = siteArray[i].Email;
        if (Email == undefined) {
          Email = null;
        }
        var LocationID = siteArray[i].LocationID;
        if (LocationID == undefined) {
          LocationID = null;
        }
        var SiteType = siteArray[i].SiteType;
        if (SiteType == undefined) {
          SiteType = null;
        }
        var SiteUse = siteArray[i].SiteUse;
        if (SiteUse == undefined) {
          SiteUse = null;
        }
        var TestMonth = siteArray[i].TestMonth;
        if (TestMonth == undefined) {
          TestMonth = null;
        }
        var TestDay = siteArray[i].TestDay;
        if (TestDay == undefined) {
          TestDay = null;
        }
        var SurveyDue = siteArray[i].SurveyDue;
        if (SurveyDue == undefined) {
          SurveyDue = null;
        } else {
          SurveyDue = new Date(SurveyDue);
        }
        var SurveyDue2 = siteArray[i].SurveyDue2;
        if (SurveyDue2 == undefined) {
          SurveyDue2 = null;
        } else {
          SurveyDue2 = new Date(SurveyDue2);
        }
        var SurveyFreq = siteArray[i].SurveyFreq;
        if (SurveyFreq == undefined) {
          SurveyFreq = null;
        }
        var CityLimits = siteArray[i].CityLimits;
        if (CityLimits == undefined) {
          CityLimits = null;
        }
        var UDF1 = siteArray[i].UDF1;
        if (UDF1 == undefined) {
          UDF1 = null;
        }
        var UDF2 = siteArray[i].UDF2;
        if (UDF2 == undefined) {
          UDF2 = null;
        }
        var UDF3 = siteArray[i].UDF3;
        if (UDF3 == undefined) {
          UDF3 = null;
        }
        var UDF4 = siteArray[i].UDF4;
        if (UDF4 == undefined) {
          UDF4 = null;
        }
        var UDF5 = siteArray[i].UDF5;
        if (UDF5 == undefined) {
          UDF5 = null;
        }
        var UDF6 = siteArray[i].UDF6;
        if (UDF6 == undefined) {
          UDF6 = null;
        } else {
          UDF6 = new Date(UDF6);
        }
        var UDF7 = siteArray[i].UDF7;
        if (UDF7 == undefined) {
          UDF7 = null;
        }
        var UDF8 = siteArray[i].UDF8;
        if (UDF8 == undefined) {
          UDF8 = null;
        }
        var UDF9 = siteArray[i].UDF9;
        if (UDF9 == undefined) {
          UDF9 = null;
        } else {
          UDF9 = new Date(UDF9);
        }
        var UDF10 = siteArray[i].UDF10;
        if (UDF10 == undefined) {
          UDF10 = null;
        }
        var UDF11 = siteArray[i].UDF11;
        if (UDF11 == undefined) {
          UDF11 = null;
        }
        var UDF12 = siteArray[i].UDF12;
        if (UDF12 == undefined) {
          UDF12 = null;
        } else {
          UDF12 = new Date(UDF12);
        }
        var UDF13 = siteArray[i].UDF13;
        if (UDF13 == undefined) {
          UDF13 = null;
        }
        var UDF14 = siteArray[i].UDF14;
        if (UDF14 == undefined) {
          UDF14 = null;
        }
        var UDF15 = siteArray[i].UDF15;
        if (UDF15 == undefined) {
          UDF15 = null;
        } else {
          UDF15 = new Date(UDF15);
        }
        var UDF16 = siteArray[i].UDF16;
        if (UDF16 == undefined) {
          UDF16 = null;
        }
        var UDF17 = siteArray[i].UDF17;
        if (UDF17 == undefined) {
          UDF17 = null;
        }
        var UDF18 = siteArray[i].UDF18;
        if (UDF18 == undefined) {
          UDF18 = null;
        } else {
          UDF18 = new Date(UDF18);
        }
        var UDF19 = siteArray[i].UDF19;
        if (UDF19 == undefined) {
          UDF19 = null;
        }
        var UDF20 = siteArray[i].UDF20;
        if (UDF20 == undefined) {
          UDF20 = null;
        }
        var UDF21 = siteArray[i].UDF21;
        if (UDF21 == undefined) {
          UDF21 = null;
        } else {
          UDF21 = new Date(UDF21);
        }
        var UDF22 = siteArray[i].UDF22;
        if (UDF22 == undefined) {
          UDF22 = null;
        }

        //Hazard Array
        var hAccountNum = siteArray[i].hAccountNum;
        if (hAccountNum == undefined) {
          hAccountNum = null;
        }
        var hSerialNum = siteArray[i].hSerialNum;
        if (hSerialNum == undefined) {
          hSerialNum = null;
        }
        var hMFG = siteArray[i].hMFG;
        if (hMFG == undefined) {
          hMFG = null;
        }
        var hModel = siteArray[i].hModel;
        if (hModel == undefined) {
          hModel = null;
        }
        var hType = siteArray[i].hType;
        if (hType == undefined) {
          hType = null;
        }
        var hdevSize = siteArray[i].hdevSize;
        if (hdevSize == undefined) {
          hdevSize = null;
        }
        var hMeter = siteArray[i].hMeter;
        if (hMeter == undefined) {
          hMeter = null;
        }
        var hHazardCat = siteArray[i].hHazardCat;
        if (hHazardCat == undefined) {
          hHazardCat = null;
        }
        var hLineSize = siteArray[i].hLineSize;
        if (hLineSize == undefined) {
          hLineSize = null;
        }
        var hLocation = siteArray[i].hLocation;
        if (hLocation == undefined) {
          hLocation = null;
        }
        var hLocation2 = siteArray[i].hLocation2;
        if (hLocation2 == undefined) {
          hLocation2 = null;
        }
        var hRecommend = siteArray[i].hRecommend;
        if (hRecommend == undefined) {
          hRecommend = null;
        }
        var hUDH1 = siteArray[i].hUDH1;
        if (hUDH1 == undefined) {
          hUDH1 = null;
        }
        var hUDH2 = siteArray[i].hUDH2;
        if (hUDH2 == undefined) {
          hUDH2 = null;
        }
        var hUDH3 = siteArray[i].hUDH3;
        if (hUDH3 == undefined) {
          hUDH3 = null;
        }
        var hUDH4 = siteArray[i].hUDH4;
        if (hUDH4 == undefined) {
          hUDH4 = null;
        }
        var hUDH5 = siteArray[i].hUDH5;
        if (hUDH5 == undefined) {
          hUDH5 = null;
        }
        var hUDH6 = siteArray[i].hUDH6;
        if (hUDH6 == undefined) {
          hUDH6 = null;
        }
        var hUDH7 = siteArray[i].hUDH7;
        if (hUDH7 == undefined) {
          hUDH7 = null;
        }
        var hUDH8 = siteArray[i].hUDH8;
        if (hUDH8 == undefined) {
          hUDH8 = null;
        }
        var hUDH9 = siteArray[i].hUDH9;
        if (hUDH9 == undefined) {
          hUDH9 = null;
        }
        var hUDH10 = siteArray[i].hUDH10;
        if (hUDH10 == undefined) {
          hUDH10 = null;
        }
        var hUDH11 = siteArray[i].hUDH11;
        if (hUDH11 == undefined) {
          hUDH11 = null;
        } else {
          hUDH11 = new Date(hUDH11);
        }
        var hTestDue = siteArray[i].hTestDue;
        if (hTestDue == undefined) {
          hTestDue = null;
        } else {
          hTestDue = new Date(hTestDue);
        }
        var hInstallDue = siteArray[i].hInstallDue;
        if (hInstallDue == undefined) {
          hInstallDue = null;
        } else {
          hInstallDue = new Date(hInstallDue);
        }
        //MailAddress Array
        var MCompany = siteArray[i].MCompany;
        if (MCompany == undefined) {
          MCompany = null;
        }
        var MContact = siteArray[i].MContact;
        if (MContact == undefined) {
          MContact = null;
        }
        var MAddress = siteArray[i].MAddress;
        if (MAddress == undefined) {
          MAddress = null;
        }
        var MAddress2 = siteArray[i].MAddress2;
        if (MAddress2 == undefined) {
          MAddress2 = null;
        }
        var MCity = siteArray[i].MCity;
        if (MCity == undefined) {
          MCity = null;
        }
        var MState = siteArray[i].MState;
        if (MState == undefined) {
          MState = null;
        }
        var Mzip = siteArray[i].Mzip;
        if (Mzip == undefined) {
          Mzip = null;
        }
        var MPhone = siteArray[i].MPhone;
        if (MPhone == undefined) {
          MPhone = null;
        }
        var MEmail = siteArray[i].MEmail;
        if (MEmail == undefined) {
          MEmail = null;
        }

        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('IncNum', sql.Int, IncNum);
          request.input('ClientID', sql.Int, ClientID);
          request.input('AccountNum', sql.VarChar(50), AccountNum);
          request.input('Contact', sql.VarChar(50), Contact);
          request.input('Company', sql.VarChar(70), Company);
          request.input('Address', sql.VarChar(50), Address);
          request.input('Address2', sql.VarChar(50), Address2);
          request.input('City', sql.VarChar(35), City);
          request.input('State', sql.VarChar(10), State);
          request.input('zip', sql.VarChar(25), zip);
          request.input('Phone', sql.VarChar(50), Phone);
          request.input('Ext', sql.VarChar(30), Ext);
          request.input('Cell1', sql.VarChar(30), Cell1);
          request.input('Fax', sql.VarChar(30), Fax);
          request.input('Email', sql.VarChar(200), Email);
          request.input('LocationID', sql.VarChar(25), LocationID);
          request.input('SiteType', sql.VarChar(50), SiteType);
          request.input('SiteUse', sql.VarChar(50), SiteUse);
          request.input('TestMonth', sql.VarChar(2), TestMonth);
          request.input('TestDay', sql.VarChar(2), TestDay);
          request.input('SurveyDue', sql.Date, SurveyDue);
          request.input('SurveyDue2', sql.Date, SurveyDue2);
          request.input('SurveyFreq', sql.VarChar(3), SurveyFreq);
          request.input('CityLimits', sql.Bit, CityLimits);
          request.input('UDF1', sql.VarChar(25), UDF1);
          request.input('UDF2', sql.VarChar(25), UDF2);
          request.input('UDF3', sql.VarChar(50), UDF3);
          request.input('UDF4', sql.VarChar(10), UDF4);
          request.input('UDF5', sql.VarChar(25), UDF5);
          request.input('UDF6', sql.Date, UDF6);
          request.input('UDF7', sql.VarChar(10), UDF7);
          request.input('UDF8', sql.VarChar(25), UDF8);
          request.input('UDF9', sql.Date, UDF9);
          request.input('UDF10', sql.VarChar(10), UDF10);
          request.input('UDF11', sql.VarChar(25), UDF11);
          request.input('UDF12', sql.Date, UDF12);
          request.input('UDF13', sql.VarChar(10), UDF13);
          request.input('UDF14', sql.VarChar(25), UDF14);
          request.input('UDF15', sql.Date, UDF15);
          request.input('UDF16', sql.VarChar(10), UDF16);
          request.input('UDF17', sql.VarChar(25), UDF17);
          request.input('UDF18', sql.Date, UDF18);
          request.input('UDF19', sql.VarChar(10), UDF19);
          request.input('UDF20', sql.VarChar(25), UDF20);
          request.input('UDF21', sql.Date, UDF21);
          request.input('UDF22', sql.VarChar(100), UDF22);

          request.input('hAccountNum', sql.VarChar(25), hAccountNum);
          request.input('hSerialNum', sql.VarChar(25), hSerialNum);
          request.input('hMFG', sql.VarChar(25), hMFG);
          request.input('hModel', sql.VarChar(25), hModel);
          request.input('hType', sql.VarChar(25), hType);
          request.input('hdevSize', sql.VarChar(25), hdevSize);
          request.input('hMeter', sql.VarChar(25), hMeter);
          request.input('hHazardCat', sql.VarChar(50), hHazardCat);
          request.input('hLineSize', sql.VarChar(25), hLineSize);
          request.input('hLocation', sql.VarChar(80), hLocation);
          request.input('hLocation2', sql.VarChar(80), hLocation2);
          request.input('hRecommend', sql.VarChar(1000), hRecommend);
          request.input('hUDH1', sql.VarChar(25), hUDH1);
          request.input('hUDH2', sql.VarChar(25), hUDH2);
          request.input('hUDH3', sql.VarChar(25), hUDH3);
          request.input('hUDH4', sql.VarChar(25), hUDH4);
          request.input('hUDH5', sql.VarChar(25), hUDH5);
          request.input('hUDH6', sql.VarChar(80), hUDH6);
          request.input('hUDH7', sql.VarChar(25), hUDH7);
          request.input('hUDH8', sql.VarChar(25), hUDH8);
          request.input('hUDH9', sql.VarChar(25), hUDH9);
          request.input('hUDH10', sql.VarChar(25), hUDH10);
          request.input('hUDH11', sql.Date, hUDH11);
          request.input('hTestDue', sql.Date, hTestDue);
          request.input('hInstallDue', sql.Date, hInstallDue);

          request.input('MCompany', sql.VarChar(70), MCompany);
          request.input('MContact', sql.VarChar(50), MContact);
          request.input('MAddress', sql.VarChar(70), MAddress);
          request.input('MAddress2', sql.VarChar(70), MAddress2);
          request.input('MCity', sql.VarChar(35), MCity);
          request.input('MState', sql.VarChar(10), MState);
          request.input('Mzip', sql.VarChar(25), Mzip);
          request.input('MPhone', sql.VarChar(50), MPhone);
          request.input('MEmail', sql.VarChar(200), MEmail);

          request.execute('sp_ImportExcelnew').then(function (err, recordsets, returnValue, affected) {
            inserted.push('1');
            sql.close();
            queryNextItem(i + 1);
          }).catch(function (err) {
            notInserted.push({ error: err });
            sql.close();
            queryNextItem(i + 1);
          });
        });
      }
    }


  });


  // app.post(appConstants.SITE_EXCEL_IMPORT1, function (req, res) {
  //   var siteArray = req.body["data"];
  //   //var hazardArray = req.body["data2"];
  //   //var addressArray = req.body["data3"];
  //   var inserted = [];
  //   var notInserted = [];
  //   var newsiteid = null;
  //   queryNextItem(0);
  //   function queryNextItem(i) {
  //     if (i >= siteArray.length) {
  //       console.log(inserted, notInserted)
  //       res.setHeader('Access-Control-Allow-Origin', '*');
  //       res.status(200).json({ success: inserted, error: notInserted });
  //     } else {
  //       // var len=Object.keys(siteArray[i].length)
  //       // for(var j=0; j<len;j++){

  //       // }

  //       //Site Array
  //       if (i = 0) {
  //         var ClientID = siteArray[i].ClientID;
  //         if (ClientID == undefined) {
  //           ClientID = null;
  //         }
  //         var AccountNum = siteArray[i].AccountNum;
  //         if (AccountNum == undefined) {
  //           AccountNum = null;
  //         }
  //         var Contact = siteArray[i].Contact;
  //         if (Contact == undefined) {
  //           Contact = null;
  //         }
  //         var Company = siteArray[i].Company;
  //         if (Company == undefined) {
  //           Company = null;
  //         }
  //         var Address = siteArray[i].Address;
  //         if (Address == undefined) {
  //           Address = null;
  //         }
  //         var Address2 = siteArray[i].Address2;
  //         if (Address2 == undefined) {
  //           Address2 = null;
  //         }
  //         var City = siteArray[i].City;
  //         if (City == undefined) {
  //           City = null;
  //         }
  //         var State = siteArray[i].State;
  //         if (State == undefined) {
  //           State = null;
  //         }
  //         var zip = siteArray[i].zip;
  //         if (zip == undefined) {
  //           zip = null;
  //         }
  //         var Phone = siteArray[i].Phone;
  //         if (Phone == undefined) {
  //           Phone = null;
  //         }
  //         var Ext = siteArray[i].Ext;
  //         if (Ext == undefined) {
  //           Ext = null;
  //         }
  //         var Cell1 = siteArray[i].Cell1;
  //         if (Cell1 == undefined) {
  //           Cell1 = null;
  //         }
  //         var Fax = siteArray[i].Fax
  //         if (Fax == undefined) {
  //           Fax = null;
  //         }
  //         var Email = siteArray[i].Email;
  //         if (Email == undefined) {
  //           Email = null;
  //         }
  //         var LocationID = siteArray[i].LocationID;
  //         if (LocationID == undefined) {
  //           LocationID = null;
  //         }
  //         var SiteType = siteArray[i].SiteType;
  //         if (SiteType == undefined) {
  //           SiteType = null;
  //         }
  //         var SiteUse = siteArray[i].SiteUse;
  //         if (SiteUse == undefined) {
  //           SiteUse = null;
  //         }
  //         var TestMonth = siteArray[i].TestMonth;
  //         if (TestMonth == undefined) {
  //           TestMonth = null;
  //         }
  //         var TestDay = siteArray[i].TestDay;
  //         if (TestDay == undefined) {
  //           TestDay = null;
  //         }
  //         var SurveyDue = siteArray[i].SurveyDue;
  //         if (SurveyDue == undefined) {
  //           SurveyDue = null;
  //         }
  //         var SurveyDue2 = siteArray[i].SurveyDue2;
  //         if (SurveyDue2 == undefined) {
  //           SurveyDue2 = null;
  //         }
  //         var SurveyFreq = siteArray[i].SurveyFreq;
  //         if (SurveyFreq == undefined) {
  //           SurveyFreq = null;
  //         }
  //         var CityLimits = siteArray[i].CityLimits;
  //         if (CityLimits == undefined) {
  //           CityLimits = null;
  //         }
  //         var UDF1 = siteArray[i].UDF1;
  //         if (UDF1 == undefined) {
  //           UDF1 = null;
  //         }
  //         var UDF2 = siteArray[i].UDF2;
  //         if (UDF2 == undefined) {
  //           UDF2 = null;
  //         }
  //         var UDF3 = siteArray[i].UDF3;
  //         if (UDF3 == undefined) {
  //           UDF3 = null;
  //         }
  //         var UDF4 = siteArray[i].UDF4;
  //         if (UDF4 == undefined) {
  //           UDF4 = null;
  //         }
  //         var UDF5 = siteArray[i].UDF5;
  //         if (UDF5 == undefined) {
  //           UDF5 = null;
  //         }
  //         var UDF6 = siteArray[i].UDF6;
  //         if (UDF6 == undefined) {
  //           UDF6 = null;
  //         }
  //         var UDF7 = siteArray[i].UDF7;
  //         if (UDF7 == undefined) {
  //           UDF7 = null;
  //         }
  //         var UDF8 = siteArray[i].UDF8;
  //         if (UDF8 == undefined) {
  //           UDF8 = null;
  //         }
  //         var UDF9 = siteArray[i].UDF9;
  //         if (UDF9 == undefined) {
  //           UDF9 = null;
  //         }
  //         var UDF10 = siteArray[i].UDF10;
  //         if (UDF10 == undefined) {
  //           UDF10 = null;
  //         }
  //         var UDF11 = siteArray[i].UDF11;
  //         if (UDF11 == undefined) {
  //           UDF11 = null;
  //         }
  //         var UDF12 = siteArray[i].UDF12;
  //         if (UDF12 == undefined) {
  //           UDF12 = null;
  //         }
  //         var UDF13 = siteArray[i].UDF13;
  //         if (UDF13 == undefined) {
  //           UDF13 = null;
  //         }
  //         var UDF14 = siteArray[i].UDF14;
  //         if (UDF14 == undefined) {
  //           UDF14 = null;
  //         }
  //         var UDF15 = siteArray[i].UDF15;
  //         if (UDF15 == undefined) {
  //           UDF15 = null;
  //         }
  //         var UDF16 = siteArray[i].UDF16;
  //         if (UDF16 == undefined) {
  //           UDF16 = null;
  //         }
  //         var UDF17 = siteArray[i].UDF17;
  //         if (UDF17 == undefined) {
  //           UDF17 = null;
  //         }
  //         var UDF18 = siteArray[i].UDF18;
  //         if (UDF18 == undefined) {
  //           UDF18 = null;
  //         }
  //         var UDF19 = siteArray[i].UDF19;
  //         if (UDF19 == undefined) {
  //           UDF19 = null;
  //         }
  //         var UDF20 = siteArray[i].UDF20;
  //         if (UDF20 == undefined) {
  //           UDF20 = null;
  //         }
  //         var UDF21 = siteArray[i].UDF21;
  //         if (UDF21 == undefined) {
  //           UDF21 = null;
  //         }
  //         var UDF22 = siteArray[i].UDF22;
  //         if (UDF22 == undefined) {
  //           UDF22 = null;
  //         }
  //         var conn = new sql.ConnectionPool(config);
  //         conn.connect().then(function (conn) {
  //           var request = new sql.Request(conn);

  //           request.input('ClientID', sql.Int, ClientID);
  //           request.input('AccountNum', sql.VarChar(50), AccountNum);
  //           request.input('Contact', sql.VarChar(50), Contact);
  //           request.input('Company', sql.VarChar(70), Company);
  //           request.input('Address', sql.VarChar(50), Address);
  //           request.input('Address2', sql.VarChar(50), Address2);
  //           request.input('City', sql.VarChar(35), City);
  //           request.input('State', sql.VarChar(10), State);
  //           request.input('zip', sql.VarChar(25), zip);
  //           request.input('Phone', sql.VarChar(50), Phone);
  //           request.input('Ext', sql.VarChar(30), Ext);
  //           request.input('Cell1', sql.VarChar(30), Cell1);
  //           request.input('Fax', sql.VarChar(30), Fax);
  //           request.input('Email', sql.VarChar(200), Email);
  //           request.input('LocationID', sql.VarChar(25), LocationID);
  //           request.input('SiteType', sql.VarChar(50), SiteType);
  //           request.input('SiteUse', sql.VarChar(50), SiteUse);
  //           request.input('TestMonth', sql.VarChar(2), TestMonth);
  //           request.input('TestDay', sql.VarChar(2), TestDay);
  //           request.input('SurveyDue', sql.Date, SurveyDue);
  //           request.input('SurveyDue2', sql.Date, SurveyDue2);
  //           request.input('SurveyFreq', sql.VarChar(3), SurveyFreq);
  //           request.input('CityLimits', sql.Bit, CityLimits);
  //           request.input('UDF1', sql.VarChar(25), UDF1);
  //           request.input('UDF2', sql.VarChar(25), UDF2);
  //           request.input('UDF3', sql.VarChar(50), UDF3);
  //           request.input('UDF4', sql.VarChar(10), UDF4);
  //           request.input('UDF5', sql.VarChar(25), UDF5);
  //           request.input('UDF6', sql.Date, UDF6);
  //           request.input('UDF7', sql.VarChar(10), UDF7);
  //           request.input('UDF8', sql.VarChar(25), UDF8);
  //           request.input('UDF9', sql.Date, UDF9);
  //           request.input('UDF10', sql.VarChar(10), UDF10);
  //           request.input('UDF11', sql.VarChar(25), UDF11);
  //           request.input('UDF12', sql.Date, UDF12);
  //           request.input('UDF13', sql.VarChar(10), UDF13);
  //           request.input('UDF14', sql.VarChar(25), UDF14);
  //           request.input('UDF15', sql.Date, UDF15);
  //           request.input('UDF16', sql.VarChar(10), UDF16);
  //           request.input('UDF17', sql.VarChar(25), UDF17);
  //           request.input('UDF18', sql.Date, UDF18);
  //           request.input('UDF19', sql.VarChar(10), UDF19);
  //           request.input('UDF20', sql.VarChar(25), UDF20);
  //           request.input('UDF21', sql.Date, UDF21);
  //           request.input('UDF22', sql.VarChar(100), UDF22);

  //           request.execute('sp_ImportExcelSite').then(function (err, recordsets, returnValue, affected) {
  //             if (err.returnValue != null || err.returnValue != undefined) {
  //               newsiteid = err.returnValue;
  //               addhazard(siteArray[i], newsiteid);
  //               queryNextItem(i + 1);
  //             }
  //             sql.close();
  //           }).catch(function (err) {
  //             notInserted.push({ error: err });
  //             sql.close();
  //             queryNextItem(i + 1);
  //           });
  //         });
  //       } else {
  //         var chkdata=siteArray[i];
  //         var chkresult=function(chkdata){
  //           var values=Object.values(chkdata);
  //         }
  //         if (siteArray[i].ClientID == undefined && siteArray[i].AccountNum == undefined && siteArray[i].Contact == undefined && siteArray[i].Company == undefined && siteArray[i].Address == undefined && siteArray[i].Address2 == undefined && siteArray[i].City == undefined && siteArray[i].State == undefined
  //           && siteArray[i].zip == undefined && siteArray[i].Phone == undefined && siteArray[i].Ext == undefined && siteArray[i].Cell1 == undefined && siteArray[i].Fax == undefined && siteArray[i].Email == undefined && siteArray[i].LocationID == undefined && siteArray[i].SiteType == undefined
  //           && siteArray[i].SiteUse == undefined && siteArray[i].TestMonth == undefined && siteArray[i].TestDay == undefined && siteArray[i].SurveyDue == undefined && siteArray[i].SurveyDue2 == undefined && siteArray[i].SurveyFreq == undefined && siteArray[i].CityLimits == undefined && siteArray[i].UDF1 == undefined
  //           && siteArray[i].UDF2 == undefined && siteArray[i].UDF3 == undefined && siteArray[i].UDF4 == undefined && siteArray[i].UDF5 == undefined && siteArray[i].UDF6 == undefined && siteArray[i].UDF7 == undefined && siteArray[i].UDF8 == undefined && siteArray[i].UDF9 == undefined && siteArray[i].UDF10 == undefined && siteArray[i].UDF11 == undefined
  //           && siteArray[i].UDF12 == undefined && siteArray[i].UDF13 == undefined && siteArray[i].UDF14 == undefined && siteArray[i].UDF15 == undefined && siteArray[i].UDF16 == undefined && siteArray[i].UDF17 == undefined && siteArray[i].UDF18 == undefined && siteArray[i].UDF19 == undefined && siteArray[i].UDF20 == undefined && siteArray[i].UDF21 == undefined
  //           && siteArray[i].UDF22 == undefined) {
  //             console.log(newsiteid);
  //           addhazard(siteArray[i], newsiteid);
  //           queryNextItem(i + 1);
  //         } else {
  //           var ClientID = siteArray[i].ClientID;
  //           if (ClientID == undefined) {
  //             ClientID = null;
  //           }
  //           var AccountNum = siteArray[i].AccountNum;
  //           if (AccountNum == undefined) {
  //             AccountNum = null;
  //           }
  //           var Contact = siteArray[i].Contact;
  //           if (Contact == undefined) {
  //             Contact = null;
  //           }
  //           var Company = siteArray[i].Company;
  //           if (Company == undefined) {
  //             Company = null;
  //           }
  //           var Address = siteArray[i].Address;
  //           if (Address == undefined) {
  //             Address = null;
  //           }
  //           var Address2 = siteArray[i].Address2;
  //           if (Address2 == undefined) {
  //             Address2 = null;
  //           }
  //           var City = siteArray[i].City;
  //           if (City == undefined) {
  //             City = null;
  //           }
  //           var State = siteArray[i].State;
  //           if (State == undefined) {
  //             State = null;
  //           }
  //           var zip = siteArray[i].zip;
  //           if (zip == undefined) {
  //             zip = null;
  //           }
  //           var Phone = siteArray[i].Phone;
  //           if (Phone == undefined) {
  //             Phone = null;
  //           }
  //           var Ext = siteArray[i].Ext;
  //           if (Ext == undefined) {
  //             Ext = null;
  //           }
  //           var Cell1 = siteArray[i].Cell1;
  //           if (Cell1 == undefined) {
  //             Cell1 = null;
  //           }
  //           var Fax = siteArray[i].Fax
  //           if (Fax == undefined) {
  //             Fax = null;
  //           }
  //           var Email = siteArray[i].Email;
  //           if (Email == undefined) {
  //             Email = null;
  //           }
  //           var LocationID = siteArray[i].LocationID;
  //           if (LocationID == undefined) {
  //             LocationID = null;
  //           }
  //           var SiteType = siteArray[i].SiteType;
  //           if (SiteType == undefined) {
  //             SiteType = null;
  //           }
  //           var SiteUse = siteArray[i].SiteUse;
  //           if (SiteUse == undefined) {
  //             SiteUse = null;
  //           }
  //           var TestMonth = siteArray[i].TestMonth;
  //           if (TestMonth == undefined) {
  //             TestMonth = null;
  //           }
  //           var TestDay = siteArray[i].TestDay;
  //           if (TestDay == undefined) {
  //             TestDay = null;
  //           }
  //           var SurveyDue = siteArray[i].SurveyDue;
  //           if (SurveyDue == undefined) {
  //             SurveyDue = null;
  //           }
  //           var SurveyDue2 = siteArray[i].SurveyDue2;
  //           if (SurveyDue2 == undefined) {
  //             SurveyDue2 = null;
  //           }
  //           var SurveyFreq = siteArray[i].SurveyFreq;
  //           if (SurveyFreq == undefined) {
  //             SurveyFreq = null;
  //           }
  //           var CityLimits = siteArray[i].CityLimits;
  //           if (CityLimits == undefined) {
  //             CityLimits = null;
  //           }
  //           var UDF1 = siteArray[i].UDF1;
  //           if (UDF1 == undefined) {
  //             UDF1 = null;
  //           }
  //           var UDF2 = siteArray[i].UDF2;
  //           if (UDF2 == undefined) {
  //             UDF2 = null;
  //           }
  //           var UDF3 = siteArray[i].UDF3;
  //           if (UDF3 == undefined) {
  //             UDF3 = null;
  //           }
  //           var UDF4 = siteArray[i].UDF4;
  //           if (UDF4 == undefined) {
  //             UDF4 = null;
  //           }
  //           var UDF5 = siteArray[i].UDF5;
  //           if (UDF5 == undefined) {
  //             UDF5 = null;
  //           }
  //           var UDF6 = siteArray[i].UDF6;
  //           if (UDF6 == undefined) {
  //             UDF6 = null;
  //           }
  //           var UDF7 = siteArray[i].UDF7;
  //           if (UDF7 == undefined) {
  //             UDF7 = null;
  //           }
  //           var UDF8 = siteArray[i].UDF8;
  //           if (UDF8 == undefined) {
  //             UDF8 = null;
  //           }
  //           var UDF9 = siteArray[i].UDF9;
  //           if (UDF9 == undefined) {
  //             UDF9 = null;
  //           }
  //           var UDF10 = siteArray[i].UDF10;
  //           if (UDF10 == undefined) {
  //             UDF10 = null;
  //           }
  //           var UDF11 = siteArray[i].UDF11;
  //           if (UDF11 == undefined) {
  //             UDF11 = null;
  //           }
  //           var UDF12 = siteArray[i].UDF12;
  //           if (UDF12 == undefined) {
  //             UDF12 = null;
  //           }
  //           var UDF13 = siteArray[i].UDF13;
  //           if (UDF13 == undefined) {
  //             UDF13 = null;
  //           }
  //           var UDF14 = siteArray[i].UDF14;
  //           if (UDF14 == undefined) {
  //             UDF14 = null;
  //           }
  //           var UDF15 = siteArray[i].UDF15;
  //           if (UDF15 == undefined) {
  //             UDF15 = null;
  //           }
  //           var UDF16 = siteArray[i].UDF16;
  //           if (UDF16 == undefined) {
  //             UDF16 = null;
  //           }
  //           var UDF17 = siteArray[i].UDF17;
  //           if (UDF17 == undefined) {
  //             UDF17 = null;
  //           }
  //           var UDF18 = siteArray[i].UDF18;
  //           if (UDF18 == undefined) {
  //             UDF18 = null;
  //           }
  //           var UDF19 = siteArray[i].UDF19;
  //           if (UDF19 == undefined) {
  //             UDF19 = null;
  //           }
  //           var UDF20 = siteArray[i].UDF20;
  //           if (UDF20 == undefined) {
  //             UDF20 = null;
  //           }
  //           var UDF21 = siteArray[i].UDF21;
  //           if (UDF21 == undefined) {
  //             UDF21 = null;
  //           }
  //           var UDF22 = siteArray[i].UDF22;
  //           if (UDF22 == undefined) {
  //             UDF22 = null;
  //           }
  //           var conn = new sql.ConnectionPool(config);
  //           conn.connect().then(function (conn) {
  //             var request = new sql.Request(conn);

  //             request.input('ClientID', sql.Int, ClientID);
  //             request.input('AccountNum', sql.VarChar(50), AccountNum);
  //             request.input('Contact', sql.VarChar(50), Contact);
  //             request.input('Company', sql.VarChar(70), Company);
  //             request.input('Address', sql.VarChar(50), Address);
  //             request.input('Address2', sql.VarChar(50), Address2);
  //             request.input('City', sql.VarChar(35), City);
  //             request.input('State', sql.VarChar(10), State);
  //             request.input('zip', sql.VarChar(25), zip);
  //             request.input('Phone', sql.VarChar(50), Phone);
  //             request.input('Ext', sql.VarChar(30), Ext);
  //             request.input('Cell1', sql.VarChar(30), Cell1);
  //             request.input('Fax', sql.VarChar(30), Fax);
  //             request.input('Email', sql.VarChar(200), Email);
  //             request.input('LocationID', sql.VarChar(25), LocationID);
  //             request.input('SiteType', sql.VarChar(50), SiteType);
  //             request.input('SiteUse', sql.VarChar(50), SiteUse);
  //             request.input('TestMonth', sql.VarChar(2), TestMonth);
  //             request.input('TestDay', sql.VarChar(2), TestDay);
  //             request.input('SurveyDue', sql.Date, SurveyDue);
  //             request.input('SurveyDue2', sql.Date, SurveyDue2);
  //             request.input('SurveyFreq', sql.VarChar(3), SurveyFreq);
  //             request.input('CityLimits', sql.Bit, CityLimits);
  //             request.input('UDF1', sql.VarChar(25), UDF1);
  //             request.input('UDF2', sql.VarChar(25), UDF2);
  //             request.input('UDF3', sql.VarChar(50), UDF3);
  //             request.input('UDF4', sql.VarChar(10), UDF4);
  //             request.input('UDF5', sql.VarChar(25), UDF5);
  //             request.input('UDF6', sql.Date, UDF6);
  //             request.input('UDF7', sql.VarChar(10), UDF7);
  //             request.input('UDF8', sql.VarChar(25), UDF8);
  //             request.input('UDF9', sql.Date, UDF9);
  //             request.input('UDF10', sql.VarChar(10), UDF10);
  //             request.input('UDF11', sql.VarChar(25), UDF11);
  //             request.input('UDF12', sql.Date, UDF12);
  //             request.input('UDF13', sql.VarChar(10), UDF13);
  //             request.input('UDF14', sql.VarChar(25), UDF14);
  //             request.input('UDF15', sql.Date, UDF15);
  //             request.input('UDF16', sql.VarChar(10), UDF16);
  //             request.input('UDF17', sql.VarChar(25), UDF17);
  //             request.input('UDF18', sql.Date, UDF18);
  //             request.input('UDF19', sql.VarChar(10), UDF19);
  //             request.input('UDF20', sql.VarChar(25), UDF20);
  //             request.input('UDF21', sql.Date, UDF21);
  //             request.input('UDF22', sql.VarChar(100), UDF22);

  //             request.execute('sp_ImportExcelSite').then(function (err, recordsets, returnValue, affected) {
  //               if (err.returnValue != null || err.returnValue != undefined) {
  //                 newsiteid = err.returnValue;
  //                 addhazard(siteArray[i], newsiteid);
  //                 queryNextItem(i + 1);
  //               }
  //               sql.close();
  //             }).catch(function (err) {
  //               notInserted.push({ error: err });
  //               sql.close();
  //               queryNextItem(i + 1);
  //             });
  //           });
  //         }
  //       }
  //       function addhazard(data, siteid) {
  //         var SiteID = siteid;
  //         var hAccountNum = data.hAccountNum;
  //         if (hAccountNum == undefined) {
  //           hAccountNum = null;
  //         }
  //         var hSerialNum = data.hSerialNum;
  //         if (hSerialNum == undefined) {
  //           hSerialNum = null;
  //         }
  //         var hMFG = data.hMFG;
  //         if (hMFG == undefined) {
  //           hMFG = null;
  //         }
  //         var hModel = data.hModel;
  //         if (hModel == undefined) {
  //           hModel = null;
  //         }
  //         var hType = data.hType;
  //         if (hType == undefined) {
  //           hType = null;
  //         }
  //         var hdevSize = data.hdevSize;
  //         if (hdevSize == undefined) {
  //           hdevSize = null;
  //         }
  //         var hMeter = data.hMeter;
  //         if (hMeter == undefined) {
  //           hMeter = null;
  //         }
  //         var hHazardCat = data.hHazardCat;
  //         if (hHazardCat == undefined) {
  //           hHazardCat = null;
  //         }
  //         var hLineSize = data.hLineSize;
  //         if (hLineSize == undefined) {
  //           hLineSize = null;
  //         }
  //         var hLocation = data.hLocation;
  //         if (hLocation == undefined) {
  //           hLocation = null;
  //         }
  //         var hLocation2 = data.hLocation2;
  //         if (hLocation2 == undefined) {
  //           hLocation2 = null;
  //         }
  //         var hRecommend = data.hRecommend;
  //         if (hRecommend == undefined) {
  //           hRecommend = null;
  //         }
  //         var hUDH1 = data.hUDH1;
  //         if (hUDH1 == undefined) {
  //           hUDH1 = null;
  //         }
  //         var hUDH2 = data.hUDH2;
  //         if (hUDH2 == undefined) {
  //           hUDH2 = null;
  //         }
  //         var hUDH3 = data.hUDH3;
  //         if (hUDH3 == undefined) {
  //           hUDH3 = null;
  //         }
  //         var hUDH4 = data.hUDH4;
  //         if (hUDH4 == undefined) {
  //           hUDH4 = null;
  //         }
  //         var hUDH5 = data.hUDH5;
  //         if (hUDH5 == undefined) {
  //           hUDH5 = null;
  //         }
  //         var hUDH6 = data.hUDH6;
  //         if (hUDH6 == undefined) {
  //           hUDH6 = null;
  //         }
  //         var hUDH7 = data.hUDH7;
  //         if (hUDH7 == undefined) {
  //           hUDH7 = null;
  //         }
  //         var hUDH8 = data.hUDH8;
  //         if (hUDH8 == undefined) {
  //           hUDH8 = null;
  //         }
  //         var hUDH9 = data.hUDH9;
  //         if (hUDH9 == undefined) {
  //           hUDH9 = null;
  //         }
  //         var hUDH10 = data.hUDH10;
  //         if (hUDH10 == undefined) {
  //           hUDH10 = null;
  //         }
  //         var hUDH11 = data.hUDH11;
  //         if (hUDH11 == undefined) {
  //           hUDH11 = null;
  //         }
  //         var hTestDue = data.hTestDue;
  //         if (hTestDue == undefined) {
  //           hTestDue = null;
  //         }
  //         var hInstallDue = data.hInstallDue;
  //         if (hInstallDue == undefined) {
  //           hInstallDue = null;
  //         }
  //         var conn1 = new sql.ConnectionPool(config);
  //         conn1.connect().then(function (conn1) {
  //           var request1 = new sql.Request(conn1);
  //           request1.input('hSiteID', sql.VarChar(50), SiteID);
  //           request1.input('hAccountNum', sql.VarChar(25), hAccountNum);
  //           request1.input('hSerialNum', sql.VarChar(25), hSerialNum);
  //           request1.input('hMFG', sql.VarChar(25), hMFG);
  //           request1.input('hModel', sql.VarChar(25), hModel);
  //           request1.input('hType', sql.VarChar(25), hType);
  //           request1.input('hdevSize', sql.VarChar(25), hdevSize);
  //           request1.input('hMeter', sql.VarChar(25), hMeter);
  //           request1.input('hHazardCat', sql.VarChar(50), hHazardCat);
  //           request1.input('hLineSize', sql.VarChar(25), hLineSize);
  //           request1.input('hLocation', sql.VarChar(80), hLocation);
  //           request1.input('hLocation2', sql.VarChar(80), hLocation2);
  //           request1.input('hRecommend', sql.VarChar(1000), hRecommend);
  //           request1.input('hUDH1', sql.VarChar(25), hUDH1);
  //           request1.input('hUDH2', sql.VarChar(25), hUDH2);
  //           request1.input('hUDH3', sql.VarChar(25), hUDH3);
  //           request1.input('hUDH4', sql.VarChar(25), hUDH4);
  //           request1.input('hUDH5', sql.VarChar(25), hUDH5);
  //           request1.input('hUDH6', sql.VarChar(80), hUDH6);
  //           request1.input('hUDH7', sql.VarChar(25), hUDH7);
  //           request1.input('hUDH8', sql.VarChar(25), hUDH8);
  //           request1.input('hUDH9', sql.VarChar(25), hUDH9);
  //           request1.input('hUDH10', sql.VarChar(25), hUDH10);
  //           request1.input('hUDH11', sql.Date, hUDH11);
  //           request1.input('hTestDue', sql.Date, hTestDue);
  //           request1.input('hInstallDue', sql.Date, hInstallDue);

  //           request1.execute('sp_ImportExcelHazard').then(function (err, recordsets, returnValue, affected) {
  //             console.log(err.returnValue);
  //             if (err.returnValue != null || err.returnValue != undefined) {
  //               var HazId = err.returnValue;
  //             }
  //             sql.close();
  //             addmail(data, siteid, HazId);
  //           }).catch(function (err) {
  //             notInserted.push({ error: err });
  //             sql.close();
  //             //queryNextItem(i + 1);
  //           });
  //         });
  //       }
  //       function addmail(data, siteid, HazId) {
  //         var MSiteId = siteid;
  //         var MHazId = HazId;
  //         var MCompany = data.MCompany;
  //         if (MCompany == undefined) {
  //           MCompany = null;
  //         }
  //         var MContact = data.MContact;
  //         if (MContact == undefined) {
  //           MContact = null;
  //         }
  //         var MAddress = data.MAddress;
  //         if (MAddress == undefined) {
  //           MAddress = null;
  //         }
  //         var MAddress2 = data.MAddress2;
  //         if (MAddress2 == undefined) {
  //           MAddress2 = null;
  //         }
  //         var MCity = data.MCity;
  //         if (MCity == undefined) {
  //           MCity = null;
  //         }
  //         var MState = data.MState;
  //         if (MState == undefined) {
  //           MState = null;
  //         }
  //         var Mzip = data.Mzip;
  //         if (Mzip == undefined) {
  //           Mzip = null;
  //         }
  //         var MPhone = data.MPhone;
  //         if (MPhone == undefined) {
  //           MPhone = null;
  //         }
  //         var MEmail = data.MEmail;
  //         if (MEmail == undefined) {
  //           MEmail = null;
  //         }
  //         var conn2 = new sql.ConnectionPool(config);
  //         conn2.connect().then(function (conn2) {
  //           var request2 = new sql.Request(conn2);
  //           request2.input('MSiteId', sql.VarChar(70), MSiteId);
  //           request2.input('MHazid', sql.VarChar(70), MHazId);
  //           request2.input('MCompany', sql.VarChar(70), MCompany);
  //           request2.input('MContact', sql.VarChar(50), MContact);
  //           request2.input('MAddress', sql.VarChar(70), MAddress);
  //           request2.input('MAddress2', sql.VarChar(70), MAddress2);
  //           request2.input('MCity', sql.VarChar(35), MCity);
  //           request2.input('MState', sql.VarChar(10), MState);
  //           request2.input('Mzip', sql.VarChar(25), Mzip);
  //           request2.input('MPhone', sql.VarChar(50), MPhone);
  //           request2.input('MEmail', sql.VarChar(200), MEmail);

  //           request2.execute('sp_ImportExcelMail').then(function (err, recordsets, returnValue, affected) {
  //             inserted.push('1');
  //             sql.close();
  //           }).catch(function (err) {
  //             notInserted.push({ error: err });
  //             sql.close();
  //           });
  //         });
  //       }
  //     }
  //   }
  // });





  app.post(appConstants.HAZARD_EXCEL_IMPORT, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var hazardArray = req.body["data"];
        var inserted = [];
        var notInserted = [];
        queryNextItem(0);
        function queryNextItem(i) {
          if (i >= hazardArray.length) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json({ success: inserted, error: notInserted });
          } else {
            var haz = hazardArray[i];
            var cols = Object.keys(haz);
            var columns = '';
            var values = '';
            for (var j = 0; j < cols.length; j++) {
              var col = cols[j];
              columns += col + ",";
              values += "'" + haz[col] + "',";
            }
            columns = columns.substr(0, columns.length - 1);
            values = values.substr(0, values.length - 1);
            var insertQuery = "insert into Hazards (" + columns + ") values (" + values + ")";
            new sql.ConnectionPool(config).connect().then(pool => {
              return pool.request().query(insertQuery)
            }).then(result => {
              inserted.push(values);
              sql.close();
              queryNextItem(i + 1);
            }).catch(err => {
              notInserted.push({ values: values, error: err });
              sql.close();
              queryNextItem(i + 1);
            });
          }

        }




        // for (var i = 0; i < siteArray.length; i++) {
        // if (i === siteArray.length - 1) {
        //   res.setHeader('Access-Control-Allow-Origin', '*');
        //   res.status(200).json({ success: inserted, error: notInserted });
        // }
        // }
      }
    });

  });


  function GetFormattedDate(testdate) {
    var todayTime = new Date(testdate);
    var month = (todayTime.getMonth() + 1);
    var day = (todayTime.getDate());
    var year = (todayTime.getFullYear());
    return month + "/" + day + "/" + year;
  }

  app.get(appConstants.SITE_SITES_DETAIL, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        // connect to your database
        sitesdetailQuery = "select  siteid,sitetype,siteuse,contact,company,address,clientid as  PremiseID,city ,state ,zip,phone,email from sites where SiteId=" + req.params.id;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sitesdetailQuery)
        }).then(result => {
          let sites = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(sites);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.SITE_SITES_HAZRDS_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        // connect to your database
        sitehazardsQuery = "select HazID as HazardID,SerialNum as SerialNo,CONVERT(VARCHAR(10), InstalledDate, 101) as InstalledDate,Installed as DeviceStatus from Hazards where siteId=" + req.params.id;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sitehazardsQuery)
        }).then(result => {
          let sites = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(sites);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.SITE_SEARCH_SITE, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        sitesQuery = "select top 20 SiteId as ClientId,Company as ClientName from sites where   DATALENGTH(Company) > 0  and   address like '%" + req.params.id + "%'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sitesQuery)
        }).then(result => {
          let sites = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(sites);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.SITE_SITES_HAZRDS__TEST_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        sitehaztestQuery = "select distinct(dt.testId) as TestID,d.clientId,s.siteId,h.HazId, dt.iTestBy, dt.iCompany,CONVERT(date, dt.idate, 101) as InitialDate,CONVERT(date, dt.fDate, 101) as FinalDate,h.status as TestStatus, dt.datestamp as DateSubmitted, CASE WHEN dt.FPass = '1' THEN 'PASS' WHEN dt.FPass = '0' THEN 'FAIL' WHEN dt.FPass = 'PASS' THEN 'PASS' WHEN dt.FPass = 'FAIL' THEN 'FAIL' WHEN dt.IPass = '1' THEN 'PASS' WHEN dt.IPass = '0' THEN 'FAIL' WHEN dt.IPass = 'PASS' THEN 'PASS' WHEN dt.IPass = 'FAIL' THEN 'FAIL'  ELSE NULL  END AS 'TESTOUTCOME', CASE WHEN dt.FDATE is not null THEN dt.F1AIPSI ELSE dt.I1AIPSI END as CV1, CASE WHEN dt.FDATE is not null THEN dt.F2CvPsi ELSE dt.I2CvPsi END as CV2, CASE WHEN dt.FDATE is not null THEN dt.FrPsi ELSE dt.IrPsi END as RV from dataset d inner join sites s on s.clientId=d.clientid inner join hazards h on h.siteId=s.siteId inner join devtests dt on dt.hazId=h.hazid where s.siteId=" + req.params.siteid + " and h.HazID=" + req.params.hazid + "  order by InitialDate desc";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sitehaztestQuery)
        }).then(result => {
          let tests = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(tests);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });


  app.get(appConstants.SITE_SITES_TREE_LIST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        sitestreequery = "select d.clientId,s.siteId,h.HazId,t.testerId as TesterID, (dt.testId) as TestID, CONVERT(VARCHAR(10), h.InstalledDate, 101) as InstalledDate,h.status as TestStatus from dataset d inner join sites s on s.clientId=d.clientid inner join hazards h on h.siteId=s.siteId inner join devtests dt on dt.hazId=h.hazid inner join TesterDataSet td on td.datasetId=d.clientid inner join technicians t on t.testerid=td.testerid where d.ClientID=" + req.params.id + "  and dt.itestbyID=t.testerID order by dt.testId";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sitestreequery)
        }).then(result => {
          let sitestree = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          var arr = sitestree;
          var test1 = groupArray(arr, 'siteId', 'HazId', 'TestID');
          res.status(200).json(test1);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.SITE_SITES_UPDATE_GET, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        updateSites(req, res);
        //res.send('site updated');
      }
    });
  });


  // app.post(appConstants.SITE_SITES_MAIL_UPDATE_GET, function (req, res) {
  //   var sitedata = req.body["data"];
  //   var siteId = sitedata.siteId;
  //   var company = sitedata.m_company;
  //   var address = sitedata.m_address;
  //   var address2 = sitedata.m_address2;
  //   var city = sitedata.m_city;
  //   var state = sitedata.m_state;
  //   var postalcode = sitedata.m_zip;
  //   var phonenumber = sitedata.m_phone;
  //   var email = sitedata.m_email;
  //   var contact = sitedata.m_contact;

  //   var conn = new sql.ConnectionPool(config);
  //   conn.connect().then(function (conn) {
  //     var request = new sql.Request(conn);
  //     request.input('siteId', sql.Int, siteId);
  //     request.input('company', sql.VarChar(30), company);
  //     request.input('address', sql.VarChar(50), address);
  //     request.input('address2', sql.VarChar(50), address2);
  //     request.input('city', sql.VarChar(35), city);
  //     request.input('state', sql.VarChar(10), state);
  //     request.input('zip', sql.VarChar(10), postalcode);
  //     request.input('phone', sql.VarChar(30), phonenumber);
  //     request.input('email', sql.VarChar(30), email);
  //     request.input('contact', sql.VarChar(30), contact);

  //     request.execute('sp_updateSiteMail').then(function (err, recordsets, returnValue, affected) {
  //       res.send(returnValue);
  //       console.dir(err);
  //     }).catch(function (err) {
  //       console.log(err);
  //     });
  //   });
  // });
  app.post(appConstants.SITE_SITES_MAIL_UPDATE_GET, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var sitedata = req.body["data"];
        var addressId = req.params.id;
        var contact = sitedata.m_contact;
        var company = sitedata.m_company;
        var address = sitedata.m_address;
        var city = sitedata.m_city;
        var state = sitedata.m_state;
        var postalcode = sitedata.m_zip;
        var phonenumber = sitedata.m_phone;
        var email = sitedata.m_email;
        if (email == null) {
          email = ''
        }

        var sitesdetailQuery1 = "update Addresses SET MCompany='" + company + "', MContact='" + contact +"', MAddress='" + address + "', MCity='" + city + "', MState='" + state + "',"
          + " Mzip='" + postalcode + "', Phone='" + phonenumber + "', Email='" + email + "'"
          + " where AddressID=" + addressId;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sitesdetailQuery1)
        }).then(result => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json({ status: 'success' });
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.SITE_SITES_MAIL_NEW, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var sitedata = req.body["data"];
        var siteId = req.params.id;
        var contact = sitedata.m_contact;
        var company = sitedata.m_company;
        var address = sitedata.m_address;
        var city = sitedata.m_city;
        var state = sitedata.m_state;
        var postalcode = sitedata.m_zip;
        var phonenumber = sitedata.m_phone;
        var email = sitedata.m_email;
        var addressType = sitedata.m_address_type;
        // var table_data =  { Company:company, Address:address, City:city, State:state, zip:postalcode, Phone:phonenumber, Email:email};
        var sqlQuery = "INSERT INTO Addresses(MCompany,MContact, MAddress, MCity, MState, Mzip, Phone, Email) values ('" + company + "', '" + contact + "', '" + address + "', '" + city + "', '" + state + "', '" + postalcode + "', '" + phonenumber + "', '" + email + "') SELECT SCOPE_IDENTITY() as id";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(sqlQuery, function (err, result) {
            if (err) {
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.status(500).send(err);
              sql.close();
            } else {
              var addressId = result.recordset[0].id;
              sql.close();
              var sqlQuery2 = "insert into SiteMailing(SiteID, AddressID, SendNotices, AddressType, UID, HazID) values (" + siteId + ", " + addressId + ", 1, '" + addressType + "', 'Link', -1);";
              new sql.ConnectionPool(config).connect().then(pool => {
                return pool.request().query(sqlQuery2, function (err, result) {
                  if (err) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.status(500).send(err);
                    sql.close();
                  } else {
                    res.status(200).send({ status: 'success' });
                    sql.close();
                  }
                });
              });

            }
          });
        });

      }
    });
  });




  var updateSites = function (req, res) {
    var sitedata = req.body["data"];
    var accountNum = sitedata.accountNum;
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
    var latitude = sitedata.latitude;
    if (latitude == '') latitude = null;
    var longitude = sitedata.longitude;
    if (longitude == '') longitude = null;


    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function (conn) {
      var request = new sql.Request(conn);
      request.input('siteId', sql.Int, siteId);
      request.input('clientId', sql.Int, companyId);
      request.input('accountNum', sql.Int, accountNum);
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
      request.input('latitude', sql.Float, latitude);
      request.input('longitude', sql.Float, longitude);

      request.execute('sp_updateSite').then(function (err, recordsets, returnValue, affected) {
        let sites = err.recordset;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(sites);
        sql.close();
      }).catch(function (err) {
        res.status(500).send({ message: err })
        sql.close();
      });
    });
  }

  app.post(appConstants.SITE_SITES_CREATE_POST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var sitedata = req.body["data"];

        var clientId = sitedata.clientId;
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
        var latitude = sitedata.latitude;
        if (latitude == '') latitude = null;
        var longitude = sitedata.longitude;
        if (longitude == '') longitude = null;



        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
          var request = new sql.Request(conn);
          request.input('clientId', sql.Int, clientId);
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
          request.input('latitude', sql.Float, latitude);
          request.input('longitude', sql.Float, longitude);

          request.execute('sp_CreateSite').then(function (result, err, recordsets, recordset, returnValue, affected) {
            let sites = result.recordset;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json(sites);
            sql.close();
          }).catch(function (err) {
            res.status(500).send({ message: err })
            sql.close();
          });
        });

      }
    });
  });

  app.post(appConstants.SITE_AUTHENTICATE_USER, function (req, res) {
    var userdata = req.body["data"];
    var userid = userdata.email;
    var pwd = userdata.password;
    
    var logquery = "select TesterID, TesterUserID as Logon,Contact as FullName,WebTestTester  from Technicians where TesterUserID='" + userid + "' and Password='" + pwd + "'";
    
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(logquery)
    }).then(result => {
      let user = result.recordset;
      let uid = user[0].UserID;
      const token = jwt.sign({ uid }, 'Secretkey');
      
      user[1] = token;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(user);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
    });
  });

  app.post(appConstants.SITE_AUTHENTICATE_ADMINUSER, function (req, res) {
    var userdata = req.body["data"];
    var userid = userdata.email;
    var pwd = userdata.password;
    var hashedPassword = sha1(pwd);
    
    var logquery = "select * from Users where Logon='" + userid + "' and Password='" + hashedPassword + "'";
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(logquery)
    }).then(result => {
      let user = result.recordset;
      let uid = user[0].UserID;
      const token = jwt.sign({ uid }, 'Secretkey');
      
      user[1] = token;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(user);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: err })
      sql.close();
    });
  });


  app.post(appConstants.USER_PASSWORD_UPDATE, function (req, res) {
    var userdata = req.body["data"];
    var hashedPassword = sha1(userdata.password);
    var logquery = "UPDATE Users SET Password='" + hashedPassword + "' where Logon='" + userdata.email + "'";
    new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query(logquery)
    }).then(result => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).send({ status: true, message: "Password Updated Successfully!" });
      sql.close();
    }).catch(err => {
      res.status(500).send({ status: false, message: "${err}" })
      sql.close();
    });
  });

  app.get(appConstants.GET_DATASET, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        getdatasetquery = "select ClientID,ClientName from DataSet";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(getdatasetquery)
        }).then(result => {
          let tests = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(tests);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.GET_SITEHAZARD_Details, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var searchCriteria = req.body["criteria"];
        var sitedata = req.body["data"];
        var query;
        var dataSetId = sitedata.datasetId;
        switch (searchCriteria) {
          // case 'ALLWithDatasetId':
          //   query = "select * from sites where ";
          //   if (dataSetId !== null) {
          //     if (dataSetId == 0) {
          //       query = query + " 0 = " + dataSetId;
          //     } else {
          //       query = query + " 0 =" + dataSetId;
          //     }
          //   }
          //   break;
          case 'DatasetWithCustomer':
            //query = "select * from sites where";
            query = "select s.*,a.MCompany,a.MAddress,a.MCity,a.MState,a.MZip,a.Phone as MPhone,a.Email as MEmail from sites s join SiteMailing sm on sm.SiteID=s.SiteID join Addresses a on sm.AddressID=a.AddressID where";
            if (dataSetId !== null) {
              if (dataSetId == 0) {
                query = query + " 0 = " + dataSetId;
              } else {
                query = query + " s.clientId =" + dataSetId;
              }
            }
            if (sitedata.customerNumber !== null && sitedata.customerNumber !== '') {
              query = query + " and s.AccountNum = '" + sitedata.customerNumber + "'";
            }
            break;
          case 'DatasetWithSerialNumber':
            //query = "select s.* from sites s inner join Hazards h on s.siteId=h.siteid where";
            query = "select s.*,a.MCompany,a.MAddress,a.MCity,a.MState,a.MZip,a.Phone as MPhone,a.Email as MEmail from sites s join Hazards h on s.siteId=h.siteid join SiteMailing sm on sm.SiteID=h.SiteID join Addresses a on sm.AddressID=a.AddressID where";
            if (dataSetId !== null) {
              if (dataSetId == 0) {
                query = query + " 0 = " + dataSetId;
              } else {
                query = query + " s.clientId =" + dataSetId;
              }
            }
            if (sitedata.serialNumber !== null && sitedata.serialNumber !== '') {
              query = query + " and h.SerialNum = '" + sitedata.serialNumber + "'";
            }
            break;
          case 'DatasetWithHarzarId':
            //query = "select s.* from sites s inner join Hazards h on s.siteId=h.siteid where";
            query = "select s.*,a.MCompany,a.MAddress,a.MCity,a.MState,a.MZip,a.Phone as MPhone,a.Email as MEmail from sites s join Hazards h on s.siteId=h.siteid join SiteMailing sm on sm.SiteID=h.SiteID join Addresses a on sm.AddressID=a.AddressID where";
            if (dataSetId !== null) {
              if (dataSetId == 0) {
                query = query + " 0 = " + dataSetId;
              } else {
                query = query + " s.clientId =" + dataSetId;
              }
            }
            if (sitedata.hazardId !== null && sitedata.hazardId !== '') {
              query = query + " and h.HazID = " + sitedata.hazardId;
            }
            break;
          default:
            res.status(500).send("invalid criteria");
            break;
        };
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(query)
        }).then(result => {
          let details = {
            siteInformation: {},
            hazardList: []
          }

          details.siteInformation = result.recordset[0];
          gethazardquery = "select * from Hazards where SiteID=" + result.recordset[0].SiteID;
          new sql.ConnectionPool(config).connect().then(pool => {
            return pool.request().query(gethazardquery)
          }).then(result1 => {
            details.hazardList = result1.recordset;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).json(details);
            sql.close();
          });
        }).catch(err => {
          res.status(500).send({ message: err })
          sql.close();
        });

      }
    });
  });

  // app.get(appConstants.GET_SITEHAZARD_Details, function (req, res) {

  //   getsitequery = "select * from Sites where ClientID = " + req.params.clientid + " and AccountNum= '" + req.params.accountnum + "'";

  //   new sql.ConnectionPool(config).connect().then(pool => {
  //     return pool.request().query(getsitequery)
  //   }).then(result => {
  //     let details = {
  //       siteInformation: {},
  //       hazardList: []
  //     }

  //     details.siteInformation = result.recordset[0];

  //     gethazardquery = "select * from Hazards where SiteID=" + result.recordset[0].SiteID;
  //     new sql.ConnectionPool(config).connect().then(pool => {
  //       return pool.request().query(gethazardquery)
  //     }).then(result1 => {
  //       details.hazardList = result1.recordset;
  //       res.setHeader('Access-Control-Allow-Origin', '*');
  //       res.status(200).json(details);
  //       sql.close();
  //     });

  //   }).catch(err => {
  //     res.status(500).send({ message: "${err}" })
  //     sql.close();
  //   });
  // });

  app.get(appConstants.GET_HAZARD_Details, ensuretoken, function (req, res) {

    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        gethazardquery = "select * from Hazards where HazID= " + req.params.hazardid;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(gethazardquery)
        }).then(result1 => {
          let hazardList = result1.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(hazardList);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    })
  });


  app.get(appConstants.GET_DEVTEST, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        gethazardquery = "select * from DevTests where HazID=" + req.params.hazardid;
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(gethazardquery)
        }).then(result => {
          let tests = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(tests);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.SITE_MOVEGROUPDATASET, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var cond = req.params.cond;
        var table = req.params.table;
        var dataset = req.params.dataset;
        filterquery = "sp_MultipleGroupUpdate '" + table + "', '" + cond + "', '" + dataset + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(filterquery)
        }).then(result => {
          let user = result.rowsAffected;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(user);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.post(appConstants.GET_ADVANCEFILTER_DATA, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        var data = req.body["data"];
        filterquery = "sp_GetAdvanceFilterData '" + data.filterString + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(filterquery)
        }).then(result => {
          let user = result.recordset;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(user);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
          sql.close();
        });
      }
    });
  });

  app.get(appConstants.GET_DYNAMIC_DATA, ensuretoken, function (req, res) {
    jwt.verify(req.token, 'Secretkey', function (err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        //:updatetable/:updatestring/:conditionstring",
        filterquery = "sp_DynamicUpdate '" + req.params.updatetable + "','" + req.params.updatestring + "','" + req.params.conditionstring + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
          return pool.request().query(filterquery)
        }).then(result => {
          let dataset = result.rowsAffected;
          res.setHeader('Access-Control-Allow-Origin', '*');
          //res.send('Group Updated');
          res.status(200).json(dataset);
          sql.close();
        }).catch(err => {
          res.status(500).send({ message: "${err}" })
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