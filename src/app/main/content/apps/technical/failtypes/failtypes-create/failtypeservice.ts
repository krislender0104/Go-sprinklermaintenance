import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import  urlconstants from 'urlconstants';

@Injectable({
  providedIn: 'root'
})
export class FailTypeService implements Resolve<any>
{
    accesstoken: any;
  headers: any;
  options: any;
    failtypes:any[];
   ontechnicalfailtypesChanged: BehaviorSubject<any> = new BehaviorSubject({});
   constructor(private http:HttpClient,private router:Router) {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
    }
    createTechnicalFailType(faildata): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl+'technician/createfailtype',{data:faildata}, this.options)
                .subscribe((response: any) => {
                    this.ontechnicalfailtypesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    updateTechnicalFailType(faildata): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl+'technician/updatefailtype',{data:faildata}, this.options)
                .subscribe((response: any) => {
                    this.ontechnicalfailtypesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }

    deleteTechnicalFailType(id):Observable<any>{
        return this.http.delete(urlconstants.apiurl + 'technician/deletefailtype/'+ id, this.options);
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<any> | Promise<any> | any
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
