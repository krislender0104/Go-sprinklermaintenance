import { TechnicalService } from './../technical.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TestKitdetailsService } from './testkit-create.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {DialogboxComponent} from './dialogbox/dialogbox.component';
import { Subscription } from 'rxjs';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-testkit-details',
  templateUrl: './testkit-details.component.html',
  styleUrls: ['./testkit-details.component.scss']
})
export class TestkitDetailsComponent implements OnInit {

  myGroup: FormGroup;
  testkit: any;
  testkitId: any;
  fieldName: any;
  testkitfields: any;
  isEditPermission: boolean = true;
  testkitSubscription:Subscription;
  constructor(private testkitdetails: TestKitdetailsService,private sharedService:DataService,
    private toasts: ToastNotifications,
    private route: ActivatedRoute, public dialog: MatDialog,
    private router: Router) {
    this.myGroup = new FormGroup({
      TestKitID: new FormControl(),
      CompanyID: new FormControl(),
      Status: new FormControl(),
      ShowOnList: new FormControl(),
      SerialNum: new FormControl(),
      TestKitMfg: new FormControl(),
      TestKitMod: new FormControl(),
      IssueDate: new FormControl(),
      RenewDate: new FormControl(),
      CalDate: new FormControl(),
      CalCompany: new FormControl(),
      CalAddress: new FormControl(),
      CalCity: new FormControl(),
      CalState: new FormControl(),
      CalZip: new FormControl(),
      CalPhone: new FormControl(),
      CalFax: new FormControl(),
      CalEmail: new FormControl('', Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      DateStamp: new FormControl(),
      UID: new FormControl(),
      Comments: new FormControl(),
      TesterID: new FormControl(),
      LastUpdate: new FormControl(),
      LastUpdateID: new FormControl(),
      LastUpdateBy: new FormControl(),

    });
    this.testkitId = route.snapshot.url[0].path;
    this.testkitdetails.getTestKit(this.testkitId);
    this.testkitSubscription=
    this.testkitdetails.ontestkitViewChanged
      .subscribe(data => {
        this.testkit = data[0];
        if (this.testkit != undefined) {
          this.testkit.CalDate = this.sharedService.convertdate(this.testkit.CalDate);
          this.testkit.DateStamp = this.sharedService.convertdate(this.testkit.DateStamp);
          this.testkit.IssueDate = this.sharedService.convertdate(this.testkit.IssueDate);
          this.testkit.RenewDate = this.sharedService.convertdate(this.testkit.RenewDate);
          this.testkit.LastUpdate = this.sharedService.convertdate(this.testkit.LastUpdate);
        }
      });
    this.testkitdetails.getTestKitfields('TestKit');
    this.testkitdetails.ontestkitfieldsChanged.subscribe(data => {
      this.testkitfields = data;
    });
  }
  GetfieldName(fieldname) {
    var testkitfield = this.testkitfields.filter(field => field.FieldName == fieldname);
    if (testkitfield) {
      this.fieldName = testkitfield[0].Caption;
      return this.fieldName;
    }
  }

  ngOnInit() {
    let admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (!admin.EditTechnicalInfo) {
        this.myGroup.disable();
        this.isEditPermission = false;
      }
    }
  }
  ngOnDestroy(){
    this.testkitSubscription.unsubscribe();
  }
  onUpdateTestKit() {
    if (this.myGroup.invalid) {
      return;
    }
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditTechnicalInfo > 0) {
        this.myGroup.patchValue({ TestKitID: this.testkitId });
        let jsonString = JSON.parse(JSON.stringify(this.myGroup.value));
        jsonString.IssueDate=this.formatDate(this.myGroup.controls['IssueDate'].value);
        jsonString.RenewDate=this.formatDate(this.myGroup.controls['RenewDate'].value);
        jsonString.CalDate=this.formatDate(this.myGroup.controls['CalDate'].value);
        this.testkitdetails.updateTestKit(jsonString, this.testkitId).subscribe(data => {
          this.toasts.next({ text: 'Test Kit Updated', type: 'success' });
          this.router.navigate(['apps/technical']);
        }, err => {
          this.toasts.next({ text: 'Test Kit Not Created', type: 'danger' });
        }, () => { });
      }
      else {
        // alert('access denied');
        this.toasts.next({ text: 'access denied', type: 'secondary' });
      }
    }

  }

  ondeleteTestKit() {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditTechnicalInfo > 0) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          id: 1,
          title: 'Do you want to delete the testkit?',
        };
        const dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
          if (result === true) {
        this.testkitdetails.deleteTestkit(this.testkitId).subscribe(data => {
          if (data) {
            this.toasts.next({ text: 'TestKit Deleted', type: 'success' });
            this.router.navigate(['/apps/technical']);
          } else {
            this.toasts.next({ text: 'TestKit Not Deleted', type: 'danger' });
          }
        });
      }
    });
      }
      else {
        this.toasts.next({ text: 'access denied', type: 'secondary' });
      }
    }
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
