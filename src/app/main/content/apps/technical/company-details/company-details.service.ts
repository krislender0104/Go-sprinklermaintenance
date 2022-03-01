import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import  urlconstants from  'urlconstants.js';
@Injectable({
  providedIn: 'root'
})
export class CompanydetailsService implements Resolve<any>
{
    accesstoken: any;
  headers: any;
  options: any;
company:any[];
  constructor(private http:HttpClient) {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
   }
   /**
     * Get Contacts
     * @returns {Promise<any>}
     */
    onCompanyViewChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getCommpany(companyId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'technician/Company/' + companyId, this.options)
                .subscribe((response: any) => {
                    this.onCompanyViewChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getTestKit(): Observable<any> {
        return this.http.get<Array<any>>(urlconstants.apiurl + 'technicians/gettestkit', this.options).pipe();
    }
    updateCompay(company,companyId): Observable<any> {
        var _this = this;
        return _this.http.post<any>(urlconstants.apiurl + 'technician/companiesupdate', {
            data: company
        }, this.options);
        /* return new Promise(function (resolve, reject) {
            _this.http.post(urlconstants.apiurl+'technician/companiesupdate', {
                data: company
            })
                .subscribe(function (response) {
            }, reject);
        }); */
    };

    deleteCompany(compId) : Observable<any>  {
        var _this = this;
        return _this.http.delete<any>(urlconstants.apiurl+'technician/companydelete/'+compId, this.options).pipe();
    }

    searchtestkit(searchtext): Observable<any> {
        return this.http.get(urlconstants.apiurl + 'technicians/searchtestkit/' + searchtext, this.options);
    }

    searchtestkitfromedit(compid,searchtext): Observable<any> {
        return this.http.get(urlconstants.apiurl + 'technicians/searchtestkitfromedit/' + compid +'/'+ searchtext, this.options);
    }

    oncompanyfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getCompanyfields(tablename): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'settings/getfields/' + tablename, this.options)
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
                this.getCommpany(0),
            ]).then(
                ([company]) => {
                    this.company = company;
                    resolve();
                },
                reject
            );
        });
    }
}
