import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import { debug } from 'util';

import {map, tap} from 'rxjs/operators';

import { Http } from '@angular/http';
import  urlconstants from  './../../../../../urlconstants.js';

@Injectable({
    providedIn: 'root'
  })
export class AdminService implements Resolve<any>
{
    endPoint: string;  
    // search(term: string): Observable<any[]> {  
    //     var ClientList = this.http.get(this.endPoint + '?term=' + term)  
    //         .map((r: Response) => { return (r.json().length != 0 ? r.json() : [{ "ClientId": 0, "ClientName": "No Record Found" }]) as any[] });  
    //     return ClientList;  
    // }  
    // getUsers(): Observable<any>{
    //     return this.http.get<any>('http://localhost:4200/api/users');
    //   }
    
    contacts: any[];
    chats: any[];
    user: any;
    onChatSelected = new BehaviorSubject<any>(null);
    onContactSelected = new BehaviorSubject<any>(null);
    onChatsUpdated = new Subject<any>();
    onUserUpdated = new Subject<any>();
    onLeftSidenavViewChanged = new Subject<any>();
    onRightSidenavViewChanged = new Subject<any>();
    onCoursesChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onsitesChanged: BehaviorSubject<any> = new BehaviorSubject({});
    constructor(private http: HttpClient)
    {
        this.endPoint = "http://localhost:52386/api/Client/GetClientList/term";  
    }


    /**
     * The Chat App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getContacts(),
            ]).then(
                ([contacts]) => {
                    this.contacts = contacts;
                    // this.chats = chats;
                    // this.user = user;
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get Contacts
     * @returns {Promise<any>}
     */
    getContacts(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/companieslist')
            .subscribe((response: any) => {
                this.onCoursesChanged.next(response);
                resolve(response);
            }, reject);
        });
    }
    getsites(searchtext): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl+'site/sitesearch/'+searchtext)
            .subscribe((response: any) => {
                this.onsitesChanged.next(response);
                resolve(response);
            }, reject);
        });
    }

    
}
