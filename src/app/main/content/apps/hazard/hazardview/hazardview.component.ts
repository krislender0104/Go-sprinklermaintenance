import { Component, OnInit, OnDestroy  } from '@angular/core';
import { HazardviewModule } from './hazardview.module';
import { HazardviewService } from './hazardview.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ActivatedRoute, UrlSegment, UrlSegmentGroup, PRIMARY_OUTLET, Router } from '@angular/router';
import { SiteService } from '../../site/site.service';
import { Subscription } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { ToastNotifications } from 'ngx-toast-notifications';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogboxComponent } from './dialogbox/dialogbox.component';


@Component({
  selector: 'app-hazardview',
  templateUrl: './hazardview.component.html',
  styleUrls: ['./hazardview.component.scss']
})

export class HazardviewComponent implements OnInit, OnDestroy  {



  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.router.navigate(['/apps/site/' + event.option.value]);
    //window.location.assign('apps/site/'+event.option.value);


    //this.router.navigateByUrl('http://localhost:4200/apps/site/' + +event.option.value);

  }
  test;
  p = 1;
  searchTerm: FormControl = new FormControl();
  sitesearchSubscription: Subscription;
  searchResult: any;
  private searchTerms = new Subject<string>();
  public ClientName = '';
  public flag: boolean = true;
  // Push a search term into the observable stream.  
  searchClient(term: string): void {
    this.flag = true;
    // this.searchTerms.next(term);  
    this.siteService.getsites(term).subscribe(data => {
      this.searchResult = data;
    });
  }



  updatehazard: Promise<{}>;
  myGroup: FormGroup;
  model: any;
  parmhazardId: any;
  hazards: any;
  sites: any;
  siteId: any;
  siteSubscription: Subscription;
  testsSubscription: Subscription;
  hazardTests: any;
  isEditSiteInfo: boolean = true;
  constructor(private hazardviewservice: HazardviewService,
    private route: ActivatedRoute, private siteService: SiteService,
    private router: Router, public dialog: MatDialog,
    private toasts: ToastNotifications) {
      
    this.parmhazardId = route.snapshot.url[0].path;
    this.siteId = route.snapshot.url[1].path;
    // this.hazards = this.siteservice.hazards;
    // console.log(this.hazards);
    // this.hazards = this.hazards.filter(element=> element.HazardID==this.parmhazardId);
    // this.sites=siteservice.sites;
    // if(this.hazards.length>0)
    // {
    //  this.sites = this.sites.filter(element=>element.SiteId==this.hazards[0].SiteId);
    // }
    this.hazardviewservice.getHazard(this.parmhazardId);
    
    this.siteSubscription =
      this.hazardviewservice.onSitehazardChanged
        .subscribe(data => {
          this.hazards = data;
          if(this.hazards.length>0){
            this.hazards[0].TestDue=this.convertdate(this.hazards[0].TestDue);
            this.hazards[0].installdueate=this.convertdate(this.hazards[0].installdueate);
            this.hazards[0].installed=this.convertdate(this.hazards[0].installed);
            this.hazards[0].removereplacedate=this.convertdate(this.hazards[0].removereplacedate);
            this.hazards[0].notice1=this.convertdate(this.hazards[0].notice1);
            this.hazards[0].notice2=this.convertdate(this.hazards[0].notice2);
            this.hazards[0].notice3=this.convertdate(this.hazards[0].notice3);
            this.hazards[0].notice4=this.convertdate(this.hazards[0].notice4);
            this.hazards[0].iNoticeSent1=this.convertdate(this.hazards[0].iNoticeSent1);
            this.hazards[0].iNoticeSent2=this.convertdate(this.hazards[0].iNoticeSent2);
            this.hazards[0].iNoticeSent3=this.convertdate(this.hazards[0].iNoticeSent3);
            this.hazards[0].iNoticeSent4=this.convertdate(this.hazards[0].iNoticeSent4);
            this.hazards[0].lastdate=this.convertdate(this.hazards[0].lastdate);
            this.hazards[0].lastletter=this.convertdate(this.hazards[0].lastletter);
            this.hazards[0].shutoffdate=this.convertdate(this.hazards[0].shutoffdate);
            
          }
        }); 
    this.siteService.getSiteHazardsTests(this.siteId, this.parmhazardId);
    this.testsSubscription =
      this.siteService.onSitehazardsTestsChanged
        .subscribe(data => {
          this.hazardTests = data;
          if(this.hazardTests.length>0){
            for (let index = 0; index < this.hazardTests.length; index++) {
              this.hazardTests[index].FinalDate=this.convertdate(this.hazardTests[index].FinalDate);
              this.hazardTests[index].InitialDate=this.convertdate(this.hazardTests[index].InitialDate);
            }
          }
          console.log(this.hazardTests);
        });
    this.myGroup = new FormGroup({
      siteId: new FormControl(),
      hazardid: new FormControl(this.parmhazardId),
      category: new FormControl(),
      priority: new FormControl(),
      servclass: new FormControl(),
      protection: new FormControl(),
      //testmonhts: new FormControl(),
      seasonal: new FormControl(),
      heattype: new FormControl(),
      meter: new FormControl(),
      linesize: new FormControl(),
      linestatus: new FormControl(),
      tap: new FormControl(),
      link1: new FormControl(),
      //device: new FormControl(),
      location: new FormControl(),
      meterlocation: new FormControl(),
      recommendations: new FormControl(),
      devicestatus: new FormControl(),
      serial: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      size: new FormControl(),
      installdueate: new FormControl(null),
      installed: new FormControl(null),
      removereplacedate: new FormControl(null),
      notice1: new FormControl(),
      notice2: new FormControl(),
      notice3: new FormControl(),
      notice4: new FormControl(),
      iNoticeSent1: new FormControl(),
      iNoticeSent2: new FormControl(),
      iNoticeSent3: new FormControl(),
      iNoticeSent4: new FormControl(),
      lastdate: new FormControl(null),
      lastletter: new FormControl(null),
      udh10: new FormControl(),
      shutoffdate: new FormControl(null),
      fireline: new FormControl(),
      bypass: new FormControl(),
      surveyId: new FormControl(),
      udh13: new FormControl(),
      udh18: new FormControl(),
      webfee: new FormControl('', Validators.pattern("^[0-9]{0,9}([.][0-9]{1,2})?$")),
      assemblyid: new FormControl(),
      TestDue: new FormControl()
    });
    
    this.hazardviewservice.getHazardfields('Hazards');
    this.hazardviewservice.onhazardfieldsChanged.subscribe(data => {
      this.hazardfields = data;
    });

  }
  convertdate(date) {
    if (date == null || date == '')
      return null;

    var dt = new Date(date);
    dt.setMinutes(dt.getMinutes() + dt.getTimezoneOffset());
    return dt;
  }
  ngOnDestroy() {
    this.siteSubscription.unsubscribe();
    this.testsSubscription.unsubscribe();
  }

  ngOnInit() {
    let admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (!admin.EditSiteInfo) {
        this.myGroup.disable();
        this.isEditSiteInfo = false;
      }
    }
    
  }
  UpdateHazard() {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditSiteInfo) {
        this.onUpdateHazard();
      }
      else {
        //alert('edit access denied');
        this.toasts.next({ text: 'edit access denied', type: 'secondary' });
      }
      //}
    }
    else {
      //alert('edit access denied');
      this.toasts.next({ text: 'edit access denied', type: 'secondary' });
    }
  }
  fieldName: any;
  hazardfields: any;
  GetfieldName(fieldname) {
    var hazardfield = this.hazardfields.filter(field => field.FieldName == fieldname);
    if (hazardfield) {
      this.fieldName = hazardfield[0].Caption;
      return this.fieldName;
    }

  }
  onUpdateHazard() {

    //Fix sendNotice
    let jsonString = JSON.parse(JSON.stringify(this.myGroup.value));
    jsonString.TestDue=this.formatDate(this.myGroup.controls['TestDue'].value);
    jsonString.installdueate=this.formatDate(this.myGroup.controls['installdueate'].value);
    jsonString.installed=this.formatDate(this.myGroup.controls['installed'].value);
    jsonString.removereplacedate=this.formatDate(this.myGroup.controls['removereplacedate'].value);
    jsonString.iNoticeSent1=this.formatDate(this.myGroup.controls['iNoticeSent1'].value);
    jsonString.iNoticeSent2=this.formatDate(this.myGroup.controls['iNoticeSent2'].value);
    jsonString.iNoticeSent3=this.formatDate(this.myGroup.controls['iNoticeSent3'].value);
    jsonString.iNoticeSent4=this.formatDate(this.myGroup.controls['iNoticeSent4'].value);
    jsonString.notice1=this.formatDate(this.myGroup.controls['notice1'].value);
    jsonString.notice2=this.formatDate(this.myGroup.controls['notice2'].value);
    jsonString.notice3=this.formatDate(this.myGroup.controls['notice3'].value);
    jsonString.notice4=this.formatDate(this.myGroup.controls['notice4'].value);
    jsonString.lastdate=this.formatDate(this.myGroup.controls['lastdate'].value);
    jsonString.lastletter=this.formatDate(this.myGroup.controls['lastletter'].value);
    jsonString.shutoffdate=this.formatDate(this.myGroup.controls['shutoffdate'].value);
    // console.log(jsonString);
    this.hazardviewservice.updateHazard(jsonString, this.parmhazardId).subscribe(data => {
      if (data != null) {
        this.toasts.next({ text: 'Hazard Updated', type: 'success' });
        this.router.navigate(['apps/site/' + this.siteId])
      } else {
        this.toasts.next({ text: 'Hazard Not Updated', type: 'danger' });
      }
    });
    //this.updatehazard = this.hazardviewservice.updateHazard(jsonString, this.parmhazardId);
    //alert('Hazard Updated');
    // this.toasts.next({ text: 'Hazard Updated', type: 'success' });
    // if (this.route.snapshot.paramMap.has('dataSetId')) {
    //   const datasetid = +this.route.snapshot.paramMap.get('dataSetId');
    //   const companyNo = +this.route.snapshot.paramMap.get('comNo');
    //   this.router.navigate(['apps/site/summary', { HazID: this.parmhazardId, dataSetId: datasetid, comNo: companyNo }]);
    // }
    // else {
    //   this.router.navigate(['apps/site/' + this.siteId])
    // }
  }
  DeleteHazard() {
    let jsonString = JSON.parse(JSON.stringify(this.myGroup.value));
    if (this.isEditSiteInfo) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        id: 1,
        title: 'Do you want to delete the hazard?',
      };
      const dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          this.hazardviewservice.deleteHazard(this.parmhazardId).subscribe(data => {
            if (data != null) {
              this.toasts.next({ text: 'Hazard Deleted', type: 'success' });
              this.router.navigate(['apps/site/' + this.siteId])
            } else {
              this.toasts.next({ text: 'Hazard Not Deleted', type: 'danger' });
            }
          });
        }
      });
    } else {
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
