import { SiteImportComponent } from './siteimport/site-import.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { SiteService } from './site.service';
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatTreeModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule, MatProgressSpinnerModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Permissions } from 'Permissions.service';
// import { SitesummaryComponent } from './sitesummary/sitesummary.component';
import { SitemailComponent } from './sitemail/sitemail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

const routes: Routes = [
  {
    path: '**',
    component: SiteComponent,
    resolve: {
      site: SiteService
    }
  }
];
@NgModule({
  declarations: [SiteComponent,  SitemailComponent, DialogboxComponent],
  entryComponents: [DialogboxComponent],
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
    MatToolbarModule,
    MatDialogModule,
    MatTabsModule

  ],

  providers: [
    SiteService, Permissions
  ]
})
export class SiteModule { }
