import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import urlconstants from 'urlconstants.js';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  accesstoken: any;
  headers: any;
  options: any;
  constructor(private http: HttpClient, private router: Router) { }
  authenticate(user): Observable<any> {
    return this.http.post<any>(urlconstants.apiurl + 'site/authenticate/1', { data: user });
  }
  getAdminprivilages(userid): Observable<any> {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
    return this.http.get<any>(urlconstants.apiurl + 'users/userdatasetaccess/' + userid, this.options);
  }
  getDataprivilages(userid): Observable<any> {
    this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
    return this.http.get<any>(urlconstants.apiurl + 'users/dataprivilages/' + userid, this.options);
  }
}
