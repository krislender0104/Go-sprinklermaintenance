
var sql = require('mssql');
var constringFile = require('../../src/urlconstants');
var dbConfig = constringFile.dbConfig;

exports.devtypes_list = function(req, res, next) {
    devtypesQuery="SELECT * FROM DevTypes";
new sql.ConnectionPool(dbConfig).connect().then(pool => {
return pool.request().query(devtypesQuery)
}).then(result => {
  let devtypes = result.recordset;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(devtypes);
  sql.close();
}).catch(err => {
  res.status(500).send({ message: err})
  sql.close();
});
};

exports.testkit_list = function(req, res, next) {
    testkitQuery="select * from TestKit";
new sql.ConnectionPool(dbConfig).connect().then(pool => {
return pool.request().query(testkitQuery)
}).then(result => {
  let testkit = result.recordset;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(testkit);
  sql.close();
}).catch(err => {
  res.status(500).send({ message: err})
  sql.close();
});
};
exports.companies_list = function(req, res, next) {
    console.log('/companiess get');
 // connect to your database
     companiesQuery="select * from Companies";
new sql.ConnectionPool(dbConfig).connect().then(pool => {
 return pool.request().query(companiesQuery)
 }).then(result => {
   let companiess = result.recordset;
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.status(200).json(companiess);
   sql.close();
 }).catch(err => {
   res.status(500).send({ message: err})
   sql.close();
 });
};
exports.technicians_list = function(req, res, next) {
     console.log('/technicianss get');

  // connect to your database
      techniciansQuery="select * from Technicians";



     // sqlCall(techniciansQuery, function(err, data) {
     //     if (typeof err !== "undefined" && err !== null) {
    //        res.status(500).send({
    //          error: err
    //        });
    //        return;
   //       }
    //     technicianss=data;
    //      res.json(technicianss);
    //   });

new sql.ConnectionPool(dbConfig).connect().then(pool => {
  return pool.request().query(techniciansQuery)
  }).then(result => {
    let technicianss = result.recordset;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(technicianss);
    sql.close();
  }).catch(err => {
    res.status(500).send({ message: err})
    sql.close();
  });


      //sql.close();
            //var query = "select * from [technicianss]";
              //       executeQuery (res, query);

		//Chat.gettechnicianss(function (err, technicianss) {
	  //  if (err) return next(err);
	  //  console.log ("technicianss: " + JSON.stringify(technicianss));
	  //  res.json(technicianss);
 	 // });
};
exports.devtypes_create_post = function(req, res, next) {

    var devtypedata = req.body["data"];
 
//res.send(devtypedata);

    var devCode	     =devtypedata.devCode	;
    var mFG			    =devtypedata.mFG		;
    var model		    =devtypedata.model		;
    var description	    =devtypedata.description;
    var devSize		    =devtypedata.devSize	;
    var devType		    =devtypedata.devType	;
    var cost		    =devtypedata.cost		;
    var details		    =devtypedata.details	;
    var devDate		    =devtypedata.devDate	;
    var inspecPer	    =devtypedata.inspecPer	;
    var devCode2	    =devtypedata.devCode2	;
    var inUse		    =devtypedata.inUse		;
    var myList		    =devtypedata.myList		;
    var testable	    =devtypedata.testable	;
    var testFreq	    =devtypedata.testFreq	;
    var testFreqUnit  =devtypedata.testFreqUnit;
    var aSSE		    =devtypedata.aSSE		;
    var cSA			    =devtypedata.cSA		;
    var dateStamp	    =devtypedata.dateStamp	;
    var UID			    =devtypedata.UID		;
    var leadFree	    =devtypedata.leadFree	;
    if(dateStamp==null||dateStamp=='')
    {
      dateStamp= new Date();
    }
    if(testFreq==null||testFreq=='')
    {
      testFreq=0;
    }
  console.log(dateStamp);
    
    //res.send(sitedata);
  var conn = new sql.ConnectionPool(dbConfig);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
   request.input('devCode'      ,sql.VarChar(10)      ,devCode	)   ;     
 request.input('mFG'			,sql.VarChar(15)	,mFG		)	;
 request.input('model'		  ,sql.VarChar(15)		,model		);
 request.input('description' ,sql.VarChar(50)		,description);
 request.input('devSize'	  ,sql.VarChar(15)		,devSize	)	;
 request.input('devType'	  ,sql.VarChar(10)		,devType	)	;
 request.input('cost'		  ,sql.VarChar(10)		,cost		);
 request.input('details'		,sql.VarChar(1000)	,details	)	;
 request.input('devDate'		,sql.Date		,devDate		)	;
 request.input('inspecPer'	  ,sql.VarChar(10)		,inspecPer	);
 request.input('devCode2'	  ,sql.VarChar(10)		,devCode2	);
 request.input('inUse'		  ,sql.Bit				,inUse		);
 request.input('myList'		  ,sql.Bit				,myList		);
 request.input('testable'	  ,sql.Bit				,testable	);
 request.input('testFreq'	  ,sql.Int				,testFreq	);
 request.input('testFreqUnit' ,sql.VarChar(5)		,testFreqUnit);
 request.input('aSSE'		  ,sql.VarChar(10)		,aSSE		);
 request.input('cSA'		,	sql.VarChar(10)		,cSA		)	;
 request.input('dateStamp'	  ,sql.Date			,dateStamp	);
 request.input('UID'			,sql.VarChar(50) 	,UID		)	;
 request.input('leadFree'	  ,sql.Bit				,leadFree	);
    
    request.execute('sp_CreateDevTypes').then(function(err, recordsets, returnValue, affected) {
      res.send('Created devtypes');
      console.dir(err);
    }).catch(function(err) {
      console.log(err);
    });
  });
  
  };
  exports.testkit_create_post = function(req, res, next) {

    var testkitdata = req.body["data"];
 //res.send(testkitdata);
    var status	    =testkitdata.status	   ;
    var showOnList	=testkitdata.showOnList;
    var serialNum	=testkitdata.serialNum	;
    var testKitMfg	=testkitdata.testKitMfg;
    var testKitMod	=testkitdata.testKitMod;
    var issueDate	=testkitdata.issueDate	;
    var renewDate	=testkitdata.renewDate	;
    var calDate	=testkitdata.calDate	;
    var calCompany	=testkitdata.calCompany;
    var calAddress	=testkitdata.calAddress;
    var calCity	=testkitdata.calCity	;
    var calState	=testkitdata.calState	;
    var calZip		=testkitdata.calZip		;
    var calPhone	=testkitdata.calPhone	;
    var calFax		=testkitdata.calFax		;
    var calEmail	=testkitdata.calEmail	;
    var comments	=testkitdata.comments	;
    if(issueDate==null||issueDate=='')
    {
      issueDate= new Date();
    }
    if(renewDate==null||renewDate=='')
    {
      renewDate= new Date();
    }
    if(calDate==null||calDate=='')
    {
      calDate= new Date();
    }
    //res.send(sitedata);
  var conn = new sql.ConnectionPool(dbConfig);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    
    request.input('status'	  ,   sql.VarChar(25) ,status	  );
    request.input('showOnList',   sql.Bit,showOnList);
    request.input('serialNum'	,   sql.VarChar(20),serialNum	);
    request.input('testKitMfg',   sql.VarChar(20),testKitMfg);
    request.input('testKitMod',   sql.VarChar(20),testKitMod);
    request.input('issueDate'	,   sql.Date,issueDate	);
    request.input('renewDate'	,   sql.Date,renewDate	);
    request.input('calDate'	,     sql.Date,calDate );
    request.input('calCompany',   sql.VarChar(20),calCompany);
    request.input('calAddress',   sql.VarChar(50),calAddress);
    request.input('calCity'	,     sql.VarChar(25),calCity	 );
    request.input('calState'	,   sql.VarChar(3),calState	);
    request.input('calZip'		,   sql.VarChar(10),calZip		);
    request.input('calPhone'	,   sql.VarChar(15),calPhone	);
    request.input('calFax'		,   sql.VarChar(15),calFax		);
    request.input('calEmail'	,   sql.VarChar(50),calEmail	);
    request.input('comments'	,   sql.VarChar(200),comments	);

    

    
    request.execute('sp_CreateTestKit').then(function(err, recordsets, returnValue, affected) {
      res.send('Created testkit');
      console.dir(err);
    }).catch(function(err) {
      console.log(err);
    });
  });
  
  };
  
exports.devtypes_create_post_1 = function(req, res, next) {

  var devtypedata = req.body;



  var devCode	     =devtypedata.devCode	;
  var mFG			    =devtypedata.mFG		;
  var model		    =devtypedata.model		;
  var description	    =devtypedata.description;
  var devSize		    =devtypedata.devSize	;
  var devType		    =devtypedata.devType	;
  var cost		    =devtypedata.cost		;
  var details		    =devtypedata.details	;
  var devDate		    =devtypedata.devDate	;
  var inspecPer	    =devtypedata.inspecPer	;
  var devCode2	    =devtypedata.devCode2	;
  var inUse		    =devtypedata.inUse		;
  var myList		    =devtypedata.myList		;
  var testable	    =devtypedata.testable	;
  var testFreq	    =devtypedata.testFreq	;
  var testFreqUnit  =devtypedata.testFreqUnit;
  var aSSE		    =devtypedata.aSSE		;
  var cSA			    =devtypedata.cSA		;
  var dateStamp	    =devtypedata.dateStamp	;
  var UID			    =devtypedata.UID		;
  var leadFree	    =devtypedata.leadFree	;	
console.log(dateStamp);
  
  //res.send(sitedata);
var conn = new sql.ConnectionPool(dbConfig);
conn.connect().then(function(conn) {
  var request = new sql.Request(conn);
 request.input('devCode'      ,sql.VarChar(10)      ,devCode	)   ;     
request.input('mFG'			,sql.VarChar(15)	,mFG		)	;
request.input('model'		  ,sql.VarChar(15)		,model		);
request.input('description' ,sql.VarChar(50)		,description);
request.input('devSize'	  ,sql.VarChar(15)		,devSize	)	;
request.input('devType'	  ,sql.VarChar(10)		,devType	)	;
request.input('cost'		  ,sql.VarChar(10)		,cost		);
request.input('details'		,sql.VarChar(1000)	,details	)	;
request.input('devDate'		,sql.Date		,devDate		)	;
request.input('inspecPer'	  ,sql.VarChar(10)		,inspecPer	);
request.input('devCode2'	  ,sql.VarChar(10)		,devCode2	);
request.input('inUse'		  ,sql.Bit				,inUse		);
request.input('myList'		  ,sql.Bit				,myList		);
request.input('testable'	  ,sql.Bit				,testable	);
request.input('testFreq'	  ,sql.Int				,testFreq	);
request.input('testFreqUnit' ,sql.VarChar(5)		,testFreqUnit);
request.input('aSSE'		  ,sql.VarChar(10)		,aSSE		);
request.input('cSA'		,	sql.VarChar(10)		,cSA		)	;
request.input('dateStamp'	  ,sql.Date			,dateStamp	);
request.input('UID'			,sql.VarChar(50) 	,UID		)	;
request.input('leadFree'	  ,sql.Bit				,leadFree	);
  
  request.execute('sp_CreateDevTypes').then(function(err, recordsets, returnValue, affected) {
    res.send('Created devtypes');
    console.dir(err);
  }).catch(function(err) {
    console.log(err);
  });
});

};
exports.companies_create_post = function(req, res, next) {

  var companiesdata = req.body["data"];

  var  company        =    companiesdata.company       ;
  var address1		=	 companiesdata.address1		 ;
  var address2		=	 companiesdata.address2		 ;
  var city			=	 companiesdata.city			 ;
  var state			=	 companiesdata.state		;
  var zip			=	 companiesdata.zip			 ;
  var phone			=	 companiesdata.phone		;
  var fax			=	 companiesdata.fax			 ;
  var cntyLicNum		=	 companiesdata.cntyLicNum	;
  var cITYLICNUM		=	 companiesdata.cITYLICNUM	;
  var lICEXPDATE		=	 companiesdata.lICEXPDATE	;
  var insurance		=	 companiesdata.insurance	;
  var policy			=	 companiesdata.policy		;
  var liability		=	 companiesdata.liability	;
  var iNSUREXP		=	 companiesdata.iNSUREXP		 ;
  var iNSURAGT		=	 companiesdata.iNSURAGT		 ;
  var iNSURPHO		=	 companiesdata.iNSURPHO		 ;
  var showOnList		=	 companiesdata.showOnList	;
  var email			=	 companiesdata.email		;
  var cell			=	 companiesdata.cell			 ;
  var udf1			=	 companiesdata.udf1			 ;
  var notes			=	 companiesdata.notes		;
  var cert_City		=	 companiesdata.cert_City	;
  var cert_County	=	 companiesdata.cert_County	 ;
  var county_Expire	=	 companiesdata.county_Expire;
  var cert_Test		=	 companiesdata.cert_Test	;
  var cert_Survey	=	 companiesdata.cert_Survey	 ;
  var cert_Install	=	 companiesdata.cert_Install	 ;
  var cert_Repair	=	 companiesdata.cert_Repair	 ;
  var cert_Land		=	 companiesdata.cert_Land	;
  var cert_Fire		=	 companiesdata.cert_Fire	;
  var cert_Confine	=	 companiesdata.cert_Confine	 ;
  var udf2			=	 companiesdata.udf2			 ;
  var udf2a			=	 companiesdata.udf2a		;
  var udf3			=	 companiesdata.udf3			 ;
  var udf3a			=	 companiesdata.udf3a		;
  var status			=	 companiesdata.status		;
  var lastLetter		=	 companiesdata.lastLetter	;
  var lastLetterName=	 companiesdata.lastLetterName;
  var dateStamp		=	 companiesdata.dateStamp	;
  var uID			=	 companiesdata.uID			 ;
  var companyUserID	=	 companiesdata.companyUserID;
  var password		=	 companiesdata.password		 ;
  var contact		=	 companiesdata.contact		 ;
  var lastUpdate		=	 companiesdata.lastUpdate	;
  var lastUpdateID	=	 companiesdata.lastUpdateID	 ;
  var lastUpdateBy	=	 companiesdata.lastUpdateBy	 ;
  var testkitID	=	 companiesdata.testkitID	 ;
  if(lastUpdate==null||lastUpdate=='')
  {
    lastUpdate= new Date();
  }
  if(lastLetter==null||lastLetter=='')
  {
    lastLetter= new Date();
  }
  if(dateStamp==null||dateStamp=='')
  {
    dateStamp= new Date();
  }
  if(lICEXPDATE==null||lICEXPDATE=='')
  {
    lICEXPDATE= new Date();
  }
  if(iNSUREXP==null||iNSUREXP=='')
  {
    iNSUREXP= new Date();
  }
  if(county_Expire==null||county_Expire=='')
  {
    //county_Expire= new Date();
  }
  //res.send(sitedata);
var conn = new sql.ConnectionPool(dbConfig);
conn.connect().then(function(conn) {
  var request = new sql.Request(conn);
  request.input('company',             sql.VarChar(70) ,company       );
request.input('address1',			 sql.VarChar(70) ,address1		);
request.input('address2',			 sql.VarChar(70) ,address2		);
request.input('city',				 sql.VarChar(35) ,city			);
request.input('state',				 sql.VarChar(10) ,state			);
request.input('zip',				 sql.VarChar(15) ,zip			);
request.input('phone',				 sql.VarChar(30) ,phone			);
request.input('fax',				 sql.VarChar(30) ,fax			);
request.input('cntyLicNum',			 sql.VarChar(20) ,cntyLicNum	);	
request.input('cITYLICNUM',			 sql.VarChar(20) ,cITYLICNUM	);	
request.input('lICEXPDATE',			 sql.Date	 ,lICEXPDATE	);	
request.input('insurance',			 sql.VarChar(25) ,insurance		);
request.input('policy',				 sql.VarChar(20) ,policy		);	
request.input('liability',			 sql.Int		 ,liability		);
request.input('iNSUREXP',			 sql.Date	 ,iNSUREXP		);
request.input('iNSURAGT',			 sql.VarChar(25) ,iNSURAGT		);
request.input('iNSURPHO',			 sql.VarChar(20) ,iNSURPHO		);
request.input('showOnList',			 sql.Bit		 ,showOnList	);	
request.input('email',				 sql.VarChar(200),email			);
request.input('cell',				 sql.VarChar(30) ,cell			);
request.input('udf1',				 sql.VarChar(25) ,udf1			);
request.input('notes',				 sql.VarChar(200),notes			);
request.input('cert_City',			 sql.Bit		 ,cert_City		);
request.input('cert_County',		 sql.Bit		 ,cert_County	);
request.input('county_Expire',		 sql.Date	 ,county_Expire	);
request.input('cert_Test',			 sql.Bit		 ,cert_Test		);
request.input('cert_Survey',		 sql.Bit		 ,cert_Survey	);
request.input('cert_Install',		 sql.Bit		 ,cert_Install	);
request.input('cert_Repair',		 sql.Bit		 ,cert_Repair	);
request.input('cert_Land',			 sql.Bit		 ,cert_Land		);
request.input('cert_Fire',			 sql.Bit		 ,cert_Fire		);
request.input('cert_Confine',		 sql.Bit		 ,cert_Confine	);
request.input('udf2',				 sql.VarChar(25) ,udf2			);
request.input('udf2a',				 sql.Bit		 ,udf2a			);
request.input('udf3',				 sql.VarChar(25) ,udf3			);
request.input('udf3a',				 sql.Bit		 ,udf3a			);
request.input('status',				 sql.VarChar(25) ,status		);	
request.input('lastLetter',			 sql.Date	 ,lastLetter	);	
request.input('lastLetterName',		 sql.VarChar(100),lastLetterName);	
request.input('dateStamp',			 sql.Date	 ,dateStamp		);
request.input('uID',				 sql.VarChar(50) ,uID			);
request.input('companyUserID',		 sql.VarChar(15) ,companyUserID	);
request.input('password',			 sql.VarChar(15) ,password		);
request.input('contact',			 sql.VarChar(50) ,contact		);
request.input('lastUpdate',			 sql.Date	 ,lastUpdate	);	
request.input('lastUpdateID',		 sql.VarChar(50) ,lastUpdateID	);
request.input('lastUpdateBy',		 sql.VarChar(3)	 ,lastUpdateBy	);
request.input('testkit',		 sql.VarChar(100)	 ,testkitID	);
  request.execute('sp_CreateCompanies').then(function(err, recordsets, returnValue, affected) {
    res.send('Created companies');
    console.dir(err);
  }).catch(function(err) {
    console.log(err);
  });
});

};

exports.technicians_create_post = function(req, res, next) {

  var techniciansdata = req.body["data"];
//res.send(techniciansdata);
console.log(techniciansdata);
  var status			= techniciansdata.status			; 
  var firstName		= techniciansdata.firstName			;	
  var lastName		= techniciansdata.lastName			;	
  var address1		= techniciansdata.address1			;	
  var address2		= techniciansdata.address2			;	
  var city			= techniciansdata.city				;	
  var state			= techniciansdata.state				;	
  var zip				= techniciansdata.zip				;
  var phone			= techniciansdata.phone				;	
  var fax				= techniciansdata.fax				;
  var testCertified	= techniciansdata.testCertified		;	
  var survCertified	= techniciansdata.survCertified		;	
  var instCertified	= techniciansdata.instCertified		;	
  var testCertNum		= techniciansdata.testCertNum		;
  var survCertNum		= techniciansdata.survCertNum		;
  var instCertNum		= techniciansdata.instCertNum		;
  var testCertExp		= techniciansdata.testCertExp		;
  var survCertExp		= techniciansdata.survCertExp		;
  var instCertExp		= techniciansdata.instCertExp		;
  var fee				= techniciansdata.fee				;
  var feePaid			= techniciansdata.feePaid			;
  var comments		= techniciansdata.comments			;	
  var dateStamp		= techniciansdata.dateStamp			;	
  var uID				= techniciansdata.uID				;
  var cOLICENSE		= techniciansdata.cOLICENSE			;	
  var rEPCERTIFIED	= techniciansdata.rEPCERTIFIED		;	
  var cNTRYLICex		= techniciansdata.cNTRYLICex		;
  var cITYLICNUM		= techniciansdata.cITYLICNUM		;
  var lICEXPDATE		= techniciansdata.lICEXPDATE		;
  var cERTDATE		= techniciansdata.cERTDATE			;	
  var cERTAGCY		= techniciansdata.cERTAGCY			;	
  var pLUMNUM			= techniciansdata.pLUMNUM			;
  var pLUMEXPIR		= techniciansdata.pLUMEXPIR			;	
  var lANDEXPIR		= techniciansdata.lANDEXPIR			;	
  var lANDNUM			= techniciansdata.lANDNUM			;
  var fIREEXPIR		= techniciansdata.fIREEXPIR			;	
  var fIRENUM			= techniciansdata.fIRENUM			;
  var iNSURANCE		= techniciansdata.iNSURANCE			;	
  var pOLICY			= techniciansdata.pOLICY			;
  var lIABILITY		= techniciansdata.lIABILITY			;	
  var iNSUREXP		= techniciansdata.iNSUREXP			;	
  var iNSURAGT		= techniciansdata.iNSURAGT			;	
  var iNSURPHO		= techniciansdata.iNSURPHO			;	
  var allDataSets		= techniciansdata.allDataSets		;
  var init			= techniciansdata.init				;	
  var email			= techniciansdata.email				;	
  var cell			= techniciansdata.cell				;	
  var uDF1			= techniciansdata.uDF1				;	
  var repCertNum		= techniciansdata.repCertNum		;
  var repCertExp		= techniciansdata.repCertExp		;
  var survCertAgcy	= techniciansdata.survCertAgcy		;	
  var instCertAgcy	= techniciansdata.instCertAgcy		;	
  var repCertAgcy		= techniciansdata.repCertAgcy		;
  var survCertDate	= techniciansdata.survCertDate		;	
  var instCertDate	= techniciansdata.instCertDate		;	
  var repCertDate		= techniciansdata.repCertDate		;
  var testCertNum2	= techniciansdata.testCertNum2		;	
  var testCertExp2	= techniciansdata.testCertExp2		;	
  var certAgcy2		= techniciansdata.certAgcy2			;	
  var certDate2		= techniciansdata.certDate2			;	
  var survCertNum2	= techniciansdata.survCertNum2		;	
  var survCertExp2	= techniciansdata.survCertExp2		;	
  var survCertAgcy2	= techniciansdata.survCertAgcy2		;	
  var survCertDate2	= techniciansdata.survCertDate2		;	
  var instCertNum2	= techniciansdata.instCertNum2		;	
  var instCertExp2	= techniciansdata.instCertExp2		;	
  var instCertAgcy2	= techniciansdata.instCertAgcy2		;	
  var instCertDate2	= techniciansdata.instCertDate2		;	
  var repCertNum2		= techniciansdata.repCertNum2		;
  var repCertExp2		= techniciansdata.repCertExp2		;
  var repCertAgcy2	= techniciansdata.repCertAgcy2		;	
  var repCertDate2	= techniciansdata.repCertDate2		;	
  var showOnList		= techniciansdata.showOnList		;
  var cityCheck		= techniciansdata.cityCheck			;	
  var countyCheck		= techniciansdata.countyCheck		;
  var plumberCheck	= techniciansdata.plumberCheck		;	
  var landScapeCheck	= techniciansdata.landScapeCheck	;
  var fireCheck		= techniciansdata.fireCheck			;	
  var confinedCheck	= techniciansdata.confinedCheck		;	
  var confinedLicNum	= techniciansdata.confinedLicNum	;
  var confinedLicExp	= techniciansdata.confinedLicExp	;
  var lastLetter		= techniciansdata.lastLetter		;
  var lastLetterName	= techniciansdata.lastLetterName	;
  var testerUserID	= techniciansdata.testerUserID		;	
  var password		= techniciansdata.password			;	
  var lastUpdate		= techniciansdata.lastUpdate		;
  var lastUpdateID	= techniciansdata.lastUpdateID		;	
  var lastUpdateBy	= techniciansdata.lastUpdateBy		;	
  var webStatus		= techniciansdata.webStatus			;	
  
  if(testCertExp==null||testCertExp=='')
  {
    testCertExp=new Date();
  }
  if(survCertExp==null||survCertExp=='')
  {
    survCertExp=new Date();
  }
  instCertExp=new Date();
  feePaid=new Date();
  dateStamp		=new Date();
  cNTRYLICex		=new Date();
  lICEXPDATE				=new Date();
  cERTDATE				=new Date();
  pLUMEXPIR				=new Date();
  lANDEXPIR							=new Date();
  fIREEXPIR				=new Date();
  iNSUREXP							=new Date();
  repCertExp		=new Date();
  survCertDate				=new Date();
  instCertDate		=new Date();
  repCertDate		=new Date();
  testCertExp2				=new Date();
  certDate2			=new Date();
  survCertExp2		=new Date();
  survCertDate2		=new Date();
  instCertExp2		=new Date();
  repCertExp2				=new Date();
  confinedLicExp		=new Date();
  lastLetter		=new Date();
  lastUpdate			=new Date();
  instCertDate2= new Date();
  repCertDate2= new Date();
  if(lIABILITY==null||lIABILITY=='')
  {
    lIABILITY=0;
  }

var conn = new sql.ConnectionPool(dbConfig);
conn.connect().then(function(conn) {
  var request = new sql.Request(conn);
  request.input('status',		        sql.VarChar(10) ,status			   ) ;
  request.input('firstName',			sql.VarChar(20)	,firstName		   ) ;
  request.input('lastName',			sql.VarChar(20)	,lastName		   ) ;
  request.input('address1',			sql.VarChar(70)	,address1		   ) ;
  request.input('address2',			sql.VarChar(70)	,address2		   ) ;
  request.input('city',				sql.VarChar(35)	,city			   ) ;
  request.input('state',				sql.VarChar(10)	,state			   ) ;
  request.input('zip',					sql.VarChar(15)	,zip				);
  request.input('phone',				sql.VarChar(30)	,phone			   ) ;
  request.input('fax',					sql.VarChar(30)	,fax				);
  request.input('testCertified',		sql.Bit			,testCertified	   ) ;
  request.input('survCertified',		sql.Bit			,survCertified	   ) ;
  request.input('instCertified',		sql.Bit			,instCertified	   ) ;
  request.input('testCertNum',			sql.VarChar(20)	,testCertNum		);
  request.input('survCertNum',			sql.VarChar(20)	,survCertNum		);
  request.input('instCertNum',			sql.VarChar(20)	,instCertNum		);
  request.input('testCertExp',			sql.Date		,testCertExp		);
  request.input('survCertExp',			sql.Date		,survCertExp		);
  request.input('instCertExp',			sql.Date		,instCertExp		);
  request.input('fee',					sql.VarChar(10)	,fee				);
  request.input('feePaid',				sql.Date		,feePaid			);
  request.input('comments',			sql.VarChar(6000),comments		   ) ;
  request.input('dateStamp',			sql.Date		,dateStamp		   ) ;
  request.input('uID',					sql.VarChar(50)	,uID				);
  request.input('cOLICENSE',			sql.VarChar(20)	,cOLICENSE		   ) ;
  request.input('rEPCERTIFIED',		sql.Bit			,rEPCERTIFIED	   ) ;
  request.input('cNTRYLICex',			sql.Date		,cNTRYLICex		   ) ;
  request.input('cITYLICNUM',			sql.VarChar(20)	,cITYLICNUM		   ) ;
  request.input('lICEXPDATE',			sql.Date		,lICEXPDATE		   ) ;
  request.input('cERTDATE',			sql.Date		,cERTDATE		   ) ;
  request.input('cERTAGCY',			sql.VarChar(25)	,cERTAGCY		   ) ;
  request.input('pLUMNUM',				sql.VarChar(20)	,pLUMNUM			);
  request.input('pLUMEXPIR',			sql.Date		,pLUMEXPIR		   ) ;
  request.input('lANDEXPIR',			sql.Date		,lANDEXPIR		   ) ;
  request.input('lANDNUM',				sql.VarChar(20)	,lANDNUM			);
  request.input('fIREEXPIR',			sql.Date		,fIREEXPIR		   ) ;
  request.input('fIRENUM',				sql.VarChar(20)	,fIRENUM			);
  request.input('iNSURANCE',			sql.VarChar(25)	,iNSURANCE		   ) ;
  request.input('pOLICY',				sql.VarChar(20)	,pOLICY			   ) ;
  request.input('lIABILITY',			sql.Int			,lIABILITY		   ) ;
  request.input('iNSUREXP',			sql.Date		,iNSUREXP		   ) ;
  request.input('iNSURAGT',			sql.VarChar(25)	,iNSURAGT		   ) ;
  request.input('iNSURPHO',			sql.VarChar(20)	,iNSURPHO		   ) ;
  request.input('allDataSets',			sql.Bit			,allDataSets		);
  request.input('init',				sql.VarChar(3)	,init			   ) ;
  request.input('email',				sql.VarChar(200),email			   ) ;
  request.input('cell',				sql.VarChar(30)	,cell			   ) ;
  request.input('uDF1',				sql.VarChar(25)	,uDF1			   ) ;
  request.input('repCertNum',			sql.VarChar(20)	,repCertNum		   ) ;
  request.input('repCertExp',			sql.Date		,repCertExp		   ) ;
  request.input('survCertAgcy',		sql.VarChar(25)	,survCertAgcy	   ) ;
  request.input('instCertAgcy',		sql.VarChar(25)	,instCertAgcy	   ) ;
  request.input('repCertAgcy',			sql.VarChar(25)	,repCertAgcy		);
  request.input('survCertDate',		sql.Date		,survCertDate	   ) ;
  request.input('instCertDate',		sql.Date		,instCertDate	   ) ;
  request.input('repCertDate',			sql.Date		,repCertDate		);
  request.input('testCertNum2',		sql.VarChar(20)	,testCertNum2	   ) ;
  request.input('testCertExp2',		sql.Date		,testCertExp2	   ) ;
  request.input('certAgcy2',			sql.VarChar(25)	,certAgcy2		   ) ;
  request.input('certDate2',			sql.Date		,certDate2		   ) ;
  request.input('survCertNum2',		sql.VarChar(20)	,survCertNum2	   ) ;
  request.input('survCertExp2',		sql.Date		,survCertExp2	   ) ;
  request.input('survCertAgcy2',		sql.VarChar(25)	,survCertAgcy2	   ) ;
  request.input('survCertDate2',		sql.Date		,survCertDate2	   ) ;
  request.input('instCertNum2',		sql.VarChar(20)	,instCertNum2	   ) ;
  request.input('instCertExp2',		sql.Date		,instCertExp2	   ) ;
  request.input('instCertAgcy2',		sql.VarChar(25)	,instCertAgcy2	   ) ;
  request.input('instCertDate2',		sql.Date		,instCertDate2	   ) ;
  request.input('repCertNum2',			sql.VarChar(20)	,repCertNum2		);
  request.input('repCertExp2',			sql.Date		,repCertExp2		);
  request.input('repCertAgcy2',		sql.VarChar(25)	,repCertAgcy2	   ) ;
  request.input('repCertDate2',		sql.Date		,repCertDate2	   ) ;
  request.input('showOnList',			sql.Bit			,showOnList		   ) ;
  request.input('cityCheck',			sql.Bit			,cityCheck		   ) ;
  request.input('countyCheck',			sql.Bit			,countyCheck		);
  request.input('plumberCheck',		sql.Bit			,plumberCheck	   ) ;
  request.input('landScapeCheck',		sql.Bit			,landScapeCheck	   ) ;
  request.input('fireCheck',			sql.Bit			,fireCheck		   ) ;
  request.input('confinedCheck',		sql.Bit			,confinedCheck	   ) ;
  request.input('confinedLicNum',		sql.VarChar(20)	,confinedLicNum	   ) ;
  request.input('confinedLicExp',		sql.Date		,confinedLicExp	   ) ;
  request.input('lastLetter',			sql.Date		,lastLetter		   ) ;
  request.input('lastLetterName',		sql.VarChar(100),lastLetterName	   ) ;
  request.input('testerUserID',		sql.VarChar(15)	,testerUserID	   ) ;
  request.input('password',			sql.VarChar(15)	,password		   ) ;
  request.input('lastUpdate',			sql.Date		,lastUpdate		   ) ;
  request.input('lastUpdateID',		sql.VarChar(50)	,lastUpdateID	   ) ;
  request.input('lastUpdateBy',		sql.VarChar(3)	,lastUpdateBy	   ) ;
  request.input('webStatus',			sql.VarChar(10) ,webStatus		   ) ;

  request.execute('sp_CreateTechnicians').then(function(err, recordsets, returnValue, affected) {
    res.send('Created technicians');
    console.dir(err);
  }).catch(function(err) {
    console.log(err);
  });
});

};


exports.devtypes_update_post = function(req, res, next) {

  var devtypedata = req.body["data"];

//res.send(devtypedata);
var devId	     =devtypedata.DevID	;
  var devCode	     =devtypedata.DevCode	;
  var mFG			    =devtypedata.MFG		;
  var model		    =devtypedata.Model		;
  var description	    =devtypedata.Description;
  var devSize		    =devtypedata.DevSize	;
  var devType		    =devtypedata.DevType	;
  var cost		    =devtypedata.Cost		;
  var details		    =devtypedata.Details	;
  var devDate		    =devtypedata.DevDate	;
  var inspecPer	    =devtypedata.InspecPer	;
  var devCode2	    =devtypedata.DevCode2	;
  var inUse		    =devtypedata.InUse		;
  var myList		    =devtypedata.MyList		;
  var testable	    =devtypedata.Testable	;
  var testFreq	    =devtypedata.TestFreq	;
  var testFreqUnit  =devtypedata.TestFreqUnit;
  var aSSE		    =devtypedata.ASSE		;
  var cSA			    =devtypedata.CSA		;
  var dateStamp	    =devtypedata.DateStamp	;
  var UID			    =devtypedata.UID		;
  var leadFree	    =devtypedata.LeadFree	;
  if(dateStamp==null||dateStamp=='')
  {
    dateStamp= new Date();
  }
  if(testFreq==null||testFreq=='')
  {
    testFreq=0;
  }
  if(leadFree==null)
  {
    leadFree=0;
  }
console.log(dateStamp);
  
  //res.send(sitedata);
var conn = new sql.ConnectionPool(dbConfig);
conn.connect().then(function(conn) {
  var request = new sql.Request(conn);
 request.input('devId'      ,sql.Int    ,devId	)   ;     
 request.input('devCode'      ,sql.VarChar(10)      ,devCode	)   ;     
request.input('mFG'			,sql.VarChar(15)	,mFG		)	;
request.input('model'		  ,sql.VarChar(15)		,model		);
request.input('description' ,sql.VarChar(50)		,description);
request.input('devSize'	  ,sql.VarChar(15)		,devSize	)	;
request.input('devType'	  ,sql.VarChar(10)		,devType	)	;
request.input('cost'		  ,sql.VarChar(10)		,cost		);
request.input('details'		,sql.VarChar(1000)	,details	)	;
request.input('devDate'		,sql.Date		,devDate		)	;
request.input('inspecPer'	  ,sql.VarChar(10)		,inspecPer	);
request.input('devCode2'	  ,sql.VarChar(10)		,devCode2	);
request.input('inUse'		  ,sql.Bit				,inUse		);
request.input('myList'		  ,sql.Bit				,myList		);
request.input('testable'	  ,sql.Bit				,testable	);
request.input('testFreq'	  ,sql.Int				,testFreq	);
request.input('testFreqUnit' ,sql.VarChar(5)		,testFreqUnit);
request.input('aSSE'		  ,sql.VarChar(10)		,aSSE		);
request.input('cSA'		,	sql.VarChar(10)		,cSA		)	;
request.input('dateStamp'	  ,sql.Date			,dateStamp	);
request.input('UID'			,sql.VarChar(50) 	,UID		)	;
request.input('leadFree'	  ,sql.Bit				,leadFree	);
  
  request.execute('sp_UpdateDevTypes').then(function(err, recordsets, returnValue, affected) {
    res.status(200).json('updated devtypes');
    //res.send('Updated devtypes');
    console.dir(err);
  }).catch(function(err) {
    console.log(err);
  });
});

};

exports.testkit_update_post = function(req, res, next) {

  var testkitdata = req.body["data"];
//res.send(testkitdata);

  var testKitId	    =testkitdata.TestKitId	   ;
  var status	    =testkitdata.Status	   ;
  var showOnList	=testkitdata.ShowOnList;
  var serialNum	=testkitdata.SerialNum	;
  var testKitMfg	=testkitdata.TestKitMfg;
  var testKitMod	=testkitdata.TestKitMod;
  var issueDate	=testkitdata.IssueDate	;
  var renewDate	=testkitdata.RenewDate	;
  var calDate	=testkitdata.CalDate	;
  var calCompany	=testkitdata.CalCompany;
  var calAddress	=testkitdata.CalAddress;
  var calCity	=testkitdata.CalCity	;
  var calState	=testkitdata.CalState	;
  var calZip		=testkitdata.CalZip		;
  var calPhone	=testkitdata.CalPhone	;
  var calFax		=testkitdata.CalFax		;
  var calEmail	=testkitdata.CalEmail	;
  var comments	=testkitdata.Comments	;
  if(issueDate==null||issueDate=='')
  {
    issueDate= new Date();
  }
  if(renewDate==null||renewDate=='')
  {
    renewDate= new Date();
  }
  if(calDate==null||calDate=='')
  {
    calDate= new Date();
  }
  if(showOnList==null)
  {
    showOnList=0;
  }
 // res.send(sitedata);
var conn = new sql.ConnectionPool(dbConfig);
conn.connect().then(function(conn) {
  var request = new sql.Request(conn);
  
  request.input('testKitId'	  ,   sql.Int ,testKitId	  );
  request.input('status'	  ,   sql.VarChar(25) ,status	  );
  request.input('showOnList',   sql.Bit,showOnList);
  request.input('serialNum'	,   sql.VarChar(20),serialNum	);
  request.input('testKitMfg',   sql.VarChar(20),testKitMfg);
  request.input('testKitMod',   sql.VarChar(20),testKitMod);
  request.input('issueDate'	,   sql.Date,issueDate	);
  request.input('renewDate'	,   sql.Date,renewDate	);
  request.input('calDate'	,     sql.Date,calDate );
  request.input('calCompany',   sql.VarChar(20),calCompany);
  request.input('calAddress',   sql.VarChar(50),calAddress);
  request.input('calCity'	,     sql.VarChar(25),calCity	 );
  request.input('calState'	,   sql.VarChar(3),calState	);
  request.input('calZip'		,   sql.VarChar(10),calZip		);
  request.input('calPhone'	,   sql.VarChar(15),calPhone	);
  request.input('calFax'		,   sql.VarChar(15),calFax		);
  request.input('calEmail'	,   sql.VarChar(50),calEmail	);
  request.input('comments'	,   sql.VarChar(200),comments	);

  

  
  request.execute('sp_UpdateTestKit').then(function(err, recordsets, returnValue, affected) {
    res.send('Updated testkit');
    console.dir(err);
  }).catch(function(err) {
    console.log(err);
  });
});

};

exports.companies_update_post = function(req, res, next) {

  var companiesdata = req.body["data"];
  
  var companyId = companiesdata.companyId;
  var  company        =    companiesdata.company       ;
  var address1		=	 companiesdata.address1		 ;
  var address2		=	 companiesdata.address2		 ;
  var city			=	 companiesdata.city			 ;
  var state			=	 companiesdata.state		;
  var zip			=	 companiesdata.zip			 ;
  var phone			=	 companiesdata.phone		;
  var fax			=	 companiesdata.fax			 ;
  var cntyLicNum		=	 companiesdata.cntyLicNum	;
  var cITYLICNUM		=	 companiesdata.cITYLICNUM	;
  var lICEXPDATE		=	 companiesdata.lICEXPDATE	;
  var insurance		=	 companiesdata.insurance	;
  var policy			=	 companiesdata.policy		;
  var liability		=	 companiesdata.liability	;
  var iNSUREXP		=	 companiesdata.iNSUREXP		 ;
  var iNSURAGT		=	 companiesdata.iNSURAGT		 ;
  var iNSURPHO		=	 companiesdata.iNSURPHO		 ;
  var showOnList		=	 companiesdata.showOnList	;
  var email			=	 companiesdata.email		;
  var cell			=	 companiesdata.cell			 ;
  var udf1			=	 companiesdata.udf1			 ;
  var notes			=	 companiesdata.notes		;
  var cert_City		=	 companiesdata.cert_City	;
  var cert_County	=	 companiesdata.cert_County	 ;
  var county_Expire	=	 companiesdata.county_Expire;
  var cert_Test		=	 companiesdata.cert_Test	;
  var cert_Survey	=	 companiesdata.cert_Survey	 ;
  var cert_Install	=	 companiesdata.cert_Install	 ;
  var cert_Repair	=	 companiesdata.cert_Repair	 ;
  var cert_Land		=	 companiesdata.cert_Land	;
  var cert_Fire		=	 companiesdata.cert_Fire	;
  var cert_Confine	=	 companiesdata.cert_Confine	 ;
  var udf2			=	 companiesdata.udf2			 ;
  var udf2a			=	 companiesdata.udf2a		;
  var udf3			=	 companiesdata.udf3			 ;
  var udf3a			=	 companiesdata.udf3a		;
  var status			=	 companiesdata.status		;
  var lastLetter		=	 companiesdata.lastLetter	;
  var lastLetterName=	 companiesdata.lastLetterName;
  var dateStamp		=	 companiesdata.dateStamp	;
  var uID			=	 companiesdata.uID			 ;
  var companyUserID	=	 companiesdata.companyUserID;
  var password		=	 companiesdata.password		 ;
  var contact		=	 companiesdata.contact		 ;
  var lastUpdate		=	 companiesdata.lastUpdate	;
  var lastUpdateID	=	 companiesdata.lastUpdateID	 ;
  var lastUpdateBy	=	 companiesdata.lastUpdateBy	 ;
  var testkitID	=	 companiesdata.testkitID	 ;
  if(lastUpdate==null||lastUpdate=='')
  {
    lastUpdate= new Date();
  }
  if(lastLetter==null||lastLetter=='')
  {
    lastLetter= new Date();
  }
  if(dateStamp==null||dateStamp=='')
  {
    dateStamp= new Date();
  }
  if(lICEXPDATE==null||lICEXPDATE=='')
  {
    lICEXPDATE= new Date();
  }
  if(iNSUREXP==null||iNSUREXP=='')
  {
    iNSUREXP= new Date();
  }
  if(county_Expire==null||county_Expire=='')
  {
    county_Expire= new Date();
  }
  //res.send(sitedata);
var conn = new sql.ConnectionPool(dbConfig);
conn.connect().then(function(conn) {
  var request = new sql.Request(conn);
  request.input('companyId',             sql.Int ,companyId       );
  request.input('company',             sql.VarChar(70) ,company       );
request.input('address1',			 sql.VarChar(70) ,address1		);
request.input('address2',			 sql.VarChar(70) ,address2		);
request.input('city',				 sql.VarChar(35) ,city			);
request.input('state',				 sql.VarChar(10) ,state			);
request.input('zip',				 sql.VarChar(15) ,zip			);
request.input('phone',				 sql.VarChar(30) ,phone			);
request.input('fax',				 sql.VarChar(30) ,fax			);
request.input('cntyLicNum',			 sql.VarChar(20) ,cntyLicNum	);	
request.input('cITYLICNUM',			 sql.VarChar(20) ,cITYLICNUM	);	
request.input('lICEXPDATE',			 sql.Date	 ,lICEXPDATE	);	
request.input('insurance',			 sql.VarChar(25) ,insurance		);
request.input('policy',				 sql.VarChar(20) ,policy		);	
request.input('liability',			 sql.Int		 ,liability		);
request.input('iNSUREXP',			 sql.Date	 ,iNSUREXP		);
request.input('iNSURAGT',			 sql.VarChar(25) ,iNSURAGT		);
request.input('iNSURPHO',			 sql.VarChar(20) ,iNSURPHO		);
request.input('showOnList',			 sql.Bit		 ,showOnList	);	
request.input('email',				 sql.VarChar(200),email			);
request.input('cell',				 sql.VarChar(30) ,cell			);
request.input('udf1',				 sql.VarChar(25) ,udf1			);
request.input('notes',				 sql.VarChar(200),notes			);
request.input('cert_City',			 sql.Bit		 ,cert_City		);
request.input('cert_County',		 sql.Bit		 ,cert_County	);
request.input('county_Expire',		 sql.Date	 ,county_Expire	);
request.input('cert_Test',			 sql.Bit		 ,cert_Test		);
request.input('cert_Survey',		 sql.Bit		 ,cert_Survey	);
request.input('cert_Install',		 sql.Bit		 ,cert_Install	);
request.input('cert_Repair',		 sql.Bit		 ,cert_Repair	);
request.input('cert_Land',			 sql.Bit		 ,cert_Land		);
request.input('cert_Fire',			 sql.Bit		 ,cert_Fire		);
request.input('cert_Confine',		 sql.Bit		 ,cert_Confine	);
request.input('udf2',				 sql.VarChar(25) ,udf2			);
request.input('udf2a',				 sql.Bit		 ,udf2a			);
request.input('udf3',				 sql.VarChar(25) ,udf3			);
request.input('udf3a',				 sql.Bit		 ,udf3a			);
request.input('status',				 sql.VarChar(25) ,status		);	
request.input('lastLetter',			 sql.Date	 ,lastLetter	);	
request.input('lastLetterName',		 sql.VarChar(100),lastLetterName);	
request.input('dateStamp',			 sql.Date	 ,dateStamp		);
request.input('uID',				 sql.VarChar(50) ,uID			);
request.input('companyUserID',		 sql.VarChar(15) ,companyUserID	);
request.input('password',			 sql.VarChar(15) ,password		);
request.input('contact',			 sql.VarChar(50) ,contact		);
request.input('lastUpdate',			 sql.Date	 ,lastUpdate	);	
request.input('lastUpdateID',		 sql.VarChar(50) ,lastUpdateID	);
request.input('lastUpdateBy',		 sql.VarChar(3)	 ,lastUpdateBy	);
request.input('testkit',		 sql.VarChar(100)	 ,testkitID	);
  request.execute('sp_UpdateCompanies').then(function(err, recordsets, returnValue, affected) {
    res.send('Updated companies');
    console.dir(err);
  }).catch(function(err) {
    console.log(err);
  });
});

};

exports.technicians_Update_postData = function(req, res, next) {

  var techniciansdata = req.body["data"];
//res.send(techniciansdata);
console.log(techniciansdata);

  var testerId			= techniciansdata.testerId			; 
  var status			= techniciansdata.status			; 
  var firstName		= techniciansdata.firstName			;	
  var lastName		= techniciansdata.lastName			;	
  var address1		= techniciansdata.address1			;	
  var address2		= techniciansdata.address2			;	
  var city			= techniciansdata.city				;	
  var state			= techniciansdata.state				;	
  var zip				= techniciansdata.zip				;
  var phone			= techniciansdata.phone				;	
  var fax				= techniciansdata.fax				;
  var testCertified	= techniciansdata.testCertified		;	
  var survCertified	= techniciansdata.survCertified		;	
  var instCertified	= techniciansdata.instCertified		;	
  var testCertNum		= techniciansdata.testCertNum		;
  var survCertNum		= techniciansdata.survCertNum		;
  var instCertNum		= techniciansdata.instCertNum		;
  var testCertExp		= techniciansdata.testCertExp		;
  var survCertExp		= techniciansdata.survCertExp		;
  var instCertExp		= techniciansdata.instCertExp		;
  var fee				= techniciansdata.fee				;
  var feePaid			= techniciansdata.feePaid			;
  var comments		= techniciansdata.comments			;	
  var dateStamp		= techniciansdata.dateStamp			;	
  var uID				= techniciansdata.uID				;
  var cOLICENSE		= techniciansdata.cOLICENSE			;	
  var rEPCERTIFIED	= techniciansdata.rEPCERTIFIED		;	
  var cNTRYLICex		= techniciansdata.cNTRYLICex		;
  var cITYLICNUM		= techniciansdata.cITYLICNUM		;
  var lICEXPDATE		= techniciansdata.lICEXPDATE		;
  var cERTDATE		= techniciansdata.cERTDATE			;	
  var cERTAGCY		= techniciansdata.cERTAGCY			;	
  var pLUMNUM			= techniciansdata.pLUMNUM			;
  var pLUMEXPIR		= techniciansdata.pLUMEXPIR			;	
  var lANDEXPIR		= techniciansdata.lANDEXPIR			;	
  var lANDNUM			= techniciansdata.lANDNUM			;
  var fIREEXPIR		= techniciansdata.fIREEXPIR			;	
  var fIRENUM			= techniciansdata.fIRENUM			;
  var iNSURANCE		= techniciansdata.iNSURANCE			;	
  var pOLICY			= techniciansdata.pOLICY			;
  var lIABILITY		= techniciansdata.lIABILITY			;	
  var iNSUREXP		= techniciansdata.iNSUREXP			;	
  var iNSURAGT		= techniciansdata.iNSURAGT			;	
  var iNSURPHO		= techniciansdata.iNSURPHO			;	
  var allDataSets		= techniciansdata.allDataSets		;
  var init			= techniciansdata.init				;	
  var email			= techniciansdata.email				;	
  var cell			= techniciansdata.cell				;	
  var uDF1			= techniciansdata.uDF1				;	
  var repCertNum		= techniciansdata.repCertNum		;
  var repCertExp		= techniciansdata.repCertExp		;
  var survCertAgcy	= techniciansdata.survCertAgcy		;	
  var instCertAgcy	= techniciansdata.instCertAgcy		;	
  var repCertAgcy		= techniciansdata.repCertAgcy		;
  var survCertDate	= techniciansdata.survCertDate		;	
  var instCertDate	= techniciansdata.instCertDate		;	
  var repCertDate		= techniciansdata.repCertDate		;
  var testCertNum2	= techniciansdata.testCertNum2		;	
  var testCertExp2	= techniciansdata.testCertExp2		;	
  var certAgcy2		= techniciansdata.certAgcy2			;	
  var certDate2		= techniciansdata.certDate2			;	
  var survCertNum2	= techniciansdata.survCertNum2		;	
  var survCertExp2	= techniciansdata.survCertExp2		;	
  var survCertAgcy2	= techniciansdata.survCertAgcy2		;	
  var survCertDate2	= techniciansdata.survCertDate2		;	
  var instCertNum2	= techniciansdata.instCertNum2		;	
  var instCertExp2	= techniciansdata.instCertExp2		;	
  var instCertAgcy2	= techniciansdata.instCertAgcy2		;	
  var instCertDate2	= techniciansdata.instCertDate2		;	
  var repCertNum2		= techniciansdata.repCertNum2		;
  var repCertExp2		= techniciansdata.repCertExp2		;
  var repCertAgcy2	= techniciansdata.repCertAgcy2		;	
  var repCertDate2	= techniciansdata.repCertDate2		;	
  var showOnList		= techniciansdata.showOnList		;
  var cityCheck		= techniciansdata.cityCheck			;	
  var countyCheck		= techniciansdata.countyCheck		;
  var plumberCheck	= techniciansdata.plumberCheck		;	
  var landScapeCheck	= techniciansdata.landScapeCheck	;
  var fireCheck		= techniciansdata.fireCheck			;	
  var confinedCheck	= techniciansdata.confinedCheck		;	
  var confinedLicNum	= techniciansdata.confinedLicNum	;
  var confinedLicExp	= techniciansdata.confinedLicExp	;
  var lastLetter		= techniciansdata.lastLetter		;
  var lastLetterName	= techniciansdata.lastLetterName	;
  var testerUserID	= techniciansdata.testerUserID		;	
  var password		= techniciansdata.password			;	
  var lastUpdate		= techniciansdata.lastUpdate		;
  var lastUpdateID	= techniciansdata.lastUpdateID		;	
  var lastUpdateBy	= techniciansdata.lastUpdateBy		;	
  var webStatus		= techniciansdata.webStatus			;	
  
  if(testCertExp==null||testCertExp=='')
  {
    testCertExp=new Date();
  }
  if(survCertExp==null||survCertExp=='')
  {
    survCertExp=new Date();
  }
  instCertExp=new Date();
  feePaid=new Date();
  dateStamp		=new Date();
  cNTRYLICex		=new Date();
  lICEXPDATE				=new Date();
  cERTDATE				=new Date();
  pLUMEXPIR				=new Date();
  lANDEXPIR							=new Date();
  fIREEXPIR				=new Date();
  iNSUREXP							=new Date();
  repCertExp		=new Date();
  survCertDate				=new Date();
  instCertDate		=new Date();
  repCertDate		=new Date();
  testCertExp2				=new Date();
  certDate2			=new Date();
  survCertExp2		=new Date();
  survCertDate2		=new Date();
  instCertExp2		=new Date();
  repCertExp2				=new Date();
  confinedLicExp		=new Date();
  lastLetter		=new Date();
  lastUpdate			=new Date();
  instCertDate2= new Date();
  repCertDate2= new Date();
  if(lIABILITY==null||lIABILITY=='')
  {
    lIABILITY=0;
  }

var conn = new sql.ConnectionPool(dbConfig);
conn.connect().then(function(conn) {
  var request = new sql.Request(conn);

  
  request.input('testerId',		        sql.Int ,testerId			   ) ;
  request.input('status',		        sql.VarChar(10) ,status			   ) ;
  request.input('firstName',			sql.VarChar(20)	,firstName		   ) ;
  request.input('lastName',			sql.VarChar(20)	,lastName		   ) ;
  request.input('address1',			sql.VarChar(70)	,address1		   ) ;
  request.input('address2',			sql.VarChar(70)	,address2		   ) ;
  request.input('city',				sql.VarChar(35)	,city			   ) ;
  request.input('state',				sql.VarChar(10)	,state			   ) ;
  request.input('zip',					sql.VarChar(15)	,zip				);
  request.input('phone',				sql.VarChar(30)	,phone			   ) ;
  request.input('fax',					sql.VarChar(30)	,fax				);
  request.input('testCertified',		sql.Bit			,testCertified	   ) ;
  request.input('survCertified',		sql.Bit			,survCertified	   ) ;
  request.input('instCertified',		sql.Bit			,instCertified	   ) ;
  request.input('testCertNum',			sql.VarChar(20)	,testCertNum		);
  request.input('survCertNum',			sql.VarChar(20)	,survCertNum		);
  request.input('instCertNum',			sql.VarChar(20)	,instCertNum		);
  request.input('testCertExp',			sql.Date		,testCertExp		);
  request.input('survCertExp',			sql.Date		,survCertExp		);
  request.input('instCertExp',			sql.Date		,instCertExp		);
  request.input('fee',					sql.VarChar(10)	,fee				);
  request.input('feePaid',				sql.Date		,feePaid			);
  request.input('comments',			sql.VarChar(6000),comments		   ) ;
  request.input('dateStamp',			sql.Date		,dateStamp		   ) ;
  request.input('uID',					sql.VarChar(50)	,uID				);
  request.input('cOLICENSE',			sql.VarChar(20)	,cOLICENSE		   ) ;
  request.input('rEPCERTIFIED',		sql.Bit			,rEPCERTIFIED	   ) ;
  request.input('cNTRYLICex',			sql.Date		,cNTRYLICex		   ) ;
  request.input('cITYLICNUM',			sql.VarChar(20)	,cITYLICNUM		   ) ;
  request.input('lICEXPDATE',			sql.Date		,lICEXPDATE		   ) ;
  request.input('cERTDATE',			sql.Date		,cERTDATE		   ) ;
  request.input('cERTAGCY',			sql.VarChar(25)	,cERTAGCY		   ) ;
  request.input('pLUMNUM',				sql.VarChar(20)	,pLUMNUM			);
  request.input('pLUMEXPIR',			sql.Date		,pLUMEXPIR		   ) ;
  request.input('lANDEXPIR',			sql.Date		,lANDEXPIR		   ) ;
  request.input('lANDNUM',				sql.VarChar(20)	,lANDNUM			);
  request.input('fIREEXPIR',			sql.Date		,fIREEXPIR		   ) ;
  request.input('fIRENUM',				sql.VarChar(20)	,fIRENUM			);
  request.input('iNSURANCE',			sql.VarChar(25)	,iNSURANCE		   ) ;
  request.input('pOLICY',				sql.VarChar(20)	,pOLICY			   ) ;
  request.input('lIABILITY',			sql.Int			,lIABILITY		   ) ;
  request.input('iNSUREXP',			sql.Date		,iNSUREXP		   ) ;
  request.input('iNSURAGT',			sql.VarChar(25)	,iNSURAGT		   ) ;
  request.input('iNSURPHO',			sql.VarChar(20)	,iNSURPHO		   ) ;
  request.input('allDataSets',			sql.Bit			,allDataSets		);
  request.input('init',				sql.VarChar(3)	,init			   ) ;
  request.input('email',				sql.VarChar(200),email			   ) ;
  request.input('cell',				sql.VarChar(30)	,cell			   ) ;
  request.input('uDF1',				sql.VarChar(25)	,uDF1			   ) ;
  request.input('repCertNum',			sql.VarChar(20)	,repCertNum		   ) ;
  request.input('repCertExp',			sql.Date		,repCertExp		   ) ;
  request.input('survCertAgcy',		sql.VarChar(25)	,survCertAgcy	   ) ;
  request.input('instCertAgcy',		sql.VarChar(25)	,instCertAgcy	   ) ;
  request.input('repCertAgcy',			sql.VarChar(25)	,repCertAgcy		);
  request.input('survCertDate',		sql.Date		,survCertDate	   ) ;
  request.input('instCertDate',		sql.Date		,instCertDate	   ) ;
  request.input('repCertDate',			sql.Date		,repCertDate		);
  request.input('testCertNum2',		sql.VarChar(20)	,testCertNum2	   ) ;
  request.input('testCertExp2',		sql.Date		,testCertExp2	   ) ;
  request.input('certAgcy2',			sql.VarChar(25)	,certAgcy2		   ) ;
  request.input('certDate2',			sql.Date		,certDate2		   ) ;
  request.input('survCertNum2',		sql.VarChar(20)	,survCertNum2	   ) ;
  request.input('survCertExp2',		sql.Date		,survCertExp2	   ) ;
  request.input('survCertAgcy2',		sql.VarChar(25)	,survCertAgcy2	   ) ;
  request.input('survCertDate2',		sql.Date		,survCertDate2	   ) ;
  request.input('instCertNum2',		sql.VarChar(20)	,instCertNum2	   ) ;
  request.input('instCertExp2',		sql.Date		,instCertExp2	   ) ;
  request.input('instCertAgcy2',		sql.VarChar(25)	,instCertAgcy2	   ) ;
  request.input('instCertDate2',		sql.Date		,instCertDate2	   ) ;
  request.input('repCertNum2',			sql.VarChar(20)	,repCertNum2		);
  request.input('repCertExp2',			sql.Date		,repCertExp2		);
  request.input('repCertAgcy2',		sql.VarChar(25)	,repCertAgcy2	   ) ;
  request.input('repCertDate2',		sql.Date		,repCertDate2	   ) ;
  request.input('showOnList',			sql.Bit			,showOnList		   ) ;
  request.input('cityCheck',			sql.Bit			,cityCheck		   ) ;
  request.input('countyCheck',			sql.Bit			,countyCheck		);
  request.input('plumberCheck',		sql.Bit			,plumberCheck	   ) ;
  request.input('landScapeCheck',		sql.Bit			,landScapeCheck	   ) ;
  request.input('fireCheck',			sql.Bit			,fireCheck		   ) ;
  request.input('confinedCheck',		sql.Bit			,confinedCheck	   ) ;
  request.input('confinedLicNum',		sql.VarChar(20)	,confinedLicNum	   ) ;
  request.input('confinedLicExp',		sql.Date		,confinedLicExp	   ) ;
  request.input('lastLetter',			sql.Date		,lastLetter		   ) ;
  request.input('lastLetterName',		sql.VarChar(100),lastLetterName	   ) ;
  request.input('testerUserID',		sql.VarChar(15)	,testerUserID	   ) ;
  request.input('password',			sql.VarChar(15)	,password		   ) ;
  request.input('lastUpdate',			sql.Date		,lastUpdate		   ) ;
  request.input('lastUpdateID',		sql.VarChar(50)	,lastUpdateID	   ) ;
  request.input('lastUpdateBy',		sql.VarChar(3)	,lastUpdateBy	   ) ;
  request.input('webStatus',			sql.VarChar(10) ,webStatus		   ) ;

  request.execute('sp_UpdateTechnicians').then(function(err, recordsets, returnValue, affected) {
    res.send('Update technicians');
    console.dir(err);
  }).catch(function(err) {
    console.log(err);
  });
});

};
// Display detail page for a specific technicians
exports.technicians_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: technicians detail: ' + req.params.id);
};

// Display technicians create form on GET
exports.technicians_create_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: technicians create GET');
};

// // Handle technicians create on POST
// exports.technicians_create_post = function(req, res, next) {
//     res.send('NOT IMPLEMENTED: technicians create POST');
// };

// Display technicians delete form on GET
exports.technicians_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: technicians delete GET');
};

// Handle technicians delete on POST
exports.technicians_delete_post = function(req, res, next) {
   //
};

// Display technicians update form on GET
exports.technicians_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: technicians update GET');
};

// Handle technicians update on POST
// exports.technicians_update1_post = function(req, res, next) {
//     res.send('NOT IMPLEMENTED: technicians update POST');
// };




exports.devtypes_details_get = function(req, res, next) {
  devtypesQuery="SELECT * FROM DevTypes where DevId="+req.params.id;
new sql.ConnectionPool(dbConfig).connect().then(pool => {
return pool.request().query(devtypesQuery)
}).then(result => {
let devtypes = result.recordset;
res.setHeader('Access-Control-Allow-Origin', '*');
res.status(200).json(devtypes);
sql.close();
}).catch(err => {
res.status(500).send({ message: err})
sql.close();
});
};


exports.testkit_details_get = function(req, res, next) {
  testkitQuery="select * from TestKit where serialnum='"+req.params.id+"'";
  //res.send(testkitQuery);
new sql.ConnectionPool(dbConfig).connect().then(pool => {
return pool.request().query(testkitQuery)
}).then(result => {
let testkit = result.recordset;
res.setHeader('Access-Control-Allow-Origin', '*');
res.status(200).json(testkit);
sql.close();
}).catch(err => {
res.status(500).send({ message: err})
sql.close();
});
};
exports.companies_details_get = function(req, res, next) {
  console.log('/companiess get');
// connect to your database
   companiesQuery="select * from Companies where CompanyId="+req.params.id;
   //res.send(companiesQuery);
new sql.ConnectionPool(dbConfig).connect().then(pool => {
return pool.request().query(companiesQuery)
}).then(result => {
 let companiess = result.recordset;
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.status(200).json(companiess);
 sql.close();
}).catch(err => {
 res.status(500).send({ message: err})
 sql.close();
});
};
exports.technicians_details_get = function(req, res, next) {
   console.log('/technicianss get');
var testerId=req.params.id;
// connect to your database
    techniciansQuery="select * from Technicians where TesterID="+testerId;
//res.send(techniciansQuery);
new sql.ConnectionPool(dbConfig).connect().then(pool => {
return pool.request().query(techniciansQuery)
}).then(result => {
  let technicianss = result.recordset;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(technicianss);
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
