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
export class HazardCreateService implements Resolve<any>
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

  createHazard(hazard) : Observable<any>  {
    return this.http.post<any>(urlconstants.apiurl+'hazard/hazardcreate',{
        data : hazard
    }, this.options).pipe();
}

    /* createHazard = function (hazard) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(urlconstants.apiurl+'hazard/hazardcreate', {
                data: hazard
            })
                .subscribe(function (response) {
            }, reject);
        });
    }; */
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
            ]).then(
                ([]) => {
                    resolve();
                },
                reject
            );
        });
    }
}
