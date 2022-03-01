import { ReviewUnsubmittedtestsComponent } from './review-unsubmittedtests.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';

const routes: Routes = [
  {
      path     : '**',
      component: ReviewUnsubmittedtestsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
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
  ],entryComponents: [
    MyDialogComponent
  ],
  declarations: [ReviewUnsubmittedtestsComponent, MyDialogComponent]
})
export class ReviewUnsubmittedtestsModule { 
  
}
