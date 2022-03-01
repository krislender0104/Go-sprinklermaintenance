import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { FuseUtils } from '@fuse/utils';
import urlconstants from 'urlconstants.js';

@Injectable({
    providedIn: 'root'
})
export class TechniciandetailsService implements Resolve<any>
{
    accesstoken: any;
  headers: any;
  options: any;
    technician: any[];
    constructor(private http: HttpClient) { 
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
    onTechnicianViewChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getTechnician(technicianId): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'Technician/technician/' + technicianId, this.options)
                .subscribe((response: any) => {
                    this.onTechnicianViewChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getTestKit(id): Observable<any> {
        return this.http.get<Array<any>>(urlconstants.apiurl + 'technicians/gettestkitbycompany/' + id, this.options).pipe();
    }
    getCompanies(): Observable<any> {
        return this.http.get<Array<any>>(urlconstants.apiurl + 'technicians/getcompany', this.options).pipe();
    }
    updateTechnician(technician, technicianId): Observable<any> {
        // var _this = this;
        // return new Promise(function (resolve, reject) { 
            return this.http.post<any>(urlconstants.apiurl + 'technician/techniciansupdate/' + technicianId, {
                data: technician
            }, this.options).pipe();
    //             .subscribe(function (response) {
    //             }, reject);
    //     });
    }
    ontechnicianfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getTechnicianfields(tablename): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'settings/getfields/' + tablename, this.options)
                .subscribe((response: any) => {
                    this.ontechnicianfieldsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }

    deleteTechnician(techId): Observable<any>  {
        var _this = this;
        return _this.http.delete(urlconstants.apiurl+'technician/techniciandelete/'+techId, this.options).pipe();
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
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
