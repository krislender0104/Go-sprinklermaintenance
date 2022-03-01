import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import urlconstants from 'urlconstants.js';
import { TestEntry } from '../testentry/testentry';

@Injectable({
  providedIn: 'root'
})
export class submittedtestsService {
  accesstoken: any;
    headers: any;
    options: any;
  testname: any;
  currentTestData = null;
  constructor(private http: HttpClient) {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
   }
  get(code): Observable<any>  {
    return this.http.get<Array<TestEntry>>(urlconstants.apiurl + 'webtest/SubmittedWebTestHistory/' + code, this.options).pipe();
  }

  getsubmittest(): Observable<any>  {
    return this.http.get<Array<TestEntry>>(urlconstants.apiurl + 'webtest/SubmittedWebTestHistory', this.options).pipe();
  }

  setCurrentTestData(testData) {
    this.currentTestData = testData;
  }
  getCurrentTestData() {
    return this.currentTestData;
  }
}
