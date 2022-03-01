import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianDetailsComponent } from './technician-details.component';
import { MatAutocompleteModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DialogboxComponent} from './dialogbox/dialogbox.component';
const routes: Routes = [
  {
      path     : '**',
      component: TechnicianDetailsComponent,
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
    MatAutocompleteModule, 
    MatDatepickerModule,
    MatCheckboxModule,
    MatDialogModule
  ],entryComponents:[DialogboxComponent],
  declarations: [TechnicianDetailsComponent, DialogboxComponent]
})
export class TechnicianDetailsModule { }
