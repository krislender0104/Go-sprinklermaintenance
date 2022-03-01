import { TestviewService } from './testview.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SiteService } from '../../site/site.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { ToastNotifications } from 'ngx-toast-notifications';
import { DataService } from "../../shared/data.service";
@Component({
  selector: 'app-testview',
  templateUrl: './testview.component.html',
  styleUrls: ['./testview.component.scss']
})
export class TestviewComponent implements OnInit, OnDestroy {
  testgrpview: FormGroup;
  model: any;
  parmhazardId: any;
  tests: any;
  sites: any;
  after: any;
  testSubscription: Subscription;
  fieldName: any;
  testsfields: any;
  test: any;
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    // alert(event.option.value);
    console.log(event.option.value);
    //alert(event.option.value);
    this.router.navigate(['/apps/site/' + event.option.value]);
    //window.location.assign('apps/site/'+event.option.value);


    //this.router.navigateByUrl('http://localhost:4200/apps/site/' + +event.option.value);

  }
  searchTerm: FormControl = new FormControl();
  sitesearchSubscription: Subscription;
  searchResult: any;
  private searchTerms = new Subject<string>();
  public ClientName = '';
  public flag: boolean = true;
  // Push a search term into the observable stream.  
  searchClient(term: string): void {
    //alert(term);
    //alert(term);
    this.flag = true;
    // this.searchTerms.next(term);  
    this.siteService.getsites(term).subscribe(data => {
      this.searchResult = data;
    });
  }


  siteId: string;
  isEditSiteInfo: boolean = true;
  constructor(private testviewservice: TestviewService, private toasts: ToastNotifications, public dialog: MatDialog, public sharedservice:DataService,
    private siteService: SiteService, private route: ActivatedRoute, private router: Router) {
    this.parmhazardId = route.snapshot.url[0].path;
    this.siteId = route.snapshot.url[1].path;
    // this.tests = this.siteservice.tests;
    // this.tests = this.tests.filter(element=> element.TestID==this.parmhazardId);
    // this.sites=siteservice.sites;
    // if(this.tests.length>0)
    // {
    //  this.sites = this.sites.filter(element=>element.SiteId==this.tests[0].SiteId);
    // }
    this.testviewservice.getTest(this.parmhazardId);
    this.testSubscription =
      this.testviewservice.onhzardtestChanged
        .subscribe(data => {
          this.tests = data;
          if(this.tests.length>0){
              this.tests[0].itestdate=this.sharedservice.convertdate(this.tests[0].itestdate);
              this.tests[0].ftestdate=this.sharedservice.convertdate(this.tests[0].ftestdate);
              this.tests[0].repairdate=this.sharedservice.convertdate(this.tests[0].repairdate);
              this.tests[0].testdue=this.sharedservice.convertdate(this.tests[0].testdue);
          }
        });
    this.testgrpview = new FormGroup({
      siteId: new FormControl(this.siteId),
      hazardId: new FormControl(this.tests.hazardId),
      testid: new FormControl(this.parmhazardId),
      //Initial Test results
      itestdate: new FormControl(''),
      itesterid: new FormControl(''),
      itestername: new FormControl(''),
      icompany: new FormControl(''),
      itesttype: new FormControl(''),
      itestkit: new FormControl(''),
      ilinepsi: new FormControl(''),
      itestflag: new FormControl(''),
      itestudt5: new FormControl(''),
      ivalue1: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      ivalue1_close: new FormControl(''),
      ivalue1_leak: new FormControl(''),
      ivalue2: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      ivalue2_close: new FormControl(''),
      ivalue2_leak: new FormControl(''),
      ivaluerelief: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      ivaluerelief_close: new FormControl(''),
      ivaluerelief_leak: new FormControl(''),
      ibuffer: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      inotes: new FormControl(''),
      //final test results
      ftestdate: new FormControl(''),
      ftesterid: new FormControl(''),
      ftestername: new FormControl(''),
      fcompany: new FormControl(''),
      ftesttype: new FormControl(''),
      ftestkit: new FormControl(''),
      flinepsi: new FormControl(''),
      ftestflag: new FormControl(''),
      ftestudt5: new FormControl(''),
      fvalue1: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      fvalue1_close: new FormControl(''),
      fvalue1_leak: new FormControl(''),
      fvalue2: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      fvalue2_close: new FormControl(''),
      fvalue2_leak: new FormControl(''),
      fvaluerelief: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      fvaluerelief_close: new FormControl(''),
      fvaluerelief_leak: new FormControl(''),
      fbuffer: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{0,4}([.][0-9]{1,1})?$')])),
      fnotes: new FormControl(''),
      frepairby: new FormControl(''),
      frepairtype: new FormControl(''),
      UDT4: new FormControl(''),
      //Test Report
      testdue: new FormControl(''),
      ipass: new FormControl(''),
      fpass: new FormControl(''),
      repairdate: new FormControl(),
      repair: new FormControl(),
      tranid: new FormControl(),
      udt9: new FormControl(),
      failtype: new FormControl()
    });
    this.testviewservice.getTestsfields('DevTests');
    this.testviewservice.ontestsfieldsChanged.subscribe(data => {
      this.testsfields = data;
    });
  }
  GetfieldName(fieldname) {
    var testfield = this.testsfields.filter(field => field.FieldName == fieldname);
    if (testfield) {
      this.fieldName = testfield[0].Caption;
      return this.fieldName;
    }
  }
  ngOnInit() {
    let admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (!admin.EditSiteInfo) {
        this.testgrpview.disable();
        this.isEditSiteInfo = false;
      }
    }
  }
  ngOnDestroy() {
    this.testSubscription.unsubscribe();
  }

  UpdateTestdata() {
    let jsonString = JSON.parse(JSON.stringify(this.testgrpview.value));
    jsonString.itestdate=this.formatDate(this.testgrpview.controls['itestdate'].value);
    jsonString.ftestdate=this.formatDate(this.testgrpview.controls['ftestdate'].value);
    jsonString.repairdate=this.formatDate(this.testgrpview.controls['repairdate'].value);
    jsonString.testdue=this.formatDate(this.testgrpview.controls['testdue'].value);
    console.log(jsonString);
    this.testviewservice.updateTest(jsonString, this.parmhazardId);
    //alert('Test Updated');
    this.toasts.next({ text: 'Test Updated', type: 'success' });
    if (this.route.snapshot.paramMap.has('dataSetId')) {
      const datasetid = +this.route.snapshot.paramMap.get('dataSetId');
      const companyNo = +this.route.snapshot.paramMap.get('comNo');
      this.router.navigate(['apps/site/summary', { HazID: this.parmhazardId, dataSetId: datasetid, comNo: companyNo }]);
    }
    else {
      this.router.navigate(['apps/site/' + this.siteId])
    }
  }
  DeleteTest() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Do you want to delete the test?',
    };
    const dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log(this.parmhazardId);
        this.testviewservice.deleteTest(this.parmhazardId);
        this.toasts.next({ text: 'Test Deleted', type: 'success' });
        this.router.navigate(['apps/site/' + this.siteId]);
      }
    });
  }
  UpdateTest() {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditSiteInfo == true) {
        this.UpdateTestdata();
      }
      else {
        // alert('edit access denied');
        this.toasts.next({ text: 'edit access denied', type: 'secondary' });
      }
      //}
    }
    else {
      //alert('edit access denied');
      this.toasts.next({ text: 'edit access denied', type: 'secondary' });
    }
  }

  formatDate(date) {
    if (date == null || date == '')
      return null;

    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

}
