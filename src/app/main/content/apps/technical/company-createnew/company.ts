export class Company {
    CompanyID: number;
    Company?: string;
    Address1?: string;
    Address2?: string;
    City?: string;
    State?: string;
    Zip?: string;
    Phone?: string;
    Ext?:String;
    Fax?: string;
    CntyLicNum?: string;
    CITYLICNUM?: string;
    LICEXPDATE?: string;
    Insurance?: string;
    Policy?: string;
    Liability?: number;
    INSUREXP?: string;
    INSURAGT?: string;
    INSURPHO?: string;
    ShowOnList: boolean=false;
    Email?: string;
    Cell?: string;
    udf1?: string;
    Notes?: string;
    Cert_City: boolean=false;
    Cert_County: boolean=false;
    County_Expire?: string;
    Cert_Test: boolean=false;
    Cert_Survey: boolean=false;
    Cert_Install: boolean=false;
    Cert_Repair: boolean=false;
    Cert_Land: boolean=false;
    Cert_Fire: boolean=false;
    Cert_Confine: boolean=false;
    udf2?: any;
    udf2a: boolean=false;
    udf3?: any;
    udf3a: boolean=false;
    Status?: string;
    LastLetter?: string;
    LastLetterName?: any;
    DateStamp?: string;
    UID?: string;
    CompanyUserID?: string;
    Password?: string;
    Contact?: string;
    LastUpdate?: string;
    LastUpdateID?: string;
    LastUpdateBy?: string;
    TestKitID:any;

  }


  // export class CompanyCreate{

  //   company :new FormControl(''),        
  //   address1 :new FormControl(''),
  //   address2 :new FormControl(''),
  //   city :new FormControl(''),
  //   state :new FormControl(''),
  //   zip :new FormControl(''),
  //   phone :new FormControl(''),
  //   fax :new FormControl(''),
  //   cntyLicNum :new FormControl(''),
  //   cITYLICNUM :new FormControl(''),
  //   lICEXPDATE :new FormControl(null),
  //   insurance :new FormControl(''),
  //   policy :new FormControl(''),
  //   liability :new FormControl(''),
  //   iNSUREXP :new FormControl(''),
  //   iNSURAGT :new FormControl(''),
  //   iNSURPHO :new FormControl(''),
  //   showOnList :new FormControl(''),
  //   email :new FormControl(''),
  //   cell :new FormControl(''),
  //   udf1 :new FormControl(''),
  //   notes :new FormControl(''),
  //   cert_City :new FormControl(''),
  //   cert_County :new FormControl(''),
  //   county_Expire :new FormControl(null),
  //   cert_Test :new FormControl(''),
  //   cert_Survey :new FormControl(''),
  //   cert_Install :new FormControl(''),
  //   cert_Repair :new FormControl(''),
  //   cert_Land :new FormControl(''),
  //   cert_Fire :new FormControl(''),
  //   cert_Confine :new FormControl(''),
  //   udf2 :new FormControl(''),
  //   udf2a :new FormControl(''),
  //   udf3 :new FormControl(''),
  //   udf3a :new FormControl(''),
  //   status :new FormControl(''),
  //   lastLetter :new FormControl(null),
  //   lastLetterName :new FormControl(''),
  //   dateStamp :new FormControl(''),
  //   uID :new FormControl(''),
  //   companyUserID :new FormControl(''),
  //   password :new FormControl(''),
  //   contact :new FormControl(''),
  //   lastUpdate :new FormControl(''),
  //   lastUpdateID :new FormControl(''),
  //   lastUpdateBy :new FormControl(''),
  //   testkitID : new FormControl(''),

  // }