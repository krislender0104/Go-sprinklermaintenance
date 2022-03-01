import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GenerateCustomNotice } from './generatecustomnotice.service';
import { Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { NgxCoolDialogsService } from 'ngx-cool-dialogs';
import { MyDialogComponent } from './my-dialog/my-dialog.component';



@Component({
  selector: 'app-generatecustomnotice',
  templateUrl: './generatecustomnotice.component.html',
  styleUrls: ['./generatecustomnotice.component.scss']
})
export class GeneratecustomnoticeComponent implements OnInit {
  public assignAppointmentForm: FormGroup;
  NoticeDues: Array<{ Name: string, columnName: string }>;
  ExportData = [];
  formParmas: any;
  isProcessing: boolean = false;
  p = 1;
  constructor(private builder: FormBuilder, private generatecustom: GenerateCustomNotice,
    private route: Router,
    private toasts: ToastNotifications,
    public dialog: MatDialog,
    private coolDialogs: NgxCoolDialogsService) {
    this.assignAppointmentForm = builder.group({
      columnName: new FormControl(),
      dueDate: new FormControl(),
      noticeType: new FormControl('')
    });

  }

  ngOnInit() {
  }
  installnotice() {
    this.NoticeDues = [];
    this.NoticeDues = [{
      Name: 'Inst1',
      columnName: 'Hazards.iNoticeDue1'
    }, {
      Name: 'Inst2',
      columnName: 'Hazards.iNoticeDue2'
    }, {
      Name: 'Inst3',
      columnName: 'Hazards.iNoticeDue3'
    }]
  }
  testnotice() {
    this.NoticeDues = [];
    this.NoticeDues = [{
      Name: 'Test1',
      columnName: 'Hazards.NoticeDue1',
    }, {
      Name: 'Test2',
      columnName: 'Hazards.NoticeDue2'
    }, {
      Name: 'Test3',
      columnName: 'Hazards.NoticeDue3'
    }]
  }
  GetAppointments() {
    let params = { columnName: '', dueDate: '', noticeType: '' };

    this.isProcessing = true;
    let date = this.assignAppointmentForm.controls['dueDate'].value;
    date = date.format("MM/DD/YYYY");
    // this.assignAppointmentForm.patchValue({ dueDate: date });
    params.dueDate = date;
    params.columnName = this.assignAppointmentForm.controls['columnName'].value;
    if (this.assignAppointmentForm.controls['columnName'].value == 'Hazards.NoticeDue1') {
      // this.assignAppointmentForm.patchValue({ noticeType: 'Test1' });
      params.noticeType = 'Test1';
    } else if (this.assignAppointmentForm.controls['columnName'].value == 'Hazards.NoticeDue2') {
      // this.assignAppointmentForm.patchValue({ noticeType: 'Test2' });
      params.noticeType = 'Test2';
    } else if (this.assignAppointmentForm.controls['columnName'].value == 'Hazards.NoticeDue3') {
      // this.assignAppointmentForm.patchValue({ noticeType: 'Test3' });
      params.noticeType = 'Test3';
    } else if (this.assignAppointmentForm.controls['columnName'].value == 'Hazards.iNoticeDue1') {
      // this.assignAppointmentForm.patchValue({ noticeType: 'Inst1' });
      params.noticeType = 'Inst1';
    } else if (this.assignAppointmentForm.controls['columnName'].value == 'Hazards.iNoticeDue2') {
      // this.assignAppointmentForm.patchValue({ noticeType: 'Inst2' });
      params.noticeType = 'Inst2';
    } else if (this.assignAppointmentForm.controls['columnName'].value == 'Hazards.iNoticeDue3') {
      // this.assignAppointmentForm.patchValue({ noticeType: 'Inst3' });
      params.noticeType = 'Inst3';
    }
    // let jsonString = JSON.parse(JSON.stringify(this.assignAppointmentForm.value));
    // this.formParmas = jsonString;
    // console.log(params);
    this.formParmas = params;
    this.generatecustom.getGeneratedNotice(params).subscribe((data) => {
      if (data) {
        this.ExportData = data;
        console.log(this.ExportData);
        if (this.ExportData.length === 0) {
          this.toasts.next({ text: 'No Data Found ', type: 'success' });
        }
        // this.assignAppointmentForm.reset();
      } else {
        this.ExportData = [];
        this.assignAppointmentForm.reset();
      }
      this.isProcessing = false;
    });

  }
  generateExcel() {
    this.openModal();
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Do you want to update the date?',
    };
    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.formParmas.columnName = this.formParmas.columnName.replace("NoticeDue", "NoticeDue");
        var user=JSON.parse(localStorage.getItem('currentUser'));
        this.formParmas.user=user[0].FullName;
        this.generatecustom.updateGeneratedNotice(this.formParmas).subscribe((res) => {
          console.log(res);
          this.generatecustom.exportCSV(this.ExportData);
        });
        
        // this.formParmas.user=user[0].FullName;
        // this.generatecustom.updateHistory(this.formParmas).subscribe(res=>{
        //   if(res){
        //     console.log(res);
        //   }
        // });
      } else if (result === false) {
        this.generatecustom.exportCSV(this.ExportData);
      }
    });
  }
}



