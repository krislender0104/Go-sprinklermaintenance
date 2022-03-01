import { Router } from '@angular/router';
import { AssignTesterService } from './assigntester.service';
import { Component, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatPaginator } from '@angular/material';
import { CalendarEvent } from 'angular-calendar';
import { AssignTester } from './assigntester.model';
import { Subject } from 'rxjs';
import { ToastNotifications } from 'ngx-toast-notifications';

@Component({
    selector: 'fuse-assigntester-form-dialog',
    templateUrl: './assigntester.component.html',
    styleUrls: ['./assigntester.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FuseAssignTesterFormDialogComponent {
    event: CalendarEvent;
    assigntesterForm: FormGroup;
    assigntester: AssignTester;
    ontestercreated = new Subject<any>();

    action: string;
    dialogTitle: string;
    buttoncaption: any;
    testers: any;
    selectedTests: any;
    testerId: any;
    appointmenttype: any;
    appointmentdate: any;
    failtypeForm:any;
    constructor(
        public dialogRef: MatDialogRef<FuseAssignTesterFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private formBuilder: FormBuilder,
        private createassigntester: AssignTesterService,
        private router: Router,
        private toasts: ToastNotifications
    ) {
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Tester';
            this.assigntester = data.AssignTester;
            this.buttoncaption = "Update";
        }
        else {
            this.dialogTitle = 'Assign New Appointment';
            this.selectedTests = data.selectedTests;
            this.assigntester = new AssignTester({});
            this.buttoncaption = "Assign";
            this.appointmenttype = data.appointmenttype;
        }
        this.createassigntester.getTesters(this.appointmenttype);
        this.createassigntester.ontesterChanged.subscribe(data => {
            this.testers = data;
        })
        this.assigntesterForm = this.createAssignTesterForm();
    }

    createAssignTesterForm() {
        return this.formBuilder.group({
            testerId: [this.assigntester.testerId],
            assigntester: [this.assigntester.selectedTests],
            appointmentdate: [this.assigntester.appointmentdate]
            //datasetId:new FormControl(),
        });
    }
    CreateAppointment(action) {
        var jsonstring = JSON.parse(JSON.stringify(this.assigntesterForm.value));
        jsonstring.appointmentdate = this.formatDate(this.assigntesterForm.controls['appointmentdate'].value);
        const selectedTestsList = jsonstring.assigntester = this.selectedTests;
        if (action == 'create') {
            this.createassigntester.
                createAssignTester(jsonstring).then(createtester => {
                    this.ontestercreated.next(createtester);
                    this.createassigntester.setAppointmentList(selectedTestsList);
                    //alert('appointment assigned');
                    this.toasts.next({ text: 'Appointment Assigned', type: 'success' });
                    this.dialogRef.close(['delete', this.createassigntester]);
                    //  this.router.navigate(['/apps/technical']);
                });
        }
        if (action == 'edit') {
            this.createassigntester.updateTesterAppointments
                (JSON.parse(JSON.stringify(this.assigntesterForm.value))).then(updatetester => {
                    this.ontestercreated.next(updatetester);
                });

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
}
