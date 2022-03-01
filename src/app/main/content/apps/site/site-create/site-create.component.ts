import { filter } from 'rxjs/operators';
import { promise } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SiteService } from '../site.service';
import { SiteCreateService } from './site-create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';
import { SitelistService } from '../sitelist/sitelist.service';


@Component({
  selector: 'app-site-create',
  templateUrl: './site-create.component.html',
  styleUrls: ['./site-create.component.scss'],
  providers: [SiteCreateService]
})
export class SiteCreateComponent implements OnInit {
  clientId: string;
  siteform: FormGroup;
  sitefields: any;
  public movedataform: FormGroup;
  public createdataform: FormGroup;
  public movegroupdataform: FormGroup;
  Ggroupcolumn = [];
  Ggroupincolumn = [];
  datasetprivilage: boolean = true;
  editsiteprivilage:boolean=true;
  sites: any;
  hazards: any;
  tests: any;
  datasets: any;
  defaultdataset: any = 0;
  gdefaultdataset: any = 0;
  mgdefaultdataset: any = 0;
  gdatasets: any;
  service: any;
  is_accessAll = 0;

  //for movedataset
  

  constructor(private siteservice: SiteService, private route: ActivatedRoute,private builder: FormBuilder,
    protected router: Router, private toasts: ToastNotifications, private sitelistService: SitelistService,
    private sitecreateservice: SiteCreateService) {
    // this.clientId = route.snapshot.url[0].path;
    this.siteform = builder.group({
      clientId: new FormControl(this.gdefaultdataset),
      sitetype: new FormControl(),
      siteuse: new FormControl(),
      company: new FormControl('', Validators.required),
      address: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      zip: new FormControl('', Validators.pattern('[0-9]+|[0-9]+(-[0-9]+)')),
      contact: new FormControl(),
      email: new FormControl('', Validators.email),
      phone: new FormControl('', Validators.pattern('[0-9]{10}|([0-9]{3}(-[0-9]{3})+(-[0-9]{4}))')),
      latitude: new FormControl('',Validators.pattern('^-?[0-9]{1,3}(?:\.[0-9]{1,10})?$')),
      longitude: new FormControl('',Validators.pattern('^-?[0-9]{1,3}(?:\.[0-9]{1,10})?$')),
      
      
    });

    // this.movedataform = builder.group({
    //   cdatasetId: new FormControl('', Validators.required),
    //   csiteID: new FormControl('', Validators.required)
    // });
    // this.movegroupdataform = builder.group({
    //   gdataset: new FormControl('', { validators: [Validators.required] }),
    //   gtablename: new FormControl('', { validators: [Validators.required] }),
    //   gcolumnname: new FormControl('', { validators: [Validators.required] }),
    //   goperator: new FormControl('', { validators: [Validators.required] }),
    //   gvalue: new FormControl('', { validators: [Validators.required] })
    // });

    // this.createdataform = builder.group({
    //   datasetname: new FormControl('', Validators.required)
    // });


    this.sitecreateservice.getSiteCreatefields('sites');
    this.sitecreateservice.onsitesfieldsChanged.subscribe(data => {
      this.sitefields = data;
      // console.log(this.sitefields);
    });
    
    let admin = JSON.parse(localStorage.adminprivilages);
    this.is_accessAll = admin.AccessAll;
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
  }
  fieldName: any;
  GetfieldName(fieldname) {
    var sitefield = this.sitefields.filter(field => field.FieldName == fieldname);
    if (sitefield) {
      this.fieldName = sitefield[0].Caption;
      return this.fieldName;
    }

  }

  ngOnInit() {

  }
  newsite: any;
  OnSubmit() {
    let jsonString = JSON.parse(JSON.stringify(this.siteform.value));
    this.newsite = this.siteservice.createSite(jsonString).subscribe((res) => {
      console.log(res);
      this.toasts.next({ text: 'Site Created', type: 'success' });
      setTimeout(() => {
        var siteid = res[0].SiteID;
        this.router.navigate(['/apps/site/' + siteid]);
      }, 500);
    });
    //alert('Site Created');
    // this.toasts.next({ text: 'Site Created', type: 'success' });
    //this.router.navigate(['site/sitelist']);
  }
}
