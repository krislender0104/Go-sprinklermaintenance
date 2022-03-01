import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import urlconstants from 'urlconstants.js';
import { TestEntry } from '../testentry/testentry';

@Injectable({
  providedIn: 'root'
})
export class ReviewUnsubmittedtestsService {
  accesstoken: any;
    headers: any;
    options: any;
  testname: any;
  currentTestData = null;
  isMultiplePay: boolean = false;
  multipleTestData: Array<any> = [];
  constructor(private http: HttpClient) {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
   }
  get(code): Observable<any> {
    return this.http.get<Array<TestEntry>>(urlconstants.apiurl + 'webtest/getwebtesthistory/' + code, this.options).pipe();
  }

  DeleteTest(testname): Observable<any> {
    return this.http.post(urlconstants.apiurl + 'webtest/deletewebtesthistory', { Testname: testname }, this.options).pipe();
  }
  setCurrentTestData(testData) {
    this.currentTestData = testData;
  }
  getCurrentTestData() {
    return this.currentTestData;
  }
  submitTest(currentTest): Observable<any> {
    return this.http.post(urlconstants.apiurl + 'webtest/submittest', currentTest, this.options);
  }
  setIsMultiplePay(val: boolean) {
    this.isMultiplePay = val;
  }
  getIsMultiplePay() {
    return this.isMultiplePay;
  }

  setMultipleTestData(data: Array<any>) {
    this.multipleTestData = data;
  }
  getMultipleTestData() {
    return this.multipleTestData;
  }
}
