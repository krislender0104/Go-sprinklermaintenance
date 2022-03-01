import { Router } from '@angular/router';
import { PendingTesterService } from './pendingTester.service';
import { Component, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatPaginator } from '@angular/material';
import { CalendarEvent } from 'angular-calendar';
import { PendingTester } from './pendingTester.model';
import { Subject } from 'rxjs';
import { ToastNotifications } from 'ngx-toast-notifications';

@Component({
  selector: 'app-pendingtester',
  templateUrl: './pendingtester.component.html',
  styleUrls: ['./pendingtester.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PendingtesterComponent {
  event: CalendarEvent;
    assigntesterForm: FormGroup;
    pendingTester: PendingTester;
    ontestercreated = new Subject<any>();
    
    action: string;
    dialogTitle: string;
    buttoncaption:any;
    testers:any;
    selectedTests:any;
    testerId:any;
    appointmenttype:any;
    appointmentdate:any;
    failtypeForm: any;
    constructor(
        public dialogRef: MatDialogRef<PendingtesterComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private formBuilder: FormBuilder,
        private createassigntester:PendingTesterService,
        private router:Router,
        private toasts: ToastNotifications
    )
    {
         this.action = data.action;
        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Edit Tester';
            this.pendingTester = data.selectedTests;
            this.buttoncaption="Update";
            this.selectedTests=data.selectedTests;
            this.appointmenttype = data.appointmenttype
        } 
       
        this.createassigntester.getTesters(this.appointmenttype);
        this.createassigntester.ontesterChanged.subscribe(data=>{
          this.testers=data;
        })
        this.assigntesterForm = this.createAssignTesterForm();
    }
    
    createAssignTesterForm()
    {
        return this.formBuilder.group({
            testerId:[this.pendingTester.testerId],
            pendingTester: [this.pendingTester.selectedTests],
            appointmentdate:[this.pendingTester.appointmentdate]
            //datasetId:new FormControl(),
        });
    }
    CreateAppointment(action)
    {
        var jsonstring=JSON.parse(JSON.stringify(this.assigntesterForm.value));
        const selectedTestsList = jsonstring.assigntester = this.selectedTests;
        console.log(jsonstring);
        if(action=='edit')    
        {
                this.createassigntester.updateTesterAppointments
                (JSON.parse(JSON.stringify(this.assigntesterForm.value))).then(updatetester => {
                    this.ontestercreated.next(updatetester);
                    //this.createassigntester.setAppointmentList(selectedTestsList);
                        this.toasts.next({text: 'Fail type updated',type: 'success'});
                    this.dialogRef.close(['delete',this.createassigntester]);
                });
           
        }
    }

}
