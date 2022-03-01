import { Component, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatPaginator } from '@angular/material';

import { CalendarEvent } from 'angular-calendar';

import { RepairType } from './repairtype.model';
import { Subject } from 'rxjs';
import { RepairTypeService } from './repairtype.service';
import { Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';

@Component({
    selector     : 'fuse-repairtype-form-dialog',
    templateUrl  : './repairtype-create.component.html',
    styleUrls    : ['./repairtype-create.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FuserepairtypeFormDialogComponent
{
    dialogTitle: string;
    repairtypeForm: FormGroup;
    action: string;
    repairType: RepairType;
    onrepairtypecreated = new Subject<any>();
    buttoncaption:any;
    constructor(
        public dialogRef: MatDialogRef<FuserepairtypeFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private formBuilder: FormBuilder,
private createrepairtype :RepairTypeService,
private toasts: ToastNotifications,
private router : Router
    )
    {
        this.action = data.action;
        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Edit Repair Type';
            this.repairType = data.repairType;
            this.buttoncaption="Update";
        }
        else
        {
            this.dialogTitle = 'New Repair Type';
            this.repairType = new RepairType({});
            this.buttoncaption="Create";
        }
         this.repairtypeForm = this.createContactForm();
    }

    createContactForm()
    {
        return this.formBuilder.group({
            RowNum      : [this.repairType.RowNum],
            Code    : [this.repairType.Code],
            Description: [this.repairType.Description],
        });
    }
    
    CreateFailType(action)
    {
        if(action=='create')
        {
            this.createrepairtype.createTechnicalRepairType(JSON.parse(JSON.stringify(this.repairtypeForm.value))).then(createrepair => {
                this.onrepairtypecreated.next(createrepair);
              //  alert('Repair Type Created');
              this.toasts.next({text: 'Repair Type Created',type: 'success'});
               this.dialogRef.close(['delete',this.repairtypeForm]);
                this.router.navigate(['/apps/technical']);
            });
        }
        if(action=='edit')
        {
            var admin=JSON.parse(localStorage.adminprivilages);
            if(admin)
            {
            if(admin.EditTechnicalInfo>0)
            {
                this.createrepairtype.updateTechnicalRepairType(JSON.parse(JSON.stringify(this.repairtypeForm.value))).then(updaterepair => {
                    this.onrepairtypecreated.next(updaterepair);
                  //  alert('Repair Type Updated');
                  this.toasts.next({text: 'Repair Type Updated',type: 'success'});
                   this.dialogRef.close(['delete',this.repairtypeForm]);
                    this.router.navigate(['/apps/technical']);
                });
             }
            else
            {
              //alert('access denied');
              this.toasts.next({text: 'access denied',type: 'secondary'});
            }
          }
           
        }
    }

}
