import { ToastNotifications } from 'ngx-toast-notifications';
import { DataService } from './../../shared/data.service';
import { Address } from './../../../models/pawscAddress.model';
import { VerifyHazardService } from './verifyhazard.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { parse } from 'date-fns';
@Component({
  selector: 'app-verifyhazard',
  templateUrl: './verifyhazard.component.html',
  styleUrls: ['./verifyhazard.component.scss']
})
export class VerifyhazardComponent implements OnInit {

  verifyhazard: FormGroup;
  company: any;
  serialNum: any;
  meter: any;
  hazid: any;
  verifyhazarddata: any;
  oldhazarddata: any;
  constructor(private VerifyHazardService: VerifyHazardService,
    private dataService: DataService,
    private toasts: ToastNotifications,
    private router: Router, private route: ActivatedRoute) {
    // this.company=route.snapshot.url[0].path;
    // this.hazid=route.snapshot.url[1].path;
    // this.serialNum=route.snapshot.url[2].path;
    // if(route.snapshot.url[2])
    // {
    //   this.serialNum=route.snapshot.url[2].path;
    //   if(this.serialNum==0){this.serialNum=null}
    // }
    // this.meter=route.snapshot.url[3].path;

    this.verifyhazarddata = this.dataService.testEntryHarzardCheck;
    this.verifyhazarddata.mapurl = "https://www.google.com/maps/place/" + this.verifyhazarddata.Address + ', ' + this.verifyhazarddata.City + ', ' + this.verifyhazarddata.State;
    this.oldhazarddata = Object.assign({}, this.verifyhazarddata);
    this.verifyhazard = new FormGroup({
      // Address:new FormControl(),
      // Company:new FormControl(),
      Location: new FormControl(),
      Location2: new FormControl(),
      HazardCat: new FormControl(),
      Meter: new FormControl(),
      SerialNum: new FormControl(),
      MFG: new FormControl(),
      existorreplace: new FormControl(),
      Model: new FormControl(),
      Type: new FormControl(),
      devSize: new FormControl(),
    })

  }
  VerifyHarard() {
    let count = 0;
    for (const key in this.verifyhazard.value) {
      if (this.oldhazarddata.hasOwnProperty(key)) {
        if (this.verifyhazard.value[key] !== this.oldhazarddata[key]) {
          count++;
        }
      }
    };
    let jsondata = JSON.parse(JSON.stringify(this.verifyhazard.value));
    let jsonParam = {} as any;

    this.VerifyHazardService.verifyHazardSiteInfo(this.oldhazarddata.HazID).subscribe(sitedata => {
      if (sitedata.length > 0) {
        const userInfo = JSON.parse(localStorage.currentUser);
        jsonParam.site_id = sitedata[0].SiteID;
        jsonParam.haz_id = sitedata[0].HazID;
        jsonParam.address = this.oldhazarddata.Address;
        jsonParam.address_current = this.oldhazarddata.Address;
        jsonParam.company = this.oldhazarddata.Company;
        jsonParam.company_current = this.oldhazarddata.Company;
        jsonParam.location = this.oldhazarddata.Location;
        jsonParam.location_current = jsondata.Location;
        jsonParam.hazardcat = this.oldhazarddata.HazardCat;
        jsonParam.hazardcat_current = jsondata.HazardCat;
        jsonParam.meter = this.oldhazarddata.Meter;
        jsonParam.meter_current = jsondata.Meter;
        jsonParam.serialnum = this.oldhazarddata.SerialNum;
        jsonParam.serialnum_current = jsondata.SerialNum;
        jsonParam.mfg = this.oldhazarddata.MFG;
        jsonParam.mfg_current = jsondata.MFG;
        jsonParam.model = this.oldhazarddata.Model;
        jsonParam.model_current = jsondata.Model;
        jsonParam.devtype = this.oldhazarddata.Type;
        jsonParam.devtype_current = jsondata.Type;
        jsonParam.devsize = this.oldhazarddata.devSize;
        jsonParam.devsize_current = jsondata.devSize;
        jsonParam.location2 = this.oldhazarddata.Location2;
        jsonParam.location2_current = jsondata.Location2;

        jsonParam.testerid_mod = null;//jsondata.testerid_mod	;
        jsonParam.Tester_name = this.oldhazarddata.tester_name;// jsondata.tester_name		;
        jsonParam.companyid = this.oldhazarddata.companyId;// jsondata.companyid		;
        jsonParam.Tester_Company = this.oldhazarddata.testerCompany;
        jsonParam.UID = null; //jsondata.uID				;
        jsonParam.dateStamp = new Date();
        jsonParam.dt_mod = null;
        jsonParam.id_mod = null;
        jsonParam.webFee = this.oldhazarddata.webFee;
        jsonParam.assignmentid=this.verifyhazarddata.assignmentid;
        this.dataService.testEntry = jsonParam;
        if (count !== 0) {
          if (userInfo[0].WebTestTester == true) {
            jsonParam.editParams = false;
            this.VerifyHazardService.createhazardhistory(jsonParam).subscribe(data => {
              this.toasts.next({ text:'Hazard History Created', type: 'success' });
              this.router.navigate(['/apps/webtests/testentry']);
            }, err => {
              this.toasts.next({ text: err, type: 'danger' });
            }, () => { });
          } else {
            let jsonstring = {} as any;
            jsonstring.site_id = sitedata[0].SiteID;
            jsonstring.haz_id = sitedata[0].HazID;
            jsonstring.location = jsondata.Location;
            jsonstring.location2 = jsondata.Location2;
            jsonstring.hazardcat = jsondata.HazardCat;
            jsonstring.meter = jsondata.Meter;
            jsonstring.serialnum = jsondata.SerialNum;
            jsonstring.mfg = jsondata.MFG;
            jsonstring.model = jsondata.Model;
            jsonstring.devtype = jsondata.Type;
            jsonstring.devsize = jsondata.devSize;
            this.VerifyHazardService.updatehazardfromtestverify(jsonstring).subscribe(data => {
              this.toasts.next({ text: 'Hazard History Updated', type: 'success' });
              this.router.navigate(['/apps/webtests/testentry']);
            }, err => {
              this.toasts.next({ text: err, type: 'danger' });
            }, () => { })            
          }
        }

        else {
          jsonParam.editParams = false;
          this.router.navigate(['/apps/webtests/testentry'])
        }
      }
    })

  }
  GpsLocation() {
    let fulladdress = this.verifyhazarddata.Address + ', ' + this.verifyhazarddata.City + ', ' + this.verifyhazarddata.State;
    this.VerifyHazardService.GoogleLocation(fulladdress).subscribe(data => {

    });
  }
  ngOnInit() {
  }
}
