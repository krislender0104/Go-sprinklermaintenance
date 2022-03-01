export class User {
         UserID: number;
         FullName: string;
         Initials: string;
         Disabled: boolean;
         Notes: string;
         SysAdmin: boolean;
         SetupLists: boolean;
         CustomizeGrids: boolean;
         SetupNotices: boolean;
         AccessAll: boolean;
         ModifyAll: boolean;
         UID: string;
         DateStamp: string;
         LicenseType: string;

    constructor(user) {
           {
            this.UserID = user.UserID;
            this.FullName = user.FullName;
            this.Initials = user.Initials;
            this.Disabled = user.Disabled;
            this.Notes = user.Notes;
            this.SysAdmin = user.SysAdmin;
            this.SetupLists = user.SetupLists;
            this.CustomizeGrids = user.CustomizeGrids;
            this.SetupNotices = user.SetupNotices;
            this.AccessAll = user.AccessAll;
            this.ModifyAll = user.ModifyAll;
            this.UID = user.UID;
            this.DateStamp = user.DateStamp;
            this.LicenseType = user.LicenseType;
           }
         }

         toggleDisabled() {
           this.Disabled = !this.Disabled;
         }

         toggleSysAdmin() {
           this.SysAdmin = !this.SysAdmin;
         }

         toggleSetupLists() {
           this.SetupLists = !this.SetupLists;
         }

         toggleCustomizeGrids() {
           this.CustomizeGrids = !this.CustomizeGrids;
         }

         toggleSetupNotices() {
           this.SetupNotices = !this.SetupNotices;
         }

         toggleAccessAll() {
           this.AccessAll = !this.AccessAll;
         }
         
         toggleModifyAll() {
           this.ModifyAll = !this.ModifyAll;
         }
       }
