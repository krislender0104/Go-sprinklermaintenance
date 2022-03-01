import { TechnicaldetailsService } from './technical-details.service';
import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ToastNotifications } from 'ngx-toast-notifications';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { cloneDeep } from 'lodash';
import { thisTypeAnnotation } from 'babel-types';
import {DialogboxComponent} from './dialogbox/dialogbox.component';
import { Subscription } from 'rxjs';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-technical-details',
  templateUrl: './technical-details.component.html',
  styleUrls: ['./technical-details.component.scss']
})
export class TechnicalDetailsComponent implements OnInit, OnDestroy {
  previousRoute: any;
  techId: any;
  myGroup: FormGroup;
  device: any;
  deviceHistory;
  InUse: any;
  myModel: any;
  deviceSubscription:Subscription;
  @ViewChild('picker11') datePicker: ElementRef;
  isEditPermission: boolean = true;
  constructor(private technicaldetails: TechnicaldetailsService,
    private route: ActivatedRoute, public dialog: MatDialog, private sharedService:DataService,
    private toasts: ToastNotifications,
    private router: Router) {
    this.techId = route.snapshot.url[0].path;
    this.technicaldetails.getTechnical(this.techId);
    this.deviceSubscription=
    this.technicaldetails.onTechnicalViewChanged
      .subscribe(data => {
        this.device = data[0];
        if(this.device!= undefined){
          this.device.DevDate=this.sharedService.convertdate(this.device.DevDate);
          this.device.DateStamp=this.sharedService.convertdate(this.device.DateStamp);
      }
        if (this.device != undefined) {
          this.deviceHistory = cloneDeep(this.device);
          this.device.DateStampHistory = this.device.DateStamp;
        }
        
      });
  }

  ngOnInit() {
    //this.device = JSON.parse(Device_Details_DATA);	   
    //this.InUse='true';
    this.myGroup = new FormGroup({
      // firstName:new FormControl(new Date(2018,6,5)),
      DateAdded: new FormControl(new Date()),
      DevID: new FormControl(this.techId),
      DevCode: new FormControl(),
      MFG: new FormControl(),
      Model: new FormControl(),
      Description: new FormControl(),
      DevSize: new FormControl(),
      DevType: new FormControl(),
      Cost: new FormControl(),
      Details: new FormControl(),
      DevDate: new FormControl(null),
      InspecPer: new FormControl(),
      DevCode2: new FormControl(),
      InUse: new FormControl(),
      MyList: new FormControl(),
      Testable: new FormControl(),
      TestFreq: new FormControl('', Validators.pattern('[0-9]+')),
      TestFreqUnit: new FormControl(),
      ASSE: new FormControl(),
      CSA: new FormControl(),
      DateStamp: new FormControl(null),
      UID: new FormControl(),
      LeadFree: new FormControl(),
      AddedBy: new FormControl(),
      //   myModel1:new FormControl()
    });
    let admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (!admin.EditTechnicalInfo) {
        this.myGroup.disable();
        this.isEditPermission = false;
      }
    }
  }
  ngOnDestroy() {
    this.deviceSubscription.unsubscribe();
  }
  ondeleteTechnical() {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditTechnicalInfo > 0) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          id: 1,
          title: 'Do you want to delete the device type?',
        };
        const dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
          if (result === true) {
            this.technicaldetails.deleteTechnicial(this.techId).subscribe((res) => {
              if (res) {
                this.toasts.next({ text: 'Device Type Deleted', type: 'success' });
                this.router.navigate(['/apps/technical']);
              } else {
                this.toasts.next({ text: 'Device Type not deleted', type: 'danger' });
              }
            });
          }
        });
      } else {
        this.toasts.next({ text: 'Access Denied', type: 'danger' });
      }
    }
  }

  onUpdateTechnical() {

    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditTechnicalInfo) {
        this.myGroup.value.DevID = this.techId;
        // let jsonString = JSON.parse(JSON.stringify(this.myGroup.value));
        //   this.technicaldetails.updateTechnical(jsonString,this.techId);
        //   alert('Company Updated');
        //   debugger
        // this.router.navigate(['/apps/technical']);
        if (this.device.DateStamp._isAMomentObject) {
          this.device.DateStamp = new Date(this.device.DateStamp.toString()).toISOString();
        }
        let jsonString = JSON.parse(JSON.stringify(this.device));
        jsonString.DevDate = this.formatDate(this.myGroup.controls['DevDate'].value);
        this.technicaldetails.updateTechnical(jsonString, this.techId).subscribe((res) => {
          if (res) {
            this.toasts.next({ text: 'Device Type Updated', type: 'success' });
            this.router.navigate(['/apps/technical']);
          }
          else {
            this.toasts.next({ text: 'Device Type Not Updated', type: 'danger' });
          }
        });

        // this.technicaldetails.updateTechnical(jsonString, this.techId).subscribe(
        //   data => {
        //     if (data.length > 0) {
        //       this.toasts.next({ text: 'Dev Type Updated', type: 'success' });
        //       this.router.navigate(['/apps/technical']);
        //     }
        //     else {
        //       this.toasts.next({ text: 'Dev Type Not Updated', type: 'danger' });
        //     }
        //   },
        //   err => {
        //     alert(err);
        //   }
        // );

      }
      else {
        //alert('access denied');
        this.toasts.next({ text: 'access denied', type: 'secondary' });
      }
    }

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
  fieldValueChange(fieldName) {
    this.device[fieldName + 'History'] = this.deviceHistory[fieldName];
  }
}
