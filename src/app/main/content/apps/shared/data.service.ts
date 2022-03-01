import { TestEntry } from './../webtests/testentry/testentry';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: any;
  public tables:Array<any>;
  public companyList: any;
  public testEntryHarzardCheck:any;
  public testEntry:TestEntry;
  public hazardCheck: any;

  public convertdate(date) {
    if (date == null || date == '')
      return null;

    var dt = new Date(date);
    dt.setMinutes(dt.getMinutes() + dt.getTimezoneOffset());
    return dt;
  }
  constructor() { }
  
}
