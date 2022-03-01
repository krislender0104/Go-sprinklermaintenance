import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import  urlconstants from  'urlconstants.js';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TechnicaldetailsService implements Resolve<any>
{
    accesstoken: any;
  headers: any;
  options: any;
    technical:any[];
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
    onTechnicalViewChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getTechnical(devtypeId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'technician/devtype/' + devtypeId, this.options)
                .subscribe((response: any) => {
                    this.onTechnicalViewChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    deleteTechnicial(techId): Observable<any>  {
        var _this = this;
        return _this.http.delete<any>(urlconstants.apiurl+'technician/devtypedelete/'+techId, this.options).pipe();
    }
    
    updateTechnical(devtype,devtypeId): Observable<any> {
        return this.http.post<any>(urlconstants.apiurl+'technician/devtypeupdate/'+devtypeId,{data: devtype}, this.options);
    } 
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
            ]).then(
                ([devtype]) => {
                    resolve();
                },
                reject
            );
        });
    }
}
