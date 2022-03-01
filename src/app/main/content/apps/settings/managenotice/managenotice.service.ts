import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import  urlconstants from  'urlconstants.js';
import { id } from '../../../../../../../node_modules/@swimlane/ngx-datatable/release/utils';

@Injectable({
  providedIn: 'root'
})
export class NoticeService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    notices:any[];
    datasets:any[]; onnoticesChanged: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(private http:HttpClient) { 
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
        //'Content-Type': 'application/json',
        'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
  }
   
    
    saveNotices = function (notices) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(urlconstants.apiurl+'settings/noticeserviceupdate', {
                data: notices
            }, this.options)
                .subscribe(function (response) {
                    
            }, reject);
        });
    };

    // getNotices = function () {
    //     var _this = this;
    //     return new Promise(function (resolve, reject) {
    //         _this.http.get(urlconstants.apiurl+'settings/getnotices'
    //         )
    //             .subscribe(function (response) {
                    
    //         }, reject);
    //     });
    // };
    companyDropdownList: BehaviorSubject<any> = new BehaviorSubject({});
    getDataSets(id, is_accessAll): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'company/dataset/'+id +'/'+is_accessAll, this.options)
                .subscribe((response: any) => {
                   this.companyDropdownList.next(response);
                }, reject);
        });
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        let admin=  JSON.parse(localStorage.adminprivilages);
        return new Promise((resolve, reject) => {
            //this.getNotices();
            this.getDataSets(id, admin.AccessAll);
            Promise.all([
            ]).then(
                ([datasets]) => {
                    //this.notices=notices;
                    this.datasets = datasets;
                    resolve();
                },
                reject
            );
        });
    }
 
    createUpdateData = function (notices) {
        return this.http.post(urlconstants.apiurl+'notice/noticecreateedit', {
                data: notices
            }, this.options).pipe();
    };
    getEditData = function (id) {
        return this.http.get(urlconstants.apiurl+'letter/getnoticedays/' + id, this.options).pipe();
    };
}