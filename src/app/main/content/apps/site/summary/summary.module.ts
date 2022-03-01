import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatTreeModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatAutocompleteModule,  MatProgressSpinnerModule} from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Permissions } from 'Permissions.service';
import { SummaryComponent } from './summary.component';
const routes: Routes = [
  {
      path     : '**',
      component: SummaryComponent
  }
];
@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTreeModule,
    FuseSharedModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    TextInputAutocompleteModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    FuseSharedModule,
    MatAutocompleteModule,
    NgxMatSelectSearchModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule

  ],
  
  providers   : [
    Permissions
]
})
export class SummaryModule { }
