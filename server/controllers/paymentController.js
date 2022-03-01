var mongoose = require('mongoose');
var sql = require('mssql');
var db = require('../../database/schemas/chat2');
var sha1 = require('sha1');
var jwt = require('jsonwebtoken');

var apikey = 'FARjsbLVqNBg6AAn1u0kmmKJuwzXSNBg';
var apisecret = 'a852c14331aea712dfcb4757e6ca52d2ad84bcdb9fb107226115344248418983';
var merchant_token = 'fdoa-31b6c704ec311cf280b5efc175c2e6457a20d3985eef4ae3';

var payeezy = require('payeezy')(apikey, apisecret, merchant_token);
payeezy.version = "v1";

// Sandbox Environment - Replace this value for Live Environment "api.payeezy.com"
payeezy.host = "api.payeezy.com";

module.exports = function (app, express, dbConfig, config, appConstants) {

    app.post('/payment/pay', ensuretoken,function (req, res) {
      jwt.verify(req.token, 'Secretkey', function (err, data) {
        if (err) {
          res.sendStatus(403);
        } else {
        // This will first execute an Auth followed by a Capture transaction .. followed by
        // Auth followed by Void .. followed by
        // Purchase followed by a Refund transaction
        var data = req.body;
        var cvv = data['CVV'];
        var cardHolderName = data['CardHolderName'];
        var cardNUmber = data['CardNumber'];
        var expriryMonth = data['Expiremonth'];
        var expiryYear = data['Expireyear'];
        var cardType = data['cardType'];
        var test = data['test'];
        var amount = data['amount'];
        payeezy.transaction.authorize({
            method: 'credit_card',
            amount: amount*100,
            currency_code: 'USD',
            credit_card: {
                card_number: cardNUmber,
                cvv: cvv,
                type: cardType,
                exp_date: expriryMonth + expiryYear,
                cardholder_name: cardHolderName
            },
            billing_address: {
                street: '225 Liberty Street',
                city: 'NYC',
                state_province: 'NY',
                zip_postal_code: '10281',
                country: 'US'
            }
        },
            function (error, response) {
                if (error) {
                    res.status(200).send({ status: false, msg: 'Unauthorized Transaction. Please check the card details' })
                    console.log(error.Error);
                }
                if (response) {
                    var auth = response;
                    // res.status(200).send({status: true, msg: 'Authorize Successful.\nTransaction Tag: ' + response.transaction_tag})
                    // console.log('Authorize Successful.\nTransaction Tag: ' + response.transaction_tag);
                    // performSecondaryTransaction(secondaryTransactionType, response.transaction_id, response.transaction_tag, response.amount);
                    payeezy.transaction.purchase({
                        method: 'credit_card',
                        amount: amount*100,
                        currency_code: 'USD',
                        credit_card: {
                            card_number: cardNUmber,
                            cvv: cvv,
                            type: cardType,
                            exp_date: expriryMonth + expiryYear,
                            cardholder_name: cardHolderName
                        },
                        billing_address: {
                            street: '225 Liberty Street',
                            city: 'NYC',
                            state_province: 'NY',
                            zip_postal_code: '10281',
                            country: 'US'
                        }
                    },
                        function (error, response) {
                            if (error) {
                                res.status(200).send({ status: false, msg: 'Transaction Failed\n' + error })
                            }
                            if (response) {
                                response.amount=response.amount/100;
                                var query1 = "update WebTestHistory SET Accepted = GETDATE(), transaction_id = '" + response.transaction_id + "' where test_data_pk = " + test.test_data_pk;
                                new sql.ConnectionPool(config).connect().then(pool => {
                                    return pool.request().query(query1)
                                }).then(result => {
                                    var testbyid = test.testerid;
                                    var SiteID = test.siteid;
                                    var HazID = test.haz_id;
                                    var companyId = test.companyid;
                                    var iPass = test.ipass;
                                    var iDate = test.idate;
                                    var I1Ai = test.i1ai;
                                    var I1AiPsi = test.i1aipsi;
                                    var I2Cv = test.i2cv;
                                    var I2CvPsi = test.i2cvpsi;
                                    var RepairDate = test.repdate;
                                    var Repairtype = test.repairs;
                                    var fPass = test.fpass;
                                    var fDate = test.fdate;
                                    var F1Ai = test.f1ai;
                                    var f1aipsi = test.f1aipsi;
                                    var F2CvPsi = test.f2cvpsi;
                                    var F2Cv = test.f2cv;
                                    var FrPsi = test.f2cvpsi;
                                    var TestKit = test.itestkit;
                                    var clean = test.clean;
                                    var rubber = test.rubber;
                                    var rebuild = test.rebuild;
                                    var proper = test.proper;
                                    var shut2 = test.shut2;
                                    var restore = test.restore;
                                    var backPres = test.backPres;
                                    var linePSI = test.linePSI;
                                    var udt4 = test.udt4;
                                    var irpsi = test.irpsi;
                                    var irp = test.irp;
                                    var datesubmitted = new Date();
                                    var SubmittedBy = 'WebTester';
                                    var feepaid=test.amount;

                                    if (iDate === null || iDate === '' || iDate === undefined || iDate === 'null') {
                                        iDate = null;
                                    }
                                    if (RepairDate === null || RepairDate === '' || RepairDate === undefined || RepairDate === 'null') {
                                        RepairDate = null;
                                    }
                                    if (fDate === null || fDate === '' || fDate === undefined || fDate === 'null') {
                                        fDate = null;
                                    }
                                    if (testbyid == undefined) {
                                        testbyid = null;
                                    }

                                    if (iPass == '1') {
                                        iPass = 'Pass';
                                      } else if (iPass == '2') {
                                        iPass = 'Fail';
                                      }

                                    if (I1Ai == '1') {
                                        I1Ai = 'Pass';
                                      } else if (I1Ai == '2') {
                                        I1Ai = 'Fail';
                                      }
                                      if (I2Cv == '1') {
                                        I2Cv = 'Pass';
                                      } else if (I2Cv == '2') {
                                        I2Cv = 'Fail';
                                      }
                                      if (irp == '1') {
                                        irp = 'Pass';
                                      } else if (irp == '2') {
                                        irp = 'Fail';
                                      }
                                     
                                     
                                      if (fPass == true) { fPass = 'Pass'; } 
                                      if (fPass == false) { fPass = 'Fail'; }
                                      if (fPass == '') { fPass = null; }

                                      if (F1Ai == true) { F1Ai = 'Pass'; } 
                                      if (F1Ai == false) { F1Ai = 'Fail'; }
                                      if (F1Ai == '') { F1Ai = null; }

                                      if (F2Cv == true) {
                                        F2Cv = 'Pass';
                                      } else if (F2Cv == false) {
                                        F2Cv = 'Fail';
                                      }else{
                                        F2Cv=null;
                                      }
                                      if (F2Cv == true) { F2Cv = 'Pass'; } 
                                      if (F2Cv == false) { F2Cv = 'Fail'; }
                                      if (F2Cv == '') { F2Cv = null; }


                                    var conn = new sql.ConnectionPool(config);
                                    conn.connect().then(function (conn) {
                                        var request = new sql.Request(conn);
                                        request.input('testbyid', sql.Int, testbyid);
                                        request.input('SiteID', sql.Int, SiteID);
                                        request.input('HazID', sql.Int, HazID);
                                        request.input('companyId', sql.Int, companyId);
                                        request.input('iPass', sql.VarChar(10), iPass);
                                        request.input('iDate', sql.Date, iDate);
                                        request.input('I1Ai', sql.VarChar(6), I1Ai);
                                        request.input('I1AiPsi', sql.Numeric(4, 1), I1AiPsi);
                                        request.input('I2Cv', sql.VarChar(6), I2Cv);
                                        request.input('I2CvPsi', sql.Numeric(4, 1), I2CvPsi);
                                        request.input('irp', sql.VarChar(6), irp);
                                        request.input('irpsi', sql.Numeric(4, 1), irpsi);
                                        request.input('RepairDate', sql.Date, RepairDate);
                                        request.input('Repairtype', sql.VarChar(8000), Repairtype);
                                        request.input('fPass', sql.VarChar(4), fPass);
                                        request.input('fDate', sql.Date, fDate);
                                        request.input('F1Ai', sql.VarChar(6), F1Ai);
                                        request.input('f1aipsi', sql.Numeric(4, 1), f1aipsi)
                                        request.input('F2Cv', sql.VarChar(6), F2Cv);
                                        request.input('F2CvPsi', sql.Numeric(4, 1), F2CvPsi);
                                        request.input('FrPsi', sql.Numeric(4, 1), FrPsi);
                                        request.input('TestKit', sql.VarChar(20), TestKit);
                                        request.input('proper', sql.Bit, proper);
                                        request.input('shut2', sql.Bit, shut2);
                                        request.input('restore', sql.Bit, restore);
                                        request.input('backPres', sql.Bit, backPres);
                                        request.input('linePSI', sql.VarChar(5), linePSI);
                                        request.input('udt4', sql.VarChar(8000), udt4);
                                        request.input('datesubmitted', sql.Date, datesubmitted);
                                        request.input('SubmittedBy', sql.VarChar(25), SubmittedBy);
                                        request.input('FeePaid', sql.Numeric(7, 2), feepaid);
                                        request.execute('sp_SubmittedWebTestFromAdmin').then(function (err, recordsets, returnValue, affected) {
                                            res.status(200).send({ status: true, msg: 'Transaction Successful', resp: response });
                                        }).catch(function (err) {
                                            res.status(200).send({ status: false, msg: 'Transaction Successful (transaction Id: ' + response.transaction_id + '). Error in updating record!' });
                                        });
                                    });


                                    // var query2;
                                    // var Idate = test.idate;
                                    // var RepDate = test.repdate;
                                    // var Fdate = test.fdate;
                                    // if (Idate === null || Idate === '' || Idate === undefined || Idate === 'null') {
                                    //     Idate = null;
                                    // } else {
                                    //     Idate = "'" + Idate + "'";
                                    // }
                                    // if (RepDate === null || RepDate === '' || RepDate === undefined || RepDate === 'null') {
                                    //     RepDate = null;
                                    // } else {
                                    //     RepDate = "'" + RepDate + "'";
                                    // }
                                    // if (Fdate === null || Fdate === '' || Fdate === undefined || Fdate === 'null') {
                                    //     Fdate = null;
                                    // } else {
                                    //     Fdate = "'" + Fdate + "'";
                                    // }
                                    // if (test.ipass === '1') {
                                    //     query2 = "Insert INTO DevTests(itestbyid, SiteID, HazID,  iPass, iDate, I1Ai, I1AiPsi, I2Cv, I2CvPsi, RepairDate, Repair, fPass, fDate, F1Ai, F2CvPsi, F2Cv, FrPsi, iTestKit, iCompany, iTestBy) values "
                                    //       + "('" +test.testerid + "','"+ test.siteid + "','"+ test.haz_id + "','" + test.ipass + "', " + Idate + ", '" + test.i1ai + "', " + test.i1aipsi + ", '" + test.i2cv + "', " + test.i2cvpsi + ", " + RepDate + ", " + test.repairs + ", '" + test.fpass + "', "
                                    //       + Fdate + ", '" + test.f1ai + "', " + test.f2cvpsi + ", '" + test.f2cv + "', " + test.f2cvpsi + ", '" + test.itestkit + "', '" + test.companyid + "', '" + test.testerid + "')";
                                    //   } else if(test.fpass === 'Pass') {
                                    //     query2 = "Insert INTO DevTests(itestbyid, SiteID, HazID, iPass, iDate, I1Ai, I1AiPsi, I2Cv, I2CvPsi, RepairDate, Repair, fPass, fDate, F1Ai, F2CvPsi, F2Cv, FrPsi, fTestKit, fCompany, fTestBy) values "
                                    //       + "('" + test.testerid + "','"+ test.siteid + "','"+ test.haz_id + "','" + test.ipass + "', " + Idate + ", '" + test.i1ai + "', " + test.i1aipsi + ", '" + test.i2cv + "', " + test.i2cvpsi + ", " + RepDate + ", " + test.repairs + ", '" + test.fpass + "', "
                                    //       + Fdate + ", '" + test.f1ai + "', " + test.f2cvpsi + ", '" + test.f2cv + "', " + test.f2cvpsi + ", '" + test.itestkit + "', '" + test.companyid + "', '" + test.testerid + "')";
                                    //   }
                                    // new sql.ConnectionPool(config).connect().then(pool => {
                                    //     return pool.request().query(query2)
                                    // }).then(result => {
                                    //     res.status(200).send({ status: true, msg: 'Transaction Successful', resp: response });
                                    //     sql.close();
                                    // }).catch(err => {
                                    //     sql.close();
                                    //     res.status(200).send({ status: false, msg: 'Transaction Successful (transaction Id: ' + response.transaction_id + '). Error in updating record!' });
                                    // });

                                    // sql.close();
                                }).catch(err => {
                                    sql.close();
                                    res.status(200).send({ status: false, msg: err });
                                });
                                // console.log('Purchase Successful.\nTransaction ID: ' + response.transaction_id);
                                // performSecondaryTransaction(secondaryTransactionType, response.transaction_id, response.transaction_tag, response.amount);
                            }
                        });
                }
            });
          }
        });
    });

    app.post('/payment/paymultiple', ensuretoken,function (req, res) {
      jwt.verify(req.token, 'Secretkey', function (err, data) {
        if (err) {
          res.sendStatus(403);
        } else {
          // This will first execute an Auth followed by a Capture transaction .. followed by
        // Auth followed by Void .. followed by
        // Purchase followed by a Refund transaction
        var data = req.body;
        var cvv = data['CVV'];
        var cardHolderName = data['CardHolderName'];
        var cardNUmber = data['CardNumber'];
        var expriryMonth = data['Expiremonth'];
        var expiryYear = data['Expireyear'];
        var cardType = data['cardType'];
        var tests = data['tests'];
        var amount = data['amount'];
        var inserted = [];
        var notInserted = [];
        payeezy.transaction.authorize({
            method: 'credit_card',
            amount: amount*100,
            currency_code: 'USD',
            credit_card: {
                card_number: cardNUmber,
                cvv: cvv,
                type: cardType,
                exp_date: expriryMonth + expiryYear,
                cardholder_name: cardHolderName
            },
            billing_address: {
                street: '225 Liberty Street',
                city: 'NYC',
                state_province: 'NY',
                zip_postal_code: '10281',
                country: 'US'
            }
        },
            function (error, response) {
                if (error) {
                    res.status(200).send({ status: false, msg: 'Unauthorized Transaction. Please check the card details' })
                    // console.log('Authorize Transaction Failed\n' + error);
                }
                if (response) {
                    var auth = response;
                    // res.status(200).send({status: true, msg: 'Authorize Successful.\nTransaction Tag: ' + response.transaction_tag})
                    // console.log('Authorize Successful.\nTransaction Tag: ' + response.transaction_tag);
                    // performSecondaryTransaction(secondaryTransactionType, response.transaction_id, response.transaction_tag, response.amount);
                    payeezy.transaction.purchase({
                        method: 'credit_card',
                        amount: amount*100,
                        currency_code: 'USD',
                        credit_card: {
                            card_number: cardNUmber,
                            cvv: cvv,
                            type: cardType,
                            exp_date: expriryMonth + expiryYear,
                            cardholder_name: cardHolderName
                        },
                        billing_address: {
                            street: '225 Liberty Street',
                            city: 'NYC',
                            state_province: 'NY',
                            zip_postal_code: '10281',
                            country: 'US'
                        }
                    },
                        function (error, response) {
                            if (error) {
                                res.status(200).send({ status: false, msg: 'Transaction Failed\n' + error })
                            }
                            if (response) {
                                response.amount=response.amount/100;
                                insertSingleRecord(0);
                                function insertSingleRecord(i) {
                                    var test = tests[i];
                                    if (i >= tests.length) {
                                        res.setHeader('Access-Control-Allow-Origin', '*');
                                        res.status(200).send({ status: true, msg: 'Transaction Successful', resp: response });
                                    }
                                    var query1 = "update WebTestHistory SET Accepted = GETDATE(), transaction_id = '" + response.transaction_tag + "' where test_data_pk = " + test.test_data_pk;
                                    new sql.ConnectionPool(config).connect().then(pool => {
                                        return pool.request().query(query1)
                                    }).then(result => {

                                        var testbyid = test.testerid;
                                        var SiteID = test.siteid;
                                        var HazID = test.haz_id;
                                        var companyId = test.companyid;
                                        var iPass = test.ipass;
                                        var iDate = test.idate;
                                        var I1Ai = test.i1ai;
                                        var I1AiPsi = test.i1aipsi;
                                        var I2Cv = test.i2cv;
                                        var I2CvPsi = test.i2cvpsi;
                                        var RepairDate = test.repdate;
                                        var Repairtype = test.repairs;
                                        var fPass = test.fpass;
                                        var fDate = test.fdate;
                                        var F1Ai = test.f1ai;
                                        var f1aipsi = test.f1aipsi;
                                        var F2CvPsi = test.f2cvpsi;
                                        var F2Cv = test.f2cv;
                                        var FrPsi = test.f2cvpsi;
                                        var TestKit = test.itestkit;
                                        var clean = test.clean;
                                        var rubber = test.rubber;
                                        var rebuild = test.rebuild;
                                        var proper = test.proper;
                                        var shut2 = test.shut2;
                                        var restore = test.restore;
                                        var backPres = test.backPres;
                                        var linePSI = test.linePSI;
                                        var udt4 = test.udt4;
                                        var irpsi = test.irpsi;
                                        var irp = test.irp;
                                        var datesubmitted = new Date();
                                        var SubmittedBy = 'WebTester';
                                        var feepaid = test.amount;

                                        
                                    if (iDate === null || iDate === '' || iDate === undefined || iDate === 'null') {
                                      iDate = null;
                                  }
                                  if (RepairDate === null || RepairDate === '' || RepairDate === undefined || RepairDate === 'null') {
                                      RepairDate = null;
                                  }
                                  if (fDate === null || fDate === '' || fDate === undefined || fDate === 'null') {
                                      fDate = null;
                                  }
                                  if (testbyid == undefined) {
                                      testbyid = null;
                                  }

                                  if (iPass == '1') {
                                      iPass = 'Pass';
                                    } else if (iPass == '2') {
                                      iPass = 'Fail';
                                    }

                                  if (I1Ai == '1') {
                                      I1Ai = 'Pass';
                                    } else if (I1Ai == '2') {
                                      I1Ai = 'Fail';
                                    }
                                    if (I2Cv == '1') {
                                      I2Cv = 'Pass';
                                    } else if (I2Cv == '2') {
                                      I2Cv = 'Fail';
                                    }
                                    if (irp == '1') {
                                      irp = 'Pass';
                                    } else if (irp == '2') {
                                      irp = 'Fail';
                                    }
                                   
                                   
                                    if (fPass == true) { fPass = 'Pass'; } 
                                    if (fPass == false) { fPass = 'Fail'; }
                                    if (fPass == '') { fPass = null; }

                                    if (F1Ai == true) { F1Ai = 'Pass'; } 
                                    if (F1Ai == false) { F1Ai = 'Fail'; }
                                    if (F1Ai == '') { F1Ai = null; }

                                    if (F2Cv == true) {
                                      F2Cv = 'Pass';
                                    } else if (F2Cv == false) {
                                      F2Cv = 'Fail';
                                    }else{
                                      F2Cv=null;
                                    }
                                    if (F2Cv == true) { F2Cv = 'Pass'; } 
                                    if (F2Cv == false) { F2Cv = 'Fail'; }
                                    if (F2Cv == '') { F2Cv = null; }
                                        var conn = new sql.ConnectionPool(config);
                                        conn.connect().then(function (conn) {
                                            var request = new sql.Request(conn);
                                            request.input('testbyid', sql.Int, testbyid);
                                            request.input('SiteID', sql.Int, SiteID);
                                            request.input('HazID', sql.Int, HazID);
                                            request.input('companyId', sql.Int, companyId);
                                            request.input('iPass', sql.VarChar(10), iPass);
                                            request.input('iDate', sql.Date, iDate);
                                            request.input('I1Ai', sql.VarChar(6), I1Ai);
                                            request.input('I1AiPsi', sql.Numeric(4, 1), I1AiPsi);
                                            request.input('I2Cv', sql.VarChar(6), I2Cv);
                                            request.input('I2CvPsi', sql.Numeric(4, 1), I2CvPsi);
                                            request.input('irp', sql.VarChar(6), irp);
                                            request.input('irpsi', sql.Numeric(4, 1), irpsi);
                                            request.input('RepairDate', sql.Date, RepairDate);
                                            request.input('Repairtype', sql.VarChar(8000), Repairtype);
                                            request.input('fPass', sql.VarChar(4), fPass);
                                            request.input('fDate', sql.Date, fDate);
                                            request.input('F1Ai', sql.VarChar(6), F1Ai);
                                            request.input('f1aipsi', sql.Numeric(4, 1), f1aipsi)
                                            request.input('F2Cv', sql.VarChar(6), F2Cv);
                                            request.input('F2CvPsi', sql.Numeric(4, 1), F2CvPsi);
                                            request.input('FrPsi', sql.Numeric(4, 1), FrPsi);
                                            request.input('TestKit', sql.VarChar(20), TestKit);
                                            request.input('proper', sql.Bit, proper);
                                            request.input('shut2', sql.Bit, shut2);
                                            request.input('restore', sql.Bit, restore);
                                            request.input('backPres', sql.Bit, backPres);
                                            request.input('linePSI', sql.VarChar(5), linePSI);
                                            request.input('udt4', sql.VarChar(8000), udt4);
                                            request.input('datesubmitted', sql.Date, datesubmitted);
                                            request.input('SubmittedBy', sql.VarChar(25), SubmittedBy);
                                            request.input('FeePaid', sql.Numeric(7, 2), feepaid);
                                            request.execute('sp_SubmittedWebTestFromAdmin').then(function (err, recordsets, returnValue, affected) {
                                                inserted.push({ status: true, msg: 'Transaction Successful', test: test });
                                                sql.close();
                                                insertSingleRecord(i + 1);
                                                //res.status(200).send({ status: true, msg: 'Transaction Successful', resp: response });
                                            }).catch(function (err) {
                                                notInserted.push({ status: false, msg: 'Transaction Successful. Error in updating record!', test: test });
                                                sql.close();
                                                insertSingleRecord(i + 1);
                                                //res.status(200).send({ status: false, msg: 'Transaction Successful (transaction Id: ' + response.transaction_id + '). Error in updating record!' });
                                            });
                                        });

                                        // var query2;
                                        // var Idate = test.idate;
                                        // var RepDate = test.repdate;
                                        // var Fdate = test.fdate;
                                        // if (Idate === null || Idate === '' || Idate === undefined || Idate === 'null') {
                                        //     Idate = null;
                                        // } else {
                                        //     Idate = "'" + Idate + "'";
                                        // }
                                        // if (RepDate === null || RepDate === '' || RepDate === undefined || RepDate === 'null') {
                                        //     RepDate = null;
                                        // } else {
                                        //     RepDate = "'" + RepDate + "'";
                                        // }
                                        // if (Fdate === null || Fdate === '' || Fdate === undefined || Fdate === 'null') {
                                        //     Fdate = null;
                                        // } else {
                                        //     Fdate = "'" + Fdate + "'";
                                        // }
                                        // if (test.ipass === '1') {
                                        //     query2 = "Insert INTO DevTests(iPass, iDate, I1Ai, I1AiPsi, I2Cv, I2CvPsi, RepairDate, Repair, fPass, fDate, F1Ai, F2CvPsi, F2Cv, FrPsi, iTestKit, iCompany, iTestBy) values "
                                        //         + "('" + test.ipass + "', " + Idate + ", '" + test.i1ai + "', " + test.i1aipsi + ", '" + test.i2cv + "', " + test.i2cvpsi + ", " + RepDate + ", " + test.repairs + ", '" + test.fpass + "', "
                                        //         + Fdate + ", '" + test.f1ai + "', " + test.f2cvpsi + ", '" + test.f2cv + "', " + test.f2cvpsi + ", '" + test.itestkit + "', '" + test.companyid + "', '" + test.testerid + "')";
                                        // } else {
                                        //     query2 = "Insert INTO DevTests(iPass, iDate, I1Ai, I1AiPsi, I2Cv, I2CvPsi, RepairDate, Repair, fPass, fDate, F1Ai, F2CvPsi, F2Cv, FrPsi, fTestKit, fCompany, fTestBy) values "
                                        //         + "('" + test.ipass + "', " + Idate + ", '" + test.i1ai + "', " + test.i1aipsi + ", '" + test.i2cv + "', " + test.i2cvpsi + ", " + RepDate + ", " + test.repairs + ", '" + test.fpass + "', "
                                        //         + Fdate + ", '" + test.f1ai + "', " + test.f2cvpsi + ", '" + test.f2cv + "', " + test.f2cvpsi + ", '" + test.itestkit + "', '" + test.companyid + "', '" + test.testerid + "')";
                                        // }
                                        // new sql.ConnectionPool(config).connect().then(pool => {
                                        //     return pool.request().query(query2)
                                        // }).then(result => {
                                        //     inserted.push({ status: true, msg: 'Transaction Successful', test: test });
                                        //     sql.close();
                                        //     insertSingleRecord(i + 1);
                                        // }).catch(err => {
                                        //     notInserted.push({ status: false, msg: 'Transaction Successful. Error in updating record!', test: test });
                                        //     sql.close();
                                        //     insertSingleRecord(i + 1);
                                        // });
                                        sql.close();
                                    }).catch(err => {
                                        notInserted.push({ status: false, msg: 'Transction Success! Error updating field', test: test });
                                        sql.close();
                                        insertSingleRecord(i + 1);
                                    });
                                }
                            }
                        });
                }
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
}
