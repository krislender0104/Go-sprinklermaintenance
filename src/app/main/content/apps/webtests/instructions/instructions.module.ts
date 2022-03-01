import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { InstructionsComponent } from './instructions.component';

const routes: Routes = [
  {
    path: '**',
    component: InstructionsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [InstructionsComponent]
})
export class InstructionsModule { }
