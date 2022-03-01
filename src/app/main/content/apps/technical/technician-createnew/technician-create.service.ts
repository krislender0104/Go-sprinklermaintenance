import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import urlconstants from 'urlconstants.js';
@Injectable({
    providedIn: 'root'
})
export class TechnicianCreateService {
    accesstoken: any;
  headers: any;
  options: any;
    constructor(private http: HttpClient) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
     }
    save(technician) {
        if (technician.TesterID && technician.TesterID > 0) {
            return this.http.post(urlconstants.apiurl + 'technician/techniciansupdate', {
                data: technician
            }, this.options).pipe();
        }
        else {
            return this.http.post(urlconstants.apiurl + 'technician/technicianscreate', {
                data: technician
            }, this.options).pipe();
           
        }
    }
    getTestKit(id): Observable<any> {
        return this.http.get<Array<any>>(urlconstants.apiurl + 'technicians/gettestkitbycompany/' + id, this.options).pipe();
    }
    getCompanies(): Observable<any> {
        return this.http.get<Array<any>>(urlconstants.apiurl + 'technicians/getcompany', this.options).pipe();
    }
    searchcompany(searchtext): Observable<any> {
        return this.http.get(urlconstants.apiurl + 'technicians/searchcompany/' + searchtext, this.options);
    }
    // technician:any[];
    // ontechnicianChanged: BehaviorSubject<any> = new BehaviorSubject({});
    //   constructor(private http:HttpClient,private router:Router) { }

    //     createTechnician(technician): Promise<any> {
    //         var _this = this;
    //         return new Promise(function (resolve, reject) {
    //             _this.http.post(urlconstants.apiurl+'technician/technicianscreate', {
    //                 data: technician
    //             })
    //                 .subscribe(function (response) 
    //                 {
    //                    this.router.navigate(['apps/technical']);
    //                 }, reject);
    //         });
    //     };
    //     ontechnicianfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    //     getTechnicianfields(tablename): Promise<any>
    //         {
    //             return new Promise((resolve, reject) => {
    //                 this.http.get(urlconstants.apiurl+'settings/getfields/' + tablename)
    //                     .subscribe((response: any) => {
    //                         this.ontechnicianfieldsChanged.next(response);
    //                         resolve(response);
    //                     }, reject);
    //             });
    //         }

    //     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    //     {
    //         return new Promise((resolve, reject) => {
    //             Promise.all([
    //             ]).then(
    //                 ([]) => {
    //                     resolve();
    //                 },
    //                 reject
    //             );
    //         });
    //     }
}
