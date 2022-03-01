import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatRadioModule, MatCheckboxModule, MatAutocomplete, MatAutocompleteModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SiteImportComponent } from './site-import.component';
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '**',
    component: SiteImportComponent,
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
    MatTableModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatTabsModule
  ],
  declarations: [SiteImportComponent]
})
export class SiteimportModule { }
