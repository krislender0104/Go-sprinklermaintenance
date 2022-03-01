import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import  urlconstants from  'urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class HazardviewService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
hazards:any[];
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
    getSites(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/site-sites', this.options)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    onSitehazardChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getHazard(hazardId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'hazard/' + hazardId, this.options)
                .subscribe((response: any) => {
                    this.onSitehazardChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    updateHazard(hazard,hazardId):Observable<any> {
        return this.http.post(urlconstants.apiurl + 'hazard/hazardupdate/'+hazardId, {
            data: hazard
        }, this.options);
        // var _this = this;
        // return new Promise(function (resolve, reject) {
        //     _this.http.post(urlconstants.apiurl+'hazard/hazardupdate/'+hazardId, {
        //         data: hazard
        //     }, this.options)
        //         .subscribe(function (response) {
        //         //_this.getHazard(hazardId);
        //     }, reject);
        //});
    };
    
    deleteHazard(hazardId) {
        var _this = this;
        return  _this.http.delete<any>(urlconstants.apiurl+'hazard/deletehazard/'+hazardId, this.options).pipe();
    };
    onhazardfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getHazardfields(tablename): Promise<any>
        {
            return new Promise((resolve, reject) => {
                this.http.get(urlconstants.apiurl+'settings/getfields/' + tablename, this.options)
                    .subscribe((response: any) => {
                        this.onhazardfieldsChanged.next(response);
                        resolve(response);
                    }, reject);
            });
        }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getHazard(0),
            ]).then(
                ([hazards]) => {
                    this.hazards = hazards;
                    resolve();
                },
                reject
            );
        });
    }
}
