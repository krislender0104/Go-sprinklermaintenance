import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import urlconstants from 'urlconstants.js';

@Injectable({
    providedIn: 'root'
})
export class MailMergeServices implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    mailmergesetup: any[];
    constructor(private http: HttpClient) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
     }
    onmailmergesetupChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getMailMergelist(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'setting/getmailmerge', this.options)
                .subscribe((response: any) => {
                    this.onmailmergesetupChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getMailMergebyid(Ncode): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'setting/getmailmergebyid/' + Ncode, this.options)
                .subscribe((response: any) => {
                    this.onmailmergesetupChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    addMailmerge(mailmerge): Observable<any> {
        var _this = this;
        return _this.http.post(urlconstants.apiurl + 'setting/mailmergeadd', {
            data: mailmerge
        }, this.options).pipe();
    };
    DeleteMailMerge(Ncode): Observable<any>{
        var _this = this;
        return _this.http.delete(urlconstants.apiurl + 'setting/deletemailmerge/' + Ncode, this.options).pipe();
    }
    updateMailMerge(mailmerge): Observable<any> {
        var _this = this;
        return _this.http.post(urlconstants.apiurl + 'seting/mailmergeupdate', {
            data: mailmerge
        }, this.options).pipe();
    };
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getMailMergelist(),
            ]).then(
                ([mailmergesetups]) => {
                    this.mailmergesetup = mailmergesetups;
                    resolve();
                },
                reject
            );
        });
    }
}
