import { AssignTesterService } from './assigntester/assigntester.service';
import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AssigningAppointmentsService } from './assigningappointments.service';
import { MatDialog } from '@angular/material';
import { FuseAssignTesterFormDialogComponent } from './assigntester/assigntester.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastNotifications } from 'ngx-toast-notifications';
import { DataService } from '../../shared/data.service';
@Component({
  selector: 'app-assigningappoinments',
  templateUrl: './assigningappoinments.component.html',
  styleUrls: ['./assigningappoinments.component.scss']
})
export class AssigningappoinmentsComponent implements OnInit {

  assignAppointmentForm: FormGroup;
  appointments: any;
  p =1;
  constructor(private AssigningAppointmentsService: AssigningAppointmentsService,
    private AssignTesterService: AssignTesterService, private spinner: NgxSpinnerService,
    private toasts: ToastNotifications, private sharedService: DataService,
    private dialog: MatDialog) {
    this.assignAppointmentForm = new FormGroup({
      date: new FormControl(),
      appointmenttype: new FormControl()
    }
    )
  }

  ngOnInit() {
    this.AssignTesterService.appointmentCreatedList$.subscribe((appoints) => {
      if (appoints !== undefined) {
        this.onAppointmentAssigned(appoints);
      }
    });
  }
  GetAppointments() {
    var jsonstring = JSON.parse(JSON.stringify(this.assignAppointmentForm.value));
    var date = new Date(jsonstring.date);
    var strdate = (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
    //console.log(strdate);

    if (jsonstring.appointmenttype == "Installation") {
      this.spinner.show();
      this.AssigningAppointmentsService.getInstallationAppointments(strdate).subscribe(data => {
        if (data.length>0) {
          this.appointments = data;
          if(this.appointments.length>0){
            for (let index = 0; index < this.appointments.length; index++) {
              this.appointments[index].date=this.sharedService.convertdate(this.appointments[index].date);
            }
          }
          this.spinner.hide();
        } else {
          this.toasts.next({ text: 'No data Found', type: 'success' });
        }
        this.spinner.hide();
      })
    }
    else if (jsonstring.appointmenttype == "Test") {
      this.spinner.show();
      this.AssigningAppointmentsService.getTestAppointments(strdate).subscribe(data => {
        if (data.length>0) {
          this.appointments = data;
          if(this.appointments.length>0){
            for (let index = 0; index < this.appointments.length; index++) {
              this.appointments[index].date=this.sharedService.convertdate(this.appointments[index].date);
            }
          }
          this.spinner.hide();
        } else {
          this.toasts.next({ text: 'No data Found', type: 'success' });
        }
        this.spinner.hide();
      })
    }
  }

  valueChangeATests(appointRowData) {
    this.appointments.filter(x => x.HazID === appointRowData.HazID ? ((appointRowData.selectedId === 0 || appointRowData.selectedId === "") ? x.selectedId = 1 : x.selectedId = 0) : '');
  }
  dialogRef: any;

  openDialog(appointments) {
    var jsonstring = JSON.parse(JSON.stringify(this.assignAppointmentForm.value));


    var selectedTests = appointments.filter(data => data.selectedId == 1);
    this.dialogRef = this.dialog.open(FuseAssignTesterFormDialogComponent, {
      panelClass: 'contact-form-dialog',
      data: {
        action: 'create',
        selectedTests: selectedTests,
        appointmenttype: jsonstring.appointmenttype
      }
    });
  }
  /**
   * removing the check box and making it as disabled
   * @param data row data
   */
  onAppointmentAssigned(data) {
    if (this.appointments !== undefined)
      data.forEach(element => {
        this.appointments.filter(x => x.HazID === element.HazID ? (x.TestCount++ , x.selectedId = 0) : '')
      });
  }

  selectAll(e) {
    if (e.checked) {
      this.appointments.filter(x => x.TestCount === 0 ? (x.selectedId = 1) : (x.selectedId = 0))
    } else {
      this.appointments.filter(x => x.TestCount === 0 ? (x.selectedId = 0) : (x.selectedId = 0))
    }

  }
}
