import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FuseUtils } from '@fuse/utils';
import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import urlconstants from 'urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class TechnicalCreateService {
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
  createDevType(devtype): Observable<any> {
    return this.http.post<any>(urlconstants.apiurl + 'technician/devtypecreate', {data: devtype}, this.options);
  }
  
}
