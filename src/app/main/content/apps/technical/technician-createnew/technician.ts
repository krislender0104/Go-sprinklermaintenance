export class Technician {
    TesterID: number;
    Status?: string;
    FirstName?: string;
    LastName?: string;
    Address1?: string;
    Address2?: any;
    City?: string;
    State?: string;
    Zip?: string;
    Phone?: string;
    Ext?: string;
    Fax?: any;
    TestCertified: boolean;
    SurvCertified: boolean;
    InstCertified: boolean;
    TestCertNum?: string;
    SurvCertNum?: any;
    InstCertNum?: any;
    TestCertExp?: string;
    SurvCertExp?: any;
    InstCertExp?: any;
    Fee?: any;
    FeePaid?: any;
    Comments?: string;
    DateStamp?: string;
    UID?: string;
    COLICENSE?: any;
    REPCERTIFIED: boolean;
    CNTRYLICex?: any;
    CITYLICNUM?: any;
    LICEXPDATE?: any;
    CERTDATE?: any;
    CERTAGCY?: string;
    PLUMNUM?: any;
    PLUMEXPIR?: any;
    LANDEXPIR?: any;
    LANDNUM?: any;
    FIREEXPIR?: any;
    FIRENUM?: any;
    INSURANCE?: any;
    POLICY?: any;
    LIABILITY?: any;
    INSUREXP?: any;
    INSURAGT?: any;
    INSURPHO?: any;
    AllDataSets: boolean;
    Init?: any;
    Email?: any;
    Cell?: any;
    UDF1?: any;
    RepCertNum?: any;
    RepCertExp?: any;
    SurvCertAgcy?: any;
    InstCertAgcy?: any;
    RepCertAgcy?: any;
    SurvCertDate?: any;
    InstCertDate?: any;
    RepCertDate?: any;
    TestCertNum2?: any;
    TestCertExp2?: any;
    CertAgcy2?: any;
    CertDate2?: any;
    SurvCertNum2?: any;
    SurvCertExp2?: any;
    SurvCertAgcy2?: any;
    SurvCertDate2?: any;
    InstCertNum2?: any;
    InstCertExp2?: any;
    InstCertAgcy2?: any;
    InstCertDate2?: any;
    RepCertNum2?: any;
    RepCertExp2?: any;
    RepCertAgcy2?: any;
    RepCertDate2?: any;
    ShowOnList: boolean = false;
    CityCheck: boolean = false;
    CountyCheck: boolean = false;
    PlumberCheck: boolean = false;
    LandScapeCheck: boolean = false;
    FireCheck: boolean = false;
    ConfinedCheck: boolean = false;
    ConfinedLicNum?: any;
    ConfinedLicExp?: any;
    LastLetter?: any;
    LastLetterName?: any;
    TesterUserID?: string;
    Password?: string;
    LastUpdate?: string;
    LastUpdateID?: string;
    LastUpdateBy?: string;
    WebStatus?: any;
    Contact?: string;
    Logon?: string;
    Initials?: string;
    FullName?: string;
    UserPassword?: string;
    Notes?: string;
    LicenseType?: string;
    CompanyID?:any;
}



// this.techcreateform= new FormGroup({
//     status        :new FormControl(''),
//     firstName   :new FormControl(''), 
//     lastName   :new FormControl(''), 
//     address1   :new FormControl(''), 
//     address2   :new FormControl(''), 
//     city    :new FormControl(''), 
//     state    :new FormControl(''), 
//     zip      :new FormControl(''),
//     phone    :new FormControl(''), 
//     fax      :new FormControl(''),
//     testCertified  :new FormControl(''), 
//     survCertified  :new FormControl(''), 
//     instCertified  :new FormControl(''), 
//     testCertNum    :new FormControl(''),
//     survCertNum    :new FormControl(''),
//     instCertNum    :new FormControl(''),
//     testCertExp    :new FormControl(''),
//     survCertExp    :new FormControl(''),
//     instCertExp    : new FormControl(''),
//     fee      :new FormControl(''),
//     feePaid     : new FormControl(''), 
//     comments   :new FormControl(''), 
//     dateStamp   : new FormControl(''),  
//     uID      :new FormControl(''),
//     cOLICENSE   :new FormControl(''), 
//     rEPCERTIFIED  :new FormControl(''), 
//     cNTRYLICex    : new FormControl(''),
//     cITYLICNUM    :new FormControl(''),
//     lICEXPDATE    : new FormControl(''),
//     cERTDATE   : new FormControl(''),
//     cERTAGCY   :new FormControl(''), 
//     pLUMNUM     :new FormControl(''),
//     pLUMEXPIR   : new FormControl(''), 
//     lANDEXPIR   : new FormControl(''), 
//     lANDNUM     :new FormControl(''),
//     fIREEXPIR   : new FormControl(''), 
//     fIRENUM     :new FormControl(''),
//     iNSURANCE   :new FormControl(''), 
//     pOLICY     :new FormControl(''),
//     lIABILITY   :new FormControl(''), 
//     iNSUREXP   : new FormControl(''), 
//     iNSURAGT   :new FormControl(''), 
//     iNSURPHO   :new FormControl(''), 
//     allDataSets    :new FormControl(''),
//     init    :new FormControl(''), 
//     email    :new FormControl(''), 
//     cell    :new FormControl(''), 
//     uDF1    :new FormControl(''), 
//     repCertNum    :new FormControl(''),
//     repCertExp    : new FormControl(''),
//     survCertAgcy  :new FormControl(''), 
//     instCertAgcy  :new FormControl(''), 
//     repCertAgcy    :new FormControl(''),
//     survCertDate  : new FormControl(''), 
//     instCertDate  : new FormControl(''), 
//     repCertDate    : new FormControl(''),
//     testCertNum2  :new FormControl(''), 
//     testCertExp2  : new FormControl(''), 
//     certAgcy2   :new FormControl(''), 
//     certDate2   : new FormControl(''), 
//     survCertNum2  :new FormControl(''), 
//     survCertExp2  : new FormControl(''), 
//     survCertAgcy2  :new FormControl(''), 
//     survCertDate2  : new FormControl(''), 
//     instCertNum2  :new FormControl(''), 
//     instCertExp2  : new FormControl(''), 
//     instCertAgcy2  :new FormControl(''), 
//     instCertDate2  : new FormControl(''), 
//     repCertNum2    :new FormControl(''),
//     repCertExp2    : new FormControl(''),
//     repCertAgcy2  :new FormControl(''), 
//     repCertDate2  : new FormControl(''), 
//     showOnList    :new FormControl(''),
//     cityCheck   :new FormControl(''), 
//     countyCheck    :new FormControl(''),
//     plumberCheck  :new FormControl(''), 
//     landScapeCheck   :new FormControl(''),
//     fireCheck   :new FormControl(''), 
//     confinedCheck  :new FormControl(''), 
//     confinedLicNum   :new FormControl(''),
//     confinedLicExp   : new FormControl(''),
//     lastLetter    : new FormControl(''),
//     lastLetterName   :new FormControl(''),
//     testerUserID  :new FormControl(''), 
//     password   :new FormControl(''), 
//     lastUpdate    : new FormControl(''),
//     lastUpdateID  :new FormControl(''), 
//     lastUpdateBy  :new FormControl(''), 
//     webStatus   :new FormControl(''),
//     logon:new FormControl(),
//     initials:new FormControl(),
//     fullName:new FormControl(),
//     notes:new FormControl(),
//     licenseType:new FormControl(),
//     userpassword   :new FormControl(''), 
// });