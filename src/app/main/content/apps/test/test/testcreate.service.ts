import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FuseUtils } from '@fuse/utils';
import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import  urlconstants from  'urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class TestCreateService implements Resolve<any>
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
    createTest(test): Observable<any> {
        var _this = this;
        return _this.http.post(urlconstants.apiurl+'test/testcreate', {
                data: test
            }, this.options).pipe();
       
    }
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
            ]).then(
                ([]) => {
                    resolve();
                },
                reject
            );
        });
    }
}
