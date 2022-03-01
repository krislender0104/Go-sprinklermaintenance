import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsearchComponent } from './adsearch.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path     : '**',
      component: AdsearchComponent,
  }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdsearchComponent]
})
export class AdsearchModule { }
