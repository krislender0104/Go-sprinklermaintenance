import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import  urlconstants from  'urlconstants.js';
import { BehaviorSubject } from 'rxjs';
// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
 
@Injectable()
export class SiteCreateService {
    accesstoken: any;
    headers: any;
    options: any;
    onsitesfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    constructor(private http:HttpClient) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
    }
    getSiteCreatefields(tablename): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'settings/getfields/' + tablename, this.options)
                .subscribe((response: any) => {
                    this.onsitesfieldsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
}