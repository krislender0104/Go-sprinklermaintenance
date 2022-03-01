import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-terms-and-privacy',
  templateUrl: './terms-and-privacy.component.html',
  styleUrls: ['./terms-and-privacy.component.scss']
})
export class TermsAndPrivacyComponent implements OnInit {

  constructor(
    private fuseConfig: FuseConfigService
){
  this.fuseConfig.setConfig({
    layout: {
        navigation: 'none',
        toolbar   : 'none',
        footer    : 'none'
    }
});
}


  ngOnInit() {
  }
}
