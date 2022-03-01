import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HazardcheckComponent } from './hazardcheck.component';
import { MatFormFieldModule,MatButtonModule,  MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FuseSharedModule } from '@fuse/shared.module';


const routes: Routes = [
  {
      path     : '**',
      component: HazardcheckComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    FuseSharedModule,
    MatAutocompleteModule,
  ],
  declarations: [HazardcheckComponent]
})
export class HazardcheckModule { }
