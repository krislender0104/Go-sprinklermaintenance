/*SELECT TOP (1000) [SiteID]
      ,[ClientID]
      ,[AccountNum]
      ,[Contact]
      ,[Company]
      ,[Address]
      ,[Address2]
      ,[City]
      ,[State]
      ,[zip]
      ,[Phone]
      ,[Ext]
      ,[Cell1]
      ,[Fax]
      ,[Email]
      ,[LocationID]
      ,[SiteType]
      ,[SiteUse]
      ,[TestMonth]
      ,[TestDay]
      ,[SurveyDue]
      ,[SurveyDue2]
      ,[SurveyFreq]
      ,[CityLimits]
      ,[UDF1]
      ,[UDF2]
      ,[UDF3]
      ,[LastSurvey]
      ,[LastLetter]
      ,[LastUpdate]
      ,[LinkOn]
      ,[Link]
      ,[LastLink]
      ,[LinkCode]
      ,[DateStamp]
      ,[UID]
      ,[LastUpdateBy]
      ,[LastUpdateID]
      ,[ShutOffDate]
      ,[sExtendDays]
      ,[sExtendedOn]
      ,[sNoticeDue1]
      ,[sNoticeSent1]
      ,[sNoticeSkip1]
      ,[sNoticeDue2]
      ,[sNoticeSent2]
      ,[sNoticeSkip2]
      ,[sNoticeDue3]
      ,[sNoticeSent3]
      ,[sNoticeSkip3]
      ,[sNoticeDue4]
      ,[sNoticeSent4]
      ,[sNoticeSkip4]
      ,[sShutOffDue]
      ,[sShutOffSent]
      ,[sShutOffSkip]
      ,[sComplianceDate]
      ,[sComplianceSent]
      ,[LastLetterCode]
      ,[SurveyBy]
      ,[LastSurveyStatus]
      ,[UDF4]
      ,[UDF5]
      ,[UDF6]
      ,[UDF7]
      ,[UDF8]
      ,[UDF9]
      ,[UDF10]
      ,[UDF11]
      ,[UDF12]
      ,[UDF13]
      ,[UDF14]
      ,[UDF15]
      ,[UDF16]
      ,[UDF17]
      ,[UDF18]
      ,[UDF19]
      ,[UDF20]
      ,[UDF21]
      ,[UDF22]
      ,[StreetName]
      ,[LastName]
      ,[StreetNo]
      ,[HazCount]
  FROM [TokaySQL].[dbo].[Sites]
  
  */

export class Sites {
         SiteID: number;
         ClientID: number;
         AccountNum: number;
         Contact: string;
         Company: string;
         Address1: string;
         Address2: string;
         City: string;
         State: string;
         Zip: string;
         Phone: string;
         ext: string;
         Fax: string;
         Email: string;
         LocationID: string;
         SiteType: string;
         SiteUse: string;
         TestMonth: string;
         TestDay: number;
         SurveyDue: string;
         SurveyDue2: string;
         SurveyFreq: string;
         LastSurvey: boolean;
         LastLetter: string;
         CityLimits: string;
         UDF1: string;
         UDF2: string;
         UDF3: string;
         UDF4: string;
         UDF5: string;
         UDF6: string;
         UDF7: string;
         UDF8: string;
         UDF9: string;
         UDF10: string;
         UDF11: string;
         UDF12: string;
         UDF13: string;
         UDF14: string;
         UDF15: string;
         UDF16: string;
         UDF17: string;
         UDF18: string;
         UDF19: string;
         UDF20: string;
         UDF21: string;
         UDF22: string;
         Notes: string;
         LinkOn: boolean;
         Link: boolean;
         LastLink: string;
         LinkCode: boolean;
         DateStamp: boolean;
         UID: number;
         LastUpdate: string;
         LastUpdateID: number;
         LastUpdateBy: string;
         ShutOffDate: boolean;
         sExtendDays: boolean;
         sExtendedOn: boolean;
         sNoticeDue1: string;
         sNoticeSent1: boolean;
         sNoticeSkip1: string;
         sNoticeDue2: string;
         sNoticeSent2: boolean;
         sNoticeSkip2: string;
         sNoticeDue3: string;
         sNoticeSent3: boolean;
         sNoticeSkip3: string;
         sNoticeDue4: string;
         sNoticeSent4: boolean;
         sNoticeSkip4: string;
         sShutOffDue: boolean;
         sShutOffSent: string;
         sShutOffSkip: string;
         stringStamp: string;
         sComplianceDate: number;
         CompanyUserID: string;
         sComplianceSent: string;
         LastLetterCode: number;
         SurveyBy: string;
         Password: string;
         LastSurveyStatus: number;
         StreetName: string;
         LastName: string;
         StreetNo: number;
         HazCount: string;

         constructor(sites) {
           {
             this.SiteID = sites.SiteID;
             this.ClientID = sites.ClientID;
             this.AccountNum = sites.AccountNum;
             this.Contact = sites.Contact;
             this.Company = sites.Company;
             this.Address1 = sites.Address1;
             this.Address2 = sites.Address2;
             this.City = sites.City;
             this.State = sites.State;
             this.Zip = sites.Zip;
             this.Phone = sites.Phone;
             this.ext = sites.ext;
             this.Fax = sites.Fax;
             this.Email = sites.Email;
             this.LocationID = sites.LocationID;
             this.SiteType = sites.SiteType;
             this.SiteUse = sites.SiteUse;
             this.TestMonth = sites.TestMonth;
             this.TestDay = sites.TestDay;
             this.SurveyDue = sites.SurveyDue;
             this.SurveyDue2 = sites.SurveyDue2;
             this.SurveyFreq = sites.SurveyFreq;
             this.CityLimits = sites.CityLimits;
             this.UDF1 = sites.UDF1;
             this.UDF2 = sites.UDF2;
             this.UDF3 = sites.UDF3;
             this.UDF4 = sites.UDF4;
             this.UDF5 = sites.UDF5;
             this.UDF6 = sites.UDF6;
             this.UDF7 = sites.UDF7;
             this.UDF8 = sites.UDF8;
             this.UDF9 = sites.UDF9;
             this.UDF10 = sites.UDF10;
             this.UDF11 = sites.UDF11;
             this.UDF12 = sites.UDF12;
             this.UDF13 = sites.UDF13;
             this.UDF14 = sites.UDF14;
             this.UDF15 = sites.UDF15;
             this.UDF16 = sites.UDF16;
             this.UDF17 = sites.UDF17;
             this.UDF18 = sites.UDF18;
             this.UDF19 = sites.UDF19;
             this.UDF20 = sites.UDF20;
             this.UDF21 = sites.UDF21;
             this.UDF22 = sites.UDF22;
             this.LastUpdate = sites.LastUpdate;
             this.LastUpdateID = sites.LastUpdateID;
             this.LastLetter = sites.LastLetter;
             this.LastUpdateBy = sites.LastUpdateBy;
             this.DateStamp = sites.DateStamp;
             this.UID = sites.UID;
             this.Notes = sites.Notes;
             this.LinkOn = sites.LinkOn;
             this.Link = sites.Link;
             this.LastLink = sites.LastLink;
             this.LinkCode = sites.LinkCode;
             this.ShutOffDate = sites.ShutOffDate;
             this.sExtendDays = sites.sExtendDays;
             this.sExtendedOn = sites.sExtendedOn;
             this.sNoticeDue1 = sites.sNoticeDue1;
             this.sNoticeSent1 = sites.sNoticeSent1;
             this.sNoticeSkip1 = sites.sNoticeSkip1;
             this.sNoticeDue2 = sites.sNoticeDue2;
             this.sNoticeSent2 = sites.sNoticeSent2;
             this.sNoticeSkip2 = sites.sNoticeSkip2;
             this.sNoticeDue3 = sites.sNoticeDue3;
             this.sNoticeSent3 = sites.sNoticeSent3;
             this.sNoticeSkip3 = sites.sNoticeSkip3;
             this.sNoticeDue4 = sites.sNoticeDue4;
             this.sNoticeSent4 = sites.sNoticeSent4;
             this.sNoticeSkip4 = sites.sNoticeSkip4;
             this.sShutOffDue = sites.sShutOffDue;
             this.sShutOffSent = sites.sShutOffSent;
             this.sShutOffSkip = sites.sShutOffSkip;
             this.stringStamp = sites.stringStamp;
             this.sComplianceDate = sites.sComplianceDate;
             this.CompanyUserID = sites.CompanyUserID;
             this.sComplianceSent = sites.sComplianceSent;
             this.LastLetterCode = sites.LastLetterCode;
             this.SurveyBy = sites.SurveyBy;
             this.Password = sites.Password;
             this.LastSurveyStatus = sites.LastSurveyStatus;
             this.StreetName = sites.StreetName;
             this.LastName = sites.LastName;
             this.StreetNo = sites.StreetNo;
             this.HazCount = sites.HazCount;
           }
         }
       }
