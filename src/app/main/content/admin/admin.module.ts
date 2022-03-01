import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AdminComponent } from './admin.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { DeviceDetectorModule } from 'ngx-device-detector';

const routes: Routes = [
  {
      path     : '**',
      component: AdminComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        FuseSharedModule,
        DeviceDetectorModule.forRoot()
  ],
  declarations: [AdminComponent]
})
export class AdminModule { 
  

}
