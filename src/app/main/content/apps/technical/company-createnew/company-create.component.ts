import { DataService } from './../../shared/data.service';
import { CompanyCreateService } from './company-create.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';
import { Company } from './company';
import { MatAutocompleteTrigger,MatFormFieldControl, MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {CompanydetailsService} from '../company-details/company-details.service';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit  {
  // @ViewChild ('inputTrigger', { read: MatAutocompleteTrigger }) inputTrigger: MatAutocompleteTrigger;
 


  company: Company;
  testKits: Array<any>;
  flag: boolean;
  searchResult: any;
  testKitList = [];
  newtestKitList = [];
 
  constructor(private companydetails:CompanydetailsService,private builder: FormBuilder, private dataService: DataService, private companyService: CompanyCreateService, private toasts: ToastNotifications, private router: Router) { 
    if (dataService.data && dataService.data.Status) {
      this.company = dataService.data;
    }
    else {
      this.company = new Company();
    }
  



   
  }
  ngOnInit() {
    this.getTestKitid();
  }
  getTestKitid() {
    this.companyService.getTestKit().subscribe(data => {
      this.testKits = data;
    }, err => { }, () => { });
  }
  save() { 
    this.testKitList.forEach(a => {
     this.newtestKitList.push(a.id);
    });

    if(this.testKitList.length>0){
      this.company.TestKitID= this.newtestKitList;
      
    } else{
      this.company.TestKitID = null;
    }

    console.log(this.company.TestKitID);
    this.company.INSUREXP=this.formatDate(this.company.INSUREXP);
    this.company.LICEXPDATE=this.formatDate(this.company.LICEXPDATE);
    this.company.County_Expire=this.formatDate(this.company.County_Expire);
    this.company.LastLetter=this.formatDate(this.company.LastLetter);
    this.companyService.save(this.company).subscribe(data => {
      this.toasts.next({ text: data.toString(), type: 'success' });
      this.router.navigate(['apps/technical']);
    }, err => {
      this.toasts.next({ text: err, type: 'danger' });
    }, () => { });
  }
  searchTestkit(term: string): void {
    this.flag = true;
    if (term !== '') {
      this.companydetails.searchtestkit(term).subscribe(data => {
        this.searchResult = data;
      });
    }
  }
  
  formatDate(date) {
    if (date == null||date=='')
      return "";

    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
  phoneNumberVerification(tel){
    var value = tel.toString().trim().replace(/^\+/, '');

    // if (value.match(/[^0-9]/)) {
    //     return tel;
    // }

    var country, city, number;
    if(value.length > 2){
      switch (value.length) {
          case 10: // +1PPP####### -> C (PPP) ###-####
              country = 1;
              city = value.slice(0, 3);
              number = value.slice(3);
              break;

          case 11: // +CPPP####### -> CCC (PP) ###-####
              country = value[0];
              city = value.slice(1, 4);
              number = value.slice(4);
              break;

          case 12: // +CCCPP####### -> CCC (PP) ###-####
              country = value.slice(0, 3);
              city = value.slice(3, 5);
              number = value.slice(5);
              break;
          default:
              return tel;
      }

    }
    if (country == 1) {
        country = "";
    }
    number = number.slice(0, 3) + '-' + number.slice(3);
 
    
    tel =  (country + " (" + city + ") " + number).trim();
    console.log("result ---------->", tel);
    return tel;

  }
  phoneNumberVerification_Phone(tel){
    this.company.Phone = this.phoneNumberVerification(tel);
  }

  addTestkit() {
    //this.testkit.push([{ company: this.companies, testkit: this.testKits }]);
    this.testKitList.push({ id: null });
  }

  removeTestKit(index) {
    this.testKitList.splice(index, 1);
  }
 
  
}
