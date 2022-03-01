import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import  urlconstants from  'urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class TestKitdetailsService implements Resolve<any>
{   accesstoken: any;
    headers: any;
    options: any;
    testkit:any[];
  constructor(private http:HttpClient) { 
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
  }
   /**
     * Get Contacts
     * @returns {Promise<any>}
     */
    ontestkitViewChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getTestKit(testkitId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'technician/testkit/' + testkitId, this.options)
                .subscribe((response: any) => {
                    this.ontestkitViewChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    updateTestKit = function (testkit,testkitId) {
        var _this = this;
        return this.http.post(urlconstants.apiurl + 'technician/testkitupdate', {
            data: testkit
        }, this.options).pipe();
        /* return new Promise(function (resolve, reject) {
            _this.http.post(urlconstants.apiurl+'technician/testkitupdate',{
                data: testkit
            })
                .subscribe(function (response) {
            }, reject);
        }); */
    };
    deleteTestkit(testkitId): Observable<any>  {
        var _this = this;
        return _this.http.delete<any>(urlconstants.apiurl+'technician/testkitdelete/'+testkitId, this.options).pipe();
    }
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
                ([devtype]) => {
                    resolve();
                },
                reject
            );
        });
    }
}
