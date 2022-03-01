import { TechniciansetupService } from './techniciansetup.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';

@Component({
  selector: 'app-techniciancreate',
  templateUrl: './techniciancreate.component.html',
  styleUrls: ['./techniciancreate.component.scss']
})
export class TechniciancreateComponent implements OnInit {

  form_techniciansetup: FormGroup;
  constructor(private techsetupservice:TechniciansetupService,
    private toasts: ToastNotifications,
  private router:Router) { 
    this.form_techniciansetup= new FormGroup(
      {
        reschedule:new FormControl(),
        maxreschedule:new FormControl(),
        //Exclude Testers with Expired
        certification1: new FormControl(),
        certification2: new FormControl(),
        city: new FormControl(),
        plumber: new FormControl(),
        insurance: new FormControl(),
        excludetest: new FormControl(),
        //Exclude Companies with Expired
        company_citylicense: new FormControl(),
        company_countylicense: new FormControl(),
        company_insuranse: new FormControl(),
        company_excludewebactive: new FormControl(),
        calibration: new FormControl(),
      }
    )
  }

  EmailSettings()
  {

  }
  SaveSetup()
  {
    let jsondata=JSON.parse(JSON.stringify(this.form_techniciansetup.value));
    this.techsetupservice.addTechnicianSetup(jsondata);
    //alert('Technician Setup Created');
    this.toasts.next({text: 'Technician Setup Created',type: 'success'});
  }

  ngOnInit() {
  }

}
