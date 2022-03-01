import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalComponent } from './technical.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatTreeModule, MatToolbarModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FusefialtypeFormDialogComponent } from './failtypes/failtypes-create/failtype-create.component';
import { FuserepairtypeFormDialogComponent } from './repairtypes/repairtypes-create/repairtype-create.component';
import { TechFilterPipe } from './filter.pipe';


const routes: Routes = [
  {
      path     : '**',
      component: TechnicalComponent

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
    MatPaginatorModule,
    MatTreeModule,  
    NgxPaginationModule,
    MatToolbarModule ,FormsModule
  ],
  declarations: [TechnicalComponent,FusefialtypeFormDialogComponent,FuserepairtypeFormDialogComponent, TechFilterPipe],
  entryComponents: [FusefialtypeFormDialogComponent,FuserepairtypeFormDialogComponent]
})
export class TechnicalModule { 
  CreateHazard(test)
  {
    alert(test);
  }
 
}
