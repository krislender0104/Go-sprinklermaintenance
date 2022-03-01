import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TechnicianCreateService } from './technician-create.service';
import { ToastNotifications } from 'ngx-toast-notifications';
import { Technician } from './technician';
import { DataService } from './../../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technician-create',
  templateUrl: './technician-create.component.html',
  styleUrls: ['./technician-create.component.scss']
})
export class TechnicianCreateComponent implements OnInit {
  technician: Technician;
  testKits: Array<any>;
  companies: Array<any>;
  testCompanies: Array<any>;
  companyList = [];
  flag: boolean;
  searchResult: any;
  newcompanyList = [];
  constructor(private dataService: DataService, private technicianCreateService: TechnicianCreateService, private toasts: ToastNotifications, private router: Router) {
    if (dataService.data && dataService.data.Status) {

      this.technician = dataService.data;
    }
    else {
      this.technician = new Technician();
    }
  }
  ngOnInit() {
    this.getCompanies();
    this.getTechCompanies();
  }

  searchcompany(term: string): void {
    this.flag = true;
    if (term !== '') {
      this.technicianCreateService.searchcompany(term).subscribe(data => {
        this.searchResult = data;
        console.log(this.searchResult);
      });
    }
  }

  redirecttosite(cname){
    cname=cname.split("-")[1];
    this.router.navigate(['/apps/technicialcompany/details/',cname]);
  }

  save() {
    this.companyList.forEach(a => {
      a.id=a.id.split("-")[1];
      this.newcompanyList.push(a);
    });
    this.newcompanyList = this.newcompanyList.filter(comp => {
      return comp.id !== -1 && comp.id !== null;
    });
    if(this.newcompanyList.length>0){
      this.technician.CompanyID = this.newcompanyList;
    } else{
      this.technician.CompanyID = null;
    }
    this.technician.FeePaid=this.formatDate(this.technician.FeePaid);
    this.technician.INSUREXP=this.formatDate(this.technician.INSUREXP);
    this.technician.LICEXPDATE=this.formatDate(this.technician.LICEXPDATE);
    this.technician.CNTRYLICex=this.formatDate(this.technician.CNTRYLICex);
    this.technician.PLUMEXPIR=this.formatDate(this.technician.PLUMEXPIR);
    this.technician.LANDEXPIR=this.formatDate(this.technician.LANDEXPIR);
    this.technician.FIREEXPIR=this.formatDate(this.technician.FIREEXPIR);
    this.technician.ConfinedLicExp=this.formatDate(this.technician.ConfinedLicExp);
    this.technician.LastLetter=this.formatDate(this.technician.LastLetter);
    this.technician.TestCertExp=this.formatDate(this.technician.TestCertExp);
    this.technician.CERTDATE=this.formatDate(this.technician.CERTDATE);
    this.technician.SurvCertExp=this.formatDate(this.technician.SurvCertExp);
    this.technician.SurvCertDate=this.formatDate(this.technician.SurvCertDate);
    this.technician.InstCertExp=this.formatDate(this.technician.InstCertExp);
    this.technician.InstCertDate=this.formatDate(this.technician.InstCertDate);
    this.technician.RepCertExp=this.formatDate(this.technician.RepCertExp);
    this.technician.RepCertDate=this.formatDate(this.technician.RepCertDate);
    this.technicianCreateService.save(this.technician).subscribe(data => {
      this.toasts.next({ text: 'Technician  Created', type: 'success' });
      this.router.navigate(['apps/technical']);
    }, err => {
      this.toasts.next({ text: 'Technician Not  Created', type: 'danger' });
    }, () => { });
  }
  getTechCompanies() {
    this.testCompanies = [{ company: this.companies, testkit: this.testKits }];
  }
  addTestCompanies() {
    //this.testCompanies.push([{ company: this.companies, testkit: this.testKits }]);
    this.companyList.push({ id: null });
  }

  removeTestCompanies(index) {
    this.companyList.splice(index, 1);
  }
  getTestKit(id) {
     this.technicianCreateService.getTestKit(id).subscribe(data => {
      this.testKits = data;
     }, err => {
     }, () => { });
  }

  getCompanies() {
     this.technicianCreateService.getCompanies().subscribe(data => {
       this.companies = data;
     }, err => {
     }, () => { });
  }
  formatDate(date) {
    if (date == null||date=='')
      return null;

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
    this.technician.Phone = this.phoneNumberVerification(tel);
  }


}
