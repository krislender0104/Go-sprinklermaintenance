import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HazardCreateService } from './hazardcreate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';

@Component({
  selector: 'app-hazard',
  templateUrl: './hazard.component.html',
  styleUrls: ['./hazard.component.scss']
})
export class HazardComponent implements OnInit {
  hazardform: FormGroup;
  newhazard:any;
  siteId:any;
  fieldName:any;
  hazardfields:any;
  constructor(private hazardcreateservice:HazardCreateService,
    private route: ActivatedRoute,private router:Router,
    private toasts: ToastNotifications) {
    this.siteId=route.snapshot.url[0].path;
    this.hazardform = new FormGroup({
     
      clientId:new FormControl(),
      siteId :new FormControl(this.siteId),
      categoty :new FormControl(),
      priority:new FormControl(),
      servclass:new FormControl(),
      protection:new FormControl(),
      seasonal:new FormControl(),
      heattype:new FormControl(),
      meter:new FormControl(),
      linesize:new FormControl(),
      linestatus:new FormControl(),
      tap:new FormControl(),
      link:new FormControl(),
      device:new FormControl(),
      devicestatus :new FormControl(),
      serial:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      installer :new FormControl(),
      location :new FormControl(),
      meterlocation:new FormControl(),
      recommendations:new FormControl(),
      notes:new FormControl(),
      testmonths:new FormControl()
    });

   

 this.hazardcreateservice.getHazardfields('Hazards');
    this.hazardcreateservice.onhazardfieldsChanged.subscribe(data=>{
        this.hazardfields=data;
    });

   }

   GetfieldName(fieldname)
   {
     var hazardfield = this.hazardfields.filter(field=>field.FieldName==fieldname);
     if(hazardfield)
     {
         this.fieldName=hazardfield[0].Caption;
         return this.fieldName;
     }
   }
 

  ngOnInit() {
  }
  OnCreateHazard() {
    let jsonString = JSON.parse(JSON.stringify(this.hazardform.value));
    this.hazardcreateservice.createHazard(jsonString).subscribe(data=>{
      // console.log(data);
      if(data!=null)
      {
        this.toasts.next({text: 'Hazard Created',type: 'success'});
        this.router.navigate(['apps/site/'+this.siteId])
      }else{
        this.toasts.next({text: 'Hazard Not Created',type: 'danger'});
      }
    });   
  }
}
