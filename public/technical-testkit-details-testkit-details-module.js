(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["technical-testkit-details-testkit-details-module"],{

/***/ "./src/app/main/content/apps/technical/testkit-details/testkit-details.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/testkit-details/testkit-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\n\t<!-- HEADER -->\n\t\t<div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t<div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\t\t\t\t<div class=\"h1 mt-16\">Test Kit  Update</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- / HEADER -->\n\t\t<div class=\"mat-elevation-z4 p-20 m-20\" [formGroup]=\"myGroup\" >\n\t\t\t<div fxLayout=\"row\" style=\"width: 100%\" >\n\t\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\" class=\"mat-elevation-z4 p-20 m-20\">\n\t\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Status\" value=\"{{testkit.Status}}\">\n\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t  <mat-checkbox style=\"padding-top: 24px;margin-left: 5px;\" [checked]=\"true\" >Show on list</mat-checkbox>\n\t\t\t\t\t</div>\n\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t<input matInput placeholder=\"Serial #\" value=\"{{testkit.SerialNO}}\">\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Manufacturer\" value=\"{{testkit.Manufacturer}}\">\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t<textarea matInput placeholder=\"Model\" value=\"{{testkit.Model}}\"></textarea>\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t  <mat-form-field>\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker11\" placeholder=\"Purchase Date\" formControlName=\"PurchaseDate\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker11\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #picker11></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t<input matInput placeholder=\"Notes\" value=\"{{testkit.Notes}}\">\n\t\t\t\t\t  </mat-form-field> \t\t\t  \t\t\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\" class=\"mat-elevation-z4 p-20 m-20\">\n\t\t\t\t\t<h1> Title area</h1>\n\t\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t\t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker12\" placeholder=\"Expire\" formControlName=\"ExpireDate\" >\n\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker12\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t<mat-datepicker #picker12></mat-datepicker>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker13\" placeholder=\"Last Calibrations\" formControlName=\"LastCalibrationDate\" >\n\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker13\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t<mat-datepicker #picker13></mat-datepicker>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h3>Calibration By:</h3>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t<input matInput placeholder=\"Company\" value=\"{{testkit.Company}}\">\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t<input matInput placeholder=\"Address\" value=\"{{testkit.Address}}\">\n\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t  <div fxLayout=\"row\">\n\t\t\t\t\t\t  <mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"City\" value=\"{{testkit.City}}\" >\n\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t  <mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"State\" value=\"{{testkit.State}}\">\n\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Zip\" value=\"{{testkit.ZIP}}\">\n\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t\t  <mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Phone\" value=\"{{testkit.Phone}}\">\n\t\t\t\t\t\t  </mat-form-field> \n\t\t\t\t\t\t  <mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Fax\" value=\"{{testkit.Fax}}\">\n\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t\t  <mat-form-field class=\"example-full-width\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Email\" value=\"{{testkit.Email}}\">\n\t\t\t\t\t\t  </mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-hazard-creation1\">\n\t\t\t\t<p style=\"padding-right: 30px;\">Last updated: {{testkit.LastUpdatedDate}}</p>\n\t\t\t\t<p style=\"padding-right: 30px;\">By: {{testkit.LastupdatedBy}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"form-hazard-creation-btn\">\n\t\t\t\t<button mat-raised-button class=\"sitebtn\" >Update</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/main/content/apps/technical/testkit-details/testkit-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/testkit-details/testkit-details.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.form-hazard-creation {\n  width: 100%;\n  padding: 50px; }\n\n.clm {\n  width: 30%;\n  padding: 20px; }\n\n.form-hazard-creation-btn {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/technical/testkit-details/testkit-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/testkit-details/testkit-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TestkitDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestkitDetailsComponent", function() { return TestkitDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestKit_Details_DATA = "\n  {\n       \"TestKitID\":\"1\",\n       \"Status\":\"Active\",\n       \"ShowOnList\":\"true\",\n       \"SerialNO\":\"A141442\",\n       \"Manufacturer\":\"Watts\",\n       \"Model\":\"007M1QT\",\n       \"PurchaseDate\":\"5/13/2017\",\n       \"Notes\":\"tokay notes\",\n       \"ExpireDate\":\"5/13/2017\",\n       \"LasrCalibrationsDate\":\"5/13/2017\",\n       \"Company\":\"FRANK J. STRAHL & SONS, INC.\",\n       \"Address\":\"401 NORTH WASHINGTON AVE\",\n       \"City\":\"DANVILLE\",\n       \"State\":\"IL\",\n       \"ZIP\":\"61612-9346\",\n       \"Phone\":\"217-446-7890\",\n       \"Fax\":\"fax@getzfire.com\",\n       \"Email\":\"jackiev@getzfire.com\",\n       \"LastUpdatedDate\":\"6/13/2017\",\n       \"LastupdatedBy\":\"jackiev\"\n    }\n  ";
var TestkitDetailsComponent = /** @class */ (function () {
    function TestkitDetailsComponent() {
    }
    TestkitDetailsComponent.prototype.ngOnInit = function () {
        this.testkit = JSON.parse(TestKit_Details_DATA);
        //this.InUse='true';
        console.log(this.testkit);
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            PurchaseDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            ExpireDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2017, 6, 5)),
            LastCalibrationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
        });
    };
    TestkitDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testkit-details',
            template: __webpack_require__(/*! ./testkit-details.component.html */ "./src/app/main/content/apps/technical/testkit-details/testkit-details.component.html"),
            styles: [__webpack_require__(/*! ./testkit-details.component.scss */ "./src/app/main/content/apps/technical/testkit-details/testkit-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestkitDetailsComponent);
    return TestkitDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/technical/testkit-details/testkit-details.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/testkit-details/testkit-details.module.ts ***!
  \***************************************************************************************/
/*! exports provided: TestkitDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestkitDetailsModule", function() { return TestkitDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _testkit_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testkit-details.component */ "./src/app/main/content/apps/technical/testkit-details/testkit-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '**',
        component: _testkit_details_component__WEBPACK_IMPORTED_MODULE_2__["TestkitDetailsComponent"],
    }
];
var TestkitDetailsModule = /** @class */ (function () {
    function TestkitDetailsModule() {
    }
    TestkitDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            ],
            declarations: [_testkit_details_component__WEBPACK_IMPORTED_MODULE_2__["TestkitDetailsComponent"]]
        })
    ], TestkitDetailsModule);
    return TestkitDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=technical-testkit-details-testkit-details-module.js.map