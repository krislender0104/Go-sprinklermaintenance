import { Component, OnInit } from '@angular/core';
import { Webtestreview2Service } from './webtestreview2.service';
import { DataService } from '../../../shared/data.service';

@Component({
  selector: 'app-webtestreview2',
  templateUrl: './webtestreview2.component.html',
  styleUrls: ['./webtestreview2.component.scss']
})
export class Webtestreview2Component implements OnInit {

  webtestreviewData = [];
  constructor(private webtest2Service: Webtestreview2Service, private sharedService:DataService) {
    this.webtest2Service.getWebTestReviewList().subscribe((data) => {
      this.webtestreviewData = data;
      if(this.webtestreviewData.length>0){
        for (let index = 0; index < this.webtestreviewData.length; index++) {
          this.webtestreviewData[index].dateStamp=this.sharedService.convertdate(this.webtestreviewData[index].dateStamp);
          this.webtestreviewData[index].Accepted=this.sharedService.convertdate(this.webtestreviewData[index].Accepted);
          
        }
      }
    });
  }

  ngOnInit() {
  }

}
