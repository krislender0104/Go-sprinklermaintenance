import { Router } from '@angular/router';
import { TestKitCreateService } from './testkit-create.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastNotifications } from 'ngx-toast-notifications';

@Component({
  selector: 'app-testkit-create',
  templateUrl: './testkit-create.component.html',
  styleUrls: ['./testkit-create.component.scss']
})
export class TestkitCreateComponent implements OnInit {
  createtestkitform:FormGroup;
  fieldName:any;
testkitfields:any;
  constructor(private createtestkit :TestKitCreateService,
    private toasts: ToastNotifications,
    private router:Router) { 
    this.createtestkitform= new FormGroup({
      status:new FormControl(''),
      serialNum:new FormControl(''),
      testKitMfg:new FormControl(''),
      testKitMod:new FormControl(''),
      issueDate:new FormControl(''),
      renewDate:new FormControl(''),
      calDate:new FormControl(''),
      calCompany:new FormControl(''),
      calAddress:new FormControl(''),
      calCity:new FormControl(''),
      calState:new FormControl(''),
      calZip:new FormControl('',Validators.compose([
        Validators.pattern('[0-9]+|([0-9]+(-[0-9]+))')])),
      calPhone:new FormControl('',Validators.compose([
        Validators.pattern('[0-9]+'),Validators.minLength(10)
      ])),
      calFax:new FormControl(''),
      calEmail:new FormControl('',Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      comments:new FormControl(''),
      showOnList:new FormControl('')
  });
  this.createtestkit.getTestKitfields('TestKit');
    this.createtestkit.ontestkitfieldsChanged.subscribe(data=>{
        this.testkitfields=data;
    });
  }

  GetfieldName(fieldname)
  {
    var testkitfield = this.testkitfields.filter(field=>field.FieldName==fieldname);
    if(testkitfield)
    {
        this.fieldName=testkitfield[0].Caption;
        return this.fieldName;
    }
  }
  ngOnInit() {
  }
  CreateTestKit() {
    let jsonString = JSON.parse(JSON.stringify(this.createtestkitform.value));
    jsonString.issueDate=this.formatDate(this.createtestkitform.controls['issueDate'].value);
    jsonString.renewDate=this.formatDate(this.createtestkitform.controls['renewDate'].value);
    jsonString.calDate=this.formatDate(this.createtestkitform.controls['calDate'].value);
    this.createtestkit.createTestKit(jsonString).subscribe(data => {
      this.toasts.next({ text: 'Test Kit Created', type: 'success' });
      this.router.navigate(['apps/technical']);
    }, err => {
      this.toasts.next({ text: 'Test Kit Not Created', type: 'danger' });
    }, () => { });
    /* this.createtestkit.createTestKit(jsonString);
    //alert('Test Kit Created');  
    this.toasts.next({text: 'Test Kit Created',type: 'success'});
    this.router.navigate(['apps/technical']); */
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
