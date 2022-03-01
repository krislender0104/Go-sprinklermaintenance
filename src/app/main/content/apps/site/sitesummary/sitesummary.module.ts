import { SitesummaryComponent } from './sitesummary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path     : '**',
      component: SitesummaryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [SitesummaryComponent]
})
export class SitesummaryModule { }
