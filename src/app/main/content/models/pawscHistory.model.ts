export class History {
         rownum: number;
         SiteID: number;
         ClientID: number;
         HazID: string;
         NoticeType: string;
         EventDue: string;
         NoticeDue: string;
         PrintDate: string;
         PrintBy: string;
         NoticeName: string;
         DateStamp: string;
         UID: number;
         TesterID: number;
         CompanyID: number;
         SendToCompany: string;
         SendToContact: string;
         SendToAddress: string;
         SendToAddress2: string;
         SendToCity: string;
         SendToState: string;
         SendToZip: string;
         SendToEmail: string;

         constructor(history) {
           {
                 this.rownum = history.rownum;
                 this.SiteID = history.SiteID;
                 this.ClientID = history.ClientID;
                 this.HazID = history.HazID;
                 this.NoticeType = history.NoticeType;
                 this.EventDue = history.EventDue;
                 this.NoticeDue = history.NoticeDue;
                 this.PrintDate = history.PrintDate;
                 this.PrintBy = history.PrintBy;
                 this.NoticeName = history.NoticeName;
                 this.DateStamp = history.DateStamp;
                 this.UID = history.UID;
                 this.TesterID = history.TesterID;
                 this.CompanyID = history.CompanyID;
                 this.SendToCompany = history.SendToCompany;
                 this.CompanyID = history.CompanyID;
                 this.SendToContact = history.SendToContact;
                 this.SendToAddress = history.SendToAddress;
                 this.SendToAddress2 = history.SendToAddress2;
                 this.SendToCity = history.SendToCity;
                 this.SendToState = history.SendToState;
                 this.SendToZip = history.SendToZip;
                 this.SendToEmail = history.SendToEmail;
           }
         }
       }
