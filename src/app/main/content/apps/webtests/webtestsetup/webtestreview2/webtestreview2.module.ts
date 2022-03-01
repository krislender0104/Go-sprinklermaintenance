import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Webtestreview2Component } from './webtestreview2.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Webtestreview2Service } from './webtestreview2.service';
import { NgxPaginationModule } from 'ngx-pagination';


const routes: Routes = [
  {
      path     : '**',
      component: Webtestreview2Component 
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
    MatCheckboxModule,
    NgxPaginationModule
  ],
  declarations: [Webtestreview2Component],
  providers: [Webtestreview2Service]
})
export class Webtestreview2Module { }
