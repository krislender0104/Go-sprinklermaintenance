import { SiteService } from './../site.service';
import {SiteComponent} from './../site.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ToastNotifications } from 'ngx-toast-notifications';
import { ActivatedRoute, UrlSegment, UrlSegmentGroup, PRIMARY_OUTLET, Router } from '@angular/router';

@Component({
  selector: 'app-sitemail',
  templateUrl: './sitemail.component.html',
  styleUrls: ['./sitemail.component.scss']
})
export class SitemailComponent implements OnInit {
  mailInfoForm: FormGroup;
  @Input() mailInfoItem;
  @Input() isEditable;
  constructor( private toasts: ToastNotifications, private siteService: SiteService, private sitecomponent:SiteComponent) {

    // create form
    this.mailInfoForm = new FormGroup({
      m_company: new FormControl('',Validators.required),
      m_contact: new FormControl(''),
      m_address: new FormControl(''),
      m_city: new FormControl(''),
      m_state: new FormControl(''),
      m_zip: new FormControl('',Validators.pattern('[0-9]+|([0-9]{5}(-[0-9]{4}))')),
      m_phone: new FormControl('',Validators.pattern('[0-9]{10}|([0-9]{3}(-[0-9]{3})+(-[0-9]{4}))')),
      m_email: new FormControl('',Validators.email)
    });

  }

  ngOnInit() {
    // populating values
    if (this.mailInfoItem !== undefined) {
      this.mailInfoForm.controls['m_company'].setValue(this.mailInfoItem['Mcompany']);
      this.mailInfoForm.controls['m_contact'].setValue(this.mailInfoItem['Mcontact']);
      this.mailInfoForm.controls['m_address'].setValue(this.mailInfoItem['Maddress']);
      this.mailInfoForm.controls['m_city'].setValue(this.mailInfoItem['Mcity']);
      this.mailInfoForm.controls['m_state'].setValue(this.mailInfoItem['Mstate']);
      this.mailInfoForm.controls['m_zip'].setValue(this.mailInfoItem['Mzip']);
      this.mailInfoForm.controls['m_phone'].setValue(this.mailInfoItem['phone']);
      this.mailInfoForm.controls['m_email'].setValue(this.mailInfoItem['email']);
    }
    if (!this.isEditable) {
      this.mailInfoForm.disable();
    }
  }

  // updating mail
  UpdateSiteMail() {
    let jsonString = JSON.parse(JSON.stringify(this.mailInfoForm.value));
    this.siteService.updateSiteMail(jsonString, this.mailInfoItem['AddressID']).subscribe((res) => {
      if(res['status']==='success'){
        this.toasts.next({ text: 'Site Mail Updated', type: 'success' });
      } else {
        this.toasts.next({ text: 'Internal Server Error', type: 'danger' });
      }
    });
    
  }

  // Delete mail address
  deleteAddress(){
    this.siteService.deleteSiteMail(this.mailInfoItem['AddressID']).subscribe((res) => {
      if (res) {
        this.toasts.next({ text: 'Site Mail Deleted', type: 'success' });
        this.sitecomponent.onDeletingSuccess();
      } else {
        this.toasts.next({ text: 'Internal Server Error', type: 'danger' });
      }
    });
  }


}
