(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["site-site-module"],{

/***/ "./src/app/main/content/apps/site/site.component.html":
/*!************************************************************!*\
  !*** ./src/app/main/content/apps/site/site.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"forms\" class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"h1 mt-16\">Site Information</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n       \n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayout.gt-md=\"row\">\n\n            <!-- REACTIVE FORM EXAMPLE -->\n\n            <form class=\"mat-white-bg mat-elevation-z4 p-24 mr-24 mb-24\" fxLayout=\"column\" fxLayoutAlign=\"start\"\n                  fxFlex=\"1 0 auto\" name=\"form\" [formGroup]=\"form\">\n\n                <div class=\"h2 mb-24\">SiteID: {{sites[0].SiteId}}</div>\n               \n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"100\">\n                        <input matInput placeholder=\"Company\" formControlName=\"company\"\n                        [(ngModel)]=\"sites[0].Company\" value=\"{{sites[0].Company}}\" required>\n                    </mat-form-field>\n                    <!-- <mat-error>\n                        company is required!\n                    </mat-error> -->\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"50\">\n                        <input matInput placeholder=\"Site type\" formControlName=\"sitetype\"  \n                        [(ngModel)]=\"sites[0].SiteType\" value=\"{{sites[0].SiteType}}\" required>\n                        <mat-error>\n                            site type is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"50\">\n                        <input matInput placeholder=\"site use\" formControlName=\"siteuse\" \n                        [(ngModel)]=\"sites[0].SiteUse\" value=\"{{sites[0].SiteUse}}\" required>\n                        <mat-error>\n                            site use is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"100\">\n                        <textarea matInput placeholder=\"Address\" formControlName=\"address\" \n                        [(ngModel)]=\"sites[0].Address\" value=\"{{sites[0].Address}}\" required>\n                        </textarea>\n                        <mat-error>\n                            Address is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"100\">\n                        <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"\n                        \n                        [(ngModel)]=\"sites[0].Address\" value=\"{{sites[0].Address}}\" ></textarea>\n                        <mat-error >\n                            Address 2 is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"33\">\n                        <input matInput placeholder=\"City\" formControlName=\"city\" [(ngModel)]=\"sites[0].City\" value=\"{{sites[0].City}}\" required>\n                        <mat-error>\n                            City is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"34\">\n                        <input matInput placeholder=\"State\" formControlName=\"state\" [(ngModel)]=\"sites[0].State\" value=\"{{sites[0].State}}\" required>\n                        <mat-error>\n                            State is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"33\">\n                        <input matInput #postalCode placeholder=\"Postal Code\" value=\"94043\"\n                               formControlName=\"postalCode\" [(ngModel)]=\"sites[0].ZIP\" value=\"{{sites[0].ZIP}}\"  required>\n                        <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n                         <mat-error>\n                            <!-- Postal Code needs to be max. {{formErrors.postalCode.maxlength.requiredLength}} characters -->\n                        </mat-error>\n                        <mat-error >\n                            Postal Code is required!\n                        </mat-error> \n                    </mat-form-field>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"1 0 auto\">\n\n                    <mat-form-field fxFlex=\"100\">\n                        <mat-select placeholder=\"Country\"  value=\"United States of America\" required>\n                            <mat-option [value]=\"'United States of America'\">\n                                United States of America\n                            </mat-option>\n                            <mat-option [value]=\"'United Kingdom'\">\n                                United Kingdom\n                            </mat-option>\n                            <mat-option [value]=\"'Russia'\">\n                                Russia\n                            </mat-option>\n                            <mat-option [value]=\"'China'\">\n                                China\n                            </mat-option>\n                            <mat-option [value]=\"'Japan'\">\n                                Japan\n                            </mat-option>\n                            <mat-option [value]=\"'Turkey'\">\n                                Turkey\n                            </mat-option>\n                        </mat-select>\n                         <mat-error >\n                            Country is required!\n                        </mat-error>\n                    </mat-form-field>\n\n                </div>\n\n            </form>\n\n            <!-- / REACTIVE FORM EXAMPLE -->\n\n            <div class=\"form-errors-model  p-24 mat-elevation-z4\">\n                \n            <div fxLayout=\"column\"  layout-sm=\"column\">\n                    \n                <table>\n                    <tr>\n                        <td>\n                                <div flex fxLayoutAlign=\"right\">\n                                        <div class=\"h1 mb-24\">Hazard</div>\n                                        \n                        \n                        \n                                    </div>\n                                    <div>\n                                            <a href=\"apps/hazard/create\"><mat-icon _ngcontent-c35=\"\" class=\"add-hazard-btn secondary-text s-30 mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">add</mat-icon></a>\n                                    </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                                <table class=\"table\">\n                                        <thead>\n                                          <tr>\n                                            <th>Hazard ID</th>\n                                            <th>Serial</th>\n                                            <th>Device Status</th>\n                                            <th>Installed Date</th>\n                                          </tr>\n                                        </thead>\n                                        <tbody>\n                                          <tr *ngFor=\"let hazard of hazards\">\n                                              <td><a href=\"apps/hazard/hazardview/{{hazard.HazardID}}\">{{hazard.HazardID}}</a></td>\n                                              <td>{{hazard.SerialNo}}</td>\n                                              <td>{{hazard.DeviceStatus}}</td>\n                                              <td>{{hazard.InstalledDate}}</td>\n                                            </tr>\n                                        </tbody>\n                                      </table>\n                        </td>\n                    </tr>\n                </table>\n               </div>\n               \n               <div fxLayout=\"column\"  layout-sm=\"column\">\n                    <table>\n                        <tr>\n                            <td>\n                                    <div flex fxLayoutAlign=\"right\">\n                                            <div class=\"h1 mb-24\">Test</div>\n                \n\n                            \n                                        </div>\n                                        <div>\n                                                <a href=\"apps/test/create\"><mat-icon _ngcontent-c35=\"\" class=\"add-hazard-btn secondary-text s-30 mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">add</mat-icon></a>\n                                        </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                    <table class=\"table\">\n                                            <thead>\n                                              <tr>\n                                                <th>Test ID</th>\n                                                <th>Tester ID</th>\n                                                <th>Test Status</th>\n                                                <th>Installed Date</th>\n                                              </tr>\n                                            </thead>\n                                            <tbody>\n                                              <tr *ngFor=\"let test of tests\">\n                                                  <td><a href=\"apps/test/testview/{{test.TestID}}\">{{test.TestID}}</a></td>\n                                                  <td>{{test.TesterID}}</td>\n                                                  <td>{{test.TestStatus}}</td>\n                                                  <td>{{test.TestDueDate}}</td>\n                                                </tr>\n                                            </tbody>\n                                          </table>\n                            </td>\n                        </tr>\n                    </table>\n                   </div>\n                        </div>  \n\n\n        </div>\n        \n\n      \n\n    </div>\n    <!-- / CONTENT -->\n    </div>"

/***/ }),

/***/ "./src/app/main/content/apps/site/site.component.scss":
/*!************************************************************!*\
  !*** ./src/app/main/content/apps/site/site.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content form {\n  width: 100%;\n  max-width: 400px !important; }\n\n:host .content .form-errors-model {\n  flex: 1; }\n\n:host .content .form-errors-model code {\n    background: none !important; }\n\n:host .content .horizontal-stepper-wrapper,\n:host .content .vertical-stepper-wrapper {\n  max-width: 800px; }\n\n:host .add-hazard-btn {\n  background: #d3d3d3;\n  border-radius: 50%;\n  float: right;\n  margin: 5px; }\n\n:host .test-list-area {\n  float: left !important; }\n\n:host .element.style {\n  place-content: stretch flex-start;\n  align-items: stretch;\n  flex-direction: row;\n  box-sizing: border-box; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/site/site.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/content/apps/site/site.component.ts ***!
  \**********************************************************/
/*! exports provided: SiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteComponent", function() { return SiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _site_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site.service */ "./src/app/main/content/apps/site/site.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SiteComponent = /** @class */ (function () {
    function SiteComponent(siteService, route) {
        var _this = this;
        this.siteService = siteService;
        this.route = route;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            sitetype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            siteuse: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        // debugger;
        if (route.snapshot.url[0]) {
            this.searchtext = route.snapshot.url[0].path;
            this.sites = this.siteService.sites;
            this.sites = this.sites.filter(function (element) { return element.SiteId == _this.searchtext; });
            if (this.sites.length == 0) {
                this.sites = this.siteService.sites.filter(function (element) { return element.Address.toString().toLowerCase().indexOf(_this.searchtext.toString().toLowerCase()) > 0; });
            }
            if (this.sites.length > 0) {
                this.hazards = this.siteService.hazards.filter(function (element) { return element.SiteId == _this.sites[0].SiteId; });
                this.tests = this.siteService.tests.filter(function (element) { return element.SiteId == _this.sites[0].SiteId; });
            }
        }
    }
    Object.defineProperty(SiteComponent.prototype, "first", {
        get: function () { return this.form.get('first'); },
        enumerable: true,
        configurable: true
    });
    SiteComponent.prototype.onSubmit = function () {
        console.log(this.form.value); // {first: 'Nancy', last: 'Drew'}
    };
    SiteComponent.prototype.setValue = function () { this.form.setValue({ first: 'Carson', last: 'Drew' }); };
    SiteComponent.prototype.ngOnInit = function () {
    };
    SiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site',
            template: __webpack_require__(/*! ./site.component.html */ "./src/app/main/content/apps/site/site.component.html"),
            styles: [__webpack_require__(/*! ./site.component.scss */ "./src/app/main/content/apps/site/site.component.scss")]
        }),
        __metadata("design:paramtypes", [_site_service__WEBPACK_IMPORTED_MODULE_1__["SiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SiteComponent);
    return SiteComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/site/site.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/content/apps/site/site.module.ts ***!
  \*******************************************************/
/*! exports provided: SiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteModule", function() { return SiteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _site_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site.component */ "./src/app/main/content/apps/site/site.component.ts");
/* harmony import */ var _site_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site.service */ "./src/app/main/content/apps/site/site.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '**',
        component: _site_component__WEBPACK_IMPORTED_MODULE_3__["SiteComponent"],
        resolve: {
            site: _site_service__WEBPACK_IMPORTED_MODULE_4__["SiteService"]
        }
    }
];
var SiteModule = /** @class */ (function () {
    function SiteModule() {
    }
    SiteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_site_component__WEBPACK_IMPORTED_MODULE_3__["SiteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_6__["FuseSharedModule"],
            ],
            providers: [
                _site_service__WEBPACK_IMPORTED_MODULE_4__["SiteService"]
            ]
        })
    ], SiteModule);
    return SiteModule;
}());



/***/ })

}]);
//# sourceMappingURL=site-site-module.js.map