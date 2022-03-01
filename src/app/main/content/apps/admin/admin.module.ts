import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from './company.service';
import { MatAutocompleteModule,  MatProgressSpinnerModule} from '@angular/material';

import { MatToolbarModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { polyfill as keyboardEventKeyPolyfill } from 'keyboardevent-key-polyfill';

import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { MatAutocompleteSelectedEvent } from '@angular/material';

keyboardEventKeyPolyfill();
const routes: Routes = [
  {
      path     : '**',
      component: AdminComponent,
  },
  {
    path     : 'companyById/:companyId',
    component: AdminComponent,
    resolve  : {
        company: CompanyService
    }
  }
];

@NgModule({
  imports: [ReactiveFormsModule,
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
    //MatAutocompleteSelectedEvent
  ],
  declarations: [AdminComponent],
  providers   : [
    CompanyService
]
})
export class AdminModule { }
