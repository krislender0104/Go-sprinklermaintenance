import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CompanyService implements Resolve<any>
{
    onCompanyChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(private http: HttpClient)
    {
    }

    /**
     * The Academy App Main Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getCompany(route.params.companyId)
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getCompany(companyId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/companyById/?id=' + companyId + '')
                .subscribe((response: any) => {
                    this.onCompanyChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
    addCompany(company):Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.post('api/company/', company)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }


}
