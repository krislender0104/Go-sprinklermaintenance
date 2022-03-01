import { from } from 'rxjs/observable/from';
import { Permissions } from 'Permissions.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { SiteService } from './site.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, UrlSegment, UrlSegmentGroup, PRIMARY_OUTLET, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, of as observableOf } from 'rxjs';
// import {jslinq} from 'jslinq';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { ToastNotifications } from 'ngx-toast-notifications';
import { validateBasis } from '../../../../../../node_modules/@angular/flex-layout';

/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}
@Injectable()
export class FileDatabase {
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }
  testdata: any;
  searchtext: any;
  Sitetree: any;

  constructor(private siteService: SiteService, private route: ActivatedRoute) {
    this.searchtext = route.snapshot.url[0].path;
    // this.siteService.getSiteTreeList('10');

    // this.siteService.onSiteTreeListChanged
    // .subscribe(data => {
    //      this.Sitetree = data;
    //      this.initialize();
    // });

  }

  initialize() {
    // Parse the string to json object.
    const dataObject = this.Sitetree;

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    // file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(value: any, level: number): FileNode[] {
    let data: any[] = [];
    for (let k in value) {
      let v = value[k];
      let node = new FileNode();
      node.filename = `${k}`;
      if (v === null || v === undefined) {
        // no action
      } else if (typeof v === 'object') {
        node.children = this.buildFileTree(v, level + 2);


      } else {
        node.type = v;
      }
      data.push(node);
    }
    return data;
  }
}

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
  providers: [FileDatabase, SiteService]
})
export class SiteComponent implements OnInit {
  searchTerm: FormControl = new FormControl();
  form: FormGroup;
  tests = [];
  Sitetree: any;
  firstName: any;
  searchtext: string;
  siteSubscription: Subscription;
  sites = [];
  msites = [];
  hazards = [];
  fieldName: any;
  sitefields: any;
  sitesearchSubscription: Subscription;
  searchResult = [];
  private searchTerms = new Subject<string>();
  public ClientName = '';
  public flag: boolean = true;
  newAddress: boolean = false;
  public error: boolean = false;
  public errorid: boolean = true;
  isEditSiteInfo: boolean = true;

  constructor(private siteService: SiteService, private route: ActivatedRoute, public dialog: MatDialog,
    database: FileDatabase, private router: Router, private permissions: Permissions,
    private toasts: ToastNotifications) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    database.dataChange.subscribe(data => this.nestedDataSource.data = data);

    if (route.snapshot.url[0]) {
      this.searchtext = route.snapshot.url[0].path;

      // Get ByID
      this.siteService.getSite(this.searchtext);
      this.siteSubscription =
        this.siteService.onSiteChanged
          .subscribe(data => {
            if (data[0] != null) {
              this.error = false;
              this.errorid = true;
              this.sites = data;
              
              this.siteService.getSiteMail(this.searchtext);
              this.siteService.onSiteMailChanged
                .subscribe(mdata => {
                  this.msites = [];
                  this.msites = mdata;
                });
            } else {
              this.error = true;
              this.errorid = false;
            }
          });


      this.siteService.getSiteHazards(this.searchtext);
      this.siteService.onSitehazardsChanged
        .subscribe(data => {
          this.hazards = data;
        });
      // this.siteService.getSiteHazardsTests(this.searchtext);
      // this.siteService.onSitehazardsTestsChanged
      //   .subscribe(data => {
      //     this.tests = data;
      //   });

    }
    this.form = new FormGroup({
      clientId: new FormControl(),
      siteId: new FormControl(),
      sitetype: new FormControl(),
      siteuse: new FormControl(),
      company: new FormControl('', Validators.required),
      address: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      zip: new FormControl('', Validators.pattern('[0-9]+|([0-9]{5}(-[0-9]{4}))')),
      contact: new FormControl(),
      accountNum: new FormControl(),
      email: new FormControl('', Validators.email),
      phone: new FormControl('', Validators.pattern('[0-9]{10}|([0-9]{3}(-[0-9]{3})+(-[0-9]{4}))')),
      latitude: new FormControl('',Validators.pattern('^-?[0-9]{1,3}(?:\.[0-9]{1,10})?$')),
      longitude: new FormControl('',Validators.pattern('^-?[0-9]{1,3}(?:\.[0-9]{1,10})?$')),
      m_sitetype: new FormControl(),
      m_siteuse: new FormControl(),
      m_company: new FormControl(),
      m_address: new FormControl(),
      m_address2: new FormControl(),
      m_city: new FormControl(),
      m_state: new FormControl(),
      m_country: new FormControl(),
      m_zip: new FormControl('', Validators.pattern('[0-9]+|([0-9]{5}(-[0-9]{4}))')),
      m_contact: new FormControl(),
      m_email: new FormControl('', Validators.email),
      m_phone: new FormControl('', Validators.pattern('[0-9]{10}|([0-9]{3}(-[0-9]{3})+(-[0-9]{4}))')),
      m_address_type: new FormControl()
    });
    this.siteService.getSiteCreatefields('sites');
    this.siteService.onsitesfieldsChanged.subscribe(data => {
      this.sitefields = data;
    });
  }
  GetfieldName(fieldname) {
    var sitefield = this.sitefields.filter(field => field.FieldName == fieldname);
    if (sitefield) {
      this.fieldName = sitefield[0].Caption;
      return this.fieldName;
    }

  }
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    // debugger;
    // alert(event.option.value);
    //console.log(event.option.value);
    //alert(event.option.value);
    //this.router.navigateByUrl('/apps/site/'+event.option.value);
    // window.location.assign('http://localhost:4200/#/apps/site/' + event.option.value);
    this.router.navigate(['apps/site/' + event.option.value]);
    window.location.reload();
    //window.location.href='http://localhost:4200/#/apps/site/'+event.option.value
    //this.router.navigate(['/apps/site/', event.option.value]);
    //this.router.navigateByUrl('http://localhost:4200/apps/site/' + +event.option.value);
  }

  //delete site
  DeleteSite() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Do you want to delete the site?',
    };
    const dialogRef = this.dialog.open(DialogboxComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.siteService.deletesite(this.searchtext).subscribe(data => {
          if (data) {
            this.toasts.next({ text: 'Site Deleted', type: 'success' });
            this.router.navigate(['/apps/site/sitelist']);
          } else {
            this.toasts.next({ text: 'Site not deleted', type: 'danger' })
          }
        });
      }
    });
  }


  // Push a search term into the observable stream.  
  searchClient(term: string): void {
    this.flag = true;
    // this.searchTerms.next(term);
    if (term !== '') {
      this.siteService.getsites(term).subscribe(data => {
        this.searchResult = data;
      });
    }
    // this.sitesearchSubscription =
    //   this.siteService.onsitesChanged
    //     .subscribe(data => {
    //       this.searchResult = data;
    //     });
  }


  onSubmit() { }
  UpdateSite() {
    this.form.value.siteId = this.searchtext;
    let jsonString = JSON.parse(JSON.stringify(this.form.value));
    this.siteService.updateSite(jsonString, this.searchtext).subscribe(data => {
      this.toasts.next({ text: 'Site Updated', type: 'success' });
    }, err => {
      this.toasts.next({ text: 'Site Not Updated', type: 'danger' });
    });
    //alert('Site Updated');

  }
  // UpdateSiteMail() {
  //   debugger;
  //   this.form.value.siteId = this.searchtext;
  //   let jsonString = JSON.parse(JSON.stringify(this.form.value));
  //   this.siteService.updateSiteMail(jsonString, this.searchtext);
  //   this.toasts.next({ text: 'Site Mail Updated', type: 'success' });
  // }
  EditSite() {
    var datasetid = this.form.value.datasetId;
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.EditSiteInfo == true) {
        this.UpdateSite();
      }
      else {
        //alert('edit access denied');
        this.toasts.next({ text: 'edit access denied', type: 'secondary' });
      }
      //}
    }
    else {
      // alert('edit access denied');
      this.toasts.next({ text: 'edit access denied', type: 'secondary' });
    }
  }
  NavigateCreateHazardTest(pagename, siteId, hazId) {
    var admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (admin.CreateSiteInfo) {
        if (pagename == "hazard") {
          this.router.navigate(['/apps/hazard/create', siteId])
        }
        else if (pagename == "test") {
          this.router.navigate(['/apps/test/create', hazId, siteId])
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
  ngOnInit() {
    let admin = JSON.parse(localStorage.adminprivilages);
    if (admin) {
      if (!admin.EditSiteInfo) {
        this.form.disable();
        this.isEditSiteInfo = false;
      }
    }
  }
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  private _getChildren = (node: FileNode) => { return observableOf(node.children); };
  hasNestedChild = (_: number, nodeData: FileNode) => { return !(nodeData.type); };

  toggleAddNew(flag) {
    if (this.isEditSiteInfo) {
      if (flag) {
        this.newAddress = true;
      } else {
        this.newAddress = false;
      }
    }
  }

  addNewAddress() {
    let jsonString = JSON.parse(JSON.stringify(this.form.value));
    this.siteService.addNewSiteMail(jsonString, this.searchtext).subscribe((res) => {
      if (res['status'] === 'success') {
        this.onAddingSuccess();
      } else {
        this.toasts.next({ text: 'Internal Server Error', type: 'danger' });
      }
    });
  }
  /**
   * on adding the new address successfully
   */
  onAddingSuccess() {
    this.toasts.next({ text: 'Site Mail Added', type: 'success' });
    this.siteService.getSiteMail(this.searchtext);
    this.newAddress = false;
    this.form.controls['m_sitetype'].patchValue('');
    this.form.controls['m_siteuse'].patchValue('');
    this.form.controls['m_company'].patchValue('');
    this.form.controls['m_address'].patchValue('');
    this.form.controls['m_address2'].patchValue('');
    this.form.controls['m_city'].patchValue('');
    this.form.controls['m_state'].patchValue('');
    this.form.controls['m_country'].patchValue('');
    this.form.controls['m_zip'].patchValue('');
    this.form.controls['m_contact'].patchValue('');
    this.form.controls['m_email'].patchValue('');
    this.form.controls['m_phone'].patchValue('');
    this.form.controls['m_address_type'].patchValue('');
  }

  onDeletingSuccess() {
    this.siteService.getSiteMail(this.searchtext);
    this.newAddress = false;
    this.form.controls['m_sitetype'].patchValue('');
    this.form.controls['m_siteuse'].patchValue('');
    this.form.controls['m_company'].patchValue('');
    this.form.controls['m_address'].patchValue('');
    this.form.controls['m_address2'].patchValue('');
    this.form.controls['m_city'].patchValue('');
    this.form.controls['m_state'].patchValue('');
    this.form.controls['m_country'].patchValue('');
    this.form.controls['m_zip'].patchValue('');
    this.form.controls['m_contact'].patchValue('');
    this.form.controls['m_email'].patchValue('');
    this.form.controls['m_phone'].patchValue('');
    this.form.controls['m_address_type'].patchValue('');
  }
}
