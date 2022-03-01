import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export class RepairTypeService implements Resolve<any>
{
    
   repairtpe:any[];
   ontechnicalrepairtypeChanged: BehaviorSubject<any> = new BehaviorSubject({});
   constructor(private http:HttpClient,private router:Router) { }
    createTechnicalRepairType(repairdata): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl+'technician/createrepairtype',{data:repairdata})
                .subscribe((response: any) => {
                    this.ontechnicalrepairtypeChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    updateTechnicalRepairType(repairdata): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl+'technician/updaterepairtype',{data:repairdata})
                .subscribe((response: any) => {
                    this.ontechnicalrepairtypeChanged.next(response);
                    resolve(response);
                }, reject);
        });
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
