import { QuillModule } from 'ngx-quill';
import { EditletterComponent } from './editletter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

const routes: Routes = [
  {
      path     : '**',
      component: EditletterComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule, NgxEditorModule, FormsModule,QuillModule,
    MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule
  ],
  declarations: [EditletterComponent]
})
export class EditletterModule { }
