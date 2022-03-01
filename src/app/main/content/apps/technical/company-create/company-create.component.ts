import { CompanyCreateService } from './company-create.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';



@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {
  companycreateform:FormGroup ;
  fieldName:any;
  companyfields:any;
  constructor(private cratecompany:CompanyCreateService,private router: Router,
    private toasts: ToastNotifications) {
          this.companycreateform= new FormGroup({
      company :new FormControl(''),        
      address1 :new FormControl(''),
      address2 :new FormControl(''),
      city :new FormControl(''),
      state :new FormControl(''),
      zip :new FormControl(''),
      phone :new FormControl(''),
      fax :new FormControl(''),
      cntyLicNum :new FormControl(''),
      cITYLICNUM :new FormControl(''),
      lICEXPDATE :new FormControl(null),
      insurance :new FormControl(''),
      policy :new FormControl(''),
      liability :new FormControl(''),
      iNSUREXP :new FormControl(''),
      iNSURAGT :new FormControl(''),
      iNSURPHO :new FormControl(''),
      showOnList :new FormControl(''),
      email :new FormControl(''),
      cell :new FormControl(''),
      udf1 :new FormControl(''),
      notes :new FormControl(''),
      cert_City :new FormControl(''),
      cert_County :new FormControl(''),
      county_Expire :new FormControl(null),
      cert_Test :new FormControl(''),
      cert_Survey :new FormControl(''),
      cert_Install :new FormControl(''),
      cert_Repair :new FormControl(''),
      cert_Land :new FormControl(''),
      cert_Fire :new FormControl(''),
      cert_Confine :new FormControl(''),
      udf2 :new FormControl(''),
      udf2a :new FormControl(''),
      udf3 :new FormControl(''),
      udf3a :new FormControl(''),
      status :new FormControl(''),
      lastLetter :new FormControl(null),
      lastLetterName :new FormControl(''),
      dateStamp :new FormControl(''),
      uID :new FormControl(''),
      companyUserID :new FormControl(''),
      password :new FormControl(''),
      contact :new FormControl(''),
      lastUpdate :new FormControl(''),
      lastUpdateID :new FormControl(''),
      lastUpdateBy :new FormControl(''),
      testkitID : new FormControl(''),
        });
        this.cratecompany.getCompanyfields('Companies');
        this.cratecompany.oncompanyfieldsChanged.subscribe(data=>{
            this.companyfields=data;
        });
   }
  CreateCompany()
  {
    
    let jsonString = JSON.parse(JSON.stringify(this.companycreateform.value));
    this.cratecompany.createCompany(jsonString);
    //alert('Company Created');
    this.toasts.next({text: 'Company Created',type: 'success'});
    //this.router.navigate(['apps/technicals']);
  }

  GetfieldName(fieldname)
  {
    var companyfield = this.companyfields.filter(field=>field.FieldName==fieldname);
    if(companyfield)
    {
        this.fieldName=companyfield[0].Caption;
        return this.fieldName;
   }
 }
  ngOnInit() {
      console.log("testing ----------->");
  }


}
