// import { Observable } from 'rxjs/Rx';
import { TechnicalService } from './../technical/technical.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
// import { Observable } from 'rxjs/internal/Observable';
import { SitelistService } from './sitelist/sitelist.service';

import { FuseUtils } from '@fuse/utils';

import { from } from 'rxjs/observable/from';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs/internal/Observable';
import urlconstants from './../../../../../urlconstants.js';

@Injectable({
    providedIn: 'root'
})
export class SiteService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    sites;
    hazards;
    tests;
    onsitesChanged: BehaviorSubject<any> = new BehaviorSubject({});
    //router1: Router;
    getsites(searchtext): Observable<any> {
        return this.http.get(urlconstants.apiurl + 'site/sitesearch/' + searchtext, this.options);
        // return new Promise((resolve, reject) => {
        //     this.http.get(urlconstants.apiurl + 'site/sitesearch/' + searchtext)
        //         .subscribe((response: any) => {
        //             // this.onsitesChanged.next(response);
        //             resolve(response);
        //         }, reject);
        // });
    }
    constructor(private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
    }

    getHazards(): Promise<any> {

        return new Promise((resolve, reject) => {
            this.http.get('api/hazard-hazards', this.options)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }


    getTests(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('api/test-tests', this.options)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    onSiteChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onSitehazardsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onSitehazardsTestsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onSiteTreeListChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onSiteMailChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getSite(siteId): Promise<any> {
        if (this.route.snapshot.paramMap.has('dataSetId')) {
            const hazardId = +this.route.snapshot.paramMap.get('HazID');
            const datasetid = +this.route.snapshot.paramMap.get('dataSetId');
            const companyNo = +this.route.snapshot.paramMap.get('comNo');
            this.router.navigate(['apps/site/summary', { HazID: hazardId, dataSetId: datasetid, comNo: companyNo }]);
        }
        else {
            return new Promise((resolve, reject) => {
                this.http.get(urlconstants.apiurl + 'site/' + siteId, this.options)
                    .subscribe((response: any) => {
                        this.onSiteChanged.next(response);
                        resolve(response);
                    }, reject);
            });
        }
    }
    getSiteMail(siteId): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'site/sitemail/' + siteId, this.options)
                .subscribe((response: any) => {
                    this.onSiteMailChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getSiteHazards(siteId): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'site/sitehazards/' + siteId, this.options)
                .subscribe((response: any) => {
                    this.onSitehazardsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getSiteHazardsTests(siteId, hazId): Promise<any> {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'site/sitehazardstests/' + siteId + '/' + hazId, this.options)
                .subscribe((response: any) => {
                    this.onSitehazardsTestsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    getSiteTreeList(datasetId): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'site/sitesTree/' + datasetId, this.options)
                .subscribe((response: any) => {
                    this.onSiteTreeListChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    updateSite(site, siteId): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'site/siteupdateget/' + siteId, {
            data: site
         }, this.options);
        // var _this = this;
        // return new Promise(function (resolve, reject) {
        //     _this.http.post(urlconstants.apiurl + 'site/siteupdateget/' + siteId, {
        //         data: site
        //     }, this.options)
        //         .subscribe(function (response) {
        //             _this.getSite(siteId);
        //         }, reject);
        // });
    };
    updateSiteMail(site, siteId): Observable<any> {
        // var _this = this;
        // return new Promise(function (resolve, reject) {
        return this.http.post(urlconstants.apiurl + 'site/siteemailupdateget/' + siteId, {
            data: site
        }, this.options);
        //         .subscribe(function (response) {
        //             _this.getSite(siteId);
        //         }, reject);
        // });
    };
    deletesite(siteid): Observable<any> {
        return this.http.delete(urlconstants.apiurl + 'site/sitedelete/' + siteid, this.options).pipe();
    }
    deleteSiteMail(mailaddressid): Observable<any> {
        return this.http.delete(urlconstants.apiurl + 'site/maildelete/' + mailaddressid, this.options).pipe();
    }
    addNewSiteMail(site, siteId): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'site/siteemailnew/' + siteId, {
            data: site
        }, this.options);
    }
    // createSite = function (site) {
    //     var _this = this;
    //     return new Promise(function (resolve, reject) {
    //         _this.http.post(urlconstants.apiurl + 'site/sitecreate', {
    //             data: site
    //         })
    //             .subscribe(function (response) {
    //                 debugger;
    //                 var siteid = response[0].SiteID;
    //                 //window.location.assign('/#/apps/site/' + siteid);
    //                 this.route.navigate(['/apps/site/'+siteid])
    //                 //window.location.href= 'http://localhost:4200/#/apps/site/' + siteid;

    //             }, reject);
    //     });
    // };
    createSite(site): Observable<any> {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
       
        return this.http.post(urlconstants.apiurl + 'site/sitecreate', { data: site }, this.options);
    }
    importSite(siteData): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'site/siteimport', { data: siteData }, this.options);
    }

    importHazard(hazardData): Observable<any> {
        return this.http.post(urlconstants.apiurl + 'site/hazardimport', { data: hazardData }, this.options);
    }

    onsitesfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getSiteCreatefields(tablename): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'settings/getfields/' + tablename, this.options)
                .subscribe((response: any) => {
                    this.onsitesfieldsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getHazards(),
                this.getTests()
            ]).then(
                ([sites, hazards]) => {
                    this.sites = sites;// sites.subscribe;
                    this.hazards = hazards;
                    //console.log(this.sites);
                    resolve();
                },
                reject
            );
        });
    }
}
