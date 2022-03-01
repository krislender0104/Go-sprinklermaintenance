import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestentryComponent } from './testentry.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';

import { MatAutocompleteSelectedEvent } from '@angular/material';
import { MatAutocompleteModule} from '@angular/material';
import {CustomFormsModule} from 'ng2-validation';
import {FileUploadModule} from 'ng2-file-upload';

const routes: Routes = [
  {
      path     : '**',
      component: TestentryComponent
  }
]

@NgModule({
  imports: [
    MatAutocompleteModule,
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
    MatSlideToggleModule,
    MatRadioModule,
    FileUploadModule,
    CustomFormsModule
  ],
  declarations: [TestentryComponent]
})
export class TestentryModule { }
