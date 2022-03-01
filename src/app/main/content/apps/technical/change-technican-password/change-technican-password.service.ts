import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import  urlconstants from  'urlconstants.js';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ChangeTechnicanPasswordService {
  accesstoken: any;
  headers: any;
  options: any;
  constructor(private http:HttpClient) { 
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
  }

  changePasswordforTechnican(data): Observable<any>  {
    return this.http.post(urlconstants.apiurl+'technician/changepassword', {data:data}, this.options).pipe();
}
}
