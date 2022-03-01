import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import urlconstants from 'urlconstants.js';

@Injectable({
    providedIn: 'root'
})
export class TestEntryService {
    accesstoken: any;
    headers: any;
    options: any;
    [x: string]: any;
    constructor(private http: HttpClient) { 
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'cache-control':'immutable',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
    }
    GetCompanylist_Tester(testerId): Observable<any> {
        return this.http.get<Array<any>>(urlconstants.apiurl + 'company/companybytester/' + testerId, this.options);
    }
    save(testEntry) {
        if (testEntry.data.test_data_pk > 0) {
            return this.http.post(urlconstants.apiurl + 'webtest/editwebtesthistory', testEntry, this.options).pipe();
        }
        else
            return this.http.post(urlconstants.apiurl + 'webtest/createwebtesthistory', testEntry, this.options).pipe();
    }
    getsiteid(hazid): Observable<any>{
        return this.http.get(urlconstants.apiurl + 'hazard/getsitedetails/'+hazid, this.options).pipe(); 
    }
    savefromAdmin(testEntry) {
        return this.http.post(urlconstants.apiurl + 'webtest/submittestfromadmin', testEntry, this.options).pipe();
    }
    getTestKit(testerId): Observable<any> {
        return this.http.get<Array<any>>(urlconstants.apiurl + 'webtest/testkitbytester/' + testerId, this.options).pipe();
    }
    getfullnamebyid(id): Observable<any> {
        return this.http.get(urlconstants.apiurl + 'webtest/fullnamebyid/' + id, this.options).pipe();
    }
    postImageKit(form) {

        return this.http.post(urlconstants.apiurl + 'imageprocessing/addimage', form, this.options).pipe();
    }
    getAddressByLatLong(lat, long): Observable<any> {
        return this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&sensor=true', this.options);
    }
    getImages(testId): Observable<any> {
        return this.http.get<Array<any>>(urlconstants.apiurl + 'imageprocessing/getimage/' + testId, this.options).pipe();
    }
    getImageFromServer(imageId): Observable<any> {
        return this.http.get(urlconstants.apiurl + imageId, this.options).pipe();
    }
    deleteImageFromServer(imageId) {
        return this.http.post(urlconstants.apiurl + 'imageprocessing/deleteimage', imageId, this.options).pipe();

    }
}
