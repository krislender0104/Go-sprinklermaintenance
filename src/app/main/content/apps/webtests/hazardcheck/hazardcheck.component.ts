import { filter, startWith, map } from 'rxjs/operators';
import { DataService } from './../../shared/data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HazardCheckService } from './hazardcheck.service';
import { MatFormFieldControl } from '@angular/material';
import { Observable } from 'rxjs';
import { T } from '../../../../../../../node_modules/@angular/cdk/keycodes';
@Component({
  selector: 'app-hazardcheck',
  templateUrl: './hazardcheck.component.html',
  styleUrls: ['./hazardcheck.component.scss'],
})
export class HazardcheckComponent implements OnInit {
  formhazardcheck: FormGroup;
  companies = [];
  UserID: any;
  testerNames = [];
  testerCompanies;
  selectedTesterId;
  selectedComapnyId;
  isWebTestTester: boolean = false;
  filteredTesterName: Observable<any[]>;
  assignmentid;
  companyId:any;
  flag:boolean;
  searchResult: any;
  constructor(private HazardCheckService: HazardCheckService,
    private _dataService: DataService,
    private router: Router, private dataService: DataService) {

    var currentuser = JSON.parse(localStorage.currentUser);
    this.UserID = currentuser[0].UserID;
    if (currentuser[0].WebTestTester) {
      this.isWebTestTester = true;
      var TesterID=currentuser[0].TesterID;
      this.HazardCheckService.GetCompanylist(TesterID);
          this.HazardCheckService.onhazardcheckChanged.subscribe(testerdata => {
            if (testerdata.length > 0) {
              this.companies = testerdata;
              if(testerdata.length==1){
                this.companyId=this.companies[0].CompanyID;
              }
            }
            this.dataService.companyList = testerdata;
          })
    }else{
      this.HazardCheckService.GetTesterDetailsByUserId(this.UserID)
      this.HazardCheckService.onUserTesterChanged.subscribe(data => {
        if (data.length > 0) {
          this.HazardCheckService.GetCompanylist(data[0].TesterID);
          this.HazardCheckService.onhazardcheckChanged.subscribe(testerdata => {
            if (testerdata.length > 0) {
              this.companies = testerdata;
            }
            this.dataService.companyList = testerdata;
          })
        }
      });
    }
    

    this.HazardCheckService.getAllTestersName().subscribe((data: Array<any>) => {
      this.testerNames = data;
    });

    this.formhazardcheck = new FormGroup({
      serialNum: new FormControl(),
      meter: new FormControl(),
      hazid: new FormControl(),
      companyId: new FormControl(),
      testerName: new FormControl(),
      testerCompany: new FormControl()
    });
    this.formhazardcheck.controls['testerCompany'].disable();
    const fromCalendar = this._dataService.hazardCheck;
    
    if (fromCalendar !== undefined) {
      this.formhazardcheck.patchValue({ hazid: fromCalendar.HazID });
      if (fromCalendar.SerialNum === '' || fromCalendar.SerialNum === undefined) {
        this.formhazardcheck.patchValue({ meter: fromCalendar.Meter });
      } else {
        this.formhazardcheck.patchValue({ serialNum: fromCalendar.SerialNum });
      }
      this.assignmentid=fromCalendar.AssignmentId;
    }
    this._dataService.hazardCheck = undefined;
  }
  SiteSearch() {
    if (!this.isWebTestTester) {
      if (this.formhazardcheck.controls['testerCompany'].value == undefined) {
        this.formhazardcheck.patchValue({ testerCompany : 'PAWSC-3045' })
      }
      var CId = this.formhazardcheck.controls['testerCompany'].value.split("-")[1];
      this.formhazardcheck.patchValue({ companyId: +CId });
    }
    let jsondata = JSON.parse(JSON.stringify(this.formhazardcheck.value));
    var testername = jsondata.testerName;
    var company = jsondata.companyId;
    var serialNum = jsondata.serialNum;
    var meter = jsondata.meter;
    var hazid = jsondata.hazid;
    this.dataService.testEntryHarzardCheck = [];
    this.HazardCheckService.searchVerifyHazard(jsondata, company).subscribe(data => {
      const responseData = data;
      if (Object.keys(responseData).length > 0) {
        if (hazid == null) { hazid = 0 }
        if (serialNum == null) { serialNum = "" }
        if (meter == null) { meter = "" }
        if (!this.isWebTestTester) {
          responseData.tester_name = testername;
          var Cname = this.formhazardcheck.controls['testerCompany'].value.split("-")[0];
          responseData.testerCompany = Cname;
        } else {
          var userinfo = JSON.parse(localStorage.currentUser);
          responseData.tester_name = userinfo[0].FullName;
        }
        responseData.assignmentid=this.assignmentid;
        responseData.companyId = company;
        this.dataService.testEntryHarzardCheck = responseData;
        this.router.navigate(['/apps/webtests/testverification', company, hazid, serialNum, meter])
      }
      else {
        this.router.navigate(['/apps/webtests/addtest'])
      }
    }, err => {
      // this.toasts.next({ text: err, type: 'danger' }); 
    }, () => { });
  }
  onTesterNameSelectionChanged(item) {
    this.selectedTesterId = item.split("-")[1];
    this.HazardCheckService.getCompanyByTesterId(this.selectedTesterId).subscribe((data) => {
      this.testerCompanies = data;
      this.formhazardcheck.controls['testerCompany'].enable();
      this.formhazardcheck.controls['testerCompany'].reset();
    });
  }
  onTesterCompanySelectionChanged(item) {
    this.selectedComapnyId = item.split("-")[1];
  }
  ngOnInit() {
    // this.filteredTesterName = this.formhazardcheck.controls['testerName'].valueChanges
    //   .pipe(
    //     startWith(null),
    //     map(term => this.findOption(term)));
  }

  findOption(val: string) {
    // console.log(val);
    if((val != null) && (val.indexOf(' ') >= 0)){
      var string = val.split(" ");
      var stringArray = new Array();
      for(var i =0; i < string.length; i++){
        stringArray.push(string[i]);
        return this.testerNames.filter((s) => new RegExp(string[i], 'gi').test(s.FirstName) || new RegExp(string[i], 'gi').test(s.TestCertNum)  
        || new RegExp(string[i], 'gi').test(s.LastName) );
      }
    }else{
      return this.testerNames.filter((s) => new RegExp(val, 'gi').test(s.FirstName) || new RegExp(val, 'gi').test(s.TestCertNum)  || new RegExp(val, 'gi').test(s.LastName) );

    }
  }

  searchtester(term: string): void {
    this.flag = true;
    if (term !== '') {
      this.HazardCheckService.searchTester(term).subscribe(data => {
        this.searchResult = data;
      });
    }
  }

}
