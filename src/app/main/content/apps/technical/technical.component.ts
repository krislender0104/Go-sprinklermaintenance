import { Company } from './company-createnew/company';
import { DataService } from './../shared/data.service';
import { filter } from 'rxjs/operators';
import { TechnicalService } from './technical.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TechnicalModule } from './technical.module';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { FusefialtypeFormDialogComponent } from './failtypes/failtypes-create/failtype-create.component';
import { FuserepairtypeFormDialogComponent } from './repairtypes/repairtypes-create/repairtype-create.component';
import { Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';
import { Technician } from './technician-createnew/technician';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-technnical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss'],
})

export class TechnicalComponent implements OnInit, OnDestroy {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  devices: any;
  companies: any;
  testkits: any;
  technicians: any;
  failtypes: any;
  repairtypes: any;
  searchDataDev: any = "";
  searchData: any = "";
  searchCompData: any = "";

  searchCompDate: any = "";
  searchCompFromDate: any = "";
  searchCompToDate: any = "";

  searchTecnData: any = "";
  searchFilter: any = "";
  searchTecnDate: any = "";
  searchTecnFromDate: any = "";
  searchTecnToDate: any = "";
  searchFiltercomp: any = "";
  searchTempData: any = "";
  searchTechData: any = "";
  searchFromDate: any = "";
  searchToDate: any = "";
  deviceSubscription: Subscription;
  testerSubscription: Subscription;
  testkitSubscription: Subscription;
  companySubscription: Subscription;
  fromDateValidation = false;
  toDateValidation = false;

  fromDateValidation1 = false;
  toDateValidation1 = false;
  p_technician = 1;
  p_company = 1;
  p_tkit = 1;
  ngOnInit() {
    // this.devices = JSON.parse(Device_DATA) as string [];	   
    // this.companies = JSON.parse(COMPANY_DATA) as string [];	 
    // this.testkits = JSON.parse(TestKit_DATA) as string [];	 
    // this.technicians = JSON.parse(Technician_DATA) as string [];	 
  }
  dialogRef: any;
  openDialog() {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.CreateTechnicalInfo) {
        this.dialogRef = this.dialog.open(FusefialtypeFormDialogComponent, {
          panelClass: 'contact-form-dialog',
          data: {
            action: 'create'
          }
        });
      }
      else {
        //alert('access denied');
        this.toasts.next({ text: 'access denied', type: 'secondary' });
      }
    }


  }
  openCreateRepairDialog() {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.CreateTechnicalInfo) {
        this.dialogRef = this.dialog.open(FuserepairtypeFormDialogComponent, {
          panelClass: 'contact-form-dialog',
          data: {
            action: 'create'
          }
        });
      }
      else {
        //alert('access denied');
        this.toasts.next({ text: 'access denied', type: 'secondary' });
      }
    }

  }
  constructor(private techservice: TechnicalService,
    public dialog: MatDialog, private toasts: ToastNotifications,
    private route: Router, private dataService: DataService) {

    this.techservice.getTechnicalRepairTypes();
    this.techservice.ontechnicalrepairtypesChanged
      .subscribe(data => {
        this.repairtypes = data;
      });

    this.techservice.getTechnicalDevices();
    this.deviceSubscription=
    this.techservice.ontechnicaldevicesChanged
      .subscribe(data => {
        this.devices = data;
        if(this.devices.length>0){
          for (let index = 0; index < this.devices.length; index++) {
            this.devices[index].DevDate=this.dataService.convertdate(this.devices[index].DevDate);
          }
        }
      });

    this.techservice.getTechnicalCompanies();
    this.techservice.ontechnicalcompaniesChanged
      .subscribe(data => {
        if (data !== undefined) {
          this.companies = data;
        }
      });
    this.techservice.getTechnicalTestKits();
    this.testkitSubscription=
    this.techservice.ontechnicaltestkitsChanged
      .subscribe(data => {
        this.testkits = data;
        if(this.testkits.length>0){
          for (let index = 0; index < this.testkits.length; index++) {
            this.testkits[index].RenewDate=this.dataService.convertdate(this.testkits[index].RenewDate);
          }
        }
      });
    this.techservice.getTechnicalTechnicains();
    this.techservice.ontechnicaltechniciansChanged
      .subscribe(data => {
        if (data !== undefined) {
          this.technicians = data;
        }
      });
    this.techservice.getTechnicalFailTypes();
    this.techservice.ontechnicalfailtypesChanged
      .subscribe(data => {
        this.failtypes = data;
      });

    this.techservice.ontechnicaltestkitFilter
      .subscribe(data => {
        this.testkits = [];
        this.testkits = data;
      });
    this.techservice.ontechnicaltechniciansFilter
      .subscribe(data => {
        this.technicians = [];
        this.technicians = data;
      });
  }

  ngOnDestroy(){
    this.deviceSubscription.unsubscribe();
    this.testkitSubscription.unsubscribe();
  }

  NavigateCreateTechnical(pagetype) {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.CreateTechnicalInfo) {
        if (pagetype == 'devtypes') {
          this.route.navigate(['/apps/technicals/create'])
        }
        if (pagetype == 'company') {
          this.dataService.data = new Company();
          this.route.navigate(['/apps/technicialcompany/create'])
        }
        if (pagetype == 'testkit') {
          this.route.navigate(['/apps/testkit/create'])
        }
        if (pagetype == 'technicain') {
          this.dataService.data = new Technician();
          this.route.navigate(['/apps/technician/create'])
        }
        if (pagetype == 'failtype') {
          this.route.navigate(['/apps/failtype/create'])
        }
        if (pagetype == 'repiartype') {
          this.route.navigate(['/apps/repiartype/create'])
        }
      }
      else {
        // alert('access denied');
        this.toasts.next({ text: 'access denied', type: 'secondary' });
      }
    }
    else {
      // alert('access denied');
      this.toasts.next({ text: 'access denied', type: 'secondary' });
    }
  }

  EditFailTypes(rownum) {

    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditTechnicalInfo) {
        var editfailtype = this.failtypes.filter(item => item.RowNum == rownum);
        this.dialogRef = this.dialog.open(FusefialtypeFormDialogComponent, {
          panelClass: 'contact-form-dialog',
          data: {
            FailType: editfailtype[0],
            action: 'edit'
          }
        });
      }
      else {
        // alert('access denied');
        this.toasts.next({ text: 'access denied', type: 'secondary' });
      }
    }
  }
  EditRepairTypes(rownum) {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditTechnicalInfo) {
        var editrepairtype = this.repairtypes.filter(item => item.RowNum == rownum);
        this.dialogRef = this.dialog.open(FuserepairtypeFormDialogComponent, {
          panelClass: 'contact-form-dialog',
          data: {
            repairType: editrepairtype[0],
            action: 'edit'
          }
        });
      }
      else {
        // alert('access denied');
        this.toasts.next({ text: 'access denied', type: 'secondary' });
      }
    }


  }

  /**
   * To load the tab based on the tab selection event
   * @param:event
   */
  tabSelectionChanged(event) {
    if (event.tab.textLabel === "Device Type") {
      this.Clear();
    } else if (event.tab.textLabel === "Technician Company") {
      this.Clearcomp();
    } else if (event.tab.textLabel === "Test Kit") {
      this.Cleartestkit();
    } else if (event.tab.textLabel === "Technician") {
      this.Cleartech();
    }
    /*   if(event.tab.textLabel === "Technician Company"){
        this.searchCompToDate = new Date().toISOString();
        this.searchCompFromDate = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date).toISOString();
      } else  if(event.tab.textLabel === "Technician"){
        this.searchTecnToDate = new Date().toISOString();
        this.searchTecnFromDate = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date).toISOString();
      } */
  }

  SearchFilter(data) {
    //MFG: data, 
    this.searchData = data;
  }
  SearchFilterDev(data) {
    //MFG: data, 
    this.searchDataDev = data;
  }
  Cleartech() {
    this.searchData = "";
    this.searchTechData = "";
    this.searchTecnFromDate = "";
    this.searchTecnToDate = "";
    this.fromDateValidation = false;
    this.toDateValidation = false;
    this.techservice.getTechnicalTechnicains();
  }
  Cleartestkit() {
    this.searchTempData = "";
    this.searchCompFromDate = "";
    this.searchCompToDate = "";
    this.fromDateValidation1 = false;
    this.toDateValidation1 = false;
    this.techservice.getTechnicalTestKits();
  }
  Clearcomp() {
    this.searchFiltercomp = "";
    this.searchData = "";
  }
  Clear() {
    this.searchFilter = "";
    this.searchDataDev = "";
  }
  SearchTestKit(data, date1, date2) {
    if (date1 === null && date2 !== null || date1 === '' && date2 !== '') {
      this.fromDateValidation1 = true;
    } else if (date1 !== null && date2 === null || date1 !== '' && date2 === '') {
      this.toDateValidation1 = true;
    } else {
      this.fromDateValidation1 = false;
      this.toDateValidation1 = false;
      const searchData = (data === "") ? '  ' : data;
      const param = searchData + "/" + this.ConversionDate(date1) + "/" + this.ConversionDate(date2)
      this.techservice.getTechnicalFilteredTestKit(param);
    }
  }
  SearchTecn(data, date1, date2) {
 
    if (date1 === null && date2 !== null || date1 === '' && date2 !== '') {
      this.fromDateValidation = true;
    } else if (date1 !== null && date2 === null || date1 !== '' && date2 === '') {
      this.toDateValidation = true;
    } else {

      this.fromDateValidation = false;
      this.toDateValidation = false;
      const searchData = (data === "") ? '  ' : data;
      const param = searchData + "/" + this.ConversionDate(date1) + "/" + this.ConversionDate(date2)
      this.techservice.getTechnicalFilteredTechnicians(param);
      // console.log(this.technicians);
    }
  }

  /**
   * conversion of date from calender to API(MM-DD-YYYY) format
   * @param date 
   */
  
  ConversionDate(calenderdate) {
    if (calenderdate !== null && calenderdate !== '') {
      const date = new Date(calenderdate);
      return (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
    }
    else
      return '01-01-1990';

  }
  NavigateCompany(company) {
    this.dataService.data = company;
    this.route.navigate(['/apps/technicialcompany/create']);
  }
  NavigateTechnician(tech) {
    this.dataService.data = tech;
    this.route.navigate(['/apps/technician/create']);
  }
  NavigateViewTechnical(pagetype, Id) {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.ViewTechnicalInfo) {
        if (pagetype == 'devtypes') {
          //apps/technicals/details/20438
          this.route.navigate(['/apps/technicals/details/', Id])
        }
        if (pagetype == 'company') {
          ///apps/technicialcompany/details/1
          this.route.navigate(['/apps/technicialcompany/details/', Id])
        }
        if (pagetype == 'testkit') {
          //apps/testkit/details/305770
          this.route.navigate(['/apps/testkit/details/', Id])
        }
        if (pagetype == 'technician') {
          //apps/technician/details/836832
          this.route.navigate(['/apps/technician/details/', Id])
        }
        if (pagetype == 'failtype') {
          this.route.navigate(['/apps/failtype/create'])
        }
        if (pagetype == 'repiartype') {
          this.route.navigate(['/apps/repiartype/create'])
        }
        if (pagetype == 'changepassword') {
          if(admin.EditTechnicalInfo){
            this.route.navigate(['/apps/technician/changepassword/',Id])
          }else{
            this.toasts.next({ text: 'access denied', type: 'secondary' });
          }
        }
      }
      else {
        //alert('access denied');
        this.toasts.next({ text: 'access denied', type: 'secondary' });
      }
    }
    else {
      //alert('access denied');
      this.toasts.next({ text: 'access denied', type: 'secondary' });
    }
  }
}