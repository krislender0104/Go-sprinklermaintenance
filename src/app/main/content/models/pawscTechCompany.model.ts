export class TechCompany {
    CompanyID: number;
    TesterID: number;
    DefaultCompany: string;
    defaulttestkitid: string;
 
    constructor(techcompany) {
        {
            this.CompanyID = techcompany.CompanyID;
            this.TesterID = techcompany.TesterID;
            this.DefaultCompany = techcompany.DefaultCompany;
            this.defaulttestkitid = techcompany.defaulttestkitid;

        }
    }

}
