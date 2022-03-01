import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import  urlconstants from  'urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class WebsetupService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    websetups:any[];
  constructor(private http:HttpClient) { 
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
        //'Content-Type': 'application/json',
        'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
  }     
    onwebtestsetupChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getWebtestSetups(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'webtests/webtestsetup', this.options)
                .subscribe((response: any) => {
                    this.onwebtestsetupChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getWebtestSetup(webtestId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'test/webtestsetup/' + webtestId, this.options)
                .subscribe((response: any) => {
                    this.onwebtestsetupChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    addWebTestSetup(websetup) : Observable<any>   {
        var _this = this;
        return _this.http.post(urlconstants.apiurl+'webtests/webtestsetupcreate', {
                data: websetup
            }, this.options).pipe();
    };
    updateWebTestSetup(websetup,Id) : Observable<any>  {
        var _this = this;
        return _this.http.post(urlconstants.apiurl+'webtests/updatewebtestsetup', {
                data: websetup
            }, this.options).pipe();       
    };
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getWebtestSetups(),
            ]).then(
                ([websetups]) => {
                    this.websetups = websetups;
                    resolve();
                },
                reject
            );
        });
    }
}
