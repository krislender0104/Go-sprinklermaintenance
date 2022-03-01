import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import urlconstants from 'urlconstants.js';

@Injectable({
    providedIn: 'root'
})
export class CardServices implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    installationappointments: any[];
    testappointments: any[];
    oninstallationappointmentsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    ontestappointmentsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    constructor(private http: HttpClient, private router: Router) { 
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
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

    initiatePayment(cardDetails) : Observable<any> {
       return this.http.post(urlconstants.apiurl + 'payment/pay', cardDetails, this.options); 
    }
    initiateMultplePayment(cardDetails) : Observable<any> {
       return this.http.post(urlconstants.apiurl + 'payment/paymultiple', cardDetails, this.options); 
    }
}
