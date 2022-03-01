import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import  urlconstants from  'urlconstants.js';

@Injectable()
export class AcademyCoursesService implements Resolve<any>
{
    onCategoriesChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onCoursesChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onAppointmentsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    accesstoken: any;
    headers: any;
    options: any;
    constructor(private http: HttpClient)
    {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
    }

    /**
     * The Academy App Main Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            var currentuser=JSON.parse(localStorage.currentUser);
            
            Promise.all([
                this.getCategories(),
                this.getCourses(),
                this.getAppointments(currentuser[0].TesterID)
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    
    getAppointments(testerid): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'webtests/assignedappointments/'+testerid, this.options)
                .subscribe((response: any) => {
                    this.onAppointmentsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }

    getCategories(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/academy-categories')
                .subscribe((response: any) => {
                    this.onCategoriesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }

    getCourses(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/academy-courses')
                .subscribe((response: any) => {
                    this.onCoursesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }

}
