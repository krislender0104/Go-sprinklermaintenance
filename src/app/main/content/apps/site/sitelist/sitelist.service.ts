import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Params } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import { reject } from 'q';
import urlconstants from 'urlconstants.js';
@Injectable({
    providedIn: 'root'
})
export class SitelistService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    sites: any[];
    datasets: any[];
    onSiteChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onHazardChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onTestChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onsitesfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onTableSelect: BehaviorSubject<any> = new BehaviorSubject({});
    advancedFilter: BehaviorSubject<any> = new BehaviorSubject({});
    constructor(private http: HttpClient) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': this.accesstoken
    });
    this.options = { headers: this.headers };
     }
    /**
      * Get Contacts
      * @returns {Promise<any>}
      */
    getSiteCreatefields(tablename): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'settings/getfields/' + tablename, this.options)
                .subscribe((response: any) => {
                    this.onsitesfieldsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getSites(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'site',this.options)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    movedataset(cid,sid):Observable<any>
    {
        return this.http.post<any>(urlconstants.apiurl + 'site/movedataset' ,{
            cdatasetId:cid, csiteID:sid
        },this.options ).pipe();
    };
    createdataset(cname):Observable<any>
    {
        return this.http.post<any>(urlconstants.apiurl + 'site/createdataset' ,{
           cname
        } ,this.options).pipe();
    };
    FilterSite = function (filter) {

        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl + 'site/filtersite/1', { filter },this.options)
                .subscribe((response: any) => {
                    this.onSiteChanged.next(response);
                    resolve(response);
                }, reject);
        });


    };
    FilterSiteHazard = function (filter) {

        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl + 'site/filtersitehazards', { filter },this.options)
                .subscribe((response: any) => {
                    this.onHazardChanged.next(response);
                    resolve(response);
                }, reject);
        });


    };
    FilterSiteHazardTests = function (filter) {

        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl + 'site/filtersitehazardtests', { filter }, this.options)
                .subscribe((response: any) => {
                    this.onTestChanged.next(response);
                    resolve(response);
                }, reject);
        });


    };
    getDataSets(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'company/dataset',this.options)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    FilterReportExportsByName=function(tablename) {
           return this.http.get(urlconstants.apiurl + 'reports/filterreporteditexportsByTable/' + tablename,this.options).pipe();
    };

    groupupdate(updatetable,updatestring,conditionstring):Observable<any>
    {
        return this.http.get<any>(urlconstants.apiurl+'SITES/DYNAMICUPDATE/' + updatetable + '/' +updatestring+ '/' + conditionstring, this.options).pipe();
    }
    AdvancedFilter(params): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl + 'sites/getadvancefilterdata/',{
                data:params
            },this.options)
                .subscribe((response: any) => {
                    this.advancedFilter.next(response);
                    resolve(response);
                }, reject);
        });
    };

    GroupDataset(cond,table,dataset): Observable<any> {
        return this.http.get(urlconstants.apiurl + 'sites/groupdatasetupdate/'+cond+'/'+table+'/'+dataset,this.options).pipe();
    };

    getUserDatasetlist(id, is_accessAll): Observable<any> {
        // console.log("is_accessAll=============", is_accessAll);
        return this.http.get(urlconstants.apiurl + 'company/dataset/'+id+'/'+is_accessAll,this.options).pipe();
    };

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getDataSets()
            ]).then(
                ([datasets]) => {
                    this.datasets = datasets;
                    resolve();
                },
                reject
            );
        });
    }
    getFilteredSite(criteriaString, values): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'site/filteredSiteList', { criteria: criteriaString, data: values },this.options);
    }
    getSearchAddress(keyword: string): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'site/searchaddress', { address: keyword },this.options);
    }
}
