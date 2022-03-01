import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WebsetupcreateComponent } from './websetupcreate.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, 
  MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FuseSharedModule } from '@fuse/shared.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
const routes: Routes = [
  {
      path     : '**',
      component: WebsetupcreateComponent, 
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
    MatTabsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FuseSharedModule
  ],
  declarations: [WebsetupcreateComponent]
})
export class WebsetupcreateModule { }
