export class UserDataSet {
  UserID: number;
  DataSetID: number;
  Access: number;
  Modify: string;

  constructor(userdataset) {
    {
      this.UserID = userdataset.UserID;
      this.DataSetID = userdataset.DataSetID;
      this.Access = userdataset.Access;
      this.Modify = userdataset.Modify;
    }
  }
}
