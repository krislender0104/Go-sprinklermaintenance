import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TechnicianCreateComponent } from './technician-create.component';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatIconModule,MatRadioButton, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
const routes: Routes = [
  {
      path     : '**',
      component: TechnicianCreateComponent,
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
    MatAutocompleteModule,
    MatRadioModule
  ],
  declarations: [TechnicianCreateComponent]
})
export class TechnicianCreateModule { }
