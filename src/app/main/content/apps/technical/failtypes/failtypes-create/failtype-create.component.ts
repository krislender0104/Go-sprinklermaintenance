import { Router } from '@angular/router';
import { FailTypeService } from './failtypeservice';
import { Component, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatPaginator } from '@angular/material';
import { CalendarEvent } from 'angular-calendar';
import { FailType } from './failtype.model';
import { Subject } from 'rxjs';
import { ToastNotifications } from 'ngx-toast-notifications';
import { TechnicalService } from 'app/main/content/apps/technical/technical.service';

@Component({
    selector     : 'fuse-failtype-form-dialog',
    templateUrl  : './failtype-create.component.html',
    styleUrls    : ['./failtype-create.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FusefialtypeFormDialogComponent
{
    event: CalendarEvent;
    failtypeForm: FormGroup;
    failType: FailType;
    onfailtypecreated = new Subject<any>();
    
    action: string;
    dialogTitle: string;
    buttoncaption:any;
    constructor(
        public dialogRef: MatDialogRef<FusefialtypeFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private formBuilder: FormBuilder,
        private createfailtype:FailTypeService,
        private router:Router,private toasts: ToastNotifications,
        private techservice:TechnicalService
    )
    {
         this.action = data.action;
        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Edit Fail Type';
            this.failType = data.FailType;
            this.buttoncaption="Update";
        }
        else
        {
            this.dialogTitle = 'New Fail Type';
            this.failType = new FailType({});
            this.buttoncaption="Create";
        }

         this.failtypeForm = this.createContactForm();
    }

    createContactForm()
    {
        return this.formBuilder.group({
            code    : [this.failType.code],
            description: [this.failType.description],
            RowNum: [this.failType.RowNum],
            uid: [this.failType.uid],
            Datestamp: [this.failType.Datestamp],
        });
    }
    
    CreateFailType(action)
    {
        if(action=='create')
        {
            this.createfailtype.createTechnicalFailType(JSON.parse(JSON.stringify(this.failtypeForm.value))).then(createfail => {
                this.onfailtypecreated.next(createfail);
                if (createfail == 'failtype created') {
                    this.toasts.next({ text: 'Fail Type Created', type: 'success' });
                    this.dialogRef.close(['delete', this.failtypeForm]);
                    this.techservice.getTechnicalFailTypes();
                } else {
                    this.toasts.next({ text: 'fail type not created', type: 'danger' });
                    this.dialogRef.close(['delete', this.failtypeForm]);
                    this.router.navigate(['/apps/technical']);
                }
            });
        }
        if(action=='edit')    
        {
            var admin = JSON.parse(localStorage.adminprivilages);
            if (admin) {
                if (admin.EditTechnicalInfo > 0) {
                    //console.log(JSON.parse(JSON.stringify(this.failtypeForm.value)));
                    this.createfailtype.updateTechnicalFailType(JSON.parse(JSON.stringify(this.failtypeForm.value))).then(updatefail => {
                        this.onfailtypecreated.next(updatefail);
                        if (updatefail == 'failtype updated') {
                            this.toasts.next({ text: 'Fail Type Updated', type: 'success' });
                            this.dialogRef.close(['delete', this.failtypeForm]);
                            this.techservice.getTechnicalFailTypes();
                        } else {
                            this.toasts.next({ text: 'Fail Type not Updated', type: 'danger' });
                            this.dialogRef.close(['delete', this.failtypeForm]);
                            this.router.navigate(['/apps/technical']);
                        }
                    });
                }
                else {
                    //alert('access denied');
                    this.toasts.next({ text: 'access denied', type: 'secondary' });
                }
            }

        }
        if(action=='delete')    
        {
            var admin = JSON.parse(localStorage.adminprivilages);
            if (admin) {
                if (admin.EditTechnicalInfo > 0) {
                    this.createfailtype.deleteTechnicalFailType(JSON.parse(JSON.stringify(this.failtypeForm.controls['RowNum'].value))).subscribe(updatefail => {
                        if (updatefail == 'failtype deleted') {
                            this.toasts.next({ text: 'Fail Type Deleted', type: 'success' });
                            this.dialogRef.close(['delete', this.failtypeForm]);
                            this.techservice.getTechnicalFailTypes();
                        } else {
                            this.toasts.next({ text: 'Fail Type not deleted', type: 'danger' });
                            this.dialogRef.close(['delete', this.failtypeForm]);
                            this.router.navigate(['/apps/technical']);
                        }
                    });
                }
                else {
                    this.toasts.next({ text: 'access denied', type: 'secondary' });
                }
            }

        }
    }
}
