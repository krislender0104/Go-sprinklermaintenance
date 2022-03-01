import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import urlconstants from 'urlconstants.js';
import { TestEntry } from '../testentry/testentry';

@Injectable({
  providedIn: 'root'
})
export class PendingtestService {
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
  get() {
    return this.http.get<Array<TestEntry>>(urlconstants.apiurl + 'webtest/getallwebtesthistory', this.options).pipe();
  }
}
