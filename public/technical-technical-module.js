(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["technical-technical-module"],{

/***/ "./src/app/main/content/apps/technical/technical.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technical.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\t\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"h1 mt-16\">Technical Information</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n    <div fxLayout=\"column\" style=\"width: 100%\">\r\n    \t<div class=\"mat-elevation-z4 p-20 m-20\">\r\n\t\t\t<mat-tab-group>\r\n\t\t\t  \t<mat-tab label=\"Device Type\">\r\n\t\t\t  \t\t<div flex fxLayoutAlign=\"right\" style=\"float: right;\">\r\n                        <a href=\"apps/technicals/create\"><mat-icon _ngcontent-c35=\"\" class=\"add-btn secondary-text s-30 mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">add</mat-icon></a>\r\n                    </div>\t\t\t  \t\t\r\n\t\t\t\t\t<table class=\"table\">\r\n                        <thead>\r\n\t\t                  <tr>\r\n\t\t                    <th>Device Code</th>\r\n\t\t                    <th>Manufacturer</th>\r\n                            <th>Device Type</th>\r\n                            <th>Model</th>\r\n                            <th>Installed Date</th>\r\n\t\t                  </tr>\r\n\t\t                </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let device of devices\">\r\n                              <td><a href=\"apps/technicals/details/{{device.DeviceID}}\">{{device.DeviceID}}</a></td>\r\n                              <td>{{device.Manufacturer}}</td>\r\n                              <td>{{device.DeviceType}}</td>\r\n                              <td>{{device.Model}}</td>\r\n                              <td>{{device.InstalledDate}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\t\t\t  \t</mat-tab>\r\n\t\t\t  \t<mat-tab label=\"Technician Company\">\t\t\t  \t\t\r\n\t\t\t\t\t<div flex fxLayoutAlign=\"right\" style=\"float: right;\">\r\n                        <a href=\"apps/technicialcompany/create\"><mat-icon _ngcontent-c35=\"\" class=\"add-btn secondary-text s-30 mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">add</mat-icon></a>\r\n                    </div>\t\t\t  \t\t\r\n\t\t\t\t\t<table class=\"table\">\r\n                        <thead>\r\n\t\t                  <tr>\r\n\t\t                    <th>Company ID</th>\r\n\t\t                    <th>Company Name</th>\r\n                            <th>Address</th>\r\n                            <th>City</th>\r\n                            <th>State</th>\r\n                            <th>Phone</th>\r\n\t\t                    <th>Email</th>\r\n\t\t                  </tr>\r\n\t\t                </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let company of companies\">\r\n                              <td><a href=\"apps/technicialcompany/details/{{company.CompanyID}}\">{{company.CompanyID}}</a></td>\r\n                              <td>{{company.CompanyName}}</td>\r\n                              <td>{{company.Address}}</td>\r\n                              <td>{{company.City}}</td>\r\n                              <td>{{company.State}}</td>\r\n                              <td>{{company.Phone}}</td>\r\n                              <td>{{company.Email}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\t\t\t  \t</mat-tab>\r\n\t\t\t  \t<mat-tab label=\"Test Kit\">\t\t\t  \t\t\r\n\t\t\t\t\t<div flex fxLayoutAlign=\"right\" style=\"float: right;\">\r\n                        <a href=\"apps/testkit/create\"><mat-icon _ngcontent-c35=\"\" class=\"add-btn secondary-text s-30 mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">add</mat-icon></a>\r\n                    </div>\t\t\t  \t\t\r\n\t\t\t\t\t<table class=\"table\">\r\n                        <thead>\r\n\t\t                  <tr>\r\n\t\t                    <th>Serial No</th>\r\n\t\t                    <th>Manufacturer</th>\r\n\t\t                    <th>Model</th>\r\n                            <th>Purchase</th>\r\n                            <th>Expiry</th>\r\n\t\t                  </tr>\r\n\t\t                </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let testkit of testkits\">\r\n                              <td><a href=\"apps/testkit/details/{{testkit.TestKitID}}\">{{testkit.TestKitID}}</a></td>\r\n                              <td>{{testkit.Manufacturer}}</td>\r\n                              <td>{{testkit.Model}}</td>\r\n                              <td>{{testkit.Purchase}}</td>\r\n                              <td>{{testkit.Expiry}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\t\t\t  \t</mat-tab>\r\n\t\t\t  \t<mat-tab label=\"Technician\">\t\t\t  \t\t\r\n\t\t\t\t\t<div flex fxLayoutAlign=\"right\" style=\"float: right;\">\r\n                        <a href=\"apps/technician/create\"><mat-icon _ngcontent-c35=\"\" class=\"add-btn secondary-text s-30 mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">add</mat-icon></a>\r\n                    </div>\t\t\t  \t\t\r\n\t\t\t\t\t<table class=\"table\">\r\n                        <thead>\r\n\t\t                  <tr>\r\n\t\t                    <th>Technician Name</th>\r\n\t\t                    <th>Expiry</th>\r\n\t\t\t\t\t\t\t<th>Survey</th>\r\n                            <th>Installation Expiry</th>\r\n                            <th>Repair Expiry</th>\r\n\t\t                  </tr>\r\n\t\t                </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let technician of technicians\">\r\n                              <td><a href=\"apps/technician/details/{{technician.TechnicianID}}\">{{technician.TechnicianName}}</a></td>\r\n                              <td>{{technician.Expiry}}</td>\r\n                              <td>{{technician.Survey}}</td>\r\n\t\t\t\t\t\t\t  <td>{{technician.InstallationExpiry}}</td>\r\n\t\t\t\t\t\t\t  <td>{{technician.RepairExpiry}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\t\t\t  \t</mat-tab>\r\n\t\t\t</mat-tab-group>\r\n\t\t</div>\t\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/technical/technical.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technical.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.form-hazard-creation {\n  width: 100%;\n  padding: 50px; }\n\n.clm {\n  width: 30%;\n  padding: 20px; }\n\n.form-hazard-creation-btn {\n  text-align: center; }\n\n.add-btn {\n  background: #d3d3d3;\n  border-radius: 50%;\n  float: right;\n  margin: 15px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/technical/technical.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technical.component.ts ***!
  \********************************************************************/
/*! exports provided: TechnicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalComponent", function() { return TechnicalComponent; });
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

var Device_DATA = "[\n    {\n        \"DeviceID\": \"1001\",\n       \"DeviceType\": \"DC\",\n        \"DeviceName\": \"Watts\",\n        \"InstalledDate\": \"13/5/2018\",\n        \"Manufacturer\":\"Watts\",\n        \"Model\":\"007M1QT\"\n    },\n    {\n      \"DeviceID\": \"1002\",\n     \"DeviceType\": \"RP\",\n      \"DeviceName\": \"APPOLLO\",\n      \"InstalledDate\": \"13/6/2018\",\n      \"Manufacturer\":\"Watts\",\n      \"Model\":\"007M1QT\"\n  },\n  {\n    \"DeviceID\": \"1003\",\n   \"DeviceType\": \"RPZ\",\n    \"DeviceName\": \"WILKINS\",\n    \"InstalledDate\": \"13/4/2018\",\n    \"Manufacturer\":\"Watts\",\n    \"Model\":\"007M1QT\"\n}\n    \n  ]";
var COMPANY_DATA = "[\n    {\n        \"CompanyID\": \"1\",\n       \"CompanyName\": \"FRANK J. STRAHL & SONS, INC.\",\n        \"Address\": \"401 NORTH WASHINGTON AVE\",\n        \"City\": \"DANVILLE\",\n        \"State\":\"IL\",\n        \"Phone\":\"217-446-7890\",\n        \"Email\": \"jackiev@getzfire.com\"\n    },\n    {\n      \"CompanyID\": \"2\",\n     \"CompanyName\": \"TILLEY FIRE EQUIPMENT COMPANY\",\n      \"Address\": \"280 N. BROAD ST\",\n      \"City\": \"DOYLESTOWN\",\n      \"State\":\"PA\",\n      \"Phone\":\"217-446-7892\",\n      \"Email\": \"doyiev@getzfire.com\"\n  },\n  {\n    \"CompanyID\": \"3\",\n   \"CompanyName\": \"GETZ FIRE EQUIPMENT CO.\",\n    \"Address\": \"1615 SW ADAMS ST\",\n    \"City\": \"PEORIA\",\n    \"State\":\"IL\",\n    \"Phone\":\"217-446-7893\",\n    \"Email\": \"jackiev1@getzfire.com\"\n}\n    \n  ]";
var TestKit_DATA = "[\n    {\n        \"TestKitID\": \"1939\",\n       \"SerialNo\": \"305770\",\n       \"Manufacturer\":\"Mid-West Instruments\",\n       \"Model\":\"007M1QT\",\n       \"Purchase\":\"05/20/2012\",\n       \"Expiry\":\"05/20/2013\"\n    },\n    {\n      \"TestKitID\": \"1940\",\n      \"SerialNo\": \"305772\",\n      \"Manufacturer\":\"Zurn-Wilkins\",\n      \"Model\":\"007M1QT\",\n      \"Purchase\":\"05/20/2013\",\n      \"Expiry\":\"05/20/2014\"\n  },\n  {\n    \"TestKitID\": \"1941\",\n    \"SerialNo\": \"305773\",\n    \"Manufacturer\":\"WATTS TSKA\",\n    \"Model\":\"007M1QT\",\n    \"Purchase\":\"05/20/2015\",\n    \"Expiry\":\"05/20/2016\"\n}\n  ]";
var Technician_DATA = "[\n    {\n       \"TechnicianID\": \"836832\",\n       \"TechnicianName\": \"KEITH J RUZOWICZ\",\n       \"Expiry\":\"05/20/2012\",\n       \"Survey\":\"05/20/2012\",\n       \"InstallationExpiry\":\"05/20/2012\",\n       \"RepairExpiry\":\"05/20/2013\"\n    },\n    {\n      \"TechnicianID\": \"836833\",\n      \"TechnicianName\": \"WILLIAM R\",\n      \"Expiry\":\"05/20/2011\",\n      \"Survey\":\"05/20/2012\",\n      \"InstallationExpiry\":\"05/20/2014\",\n      \"RepairExpiry\":\"05/20/2015\"\n  },\n  {\n    \"TechnicianID\": \"836834\",\n    \"TechnicianName\": \"STEPHEN\",\n    \"Expiry\":\"05/20/2012\",\n    \"Survey\":\"05/20/2013\",\n    \"InstallationExpiry\":\"05/10/2012\",\n    \"RepairExpiry\":\"05/20/2016\"\n}\n  ]";
var TechnicalComponent = /** @class */ (function () {
    function TechnicalComponent() {
    }
    TechnicalComponent.prototype.ngOnInit = function () {
        this.devices = JSON.parse(Device_DATA);
        this.companies = JSON.parse(COMPANY_DATA);
        this.testkits = JSON.parse(TestKit_DATA);
        this.technicians = JSON.parse(Technician_DATA);
        console.log(this.companies);
    };
    TechnicalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-technnical',
            template: __webpack_require__(/*! ./technical.component.html */ "./src/app/main/content/apps/technical/technical.component.html"),
            styles: [__webpack_require__(/*! ./technical.component.scss */ "./src/app/main/content/apps/technical/technical.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], TechnicalComponent);
    return TechnicalComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/technical/technical.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technical.module.ts ***!
  \*****************************************************************/
/*! exports provided: TechnicalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalModule", function() { return TechnicalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _technical_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./technical.component */ "./src/app/main/content/apps/technical/technical.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
        component: _technical_component__WEBPACK_IMPORTED_MODULE_2__["TechnicalComponent"]
    }
];
var TechnicalModule = /** @class */ (function () {
    function TechnicalModule() {
    }
    TechnicalModule.prototype.CreateHazard = function (test) {
        alert(test);
    };
    TechnicalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
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
            declarations: [_technical_component__WEBPACK_IMPORTED_MODULE_2__["TechnicalComponent"]]
        })
    ], TechnicalModule);
    return TechnicalModule;
}());



/***/ })

}]);
//# sourceMappingURL=technical-technical-module.js.map