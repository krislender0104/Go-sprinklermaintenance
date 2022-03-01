import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { DataService } from '../../shared/data.service';
import { TestEntry } from '../testentry/testentry';
import { ReviewUnsubmittedtestsService } from './review-unsubmittedtests.service';
@Component({
  selector: 'app-review-unsubmittedtests',
  templateUrl: './review-unsubmittedtests.component.html',
  styleUrls: ['./review-unsubmittedtests.component.scss']
})
export class ReviewUnsubmittedtestsComponent implements OnInit {

  constructor(private reviewService: ReviewUnsubmittedtestsService, public dialog: MatDialog, private router: Router, private data: DataService, private toast: ToastNotifications) { }
  testData: Array<TestEntry>;
  selectedtest = [];
  isWebTestTester: boolean = false;
  multiplePay: Array<any> = [];
  ngOnInit() {
    var currentuser = JSON.parse(localStorage.currentUser);
    if (currentuser[0].WebTestTester) {
      this.isWebTestTester = true;
    }
    this.get(currentuser[0].FullName);
  }
  get(code) {
    this.reviewService.get(code).subscribe(data => {
      this.testData = data;
      if(this.testData.length>0){
        for (let index = 0; index < this.testData.length; index++) {
          this.testData[index].idate=this.data.convertdate(this.testData[index].idate);
          this.testData[index].fdate=this.data.convertdate(this.testData[index].fdate);
        }
      }
    }, err => { }, () => { })
  }
  toggleSelection(test_data_pk, isChecked, data) {
    var index = this.selectedtest.indexOf(test_data_pk);
    if (isChecked) {
      if (index === -1) {
        this.selectedtest.push(test_data_pk);
        if (data.amount > 0) {
          this.multiplePay.push(data);
        }
      }
    } else {
      if (index !== -1) {
        this.selectedtest.splice(index, 1);
        this.multiplePay.splice(index, 1);
      }
    }
  }
  editEntry(data) {
    data.editParams = true;
    this.data.testEntry = data;
    // console.log(data);
    this.router.navigate(['/apps/webtests/testentry']);

  }

  deletetest() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Do you want to delete the test(s)?',
    };
    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.reviewService.DeleteTest(this.selectedtest.toString()).subscribe(data => {
          if (data != null && data != '0') {
            this.toast.next({ text: this.selectedtest.length + 'test(s) deleted!', type: 'success' });
            this.selectedtest=[];
            this.ngOnInit();
          } else {
            this.toast.next({ text: this.selectedtest.length + 'test(s) not deleted!', type: 'danger' })
          }
        });
      }
    });
    
  }
  setCurrentTest(testData) {
    this.reviewService.setCurrentTestData(testData);
    this.reviewService.setIsMultiplePay(false);
    this.router.navigate(['/apps/webtests/card']);
  }
  submitCurrentTest(testData) {
    this.reviewService.submitTest(testData).subscribe((res) => {
      if (res.status) {
        this.toast.next({ text: res.msg, type: 'success' });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        this.toast.next({ text: 'Error', type: 'danger' });
      }
    });
  }
  multiplePayment() {
    this.reviewService.setIsMultiplePay(true);
    this.reviewService.setCurrentTestData(null);
    this.reviewService.setMultipleTestData(this.multiplePay);
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
