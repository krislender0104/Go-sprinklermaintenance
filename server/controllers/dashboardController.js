var sql = require('mssql');
var jwt = require('jsonwebtoken');
var NodeGeocoder = require('node-geocoder');

var options = {
    provider: 'google',

    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'AIzaSyBhDFV2aHjt3TCuquYVugJnDwVHGwvmk7c', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

module.exports = function (app, express, cron, dbConfig, config, appConstants) {
    // cron.schedule('0 1 * * *', function () {
        
    //     var today = new Date();
    //     var date = today.getFullYear()+'_'+(today.getMonth()+1)+'_'+today.getDate();
      
    //           // connect to your database
    //           sitesdetailQuery = "BACKUP DATABASE [sprinkler ] TO  DISK = N'D:/3RD_Tokay_backup/3rdTokay_"+ date +".bak' WITH NOFORMAT, NOINIT,  NAME = N'sprinkler -Full Database Backup', SKIP, NOREWIND, NOUNLOAD,  STATS = 10";
    //           new sql.ConnectionPool(config).connect().then(pool => {
    //             return pool.request().query(sitesdetailQuery)
    //           }).then(result => {
               
    //             sql.close();
    //           }).catch(err => {
               
    //             sql.close();
    //           });
            
          
    // });
    app.get(appConstants.GET_DASHBOARDDATA, ensuretoken, function (req, res) {
        jwt.verify(req.token, 'Secretkey', function (err, data) {
            if (err) {
                res.sendStatus(403);
            } else {
                var getdashboardQuery = "Exec sp_LoadDashboard";
                new sql.ConnectionPool(config).connect().then(pool => {
                    return pool.request().query(getdashboardQuery)
                }).then(result => {
                    var data = result.recordsets[0];
                    var mainchartdata = result.recordsets[1];
                    var donutChartData = result.recordsets[2];
                    var testStatusData = result.recordsets[3];
                    var detailchartData = result.recordsets[4];
                    var data_commercial = result.recordsets[5];
                    var progressChartData = result.recordsets[6];
                    let datasets = {
                        'widget1': {
                            'title': data[0].Title,
                            'data': {
                                'label': data[0].Label,
                                'count': data[0].Count
                            },
                            'detail': 'You can show some detailed information about this widget 1 in here.'
                        },
                        'widget2': {
                            'title': data[1].Title,
                            'data': {
                                'label': data[1].Label,
                                'count': data[1].Count
                            },
                            'detail': 'You can show some detailed information about this widget 2 in here.'
                        },
                        'widget3': {
                            'title': data[2].Title,
                            'data': {
                                'label': data[2].Label,
                                'count': data[2].Count
                            },
                            'detail': 'You can show some detailed information about this widget 3 in here.'
                        },
                        'widget4': {
                            'title': data[3].Title,
                            'data': {
                                'label': data[3].Label,
                                'count': data[3].Count
                            },
                            'detail': 'You can show some detailed information about this widget 4 in here.'
                        },
                        'widget5': {
                            'title': data[4].Title,
                            'data': {
                                'label': data[4].Label,
                                'count': data[4].Count
                            },
                            'detail': 'You can show some detailed information about this widget 5 in here.'
                        },
                        
                        'widget6': {
                            'title': data[5].Title,
                            'data': {
                                'label': data[5].Label,
                                'count': data[5].Count
                            },
                            'detail': 'You can show some detailed information about this widget 6 in here.'
                        },
                        'mainChart': [],
                        'donutchart': [],
                        'testStatus': [],
                        'detailCharts': [],
                        'progressCharts': [],
                        'commercial_widget1': {
                            'title': data_commercial[0].Title,
                            'count': {
                                'first': data_commercial[0].FirstYear,
                                'second': data_commercial[0].SecondYear,
                                'third': data_commercial[0].ThirdYear

                            }
                        },
                        'commercial_widget2': {
                            'title': data_commercial[1].Title,
                            'count': {
                                'first': data_commercial[1].FirstYear,
                                'second': data_commercial[1].SecondYear,
                                'third': data_commercial[1].ThirdYear

                            }
                        },
                        'commercial_widget3': {
                            'title': data_commercial[2].Title,
                            'count': {
                                'first': data_commercial[2].FirstYear,
                                'second': data_commercial[2].SecondYear,
                                'third': data_commercial[2].ThirdYear

                            }
                        },
                        'commercial_widget4': {
                            'title': data_commercial[3].Title,
                            'count': {
                                'first': data_commercial[3].FirstYear,
                                'second': data_commercial[3].SecondYear,
                                'third': data_commercial[3].ThirdYear

                            }
                        },
                        'commercial_widget5': {
                            'title': data_commercial[4].Title,
                            'count': {
                                'first': data_commercial[4].FirstYear,
                                'second': data_commercial[4].SecondYear,
                                'third': data_commercial[4].ThirdYear

                            }
                        },
                        'commercial_widget6': {
                            'title': data_commercial[5].Title,
                            'count': {
                                'first': data_commercial[5].FirstYear,
                                'second': data_commercial[5].SecondYear,
                                'third': data_commercial[5].ThirdYear

                            }
                        },
                    }
                    mainchartdata.forEach(element => {
                        datasets.mainChart.push(
                            {
                                'name': element.Names,
                                'series': [
                                    {
                                        'name': element.Issues,
                                        'value': element.Value

                                    }]
                            })


                    });
                    progressChartData.forEach(element => {
                        datasets.progressCharts.push({
                            'name': element.Name,
                            'value':element.Value

                        })
                    });
                    donutChartData.forEach(element => {
                        datasets.donutchart.push(
                            {
                                'name': element.Name,
                                'value': element.Value

                            });


                    });
                    
                    testStatusData.forEach(element => {
                        datasets.testStatus.push(
                            {
                                'name': element.Name,
                                'value': element.Value

                            });


                    });
                    detailchartData.forEach(element => {
                        datasets.detailCharts.push(
                            {
                                'label': element.Name,
                                'count': {
                                    '2W': element.Last2Week,
                                    'LW': element.LastWeek,
                                    'TW': element.ThisWeek
                                }
                            });


                    });

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

    app.get(appConstants.GET_DASHBOARDDATA_2, ensuretoken, function (req, res) {
        jwt.verify(req.token, 'Secretkey', function (err, data) {
            if (err) {
                res.sendStatus(403);
            } else {
                var ClientId = req.params.Id;
                var getdashboard2Query = "Exec sp_LoadDashboard2 '" + ClientId+"'";
                console.log(getdashboard2Query);
                new sql.ConnectionPool(config).connect().then(pool => {
                    return pool.request().query(getdashboard2Query)
                }).then(result => {
                    var data = result.recordsets[0];

                    // let datasets = {
                    //     'widget1': {
                    //         'title': data[0].Title,
                    //         'data': {
                    //             'count': data[0].Count
                    //         }
                    //     },
                    //     'widget2': {
                    //         'title': data[1].Title,
                    //         'data': {
                    //             'count': data[1].Count
                    //         }
                    //     },
                    //     'widget3': {
                    //         'title': data[2].Title,
                    //         'data': {
                    //             'count': data[2].Count
                    //         }
                    //     },
                    //     'widget4': {
                    //         'title': data[3].Title,
                    //         'data': {
                    //             'count': data[3].Count
                    //         }
                    //     },
                    //     'widget5': {
                    //         'title': data[4].Title,
                    //         'data': {
                    //             'count': data[4].Count
                    //         }
                    //     }
                    // }
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.status(200).json(data);
                    sql.close();
                }).catch(err => {
                    res.status(500).send({ message: err })
                    sql.close();
                });
            }
        });
    });

    app.get(appConstants.GET_TEST_RELATED_DETAILS, ensuretoken, function (req, res) {
        jwt.verify(req.token, 'Secretkey', function (err, data) {
            if (err) {
                res.sendStatus(403);
            } else {
                console.log(req.params.Id);
                var TestId = req.params.Id;
                var getsitedetailsQuery = "Exec sp_GetTestRelatedDetails " + TestId;
                new sql.ConnectionPool(config).connect().then(pool => {
                    return pool.request().query(getsitedetailsQuery)
                }).then(result => {
                    var Site_Haz = result.recordsets[0];
                    var MailAddress = result.recordsets[1];
                    var DevTests = result.recordsets[2];

                    let datasets = {
                        Site_Haz,
                        MailAddress,
                        DevTests
                    }

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

    app.post(appConstants.GET_EXPORT_DETAILS, ensuretoken, function (req, res) {
        jwt.verify(req.token, 'Secretkey', function (err, data) {
            if (err) {
                res.sendStatus(403);
            } else {
                var condition = req.body["condition"];
                var dataset = req.body["datasetId"];
                var getexportQuery = "Exec sp_GetDataForExcel '" + condition + "', '" + dataset +"'";
                console.log(getexportQuery);
                new sql.ConnectionPool(config).connect().then(pool => {
                    return pool.request().query(getexportQuery)
                }).then(result => {
                    var Site_Haz = result.recordset;
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.status(200).json(Site_Haz);
                    sql.close();
                }).catch(err => {
                    res.status(500).send({ message: err })
                    sql.close();
                });
            }
        });
    });

    // app.post(appConstants.GET_GOOGLE_ADDRESS, ensuretoken, function (req, res) {
    //     jwt.verify(req.token, 'Secretkey', function (err, data) {
    //         if (err) {
    //             res.sendStatus(403);
    //         } else {
    //             var limits = req.body["limits"];
    //             console.log(limits);
    //             var getsitedetailsQuery = "Exec sp_GetGoogleDetails '" + limits + "'";
    //             new sql.ConnectionPool(config).connect().then(pool => {
    //                 return pool.request().query(getsitedetailsQuery)
    //             }).then(result => {
    //                 var Site_Address = result.recordsets[0];
    //                 var inserted = [];
    //                 findcoordinates(0);
    //                 function findcoordinates(i) {
    //                     if (i < Site_Address.length) {
    //                         geocoder.geocode(Site_Address[i].Address)
    //                             .then(data => {
    //                                 console.log(data[0].latitude, data[0].longitude);
    //                                 inserted.push({
    //                                     "lat": data[0].latitude,
    //                                     "long": data[0].longitude,
    //                                     "SiteId": Site_Address[i].SiteID,
    //                                     "HazId": Site_Address[i].HazID,
    //                                     "Color": Site_Address[i].Color,
    //                                     "Address": Site_Address[i].Address
    //                                 });
    //                                 findcoordinates(i + 1);
    //                             })
    //                             .catch(err => {
    //                                 console.log(err);
    //                                 findcoordinates(i + 1);
    //                             });
    //                     } else {
    //                         res.setHeader('Access-Control-Allow-Origin', '*');
    //                         res.status(200).json(inserted);
    //                         sql.close();
    //                     }
    //                 }
    //             }).catch(err => {
    //                 res.status(500).send({ message: err })
    //                 sql.close();
    //             });
    //         }
    //     });
    // });

    app.post(appConstants.GET_GOOGLE_ADDRESS, ensuretoken, function (req, res) {
        jwt.verify(req.token, 'Secretkey', function (err, data) {
            if (err) {
                res.sendStatus(403);
            } else {
                var limits1 = req.body["limits"];
                var dataset = req.body["dset"];
                var hazard_type = req.body["hazard_type"];
                
                var limits_0 = "";
                var limits = [];

                if(limits1.length > 1){
                    for(let i = 0; i < limits1.length; i++){
                        if (i != limits1.length-1){
                            limits_0 += limits1[i] + ", ";
                        }else{
                            limits_0 += limits1[i];
                        }
                    }
                    limits.push(limits_0);
                }else{
                    limits = limits1;
                }
                console.log(limits, dataset, hazard_type);

                var getsitedetailsQuery = "Exec sp_GetGoogleDetails '" + limits + "', '" + dataset  + "', '" + hazard_type +"'" ;
                new sql.ConnectionPool(config).connect().then(pool => {
                    return pool.request().query(getsitedetailsQuery)
                }).then(result => {
                    var Site_Address = result.recordsets[0];
                    var inserted = [];
                    for (let index = 0; index < Site_Address.length; index++) {
                        const element = Site_Address[index];
                        inserted.push({
                            "lat": element.Latitude,
                            "long": element.Longitude,
                            "SiteId": element.SiteID,
                            "HazId": element.HazID,
                            "Color": element.Color,
                            "Address": element.Address
                        });
                    }
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.status(200).json(inserted);
                    sql.close();
                }).catch(err => {
                    res.status(500).send({ message: err })
                    sql.close();
                });
            }
        });
    });

    app.post(appConstants.GET_GOOGLE_ADDRESS_FROM_ADDRESS, ensuretoken, function (req, res) {
        jwt.verify(req.token, 'Secretkey', function (err, data) {
            if (err) {
                res.sendStatus(403);
            } else {
                var address = req.body["address"];
                console.log(address);
                var getsitedetailsQuery = "Exec sp_GetGoogleDetailsforaddress '" + address + "'";
                new sql.ConnectionPool(config).connect().then(pool => {
                    return pool.request().query(getsitedetailsQuery)
                }).then(result => {
                    var Site_Address = result.recordsets[0];
                    var inserted = [];
                    for (let index = 0; index < Site_Address.length; index++) {
                        const element = Site_Address[index];
                        inserted.push({
                            "lat": element.Latitude,
                            "long": element.Longitude,
                            "SiteId": element.SiteID,
                            "HazId": element.HazID,
                            "Color": element.Color,
                            "Address": element.Address
                        });
                    }
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.status(200).json(inserted);
                    sql.close();
                }).catch(err => {
                    res.status(500).send({ message: err })
                    sql.close();
                });
            }
        });
    });

    
    app.post(appConstants.GET_GOOGLE_ADDRESS_FROM_GOOGLEAPI, ensuretoken, function (req, res) {
        jwt.verify(req.token, 'Secretkey', function (err, data) {
            if (err) {
                res.sendStatus(403);
            } else {
                var address = req.body["address"];
                console.log(address);
                var inserted = [];
                geocoder.geocode(address).then(data => {
                    console.log(data[0].latitude, data[0].longitude);
                    inserted.push({
                        "lat": data[0].latitude,
                        "long": data[0].longitude,
                        "SiteId": 0,
                        "HazId": 0,
                        "Color": 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                        "Address": address
                    });
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.status(200).json(inserted);
                }).catch(err => {
                    res.status(500).send({ message: err });
                });;
            }
        });
    });

    app.get(appConstants.GET_GETTABLE, ensuretoken, function (req, res) {
        jwt.verify(req.token, 'Secretkey', function (err, data) {
            if (err) {
                res.sendStatus(403);
            } else {
                var getdashboardQuery = "Exec sp_GetTablesForTemplate";
                new sql.ConnectionPool(config).connect().then(pool => {
                    return pool.request().query(getdashboardQuery)
                }).then(result => {
                    var datasets = result.recordset;
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

    app.get(appConstants.GET_GETCOLUMNBYTABLENAME, ensuretoken, function (req, res) {
        jwt.verify(req.token, 'Secretkey', function (err, data) {
            if (err) {
                res.sendStatus(403);
            } else {
                var getdashboardQuery = "Exec sp_GetColumnByColumnName '" + req.params.tablename + "'";
                new sql.ConnectionPool(config).connect().then(pool => {
                    return pool.request().query(getdashboardQuery)
                }).then(result => {
                    var datasets = result.recordset;
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