import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import urlconstants from 'urlconstants.js';
import { DataService } from '../shared/data.service';

@Injectable()
export class CalendarService implements Resolve<any>
{
    accesstoken: any;
  headers: any;
  options: any;
    events: any;
    onEventsUpdated = new Subject<any>();

    constructor(private http: HttpClient, private sharedService:DataService) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
          //'Content-Type': 'application/json',
          'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getEvents()
            ]).then(
                ([events]: [any]) => {
                    resolve();
                },
                reject
            );
        });
    }

    getEvents() {
        return new Promise((resolve, reject) => {

            // this.http.get(urlconstants.apiurl + 'reports/getDayEvent/thirus')
            this.http.get(urlconstants.apiurl + 'reports/getDayEvent/'+JSON.parse(localStorage.getItem('currentUser'))[0]['Logon'], this.options)
                .subscribe((response: any) => {
                    this.events = response;
                    if(this.events.length>0){
                        for (let index = 0; index < this.events.length; index++) {
                            this.events[index].start=this.sharedService.convertdate(this.events[index].start);
                        }
                    }
                    this.onEventsUpdated.next(this.events);

                    resolve(this.events);
                }, reject);
        });
    }

    updateEvents(events) {
        return new Promise((resolve, reject) => {
            this.http.post('api/calendar/events', {
                id: 'events',
                data: [...events]
            }, this.options)
                .subscribe((response: any) => {
                    this.getEvents();
                }, reject);
        });
    }

    getDayEvents(){
        return new Promise((resolve, reject)=>{
            this.http.get(urlconstants.apiurl + 'reports/getDayEvent/thirus', this.options)
                .subscribe((response: any) => {
                    this.events = response;

                    resolve(this.events);
                }, reject); 
        });
    }
}
