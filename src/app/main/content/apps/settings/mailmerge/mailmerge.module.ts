import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MailmergeComponent } from './mailmerge.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { MailmergetableComponent } from './mailmergetable/mailmergetable.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [
  {
      path     : '**',
      component: MailmergeComponent,
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
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: [MailmergeComponent, MailmergetableComponent]
})
export class MailmergeModule { }
