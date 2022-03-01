import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FuseUtils } from '@fuse/utils';
import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import urlconstants from 'urlconstants.js';
import { Letter } from './letter';

@Injectable({
  providedIn: 'root'
})
export class LetterService {
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
  getLetters(): Observable<any> {
    return this.http.get<Array<Letter>>(urlconstants.apiurl + 'letter/getletter', this.options).pipe();
  }
  getTable(): Observable<any> {
    return this.http.get<Array<any>>(urlconstants.apiurl + 'letter/gettable', this.options).pipe();
  }
}
 