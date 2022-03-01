import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import  urlconstants from 'urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class AssigningAppointmentsService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
installationappointments :any[];    
testappointments :any[];
oninstallationappointmentsChanged: BehaviorSubject<any> = new BehaviorSubject({});
ontestappointmentsChanged: BehaviorSubject<any> = new BehaviorSubject({});
 constructor(private http:HttpClient,private router:Router) {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
  }
    // getInstallationAppointments(installdue): Promise<any>
    // {
    //     return new Promise((resolve, reject) => {
    //         this.http.get(urlconstants.apiurl+'webtest/installappointments/'+installdue, this.options)
    //             .subscribe((response: any) => {
    //                 this.oninstallationappointmentsChanged.next(response);
    //                 resolve(response);
    //             }, reject);
    //     });
    // }

    getInstallationAppointments(installdue): Observable<any>{
        return this.http.get(urlconstants.apiurl+'webtest/installappointments/'+installdue, this.options);
    }

    getTestAppointments(testdue): Observable<any>{
        return this.http.get(urlconstants.apiurl+'webtest/testappointments/'+testdue, this.options);
    }

    // getTestAppointments(testdue): Promise<any>
    // {
    //     return new Promise((resolve, reject) => {
    //         this.http.get(urlconstants.apiurl+'webtest/testappointments/'+testdue, this.options)
    //             .subscribe((response: any) => {
    //                 this.ontestappointmentsChanged.next(response);
    //                 resolve(response);
    //             }, reject);
    //     });
    // }
    
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
