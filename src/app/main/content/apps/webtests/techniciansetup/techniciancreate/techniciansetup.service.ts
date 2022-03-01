import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import  urlconstants from  'urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class TechniciansetupService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    techniciansetup:any[];
  constructor(private http:HttpClient) {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
        //'Content-Type': 'application/json',
        'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
   }
    onwebtestsetupChanged: BehaviorSubject<any> = new BehaviorSubject({});
    
    addTechnicianSetup = function (techniciansetup) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(urlconstants.apiurl+'test/techniciansetupcreate', {
                data: techniciansetup
            }, this.options)
                .subscribe(function (response) {
                    
            }, reject);
        });
    };
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
            ]).then(
                ([websetups]) => {
                    resolve();
                },
                reject
            );
        });
    }
}
