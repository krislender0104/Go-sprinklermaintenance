import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { map } from 'rxjs/operators';
//import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import urlconstants from 'urlconstants.js';
@Injectable()
export class LogInService {
    accesstoken: any;
    headers: any;
    options: any;
    constructor(private http: HttpClient, private router: Router) {

    }
    authenticate(user): Observable<any> {
        return this.http.post<any>(urlconstants.apiurl + 'site/authenticate/webuser', { data: user });
    }
    getAdminprivilages(userid): Observable<any> {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
        return this.http.get<any>(urlconstants.apiurl + 'users/userdatasetaccess/' + userid, this.options);
    }
    getDataprivilages(userid): Observable<any> {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
        return this.http.get<any>(urlconstants.apiurl + 'users/dataprivilages/' + userid, this.options);
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('adminprivilages');
        localStorage.removeItem('dataprivilages');
    }
}
//Post Subscribe events
//https://www.concretepage.com/angular/angular-httpclient-post