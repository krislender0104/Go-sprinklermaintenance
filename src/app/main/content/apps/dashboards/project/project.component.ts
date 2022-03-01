import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//import { DataSource } from '@angular/cdk/collections';
//import { BehaviorSubject, Observable } from 'rxjs';

import * as shape from 'd3-shape';

import { fuseAnimations } from '@fuse/animations';

//import { ProjectDashboardService } from './project.service';
import 'rxjs/add/operator/map';

@Component({
    selector: 'fuse-project-dashboard',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class FuseProjectDashboardComponent implements OnInit {
    // projects: any[];
    // selectedProject: any;

    dashboardData: any;
    ranges = { '2W': '2 Weeks Ago', 'LW': 'Last Week', 'TW': 'This Week' };
    schedulingData: any;
    isProcessing: boolean = false;

    currentYear:any;
    // widgets: any;
    widget5: any = {};
    widget6: any = {};
    widget7: any = {};
    // widget8: any = {};
    widget9: any = {};
    widget10: any = {};
    widget11: any = {};
    widget12: any = {};

    dateNow = Date.now();

    constructor(private activeRoute: ActivatedRoute) {
        // this.projects = this.projectDashboardService.projects;
        // this.selectedProject = this.projects[0];
        // this.widgets = this.projectDashboardService.widgets;
        // console.log(this.widgets);
        // console.log(this.projects);
        // console.log(this.widgets);
        this.activeRoute.data.map(data => data.resData).subscribe((res) => {
            this.dashboardData = res;
            this.isProcessing = false;
        });
        this.currentYear = new Date().getFullYear();

        // Static data for scheduling table
        this.schedulingData = {
            "title": "Schedule",
            "ranges": {
                "T": "Today",
                "TM": "Tomorrow"
            },
            "schedule": {
                "T": [{
                    "title": "Group Meeting",
                    "time": "In 32 minutes",
                    "location": "Room 1B"
                }, {
                    "title": "Coffee Break",
                    "time": "10:30 AM"
                }, {
                    "title": "Public Beta Release",
                    "time": "11:00 AM"
                }, {
                    "title": "Lunch",
                    "time": "12:10 PM"
                }, {
                    "title": "Dinner with David",
                    "time": "17:30 PM"
                }, {
                    "title": "Jane's Birthday Party",
                    "time": "19:30 PM"
                }, {
                    "title": "Overseer's Retirement Party",
                    "time": "21:30 PM"
                }],
                "TM": [{
                    "title": "Marketing Meeting",
                    "time": "09:00 AM"
                }, {
                    "title": "Public Announcement",
                    "time": "11:00 AM"
                }, {
                    "title": "Lunch",
                    "time": "12:10 PM"
                }, {
                    "title": "Meeting with Beta Testers",
                    "time": "15:00 AM"
                }, {
                    "title": "Live Stream",
                    "time": "17:30 PM"
                }, {
                    "title": "Release Party",
                    "time": "19:30 PM"
                }, {
                    "title": "CEO's Party",
                    "time": "22:30 PM"
                }]
            }
        };

        /**
         * Widget 5
         */
        this.widget5 = {
            currentRange: 'TW',
            xAxis: true,
            yAxis: true,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            onSelect: (ev) => {
                console.log(ev);
            },
            supporting: {
                currentRange: '',
                xAxis: false,
                yAxis: false,
                gradient: false,
                legend: false,
                showXAxisLabel: false,
                xAxisLabel: 'Days',
                showYAxisLabel: false,
                yAxisLabel: 'Isues',
                scheme: {
                    domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
                },
                curve: shape.curveBasis
            }
        };

        /**
         * Widget 6
         */
        this.widget6 = {
            currentRange: 'TW',
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: true,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
            },
            onSelect: (ev) => {
                console.log(ev);
            }
        };

        /**
         * Widget 7
         */
        this.widget7 = {
            currentRange: 'T'
        };

        // this.widget9 = {
        //     currentRange: 'TW',
        //     legend: true,
        //     explodeSlices: false,
        //     labels: true,
        //     doughnut: true,
        //     gradient: false,
        //     scheme: {
        //         domain: ['#8bc34a' , '#03a9f4']
        //     },
        //     onSelect: (ev) => {
        //         console.log(ev);
        //     }
        // };
        // this.widget10 = {
        //     currentRange: 'TW',
        //     legend: false,
        //     explodeSlices: false,
        //     labels: true,
        //     doughnut: true,
        //     gradient: false,
        //     scheme: {
        //         domain: ['#e83e8c' , '#03a9f4']
        //     },
        //     onSelect: (ev) => {
        //         console.log(ev);
        //     }
        // };
        // this.widget11 = {
        //     currentRange: 'TW',
        //     legend: false,
        //     explodeSlices: false,
        //     labels: true,
        //     doughnut: true,
        //     gradient: false,
        //     scheme: {
        //         domain: ['#ff9800' , '#03a9f4']
        //     },
        //     onSelect: (ev) => {
        //         console.log(ev);
        //     }
        // };
        // this.widget12 = {
        //     currentRange: 'TW',
        //     legend: false,
        //     explodeSlices: false,
        //     labels: true,
        //     doughnut: true,
        //     gradient: false,
        //     scheme: {
        //         domain: ['#6f42c1',  '#03a9f4']
        //     },
        //     onSelect: (ev) => {
        //         console.log(ev);
        //     }
        // };


    }

    ngOnInit() {
        this.isProcessing = true;
        /**
         * Widget 11
        //  */
      
        // this.widget11.onContactsChanged = new BehaviorSubject({});
        // this.widget11.onContactsChanged.next(this.widgets.widget11.table.rows);
        // this.widget11.dataSource = new FilesDataSource(this.widget11);
    }
  
}

// export class FilesDataSource extends DataSource<any>
// {
//     constructor(private widget11) {
//         super();
//     }

//     /** Connect function called by the table to retrieve one stream containing the data to render. */
//     connect(): Observable<any[]> {
//         return this.widget11.onContactsChanged;
//     }

//     disconnect() {
//     }
// }

