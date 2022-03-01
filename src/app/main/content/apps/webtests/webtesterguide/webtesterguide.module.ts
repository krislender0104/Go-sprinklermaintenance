import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { WebtesterguideComponent } from './webtesterguide.component';

const routes: Routes = [
  {
    path: '**',
    component: WebtesterguideComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [WebtesterguideComponent]
})
export class WebtesterguideModule { }
