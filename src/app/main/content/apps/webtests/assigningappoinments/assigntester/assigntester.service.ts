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
export class AssignTesterService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    appointments:any[];
   ontesterappointmentChanged: BehaviorSubject<any> = new BehaviorSubject({});
   ontesterChanged: BehaviorSubject<any> = new BehaviorSubject({});
   appointmentCreatedList :any[];//to store the appoints created

   private _appointmentCreatedList = new BehaviorSubject({});
   appointmentCreatedList$ = this._appointmentCreatedList.asObservable();


   constructor(private http:HttpClient,private router:Router) { 
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
   }
   getTesters(appointmenttype): Promise<any>
   {
       return new Promise((resolve, reject) => {
           this.http.get(urlconstants.apiurl+'webtest/appointments/testlist/'+appointmenttype, this.options)
               .subscribe((response: any) => {
                   this.ontesterChanged.next(response);
                   resolve(response);
               }, reject);
       });
   }
    createAssignTester(appointmentdata): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl+'webtest/createappointments',{data:appointmentdata}, this.options)
                .subscribe((response: any) => {
                    this.ontesterappointmentChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    updateTesterAppointments(appointmentdata): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl+'technician/updatefailtype',{data:appointmentdata}, this.options)
                .subscribe((response: any) => {
                    this.ontesterappointmentChanged.next(response);
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

    setAppointmentList(data){
        this._appointmentCreatedList.next(data);
    }
}

