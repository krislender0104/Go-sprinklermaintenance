import { AppoinmentsComponent } from './appoinments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path     : '**',
      component: AppoinmentsComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [AppoinmentsComponent]
})
export class AppoinmentsModule { }
