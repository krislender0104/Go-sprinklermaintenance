import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatRippleModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatRadioModule, MatCheckboxModule, MatAutocomplete, MatAutocompleteModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { SiteCreateComponent } from './site-create.component';
import { SiteService } from '../site.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

const routes: Routes = [
  {
      path     : '**',
      component: SiteCreateComponent,
      resolve  : {
        site: SiteService
    }
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    ReactiveFormsModule,
    FuseSharedModule,
   
    
    MatIconModule,
    MatSelectModule,
    MatStepperModule,
    NgxPaginationModule,
    MatTableModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule,
  ],
  declarations: [SiteCreateComponent]
})
export class SiteCreateModule { }
