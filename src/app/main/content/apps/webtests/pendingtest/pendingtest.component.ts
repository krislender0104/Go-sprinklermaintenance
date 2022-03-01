import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { TestEntry } from '../testentry/testentry';
import { PendingtestService } from './pendingtest.service';
import { MatDialog } from '@angular/material';
import { PendingtesterComponent } from './pendingtester/pendingtester.component';
@Component({
  selector: 'app-pendingtest',
  templateUrl: './pendingtest.component.html',
  styleUrls: ['./pendingtest.component.scss']
})
export class PendingtestComponent implements OnInit {

  _pendingAppointments:any;



  constructor(private pendingService: PendingtestService,
              private dialog: MatDialog) { }
  testData: Array<TestEntry>;
  ngOnInit() {
    this.get();
  }
  get() {
    this.pendingService.get().subscribe(data => {
      this._pendingAppointments = data;
    }, err => { }, () => { });
  }

  valueChangeATests(appointRowData) {
    this._pendingAppointments.filter(x=>x.test_data_pk === appointRowData.test_data_pk?((appointRowData.selectedId === 0 || appointRowData.selectedId === "")?x.selectedId=1:x.selectedId=0):'');
   }
  dialogRef: any;
  
  openDialog()
    {
     
      var selectedTests = this._pendingAppointments.filter(data=>data.selectedId==1);
      this.dialogRef = this.dialog.open(PendingtesterComponent, {
        panelClass: 'contact-form-dialog',
        data      : {
            action : 'edit',
            selectedTests:selectedTests,
            appointmenttype:'jsonstring.appointmenttype'
        }
    });
    }
}
