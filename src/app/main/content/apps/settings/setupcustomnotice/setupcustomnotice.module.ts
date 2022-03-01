import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SetupcustomnoticeComponent } from './setupcustomnotice.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatToolbarModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
const routes: Routes = [
  {
      path     : '**',
      component: SetupcustomnoticeComponent,
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
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    FuseSharedModule,
    MatRadioModule,
    MatDividerModule,
    MatDatepickerModule,
    MatToolbarModule,
    NgxPaginationModule
  ],
  declarations: [SetupcustomnoticeComponent]
})
export class SetupcustomnoticeModule { }
