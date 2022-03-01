(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["technical-technical-create-technical-create-module"],{

/***/ "./src/app/main/content/apps/technical/technical-create/technical-create.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technical-create/technical-create.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\n<!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"h1 mt-16\">Device Type Creation</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\t<div class=\"mat-elevation-z4 p-20 m-20\" >\n\t\t<div fxLayout=\"row\" style=\"width: 100%\" >\n\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\n\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Device Code\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Manufacture\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t  \t  \t<input matInput placeholder=\"Type\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<textarea matInput placeholder=\"Description\" value=\"\"></textarea>\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"cost\" value=\"\">\n\t\t\t  \t</mat-form-field> \n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Device Code 2\" value=\"\">\n\t\t\t  \t</mat-form-field> \n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"ASSE\" value=\"\">\n\t\t\t  \t</mat-form-field> \n\t\t\t  \t<mat-form-field>\n\t\t\t\t\t<input matInput [matDatepicker]=\"picker11\" placeholder=\"Date Added\" formControlName=\"InstalledDate\" >\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker11\"></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #picker11></mat-datepicker>\n\t\t\t\t</mat-form-field>\t\n\t\t\t</div>\n\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\n\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Model\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Size\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t  \t  \t<input matInput placeholder=\"Device Date\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Inspection Period\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"CSA\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Test Frequency - Month(s)\" value=\"\">\n\t\t\t  \t</mat-form-field> \n\t\t\t  \t<div fxLayout=\"row\" class=\"p-20\">\n\t\t\t\t\t<mat-checkbox style=\"padding-right: 30px;\">In Use</mat-checkbox>\n\t\t\t\t\t<mat-checkbox style=\"padding-right: 30px;\">Custom List</mat-checkbox>\n\t\t\t\t\t<mat-checkbox style=\"padding-right: 30px;\">Testable</mat-checkbox>\n\t\t\t\t\t<mat-checkbox>Lead Free</mat-checkbox>\n\t\t\t\t</div>\n\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Added By\" value=\"\">\n\t\t\t  \t</mat-form-field>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"form-hazard-creation1\">\n\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t    \t<textarea matInput placeholder=\"Details\" value=\"\"></textarea>\n\t\t  \t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"form-hazard-creation-btn\">\n\t\t\t<button mat-raised-button class=\"sitebtn\" >Create</button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/technical/technical-create/technical-create.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technical-create/technical-create.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.form-hazard-creation {\n  width: 100%;\n  padding: 50px; }\n\n.clm {\n  width: 30%;\n  padding: 20px; }\n\n.form-hazard-creation-btn {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/technical/technical-create/technical-create.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technical-create/technical-create.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TechnicalCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalCreateComponent", function() { return TechnicalCreateComponent; });
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

var TechnicalCreateComponent = /** @class */ (function () {
    function TechnicalCreateComponent() {
    }
    TechnicalCreateComponent.prototype.ngOnInit = function () {
    };
    TechnicalCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-technical-create',
            template: __webpack_require__(/*! ./technical-create.component.html */ "./src/app/main/content/apps/technical/technical-create/technical-create.component.html"),
            styles: [__webpack_require__(/*! ./technical-create.component.scss */ "./src/app/main/content/apps/technical/technical-create/technical-create.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TechnicalCreateComponent);
    return TechnicalCreateComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/technical/technical-create/technical-create.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technical-create/technical-create.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TechnicalCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalCreateModule", function() { return TechnicalCreateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _technical_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technical-create.component */ "./src/app/main/content/apps/technical/technical-create/technical-create.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '**',
        component: _technical_create_component__WEBPACK_IMPORTED_MODULE_3__["TechnicalCreateComponent"]
    }
];
var TechnicalCreateModule = /** @class */ (function () {
    function TechnicalCreateModule() {
    }
    TechnicalCreateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            ],
            declarations: [_technical_create_component__WEBPACK_IMPORTED_MODULE_3__["TechnicalCreateComponent"]]
        })
    ], TechnicalCreateModule);
    return TechnicalCreateModule;
}());



/***/ })

}]);
//# sourceMappingURL=technical-technical-create-technical-create-module.js.map