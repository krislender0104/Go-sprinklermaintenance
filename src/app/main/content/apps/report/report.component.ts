import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SitelistService } from '../site/sitelist/sitelist.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { ReportsService } from './report.services';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

// import { Http, Request, RequestOptions, 
//   RequestOptionsArgs, Response, XHRBackend } from "@angular/http";

// import "rxjs/add/operator/catch";
// import "rxjs/add/observable/throw";
// import "rxjs/add/operator/map";

// import { Observable } from "rxjs/Rx";


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  exports: any[];
  options:any;
  form_report: FormGroup;
  datasets:any;
  exportsSubscription:Subscription;
  exportsreport:any[];
  exportreportSubscription:Subscription;
  p_export = 1;
  constructor(private sitelistService: SitelistService,
    private builder: FormBuilder,
   private router:Router, public dialog: MatDialog,
   private spinner: NgxSpinnerService,
  private exportservice:ReportsService,
  // public http: Http
) {
     this.sitelistService.getDataSets();
    this.datasets = this.sitelistService.datasets;
    this.exports=this.exportservice.exports;
    this.exportservice.getReportExports();
    this.exportsSubscription =
    this.exportservice.onexportsChanged
    .subscribe(data => {
         this.exports = data;
    });

    this.form_report = builder.group({
      datasetId:new FormControl(),
      siteId: new FormControl(),
      InstalledDueDate:new FormControl()
    })
   }

  ngOnInit() {
  }
  ExportReports(exportId)
  {
    this.spinner.show();
    this.exportservice.ExportReport(exportId,this.spinner);
  }
  DeleteReport(exportId)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Do you want to delete the report?',
    };
    const dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
    this.exportservice.DeleteReport(exportId);
      }
    });
  }
  CreateExport()
  {
    this.router.navigate(['/apps/export/create/']);
  }
  EditExport()
  {
    this.router.navigate(['/apps/export/edit']);
  }
  mydata:any;
  ExportData()
  {
  }
  Sendnotice()
  {
    this.router.navigate(['/apps/sendnotice/']);
  }
 
 
}