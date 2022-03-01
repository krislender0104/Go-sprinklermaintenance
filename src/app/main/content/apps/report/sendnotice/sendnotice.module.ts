import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SendnoticeComponent } from './sendnotice.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
const routes: Routes = [
  {
      path     : '**',
      component: SendnoticeComponent,
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,

    FuseSharedModule,
    CommonModule
  ],
  declarations: [SendnoticeComponent]
})
export class SendnoticeModule { }
