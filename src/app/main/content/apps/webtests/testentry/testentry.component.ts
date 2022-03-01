import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ToastNotifications } from 'ngx-toast-notifications';
import { TestEntryService } from './testentry.service';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { HazardCheckService } from './../hazardcheck/hazardcheck.service';
import { TestEntry } from './testentry'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { DataService } from '../../shared/data.service';
import { Observable } from 'rxjs';

import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { ViewChild } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';
import 'rxjs/add/observable/of';
import urlconstants from 'urlconstants.js';
import { debug } from 'util';

@Component({
  selector: 'app-testentry',
  templateUrl: './testentry.component.html',
  styleUrls: ['./testentry.component.scss']
})
export class TestentryComponent implements OnInit {
  testEntry: TestEntry;
  parentInfo: any;
  companies: Array<any>;
  testKits: Array<any>;
  selectedTesterId;
  selectedComapnyId;
  testerCompanies;
  testerNames = [];
  filteredTesterName: Observable<any[]>;
  UserID: any;
  isWebTestTester: boolean = false;
  typeFlag = 1;
  maxValue = 1;
  today = new Date();
  isRadioPass = false;
  isRadioFail = false;
  dispass = false;
  disfail = false;
  urls = new Array<any>();
  @ViewChild('imageInput')
  myInputVariable: ElementRef;
  imgValueCount;
  userInfo;
  testId;
  siteId;

  uri = 'localhost:3000/imageprocessing/addimage';
  uploader: FileUploader = new FileUploader({ url: this.uri });
  attachmentList = new Array<File>();
  latLong = { lat: 0, long: 0 };

  constructor(private HazardCheckService: HazardCheckService, private testentryservice: TestEntryService,
    private dataService: DataService, private toasts: ToastNotifications, private router: Router) {
    // debugger;
    // var data = route.snapshot.data;
    // route.data.subscribe(data=>{
    //   debugger;
    //   var testData=data;
    // })
    // this.testentryservice.postImageKit(this.parentInfo,item.file).subscribe(data =>{
    //     console.log(data);
    // } )
    //this.attachmentList.push(item)
    this.uploader.onAfterAddingAll = (fileItem: any) => {
      console.log(fileItem);
    }
    this.uploader.onBeforeUploadItem = (fileItem: any) => {
      const objFromData = new FormData();
      objFromData.append('file', fileItem.file.rawFile);
      objFromData.append('name', fileItem.file.name);
      objFromData.append('type', fileItem.file.type);
      objFromData.append('testId', '1010101');
      objFromData.append('testerId', '12335');
      this.testentryservice.postImageKit(objFromData).subscribe(data => {
        this.toasts.next({ text: data.toString(), type: 'success' });
      })
    }
    this.uploader.onAfterAddingAll = (fileItem: any) => {
      console.log(fileItem);
    };

    var currentuser = JSON.parse(localStorage.currentUser);
    this.UserID = currentuser[0].UserID;
    if (currentuser[0].WebTestTester) {
      this.isWebTestTester = true;
      var TesterID=currentuser[0].TesterID;
      // console.log(TesterID);
      this.HazardCheckService.GetCompanylist(TesterID);
          this.HazardCheckService.onhazardcheckChanged.subscribe(testerdata => {
            if (testerdata.length > 0) {
              this.companies = testerdata;
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

    

    // this.testentryservice.getsiteid(this.testEntry.haz_id).subscribe(data=>{
    //   console.log(data);
    //   if(data!=null){
    //     this.siteId=data[0].SiteID;
    //   }
    // })

  }
  ngOnInit() {
    this.testEntry = new TestEntry();
    this.parentInfo = this.dataService.testEntry;
    this.setPass();
    this.getLocation();

    if (this.parentInfo.editParams) {
      // from unsubmitted list page for editing
      this.testEntry = this.parentInfo;
      if(this.testEntry.ipass=='2'){
        this.setradio('Fail');
      }
      this.LoadImages(this.parentInfo.test_data_pk);
      if (this.testEntry.siteType === "PVB") {
        this.typeFlag = 4;
      }
      else if (this.testEntry.siteType === "RP" || this.testEntry.siteType === "RPZ"
        || this.testEntry.siteType === "RPDA") {
        this.typeFlag = 2;
      }
      else if (this.testEntry.siteType === "SVB") {
        this.typeFlag = 3;
      }
      else {
        this.typeFlag = 1;
      }
    }
    else {
      // from test entry for create
      this.testEntry.test_data_pk = 0;
      this.testEntry.ipass = null;
      this.testEntry.idate = null;
      this.testEntry.itestkit = null;
      this.testEntry.i1ai = null;
      this.testEntry.i1aipsi = null;
      this.testEntry.i2cv = null;
      this.testEntry.i2cvpsi = null;
      this.testEntry.ipvbai = null;
      this.testEntry.ipvbaipsi = null;
      this.testEntry.ipvbcv = null;
      this.testEntry.ipvbcvpsi = null;
      this.testEntry.irp = null;
      this.testEntry.irpsi = null;
      this.testEntry.repdate = null;
      this.testEntry.repairs = null;
      this.testEntry.fpass = null;
      this.testEntry.fdate = null;
      this.testEntry.f1ai = null;
      this.testEntry.f1aipsi = null;
      this.testEntry.f2cv = null;
      this.testEntry.f2cvpsi = null;
      this.testEntry.udt4 = null;
      this.testEntry.clean = null;
      this.testEntry.rubber = null;
      this.testEntry.rebuild = null;
      this.testEntry.dt_submitted = new Date();
      this.testEntry.siteUse = null;
      this.testEntry.contact = null;
      this.testEntry.orientation = null;
      this.testEntry.installed = "";
      this.testEntry.type = "";
      this.testEntry.proper = null;
      this.testEntry.shut2 = null;
      this.testEntry.restore = null;
      this.testEntry.backPres = null;
      this.testEntry.linePSI = ""
      this.testEntry.fpvbaipsi = null;
      this.testEntry.fpvbcvpsi = null;

      this.testEntry.companyid = this.parentInfo.companyid;
      // console.log("company ID;", this.testEntry.companyid);
      this.testEntry.testCompany = this.parentInfo.Tester_Company;
      this.testEntry.code = this.parentInfo.Tester_name;
      this.testEntry.testerid = this.parentInfo.testerid;
      this.testEntry.haz_id = this.parentInfo.haz_id;
      this.testEntry.address = this.parentInfo.address;
      this.testEntry.company = this.parentInfo.company;
      this.testEntry.location = this.parentInfo.location_current;
      this.testEntry.location2 = this.parentInfo.location2_current;
      this.testEntry.siteType = this.parentInfo.devtype_current;
      this.testEntry.hazardCat = this.parentInfo.hazardcat_current;
      this.testEntry.serialNum = this.parentInfo.serialnum_current;
      this.testEntry.model = this.parentInfo.model_current;
      this.testEntry.mFG = this.parentInfo.mfg_current;
      this.testEntry.meter = this.parentInfo.meter_current;
      this.testEntry.devSize = this.parentInfo.devsize_current;
      this.testEntry.webFee = this.parentInfo.webFee;
      this.testEntry.siteid=this.parentInfo.site_id;
      this.testEntry.assignmentid=this.parentInfo.assignmentid;
      if (this.testEntry.siteType === "PVB") {
        this.typeFlag = 4;
      }
      else if (this.testEntry.siteType === "RP" || this.testEntry.siteType === "RPZ"
        || this.testEntry.siteType === "RPDA") {
        this.typeFlag = 2;
        //this.maxValue = 5;
      }
      else if (this.testEntry.siteType === "SVB") {
        this.typeFlag = 3;
      }
      else {
        this.typeFlag = 1;
      }

      // var company = this.dataService.companyList.filter(x => x.CompanyID == this.testEntry.companyid);
      // this.testEntry.testCompany = company[0].Company;
    }




    this.getTestKitid();
    if (!this.isWebTestTester) {
      this.testEntry.testerid = +this.testEntry.code.split("-")[1];
      this.testEntry.SubmittedBy='Admin';
    }else{
      this.testEntry.SubmittedBy='WebTester';
    }
  }
  myFilter = (d: Date): boolean => {
    const todaydate = this.formatDate(this.today);
    const day = this.formatDate(d);;
    if (day <= todaydate) {
      return true;
    } else {
      return false;
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
  getTestKitid() {
    this.testentryservice.getTestKit(this.testEntry.companyid).subscribe(data => {
      this.testKits = data[0];
    }, err => { }, () => { });
  }
  get() {
    this.testentryservice.GetCompanylist_Tester(this.testEntry.testerid).subscribe(data => {
      this.companies = data;
      var companyName = data.filter(x => x.companyId == this.testEntry.companyid);
    }, err => { }, () => { });
  }
  saveTestData() {

    // console.log(this.isWebTestTester);
    // console.log(this.testEntry);
    if (this.isWebTestTester) {
      if (this.testEntry.editParams) {
        if(this.testEntry.ipass=='1'){
          this.testEntry.fpass=null;
          this.testEntry.fdate=null;
        }
        if(this.testEntry.idate!=null){
          this.testEntry.idate=new Date(this.formatDate(this.testEntry.idate));
        }
        if(this.testEntry.fdate!=null){
          this.testEntry.fdate=new Date(this.formatDate(this.testEntry.fdate));
        }
        if(this.testEntry.repdate!=null){         
          this.testEntry.repdate=new Date(this.formatDate(this.testEntry.repdate));
        }
        this.testentryservice.save({ data: this.testEntry }).subscribe(data => {
          if (data != null) {
            this.toasts.next({ text: 'Check Unsubmitted Tests and Proceed to Pay', type: 'success' });
            this.imgValueCount = 1;
            this.testId = this.testEntry.test_data_pk;
            if (this.attachmentList.length > 0) {
              const currentuser = JSON.parse(localStorage.currentUser);
              if(currentuser[0].WebTestTester){
                this.userInfo = currentuser[0].TesterID;
              }else{
                this.userInfo = currentuser[0].UserID
              }
              this.uploadImages();
            }
            else {
              this.router.navigate(['apps/webtests/review-unsubmittedtests']);
            }
          } else {
            this.toasts.next({ text: 'Test Not Updated', type: 'danger' });
          }

        }, err => {
          this.toasts.next({ text: err, type: 'danger' });
        }, () => { });
      } else {
        if(this.testEntry.ipass=='1'){
          this.testEntry.fpass=null;
          this.testEntry.fdate=null;
        }
        if(this.testEntry.idate!=null){
          this.testEntry.idate=new Date(this.formatDate(this.testEntry.idate));
        }
        if(this.testEntry.fdate!=null){
          this.testEntry.fdate=new Date(this.formatDate(this.testEntry.fdate));
        }if(this.testEntry.repdate!=null){
        
          this.testEntry.repdate=new Date(this.formatDate(this.testEntry.repdate));
        }
        // console.log(this.testEntry.ipass);
        this.testentryservice.save({ data: this.testEntry }).subscribe(data => {
          if (data != null) {
            this.toasts.next({ text: 'Check Unsubmitted Tests and Proceed to Pay', type: 'success' });
            this.imgValueCount = 1;
            this.testId = data;
            if (this.attachmentList.length > 0) {
              const currentuser = JSON.parse(localStorage.currentUser);
              if(currentuser[0].WebTestTester){
                this.userInfo = currentuser[0].TesterID;
              }else{
                this.userInfo = currentuser[0].UserID
              }
              this.uploadImages();
            }
            else {
              this.router.navigate(['apps/webtests/review-unsubmittedtests']);
            }
          } else {
            this.toasts.next({ text: 'Test Not Created', type: 'danger' });
          }
        }, err => {
          this.toasts.next({ text: err, type: 'danger' });
        }, () => { });
      }
    } else {
      if(this.testEntry.ipass=='1'){
        this.testEntry.fpass=null;
        this.testEntry.fdate=null;
      }
      if(this.testEntry.idate!=null){
        this.testEntry.idate=new Date(this.formatDate(this.testEntry.idate));
      }
      if(this.testEntry.fdate!=null){
        this.testEntry.fdate=new Date(this.formatDate(this.testEntry.fdate));
      }if(this.testEntry.repdate!=null){
        this.testEntry.repdate=new Date(this.formatDate(this.testEntry.repdate));
      }
      this.testentryservice.savefromAdmin({ data: this.testEntry }).subscribe(result => {
        if (result != null) {
          this.toasts.next({ text: 'Test Successfully submitted!', type: 'success' });
          this.imgValueCount = 1;
          this.testId = result;
          if (this.attachmentList.length > 0) {
            const currentuser = JSON.parse(localStorage.currentUser);
            if(currentuser[0].WebTestTester){
              this.userInfo = currentuser[0].TesterID;
            }else{
              this.userInfo = currentuser[0].UserID
            }
            this.uploadImages();
          }
          else {
            this.router.navigate(['apps/webtests/addtest']);
          }
        } else {
          this.toasts.next({ text: 'Test Not submitted!', type: 'danger' });
        }

      }, err => {
        this.toasts.next({ text: err, type: 'danger' });
      }, () => { });
    }
  }


  private selectedLink: string = "Pass";

  setradio(e: string): void {
    this.selectedLink = e;
  }
  isSelected(name: string): boolean {
    if (!this.selectedLink) {
      return false;
    }
    return (this.selectedLink === name);
  }
  /**
   * checkbox pass fail selection based on checkvalues change
   */
  checkboxValidation(type) {
    if (type === 1) {
      if (this.testEntry.i1aipsi === null || this.testEntry.i2cvpsi === null) {
        this.resetInitialTest();
      }
      if (this.testEntry.i1aipsi >= 1
        && this.testEntry.i2cvpsi >= 1) {
        this.setPass();
      }
      else {
        this.setFail();
      }
    } else if (type === 2) {
      if (this.testEntry.i1aipsi === null || this.testEntry.i2cvpsi === null
        || this.testEntry.irpsi === null) {
        this.resetInitialTest();
      }else{
        if (this.testEntry.i1aipsi >= 1
          && this.testEntry.i2cvpsi >= 1
          && this.testEntry.irpsi >= 2) {
          this.setPass();
        }
        else {
          this.setFail();
        }
      }
    } else {
      if (this.testEntry.ipvbaipsi === null || this.testEntry.ipvbcvpsi === null) {
        this.resetInitialTest();
      }
      if (this.testEntry.ipvbaipsi >= 1
        && this.testEntry.ipvbcvpsi >= 1) {
        this.setPass();
      }
      else {
        this.setFail();
      }
    }
  }
  setPass() {
    this.isRadioPass = true;
    this.isRadioFail = false;
    this.setradio('Pass');
    this.testEntry.ipass = '1';
    this.disfail = true;
  }
  setFail() {
    this.isRadioPass = false;
    this.isRadioFail = true;
    this.setradio('Fail')
    this.testEntry.ipass = '2';
    this.dispass = true;
  }
  resetInitialTest() {
    this.setradio('Pass');
    this.testEntry.ipass = null;
    this.disfail = false;
    this.dispass = false;
    return;
  }
  LoadImages(testId) {
    this.testentryservice.getImages(testId).subscribe(data => {
      const imageList = data;
      for (const a of imageList) {
        const temp = a['Imagename'];
        this.urls.push(urlconstants.apiurl + temp);
        this.attachmentList.push(temp);
      }
    });
  }

  detectFiles(event) {
    let files = event.target.files;
    this.LoadImageInUI(files)
  }
  LoadImageInUI(files) {
    if (files) {
      this.attachmentList.push(files);
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }
  removeImage(i) {
    const tempImagename = this.attachmentList[i];
    var tempData = {} as any;
    tempData.testId = this.parentInfo.test_data_pk;
    tempData.imageName = tempImagename;
    if (!(tempImagename[0] instanceof File)) {
      this.testentryservice.deleteImageFromServer(tempData).subscribe(data => {
        this.urls.splice(i, 1);
        this.attachmentList.splice(i, 1);
        this.myInputVariable.nativeElement.value = "";
      })
    } else {
      this.urls.splice(i, 1);
      this.attachmentList.splice(i, 1);
      this.myInputVariable.nativeElement.value = "";
    }
  }
  uploadImages() {
    // for (let file of this.attachmentList) {
    const count = this.imgValueCount++;
    const file = this.attachmentList[count - 1]
    if (count > this.attachmentList.length) {
      if (this.testEntry.editParams) {
        this.router.navigate(['apps/webtests/review-unsubmittedtests']);
      } else {
        this.router.navigate(['apps/webtests/addtest']);
      }
      return;
    }
    if (!(file[0] instanceof File)) {
      this.uploadImages();
      return
    }
    const objFromData = new FormData();
    objFromData.append('file', file[0]);
    objFromData.append('name', file[0].name);
    objFromData.append('type', file[0].type);
    objFromData.append('testId', this.testId.TestId === undefined ? this.testId : this.testId.TestId);//need to change
    objFromData.append('testerId', this.userInfo);

    this.testentryservice.postImageKit(objFromData).subscribe(data => {
      this.toasts.next({ text: 'Uploading image' + '' + count + ' of ' + this.attachmentList.length, type: 'success' });
      this.uploadImages();
    })
    //  }
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latLong.lat = position.coords.latitude;
        this.latLong.long = position.coords.longitude;
        this.testEntry['latLong'] = JSON.stringify(this.latLong);
        // this.testentryservice.getAddressByLatLong(position.coords.latitude, position.coords.longitude).subscribe((place) => {
        //   console.log(place);
        // });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
