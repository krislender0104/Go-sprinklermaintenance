import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import urlconstants from 'urlconstants.js';
import { Observable } from 'rxjs';

@Injectable()
export class Webtestreview2Service {
    accesstoken: any;
    headers: any;
    options: any;
    constructor(private http: HttpClient) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
    }

    getWebTestReviewList(): Observable<any> {
        return this.http.get(urlconstants.apiurl + 'webtest/webtesthazardhistorylist', this.options);
    }

    
}