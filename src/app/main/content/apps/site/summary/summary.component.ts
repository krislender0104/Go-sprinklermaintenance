import { Component, OnInit } from '@angular/core';
import { SummaryService } from './summary.service';
import { Summary, SiteInfo, SiteInformation, HazardListEntity, DevTest } from './summary';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, } from '@angular/forms';
import { DataService } from "../../shared/data.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private summaryService: SummaryService, private builder: FormBuilder,
    private sharedservice:DataService, private route: Router, private _routerAct: ActivatedRoute) {
    let adminpre = JSON.parse(localStorage.adminprivilages);
    this.form = builder.group({
      datasetId: new FormControl('', { validators: [Validators.required] }),
      customerNumber: new FormControl(''),
      hazardId: new FormControl('', { validators: [Validators.pattern('[0-9]+')] }),
      serialNumber: new FormControl('')
    });
    this.form.valueChanges.subscribe(val => {
      if (this.form.controls['customerNumber'].value) {
        this.form.controls['serialNumber'].disable({ onlySelf: true });
        this.form.controls['hazardId'].disable({ onlySelf: true });
        this.disableDS = false;
        return;
      } else if (this.form.controls['serialNumber'].value) {
        this.form.controls['customerNumber'].disable({ onlySelf: true });
        this.form.controls['hazardId'].disable({ onlySelf: true });
        this.disableDS = false;
        return;
      } else if (this.form.controls['hazardId'].value) {
        this.form.controls['customerNumber'].disable({ onlySelf: true });
        this.form.controls['serialNumber'].disable({ onlySelf: true });
        this.disableDS = false;
        return;
      }
      this.form.controls['customerNumber'].enable({ onlySelf: true });
      this.form.controls['serialNumber'].enable({ onlySelf: true });
      this.form.controls['hazardId'].enable({ onlySelf: true });
      this.disableDS = true;
    })
    this.summaryService.getUserDataSet(adminpre.UserID, adminpre.AccessAll).subscribe(data => {
      this.dataSets = data;
      this.defaultdataSet=this.dataSets[0].clientId;
    }, err => { }, () => { });
  }
  dataSets: Array<any>;
  summary: Summary;
  siteInfo: SiteInfo;
  selectedHazard: HazardListEntity;
  devTests: Array<DevTest>;
  selectedDev: DevTest;
  isEditSiteInfo: boolean = true;
  isNoEditSite: boolean = true;
  isNoEditHaz: boolean = true;
  isNoEditTest: boolean = true;
  disableDS: boolean = true;
  public form: FormGroup;
  searchCriteria: String = '';
  defaultdataSet: any;

  ngOnInit() {

    this.summary = new Summary();
    this.siteInfo = new SiteInfo();
    this.siteInfo.siteInformation = new SiteInformation();
    this.selectedHazard = new HazardListEntity();
    this.selectedDev = new DevTest();
    if (this._routerAct.snapshot.paramMap.has('dataSetId')) {
      this.summary.datasetid = +this._routerAct.snapshot.paramMap.get('dataSetId');
      this.summary.companyNumber = this._routerAct.snapshot.paramMap.get('comNo');
      //this.getSiteInfo();
      this.getDevTest(this._routerAct.snapshot.paramMap.get('HazID'));
    }
    let admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (!admin.EditSiteInfo) {
        this.isEditSiteInfo = false;
      }
    }
  }
  switchHazard(hazard) {
    this.selectedHazard = hazard;
    this.getDevTest(hazard.HazID);
  }
  switchdev(devTest) {
    if (devTest != null && devTest != '') {
      this.selectedDev = devTest;
      this.isNoEditTest = false;
    } else {
      this.isNoEditTest = true;
    }
  }

  ensureMinimumSearchCriteria() {
    if (this.form.controls['customerNumber'].value) {
      this.searchCriteria = 'DatasetWithCustomer';
      return true;
    } else if (this.form.controls['serialNumber'].value) {
      this.searchCriteria = 'DatasetWithSerialNumber';
      return true;
    } else if (this.form.controls['hazardId'].value) {
      this.searchCriteria = 'DatasetWithHarzarId';
      return true;
    } else if (this.form.controls['datasetId'].value) {
      this.searchCriteria = "ALLWithDatasetId";
      return true;
    } else {
      this.searchCriteria = 'NA';
      return false;
    }
  };

  getSite() {
    if (this.form.valid) {
      if (this.ensureMinimumSearchCriteria()) {
        const values = JSON.parse(JSON.stringify(this.form.value));
        this.summaryService.getSiteInfo(this.searchCriteria, values).subscribe((data) => {
          this.siteInfo = data;
          if(this.siteInfo.hazardList.length>0){
            for (let index = 0; index < this.siteInfo.hazardList.length; index++) {
              this.siteInfo.hazardList[index].InstallDue=this.sharedservice.convertdate(this.siteInfo.hazardList[index].InstallDue);
              this.siteInfo.hazardList[index].InstalledDate=this.sharedservice.convertdate(this.siteInfo.hazardList[index].InstalledDate);
              this.siteInfo.hazardList[index].RemovedDate=this.sharedservice.convertdate(this.siteInfo.hazardList[index].RemovedDate);
              this.siteInfo.hazardList[index].LastTest=this.sharedservice.convertdate(this.siteInfo.hazardList[index].LastTest);
              this.siteInfo.hazardList[index].LastLetter=this.sharedservice.convertdate(this.siteInfo.hazardList[index].LastLetter);
              this.siteInfo.hazardList[index].NoticeDue1=this.sharedservice.convertdate(this.siteInfo.hazardList[index].NoticeDue1);
              this.siteInfo.hazardList[index].NoticeDue2=this.sharedservice.convertdate(this.siteInfo.hazardList[index].NoticeDue2);
              this.siteInfo.hazardList[index].NoticeDue3=this.sharedservice.convertdate(this.siteInfo.hazardList[index].NoticeDue3);
              this.siteInfo.hazardList[index].ShutOffDate=this.sharedservice.convertdate(this.siteInfo.hazardList[index].ShutOffDate);
            }
          }
          this.selectedHazard = new HazardListEntity();
          this.selectedDev = new DevTest();
          this.devTests=[];
          this.isNoEditSite = false;
        });
      }
    } else {
      console.log('invalid form');
    }
  }
  // getSiteInfo() {
  //   if (this.summary.companyNumber && this.summary.companyNumber.length > 0) {
  //     this.summaryService.getSiteInfo(this.summary.datasetid, this.summary.companyNumber).subscribe(data => {
  //       this.siteInfo = data;
  //       this.isNoEditSite = false;
  //     }, err => {
  //       this.summary = new Summary();
  //       this.siteInfo = new SiteInfo();
  //       this.siteInfo.siteInformation = new SiteInformation();
  //       this.selectedHazard = new HazardListEntity();
  //       this.selectedDev = new DevTest();
  //       this.devTests=[];
  //       this.isNoEditSite = true;
  //       this.isNoEditHaz = true;
  //       this.isNoEditTest = true;
  //     }, () => { });
  //   }
  //   else {
  //     this.summary = new Summary();
  //     this.siteInfo = new SiteInfo();
  //     this.siteInfo.siteInformation = new SiteInformation();
  //     this.selectedHazard = new HazardListEntity();
  //     this.selectedDev = new DevTest();
  //     this.devTests=[];
  //     this.isNoEditSite = true;
  //     this.isNoEditHaz = true;
  //     this.isNoEditTest = true;
  //   }
  // }

  getDevTest(hazardid) {
    this.summaryService.getDevTest(hazardid).subscribe(data => {
      this.selectedDev = new DevTest();
      this.devTests = data;
      if(this.devTests.length>0){
        for (let index = 0; index < this.devTests.length; index++) {
          this.devTests[index].iDate=this.sharedservice.convertdate(this.devTests[index].iDate);
          this.devTests[index].TestDue=this.sharedservice.convertdate(this.devTests[index].TestDue);
          this.devTests[index].fDate=this.sharedservice.convertdate(this.devTests[index].fDate);
          this.devTests[index].NoticeDue1=this.sharedservice.convertdate(this.devTests[index].NoticeDue1);
          this.devTests[index].NoticeDue2=this.sharedservice.convertdate(this.devTests[index].NoticeDue2);
          this.devTests[index].NoticeDue3=this.sharedservice.convertdate(this.devTests[index].NoticeDue3);
        }
      }
      this.isNoEditHaz = false;
    }, err => {
      this.isNoEditHaz = true;
    }, () => { });
  }

  SiteEditMethod(siteId) {
    //var datasetid=this.form.value.datasetId;
    //this.permissions.CheckDatSetPemissions(datasetid);
    if (true) //this.permissions.accessdataset==true
    {
      var admin = JSON.parse(localStorage.adminprivilages);
      if (admin) {
        if (admin.ViewSiteInfo) {
          this.route.navigate(['/apps/site/', siteId]);
        }
        else {
          //alert('view access denied');
          //this.toasts.next({text: 'view access denied',type: 'warning'});
        }
      }
    }
    else {
      //alert('view access denied');
      //this.toasts.next({text: 'view access denied',type: 'warning'});
    }
  }

  HazardEditMethod(HazID, SiteID) {
    if (true) //this.permissions.accessdataset==true
    {
      var admin = JSON.parse(localStorage.adminprivilages);
      if (admin) {
        if (admin.ViewSiteInfo) {
          this.route.navigate(['/apps/hazard/hazardview/', HazID, SiteID]);
        }
        else {
          //alert('view access denied');
          //this.toasts.next({text: 'view access denied',type: 'warning'});
        }
      }
    }
    else {
      //alert('view access denied');
      //this.toasts.next({text: 'view access denied',type: 'warning'});
    }

  }

  TestEditMethod(TestID, HazID) {
    if (true) //this.permissions.accessdataset==true
    {
      var admin = JSON.parse(localStorage.adminprivilages);
      if (admin) {
        if (admin.ViewSiteInfo) {
          this.route.navigate(['/apps/test/testview/', TestID, HazID]);
        }
        else {
          //alert('view access denied');
          //this.toasts.next({text: 'view access denied',type: 'warning'});
        }
      }
    }
    else {
      //alert('view access denied');
      //this.toasts.next({text: 'view access denied',type: 'warning'});
    }

  }

}
