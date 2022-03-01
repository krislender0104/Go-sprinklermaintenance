(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-test-module"],{

/***/ "./src/app/main/content/apps/test/test/test.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/content/apps/test/test/test.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"h1 mt-16\">Create Test</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n<form class=\"\">\r\n\t<div fxLayout=\"row\" class=\"form-hazard-creation\">\r\n\t\t<div fxLayout=\"column\" class=\"clm\">\r\n\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Device S/N\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t<!-- <input matInput placeholder=\"Tester Date\" value=\"\"> -->\r\n\t\t\t\t<input matInput [matDatepicker]=\"picker17\" placeholder=\"Test Date\" formControlName=\"TestDate\">\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker17\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker17></mat-datepicker>\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t  \t  \t<input matInput placeholder=\"Tester\" value=\"\">\r\n\t\t  \t</mat-form-field> \r\n\t\t  \t<!-- <mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Types of Use\" value=\"\">\r\n\t\t  \t</mat-form-field> -->\r\n\t\t  \t<!-- <mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Risk Level\" value=\"\">\r\n\t\t  \t</mat-form-field>  -->\r\n\t\t</div>\r\n\t\t<div fxLayout=\"column\" class=\"clm\">\r\n\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Result\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Comments\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t <mat-form-field class=\"example-full-width\">\r\n\t\t  \t  \t<input matInput placeholder=\"Last Test\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<!-- <mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Tap #\" value=\"\">\r\n\t\t  \t</mat-form-field> -->\r\n\t\t  \t<!-- <mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Device #\" value=\"\">\r\n\t\t  \t</mat-form-field>  -->\r\n\t\t</div>\r\n\t\t<!-- <div fxLayout=\"column\" class=\"clm\">\r\n\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Device Status\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Serial #\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t  \t  \t<input matInput placeholder=\"Manufacturer\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Model\" value=\"\">\r\n\t\t  \t</mat-form-field> -->\r\n\t\t  \t<!-- <mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Type\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t</div> -->\r\n\t</div>\r\n\t<div class=\"form-hazard-creation-btn\">\r\n\t\t<button mat-raised-button >Create</button>\r\n\t</div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/test/test/test.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/content/apps/test/test/test.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.form-hazard-creation {\n  width: 100%;\n  padding: 50px; }\n\n.clm {\n  width: 30%;\n  padding: 20px; }\n\n.form-hazard-creation-btn {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/test/test/test.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/content/apps/test/test/test.component.ts ***!
  \***************************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
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

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/main/content/apps/test/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/main/content/apps/test/test/test.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/test/test/test.module.ts":
/*!************************************************************!*\
  !*** ./src/app/main/content/apps/test/test/test.module.ts ***!
  \************************************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.component */ "./src/app/main/content/apps/test/test/test.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '**',
        component: _test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"],
    }
];
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule = __decorate([
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
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
            ],
            declarations: [_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"]]
        })
    ], TestModule);
    return TestModule;
}());



/***/ })

}]);
//# sourceMappingURL=test-test-test-module.js.map