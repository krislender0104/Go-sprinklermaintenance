(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hazard-hazard-hazard-module"],{

/***/ "./src/app/main/content/apps/hazard/hazard/hazard.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/apps/hazard/hazard/hazard.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"h1 mt-16\">Create Hazard</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n<form style=\"padding-bottom: 100px;\">\r\n\t<div class=\"form-hazard-creation2\">\r\n\t\t<mat-form-field class=\"example-full-width\">\r\n\t    \t<input matInput placeholder=\"Category\" value=\"\">\r\n\t  \t</mat-form-field>\r\n\t</div>\r\n\t<div fxLayout=\"row\" class=\"form-hazard-creation\">\r\n\t\t<div fxLayout=\"column\" class=\"clm\">\r\n\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Priority\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Serv Class\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t  \t  \t<input matInput placeholder=\"Protection\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Test Monts\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Seasonal\" value=\"\">\r\n\t\t  \t</mat-form-field> \r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Heat Type\" value=\"\">\r\n\t\t  \t</mat-form-field> \r\n\t\t</div>\r\n\t\t<div fxLayout=\"column\" class=\"clm\">\r\n\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Meter\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Line Size\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t  \t  \t<input matInput placeholder=\"Line status\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Tap #\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Link\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Device #\" value=\"\">\r\n\t\t  \t</mat-form-field> \r\n\t\t</div>\r\n\t\t<div fxLayout=\"column\" class=\"clm\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t  <mat-select placeholder=\"Device Status\">\r\n\t\t\t    <mat-option>Due Install</mat-option>\r\n\t\t\t    <mat-option>Due Repair</mat-option>\r\n\t\t\t    <mat-option>Inactive</mat-option>\r\n\t\t\t    <mat-option>Installed</mat-option>\r\n\t\t\t    <mat-option>Internal Not Tested</mat-option>\r\n\t\t\t    <mat-option>Not Installed</mat-option>\r\n\t\t\t    <mat-option>Removed</mat-option>\r\n\t\t\t    <mat-option>Replaced</mat-option>\r\n\t\t\t  </mat-select>\r\n\t\t\t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Serial #\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t  \t  \t<input matInput placeholder=\"Manufacturer\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Model\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Type\" value=\"\">\r\n\t\t  \t</mat-form-field>\r\n\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    \t<input matInput placeholder=\"Installer\" value=\"\">\r\n\t\t  \t</mat-form-field> \r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"form-hazard-creation1\">\r\n\t\t<mat-form-field class=\"example-full-width\">\r\n\t    \t<input matInput placeholder=\"Location\" value=\"\">\r\n\t  \t</mat-form-field>\r\n\t  \t<mat-form-field class=\"example-full-width\">\r\n\t    \t<input matInput placeholder=\"Meter Location\" value=\"\">\r\n\t  \t</mat-form-field> \r\n\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t    <textarea matInput placeholder=\"Recommendation\"></textarea>\r\n\t\t</mat-form-field>\r\n\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t    <textarea matInput placeholder=\"Notes\"></textarea>\r\n\t\t</mat-form-field>\r\n\t</div>\r\n\t<div class=\"form-hazard-creation-btn\">\r\n\t\t<button mat-raised-button class=\"sitebtn\" >Create</button>\r\n\t</div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/hazard/hazard/hazard.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/apps/hazard/hazard/hazard.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.form-hazard-creation {\n  width: 100%;\n  padding: 50px; }\n\n.form-hazard-creation1 {\n  width: 100%;\n  padding: 0 70px; }\n\n.form-hazard-creation2 {\n  width: 100%;\n  padding: 70px 70px 0px 70px; }\n\n.clm {\n  width: 30%;\n  padding: 20px; }\n\n.form-hazard-creation-btn {\n  text-align: center; }\n\n.sitebtn {\n  background: #38ace0;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/hazard/hazard/hazard.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/content/apps/hazard/hazard/hazard.component.ts ***!
  \*********************************************************************/
/*! exports provided: HazardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HazardComponent", function() { return HazardComponent; });
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

var HazardComponent = /** @class */ (function () {
    function HazardComponent() {
    }
    HazardComponent.prototype.ngOnInit = function () {
    };
    HazardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hazard',
            template: __webpack_require__(/*! ./hazard.component.html */ "./src/app/main/content/apps/hazard/hazard/hazard.component.html"),
            styles: [__webpack_require__(/*! ./hazard.component.scss */ "./src/app/main/content/apps/hazard/hazard/hazard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HazardComponent);
    return HazardComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/hazard/hazard/hazard.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/content/apps/hazard/hazard/hazard.module.ts ***!
  \******************************************************************/
/*! exports provided: HazardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HazardModule", function() { return HazardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hazard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hazard.component */ "./src/app/main/content/apps/hazard/hazard/hazard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '**',
        component: _hazard_component__WEBPACK_IMPORTED_MODULE_3__["HazardComponent"],
    }
];
var HazardModule = /** @class */ (function () {
    function HazardModule() {
    }
    HazardModule = __decorate([
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
            declarations: [_hazard_component__WEBPACK_IMPORTED_MODULE_3__["HazardComponent"]]
        })
    ], HazardModule);
    return HazardModule;
}());



/***/ })

}]);
//# sourceMappingURL=hazard-hazard-hazard-module.js.map