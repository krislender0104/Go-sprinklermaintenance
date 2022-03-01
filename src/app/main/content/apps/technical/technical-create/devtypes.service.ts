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
export class DevTypesService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    devtypes: any[];
    ondevtypesChanged: BehaviorSubject<any> = new BehaviorSubject({});
    ondevtypesfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    constructor(private http: HttpClient, private router: Router) { 
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
    }

    createDevType = function (devtype) {
        var _this = this;
        // return _this.http.post(urlconstants.apiurl+'technician/devtypecreate', {
        //     data: devtype
        // }).pipe();
        return new Promise(function (resolve, reject) {
            _this.http.post(urlconstants.apiurl + 'technician/devtypecreate', {
                data: devtype
            }, this.options).pipe().subscribe(function (response) {
                    this.router.navigate(['apps/technical']);
                }, reject);
        });
    };
    getDevTypefields = function (tablename) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(urlconstants.apiurl + 'settings/getfields/' + tablename, this.options)
                .subscribe(function (response) {
                    this.ondevtypesfieldsChanged.next(response);
                }, reject);
        });
    };

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
