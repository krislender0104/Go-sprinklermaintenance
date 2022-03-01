import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseLoginComponent } from './login.component';
import { LogInService } from './login.service';

export const FUSE_CONFIG = new InjectionToken('fuseCustomConfig');
const routes = [
    {
        path     : 'auth/login',
        component: FuseLoginComponent,
    }
];

@NgModule({
    declarations: [
        FuseLoginComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        FuseSharedModule,
        DeviceDetectorModule.forRoot()
    ],
    providers   : [
        LogInService
    ]
})
export class LoginModule
{
   
}
