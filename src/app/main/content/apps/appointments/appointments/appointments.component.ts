import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { AppointmentsService } from '../appointments.service';

@Component({
    selector   : 'fuse-appointments',
    templateUrl: './appointments.component.html',
    styleUrls  : ['./appointments.component.scss'],
    animations   : fuseAnimations
})
export class  AppointmentsComponent implements OnInit, OnDestroy
{
    categories: any[];
    courses: any[];
    coursesFilteredByCategory: any[];
    filteredCourses: any[];

    categoriesSubscription: Subscription;
    coursesSubscription: Subscription;

    currentCategory = 'all';
    searchTerm = '';

    constructor(
        private coursesService: AppointmentsService
    )
    {
    }

    ngOnInit()
    {
        // Subscribe to categories
        this.categoriesSubscription =
            this.coursesService.onCategoriesChanged
                .subscribe(categories => {
                    this.categories = categories;
                });

        // Subscribe to courses
        this.coursesSubscription =
            this.coursesService.onCoursesChanged
                .subscribe(courses => {
                    this.filteredCourses = this.coursesFilteredByCategory = this.courses = courses;
                });
    }

    ngOnDestroy()
    {
        this.categoriesSubscription.unsubscribe();
        this.coursesSubscription.unsubscribe();
    }

    filterCoursesByCategory()
    {
        // Filter
        if ( this.currentCategory === 'all' )
        {
            this.coursesFilteredByCategory = this.courses;
            this.filteredCourses = this.courses;
        }
        else
        {
            this.coursesFilteredByCategory = this.courses.filter((course) => {
                return course.category === this.currentCategory;
            });

            this.filteredCourses = [...this.coursesFilteredByCategory];

        }

        // Re-filter by search term
        this.filterCoursesByTerm();
    }

    filterCoursesByTerm()
    {
        const searchTerm = this.searchTerm.toLowerCase();

        // Search
        if ( searchTerm === '' )
        {
            this.filteredCourses = this.coursesFilteredByCategory;
        }
        else
        {
            this.filteredCourses = this.coursesFilteredByCategory.filter((course) => {
                return course.title.toLowerCase().includes(searchTerm);
            });
        }
    }
}
