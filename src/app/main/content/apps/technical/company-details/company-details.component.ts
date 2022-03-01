import { CompanydetailsService } from './company-details.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicalService } from '../technical.service';
import { ToastNotifications } from 'ngx-toast-notifications';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {DialogboxComponent} from './dialogbox/dialogbox.component';
import { DataService } from '../../shared/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  companyId: string;
  myGroup: FormGroup;
  testKits: Array<any>;
  company: any;
  isEditPermission: boolean = true;
  flag: boolean;
  searchResult: any;
  companySubscription:Subscription;
  testKitList = [];
  newtestKitList = [];
  constructor(private companydetails: CompanydetailsService,private sharedService:DataService,
    private route: ActivatedRoute, public dialog: MatDialog,
    private techservice: TechnicalService, private toasts: ToastNotifications,
    private router: Router) {
    this.myGroup = new FormGroup({
      CompanyID: new FormControl(),
      Company: new FormControl('', Validators.required),
      Address1: new FormControl(),
      Address2: new FormControl(),
      City: new FormControl(),
      State: new FormControl(),
      Zip: new FormControl(),
      Phone: new FormControl(),
      Ext: new FormControl(),
      Fax: new FormControl(),
      CntyLicNum: new FormControl(),
      CITYLICNUM: new FormControl(),
      LICEXPDATE: new FormControl(),
      Insurance: new FormControl(),
      Policy: new FormControl(),
      Liability: new FormControl('', Validators.compose([
        Validators.pattern('[0-9]+')
      ])),
      INSUREXP: new FormControl(),
      INSURAGT: new FormControl(),
      INSURPHO: new FormControl(),
      ShowOnList: new FormControl(),
      Email: new FormControl('', Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      Cell: new FormControl(),
      udf1: new FormControl('', Validators.compose([
        Validators.pattern('[0-9]+')
      ])),
      Notes: new FormControl(),
      Cert_City: new FormControl(),
      Cert_County: new FormControl(),
      County_Expire: new FormControl(),
      Cert_Test: new FormControl(),
      Cert_Survey: new FormControl(),
      Cert_Install: new FormControl(),
      Cert_Repair: new FormControl(),
      Cert_Land: new FormControl(),
      Cert_Fire: new FormControl(),
      Cert_Confine: new FormControl(),
      udf2: new FormControl(),
      udf2a: new FormControl(),
      udf3: new FormControl(),
      udf3a: new FormControl(),
      Status: new FormControl(),
      LastLetter: new FormControl(),
      LastLetterName: new FormControl(),
      DateStamp: new FormControl(),
      UID: new FormControl(),
      CompanyUserID: new FormControl(),
      Password: new FormControl(),
      Contact: new FormControl(),
      LastUpdate: new FormControl(),
      LastUpdateID: new FormControl(),
      LastUpdateBy: new FormControl(),
      TestKitID: new FormControl()
    });
    this.getTestKitid();
    this.companyId = route.snapshot.url[0].path;
    this.companydetails.getCommpany(this.companyId);
    // console.log(this.companydetails.getCommpany(this.companyId));
    this.companySubscription=
    this.companydetails.onCompanyViewChanged
      .subscribe(data => {
        this.company = data[0];
        if (this.company != undefined) {
          this.company.County_Expire = this.sharedService.convertdate(this.company.County_Expire);
          this.company.DateStamp = this.sharedService.convertdate(this.company.DateStamp);
          this.company.INSUREXP = this.sharedService.convertdate(this.company.INSUREXP);
          this.company.LICEXPDATE = this.sharedService.convertdate(this.company.LICEXPDATE);
          this.company.LastLetter = this.sharedService.convertdate(this.company.LastLetter);
          this.company.LastUpdate = this.sharedService.convertdate(this.company.LastUpdate);
        }
        this.testKitList = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].TestKitID) {
            this.testKitList.push({ id: data[i].TestKitID })
          }
        }
        // console.log(this.testKitList);
      });
    this.companydetails.getCompanyfields('Companies');
    this.companydetails.oncompanyfieldsChanged.subscribe(data => {
      this.companyfields = data;
    });
  }

  ngOnInit() {
    let admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (!admin.EditTechnicalInfo) {
        this.myGroup.disable();
        this.isEditPermission = false;
      }
    }
  }
  ngOnDestroy(){
    this.companySubscription.unsubscribe();
  }
  addTestKit() {
    if (this.isEditPermission) {
      //this.testCompanies.push([{ company: this.companies, testkit: this.testKits }]);
      this.testKitList.push({ id: null });
    }
  }
  removeTestKit(index) {
    this.testKitList.splice(index, 1);
  }
  getTestKitid() {
    this.companydetails.getTestKit().subscribe(data => {
      this.testKits = data;
      // const id =this.testKits.find(x => x.TestKitID === this.company.TestKitID);
      // this.company.TestKitID = id.TestKitID;
    }, err => { }, () => { });
  }
  onUpdateCompany() {

    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditTechnicalInfo > 0) {
        var cmpyid = this.companyId;
        this.myGroup.patchValue({ CompanyID: cmpyid })
       
        this.testKitList.forEach(a => {
          this.newtestKitList.push(a.id);
         });
     
         if(this.testKitList.length>0){
          this.myGroup.value['testKitIds'] =  this.newtestKitList;
           
         } else{
          this.myGroup.value['testKitIds'] = null;
         }
     
        //  console.log(this.company.TestKitID);
         let jsonString = JSON.parse(JSON.stringify(this.myGroup.value));
        jsonString.INSUREXP = this.formatDate(this.myGroup.controls['INSUREXP'].value);
        jsonString.LICEXPDATE = this.formatDate(this.myGroup.controls['LICEXPDATE'].value);
        jsonString.County_Expire = this.formatDate(this.myGroup.controls['County_Expire'].value);
        jsonString.LastLetter = this.formatDate(this.myGroup.controls['LastLetter'].value);
        this.companydetails.updateCompay(jsonString, this.companyId).subscribe(data => {
          this.toasts.next({ text: 'Company Updated', type: 'success' });
          this.router.navigate(['apps/technical']);
        }, err => {
          this.toasts.next({ text: 'Company Not Updated', type: 'danger' });
        }, () => { });
        /* this.companydetails.updateCompay(jsonString,this.companyId);
        //alert('Company Updated');
        this.toasts.next({text: 'Company Updated',type: 'success'});
        this.router.navigate(['/apps/technical/']); */
      }
      else {
        //alert('access denied');
        this.toasts.next({ text: 'access denied', type: 'success' });
      }
    }
  }

  ondeleteCompany() {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditTechnicalInfo > 0) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          id: 1,
          title: 'Do you want to delete the company?',
        };
        const dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
          if (result === true) {
            this.companydetails.deleteCompany(this.companyId).subscribe(data => {
              if (data) {
                this.toasts.next({ text: 'Company Deleted', type: 'success' });
                this.router.navigate(['/apps/technical']);
              }
              else {
                this.toasts.next({ text: 'Company not deleted', type: 'danger' });
              }
            });
          }
        });
      } else {
        this.toasts.next({ text: 'access denied', type: 'danger' });
      }
    }
  }

  formatDate(date) {
    if (date == null || date == '')
      return "";

    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  fieldName: any;
  companyfields: any;
  GetfieldName(fieldname) {
    var companyfield = this.companyfields.filter(field => field.FieldName == fieldname);
    if (companyfield) {
      this.fieldName = companyfield[0].Caption;
      return this.fieldName;
    }
  }

  searchTestkit(term: string): void {
    this.flag = true;
    if (term !== '') {
      this.companydetails.searchtestkit(term).subscribe(data => {
        this.searchResult = data;
      });
    }
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
    // console.log("result ---------->", tel);
    return tel;

  }
  phoneNumberVerification_Phone(tel){
    this.company.Phone = this.phoneNumberVerification(tel);
  }

}
