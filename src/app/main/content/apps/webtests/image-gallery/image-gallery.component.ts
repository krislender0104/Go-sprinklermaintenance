import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { TestEntryService } from '../testentry/testentry.service';
import { ActivatedRoute } from '@angular/router';
import urlconstants from 'urlconstants.js';


@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  id;
  constructor(private testentryservice: TestEntryService, private route: ActivatedRoute) {
    this.id = route.snapshot.url[1].path;
    this.getImages();
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true,
        previewCloseOnEsc: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
  }
  getImages() {
    this.galleryImages = [];
    this.testentryservice.getImages(this.id).subscribe(data => {
      if (data.length > 0) {
        data.forEach(element => {
          const a = {} as any;
          a.small = urlconstants.apiurl + element.Imagename;
          a.medium = urlconstants.apiurl + element.Imagename;
          a.big = urlconstants.apiurl + element.Imagename;
          this.galleryImages.push(a);
          console.log(this.galleryImages);
        });
      }
    })
  }
}
