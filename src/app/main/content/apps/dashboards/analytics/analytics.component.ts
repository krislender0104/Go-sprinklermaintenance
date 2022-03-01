import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AnalyticsDashboardService } from './analytics.service';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute } from '@angular/router';
import { SitelistService } from '../../site/sitelist/sitelist.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {AlertpopupComponent} from './alertpopup/alertpopup.component';
import { ToastNotifications } from 'ngx-toast-notifications';
import { exists } from 'fs';
// import { } from '@types/googlemaps';

@Component({
    selector: 'fuse-analytics-dashboard',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})

export class FuseAnalyticsDashboardComponent implements OnInit {
    
    // widgets: any;
    // widget1SelectedYear = '2016';
    // widget5SelectedDay = 'today';
    dashboardData: any;
    defaultvalue:Array<any>=[];
    datasets: Array<any> = [];
    gdatasets: Array<any> = [];
    lat: number = 40.386566;
    lng: number = -76.285762;
    public form: FormGroup;
    public form1: FormGroup;
    public form2: FormGroup;
    data = [];
    allSelected : boolean;
    is_accessAll = 0;
    vartest_count = 0;
    isDrawed = false;
    // data = {
    //     "marker": [
    //         {
    //             "lat": 31.461428,
    //             "lng": -460.451632,
    //             "icon": "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    //             "label": "asdfdsf",
    //             "testid":2288995
    //         },
    //         {
    //             "lat": 31.461428,
    //             "lng": -460.451633,
    //             "icon": "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    //             "label": "asdhgfhdfhgfdsf",
    //             "testid":2288993
    //         }, {
    //             "lat": 39.787322,
    //             "lng": -449.640695,
    //             "icon": "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    //             "label": "dfhgdfhgdfhg",
    //             "testid":2287997

    //         }, {
    //             "lat": -13.998037,
    //             "lng": -52.584955,
    //             "icon": "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
    //             "label": "wertert",
    //             "testid":2283931

    //         }
    //     ]
    // };
    testdetails: any;
    searchAddressResult = [];
    address_present: boolean=false;
    lastsearch: any=[];
    admin;
    constructor(private toasts: ToastNotifications, private analyticsDashboardService: AnalyticsDashboardService, private spinner: NgxSpinnerService, private sitelistService: SitelistService, 
        private builder: FormBuilder,public dialog: MatDialog, private activeRoute: ActivatedRoute) {
        this.admin = JSON.parse(localStorage.adminprivilages);
        this.is_accessAll = this.admin.AccessAll;
        this.sitelistService.getUserDatasetlist(this.admin.UserID, this.admin.AccessAll).subscribe(data => {
            if (data) {
                this.datasets = data;
                if(data[0].clientId==0){
                    this.gdatasets = data;
                    this.gdatasets.shift();
                }else{
                    this.gdatasets = data;
                }
                //this.datasets = data;
                this.defaultvalue.push(this.datasets[0].clientId);
                this.GetData(this.defaultvalue);
            }
        });
        this.allSelected = false;

        this.form = builder.group({
            datasetId: new FormControl('')
        });

        this.form1 = builder.group({
            limits: new FormControl('', Validators.compose([Validators.required])),
            dset: new FormControl('', Validators.compose([Validators.required])),
            hazard_type : new FormControl('', Validators.compose([Validators.required]))
        });

        this.form2 = builder.group({
            address: new FormControl('', Validators.compose([Validators.required]))
        });

        // // Get the widgets from the service
        // this.widgets = this.analyticsDashboardService.widgets;

        // // Register the custom chart.js plugin
        // this.registerCustomChartJSPlugin();
    }

    ngOnInit() {
        var _data = {
            timerId: [],
            loading: false,
            tempData: [],
            refreshCount: 0
        }
        window.name = JSON.stringify(_data);
    }

    export(value){
        if(this.defaultvalue.length!==0){
            var jsonstring=JSON.parse(JSON.stringify(this.form.value));
            jsonstring.condition=value;
            // console.log("export value ------------->", jsonstring);
            this.analyticsDashboardService.GetExportDetails(jsonstring).subscribe(data=>{
                if(data){
                    this.analyticsDashboardService.exportCSV(data,value);
                }
            },error=>{
                console.log(error);
            });

        }else{
            const dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.data = {
              id: 1,
              title: 'Please select a dataset to generate export file.',
            };
            const dialogRef = this.dialog.open(AlertpopupComponent, dialogConfig);
        }

    }
    
    changedataset(event) {

        var id = this.form.controls['datasetId'].value;
        if(this.allSelected == false){
            
            this.GetData(id);
        }
    }
    toggleAllSelection() {
        if (this.allSelected == false) {
         
          this.form.controls['datasetId']
          .patchValue([...this.datasets.map(item => item.clientId), 0]);
            this.changedataset(event);
            this.allSelected = true;
        } else {
          
          this.form.controls['datasetId'].patchValue([]);
          this.allSelected = false;
          this.GetData(null);
        }
      }
    isLoading = false
    loadPage(index) {
        console.log("testing ------->", index);
        // var _data = JSON.parse(window.name);
        // if(_data.timerId.length > 0) {
        //     _data.timerId.forEach(id => clearTimeout(id))
        //     _data.timerId = [];
        // }
        // if (_data.loading) return;
        // _data.loading = true;
        // var timerId = setTimeout(() => {
        //     var _data = JSON.parse(window.name);
        //     if(_data.timerId[_data.timerId.length-1] == timerId) {
        //         if(_data.tempData.length > 0) {
                    
        //             this.data = _data.tempData;           // setting Data of marker       
        //             _data.refreshCount ++;
        //             if(_data.refreshCount == 2) {
        //                 _data.tempData = [];
        //             }
        //             window.name = JSON.stringify(_data);
        //             console.log("set data");
        //         }
        //     }
        // }, 10)
        // _data.timerId.push(timerId);
        // _data.loading = false;
        // window.name = JSON.stringify(_data);
    }

    Getdataformap() {
        this.isDrawed = false;
        this.form2.reset();
        //console.log(JSON.parse(JSON.stringify(this.form1.value)));
        if (this.form1.controls['limits'].value != '' || this.form1.controls['limits'].value != null) {
            var jsonstring = JSON.parse(JSON.stringify(this.form1.value));
            // console.log(jsonstring);
            this.spinner.show();
            this.data= [];
            this.analyticsDashboardService.GetGoogleLatLong(jsonstring).subscribe(data => {
                console.log('getdataformap')
                var total_lat = 0;
                var total_lng = 0;
                if (data.length > 0) {
                    
                 
                    // var temp = 0;
                    // this.data.push(data[0]);

                    // for(let j = 0; j< data.length; j++){
                    //     temp = 0;
                    //     if((data[j].lat != null) && (data[j].long != null)){
                    //         for(let k = 0 ; k < this.data.length; k++){
    
                    //             if((Math.abs(data[j].lat - this.data[k].lat) == 0) || (Math.abs(data[j].long - this.data[k].long ) == 0) ){
                    //                 temp = 1;
                    //                 break;
                    //             }
                    //         }
                    //         if(temp == 0){
                    //             this.data.push(data[j]);
                    //         }

                    //     }
                    // }

                    this.data = data;                
                    for(let i =0; i < this.data.length; i++){
                        total_lat += this.data[i].lat;
                        total_lng += this.data[i].long;
                    }
                    this.lat = total_lat/this.data.length;
                    this.lng = total_lng/this.data.length;
                    
                    
                    console.log(this.data);
                    console.log("lat, long ------->", this.lat, this.lng);
                    this.spinner.hide();
                }else{
                    this.spinner.hide();
                }
            });
        }
    }

    Getdataformapfromaddress(){
        this.form1.reset();
        var jsonstring = JSON.parse(JSON.stringify(this.form2.value));
        this.spinner.show();
        this.data=null;
        this.address_present=false;
        for (let index = 0; index < this.lastsearch.length; index++) {
            const element = this.lastsearch[index].Address;
            if(this.form2.controls['address'].value==element){
                this.address_present=true;
            }
        }
        if(this.address_present==true){
            this.analyticsDashboardService.GetGoogleLatLongfromaddress(jsonstring).subscribe(data=>{
                if (data.length>0) {
                  
                    this.data = data;
                    this.lat = data[0].lat;
                    this.lng = data[0].long;
                    this.spinner.hide();
                }else{
                    this.spinner.hide();
                    this.toasts.next({ text: 'No Data Found', type: 'danger' });
                }
            },error=>{
                this.spinner.hide();
                this.toasts.next({ text: 'No Data Found', type: 'danger' });
                console.log(error);
            });
        }else{
            this.analyticsDashboardService.GetGoogleLatLongfromgapi(jsonstring).subscribe(data=>{
                if (data.length>0) {
                    // console.log(data);
                    this.data = data;
                    this.lat = data[0].lat;
                    this.lng = data[0].long;
                    this.spinner.hide();
                }else{
                    this.toasts.next({ text: 'No Data Found', type: 'danger' });
                    this.spinner.hide();
                }
            },error=>{
                this.spinner.hide();
                this.toasts.next({ text: 'No Data Found', type: 'danger' });
                console.log(error);
            });
        }
        
    }
    
    test(index, i){
        // this.vartest_count ++;
        console.log(i + "count;   "+ index);
    }

  

    searchAddress(value) {
        if (value === '') {
          this.searchAddressResult.length = 0;
        } else {
          // console.log(value);
          this.sitelistService.getSearchAddress(value).subscribe((data) => {
            this.searchAddressResult = data;
            if(data!=null){
                this.lastsearch=data;
            }
          });
        }
      }

    GetData(id) {
        if(id==null||id==''){
            this.dashboardData=
            [
                {
                    "Title": "Total Number of Connections",
                    "Count": 0
                  },
                  {
                    "Title": "Backflows Under Administration",
                    "Count": 0
                  },
                  {
                    "Title": "Letters Sent",
                    "Count": 0
                  },
                  {
                    "Title": "Surveys Received",
                    "Count": 0
                  },
                  {
                    "Title": "Tests Completed",
                    "Count": 0
                  }
            ];
        }else{
            this.analyticsDashboardService.GetDashboard2(id).subscribe(data => {
                if (data) {
                    this.dashboardData = data;
                }
            }, error => {
                console.log(error);
            });
        }
    }

    GetDetailsofTest(id) {
        if (id!==0) {
            this.analyticsDashboardService.GetTestRelatedDetails(id).subscribe(data => {
                if (data) {
                    // console.log(data);
                    debugger;
                    this.testdetails = data;
                }
            }, error => {
                console.log(error);
            });
        }
    }


    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        barThickness: 10
    };

    public barChartLabels: string[] = [
        '2011',
        '2012'
    ];
    public barChartType = 'bar';
    public barChartLegend = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Iphone 8' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone X' }
    ];
    public barChartColors: Array<any> = [
        { backgroundColor: '#1976d2' },
        { backgroundColor: '#26dad2' }
    ];

    // Pie
    public pieChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales'
    ];
    public pieChartData: number[] = [300, 500];
    public pieChartType = 'pie';

    //events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    /**
     * Register a custom plugin
     */

}

