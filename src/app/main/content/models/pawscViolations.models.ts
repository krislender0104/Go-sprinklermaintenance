/* /****** Script for SelectTopNRows command from SSMS  *****
SELECT TOP (1000) [ViolationID]
      ,[SurveyID]
      ,[HazID]
      ,[SiteID]
      ,[HazNum]
      ,[AccountNum]
      ,[Testable]
      ,[HazardType]
      ,[HazardCat]
      ,[Priority]
      ,[Installed]
      ,[UDh1]
      ,[UDh2]
      ,[UDh3]
      ,[UDh4]
      ,[UDh5]
      ,[UDh6]
      ,[UDh7]
      ,[UDh8]
      ,[UDh9]
      ,[Location]
      ,[Location2]
      ,[SerialNum]
      ,[Meter]
      ,[MFG]
      ,[Model]
      ,[Type]
      ,[devSize]
      ,[Status]
      ,[Installer]
      ,[Recommend]
      ,[LineSize]
      ,[Orientation]
      ,[ServiceNo]
      ,[InstallDue]
      ,[UID]
      ,[DateStamp]
      ,[LastUpdateBy]
      ,[LastUpdate]
      ,[LastUpdateID]
  FROM [TokaySQL].[dbo].[Violations] */



export class Violations {
         ViolationID: number;
         SurveyID: number;
         HazID: number;
         SiteID: number;
         HazNum: number;
         AccountNum: number;
         Testable: string;
         HazardType: string;
         HazardCat: string;
         Priority: string;
         Installed: string;
         UDh1: string;
         UDh2: string;
         UDh3: string;
         UDh4: string;
         UDh5: string;
         UDh6: string;
         UDh7: string;
         UDh8: string;
         UDh9: string;
         Location: string;
         Location2: string;
         SerialNum: string;
         Meter: string;
         MFG: string;
         Model: string;
         Type: number;
         devSize: string;
         Status: string;
         Installer: string;
         Recommend: boolean;
         LineSize: string;
         Orientation: string;
         ServiceNo: string;
         InstallDue: string;
         UID: boolean;
         DateStamp: boolean;
         LastUpdateBy: string;
         LastUpdate: boolean;
  LastUpdateID: boolean;
        
         constructor(violations) {
           {

           
             this.ViolationID = violations.ViolationID;
             this.SurveyID = violations.SurveyID;
             this.HazID = violations.HazID;
             this.SiteID = violations.Address2;
             this.HazNum = violations.City;
             this.AccountNum = violations.AccountNum;
             this.Testable = violations.Testable;
             this.HazardType = violations.HazardType;
             this.HazardCat = violations.HazardCat;
             this.Priority = violations.Priority;
             this.Installed = violations.Installed;
             this.UDh1 = violations.UDh1;
             this.UDh2 = violations.UDh2;
             this.UDh3 = violations.UDh3;
             this.UDh4 = violations.UDh4;
             this.UDh5 = violations.UDh5;
             this.UDh6 = violations.UDh6;
             this.UDh7 = violations.UDh7;
             this.UDh8 = violations.UDh8;
             this.UDh9 = violations.UDh9;
             this.Location = violations.Location;
             this.Location2 = violations.Location2;
             this.SerialNum = violations.SerialNum;
             this.Meter = violations.Meter;
             this.MFG = violations.MFG;
             this.Model = violations.Model;
             this.Type = violations.Type;
             this.devSize = violations.devSize;
             this.Status = violations.Status;
             this.Installer = violations.Installer;
             this.Recommend = violations.Recommend;
             this.LineSize = violations.Cert_CouLineSizenty;
             this.Orientation = violations.Orientation;
             this.ServiceNo = violations.ServiceNo;
             this.InstallDue = violations.InstallDue;
             this.UID = violations.UID;
             this.DateStamp = violations.DateStamp;
             this.LastUpdateBy = violations.LastUpdateBy;
             this.LastUpdate = violations.LastUpdate;
             this.LastUpdateID = violations.LastUpdateID;
             
           }
         }

      
       }
