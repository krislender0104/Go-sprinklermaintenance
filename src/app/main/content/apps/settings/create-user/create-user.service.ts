import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import { reject } from 'q';
import urlconstants from 'urlconstants.js';
@Injectable({
    providedIn: 'root'
})
export class CreateUserService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    sites: any[];
    datasets: any[];
    roles: any[];
    onSiteChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onHazardChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onTestChanged: BehaviorSubject<any> = new BehaviorSubject({});
    constructor(private http: HttpClient) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
     }
    getDataSets(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'company/userdataset', this.options)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    getRoles(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'users/role_list', this.options)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    CreateUser(user, dataprivilages): Observable<any> {
        return this.http.post(urlconstants.apiurl+'users/usercreate',{data:user,roles:dataprivilages}, this.options);
        // return new Promise((resolve, reject) => {
        //     debugger;
        //     this.http.post(urlconstants.apiurl + 'users/usercreate', { data: user, roles: dataprivilages })
        //         .subscribe((response: any) => {
        //             resolve(response);
        //         }, reject);
        // });
    }
    CreateUserInRoles(userId, userInRoles): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl + 'users/CreateUserInRoles/' + userId, { data: userInRoles }, this.options)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getDataSets(),
                this.getRoles()
            ]).then(
                ([datasets, roles]) => {
                    this.datasets = datasets;
                    this.roles = roles;
                    resolve();
                },
                reject
            );
        });
    }
}
