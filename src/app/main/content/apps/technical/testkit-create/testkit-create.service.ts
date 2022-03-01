import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import  urlconstants from  'urlconstants.js';
@Injectable({
  providedIn: 'root'
})
export class TestKitCreateService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;  
testkit:any[];
testkitChanged: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(private http:HttpClient,private router:Router) {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
   }
   
    createTestKit = function (testkit) {
        var _this = this;
        return this.http.post(urlconstants.apiurl + 'technician/testkitcreate', {
            data: testkit
        }, this.options).pipe();
    };
  
    ontestkitfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getTestKitfields(tablename): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'settings/getfields/' + tablename, this.options)
                .subscribe((response: any) => {
                    this.ontestkitfieldsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
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
