import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SiteAddhazardService } from './site-addhazard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';

@Component({
  selector: 'app-site-addhazard',
  templateUrl: './site-addhazard.component.html',
  styleUrls: ['./site-addhazard.component.scss']
})
export class SiteAddhazardComponent implements OnInit {
  hazardform: FormGroup;
  siteid: any;
  constructor(private hazardcreateservice: SiteAddhazardService,
    private route: ActivatedRoute, private router: Router,
    private toasts: ToastNotifications) {
    this.hazardform = new FormGroup({
      clientId: new FormControl(),
      siteId: new FormControl('', Validators.compose([
        Validators.pattern('[0-9]+'),
        Validators.required
      ])),
      categoty: new FormControl(),
      priority: new FormControl(),
      servclass: new FormControl(),
      protection: new FormControl(),
      seasonal: new FormControl(),
      heattype: new FormControl(),
      meter: new FormControl(),
      linesize: new FormControl(),
      linestatus: new FormControl(),
      tap: new FormControl(),
      link: new FormControl(),
      device: new FormControl(),
      devicestatus: new FormControl(),
      serial: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      installer: new FormControl(),
      location: new FormControl(),
      meterlocation: new FormControl(),
      recommendations: new FormControl(),
      notes: new FormControl(),
      testmonths: new FormControl()
    });
  }

  ngOnInit() {
  }
  OnCreateHazard() {
    let jsonString = JSON.parse(JSON.stringify(this.hazardform.value));
    this.siteid = jsonString.siteId;
    this.hazardcreateservice.createHazard(jsonString).subscribe(data => {
      if (data==0) {
        this.toasts.next({ text: 'Hazard Created', type: 'success' });
        this.router.navigate(['apps/site/' + this.siteid])
      }else{
        this.toasts.next({ text: 'Hazard Not Created', type: 'danger' });
      }
    });
  }
}
