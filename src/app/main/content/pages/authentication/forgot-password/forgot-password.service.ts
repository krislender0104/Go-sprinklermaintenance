import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
//import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import  urlconstants from  'urlconstants.js';


@Injectable()
export class ForgotPasswordService {

    constructor(private http: HttpClient) { }

    authenticateEmailAndSendLink(user): Observable<any> {
        return this.http.post<any>(urlconstants.apiurl + 'site/authenticateemail', {email: user});
    } 
}