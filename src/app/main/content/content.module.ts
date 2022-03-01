import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseContentComponent } from 'app/main/content/content.component';
//import { AdminComponent } from './admin/admin.component';

@NgModule({
    declarations: [
        FuseContentComponent,
        //AdminComponent
    ],
    imports     : [
        RouterModule,

        FuseSharedModule,
    ],
    exports: [
        FuseContentComponent
    ]
})
export class FuseContentModule
{
}
