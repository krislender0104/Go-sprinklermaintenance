import { DataService } from './../../shared/data.service';
import { User } from './../../../../../../assets/angular-material-examples/autocomplete-display/autocomplete-display-example';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { fuseAnimations } from '@fuse/animations';

import { AcademyCoursesService } from '../courses.service';
import { HazardCheckService } from '../../webtests/hazardcheck/hazardcheck.service';
import { Router } from '@angular/router';

@Component({
    selector: 'fuse-academy-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    animations: fuseAnimations
})
export class FuseAcademyCoursesComponent implements OnInit, OnDestroy {
    UserID: any;
    categories: any[];
    courses: any[];
    coursesFilteredByCategory: any[];
    filteredCourses: any[];

    categoriesSubscription: Subscription;
    coursesSubscription: Subscription;

    currentCategory = 'all';
    searchTerm = '';

    constructor(
        private coursesService: AcademyCoursesService,
        private HazardCheckService: HazardCheckService,
        private router: Router,
        private _dataService: DataService
    ) {
    }

    ngOnInit() {
        // Subscribe to categories
        this.categoriesSubscription =
            this.coursesService.onCategoriesChanged
                .subscribe(categories => {
                    this.categories = categories;
                });


        var currentuser = JSON.parse(localStorage.currentUser);
        this.UserID = currentuser[0].UserID;
        if (currentuser[0].WebTestTester) {
            var TesterID = currentuser[0].TesterID;
            this.coursesService.getAppointments(TesterID)
            this.coursesSubscription = this.coursesService.onAppointmentsChanged
                .subscribe(appointments => {
                    if(appointments.length>0){
                        for (let index = 0; index < appointments.length; index++) {
                          appointments[index].AppointmentDate=this._dataService.convertdate(appointments[index].AppointmentDate);
                        }
                      }
                    this.filteredCourses = this.coursesFilteredByCategory = this.courses = appointments;
                })
        } else {
            this.HazardCheckService.GetTesterDetailsByUserId(this.UserID)
            this.HazardCheckService.onUserTesterChanged.subscribe(data => {
                if (data.length > 0) {
                    this.coursesService.getAppointments(data[0].TesterID)
                    this.coursesSubscription = this.coursesService.onAppointmentsChanged
                        .subscribe(appointments => {
                            if(appointments.length>0){
                                for (let index = 0; index < appointments.length; index++) {
                                  appointments[index].AppointmentDate=this._dataService.convertdate(appointments[index].AppointmentDate);
                                }
                              }
                            this.filteredCourses = this.coursesFilteredByCategory = this.courses = appointments;
                        })
                }
            })
        }
    }

    ngOnDestroy() {
        this.categoriesSubscription.unsubscribe();
        this.coursesSubscription.unsubscribe();
    }

    filterCoursesByCategory() {
        // Filter
        if (this.currentCategory === 'all') {
            this.coursesFilteredByCategory = this.courses;
            this.filteredCourses = this.courses;
        }
        else {
            this.coursesFilteredByCategory = this.courses.filter((course) => {
                // return course.category === this.currentCategory;
                return (course.TestType.indexOf(this.currentCategory) !== -1);
            });

            this.filteredCourses = [...this.coursesFilteredByCategory];

        }
        // Re-filter by search term
        this.filterCoursesByTerm();
    }

    filterCoursesByTerm() {
        const searchTerm = this.searchTerm.toLowerCase();

        // Search
        if (searchTerm === '') {
            this.filteredCourses = this.coursesFilteredByCategory;
        }
        else {
            this.filteredCourses = this.coursesFilteredByCategory.filter((course) => {
                //return course.title.toLowerCase().includes(searchTerm);
                return course.SiteName.toLowerCase().includes(searchTerm);
            });
        }
    }
    navigateToHazard(data) {
        this._dataService.hazardCheck = data;
        this.router.navigate(['/apps/webtests/addtest']);
    }
}
