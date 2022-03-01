(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["site-sitelist-sitelist-module"],{

/***/ "./src/app/main/content/apps/site/sitelist/sitelist.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/site/sitelist/sitelist.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"h1 mt-16\">Site List</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div >\r\n\r\n       \r\n        <div >\r\n\r\n            <!-- REACTIVE FORM EXAMPLE -->\r\n\r\n\r\n            <!-- / REACTIVE FORM EXAMPLE -->\r\n\r\n            <div class=\"form-errors-model mat-white-bg p-24 mat-elevation-z4\">\r\n                <a href=\"/apps/site\" class=\"text-right\" title=\"Add New Site\"><mat-icon _ngcontent-c35=\"\" class=\"secondary-text s-48 mat-icon material-icons \" role=\"img\" aria-hidden=\"true\">add</mat-icon></a>\r\n                <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Site ID</th>\r\n        <th>Site Type</th>\r\n        <th>Company</th>\r\n        <th>Address</th>\r\n        <th>Premise ID</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let site of sites\">\r\n        <td><a href=\"apps/site/{{site.SiteId}}\">{{site.SiteId}}</a></td>\r\n        <td>{{site.SiteType}}</td>\r\n        <td>{{site.Company}}</td>\r\n        <td>{{site.Address}}</td>\r\n        <td>{{site.PremideID}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <!-- / CONTENT -->\r\n    </div>"

/***/ }),

/***/ "./src/app/main/content/apps/site/sitelist/sitelist.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/site/sitelist/sitelist.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/apps/site/sitelist/sitelist.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/apps/site/sitelist/sitelist.component.ts ***!
  \***********************************************************************/
/*! exports provided: SitelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitelistComponent", function() { return SitelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sitelist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sitelist.service */ "./src/app/main/content/apps/site/sitelist/sitelist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SitelistComponent = /** @class */ (function () {
    function SitelistComponent(sitelistService) {
        this.sitelistService = sitelistService;
        this.sites = this.sitelistService.sites;
        //  this.sites = this.sites.find((item) => {
        //     return item.SiteId == '1000001';
        // });
        //  this.sites = this.sites.filter(element=>element.SiteId=='1000001');
    }
    SitelistComponent.prototype.ngOnInit = function () {
    };
    SitelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sitelist',
            template: __webpack_require__(/*! ./sitelist.component.html */ "./src/app/main/content/apps/site/sitelist/sitelist.component.html"),
            styles: [__webpack_require__(/*! ./sitelist.component.scss */ "./src/app/main/content/apps/site/sitelist/sitelist.component.scss")]
        }),
        __metadata("design:paramtypes", [_sitelist_service__WEBPACK_IMPORTED_MODULE_1__["SitelistService"]])
    ], SitelistComponent);
    return SitelistComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/site/sitelist/sitelist.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/content/apps/site/sitelist/sitelist.module.ts ***!
  \********************************************************************/
/*! exports provided: SitelistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitelistModule", function() { return SitelistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sitelist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sitelist.component */ "./src/app/main/content/apps/site/sitelist/sitelist.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _sitelist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sitelist.service */ "./src/app/main/content/apps/site/sitelist/sitelist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '**',
        component: _sitelist_component__WEBPACK_IMPORTED_MODULE_3__["SitelistComponent"],
        resolve: {
            site: _sitelist_service__WEBPACK_IMPORTED_MODULE_6__["SitelistService"]
        }
    }
];
var SitelistModule = /** @class */ (function () {
    function SitelistModule() {
    }
    SitelistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
            ],
            declarations: [_sitelist_component__WEBPACK_IMPORTED_MODULE_3__["SitelistComponent"]],
            providers: [
                _sitelist_service__WEBPACK_IMPORTED_MODULE_6__["SitelistService"]
            ]
        })
    ], SitelistModule);
    return SitelistModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/site/sitelist/sitelist.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/content/apps/site/sitelist/sitelist.service.ts ***!
  \*********************************************************************/
/*! exports provided: SitelistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitelistService", function() { return SitelistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SitelistService = /** @class */ (function () {
    function SitelistService(http) {
        this.http = http;
    }
    /**
      * Get Contacts
      * @returns {Promise<any>}
      */
    SitelistService.prototype.getSites = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/site-sites')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    SitelistService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getSites(),
            ]).then(function (_a) {
                var sites = _a[0], hazards = _a[1], tests = _a[2];
                //this.sites = sites;
                // sites = sites.find((item) => {
                //     return item.SiteId == '1000001';
                // });
                _this.sites = sites;
                resolve();
            }, reject);
        });
    };
    SitelistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SitelistService);
    return SitelistService;
}());



/***/ })

}]);
//# sourceMappingURL=site-sitelist-sitelist-module.js.map