import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import urlconstants from 'urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class SiteAddhazardService implements Resolve<any>
{
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

  createHazard(hazard): Observable<any> {
    var _this = this;
    return _this.http.post(urlconstants.apiurl + 'hazard/hazardcreate', {
      data: hazard
    }, this.options).pipe();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
      ]).then(
        ([]) => {
          resolve();
        },
        reject
      );
    });
  }
}
