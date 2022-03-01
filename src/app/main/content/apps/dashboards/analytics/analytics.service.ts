import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import urlconstants from 'urlconstants.js';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Injectable()
export class AnalyticsDashboardService implements Resolve<any>
{
    widgets: any[];
    accesstoken: any;
    headers: any;
    options: any;
    constructor(
        private http: HttpClient
    ) {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        // return new Promise((resolve, reject) => {
        //     Promise.all([
        //         this.getWidgets()
        //     ]).then(
        //         () => {
        //             resolve();
        //         },
        //         reject
        //     );
        // });
        //return this.http.get(urlconstants.api + 'dashboard/getdashboard2/' + id, this.options).pipe();
    }

    getWidgets(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('api/analytics-dashboard-widgets')
                .subscribe((response: any) => {
                    this.widgets = response;
                    resolve(response);
                }, reject);
        });
    }

    GetDashboard2(id): Observable<any> {
        return this.http.get(urlconstants.apiurl + 'dashboard/getdashboard2/' + id, this.options).pipe();
    }

    GetTestRelatedDetails(id): Observable<any> {
        return this.http.get(urlconstants.apiurl + 'dashboard/gettestrelateddetails/' + id, this.options).pipe();
    }

    GetGoogleLatLong(data): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'dashboard/getgoogleaddress', data ,this.options).pipe();
    }

    GetGoogleLatLongfromaddress(data): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'dashboard/getgoogleaddressfromaddress', data ,this.options).pipe();
    }

    GetGoogleLatLongfromgapi(data): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'dashboard/getgoogleaddressfromgoogleapi', data ,this.options).pipe();
    }

    GetExportDetails(data): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'dashboard/getexportdetails', data, this.options).pipe();
    }

    exportCSV(data,value) {
        var item = data[0];
        var cols = Object.keys(item);
        let options = {
            headers: cols
        };
        new Angular5Csv(JSON.parse(JSON.stringify(data)), value, options);
    }
}
