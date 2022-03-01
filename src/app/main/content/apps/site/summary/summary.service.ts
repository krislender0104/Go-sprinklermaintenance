import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import urlconstants from 'urlconstants.js';
import { SiteInfo, DevTest } from './summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
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

  getDataService(): Observable<any> {
    return this.http.get<Array<any>>(urlconstants.apiurl + 'siteinformation/getdataset', this.options);
  }

  getUserDataSet(id, is_accessAll): Observable<any> {
    return this.http.get<Array<any>>(urlconstants.apiurl + 'company/dataset/'+id +'/'+is_accessAll,this.options);
  }

  getSiteInfo(criteriaString, values): Observable<any> {
    //return this.http.get<SiteInfo>(urlconstants.apiurl + 'siteinformation/getsitehazarddetails/' + dataSet + '/' + companyNumber);
    return this.http.post(urlconstants.apiurl + 'siteinformation/getsitehazarddetails', { criteria: criteriaString, data: values }, this.options);
  }

  getDevTest(hazardId): Observable<any> {
    return this.http.get<Array<DevTest>>(urlconstants.apiurl + 'siteinformation/getdevtest/' + hazardId, this.options);
  }

}
