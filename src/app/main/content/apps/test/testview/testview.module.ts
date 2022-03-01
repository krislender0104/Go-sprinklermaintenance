import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestviewComponent } from './testview.component';
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { SiteService } from '../../site/site.service';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { MatAutocompleteModule} from '@angular/material';

const routes: Routes = [
  {
      path     : '**',
      component: TestviewComponent, 
      resolve:{
        site: SiteService,
      }
  }
];
@NgModule({
  imports: [
    MatAutocompleteModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatStepperModule,
    FuseSharedModule,
    MatTabsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatRadioModule,
  ], entryComponents: [DialogboxComponent],
  declarations: [TestviewComponent, DialogboxComponent]
})
export class TestviewModule { }
