import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import urlconstants from 'urlconstants.js';

@Injectable({
    providedIn: 'root'
})
export class HazardCheckService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    techniciansetup: any[];
    constructor(private http: HttpClient) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
     }
    onhazardcheckChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onVerifyHazardChanged: BehaviorSubject<any> = new BehaviorSubject({});

    onUserTesterChanged: BehaviorSubject<any> = new BehaviorSubject({});

    GetCompanylist_Tester = function (testerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(urlconstants.apiurl + 'company/companybytester/' + testerId, this.options)
                .subscribe(function (response) {
                    this.onhazardcheckChanged.next(response);
                }, reject);
        });
    };
    getAllTestersName(): Observable<any> {
        return this.http.get(urlconstants.apiurl + 'company/testersname', this.options);
    }

    getCompanyByTesterId(testerId){
        return this.http.get(urlconstants.apiurl + 'company/companybytester/' + testerId, this.options);
    }

    GetTesterDetailsByUserId(userId): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'users/gettester/' + userId, this.options)
                .subscribe((response: any) => {
                    this.onUserTesterChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    
    searchTester(searchtext): Observable<any> {
        // console.log(searchtext);
        return this.http.get(urlconstants.apiurl + 'webtest/searchtester/' + searchtext, this.options);
    }
    GetCompanylist(testerId): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'company/companybytester/' + testerId, this.options)
                .subscribe((response: any) => {
                    this.onhazardcheckChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    searchVerifyHazard = function (hazardcheck, companyId) {
        return this.http.post(urlconstants.apiurl + 'sitehazard/getsitehazard', {
            data: hazardcheck
        }, this.options).pipe();
        // return new Promise((resolve, reject) => {
        //     this.http.post(urlconstants.apiurl+'sitehazard/getsitehazard',{data:hazardcheck}, {observe: 'response'})
        //         .subscribe((response: any) => {
        //             this.onVerifyHazardChanged.next(response.body);
        //             resolve(response);
        //         }, reject)
        //         .share();
        // }); 
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
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
