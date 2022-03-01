import { ExportComponent } from './export.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, 
  MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
// import { AngularDualListBoxModule } from 'angular-dual-listbox';
//import { NgxDualListboxModule } from 'ngx-dual-listbox';
import { CustomListboxModule } from './custom-listbox/custom-listbox.module';
import { FuseSharedModule } from '@fuse/shared.module';
const routes: Routes = [
  {
      path     : '**',
      component: ExportComponent,
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //  NgxDualListboxModule.forRoot(),
    // NgxDualListboxModule,
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
    FuseSharedModule,
    MatToolbarModule,
    // AngularDualListBoxModule,
    CustomListboxModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [
		ExportComponent
	],
  declarations: [ExportComponent]
})
export class ExportModule { }
