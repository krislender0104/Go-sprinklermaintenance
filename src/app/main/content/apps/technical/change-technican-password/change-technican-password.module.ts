import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChangeTechnicanPasswordComponent } from './change-technican-password.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatTabsModule, MatDatepickerModule, MatCheckboxModule } from '../../../../../../../node_modules/@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

const routes: Routes = [
  {
      path     : '**',
      component: ChangeTechnicanPasswordComponent

  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    FuseSharedModule,
    MatTabsModule,
    MatDatepickerModule,
    MatCheckboxModule,
  ],
  declarations: [ChangeTechnicanPasswordComponent]
})
export class ChangeTechnicanPasswordModule { }
