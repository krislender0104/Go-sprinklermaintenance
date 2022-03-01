(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["technical-testkit-create-testkit-create-module"],{

/***/ "./src/app/main/content/apps/technical/testkit-create/testkit-create.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/testkit-create/testkit-create.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\n<!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"h1 mt-16\">Testkit Creation</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\t<div class=\"mat-elevation-z4 p-20 m-20\" >\n\t\t<div fxLayout=\"row\" style=\"width: 100%\" >\n\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\" class=\"mat-elevation-z4 p-20 m-20\">\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"Status\" value=\"\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-checkbox style=\"padding-top: 24px;margin-left: 5px;\">Show on list</mat-checkbox>\n\t\t\t\t</div>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Serial #\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t  \t  \t<input matInput placeholder=\"Manufacturer\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<textarea matInput placeholder=\"Model\" value=\"\"></textarea>\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field>\n\t\t\t\t\t<input matInput [matDatepicker]=\"picker11\" placeholder=\"Purchase Date\" formControlName=\"InstalledDate\" >\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker11\"></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #picker11></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Notes\" value=\"\">\n\t\t\t  \t</mat-form-field> \t\t\t  \t\t\n\t\t\t</div>\n\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\" class=\"mat-elevation-z4 p-20 m-20\">\n\t\t\t\t<h1> Title area</h1>\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker12\" placeholder=\"Expire\" formControlName=\"InstalledDate\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker12\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #picker12></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker13\" placeholder=\"Last Calibrations\" formControlName=\"InstalledDate\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker13\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #picker13></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<h3>Calibration By:</h3>\n\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Company\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Address\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<div fxLayout=\"row\">\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t  \t  \t<input matInput placeholder=\"City\" value=\"\" >\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t    \t<input matInput placeholder=\"State\" value=\"\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"Zip\" value=\"\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Phone\" value=\"\">\n\t\t\t\t  \t</mat-form-field> \n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Fax\" value=\"\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"Email\" value=\"\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"form-hazard-creation1\">\n\t\t\t<p style=\"padding-right: 30px;\">Last updated:</p>\n\t\t\t<p style=\"padding-right: 30px;\">By:</p>\n\t\t</div>\n\t\t<div class=\"form-hazard-creation-btn\">\n\t\t\t<button mat-raised-button class=\"sitebtn\" >Create</button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/technical/testkit-create/testkit-create.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/testkit-create/testkit-create.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.form-hazard-creation {\n  width: 100%;\n  padding: 50px; }\n\n.clm {\n  width: 30%;\n  padding: 20px; }\n\n.form-hazard-creation-btn {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/technical/testkit-create/testkit-create.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/testkit-create/testkit-create.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TestkitCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestkitCreateComponent", function() { return TestkitCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestkitCreateComponent = /** @class */ (function () {
    function TestkitCreateComponent() {
    }
    TestkitCreateComponent.prototype.ngOnInit = function () {
    };
    TestkitCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testkit-create',
            template: __webpack_require__(/*! ./testkit-create.component.html */ "./src/app/main/content/apps/technical/testkit-create/testkit-create.component.html"),
            styles: [__webpack_require__(/*! ./testkit-create.component.scss */ "./src/app/main/content/apps/technical/testkit-create/testkit-create.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestkitCreateComponent);
    return TestkitCreateComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/technical/testkit-create/testkit-create.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/testkit-create/testkit-create.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TestkitCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestkitCreateModule", function() { return TestkitCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _testkit_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testkit-create.component */ "./src/app/main/content/apps/technical/testkit-create/testkit-create.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '**',
        component: _testkit_create_component__WEBPACK_IMPORTED_MODULE_3__["TestkitCreateComponent"],
    }
];
var TestkitCreateModule = /** @class */ (function () {
    function TestkitCreateModule() {
    }
    TestkitCreateModule = __decorate([
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
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            ],
            declarations: [_testkit_create_component__WEBPACK_IMPORTED_MODULE_3__["TestkitCreateComponent"]]
        })
    ], TestkitCreateModule);
    return TestkitCreateModule;
}());



/***/ })

}]);
//# sourceMappingURL=technical-testkit-create-testkit-create-module.js.map