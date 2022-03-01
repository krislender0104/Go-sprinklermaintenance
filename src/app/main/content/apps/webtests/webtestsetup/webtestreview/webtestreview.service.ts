import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import urlconstants from 'urlconstants.js';
import { Observable } from 'rxjs';

@Injectable()
export class WebtestreviewService {
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
        return this.http.get(urlconstants.apiurl + 'webtests/webtestreview', this.options);
    }

    updateWebTestReview(siteId, hazId, id, fields, updatedValues): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'webtests/updatewebtestreview', { s_id: siteId, h_id: hazId, webtestId: id, columns: fields, values: updatedValues }, this.options);
    }
    deleteWebTestReview(id){
        return this.http.delete(urlconstants.apiurl+'webtests/deletewebtestreview/'+id, this.options).pipe();
    }
}