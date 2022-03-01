(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academy-academy-module"],{

/***/ "./src/app/main/content/apps/academy/academy.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/content/apps/academy/academy.module.ts ***!
  \*************************************************************/
/*! exports provided: FuseAcademyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseAcademyModule", function() { return FuseAcademyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/main/content/apps/academy/courses/courses.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course/course.component */ "./src/app/main/content/apps/academy/course/course.component.ts");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses.service */ "./src/app/main/content/apps/academy/courses.service.ts");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course.service */ "./src/app/main/content/apps/academy/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'courses',
        component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_4__["FuseAcademyCoursesComponent"],
        resolve: {
            academy: _courses_service__WEBPACK_IMPORTED_MODULE_6__["AcademyCoursesService"]
        }
    },
    {
        path: 'courses/:courseId/:courseSlug',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_5__["FuseAcademyCourseComponent"],
        resolve: {
            academy: _course_service__WEBPACK_IMPORTED_MODULE_7__["AcademyCourseService"]
        }
    },
    {
        path: '**',
        redirectTo: 'courses'
    }
];
var FuseAcademyModule = /** @class */ (function () {
    function FuseAcademyModule() {
    }
    FuseAcademyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_4__["FuseAcademyCoursesComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_5__["FuseAcademyCourseComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            providers: [
                _courses_service__WEBPACK_IMPORTED_MODULE_6__["AcademyCoursesService"],
                _course_service__WEBPACK_IMPORTED_MODULE_7__["AcademyCourseService"]
            ]
        })
    ], FuseAcademyModule);
    return FuseAcademyModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/academy/course.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/content/apps/academy/course.service.ts ***!
  \*************************************************************/
/*! exports provided: AcademyCourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademyCourseService", function() { return AcademyCourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AcademyCourseService = /** @class */ (function () {
    function AcademyCourseService(http) {
        this.http = http;
        this.onCourseChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * The Academy App Main Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    AcademyCourseService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getCourse(route.params.courseId, route.params.courseSlug)
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    AcademyCourseService.prototype.getCourse = function (courseId, courseSlug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/academy-course/' + courseId + '/' + courseSlug)
                .subscribe(function (response) {
                _this.onCourseChanged.next(response);
                resolve(response);
            }, reject);
        });
    };
    AcademyCourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AcademyCourseService);
    return AcademyCourseService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/academy/course/course.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/content/apps/academy/course/course.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"academy-course\" class=\"page-layout simple left-sidenav\">\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" position=\"start\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"academy-left-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <div class=\"sidenav-content\" fusePerfectScrollbar>\n\n                <div class=\"steps\">\n\n                    <div class=\"step\"\n                         *ngFor=\"let step of course.steps; let i = index; let last = last; let first = first\"\n                         (click)=\"gotoStep(i)\"\n                         [ngClass]=\"{'current': currentStep === i, 'completed': currentStep > i, 'last': last, 'first': first}\">\n                        <div class=\"index\">\n                            <span>{{i + 1}}</span>\n                        </div>\n                        <div class=\"title\">{{step.title}}</div>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\">\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <button mat-icon-button class=\"mr-16 sidenav-toggle\"\n                        fuseMatSidenavToggler=\"academy-left-sidenav\" fxHide.gt-md>\n                    <mat-icon>menu</mat-icon>\n                </button>\n\n                <button mat-icon-button class=\"mr-16\" [routerLink]=\"'/apps/academy/courses'\">\n                    <mat-icon>arrow_back</mat-icon>\n                </button>\n\n                <div>\n                    <h2>{{course.title}}</h2>\n                </div>\n\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div id=\"course-content\" class=\"content\">\n\n                <ng-container *ngFor=\"let step of course.steps; let i = index;\">\n\n                    <div class=\"course-step\" fusePerfectScrollbar\n                         *ngIf=\"currentStep === i\"\n                         [@slideIn]=\"animationDirection\">\n\n                        <div id=\"course-step-content\" class=\"course-step-content\" [innerHTML]=\"step.content\"></div>\n\n                    </div>\n\n                </ng-container>\n\n            </div>\n            <!-- / CONTENT -->\n\n            <div class=\"step-navigation\">\n\n                <button mat-fab class=\"previous mat-accent white-fg\"\n                        (click)=\"gotoPreviousStep()\"\n                        [disabled]=\"currentStep === 0\"\n                        [fxHide]=\"currentStep === 0\">\n                    <mat-icon>chevron_left</mat-icon>\n                </button>\n\n                <button mat-fab class=\"next mat-accent white-fg\"\n                        (click)=\"gotoNextStep()\"\n                        [disabled]=\"currentStep === course.totalSteps - 1\"\n                        [fxHide]=\"currentStep === course.totalSteps - 1\">\n                    <mat-icon>chevron_right</mat-icon>\n                </button>\n\n                <button mat-fab class=\"done mat-green-600-bg\"\n                        routerLink=\"/apps/academy/courses\"\n                        [disabled]=\"currentStep !== course.totalSteps - 1\"\n                        [fxShow]=\"currentStep === course.totalSteps - 1\">\n                    <mat-icon>check</mat-icon>\n                </button>\n\n            </div>\n\n        </div>\n        <!-- / CENTER -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/academy/course/course.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/content/apps/academy/course/course.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#academy-course .mat-drawer-container {\n  flex: 1 !important; }\n#academy-course .mat-drawer-container > .mat-drawer-content {\n    flex: 1 !important; }\n@media (min-width: 1280px) {\n      #academy-course .mat-drawer-container > .mat-drawer-content {\n        z-index: 52; } }\n#academy-course .sidenav .steps {\n  padding: 16px 0; }\n#academy-course .sidenav .steps .step {\n    position: relative;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 16px;\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.54); }\n#academy-course .sidenav .steps .step.current {\n      background: #e3f2fd;\n      color: rgba(0, 0, 0, 0.87); }\n#academy-course .sidenav .steps .step.current .index span {\n        border: 2px solid #2196f3; }\n#academy-course .sidenav .steps .step.current .title {\n        font-weight: bold; }\n#academy-course .sidenav .steps .step.completed {\n      color: rgba(0, 0, 0, 0.87); }\n#academy-course .sidenav .steps .step.completed .index span {\n        border: 2px solid #2196f3; }\n#academy-course .sidenav .steps .step.completed .index:after {\n        border-left-color: #2196f3; }\n#academy-course .sidenav .steps .step.completed + .step .index:before {\n        border-left-color: #2196f3; }\n#academy-course .sidenav .steps .step.first .index:before {\n      display: none; }\n#academy-course .sidenav .steps .step.last .index:after {\n      display: none; }\n#academy-course .sidenav .steps .step .index {\n      display: flex;\n      margin-right: 12px; }\n#academy-course .sidenav .steps .step .index span {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        width: 28px;\n        min-width: 28px;\n        max-width: 28px;\n        height: 28px;\n        background: white;\n        border-radius: 100%;\n        border: 2px solid #9e9e9e;\n        font-weight: bold;\n        font-size: 12px;\n        z-index: 10; }\n#academy-course .sidenav .steps .step .index:before, #academy-course .sidenav .steps .step .index:after {\n        position: absolute;\n        display: block;\n        content: ' ';\n        border-left: 1px solid #e0e0e0;\n        width: 1px;\n        height: 50%;\n        left: 29px;\n        z-index: 8; }\n#academy-course .sidenav .steps .step .index:before {\n        top: 0; }\n#academy-course .sidenav .steps .step .index:after {\n        bottom: 0; }\n#academy-course .sidenav .steps .step .title {\n      display: flex; }\n#academy-course .center {\n  position: relative; }\n#academy-course .center .header {\n    height: 72px;\n    min-height: 72px;\n    max-height: 72px; }\n#academy-course .center .content {\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    height: 100%;\n    background: #eeeeee; }\n#academy-course .center .content .course-step {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: 48px;\n      overflow: auto; }\n@media (max-width: 720px) {\n        #academy-course .center .content .course-step {\n          padding: 0 0 120px 0; } }\n#academy-course .center .content .course-step .course-step-content {\n        padding: 24px;\n        max-width: 720px;\n        margin: 0 auto;\n        width: 100%;\n        background: white;\n        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n#academy-course .center .step-navigation {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    bottom: 32px;\n    max-width: 944px;\n    padding: 0 24px;\n    width: 100%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n#academy-course .center .step-navigation .previous {\n      margin-right: auto; }\n#academy-course .center .step-navigation .next,\n    #academy-course .center .step-navigation .done {\n      margin-left: auto; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/academy/course/course.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/content/apps/academy/course/course.component.ts ***!
  \**********************************************************************/
/*! exports provided: FuseAcademyCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseAcademyCourseComponent", function() { return FuseAcademyCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "./src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course.service */ "./src/app/main/content/apps/academy/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseAcademyCourseComponent = /** @class */ (function () {
    function FuseAcademyCourseComponent(courseService, changeDetectorRef) {
        this.courseService = courseService;
        this.changeDetectorRef = changeDetectorRef;
        this.currentStep = 0;
        this.animationDirection = 'none';
    }
    FuseAcademyCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to courses
        this.courseSubscription =
            this.courseService.onCourseChanged
                .subscribe(function (course) {
                _this.course = course;
            });
    };
    FuseAcademyCourseComponent.prototype.ngAfterViewInit = function () {
        this.courseStepContent = this.fuseScrollbarDirectives.find(function (fuseScrollbarDirective) {
            return fuseScrollbarDirective.element.nativeElement.id === 'course-step-content';
        });
    };
    FuseAcademyCourseComponent.prototype.ngOnDestroy = function () {
        this.courseSubscription.unsubscribe();
    };
    FuseAcademyCourseComponent.prototype.gotoStep = function (step) {
        // Decide the animation direction
        this.animationDirection = this.currentStep < step ? 'left' : 'right';
        // Run change detection so the change
        // in the animation direction registered
        this.changeDetectorRef.detectChanges();
        // Set the current step
        this.currentStep = step;
    };
    FuseAcademyCourseComponent.prototype.gotoNextStep = function () {
        if (this.currentStep === this.course.totalSteps - 1) {
            return;
        }
        // Set the animation direction
        this.animationDirection = 'left';
        // Run change detection so the change
        // in the animation direction registered
        this.changeDetectorRef.detectChanges();
        // Increase the current step
        this.currentStep++;
    };
    FuseAcademyCourseComponent.prototype.gotoPreviousStep = function () {
        if (this.currentStep === 0) {
            return;
        }
        // Set the animation direction
        this.animationDirection = 'right';
        // Run change detection so the change
        // in the animation direction registered
        this.changeDetectorRef.detectChanges();
        // Decrease the current step
        this.currentStep--;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_1__["FusePerfectScrollbarDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], FuseAcademyCourseComponent.prototype, "fuseScrollbarDirectives", void 0);
    FuseAcademyCourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-academy-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/main/content/apps/academy/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.scss */ "./src/app/main/content/apps/academy/course/course.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_course_service__WEBPACK_IMPORTED_MODULE_3__["AcademyCourseService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], FuseAcademyCourseComponent);
    return FuseAcademyCourseComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/academy/courses.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/content/apps/academy/courses.service.ts ***!
  \**************************************************************/
/*! exports provided: AcademyCoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademyCoursesService", function() { return AcademyCoursesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AcademyCoursesService = /** @class */ (function () {
    function AcademyCoursesService(http) {
        this.http = http;
        this.onCategoriesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.onCoursesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * The Academy App Main Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    AcademyCoursesService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getCategories(),
                _this.getCourses()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    AcademyCoursesService.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/academy-categories')
                .subscribe(function (response) {
                _this.onCategoriesChanged.next(response);
                resolve(response);
            }, reject);
        });
    };
    AcademyCoursesService.prototype.getCourses = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/academy-courses')
                .subscribe(function (response) {
                _this.onCoursesChanged.next(response);
                resolve(response);
            }, reject);
        });
    };
    AcademyCoursesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AcademyCoursesService);
    return AcademyCoursesService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/academy/courses/courses.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/apps/academy/courses/courses.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"academy-courses\" class=\"page-layout simple\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n        <div class=\"hero-text\">\n            <mat-icon class=\"hero-icon\">school</mat-icon>\n            <h1>WELCOME TO ACADEMY</h1>\n            <h3>\n                Our courses will step you through the process of building a small application, or adding a new feature\n                to an existing application.\n            </h3>\n        </div>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n\n            <div class=\"filters\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n                 fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n                <mat-form-field class=\"course-search\">\n\n                    <input matInput placeholder=\"Search for a course\" [(ngModel)]=\"searchTerm\"\n                           (input)=\"filterCoursesByTerm()\">\n\n                </mat-form-field>\n\n                <mat-form-field class=\"category-selector\">\n\n                    <mat-select placeholder=\"Select Category\" [(ngModel)]=\"currentCategory\"\n                                (selectionChange)=\"filterCoursesByCategory()\">\n                        <mat-option [value]=\"'all'\">\n                            All\n                        </mat-option>\n                        <mat-option *ngFor=\"let category of categories\" [value]=\"category.value\">\n                            {{ category.label }}\n                        </mat-option>\n                    </mat-select>\n\n                </mat-form-field>\n\n            </div>\n\n            <div class=\"courses\" fxLayout=\"row wrap\" fxLayoutAlign=\"center\" [@animateStagger]=\"{value:'50'}\"\n                 *fuseIfOnDom>\n\n                <div class=\"course\" *ngFor=\"let course of filteredCourses\" fxFlex=\"100\" fxFlex.gt-xs=\"50\"\n                     fxFlex.gt-sm=\"33\" [ngClass]=\"course.category\" [@animate]=\"{value:'*',params:{y:'100%'}}\">\n\n                    <div class=\"course-content\" fxLayout=\"column\">\n\n                        <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\n                             [ngClass]=\"course.category + '-bg'\">\n\n                            <div class=\"category\" fxFlex>\n                                {{course.category}}\n                            </div>\n\n                            <div class=\"length\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                <mat-icon class=\"length-icon s-20\">access_time</mat-icon>\n                                <div class=\"min\">{{course.length}} min</div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\n                            <div class=\"h1\">{{course.title}}</div>\n                            <div class=\"updated\">Updated {{course.updated}}</div>\n                        </div>\n\n                        <div class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                            <button mat-button color=\"accent\"\n                                    [routerLink]=\"'/apps/academy/courses/' + course.id + '/' + course.slug\">\n                                START\n                            </button>\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class=\"no-courses\" *ngIf=\"filteredCourses.length === 0\">\n                    No courses found!\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/academy/courses/courses.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/apps/academy/courses/courses.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#academy-courses .header {\n  position: relative;\n  flex: 1 0 auto;\n  height: 280px;\n  max-height: 280px;\n  background: #1A237E;\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%);\n  text-align: center; }\n@media screen and (max-width: 599px) {\n    #academy-courses .header {\n      height: 240px;\n      padding: 16px; } }\n#academy-courses .header .hero-text .hero-icon {\n    position: absolute;\n    top: -64px;\n    left: 0px;\n    opacity: 0.04;\n    font-size: 512px !important;\n    width: 512px !important;\n    height: 512px !important; }\n#academy-courses .header .hero-text h1 {\n    color: white;\n    font-size: 40px;\n    font-weight: 300;\n    letter-spacing: 0.01em;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 16px; }\n@media (max-width: 599px) {\n      #academy-courses .header .hero-text h1 {\n        font-size: 24px; } }\n#academy-courses .header .hero-text h3 {\n    color: rgba(255, 255, 255, 0.75);\n    max-width: 480px;\n    text-align: center;\n    font-weight: 300;\n    letter-spacing: 0.03em;\n    margin: 0; }\n@media (max-width: 599px) {\n      #academy-courses .header .hero-text h3 {\n        font-size: 14px; } }\n#academy-courses .content .category-selector {\n  min-width: 200px; }\n#academy-courses .content .filters {\n  width: 100%;\n  max-width: 1040px;\n  margin: 24px auto;\n  padding: 0 20px; }\n@media (max-width: 599px) {\n    #academy-courses .content .filters {\n      margin: 0 auto; } }\n#academy-courses .content .filters .course-search {\n    width: 200px; }\n@media (max-width: 599px) {\n      #academy-courses .content .filters .course-search {\n        margin-bottom: 16px; } }\n@media (min-width: 600px) {\n      #academy-courses .content .filters .course-search {\n        margin-right: 16px; } }\n#academy-courses .content .courses {\n  width: 100%;\n  max-width: 1040px;\n  margin: 0 auto; }\n#academy-courses .content .courses .no-courses {\n    font-size: 24px;\n    margin: 24px 0;\n    text-align: center; }\n#academy-courses .content .courses .course {\n    padding: 16px; }\n#academy-courses .content .courses .course:hover .course-content {\n      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n#academy-courses .content .courses .course .course-content {\n      background: white;\n      min-height: 240px;\n      transition: box-shadow 150ms ease-in-out;\n      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n#academy-courses .content .courses .course .course-content .header {\n        color: white;\n        padding: 16px 24px;\n        height: 64px !important;\n        min-height: 64px !important;\n        max-height: 64px !important; }\n#academy-courses .content .courses .course .course-content .header.web-bg {\n          background: #2196f3; }\n#academy-courses .content .courses .course .course-content .header.android-bg {\n          background: #4caf50; }\n#academy-courses .content .courses .course .course-content .header.firebase-bg {\n          background: #ff8f00; }\n#academy-courses .content .courses .course .course-content .header.cloud-bg {\n          background: #607d8b; }\n#academy-courses .content .courses .course .course-content .header .category {\n          text-transform: capitalize;\n          text-align: left;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.54); }\n#academy-courses .content .courses .course .course-content .header .length .length-icon {\n          margin-right: 8px;\n          color: rgba(0, 0, 0, 0.54) !important; }\n#academy-courses .content .courses .course .course-content .header .length .min {\n          font-size: 16px;\n          color: rgba(0, 0, 0, 0.54); }\n#academy-courses .content .courses .course .course-content .content {\n        padding: 24px; }\n#academy-courses .content .courses .course .course-content .content .h1 {\n          font-size: 16px;\n          text-align: center; }\n#academy-courses .content .courses .course .course-content .content .updated {\n          font-size: 13px;\n          font-weight: 500;\n          margin-top: 4px;\n          color: rgba(0, 0, 0, 0.37); }\n#academy-courses .content .courses .course .course-content .footer {\n        padding: 16px;\n        height: 48px !important;\n        min-height: 48px !important;\n        max-height: 48px !important;\n        box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/app/main/content/apps/academy/courses/courses.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/content/apps/academy/courses/courses.component.ts ***!
  \************************************************************************/
/*! exports provided: FuseAcademyCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseAcademyCoursesComponent", function() { return FuseAcademyCoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses.service */ "./src/app/main/content/apps/academy/courses.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseAcademyCoursesComponent = /** @class */ (function () {
    function FuseAcademyCoursesComponent(coursesService) {
        this.coursesService = coursesService;
        this.currentCategory = 'all';
        this.searchTerm = '';
    }
    FuseAcademyCoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to categories
        this.categoriesSubscription =
            this.coursesService.onCategoriesChanged
                .subscribe(function (categories) {
                _this.categories = categories;
            });
        // Subscribe to courses
        this.coursesSubscription =
            this.coursesService.onCoursesChanged
                .subscribe(function (courses) {
                _this.filteredCourses = _this.coursesFilteredByCategory = _this.courses = courses;
            });
    };
    FuseAcademyCoursesComponent.prototype.ngOnDestroy = function () {
        this.categoriesSubscription.unsubscribe();
        this.coursesSubscription.unsubscribe();
    };
    FuseAcademyCoursesComponent.prototype.filterCoursesByCategory = function () {
        var _this = this;
        // Filter
        if (this.currentCategory === 'all') {
            this.coursesFilteredByCategory = this.courses;
            this.filteredCourses = this.courses;
        }
        else {
            this.coursesFilteredByCategory = this.courses.filter(function (course) {
                return course.category === _this.currentCategory;
            });
            this.filteredCourses = this.coursesFilteredByCategory.slice();
        }
        // Re-filter by search term
        this.filterCoursesByTerm();
    };
    FuseAcademyCoursesComponent.prototype.filterCoursesByTerm = function () {
        var searchTerm = this.searchTerm.toLowerCase();
        // Search
        if (searchTerm === '') {
            this.filteredCourses = this.coursesFilteredByCategory;
        }
        else {
            this.filteredCourses = this.coursesFilteredByCategory.filter(function (course) {
                return course.title.toLowerCase().includes(searchTerm);
            });
        }
    };
    FuseAcademyCoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-academy-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/main/content/apps/academy/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.scss */ "./src/app/main/content/apps/academy/courses/courses.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_courses_service__WEBPACK_IMPORTED_MODULE_2__["AcademyCoursesService"]])
    ], FuseAcademyCoursesComponent);
    return FuseAcademyCoursesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=academy-academy-module.js.map