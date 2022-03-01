import { map, filter, startWith } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SitelistService } from './sitelist.service';
import { element } from 'protractor';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl, FormControlDirective } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Permissions } from 'Permissions.service';
import { ToastNotifications } from 'ngx-toast-notifications';
import { QueryBuilderConfig } from 'angular2-query-builder';
import { COMMIT } from '@ngrx/store-devtools/src/actions';
import { all } from '../../../../../../../node_modules/@types/q';
import { DataService } from "../../shared/data.service";
//import {toastr} from 'toastr';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// import { ToastsManager } from 'ng6-toastr/ng2-toastr';
// import { ToastrService } from 'ngx-toastr';
//import {ToastNotifications} from "ngx-toast-notifications";

@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.scss']
})
export class SitelistComponent implements OnInit {
  is_accessAll = 0;
  siteSubscription: Subscription;
  hazardSubscription: Subscription;
  testSubscription: Subscription;
  sites: any;
  hazards: any;
  tests: any;
  datasets: any;
  defaultdataset: any = 0;
  gdefaultdataset: any = 0;
  mgdefaultdataset: any = 0;
  gdatasets: any;
  service: any;
  column: any;
  betweenFlag: Array<any> = [];
  public form: FormGroup;
  public showsite: boolean = false;
  public showhazard: boolean = false;
  public showtest: boolean = false;
  public showadd: boolean = true;
  public showdatasetmove: boolean = false;

  searchCriteria: String = '';
  siteTableHeaders: Array<String> = [];
  siteList: Array<any> = [];
  iDateInputField;
  fDateInputField;
  searchAddressResult = [];

  query: any;
  config: any;
  showQuery = false;
  advancedListTable = false;
  advancedList = [];

  //for the advanced filter
  columns = [];
  filterRow = [];
  filtercondition = 'and';
  showAdvanceFilter = false;
  Basicfilter = true;
  BasicTable = true;

  //for group filter
  showGroupFilter = false;
  groupFilterRow = [];
  public groupFilterForm: FormGroup;
  groupcolumn = []
  groupincolumn = []
  editsiteprivilage:boolean=true;

  //for movedataset
  public movedataform: FormGroup;
  public createdataform: FormGroup;
  public movegroupdataform: FormGroup;
  Ggroupcolumn = [];
  Ggroupincolumn = [];
  datasetprivilage: boolean = true;

  constructor(private sitelistService: SitelistService,
    private builder: FormBuilder,
    private route: Router,
    private permissions: Permissions,
    private toasts: ToastNotifications,
    private sharedservice:DataService
  ) {
    let admin = JSON.parse(localStorage.adminprivilages);

    // console.log("is access all -------------------", admin.AccessAll);
    if (admin) {
      if (!admin.Dataset) {
        this.datasetprivilage = false;
      }
      if(!admin.EditSiteInfo){
        this.editsiteprivilage = false;
      }
    }
    this.sites = this.sitelistService.sites;
    //this.datasets = this.sitelistService.datasets;
    this.sitelistService.getUserDatasetlist(admin.UserID, admin.AccessAll).subscribe(data => {
      if (data) {
        this.datasets = data;
        this.defaultdataset = this.datasets[0].clientId;
        this.gdatasets = data;
        this.gdefaultdataset = this.gdatasets[0].clientId;
        this.mgdefaultdataset = this.gdatasets[0].clientId;
      }
    })



    this.form = builder.group({
      datasetId: new FormControl('', { validators: [Validators.required] }),
      customerNumber: new FormControl(''),
      // companyName: new FormControl(),
      // address: new FormControl(),
      // accountNumber: new FormControl(),
      hazardId: new FormControl('', { validators: [Validators.pattern('[0-9]+')] }),
      serialNumber: new FormControl(''),
      testdate: new FormControl(),
      site_Id: new FormControl('', { validators: [Validators.pattern('[0-9]+')] }),
      finalTestDate: new FormControl(),
      address: new FormControl('')
    });
    this.form.valueChanges.subscribe(val => {
      if (this.form.controls['site_Id'].value) {
        this.form.controls['customerNumber'].disable({ onlySelf: true });
        this.form.controls['serialNumber'].disable({ onlySelf: true });
        this.form.controls['hazardId'].disable({ onlySelf: true });
        this.form.controls['testdate'].disable({ onlySelf: true });
        this.form.controls['finalTestDate'].disable({ onlySelf: true });
        this.form.controls['address'].disable({ onlySelf: true });
        return;
      } else if (this.form.controls['customerNumber'].value) {
        this.form.controls['site_Id'].disable({ onlySelf: true });
        this.form.controls['serialNumber'].disable({ onlySelf: true });
        this.form.controls['hazardId'].disable({ onlySelf: true });
        this.form.controls['testdate'].disable({ onlySelf: true });
        this.form.controls['finalTestDate'].disable({ onlySelf: true });
        this.form.controls['address'].disable({ onlySelf: true });
        return;
      } else if (this.form.controls['serialNumber'].value) {
        this.form.controls['site_Id'].disable({ onlySelf: true });
        this.form.controls['customerNumber'].disable({ onlySelf: true });
        this.form.controls['hazardId'].disable({ onlySelf: true });
        this.form.controls['testdate'].disable({ onlySelf: true });
        this.form.controls['finalTestDate'].disable({ onlySelf: true });
        this.form.controls['address'].disable({ onlySelf: true });
        return;
      } else if (this.form.controls['hazardId'].value) {
        this.form.controls['site_Id'].disable({ onlySelf: true });
        this.form.controls['customerNumber'].disable({ onlySelf: true });
        this.form.controls['serialNumber'].disable({ onlySelf: true });
        this.form.controls['address'].disable({ onlySelf: true });
        this.form.controls['testdate'].enable({ onlySelf: true });
        this.form.controls['finalTestDate'].enable({ onlySelf: true });
        return;
      } else if (this.form.controls['address'].value) {
        this.form.controls['site_Id'].disable({ onlySelf: true });
        this.form.controls['customerNumber'].disable({ onlySelf: true });
        this.form.controls['hazardId'].disable({ onlySelf: true });
        this.form.controls['testdate'].disable({ onlySelf: true });
        this.form.controls['finalTestDate'].disable({ onlySelf: true });
        this.form.controls['serialNumber'].disable({ onlySelf: true });
        return;
      } else if (this.form.controls['testdate'].value) {
        this.form.controls['site_Id'].disable({ onlySelf: true });
        this.form.controls['customerNumber'].disable({ onlySelf: true });
        this.form.controls['address'].disable({ onlySelf: true });
        this.form.controls['finalTestDate'].disable({ onlySelf: true });
        this.form.controls['serialNumber'].disable({ onlySelf: true });
        return;
      } else if (this.form.controls['finalTestDate'].value) {
        this.form.controls['site_Id'].disable({ onlySelf: true });
        this.form.controls['customerNumber'].disable({ onlySelf: true });
        this.form.controls['address'].disable({ onlySelf: true });
        this.form.controls['testdate'].disable({ onlySelf: true });
        this.form.controls['serialNumber'].disable({ onlySelf: true });
        return;
      }
      this.form.controls['customerNumber'].enable({ onlySelf: true });
      this.form.controls['serialNumber'].enable({ onlySelf: true });
      this.form.controls['hazardId'].enable({ onlySelf: true });
      this.form.controls['testdate'].enable({ onlySelf: true });
      this.form.controls['finalTestDate'].enable({ onlySelf: true });
      this.form.controls['address'].enable({ onlySelf: true });
      this.form.controls['site_Id'].enable({ onlySelf: true });
    })




    this.groupFilterForm = builder.group({
      groupfilterdatasetId: new FormControl('', { validators: [Validators.required] }),
      groupfiltertable: new FormControl('', { validators: [Validators.required] }),
      groupfiltercolumn: new FormControl('', { validators: [Validators.required] }),
      groupfiltervalue: new FormControl('', { validators: [Validators.required] }),
      groupfilterintable: new FormControl('', { validators: [Validators.required] }),
      groupfilterincolumn: new FormControl('', { validators: [Validators.required] }),
      groupfilterinvalue: new FormControl('', { validators: [Validators.required] }),
      groupfilterinOperator: new FormControl('', { validators: [Validators.required] }),
    });

    this.movedataform = builder.group({
      cdatasetId: new FormControl('', Validators.required),
      csiteID: new FormControl('', Validators.required)
    });
    this.movegroupdataform = builder.group({
      gdataset: new FormControl('', { validators: [Validators.required] }),
      gtablename: new FormControl('', { validators: [Validators.required] }),
      gcolumnname: new FormControl('', { validators: [Validators.required] }),
      goperator: new FormControl('', { validators: [Validators.required] }),
      gvalue: new FormControl('', { validators: [Validators.required] })
    });

    this.createdataform = builder.group({
      datasetname: new FormControl('', Validators.required)
    });

    this.sitelistService.getSiteCreatefields('sites');
    this.sitelistService.onsitesfieldsChanged.subscribe(data => {
      this.sitefields = data;
    });
  }

  ngOnInit() {
    //this.toasts.next({text: 'Hello world!'});
    //this.toasts.next({text: 'Search Site',type: 'primary', lifetime: 300000});
  }

  clear() {
    this.form.reset();
    this.groupFilterForm.reset();
    if (this.filterRow.length > 1) {
      for (var i = this.filterRow.length; i--;) {
        this.filterRow.splice(1, i);
      }
    }
    this.filterRow[0].Column = '';
    this.filterRow[0].tableId = '';
    this.filterRow[0].Operator = '';
    this.filterRow[0].Value = '';
    this.siteTableHeaders.length = 0;
    this.advancedList.length = 0;
    this.defaultdataset = this.datasets[0].clientId;
    this.gdefaultdataset = this.datasets[0].clientId;
  }

  cleardataset() {
    this.movegroupdataform.reset();
    this.movedataform.reset();
    this.createdataform.reset();
    this.defaultdataset = this.datasets[0].clientId;
    this.gdefaultdataset = this.datasets[0].clientId;
  }

  ensureMinimumSearchCriteria() {
    if (this.form.controls['site_Id'].value) {
      this.searchCriteria = 'DatasetWithSitId';
      return true;
    } else if (this.form.controls['customerNumber'].value) {
      this.searchCriteria = 'DatasetWithCustomer';
      return true;
    } else if (this.form.controls['serialNumber'].value) {
      this.searchCriteria = 'DatasetWithSerialNumber';
      return true;
    } else if (this.form.controls['hazardId'].value && this.form.controls['testdate'].value) {
      this.searchCriteria = 'DatasetWithInitialTest';
      return true;
    } else if (this.form.controls['hazardId'].value && this.form.controls['finalTestDate'].value) {
      this.searchCriteria = 'DatasetWithFinalTest';
      return true;
    } else if (this.form.controls['hazardId'].value) {
      this.searchCriteria = 'DatasetWithHarzarId';
      return true;
    } else if (this.form.controls['address'].value) {
      this.searchCriteria = 'DatatsetWithAddress';
      return true;
    } else if (this.form.controls['datasetId'].value) {
      this.searchCriteria = "ALLWithDatasetId";
      return true;
    } else {
      this.searchCriteria = 'NA';
      return false;
    }
  };
  searchtext: any;
  selectedSearchParms() {
    var form = this.form.value;
    if ((form.datasetId != null || form.siteId) && form.hazardId == null && form.testdate == null) {
      this.searchtext = 'site';
    }
    else if ((form.datasetId || form.siteId) && form.hazardId && form.testdate == null) {
      this.searchtext = 'hazard';
    }
    else if ((form.datasetId || form.siteId) && form.hazardId && form.testdate) {
      this.searchtext = 'test';
    }
    else {
      // this.searchtext='site';
    }
  }
  SiteSearch() {
    //   this.toastr.success('You are awesome!', 'Success!');
    //this.toastr.success('Hello world!', 'Toastr fun!');
    //this.toasts.next({text: 'Hello world!'});
    // this.searchtext = "";
    // this.selectedSearchParms();
    // if (this.searchtext == null || this.searchtext == "") {
    //   return;
    // }
    // if (this.searchtext == 'site') {
    //   this.FilterSites();
    // }
    // else if (this.searchtext == 'hazard') {
    //   this.FilterHazards();
    // }
    // else {
    //   this.FilterTests();
    // }
    if (this.form.valid) {
      if (this.ensureMinimumSearchCriteria()) {
        const values = JSON.parse(JSON.stringify(this.form.value));
        values.testdate = this.ConversionDate(this.iDateInputField);
        values.finalTestDate = this.ConversionDate(this.fDateInputField);
        // console.log(values);
        // console.log(this.searchCriteria);
        this.sitelistService.getFilteredSite(this.searchCriteria, values).subscribe((data) => {
          this.siteTableHeaders = data.headers;
          this.siteList = data.siteList;
          if (this.siteList.length > 0 && this.searchCriteria === 'DatasetWithInitialTest') {
            for (let index = 0; index < this.siteList.length; index++) {
              this.siteList[index].idate = this.sharedservice.convertdate(this.siteList[index].idate);
            }
          }
          if (this.siteList.length > 0 && this.searchCriteria === 'DatasetWithFinalTest') {
            for (let index = 0; index < this.siteList.length; index++) {
              this.siteList[index].fdate = this.sharedservice.convertdate(this.siteList[index].fdate);
            }
          }
        });
      }
    } else {
      console.log('invalid form');
    }
  }
  FilterSites() {
    this.showsite = true;
    this.showhazard = false;
    this.showtest = false;
    let jsonString = JSON.parse(JSON.stringify(this.form.value));
    this.sitelistService.FilterSite(jsonString);
    this.siteSubscription =
      this.sitelistService.onSiteChanged
        .subscribe(data => {
          this.sites = data;
        });

  }
  FilterHazards() {
    this.showhazard = true;
    this.showsite = false;
    this.showtest = false;
    let jsonString = JSON.parse(JSON.stringify(this.form.value));
    this.sitelistService.FilterSiteHazard(jsonString);
    this.hazardSubscription =
      this.sitelistService.onHazardChanged
        .subscribe(data => {
          this.hazards = data;
        });
  }
  FilterTests() {
    this.showhazard = false;
    this.showsite = false;
    this.showtest = true;

    let jsonString = JSON.parse(JSON.stringify(this.form.value));
    this.sitelistService.FilterSiteHazardTests(jsonString);
    this.testSubscription =
      this.sitelistService.onTestChanged
        .subscribe(data => {
          this.tests = data;
        });
  }
  CreateSite($event) {
    var datasetid = this.form.value.datasetId;

    if (datasetid == undefined) {
      //alert('Select Company to create Site');
      this.toasts.next({ text: 'Select Proper Dataset to create new Site', type: 'primary' });
    }
    else {
      this.NavigateCreateSitePage(datasetid)
    }
  }
  ViewSite(siteId) {
    var datasetid = this.form.value.datasetId;
    // console.log(datasetid);

    this.permissions.CheckDatSetPemissions(datasetid);
    if (datasetid !== null) {
      /** With datasetId */
      if (this.permissions.accessdataset == true) {
        var admin = JSON.parse(localStorage.adminprivilages);
        if (admin) {
          if (admin.ViewSiteInfo) {
            this.route.navigate(['/apps/site/', siteId])
          }
          else {
            this.toasts.next({ text: 'view access denied', type: 'warning' });
          }
        }
      }
      else {
        this.toasts.next({ text: 'view access denied', type: 'warning' });
      }
    } else {
      /** Advance filter */
      var admin = JSON.parse(localStorage.adminprivilages);
      if (admin) {
        if (admin.ViewSiteInfo) {
          this.route.navigate(['/apps/site/', siteId])
        }
        else {
          this.toasts.next({ text: 'view access denied', type: 'warning' });
        }
      }

    }
  }
  NavigateCreateSitePage(datasetid) {
    this.permissions.CheckDatSetPemissions(datasetid);
    if (this.permissions.modifydataset == true) {
      var admin = JSON.parse(localStorage.adminprivilages);
      if (admin) {
        if (admin.CreateSiteInfo) {
          this.route.navigate(['/apps/site/create', datasetid])
        }
        else {
          //alert('access denied');
          this.toasts.next({ text: 'access denied', type: 'warning' });
        }
      }
    }
    else {
      //alert('access denied');
      this.toasts.next({ text: 'access denied', type: 'warning' });
    }
  }

  fieldName: any;
  sitefields: any;
  GetfieldName(fieldname) {
    var sitefield = this.sitefields.filter(field => field.FieldName == fieldname);
    if (sitefield) {
      this.fieldName = sitefield[0].Caption;
      return this.fieldName;
    }

  }

  /**
     * loading the column values for each row based on table drop down selection in Group Dataset
     * @param table 
     * @param index 
     */
  LoadGColumns(table, condition) {
    const ids = [];
    this.sitelistService.FilterReportExportsByName(table).subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        ids.push(data[i].FieldName)
      }
      if (ids !== undefined) {
        if (ids.length > 0) {
          if (condition === 'in') {
            this.Ggroupcolumn = [];
            this.Ggroupcolumn = ids;
            this.movegroupdataform.patchValue({ gcolumnname: '' })
          } else {
            this.Ggroupincolumn = [];
            this.Ggroupincolumn = ids;

          }
        }
      }
    }, err => {
      // this.toasts.next({ text: err, type: 'danger' });
    }, () => { }
    );
  }

  /**
   * loading the column values for each row based on table drop down selection in advanced filter
   * @param table 
   * @param index 
   */
  LoadColumns(table, index) {
    this.columns[index] = [];
    this.filterRow[index].Column = '';
    this.filterRow[index].Value = '';
    this.filterRow[index].Value1 = '';
    this.sitelistService.FilterReportExportsByName(table).subscribe(data => {
      const ids = [];
      for (var i = 0; i < data.length; i++) {
        ids.push(data[i].FieldName)
      }
      if (ids !== undefined) {
        if (ids.length > 0) {
          console.log(ids);
          this.columns[index] = ids;
          console.log(this.columns);
        }
      }
    });
  }
  /**
    * loading the column values for each row based on table drop down selection in group filter
    * @param table 
    * @param index 
    */
  LoadGroupColumns(table, condition) {
    const ids = [];
    this.sitelistService.FilterReportExportsByName(table).subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        ids.push(data[i].FieldName)
      }
      if (ids !== undefined) {
        if (ids.length > 0) {
          if (condition === 'where') {
            this.groupincolumn = [];
            this.groupincolumn = ids;
          } else {
            this.groupcolumn = [];
            this.groupcolumn = ids;
          }
        }
      }
    }, err => {
      // this.toasts.next({ text: err, type: 'danger' });
    }, () => { }
    );
  }

  /**
   * adding advanced filter row based on addbutton click
   */
  AddRow() {
    const newRow = {} as any;
    newRow.tableId = '';
    newRow.Column = '';
    newRow.Operator = '';
    newRow.Value = '';
    this.filterRow.push(newRow);
    var i = this.filterRow.length;
    this.betweenFlag[i] = false;
    if (i > 1) {
      this.columns[i] = [];
      this.filterRow[i].Column = "";
    }
  }
  /**
   * removing the advanced filter row based in index
   * @param index 
   */
  RemoveRow(index) {
    if (this.filterRow.length > 1) {
      this.filterRow.splice(index, 1);
    }
  }

  trackByFn(index, item) {
    return index;
  }

  /**
   * on sesarch of advanced filter
   */
  filterSearch() {
    let jsonParam = '';
    this.showadd = false;
    console.log(this.filterRow.length)
    const condition = ' ' + this.filtercondition + ' ';
    this.filterRow.forEach(function (value, i) {
      if (value.tableId !== '' && value.Column !== '' && value.Operator !== '') {
        if (i !== 0) {

          jsonParam = jsonParam.concat(condition)
        }
        let param;
        if (value.Operator === "like" || value.Operator === "not like") {
          param = value.tableId + '.' + value.Column + " " + value.Operator + "''%" + value.Value + "%''";
        } else if (value.Operator === "between") {
          param = value.tableId + '.' + value.Column + " " + value.Operator + "''" + value.Value + "''" + " and " + "''" + value.Value1 + "''";
        } else if (value.Operator === "Is null" || value.Operator === "Is not null") {
          param = value.tableId + '.' + value.Column + " " + value.Operator;
        } else if (value.Operator === "starts with") {
          param = value.tableId + '.' + value.Column + " like " + "''" + value.Value + "%''";
        }
        else {
          param = value.tableId + '.' + value.Column + " " + value.Operator + "''" + value.Value + "''";
        }

        jsonParam = jsonParam.concat(param)
        console.log(value, jsonParam);
      }
    });

    if (jsonParam !== '') {
      const a = { 'filterString': jsonParam };
      this.sitelistService.AdvancedFilter(a);
      this.sitelistService.advancedFilter.subscribe(data => {
        this.query = [];
        this.advancedListTable = true;
        this.advancedList = data;
      });
    }

  }
  /**
   * on search of group filter
   */
  GroupFilterSearch() {
    var tablename = this.groupFilterForm.controls['groupfiltertable'].value;
    var columnname = this.groupFilterForm.controls['groupfiltercolumn'].value;
    var value1 = this.groupFilterForm.controls['groupfiltervalue'].value;
    var tablename2 = this.groupFilterForm.controls['groupfilterintable'].value;
    var columnname2 = this.groupFilterForm.controls['groupfilterincolumn'].value;
    var operator = this.groupFilterForm.controls['groupfilterinOperator'].value;
    var value2 = this.groupFilterForm.controls['groupfilterinvalue'].value;
    var dataset = this.groupFilterForm.controls['groupfilterdatasetId'].value;
    var updatestring = tablename + '.' + columnname + '=' + "''" + value1 + "''";
    let conditionstring;
    if (operator === "like" || operator === "not like") {
      conditionstring = tablename2 + '.' + columnname2 + operator + "''%" + value2 + "%''" + ' and Sites.ClientID=' + dataset;
    } else if (operator === "starts with") {
      conditionstring = tablename2 + '.' + columnname2 + "like" + "''" + value2 + "%''" + ' and Sites.ClientID=' + dataset;
    } else if (operator === "Is null" || operator === "Is not null") {
      conditionstring = tablename2 + '.' + columnname2 + ' ' + operator + ' and Sites.ClientID=' + dataset;
    } else {
      conditionstring = tablename2 + '.' + columnname2 + operator + "''" + value2 + "''" + ' and Sites.ClientID=' + dataset;
    }
    this.sitelistService.groupupdate(tablename, updatestring, conditionstring).subscribe(data => {
      this.toasts.next({ text: 'Group Updated', type: 'success' });
      this.groupFilterForm.reset();
    });
  }
  //dataset create and move
  Showmovedataset() {
    this.showdatasetmove = true;
    this.Basicfilter = false;
  }

  Movedataset() {
    let cid = this.movedataform.controls['cdatasetId'].value;
    let sid = this.movedataform.controls['csiteID'].value;
    this.sitelistService.movedataset(cid, sid).subscribe(data => {
      if (data != null && data != '0') {
        this.toasts.next({ text: 'Dataset Moved', type: 'success' });
        this.movedataform.reset();
      }
      else {
        this.toasts.next({ text: 'Dataset Not Moved', type: 'danger' });
      }
    });
  }

  Createdataset() {
    let datasetname = this.createdataform.controls['datasetname'].value;
    this.sitelistService.createdataset(datasetname).subscribe(data => {
      if (data != null && data != '0') {
        this.toasts.next({ text: 'Dataset Created', type: 'success' });
        this.createdataform.reset();
      }
      else {
        this.toasts.next({ text: 'Dataset Not Created', type: 'danger' });
      }
    });
  }

  /**
     * show the advanced filter
     */
  ShowFilter(table) {
    this.Basicfilter = false;
    if (this.filterRow.length < 1) {
      this.AddRow();
    }
    this.siteList = [];
    this.BasicTable = false;
    if (table === 'advanced') {
      this.showAdvanceFilter = true;
      this.betweenFlag[0] = false;
    }
    else {
      this.showGroupFilter = true;
    }
  }

  ShowBasicfilter() {
    this.Basicfilter = true;
    this.showAdvanceFilter = false;
    this.showGroupFilter = false;
    this.RemoveRow(0);
    this.siteList = [];
    this.BasicTable = true;
    this.advancedListTable = false;
  }
  ConversionDate(calenderdate) {
    if (calenderdate !== null && calenderdate !== '') {
      const date = new Date(calenderdate);
      const mm = date.getMonth() + 1;
      const dd = date.getDate();
      // return (mm < 10 ? '0' + mm : mm) + '-' + (dd < 10 ? '0' + dd : dd) + '-' + date.getFullYear();
      return date.getFullYear() + '-' + (mm < 10 ? '0' + mm : mm) + '-' + (dd < 10 ? '0' + dd : dd);
    }
    else {
      return '01-01-1990';
    }

  }

  UpdateGroupDataset() {
    var condition = this.movegroupdataform.controls['gcolumnname'].value + this.movegroupdataform.controls['goperator'].value + "''" + this.movegroupdataform.controls['gvalue'].value + "''";
    var tablenames = this.movegroupdataform.controls['gtablename'].value;
    var dataset = this.movegroupdataform.controls['gdataset'].value;
    this.sitelistService.GroupDataset(condition, tablenames, dataset).subscribe(data => {
      if (data != null || data != 0) {
        this.toasts.next({ text: 'Dataset Moved', type: 'success' });
        this.movegroupdataform.reset();
      } else {
        this.toasts.next({ text: 'Dataset Not Moved', type: 'danger' });
      }
    });
  }

  searchAddress(value) {
    if (value === '') {
      this.searchAddressResult.length = 0;
    } else {
      // console.log(value);
      this.sitelistService.getSearchAddress(value).subscribe((data) => {
        this.searchAddressResult = data;
      });
    }
  }
  checkBetween(e, i) {
    if (e.value === 'between') {
      this.betweenFlag[i] = true;
    } else {
      this.betweenFlag[i] = false;
    }
  }

}
