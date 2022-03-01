import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SitelistComponent } from './sitelist.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatRadioModule, MatCheckboxModule, MatAutocomplete, MatAutocompleteModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { SitelistService } from './sitelist.service';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { Permissions } from 'Permissions.service';
import { QueryBuilderModule } from 'angular2-query-builder';
//https://stackblitz.com/edit/angular-e1f9hq?file=app%2Fapp.component.html

const routes: Routes = [
  {
    path: '**',
    component: SitelistComponent,
    resolve: {
      site: SitelistService
    }
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
    NgxPaginationModule,
    FuseSharedModule,
    MatTableModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    QueryBuilderModule
  ],
  declarations: [SitelistComponent],
  providers: [
    SitelistService,
    Permissions
  ]
})
export class SitelistModule { }
