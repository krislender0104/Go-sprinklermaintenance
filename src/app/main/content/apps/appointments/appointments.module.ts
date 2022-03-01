import { AppointmentService } from './appointment.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentsService } from './appointments.service';


const routes = [
    {
        path     : 'courses',
        component: AppointmentsComponent,
        resolve  : {
            academy: AppointmentsService
        }
    },
    {
        path     : 'courses/:courseId/:courseSlug',
        component: AppointmentsComponent,
        resolve  : {
            academy: AppointmentsService
        }
    },
    {
        path      : '**',
        redirectTo: 'courses'
    }
];

@NgModule({
    declarations: [
        AppointmentsComponent,
        AppointmentComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,

        FuseSharedModule
    ],
    providers   : [
        AppointmentsService,
        AppointmentService
    ]
})
export class AppointmentsModule
{
}
