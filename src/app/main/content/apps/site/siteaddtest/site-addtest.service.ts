import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlconstants from 'urlconstants.js';


@Injectable({
  providedIn: 'root'
})
export class SiteAddtestService {
  accesstoken: any;
  headers: any;
  options: any;
  constructor(private http: HttpClient) {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
   }

  createTest(test) {
    var _this = this;
    return _this.http.post(urlconstants.apiurl + 'test/createsitetest', test, this.options).pipe();
  }
}
