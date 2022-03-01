import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details.component';
import { MatAutocompleteModule, MatDialogModule,MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DialogboxComponent} from './dialogbox/dialogbox.component';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';

const routes: Routes = [
  {
      path     : '**',
      component: CompanyDetailsComponent,
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
    TextInputAutocompleteModule,
    MatDialogModule
  ],entryComponents:[DialogboxComponent],
  declarations: [CompanyDetailsComponent,DialogboxComponent]
})
export class CompanyDetailsModule { }
