import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TestEntry } from '../testentry/testentry';
import { submittedtestsService } from './submittedtests.service';
import { DataService } from '../../shared/data.service';
import { ToastNotifications } from 'ngx-toast-notifications';
import { text } from '../../../../../../../node_modules/@angular/core/src/render3/instructions';
@Component({
  selector: 'app-submittedtests',
  templateUrl: './submittedtests.component.html',
  styleUrls: ['./submittedtests.component.scss']
})
export class SubmittedtestsComponent implements OnInit {

  constructor(private reviewService: submittedtestsService, private router: Router, private sharedService: DataService, private toast: ToastNotifications) { }
  testData: Array<TestEntry>;
  selectedtest = [];
  isProcessing: boolean = false;
  p = 1;
  ngOnInit() {
    this.isProcessing = true;
    this.testData = [];
    var currentuser = JSON.parse(localStorage.currentUser);
    if (currentuser[0].WebTestTester) {
      this.get(currentuser[0].FullName);
    } else {
      this.getsubmittest();
      
    }
    
  }

  getsubmittest() {
    
    this.reviewService.getsubmittest().subscribe(data => {
      this.isProcessing = true;
      this.testData = data;
      if((this.testData !== undefined) && (this.testData.length>0)){
        for (let index = 0; index < this.testData.length; index++) {
          this.testData[index].Accepted=this.sharedService.convertdate(this.testData[index].Accepted);
        }
      }
      this.isProcessing = false;
    }, err => { }, () => { })
    
  }
  
  get(code) {
    //this.isProcessing = true;
    this.reviewService.get(code).subscribe(data => {
      this.testData = data;
      if((this.testData !== undefined) && (this.testData.length>0)){
        for (let index = 0; index < this.testData.length; index++) {
          this.testData[index].Accepted=this.sharedService.convertdate(this.testData[index].Accepted);
        }
      }
      this.isProcessing = false;
    }, err => { }, () => { })
    //this.isProcessing = false;
  }
  toggleSelection(test_data_pk, isChecked) {
    var index = this.selectedtest.indexOf(test_data_pk);
    if (isChecked) {
      if (index === -1) {
        this.selectedtest.push(test_data_pk);
      }
    } else {
      if (index !== -1) {
        this.selectedtest.splice(index, 1);
      }
    }
  }
  /* editEntry(data) {
    data.editParams = true;
    this.data.testEntry = data;
    this.router.navigate(['/apps/webtests/testentry']);

  } */

  /* deletetest() {
    this.reviewService.DeleteTest(this.selectedtest.toString()).subscribe(data => {
      if (data != null && data != '0') {
        this.toast.next({ text: this.selectedtest.length + 'test(s) deleted!', type: 'success' });
        this.ngOnInit();
      } else {
        this.toast.next({ text: this.selectedtest.length + 'test(s) not deleted!', type: 'danger' })
      }
    });
  } */
  setCurrentTest(testData) {
    this.reviewService.setCurrentTestData(testData);
    this.router.navigate(['/apps/webtests/card']);
  }
  navigateToImageGallery(test) {
    this.router.navigate(['apps/webtests/images/' + test.haz_id + '/' + test.test_data_pk]);
  }
  getLink(data) {
    const coords = JSON.parse(data.coordinates);
    return 'https://www.google.com/maps/search/?api=1&query=' + coords.lat + ',' + coords.long
  }
}
