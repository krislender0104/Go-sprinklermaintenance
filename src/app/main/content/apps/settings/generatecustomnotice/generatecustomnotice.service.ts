import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Params } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import urlconstants from 'urlconstants.js';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
@Injectable({
    providedIn: 'root'
})
export class GenerateCustomNotice implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    generatecustom: BehaviorSubject<any> = new BehaviorSubject({});
    generatecustomChanged: BehaviorSubject<any> = new BehaviorSubject({});
    constructor(private http: HttpClient) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
     }

    generatenotice = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(urlconstants.apiurl + 'letter/exportletters', {
                data: params
            }, this.options).subscribe((response: any) => {
                _this.generatecustomChanged.next(response);
                resolve(response);
            }, reject);
        });
    };
    getGeneratedNotice(params): Observable<any>{
        return this.http.post(urlconstants.apiurl + 'letter/exportletters', {data: params}, this.options);
    }
    updateGeneratedNotice(params): Observable<any>{
        return this.http.post(urlconstants.apiurl + 'letter/updateexportletters', {data: params}, this.options);
    }
    updateHistory(params): Observable<any>{
        return this.http.post(urlconstants.apiurl + 'letter/updatehistory', {data: params}, this.options);
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([
            ]).then(
                ([datasets]) => {
                    resolve();
                },
                reject
            );
        });
    }

    exportCSV(data) {
        var item = data[0];
        var cols = Object.keys(item);
        let options = {
            headers: cols
        };
        new Angular5Csv(JSON.parse(JSON.stringify(data)), 'Report', options);
    }
}
