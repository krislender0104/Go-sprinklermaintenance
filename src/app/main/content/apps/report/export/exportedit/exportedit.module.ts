import { ExporteditComponent } from './exportedit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  MatButtonModule, MatFormFieldModule, MatIconModule,
  MatInputModule, MatSelectModule, MatStepperModule
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CustomListboxModule } from '../custom-listbox/custom-listbox.module';
import { CustomListboxComponent } from '../custom-listbox/custom-listbox.component';

import { FuseSharedModule } from '@fuse/shared.module';
const routes: Routes = [
  {
    path: '**',
    component: ExporteditComponent,
  }
]
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
    MatToolbarModule,
    ReactiveFormsModule,
    CustomListboxModule,
    FuseSharedModule
  ],
  declarations: [ExporteditComponent]
})
export class ExporteditModule {
}
