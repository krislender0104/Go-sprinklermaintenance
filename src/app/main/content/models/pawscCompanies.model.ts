
export class Company {
  CompanyID: number;
  Company: string;
  Address1: string;
  Address2: string;
  City: string;
  State: string;
  Zip: string;
  Phone: string;
  Fax: string;
  CntyLicNum: string;
  LICEXPstring: string;
  Insurance: string;
  Policy: string;
  Liability: number;
  INSUREXP: string;
  INSURAGT: string;
  INSURPHO: string;
  ShowOnList: boolean;
  Email: string;
  Cell: string;
  udf1: string;
  Notes: string;
  Cert_City: boolean;
  Cert_County: boolean;
  County_Expire: string;
  Cert_Test: boolean;
  Cert_Survey: boolean;
  Cert_Install: boolean;
  Cert_Repair: boolean;
  Cert_Fire: boolean;
  Cert_Confine: boolean;
  udf12: string;
  udf2a: boolean;
  udf3: string;
  udf3a: boolean;
  status: string;
  LastLetter: string;
  LastLetterName: string;
  stringStamp: string;
  UID: number;
  CompanyUserID: number;
  Password: string;
  Contact: string;
  LastUpdate: string;
  LastUpdateID: number;
  LastUpdateBy: string;

  constructor(company) {
    {
      this.CompanyID = company.CompanyID;
      this.Company = company.Company;
      this.Address1 = company.Address1;
      this.Address2 = company.Address2;
      this.City = company.City;
      this.State = company.State;
      this.Zip = company.Zip;
      this.Phone = company.Phone;
      this.Fax = company.Fax;
      this.INSUREXP = company.INSUREXP;
      this.LICEXPstring = company.LICEXPstring;
      this.Insurance = company.Insurance;
      this.Policy = company.Policy;
      this.Liability = company.Liability;
      this.INSUREXP = company.INSUREXP;
      this.INSURAGT = company.INSURAGT;
      this.INSURPHO = company.INSURPHO;
      this.ShowOnList = company.ShowOnList;
      this.Email = company.Email;
      this.Cell = company.Cell;
      this.udf1 = company.udf1;
      this.Notes = company.Notes;
      this.Cert_City = company.Cert_City;
      this.Cert_County = company.Cert_County;
      this.County_Expire = company.County_Expire;
      this.Cert_Test = company.Cert_Test;
      this.Cert_Survey = company.Cert_Survey;
      this.Cert_Install = company.Cert_Install;
      this.Cert_Repair = company.Cert_Repair;
      this.Cert_Fire = company.Cert_Fire;
      this.Cert_Confine = company.Cert_Confine;
      this.udf12 = company.udf12;
      this.udf2a = company.udf12a;
      this.udf3 = company.udf13;
      this.udf3a = company.udf13a;
      this.status = company.status;
      this.LastLetter = company.LastLetter;
      this.LastLetterName = company.LastLetterName;
      this.stringStamp = company.stringStamp;
      this.UID = company.UID;
      this.CompanyUserID = company.CompanyUserID;
      this.Password = company.Password;
      this.Contact = company.Contact;
      this.LastUpdateBy = company.LastUpdateBy;
      this.LastUpdate = company.LastUpdate;
      this.LastUpdateID = company.LastUpdateID;
    }
  }

  toggleShowOnList() {
    this.ShowOnList = !this.ShowOnList;
  }

  toggleCert_City() {
    this.Cert_City = !this.Cert_City;
  }

  toggleCert_County() {
    this.Cert_County = !this.Cert_County;
  }

  toggleCert_Test() {
    this.Cert_Test = !this.Cert_Test;
  }

  toggleCert_Survey() {
    this.Cert_Survey = !this.Cert_Survey;
  }

  toggleCert_Install() {
    this.Cert_Install = !this.Cert_Install;
  }

  toggleCert_Repair() {
    this.Cert_Repair = !this.Cert_Repair;
  }

  toggleCert_Fire() {
    this.Cert_Fire = !this.Cert_Fire;
  }

  toggleCert_Confine() {
    this.Cert_Confine = !this.Cert_Confine;
  }

  toggleudf2a() {
    this.udf2a = !this.udf2a;
  }

  toggleudf3a() {
    this.udf3a = !this.udf3a;
  }
}
