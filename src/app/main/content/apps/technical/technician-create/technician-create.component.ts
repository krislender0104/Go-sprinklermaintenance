import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TechnicianCreateService } from './technician-create.service';
import { ToastNotifications } from 'ngx-toast-notifications';
import { Router } from '../../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-technician-create',
  templateUrl: './technician-create.component.html',
  styleUrls: ['./technician-create.component.scss']
})
export class TechnicianCreateComponent implements OnInit {
  techcreateform:FormGroup;
  constructor(private TechnicianCreateService:TechnicianCreateService,private router:Router,private toasts: ToastNotifications) {
    this.techcreateform= new FormGroup({
      status        :new FormControl(''),
      firstName   :new FormControl(''), 
      lastName   :new FormControl(''), 
      address1   :new FormControl(''), 
      address2   :new FormControl(''), 
      city    :new FormControl(''), 
      state    :new FormControl(''), 
      zip      :new FormControl(''),
      phone    :new FormControl(''), 
      fax      :new FormControl(''),
      testCertified  :new FormControl(''), 
      survCertified  :new FormControl(''), 
      instCertified  :new FormControl(''), 
      testCertNum    :new FormControl(''),
      survCertNum    :new FormControl(''),
      instCertNum    :new FormControl(''),
      testCertExp    :new FormControl(''),
      survCertExp    :new FormControl(''),
      instCertExp    : new FormControl(''),
      fee      :new FormControl(''),
      feePaid     : new FormControl(''), 
      comments   :new FormControl(''), 
      dateStamp   : new FormControl(''),  
      uID      :new FormControl(''),
      cOLICENSE   :new FormControl(''), 
      rEPCERTIFIED  :new FormControl(''), 
      cNTRYLICex    : new FormControl(''),
      cITYLICNUM    :new FormControl(''),
      lICEXPDATE    : new FormControl(''),
      cERTDATE   : new FormControl(''),
      cERTAGCY   :new FormControl(''), 
      pLUMNUM     :new FormControl(''),
      pLUMEXPIR   : new FormControl(''), 
      lANDEXPIR   : new FormControl(''), 
      lANDNUM     :new FormControl(''),
      fIREEXPIR   : new FormControl(''), 
      fIRENUM     :new FormControl(''),
      iNSURANCE   :new FormControl(''), 
      pOLICY     :new FormControl(''),
      lIABILITY   :new FormControl(''), 
      iNSUREXP   : new FormControl(''), 
      iNSURAGT   :new FormControl(''), 
      iNSURPHO   :new FormControl(''), 
      allDataSets    :new FormControl(''),
      init    :new FormControl(''), 
      email    :new FormControl(''), 
      cell    :new FormControl(''), 
      uDF1    :new FormControl(''), 
      repCertNum    :new FormControl(''),
      repCertExp    : new FormControl(''),
      survCertAgcy  :new FormControl(''), 
      instCertAgcy  :new FormControl(''), 
      repCertAgcy    :new FormControl(''),
      survCertDate  : new FormControl(''), 
      instCertDate  : new FormControl(''), 
      repCertDate    : new FormControl(''),
      testCertNum2  :new FormControl(''), 
      testCertExp2  : new FormControl(''), 
      certAgcy2   :new FormControl(''), 
      certDate2   : new FormControl(''), 
      survCertNum2  :new FormControl(''), 
      survCertExp2  : new FormControl(''), 
      survCertAgcy2  :new FormControl(''), 
      survCertDate2  : new FormControl(''), 
      instCertNum2  :new FormControl(''), 
      instCertExp2  : new FormControl(''), 
      instCertAgcy2  :new FormControl(''), 
      instCertDate2  : new FormControl(''), 
      repCertNum2    :new FormControl(''),
      repCertExp2    : new FormControl(''),
      repCertAgcy2  :new FormControl(''), 
      repCertDate2  : new FormControl(''), 
      showOnList    :new FormControl(''),
      cityCheck   :new FormControl(''), 
      countyCheck    :new FormControl(''),
      plumberCheck  :new FormControl(''), 
      landScapeCheck   :new FormControl(''),
      fireCheck   :new FormControl(''), 
      confinedCheck  :new FormControl(''), 
      confinedLicNum   :new FormControl(''),
      confinedLicExp   : new FormControl(''),
      lastLetter    : new FormControl(''),
      lastLetterName   :new FormControl(''),
      testerUserID  :new FormControl(''), 
      password   :new FormControl(''), 
      lastUpdate    : new FormControl(''),
      lastUpdateID  :new FormControl(''), 
      lastUpdateBy  :new FormControl(''), 
      webStatus   :new FormControl(''),
      logon:new FormControl(),
      initials:new FormControl(),
      fullName:new FormControl(),
      notes:new FormControl(),
      licenseType:new FormControl(),
      userpassword   :new FormControl(''), 
  });
  this.TechnicianCreateService.getTechnicianfields('Technicians');
  this.TechnicianCreateService.ontechnicianfieldsChanged.subscribe(data=>{
    //  this.createtechnician=data;
  });
   }
   fieldName:any;
  technicianfields:any;
   GetfieldName(fieldname)
   {
     var technicianfield = this.technicianfields.filter(field=>field.FieldName==fieldname);
     if(technicianfield)
     {
         this.fieldName=technicianfield[0].Caption;
         return this.fieldName;
     }
 
   }
  CreateTechnician()
  {
    let jsonString = JSON.parse(JSON.stringify(this.techcreateform.value));
    this.TechnicianCreateService.createTechnician(jsonString).subscribe(data=>{
      this.toasts.next({text: 'Technician  Created',type: 'success'});
      this.router.navigate(['apps/technical']);
    }, err => { 
      console.log(err);
      this.toasts.next({ text: 'Technician Not Created', type: 'danger' });
    });  
  }
  ngOnInit() {
  }

}
