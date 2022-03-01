import { urlconstants } from 'urlconstants.js';
import { DevTypesService } from './devtypes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';
import { TechnicalCreateService } from './technical-create.service';

@Component({
  selector: 'app-technical-create',
  templateUrl: './technical-create.component.html',
  styleUrls: ['./technical-create.component.scss']
})
export class TechnicalCreateComponent implements OnInit {
  devtypeform: FormGroup;
  constructor(private devtypesservce: TechnicalCreateService, private router: Router,
    private toasts: ToastNotifications) {
    this.devtypeform = new FormGroup({
      devCode: new FormControl(''),
      mFG: new FormControl(''),
      model: new FormControl(''),
      description: new FormControl(''),
      devSize: new FormControl(''),
      devType: new FormControl(''),
      cost: new FormControl(''),
      details: new FormControl(''),
      devDate: new FormControl(''),
      inspecPer: new FormControl(''),
      devCode2: new FormControl(''),
      inUse: new FormControl(''),
      myList: new FormControl(''),
      testable: new FormControl(''),
      testFreq: new FormControl('',Validators.pattern('[0-9]+')),//,[Validators.required, Validators.pattern("[0-9]{3}")]),
      testFreqUnit: new FormControl(''),
      aSSE: new FormControl(''),
      cSA: new FormControl(''),
      dateStamp: new FormControl(''),
      UID: new FormControl(''),
      leadFree: new FormControl(''),
    });
    // this.devtypesservce.getDevTypefields('')
  }
  CreateDeviceTypes() {
    let jsonString = JSON.parse(JSON.stringify(this.devtypeform.value));
    jsonString.devDate=this.formatDate(this.devtypeform.controls['devDate'].value);
    this.devtypesservce.createDevType(jsonString).subscribe(data => {
      var result = data;
      this.toasts.next({ text:'Device Type Created', type: 'success' });
      this.router.navigate(['apps/technical']);
    }, err => { 
      console.log(err);
      this.toasts.next({ text: 'Device Type Created', type: 'danger' });
    });
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
  ngOnInit() {
  }

}
