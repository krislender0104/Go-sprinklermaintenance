import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacypolicyComponent } from './privacypolicy.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
      path     : '**',
      component: PrivacypolicyComponent
  }
]

@NgModule({
  imports: [  
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [PrivacypolicyComponent]
})
export class PrivacypolicyModule { }
