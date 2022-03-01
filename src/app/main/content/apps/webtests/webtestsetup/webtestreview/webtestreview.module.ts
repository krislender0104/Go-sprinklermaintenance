import { WebtestreviewComponent } from './webtestreview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { WebtestreviewService } from './webtestreview.service';
const routes: Routes = [
  {
      path     : '**',
      component: WebtestreviewComponent 
  }
];
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
    FuseSharedModule,
    MatCheckboxModule
  ],
  declarations: [WebtestreviewComponent],
  providers: [WebtestreviewService]
})
export class WebtestreviewModule { }
