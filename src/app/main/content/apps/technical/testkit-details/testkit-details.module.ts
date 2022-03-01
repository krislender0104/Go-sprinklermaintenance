import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestkitDetailsComponent } from './testkit-details.component';
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import {DialogboxComponent} from './dialogbox/dialogbox.component';
const routes: Routes = [
  {
      path     : '**',
      component: TestkitDetailsComponent,
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
    FuseSharedModule,
    MatDialogModule,
    MatTabsModule,
    MatDatepickerModule,
    MatCheckboxModule,
  ],entryComponents:[DialogboxComponent],
  declarations: [TestkitDetailsComponent, DialogboxComponent]
})
export class TestkitDetailsModule { }
