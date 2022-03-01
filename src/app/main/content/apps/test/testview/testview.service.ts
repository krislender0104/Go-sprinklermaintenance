import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import  urlconstants from  'urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class TestviewService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
tests:any[];
  constructor(private http:HttpClient) { 
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
  }
    onhzardtestChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getTest(testId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'test/' + testId, this.options)
                .subscribe((response: any) => {
                    this.onhzardtestChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    updateTest = function (test,testId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(urlconstants.apiurl+'test/testupdate/'+testId, {
                data: test
            }, _this.options)
                .subscribe(function (response) {
                _this.getTest(testId);
            }, reject);
        });
    };
    deleteTest(testId) : Promise<any>  {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(urlconstants.apiurl+'test/deletetest/'+testId, _this.options)
                .subscribe(function (response) {
                //_this.getHazard(hazardId);
            }, reject);
        });
    };
    ontestsfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
getTestsfields(tablename): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'settings/getfields/' + tablename, this.options)
                .subscribe((response: any) => {
                    this.ontestsfieldsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getTest(0),
            ]).then(
                ([tests]) => {
                    this.tests = tests;
                    resolve();
                },
                reject
            );
        });
    }
}
