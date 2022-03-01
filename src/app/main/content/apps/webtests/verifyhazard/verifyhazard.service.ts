import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import  urlconstants from  'urlconstants.js';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerifyHazardService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    techniciansetup:any[];
  constructor(private http:HttpClient) { 
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
        //'Content-Type': 'application/json',
        'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
  }
    onhazardcheckChanged: BehaviorSubject<any> = new BehaviorSubject({});
    oncreateverifyHazardChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onVerifyHazardChanged: BehaviorSubject<any> = new BehaviorSubject({});
    ongetDetailsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    
    verifyHazardSiteInfo= function (hazid)
    {
           return this.http.get(urlconstants.apiurl+'hazard/getsitedetails/' + hazid, this.options).pipe();
    }

    createhazardhistory = function (verifyhazard)
    {
        return this.http.post(urlconstants.apiurl+'hazard/createhazardhistory',{
                data:verifyhazard
            }, this.options).pipe();
    }
    updatehazardfromtestverify=function(inputdata)
    {
        return this.http.post(urlconstants.apiurl+'hazard/updatehazardfromtestverify',{
            data:inputdata
        }, this.options).pipe();
    }
    getfullnamebyid(id){
        return this.http.get(urlconstants.apiurl + 'webtest/fullnamebyid/'+id, this.options).pipe();
    }
    searchVerifyHazard = function (hazardcheck,companyId)
    {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl+'sitehazard/getsitehazard',
            { data:hazardcheck}, this.options)
                .subscribe((response: any) => {
                    this.onVerifyHazardChanged.next(response);
                    resolve(response);
                }, reject)
                .share();
                
        });
    }
    GoogleLocation=function(glocation){
        return this.http.get(urlconstants.apiurl+'technician/getlocation',{
            data:glocation
        }, this.options).pipe();
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
            ]).then(
                ([websetups]) => {
                    resolve();
                },
                reject
            );
        });
    }
}
