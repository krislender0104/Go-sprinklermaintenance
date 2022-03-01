import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import { reject } from 'q';
import  urlconstants from  'urlconstants.js';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { ToastNotifications } from 'ngx-toast-notifications';
@Injectable({
  providedIn: 'root'
})
export class ReportsService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
exports:any[];
onexportsChanged: BehaviorSubject<any> = new BehaviorSubject({});
onexportreportsChanged: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(private http:HttpClient,
    private toasts: ToastNotifications) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
     }
    getReportExports(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'reports/exports_list', this.options)
                .subscribe((response: any) => {
                    this.onexportsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    ExportReport1=function(exportId,spinner) {
         this.http.get(urlconstants.apiurl+'report/export/'+exportId, this.options).map(
            user => {
                if(user.length>0)
                {
                 // alert(user.length);
                }
                else
                {
                    
                }
                spinner.hide();
            },
            err => {
                  console.log(err);
                  alert(err);
                  spinner.hide();
            }
          ).catch(
              (error:any) =>{ 
                  //Observable.throw(error.json().error || 'Server error')
                  alert(error.json().error);
                  spinner.hide();
            });

    } 
    DeleteReport(exportId):Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.delete(urlconstants.apiurl+'report/deleteexport/'+exportId, this.options)
                .subscribe((response: any) => {
                    if(response!=null){
                        this.toasts.next({text: 'Report deleted',type: 'success'});
                        this.getReportExports();
                    }else{
                        this.toasts.next({text: 'Report not deleted',type: 'danger'});
                    }
                    resolve(response);
                },
                error => {
                    this.toasts.next({text: 'Report not deleted',type: 'danger'});
                },
       reject);
        });
    }
    ExportReport(exportId,spinner): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'report/export/'+exportId, this.options)
                .subscribe((response: any) => {
                      if(response.length>0)
                      {
                          var item=response[0];
                          var cols = new Array();
                            var p = item;
                            for (var key in p) {
                                cols.push(key);
                            }
                            console.log(cols);
                            let options = {
                                headers: cols
                              };
                            new Angular5Csv(JSON.parse(JSON.stringify(response)), 'Tokay_Report',options);
                            spinner.hide();
                      }
                      else
                      {
                          //error
                         // alert('error in generate report');
                         this.toasts.next({text: 'Check condition in Report',type: 'danger'});
                        spinner.hide();
                      }
                    
                    resolve(response);
                }
                ,
                error => {
                    //  this.errors = error;
                    //alert(error);
                    //alert('error in generate report');
                    this.toasts.next({text: 'error in generate report',type: 'danger'});
                    spinner.hide();
                },
       reject);
        });
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getReportExports()
            ]).then(
                ([exports,roles]) => {
                    this.exports = exports;
                    resolve();
                },
                reject
            );
        });
    }
}
