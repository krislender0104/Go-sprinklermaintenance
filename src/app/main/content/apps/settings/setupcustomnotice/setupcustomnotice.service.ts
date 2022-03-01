import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FuseUtils } from '@fuse/utils';
import  urlconstants from  'urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class SetupCustomNoticeService implements Resolve<any>
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
   
   
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            //this.getNotices();
            //this.getDataSets();
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
 
    getViewTableData = function (id) {
        return this.http.get(urlconstants.apiurl+'company/getcompanynotice/' + id, this.options).pipe();
    };
    postViewTableData = function (tableData) {
        return this.http.post(urlconstants.apiurl+'company/createcompanynoticetype', {
            data: tableData
        }, this.options).pipe();
    };
    getDataService(): Observable<any> {
        return this.http.get<Array<any>>(urlconstants.apiurl + 'siteinformation/getdataset', this.options);
      }
}