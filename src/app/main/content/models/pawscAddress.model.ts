
export class Address {
    AddressID: number;
    Company: string;
    Address: string;
    Address2: string;
    Phone: string;
    State: string;
    zip: string;
    Ext: string;
    Fax: string;
    Cell: string;
    Email: string;
    UID: number;
    DateStamp: string;
    LastUpdate: string;
    LastUpdateID: number;
    UDA1: string;
    UDA2: string;
    UDA3: string;
    UDA4: string;
    UDA5: string;
    AccountID: number;
    Link: string;
    Country: string;
    LinkCode: string;
    LastLink: string;
    LastUpdateBy: string;

    constructor(address) {
        {
            this.AddressID = address.AddressID;
            this.Company = address.Company;
            this.Address = address.Address;
            this.Address2 = address.Address2;
            this.Phone = address.Phone;
            this.State = address.State;
            this.zip = address.zip;
            this.Ext = address.Ext;
            this.Fax = address.Fax;
            this.Cell = address.Cell;
            this.Email = address.Email;
            this.UID = address.UID;
            this.DateStamp = address.DateStamp;
            this.UID = address.UID;
            this.LastUpdate = address.LastUpdate;
            this.LastUpdateID = address.LastUpdateID;
            this.UDA1 = address.UDA1;
            this.UDA2 = address.UDA2;
            this.UDA3 = address.UDA3;
            this.UDA4 = address.UDA4;
            this.UDA5 = address.UDA5;
            this.Link = address.Link;
            this.LinkCode = address.LinkCode;
            this.LastLink = address.LastLink;
            this.LastUpdateBy = address.LastUpdateBy;
 
        }
    }

 
}
