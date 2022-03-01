import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { CompanyService } from './company.service';
import { Company } from './companymodel';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { startWith, map, debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import {  Output, Input, EventEmitter } from '@angular/core';  
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { MatAutocompleteSelectedEvent } from '@angular/material';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  test;
  searchTerm : FormControl = new FormControl();
  searchResult : any;
  public clients: Observable<any[]>;  
  private searchTerms = new Subject<string>();  
  public ClientName = '';  
  public flag: boolean = true;  
  constructor(  
    private adminservice: AdminService,  private router: Router
  ) {  
    // this.adminservice.getsites('1');
    // this.siteSubscription =
    // this.adminservice.onsitesChanged
    // .subscribe(data => {
    //   //this.searchResult = data;
    // });
  }  
  callSomeFunction()
  {
    alert('item selected');
  }
  siteSubscription: Subscription;
  ngOnInit(){
  }  
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    //alert(event.option.value);
    this.router.navigate(['apps/site/'+event.option.value]);
  }
  // Push a search term into the observable stream.  
  searchClient(term: string): void {  
    //alert(term);
     this.flag = true;  
    // this.searchTerms.next(term);  
    this.adminservice.getsites(term);
    this.siteSubscription =
    this.adminservice.onsitesChanged
    .subscribe(data => {
      this.searchResult= data;
    });
  }  
  onselectClient(ClientObj) {     
    if (ClientObj.ClientId != 0) {  
      this.ClientName = ClientObj.ClientName;       
      this.flag = false;  
    }  
    else {  
      return false;  
    }  
  
}
}