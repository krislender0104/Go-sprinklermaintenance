import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import urlconstants from 'urlconstants.js';
@Injectable({
    providedIn: 'root'
})
export class CompanyCreateService {
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
    save(company) {
        if (company.CompanyID && company.CompanyID > 0) {
            return this.http.post(urlconstants.apiurl + 'technician/companiesupdate', {
                data: company
            }, this.options).pipe();
        }
        else {
            return this.http.post(urlconstants.apiurl + 'technician/companiescreate', {
                data: company
            },  this.options).pipe();
        }
    }
    getTestKit(): Observable<any> {
        return this.http.get<Array<any>>(urlconstants.apiurl + 'technicians/gettestkit', this.options).pipe();
    }
}
