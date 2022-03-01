import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import urlconstants from 'urlconstants.js';

@Injectable({
    providedIn: 'root'
})
export class ExportEditService implements Resolve<any>
{
    accesstoken: any;
    headers: any;
    options: any;
    fields: any[];
    tables: any[];
    constructor(private http: HttpClient) {
        this.accesstoken = "Bearer " + localStorage.getItem('accessToken');
        this.headers = new HttpHeaders({
            //'Content-Type': 'application/json',
            'Authorization': this.accesstoken
        });
        this.options = { headers: this.headers };
     }
    onfieldsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    ontablesChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onexportsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onexportsFiltersChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onexportsFiltersByIdChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onexportsFiltersConditionByIdChanged: BehaviorSubject<any> = new BehaviorSubject({});
    getTables(): Promise<any> {

        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'settings/tableslist', this.options)
                .subscribe((response: any) => {
                    this.ontablesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    };
    FilterReportExportsByName(tablename): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'reports/filterreporteditexportsByTable/' + tablename, this.options)
                .subscribe((response: any) => {
                    this.onexportsFiltersChanged.next(response);
                    resolve(response);
                }, reject);
        });
    };
    FilterReportExportsByID(exportId): Promise<any> {

        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'reports/filterreporteditexportsById/' + exportId, this.options)
                .subscribe((response: any) => {
                    this.onexportsFiltersByIdChanged.next(response);
                    resolve(response);
                }, reject);
        });
    };
    GetConditionByID(exportId): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'reports/filterreporteditexportsconditionById/' + exportId, this.options)
                .subscribe((response: any) => {
                    this.onexportsFiltersConditionByIdChanged.next(response);
                    resolve(response);
                }, reject);
        });
    };
    getReportExports(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'reports/exports_list', this.options)
                .subscribe((response: any) => {
                    this.onexportsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    saveExport(exportdata): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl + 'reports/saveexport', { data: exportdata }, this.options)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    };
    updateExport(exportdata, exportId): Observable<any> {
        // return new Promise((resolve, reject) => {
        //     this.http.post(urlconstants.apiurl + 'reports/updateexport/' + exportId, { data: exportdata })
        //         .subscribe((response: any) => {
        //             resolve(response);
        //         }, reject);
        // });
        return this.http.post(urlconstants.apiurl + 'reports/updateexport/' + exportId, { data: exportdata }, this.options);
    };
    ExportReport(exportdata): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl + 'reports/exportreport', { data: exportdata }, this.options)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    };
    getFields(): Promise<any> {

        return new Promise((resolve, reject) => {
            this.http.get(urlconstants.apiurl + 'settings/tablefieldslist', this.options)
                .subscribe((response: any) => {
                    this.onfieldsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    };


    searchFields = function (filter) {
        return new Promise((resolve, reject) => {
            this.http.post(urlconstants.apiurl + 'settings/searchfields', { filter }, this.options)
                .subscribe((response: any) => {
                    this.onfieldsChanged.next(response);
                    resolve(response);
                }, reject);
        });
    };

    saveFields = function (fields) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(urlconstants.apiurl + 'settings/fieldsupdate', {
                data: fields
            }, this.options)
                .subscribe(function (response) {

                }, reject);
        });
    };


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            this.getTables(),
                this.getFields()
            Promise.all([
            ]).then(
                ([tables, fields]) => {
                    this.tables = tables;
                    console.log(this.tables);
                    //        this.fields=fields;
                    resolve();
                },
                reject
            );
        });
    }
}
