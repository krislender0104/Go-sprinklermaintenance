import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { WebsetupService } from './websetup.service';
import { ToastNotifications } from 'ngx-toast-notifications';
@Component({
  selector: 'app-websetupcreate',
  templateUrl: './websetupcreate.component.html',
  styleUrls: ['./websetupcreate.component.scss']
})
export class WebsetupcreateComponent implements OnInit {

  form_webtestsetup: FormGroup;
  websetups:any;
  code:any;
  rating:any;
  accept:any;
  description:any;
  create:boolean=true;
  updatevalue:boolean=false;
  p = 1;
  constructor(private webtestsetup:WebsetupService,private toasts: ToastNotifications) {
    this.form_webtestsetup= new FormGroup({
      code:new FormControl('',Validators.required),
      rating:new FormControl(),
      accept:new FormControl(),
      description:new FormControl(),
    }
    )
    
    this.webtestsetup.getWebtestSetups().then(data=>
    {
        this.websetups=data;
    })
    
   }
   update:any;
   viewsetup(websetup)
   {
    //this.update='update';
      this.code=websetup.Code;
      //this.rating=websetup.Rating;
      if(websetup.Rating=="Accurate")
      {
        this.rating=1;
      }
      else if(websetup.Rating=="Low Risk")
      {
        this.rating=2;
      }
      else if(websetup.Rating=="General Risk")
      {
        this.rating=3;
      }
      else if(websetup.Rating=="Significant Risk")
      {
        this.rating=4;
      }
      else if(websetup.Rating=="High Risk")
      {
        this.rating=5;
      }
      else
      {
        this.rating=6;
      }
      if(websetup.Accept=="Accept")
      {
        this.accept=1;//  websetup.Accept;
      }
      else
      {
        this.accept=2;
      }
      
      this.description=websetup.Description;
      this.create=false;
      this.updatevalue=true;
      this.form_webtestsetup.controls['code'].disable();
   }
  ngOnInit() {
  }

  /* CreateOrUpdateWebTestSetup()
  {
    if(this.update=='update')
    {
      this.UpdateWebTestSetUp();
    }
    else
    {
      this.AddWebTestSetUp();
    }

  } */
  AddWebTestSetUp()
  {
    let jsondata=JSON.parse(JSON.stringify(this.form_webtestsetup.value));
    this.webtestsetup.addWebTestSetup(jsondata).subscribe(data=>{
      if(data!='0' && data!=null)
      {
        this.toasts.next({text: 'Web Test Setup Created',type: 'success'});
        this.webtestsetup.getWebtestSetups().then(data => {
          this.websetups = data;
        })
        this.form_webtestsetup.reset();
        this.form_webtestsetup.controls['code'].setErrors(null);
      }else{
        this.toasts.next({text: 'Web Test Setup Not Created',type: 'danger'});
      }
    });
    
  }
  UpdateWebTestSetUp()
  {
    this.form_webtestsetup.controls['code'].enable();
    this.form_webtestsetup.patchValue({code:this.code});
    let jsondata=JSON.parse(JSON.stringify(this.form_webtestsetup.value));
    this.webtestsetup.updateWebTestSetup(jsondata,jsondata.code).subscribe(data=>{
      if(data!='0' && data!=null)
      {
        this.toasts.next({text: 'Web Test Setup Updated',type: 'success'});
        this.webtestsetup.getWebtestSetups().then(data => {
          this.websetups = data;
        })
        this.form_webtestsetup.reset();
        this.form_webtestsetup.controls['code'].setErrors(null);
        this.create=true;
        this.updatevalue=false;
      }else{
        this.toasts.next({text: 'Web Test Setup Not Updated',type: 'danger'});
      }
    });
    this.webtestsetup.getWebtestSetups().then(data => {
      this.websetups = data;
    })
  }
}
