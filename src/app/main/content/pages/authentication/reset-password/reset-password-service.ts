import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import urlconstants from 'urlconstants.js';


@Injectable()
export class ResetPasswordService {

    constructor(private http: HttpClient) { }

    authenticateToken(currentToken): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'site/authenticatetoken', {token: currentToken});
    }
    resetPassword(useremail, newPassword): Observable<any> {
        const user = { email: useremail, password: newPassword };
        return this.http.post(urlconstants.apiurl + 'users/updatepassword', {data: user});
    }
}
