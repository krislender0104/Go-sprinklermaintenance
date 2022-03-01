import { Component, OnInit , OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TechniciandetailsService } from './technician-details.service';
import { ToastNotifications } from 'ngx-toast-notifications';
import { debug } from 'util';
import { forEach } from '@angular/router/src/utils/collection';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {DialogboxComponent} from './dialogbox/dialogbox.component';
import { TechnicianCreateService } from '../technician-createnew/technician-create.service';
import { Subscription } from 'rxjs';
import { DataService } from '../../shared/data.service';
const Technician_Details_DATA =
  `
  {
       "TechnicianID":"836832",
       "Status":"Active",
       "ShowOnList":"true",
       "FirstName":"KEITH J",
       "LastName":"RUZOWICZ",
       "Address1":"P O BOX 517",
       "Address2":"BROOMALL PA",
       "City":"BROOMALL",
       "State":"PA",
       "ZIP":"19008",
       "Phone":"6103259395",
       "Fax":"fax@getzfire.com",
       "Email":"jackiev@getzfire.com",
       "Cell":"4548874514",
       "UDF1":"MMNICOSON",
       "Fee":"78",
       "Notes":"10/07/10 NOT REQIRED TO TEST BACKFLOW PER JOE PAYLOR.  TM   06/19/2009-PER CUST, DOES NOT USE THE IRRIGATION-PUSHED DT TO ONE YR AHD-LR",
       "Agency":"FRANK J. STRAHL & SONS, INC.",
       "InsurancePhone":"6103259395",
       "Carrier":"Test Carrier",
       "Policy":"2300720903E", 
       "Expire":"6/13/2016",
       "LiabilityAmount":"10",
       "CityLicense":"058-180639",
       "CityLicenseExpiry":"",
       "CountryLicense":"058-180631",
       "CountryLicenseExpiry":"",
       "PlumberLicense":"058-180632",
       "PlumberLicenseExpiry":"",
       "LandscapeLicense":"058-180635",
       "LandscapeLicenseExpiry":"",
       "FireLicense":"058-180619",
       "FireLicenseExpiry":"",
       "ConfinedSpaceLicense":"058-120639",
       "ConfinedSpaceLicenseExpiry":"",
       "LastLetter":"1/12/2015",
       "WebStatus":"Active",
       "UserId":"RUZOWICZ",
       "Password":"",
       "TestCertification":"Test Certification1",
       "TestExpire":"",
       "TestCertifiedBy":"RUZOWICZ",
       "SurveysCertification":"Test Survey Certification",
       "SurveysExpire":"",
       "SurveysCertifiedBy":"RUZOWICZ",
       "InstallationCertification":"Test Install Certification",
       "InstallationExpire":"",
       "InstallationCertifiedBy":"RUZOWICZ",
       "RepairsCertification":"Test Repair certification",
       "RepairsExpire":"",
       "RepairsCertifiedBy":"RUZOWICZ",
       "LastUpdatedDate":"6/13/2017",
       "LastupdatedBy":"jackiev"
    }
  `;
@Component({
  selector: 'app-technician-details',
  templateUrl: './technician-details.component.html',
  styleUrls: ['./technician-details.component.scss']
})
export class TechnicianDetailsComponent implements OnInit, OnDestroy {
  myGroup: FormGroup;
  technicanId: any;
  technician: any;
  fieldName: any;
  technicianfields: any;
  testKits: Array<any>;
  companies: Array<any>;
  testCompanies: Array<any>;
  isEditPermission: boolean = true;
  companyList = [];
  flag: boolean;
  searchResult: any;
  newcompanyList = [];
  technicianSubscription:Subscription;
  constructor(private technicandetails: TechniciandetailsService,private technicianCreateService: TechnicianCreateService,
    private toasts: ToastNotifications,public dialog: MatDialog, private sharedService:DataService,
    private route: ActivatedRoute,
    private router: Router) {
    this.myGroup = new FormGroup({
      TesterID: new FormControl(''),
      Status: new FormControl(''),
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      Address1: new FormControl(''),
      Address2: new FormControl(''),
      City: new FormControl(''),
      State: new FormControl(''),
      Zip: new FormControl(''),
      Phone: new FormControl(''),
      Ext: new FormControl(''),
      Fax: new FormControl(''),
      TestCertified: new FormControl(''),
      SurvCertified: new FormControl(''),
      InstCertified: new FormControl(''),
      TestCertNum: new FormControl(''),
      SurvCertNum: new FormControl(''),
      InstCertNum: new FormControl(''),
      TestCertExp: new FormControl(''),
      SurvCertExp: new FormControl(''),
      InstCertExp: new FormControl(''),
      Fee: new FormControl(''),
      FeePaid: new FormControl(''),
      Comments: new FormControl(''),
      DateStamp: new FormControl(''),
      UID: new FormControl(''),
      COLICENSE: new FormControl(''),
      REPCERTIFIED: new FormControl(''),
      CNTRYLICex: new FormControl(''),
      CITYLICNUM: new FormControl(''),
      LICEXPDATE: new FormControl(''),
      CERTDATE: new FormControl(''),
      CERTAGCY: new FormControl(''),
      PLUMNUM: new FormControl(''),
      PLUMEXPIR: new FormControl(''),
      LANDEXPIR: new FormControl(''),
      LANDNUM: new FormControl(''),
      FIREEXPIR: new FormControl(''),
      FIRENUM: new FormControl(''),
      INSURANCE: new FormControl(''),
      POLICY: new FormControl(''),
      LIABILITY: new FormControl('', Validators.compose([
        Validators.pattern('[0-9]+')
      ])),
      INSUREXP: new FormControl(''),
      INSURAGT: new FormControl(''),
      INSURPHO: new FormControl(''),
      AllDataSets: new FormControl(''),
      Init: new FormControl(''),
      Email: new FormControl('', Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      Cell: new FormControl(''),
      UDF1: new FormControl(''),
      RepCertNum: new FormControl(''),
      RepCertExp: new FormControl(''),
      SurvCertAgcy: new FormControl(''),
      InstCertAgcy: new FormControl(''),
      RepCertAgcy: new FormControl(''),
      SurvCertDate: new FormControl(''),
      InstCertDate: new FormControl(''),
      RepCertDate: new FormControl(''),
      TestCertNum2: new FormControl(''),
      TestCertExp2: new FormControl(''),
      CertAgcy2: new FormControl(''),
      CertDate2: new FormControl(''),
      SurvCertNum2: new FormControl(''),
      SurvCertExp2: new FormControl(''),
      SurvCertAgcy2: new FormControl(''),
      SurvCertDate2: new FormControl(''),
      InstCertNum2: new FormControl(''),
      InstCertExp2: new FormControl(''),
      InstCertAgcy2: new FormControl(''),
      InstCertDate2: new FormControl(''),
      RepCertNum2: new FormControl(''),
      RepCertExp2: new FormControl(''),
      RepCertAgcy2: new FormControl(''),
      RepCertDate2: new FormControl(''),
      ShowOnList: new FormControl(''),
      CityCheck: new FormControl(''),
      CountyCheck: new FormControl(''),
      PlumberCheck: new FormControl(''),
      LandScapeCheck: new FormControl(''),
      FireCheck: new FormControl(''),
      ConfinedCheck: new FormControl(''),
      ConfinedLicNum: new FormControl(''),
      ConfinedLicExp: new FormControl(''),
      LastLetter: new FormControl(''),
      LastLetterName: new FormControl(''),
      TesterUserID: new FormControl(''),
      Password: new FormControl(''),
      LastUpdate: new FormControl(''),
      LastUpdateID: new FormControl(''),
      LastUpdateBy: new FormControl(''),
      WebStatus: new FormControl(''),
      Contact: new FormControl(''),
      CompanyID: new FormControl('')
    });
    this.technicanId = route.snapshot.url[0].path;
    this.technicandetails.getTechnician(this.technicanId);
    
    this.technicianSubscription=

    this.technicandetails.onTechnicianViewChanged
      .subscribe((data) => {
        this.technician = data[0];
        console.log(this.technician);
        if(this.technician!= undefined){
          this.technician.DateStamp=this.sharedService.convertdate(this.technician.DateStamp);
          this.technician.TestCertExp=this.sharedService.convertdate(this.technician.TestCertExp);
          this.technician.SurvCertExp=this.sharedService.convertdate(this.technician.SurvCertExp);
          this.technician.InstCertExp=this.sharedService.convertdate(this.technician.InstCertExp);
          this.technician.FeePaid=this.sharedService.convertdate(this.technician.FeePaid);
          this.technician.CNTRYLICex=this.sharedService.convertdate(this.technician.CNTRYLICex);
          this.technician.LICEXPDATE=this.sharedService.convertdate(this.technician.LICEXPDATE);
          this.technician.CERTDATE=this.sharedService.convertdate(this.technician.CERTDATE);
          this.technician.PLUMEXPIR=this.sharedService.convertdate(this.technician.PLUMEXPIR);
          this.technician.LANDEXPIR=this.sharedService.convertdate(this.technician.LANDEXPIR);
          this.technician.FIREEXPIR=this.sharedService.convertdate(this.technician.FIREEXPIR);
          this.technician.INSUREXP=this.sharedService.convertdate(this.technician.INSUREXP);
          this.technician.RepCertExp=this.sharedService.convertdate(this.technician.RepCertExp);
          this.technician.SurvCertDate=this.sharedService.convertdate(this.technician.SurvCertDate);
          this.technician.InstCertDate=this.sharedService.convertdate(this.technician.InstCertDate);
          this.technician.RepCertDate=this.sharedService.convertdate(this.technician.RepCertDate);
          this.technician.ConfinedLicExp=this.sharedService.convertdate(this.technician.ConfinedLicExp);
          this.technician.LastUpdate=this.sharedService.convertdate(this.technician.LastUpdate);
          this.technician.LastLetter=this.sharedService.convertdate(this.technician.LastLetter);
      }
        this.companyList = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].Company) {
            this.companyList.push({ id: data[i].Company })
          }
        }
      });

     
    this.technicandetails.getTechnicianfields('Technicians');
    this.technicandetails.ontechnicianfieldsChanged.subscribe(data => {
      this.technicianfields = data;
    });
  }
  GetfieldName(fieldname) {
    var technicianfield = this.technicianfields.filter(field => field.FieldName == fieldname);
    if (technicianfield) {
      this.fieldName = technicianfield[0].Caption;
      return this.fieldName;
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
        console.log("result ---------->", tel);
        return tel;

  }
  phoneNumberVerification_Phone(tel){
    this.technician.Phone = this.phoneNumberVerification(tel);
  }
  phoneNumberVerification_INSURPHO(tel){
    this.technician.INSURPHO = this.phoneNumberVerification(tel);
  }
  ngOnInit() {
    //this.getCompanies();
    //this.getTechCompanies();
    //this.technician = JSON.parse(Technician_Details_DATA);	   
    //this.InUse='true';
    //console.log(this.technician);
    // this.myGroup = new FormGroup({
    //   // Expire: new FormControl(new Date(2013,6,5)),
    //   // CityLicenseExpiry: new FormControl(new Date(2017,6,5)),
    //   // PlumberLicenseExpiry: new FormControl(new Date(2018,6,5)),
    //   // LandscapeLicenseExpiry: new FormControl(new Date(2018,6,5)),
    //   // FireLicenseExpiry: new FormControl(new Date(2018,6,5)),
    //   // ConfinedSpaceLicenseExpiry: new FormControl(new Date(2018,6,5)),
    //   // TestExpire: new FormControl(new Date(2018,6,5)),
    //   // SurveysExpire: new FormControl(new Date(2018,6,5)),
    //   // InstallationExpire: new FormControl(new Date(2018,6,5)),
    //   // RepairsExpire: new FormControl(new Date(2018,6,5)),
    // });
    let admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (!admin.EditTechnicalInfo) {
        this.myGroup.disable();
        this.isEditPermission = false;
      }
    }
   
  }
  ngOnDestroy(){
    this.technicianSubscription.unsubscribe();
  }
  searchcompany(term: string): void {
    this.flag = true;
    if (term !== '') {
      this.technicianCreateService.searchcompany(term).subscribe(data => {
        this.searchResult = data;
      });
    }
  }

  redirecttosite(cname){
    cname=cname.split("-")[1];
    this.router.navigate(['/apps/technicialcompany/details/',cname]);
  }
  
  onUpdateTechnician() {
    // var admin = JSON.parse(localStorage.adminprivilages);
    // if (admin) {
    // if (admin.EditTechnicalInfo > 0) {
    this.myGroup.patchValue({ TesterID: this.technicanId });
    this.companyList.forEach(a => {
      a.id=a.id.split("-")[1];
      this.newcompanyList.push(a);
    });
    this.newcompanyList = this.newcompanyList.filter(comp => {
      return comp.id !== -1 && comp.id !== null;
    });
    if(this.newcompanyList.length>0){
      this.myGroup.value['companyIds'] = this.newcompanyList;
    } else{
      this.myGroup.value['companyIds'] = null;
    }
    
    let jsonString = JSON.parse(JSON.stringify(this.myGroup.value));
    jsonString.LastLetter=this.formatDate(this.myGroup.controls['LastLetter'].value);
    jsonString.FeePaid=this.formatDate(this.myGroup.controls['FeePaid'].value);
    jsonString.INSUREXP=this.formatDate(this.myGroup.controls['INSUREXP'].value);
    jsonString.LICEXPDATE=this.formatDate(this.myGroup.controls['LICEXPDATE'].value);
    jsonString.CNTRYLICex=this.formatDate(this.myGroup.controls['CNTRYLICex'].value);
    jsonString.PLUMEXPIR=this.formatDate(this.myGroup.controls['PLUMEXPIR'].value);
    jsonString.LANDEXPIR=this.formatDate(this.myGroup.controls['LANDEXPIR'].value);
    jsonString.ConfinedLicExp=this.formatDate(this.myGroup.controls['ConfinedLicExp'].value);
    jsonString.TestCertExp=this.formatDate(this.myGroup.controls['TestCertExp'].value);
    jsonString.CERTDATE=this.formatDate(this.myGroup.controls['CERTDATE'].value);
    jsonString.SurvCertExp=this.formatDate(this.myGroup.controls['SurvCertExp'].value);
    jsonString.SurvCertDate=this.formatDate(this.myGroup.controls['SurvCertDate'].value);
    jsonString.InstCertExp=this.formatDate(this.myGroup.controls['InstCertExp'].value);
    jsonString.RepCertExp=this.formatDate(this.myGroup.controls['RepCertExp'].value);
    jsonString.RepCertDate=this.formatDate(this.myGroup.controls['RepCertDate'].value);
    this.technicandetails.updateTechnician(jsonString, this.technicanId).subscribe((res) => {
      if (res) {
        this.toasts.next({ text: 'Technician Updated', type: 'success' });
        this.router.navigate(['/apps/technical']);
      }
      else {
        this.toasts.next({ text: 'Technician Not Updated', type: 'danger' });
      }
    });
    //alert('Technican Updated');
    // this.toasts.next({ text: 'Technican Updated', type: 'success' });
    // this.router.navigate(['apps/technical/']);
    // }
    // else {
    //alert('access denied');
    // this.toasts.next({ text: 'access denied', type: 'secondary' });
    // }
    // }
  }

  ondeleteTechnician() {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditTechnicalInfo > 0) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          id: 1,
          title: 'Do you want to delete the technician?',
        };
        const dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
          if (result === true) {
        this.technicandetails.deleteTechnician(this.technicanId).subscribe((data) => {
          if (data) {
            this.toasts.next({ text: 'Technician Deleted', type: 'success' });
            this.router.navigate(['/apps/technical']);
          } else {
            this.toasts.next({ text: 'Technician Not Deleted', type: 'danger' })
          }
        });
      }
    });
      }
      else {
        this.toasts.next({ text: 'access denied', type: 'danger' });
      }
    }
  }

  getTechCompanies() {
    this.testCompanies = [{ company: this.companies, testkit: this.testKits }];
  }
  addTestCompanies() {
    if (this.isEditPermission) {
      //this.testCompanies.push([{ company: this.companies, testkit: this.testKits }]);
      this.companyList.push({ id: null });
    }
  }
  removeTestCompanies(index) {
    this.companyList.splice(index, 1);
  }
  getTestKit(id) {
    this.technicandetails.getTestKit(id).subscribe(data => {
      this.testKits = data;
    }, err => {
    }, () => { });
  }

  getCompanies() {
    this.technicandetails.getCompanies().subscribe(data => {
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

}
