
export class Pics {
    FileID: number;
    SiteID: number;
    ParentID: number;
    FilePath: string;
    DefaultPic: string;
    DateStamp: string;
    UID: string;
    ParentType: string;

    constructor(pics) {
        {
            this.FileID = pics.FileID;
            this.SiteID = pics.SiteID;
            this.ParentID = pics.ParentID;
            this.FilePath = pics.FilePath;
            this.DefaultPic = pics.DefaultPic;
            this.DateStamp = pics.DateStamp;
            this.UID = pics.UID;
            this.ParentType = pics.ParentType;
        }
    }

}
