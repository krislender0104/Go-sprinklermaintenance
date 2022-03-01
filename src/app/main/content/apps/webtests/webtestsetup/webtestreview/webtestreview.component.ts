import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WebtestreviewService } from './webtestreview.service';
import { ToastNotifications } from "ngx-toast-notifications";
import { DataService } from '../../../shared/data.service';

@Component({
  selector: 'app-webtestreview',
  templateUrl: './webtestreview.component.html',
  styleUrls: ['./webtestreview.component.scss']
})
export class WebtestreviewComponent implements OnInit {

  webtests = [];
  selectedHazId;
  seletedSiteId;
  selectedTesterName;
  selectedTesterCompany;
  chkaddress: boolean;
  chkcompany: boolean;
  chklocation: boolean;
  chklocation2: boolean;
  chkmeter: boolean;
  chkserial: boolean;
  chkmfg: boolean;
  chkmodel: boolean;
  chktype: boolean;
  chksize: boolean;
  chkhazardcat: boolean;
  originalData = {
    address: '',
    company: '',
    location: '',
    location2: '',
    meter: '',
    serial: '',
    mfg: '',
    model: '',
    type: '',
    size: '',
    hazardcat:''
  };
  testerSuggestedData = {
    address: '',
    company: '',
    location: '',
    location2: '',
    meter: '',
    serial: '',
    mfg: '',
    model: '',
    type: '',
    size: '',
    hazardcat:''
  };
  changesMode = {
    address: false,
    company: false,
    location: false,
    location2: false,
    meter: false,
    serial: false,
    mfg: false,
    model: false,
    type: false,
    size: false,
    hazardcat: false
  };
  selectedWebtest = -1;
  constructor(private webtestService: WebtestreviewService, private toast: ToastNotifications, private sharedService:DataService) {
    this.webtestService.getWebTestReviewList().subscribe((data) => {
      this.webtests = data;
      if(this.webtests.length>0){
        for (let index = 0; index < this.webtests.length; index++) {
          this.webtests[index].dateStamp=this.sharedService.convertdate(this.webtests[index].dateStamp);
        }
      }
    });
  }

  ngOnInit() {
  }

  selecteWebTest(webTestObj) {

    this.selectedHazId = webTestObj.haz_id;
    this.selectedTesterName = webTestObj.Tester_name;
    this.selectedTesterCompany = webTestObj.Tester_Company;
    this.seletedSiteId = webTestObj.site_id;

    this.originalData.address = webTestObj.address;
    this.originalData.company = webTestObj.company;
    this.originalData.location = webTestObj.location;
    this.originalData.location2 = webTestObj.location2;
    this.originalData.meter = webTestObj.meter;
    this.originalData.serial = webTestObj.serialnum;
    this.originalData.mfg = webTestObj.mfg;
    this.originalData.model = webTestObj.model;
    this.originalData.type = webTestObj.devtype;
    this.originalData.size = webTestObj.devsize;
    this.originalData.hazardcat = webTestObj.hazardcat;

    this.testerSuggestedData.address = webTestObj.address_current;
    this.testerSuggestedData.company = webTestObj.company_current;
    this.testerSuggestedData.location = webTestObj.location_current;
    this.testerSuggestedData.location2 = webTestObj.location2_current;
    this.testerSuggestedData.meter = webTestObj.meter_current;
    this.testerSuggestedData.serial = webTestObj.serialnum_current;
    this.testerSuggestedData.mfg = webTestObj.mfg_current;
    this.testerSuggestedData.model = webTestObj.model_current;
    this.testerSuggestedData.type = webTestObj.devtype_current;
    this.testerSuggestedData.size = webTestObj.devsize_current;
    this.testerSuggestedData.hazardcat = webTestObj.hazardcat_current

    this.selectedWebtest = webTestObj.webHazardHistory_id;

    if (this.testerSuggestedData.address === this.originalData.address) {
      this.chkaddress = false;
    } else { this.chkaddress = true; }
    if (this.testerSuggestedData.company === this.originalData.company) {
      this.chkcompany = false;
    } else { this.chkcompany = true; }
    if (this.testerSuggestedData.location === this.originalData.location) {
      this.chklocation = false;
    } else { this.chklocation = true; }
    if (this.testerSuggestedData.location2 === this.originalData.location2) {
      this.chklocation2 = false;
    } else { this.chklocation2  = true; }
    if (this.testerSuggestedData.meter === this.originalData.meter) {
      this.chkmeter = false;
    } else { this.chkmeter = true; }
    if (this.testerSuggestedData.serial === this.originalData.serial) {
      this.chkserial = false;
    } else { this.chkserial = true; }
    if (this.testerSuggestedData.mfg === this.originalData.mfg) {
      this.chkmfg = false;
    } else { this.chkmfg = true; }
    if (this.testerSuggestedData.model === this.originalData.model) {
      this.chkmodel = false;
    } else { this.chkmodel = true; }
    if (this.testerSuggestedData.type === this.originalData.type) {
      this.chktype = false;
    } else { this.chktype = true; }
    if (this.testerSuggestedData.size === this.originalData.size) {
      this.chksize = false;
    } else { this.chksize = true; }
    if (this.testerSuggestedData.hazardcat === this.originalData.hazardcat) {
      this.chkhazardcat = false;
    } else { this.chkhazardcat = true; }

    this.changesMode = {
      address: this.chkaddress,
      company: this.chkcompany,
      location: this.chklocation,
      location2: this.chklocation2,
      meter: this.chkmeter,
      serial: this.chkserial,
      mfg: this.chkmfg,
      model: this.chkmodel,
      type: this.chktype,
      size: this.chksize,
      hazardcat: this.chkhazardcat
    };


    return false;
  }
  restWebTestValues() {
    this.selectedHazId = "";
    this.selectedTesterName = "";
    this.selectedTesterCompany = "";
    this.seletedSiteId = "";

    this.originalData.address = "";
    this.originalData.company = "";
    this.originalData.location = "";
    this.originalData.location2 = "";
    this.originalData.meter = "";
    this.originalData.serial = "";
    this.originalData.mfg = "";
    this.originalData.model = "";
    this.originalData.type = "";
    this.originalData.size = "";
    this.originalData.hazardcat = "";

    this.testerSuggestedData.address = "";
    this.testerSuggestedData.company = "";
    this.testerSuggestedData.location = "";
    this.testerSuggestedData.location2 = "";
    this.testerSuggestedData.meter = "";
    this.testerSuggestedData.serial = "";
    this.testerSuggestedData.mfg = "";
    this.testerSuggestedData.model = "";
    this.testerSuggestedData.type = "";
    this.testerSuggestedData.size = "";
    this.testerSuggestedData.hazardcat = "";

    this.selectedWebtest = -1;

    this.changesMode = {
      address: false,
      company: false,
      location: false,
      location2: false,
      meter: false,
      serial: false,
      mfg: false,
      model: false,
      type: false,
      size: false,
      hazardcat:false
    };

  }

  updateChanges() {
    if (this.selectedWebtest != null && this.selectedWebtest != -1) {
      let validUpdate = false;
      Object.keys(this.changesMode).forEach(key => {
        if (this.changesMode[key]) {
          validUpdate = true;
        }
      });
      if (validUpdate) {
        this.webtestService.updateWebTestReview(this.seletedSiteId, this.selectedHazId, this.selectedWebtest, this.changesMode, this.testerSuggestedData).subscribe(data => {
          if (data.status) {
            this.toast.next({
              text: 'Successfully updated',
              caption: 'updated',
              type: 'success',
              lifetime: 2000
            });
            this.restWebTestValues();
            this.webtestService.getWebTestReviewList().subscribe((data) => {
              this.webtests = data;
              if(this.webtests.length>0){
                for (let index = 0; index < this.webtests.length; index++) {
                  this.webtests[index].dateStamp=this.sharedService.convertdate(this.webtests[index].dateStamp);
                }
              }
            });
          } else {
            this.toast.next({
              text: data.message,
              caption: 'Error',
              type: 'danger',
              lifetime: 5000
            });
          }
        });
      } else {
        this.toast.next({
          text: 'Please select field to update',
          caption: 'Error',
          type: 'danger',
          lifetime: 5000
        });
      }
    } else {
      this.toast.next({ text: 'Please fill the field to update', type: 'danger' });
    }
  }


  deleteChanges() {
    if (this.selectedWebtest != null && this.selectedWebtest != -1) {
      let validDelete = false;
      Object.keys(this.changesMode).forEach(key => {
        if (this.changesMode[key]) {
          validDelete = true;
        }
      });
      if (validDelete) {
        this.webtestService.deleteWebTestReview(this.selectedWebtest).subscribe(data => {
          if (data) {
            this.toast.next({ text: 'Record Deleted', type: 'success' });
            this.restWebTestValues();
            this.webtestService.getWebTestReviewList().subscribe((data) => {
              this.webtests = data;
              if(this.webtests.length>0){
                for (let index = 0; index < this.webtests.length; index++) {
                  this.webtests[index].dateStamp=this.sharedService.convertdate(this.webtests[index].dateStamp);
                }
              }
            });
            this.selectedHazId = "";
            this.selectedTesterCompany = "";
            this.selectedTesterName = "";
            for (var key in this.testerSuggestedData) {
              if (this.testerSuggestedData.hasOwnProperty(key)) {
                this.testerSuggestedData[key] = '';
              }
            }
            for (var key in this.originalData) {
              if (this.originalData.hasOwnProperty(key)) {
                this.originalData[key] = '';
              }
            }
          } else {
            this.toast.next({ text: 'Record Not Deleted', type: 'danger' });
          }
        })
      } else {
        this.toast.next({ text: 'Please select field to update', caption: 'Error', type: 'danger', });
      }
    } else {
      this.toast.next({ text: 'Please fill the field to update', type: 'danger' });
    }
  }
}