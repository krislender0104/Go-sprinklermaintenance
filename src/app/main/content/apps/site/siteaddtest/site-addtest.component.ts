import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastNotifications } from 'ngx-toast-notifications';
import { Router } from '@angular/router';
import {SiteAddtestService} from './site-addtest.service';

@Component({
  selector: 'app-site-addtest',
  templateUrl: './site-addtest.component.html',
  styleUrls: ['./site-addtest.component.scss']
})
export class SiteAddtestComponent implements OnInit {
  createtestform: FormGroup;
  constructor(private toasts: ToastNotifications, private router: Router, private siteaddtestservice:SiteAddtestService) {
    this.createtestform = new FormGroup({
      hazardId: new FormControl('',Validators.compose([
        Validators.pattern('[0-9]+'),
        Validators.required
      ])),
      //Initial Test results
      itestdate: new FormControl(''),
      itesterid: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]+')
      ])),
      itestername: new FormControl(''),
      icompany: new FormControl(''),
      itesttype: new FormControl(''),
      itestkit: new FormControl(''),
      ilinepsi: new FormControl(''),
      itestflag: new FormControl(''),
      itestudt5: new FormControl(''),
      ipass:new FormControl(''),
      ivalue1: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      ivalue1_close: new FormControl(''),
      ivalue2: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      ivalue2_close: new FormControl(''),
      ivaluerelief: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      ivaluerelief_close: new FormControl(''),
      ibuffer: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      inotes: new FormControl(''),
      UDT6: new FormControl(''),
      UDT7: new FormControl(''),
      //final test results
      ftestdate: new FormControl(''),
      ftesterid: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]+')
      ])),
      ftestername: new FormControl(''),
      fcompany: new FormControl(''),
      ftesttype: new FormControl(''),
      ftestkit: new FormControl(''),
      fvalue1: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      fvalue1_close: new FormControl(''),
      fvalue2: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      fvalue2_close: new FormControl(''),
      fvaluerelief: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      fvaluerelief_close: new FormControl(''),
      fbuffer: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      frepairby: new FormControl(''),
      //Test Report
      testdue: new FormControl(''),
      notice1: new FormControl(''),
      notice2: new FormControl(''),
      notice3: new FormControl(''),
      notice4: new FormControl(''),
      fpass: new FormControl(''),
      repairdate: new FormControl(),
      repairtype: new FormControl(),
      tranid: new FormControl(),
      udt9: new FormControl(),
      failtype: new FormControl()
    });
  }

  ngOnInit() {
  }

  CreateTestdata() {
    let jsonString = JSON.parse(JSON.stringify(this.createtestform.value));
    jsonString.itestdate=this.formatDate(this.createtestform.controls['itestdate'].value);
    jsonString.ftestdate=this.formatDate(this.createtestform.controls['ftestdate'].value);
    jsonString.repairdate=this.formatDate(this.createtestform.controls['repairdate'].value);
    jsonString.notice1=this.formatDate(this.createtestform.controls['notice1'].value);
    jsonString.notice2=this.formatDate(this.createtestform.controls['notice2'].value);
    jsonString.notice3=this.formatDate(this.createtestform.controls['notice3'].value);
    jsonString.notice4=this.formatDate(this.createtestform.controls['notice4'].value);
    jsonString.testdue=this.formatDate(this.createtestform.controls['testdue'].value);
    this.siteaddtestservice.createTest(jsonString).subscribe(data=>{
      if(data!=null){
        this.toasts.next({ text: 'Test Created', type: 'success' });
        this.createtestform.reset();
      }else{
        this.toasts.next({ text: 'Test Not Created', type: 'success' });
      }
    },err=>{
      this.toasts.next({ text: 'Test Not Created', type: 'success' });
    });
    
  }

  CancelTest(){
    this.createtestform.reset();
  }

  formatDate(date) {
    if (date == null || date == '')
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
