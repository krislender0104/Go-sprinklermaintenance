import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { NgxGalleryModule } from 'ngx-gallery';

const routes: Routes = [
  {
      path     : '**',
      component: ImageGalleryComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    NgxGalleryModule
  
  ],
  declarations: [ImageGalleryComponent]
})
export class ImageGalleryModule { }
