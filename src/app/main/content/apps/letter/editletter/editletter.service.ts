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
export class EditletterService {
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
  save(letter) {
    return this.http.post(urlconstants.apiurl + 'letter/editnoticetemplate', {
      data: letter
    }, this.options).pipe();
  }
  async getTableAwait() {
    return await this.http.get<Array<any>>(urlconstants.apiurl + 'letter/gettable', this.options).pipe().toPromise();
   
  }
  getTable(): Observable<any> {
    return this.http.get<Array<any>>(urlconstants.apiurl + 'letter/gettable', this.options).pipe();
  }
  getPropByTable(table): Observable<any> {
    return this.http.get<Array<any>>(urlconstants.apiurl + 'letter/getprop/' + table, this.options).pipe();
  }
}
