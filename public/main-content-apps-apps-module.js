(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-content-apps-apps-module"],{

/***/ "./src/app/main/content/apps/apps.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/content/apps/apps.module.ts ***!
  \**************************************************/
/*! exports provided: FuseAppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseAppsModule", function() { return FuseAppsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/angular-material/angular-material.module */ "./src/app/main/content/components/angular-material/angular-material.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'site/sitelist',
        loadChildren: './site/sitelist/sitelist.module#SitelistModule'
    },
    {
        path: 'hazard/hazardview',
        loadChildren: './hazard/hazardview/hazardview.module#HazardviewModule'
    },
    {
        path: 'test/testview',
        loadChildren: './test/testview/testview.module#TestviewModule'
    },
    {
        path: 'site/sitesearch',
        loadChildren: './site/sitesearch/sitesearch.module#SitesearchModule'
    },
    {
        path: 'hazard/create',
        loadChildren: './hazard/hazard/hazard.module#HazardModule'
    },
    {
        path: 'test/create',
        loadChildren: './test/test/test.module#TestModule'
    },
    {
        path: 'letter',
        loadChildren: './letter/letter.module#LetterModule'
    },
    {
        path: 'report',
        loadChildren: './report/report.module#ReportModule'
    },
    {
        path: 'technical',
        loadChildren: './technical/technical.module#TechnicalModule'
    },
    {
        path: 'technicals/create',
        loadChildren: './technical/technical-create/technical-create.module#TechnicalCreateModule'
    },
    {
        path: 'technician/create',
        loadChildren: './technical/technician-create/technician-create.module#TechnicianCreateModule'
    },
    {
        path: 'technicialcompany/create',
        loadChildren: './technical/company-create/company-create.module#CompanyCreateModule'
    },
    {
        path: 'testkit/create',
        loadChildren: './technical/testkit-create/testkit-create.module#TestkitCreateModule'
    },
    {
        path: 'technicals/details',
        loadChildren: './technical/technical-details/technical-details.module#TechnicalDetailsModule'
    },
    {
        path: 'technician/details',
        loadChildren: './technical/technician-details/technician-details.module#TechnicianDetailsModule'
    },
    {
        path: 'technicialcompany/details',
        loadChildren: './technical/company-details/company-details.module#CompanyDetailsModule'
    },
    {
        path: 'testkit/details',
        loadChildren: './technical/testkit-details/testkit-details.module#TestkitDetailsModule'
    },
    {
        path: 'site',
        loadChildren: './site/site.module#SiteModule'
    },
    {
        path: 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#FuseAnalyticsDashboardModule'
    },
    {
        path: 'dashboards/project',
        loadChildren: './dashboards/project/project.module#FuseProjectDashboardModule'
    },
    {
        path: 'mail',
        loadChildren: './mail/mail.module#FuseMailModule'
    },
    {
        path: 'mail-ngrx',
        loadChildren: './mail-ngrx/mail.module#FuseMailNgrxModule'
    },
    {
        path: 'chat',
        loadChildren: './chat/chat.module#FuseChatModule'
    },
    {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#FuseCalendarModule'
    },
    {
        path: 'e-commerce',
        loadChildren: './e-commerce/e-commerce.module#FuseEcommerceModule'
    },
    {
        path: 'academy',
        loadChildren: './academy/academy.module#FuseAcademyModule'
    },
    {
        path: 'todo',
        loadChildren: './todo/todo.module#FuseTodoModule'
    },
    {
        path: 'file-manager',
        loadChildren: './file-manager/file-manager.module#FuseFileManagerModule'
    },
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#FuseContactsModule'
    },
    {
        path: 'scrumboard',
        loadChildren: './scrumboard/scrumboard.module#FuseScrumboardModule'
    }
];
var FuseAppsModule = /** @class */ (function () {
    function FuseAppsModule() {
    }
    FuseAppsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _components_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["FuseAngularMaterialModule"]
            ],
            declarations: []
        })
    ], FuseAppsModule);
    return FuseAppsModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-content-apps-apps-module.js.map