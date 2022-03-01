import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesearchComponent } from './sitesearch.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
const routes: Routes = [
  {
      path     : '**',
      component: SitesearchComponent,
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
  ],
  declarations: [SitesearchComponent]
})
export class SitesearchModule { }
