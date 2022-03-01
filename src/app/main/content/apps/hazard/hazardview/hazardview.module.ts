import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HazardviewComponent } from './hazardview.component';
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatTreeModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SiteService } from '../../site/site.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { DialogboxComponent } from './dialogbox/dialogbox.component';
const routes: Routes = [
  {
    path: '**',
    component: HazardviewComponent, resolve: {
      site: SiteService
    }
  }
];
@NgModule({
  imports: [ReactiveFormsModule,
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
    MatTreeModule,
    MatAutocompleteModule,
    NgxMatSelectSearchModule,
    NgxPaginationModule,
    MatDialogModule,
    MatDividerModule
  ], entryComponents: [DialogboxComponent],
  declarations: [HazardviewComponent, DialogboxComponent]

})
export class HazardviewModule {
  CreateHazard(test) {
    alert(test);
  }

}
