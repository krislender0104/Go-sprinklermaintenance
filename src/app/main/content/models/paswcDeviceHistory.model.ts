export class DeviceHistory {
  HistoryID: number;
  HazID: number;
  MFG: string;
  Model: string;
  Type: string;
  DevSize: string;
  SerialNum: string;
  DateReplaced: string;
  DateStamp: string;

  constructor(devicehistory) {
    {
      this.HistoryID = devicehistory.HistoryID;
      this.HazID = devicehistory.HazID;
      this.MFG = devicehistory.MFG;
      this.Model = devicehistory.Model;
      this.DevSize = devicehistory.DevSize;
      this.SerialNum = devicehistory.SerialNum;
      this.DateReplaced = devicehistory.DateReplaced;
      this.DateStamp = devicehistory.DateStamp;
    }
  }
}
