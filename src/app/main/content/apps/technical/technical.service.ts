import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';

import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import  urlconstants from './../../../../../urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;    
devices :any[];
companies :any[];
testkits :any[];
technicians :any[];
failtypes:any[];
repairtypes:any[];

  constructor(private http:HttpClient,private router:Router) {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
   }
   ontechnicaldevicesChanged: BehaviorSubject<any> = new BehaviorSubject({});
   ontechnicalcompaniesChanged: BehaviorSubject<any> = new BehaviorSubject({});
   ontechnicaltestkitsChanged: BehaviorSubject<any> = new BehaviorSubject({});
   ontechnicaltechniciansChanged: BehaviorSubject<any> = new BehaviorSubject({});
   ontechnicalfailtypesChanged: BehaviorSubject<any> = new BehaviorSubject({});
   ontechnicalrepairtypesChanged: BehaviorSubject<any> = new BehaviorSubject({});
   ontechnicalcompaniesFilter: BehaviorSubject<any> = new BehaviorSubject({});
   ontechnicaltechniciansFilter: BehaviorSubject<any> = new BehaviorSubject({});
   ontechnicaltestkitFilter: BehaviorSubject<any> = new BehaviorSubject({});
    getTechnicalDevices(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'technician/devtypes', this.options)
                .subscribe((response: any) => {
                    this.ontechnicaldevicesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getTechnicalCompanies(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'technician/companies', this.options)
                .subscribe((response: any) => {
                    this.ontechnicalcompaniesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getTechnicalTestKits(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'technician/testkit', this.options)
                .subscribe((response: any) => {
                    this.ontechnicaltestkitsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getTechnicalTechnicains(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'technician/', this.options)
                .subscribe((response: any) => {
                    this.ontechnicaltechniciansChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getTechnicalFailTypes(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'technician/failtypes', this.options)
                .subscribe((response: any) => {
                    this.ontechnicalfailtypesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getTechnicalRepairTypes(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'technician/repairtypes', this.options)
                .subscribe((response: any) => {
                    this.ontechnicalrepairtypesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getTechnicalFilteredTestKit(param): Promise<any>
    {
        return new Promise((resolve, reject) => { 
             this.http.get(urlconstants.apiurl+'technician/gettestkitbyfilter/'+param, this.options)
                .subscribe((response: any) => {
                    this.ontechnicaltestkitFilter.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getTechnicalFilteredTechnicians(param): Promise<any>
    {
        return new Promise((resolve, reject) => { 
            this.http.get(urlconstants.apiurl+'technician/gettechniciansbyfilter/'+param, this.options)
               .subscribe((response: any) => {
                   this.ontechnicaltechniciansFilter.next(response);
                   resolve(response);
               }, reject);
       });
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
                this.getTechnicalDevices(),
                this.getTechnicalCompanies(),
                this.getTechnicalTestKits(),
                this.getTechnicalTechnicains(),
                this.getTechnicalRepairTypes()
            ]).then(
                ([devices,companies,testkits,technicians,repairtypes]) => {
                    this.devices = devices;
                    this.companies = companies;
                    this.testkits = testkits;
                    this.technicians = technicians;
                    //this.failtypes = failtypes;
                    this.repairtypes=repairtypes;
                    //console.log(this.technicals);
                    resolve();
                },
                reject
            );
        });
    }
}
