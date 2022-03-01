import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import  urlconstants from  'urlconstants.js';

@Injectable()
export class ProjectDashboardService implements Resolve<any>
{
    projects: any[];
    widgets: any[];
    dashboardData: any;
    accesstoken: any;
    headers: any;
    options: any;
    constructor(private http: HttpClient) {this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers }; }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        // return new Promise((resolve, reject) => {

        //     Promise.all([
                // this.getProjects();
                // this.getWidgets();
        //     ]).then(
        //         () => {
        //             resolve();
        //         },
        //         reject
        //     );
        // });

        return this.http.get(urlconstants.apiurl + 'dashboard/getdashboarddata',this.options);
    }

    getProjects(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('api/project-dashboard-projects')
                .subscribe((response: any) => {
                    this.projects = response;
                    resolve(response);
                }, reject);
        });
    }

    getWidgets(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('api/project-dashboard-widgets')
                .subscribe((response: any) => {
                    this.widgets = response;
                    resolve(response);
                }, reject);
        });
    }
}
