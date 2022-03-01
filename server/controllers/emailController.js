var email = require("emailjs/email");
var sql = require('mssql');

var multer = require('multer')
var upload = multer();
var fs = require('fs');
var sha1 = require('sha1');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var async = require('async');

//const ResumeParser = require('resume-parser');

module.exports = function (app, express, cron, mailer, config, appConstants) {
    var emailApp = app;
    emailApp.set('views', __dirname + '\\' + 'views');
    // set the view engine to pug
    emailApp.set('view engine', 'pug');

    // Configure express-mail and setup default mail data.
    mailer.extend(app, {
        from: 'pawscpitt@gmail.com',
        service: 'gmail',
        host: 'smtp.gmail.com',
        secureConnection: true, // use SSL
        port: 465, // port for secure SMTP
        transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
        auth: {
            user: 'pawscpitt@gmail.com', // gmail id
            pass: 'cleanwater1$' // gmail password
        }
    });

    //cron.schedule('0 0 * * *', function(){
    cron.schedule('* * * * *', function () {
        // scheduleEmail();
        var arrDate = ['Install Due 1', "Install Due 2", "Install Due 3"]// ,  '08/05/2018' , '08/06/2018', '08/07/2018']
        // for (var d1 = 0; d1 < arrDate.length; d1++) {
        console.log("auto email schduled")
        // getTestDueDayData(arrDate[0], null, null, null, "Schedule");
        //    getTestDueDayData(arrDate[0], email,id,type, "Group");
        // }
    });


    function getTestDueDayData(noticeType, email, id, type, emailtype) {
        //  console.log("test==>", noticeType, email, id, type, emailtype);
        var conn = new sql.ConnectionPool(config);
        conn.connect().then(function (conn) {
            var request = new sql.Request(conn);
            request.input('noticeType', sql.VarChar, noticeType);
            request.input('email', sql.VarChar, email);
            request.input('id', sql.Int, id);
            request.input('type', sql.VarChar, type);
            request.input('emailtype', sql.VarChar, emailtype);

            request.execute('sp_EmailTemplateByNotice').then(function (res, recordsets, returnValue, affected) {
                // console.log(res)
                scheduleEmail(res, true)
            });
        });
    }

    var type1 = upload.single('file');
    // app.post(appConstants.SEND_FILE_EMAIL, function (req, res) {
    app.post(appConstants.SEND_FILE_EMAIL, type1, function (req, res) {
        var elamilType = req.body.type;
        var emailNotice = req.body.notice;
        var emailContent = JSON.parse(req.body.fileObject);

       // for (var i = 0; i < emailContent.length; i++) {
            async.map(emailContent, function (emaildata,test){
            //if (i == 0) {

            
           var email =emaildata["Email"];//emailContent[i]["Email"];
           var siteid1 = emaildata["Siteid"];
            if(email != undefined && siteid1 != undefined){
            var conn = new sql.ConnectionPool(config);
            conn.connect().then(function (conn) {
                var request = new sql.Request(conn);
                request.input('noticeType', sql.VarChar, emailNotice);
                request.input('email', sql.VarChar, email);
                request.input('id', sql.Int, siteid1);
                request.input('type', sql.VarChar, "");
                request.input('emailtype', sql.VarChar, elamilType);


                request.execute('sp_EmailTemplateByNotice').then(function (res1, recordsets, returnValue, affected) {
                    scheduleEmail(res1)
                });
            });
            }
            
            // getTestDueDayData(emailNotice,emailContent[i]["Email"],emailContent[i]["Siteid"],"elamilType",emailtype);
       //}
    })
        //  getTestDueDayData(emailNotice,email,id,elamilType, emailtype)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json("success");
    });


    app.get(appConstants.EMAIL_GET_NOTICETEMPLATE, function (req, res) {
        noticetemplate = "SELECT NoticeName FROM [dbo].[NoticeTemplatesNew]";
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
    });

    var type = upload.single('file');

    app.post(appConstants.SEND_SINGLE_EMAIL, type, function (req, res) {
        var useremail = req.body.email;
        var emailsubject = req.body.subject;
        var emailBody = req.body.content;//'<p class="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt;line-height: normal;mso-pagination:none;mso-layout-grid-align:none;text-autospace:none"><span style="font-size:12.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;">&nbsp;</span><span style="font-size:10.0pt; font-family:&quot;Arial&quot;,&quot;sans-serif&quot;">This department has sent you two notices requesting that you install a Backflow Prevention Device on your plumbing system as required by our Cross Connection Control Program and the State Department of Health and Environment Regulations.&nbsp; Please be aware that state regulations state that the Secretary of the Department of Health and Environment has the right to order a supplier of water to DISCONTINUE water service to any premises where a known cross connection exists.&nbsp; To date we have not received an acceptable test report to indicate that the installation of the Backflow Prevention Device has been completed.<o:p></o:p></span></p>  <p class="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt;line-height: normal;mso-pagination:none;mso-layout-grid-align:none;text-autospace:none"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;"><o:p>&nbsp;</o:p></span></p>  <p class="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt;line-height: normal;mso-pagination:none;mso-layout-grid-align:none;text-autospace:none"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;">A successful test of the device must be completed by a Certified Tester and the results sent to this Department on an approved Test Report Form.&nbsp; The Test Results must be received by our office no later than the date indicated above or we will be forced to discontinue water service.<o:p></o:p></span></p>  <p class="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt;line-height: normal;mso-pagination:none;mso-layout-grid-align:none;text-autospace:none"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;">&nbsp;<o:p></o:p></span></p>  <p class="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt;line-height: normal;mso-pagination:none;mso-layout-grid-align:none;text-autospace:none"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;">If you have any questions, please contact this office.<o:p></o:p></span></p>  <p class="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt;line-height: normal;mso-pagination:none;mso-layout-grid-align:none;text-autospace:none"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;"><o:p>&nbsp;</o:p></span></p>  <p class="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt;line-height: normal;mso-pagination:none;mso-layout-grid-align:none;text-autospace:none"><span style="font-size:10.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;">Sincerely,</span><span style="font-size:8.5pt;font-family:&quot;Microsoft Sans Serif&quot;,&quot;sans-serif&quot;"><o:p></o:p></span></p>  <p class="MsoNormal" style="margin-bottom:0in;margin-bottom:.0001pt;line-height: normal;mso-pagination:none;mso-layout-grid-align:none;text-autospace:none"><span style="font-size:8.5pt;font-family:&quot;Microsoft Sans Serif&quot;,&quot;sans-serif&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<o:p></o:p></span></p>';
        //req.emailBody;
        // console.log(req.query);
        // console.log("the file emelent====>>>>", req.file.path)
        // console.log("the file emelent====>>>>", req.file)
        // var attachmentFile = req.theFile;
        if (!!useremail && !!emailsubject) {
            
            var singleEmailOptions = {
                to: useremail,//objEmailDetails[0][0].Email,//"ramesh0158kumar@gmail.com",//objEmailDetails[0][t1].Email,
                subject: emailsubject,//+ objEmailDetails[0][t1].Type + ' Details',
                attachments: ( req.file!==undefined ? [
                    {
                        filename: req.file.originalname,
                        contents: new Buffer(req.file.buffer, 'base64'),
                        
                    }
                ]: null)
            }
            dipatchEmail(singleEmailOptions, emailBody);
        }

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json("success");
    });

    app.post(appConstants.SITE_AUTHENTICATE_EMAIL, function (req, res) {
        var useremail = req.body["email"];
        var logquery = "select FullName, UserID, Logon from Users where Logon='" + useremail + "'";
        new sql.ConnectionPool(config).connect().then(pool => {
            return pool.request().query(logquery)
        }).then(result => {
            let user = result.recordset;
            res.setHeader('Access-Control-Allow-Origin', '*');
            if (user.length > 0) {
                // send reset link to email
                var singleEmailOptions = {
                    to: user[0].Logon,
                    subject: '<DO NOT REPLY> Reset Password'
                };
                // Generating token
                const payload = {
                    email: user[0].Logon,
                    userId: user[0].UserID
                };

                jwt.sign(payload, 'MySecretKey', {
                    expiresIn: 300 // expires in 5 minutes
                }, function (err, token) {
                    if (token !== '') {
                        // Send Emal with token
                        var resetLink = "<p>Hi "+ user[0].FullName +", <br><br>Please use below link to reset your password</p>"
                        // + "<p>localhost:4200/index.html#/pages/auth/reset-password?token=" + token + "</p><br>"
                        + "<p>https://cleanwaterprotection.com/index.html#/pages/auth/reset-password?token=" + token + "</p><br>"
                        + "<p><b>NOTE: </b>Above link will be expired in 5 minutes, please reset your password immediately!</p><br>Thanks";
                        dipatchEmail(singleEmailOptions, resetLink);
                        res.status(200).send(true);
                    } else {
                        res.status(501).send("InternalError");
                    }
                });
            } else {
                // Message to user - User not found, please enter registered email
                res.status(200).send(false);
            }

            sql.close();
        }).catch(err => {
            res.status(500).send({ message: err })
            sql.close();
        });
    });

    app.post(appConstants.SITE_AUTHENTICATE_TOKEN, function (req, res) {
        var token = req.body['token'];
    
        // validate token
        try {
            jwt.verify(token, 'MySecretKey', function (err, decoded) {
                if (decoded !== undefined) {
                    const resp = {
                        status: true,
                        email: decoded.email
                    };
                    res.status(200).json(resp);
                } else {
                    const resp = {
                        status: false,
                        email: err
                    };
                    res.status(200).json(resp);
                }
            });
        } catch (ex) {
            const resp = {
                status: false,
                email: ex
            };
            res.status(200).json(resp);
        }

    });



    function scheduleEmail(objEmailDetails, isArr = true) {
        // for (var t1 = 0; t1 < objEmailDetails.length; t1++) {

        var objEmailData = !!isArr ? objEmailDetails.recordsets[1][0] : objEmailDetails.recordsets[1];
            
        var arrReplaceElements = objEmailDetails.recordset[0].SelectedDefinition.split(',');
        var newText = objEmailDetails.recordset[0].Body// html2pug(objEmailDetails[0][0].Body, { tabs: false });
        console.log("arrReplaceElements===>", objEmailData)
        for (var i1 = 0; i1 < arrReplaceElements.length; i1++) {
            var columnName = arrReplaceElements[i1].split(".")[1];
            if(!!columnName){
                var strReplace = "/|" + arrReplaceElements[i1] + "|/"
                var re = new RegExp(strReplace, "gi");
            newText = newText.replace(re, objEmailData[columnName]);
            }
        }
            
        var mailOptions = {
            to: objEmailData.Email,//"ramesh0158kumar@gmail.com",//objEmailDetails[0][t1].Email,
            subject: objEmailDetails.recordset[0].NoticeName + ' Details',
            user: {
                data: newText
            }
        }
        dipatchEmail(mailOptions, newText);

        // }}
    }


    function dipatchEmail(mailOptions, emailContent) {
        var fs = require('fs');
        var stream = fs.createWriteStream(__dirname + '\\' + 'views' + '\\' + 'email.pug');
        stream.once('open', function (fd) {
            console.log("emailSent")
            stream.write(emailContent);
            stream.end();
            // Send email.
            emailApp.mailer.send('email', mailOptions, function (err, message) {
                if (err) {
                    console.log("errr ========>");
                    console.log(err);
                    return;
                }
                return;
            });
        });
    }

};
