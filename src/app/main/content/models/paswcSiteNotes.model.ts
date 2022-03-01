

export class SiteNotes {

    SiteID: number;
    notes: string;
    DateStamp: string;
    UID: string;


    constructor(sitenotes) {
        {

            this.SiteID = sitenotes.SiteID;
            this.DateStamp = sitenotes.DateStamp;
            this.UID = sitenotes.UID;
            this.notes = sitenotes.notes;
        }
    }

}
    