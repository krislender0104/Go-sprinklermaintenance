import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import  urlconstants from  'urlconstants.js';
@Injectable({
  providedIn: 'root'
})
export class CompanyCreateService implements Resolve<any>
{
    
company:any[];
companyChanged: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(private http:HttpClient,private router:Router) { }
   
    createCompany = function (company) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(urlconstants.apiurl+'technician/companiescreate', {
                data: company
            })
                .subscribe(function (response) 
                {
                   //this.router.navigate(['apps/technical']);
                }, reject);
        });
    };

    oncompanyfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getCompanyfields(tablename): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'settings/getfields/' + tablename)
                .subscribe((response: any) => {
                    this.oncompanyfieldsChanged.next(response);
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
