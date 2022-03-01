import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import urlconstants from 'urlconstants.js';


@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http: HttpClient) {
  }

  sendSingleEmail(formData: FormData): Observable<any> {
   // return this.http.post(urlconstants.apiurl + 'imageprocessing/addimage', formData);
   return this.http.post(urlconstants.apiurl + 'email/sendsingleemail', formData);
  }

  sendBulkEmail(formData: FormData): Observable<any> {
    return this.http.post(urlconstants.apiurl + 'email/sendbulkemail', formData);
  }

  getNoticeList(): Observable<any> {
    return this.http.get(urlconstants.apiurl + 'email/getnoticelist');
  }

}
