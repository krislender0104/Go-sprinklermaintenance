
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { SubmittedtestsComponent } from './submittedtests.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {
    path: '**',
    component: SubmittedtestsComponent
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
    MatRadioModule,
    MatDividerModule,
    NgxPaginationModule,
  ],
  declarations: [SubmittedtestsComponent]
})
export class SubmittedtestsModule {

}