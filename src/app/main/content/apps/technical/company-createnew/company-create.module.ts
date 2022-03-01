import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCreateComponent } from './company-create.component';
import { RouterModule, Routes } from '@angular/router';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatChipsModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
const routes: Routes = [
  {
      path     : '**',
      component: CompanyCreateComponent,
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
    MatChipsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatCheckboxModule,FormsModule, ReactiveFormsModule
  ],
  declarations: [CompanyCreateComponent]
})
export class CompanyCreateModule { }
