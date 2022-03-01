(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-content-services-services-module"],{

/***/ "./src/app/main/content/services/config/config.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/content/services/config/config.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"config\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Services</span>\n            </div>\n            <div class=\"h2 mt-16\">Config</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>Config</code> is a custom built Fuse service allows to have a granule control over the Fuse. It can be\n            used for changing theme options (layout, color etc.) by component basis.\n        </p>\n\n        <div class=\"my-48\">\n            <h2>Usage</h2>\n            <p class=\"mat-grey-200-bg py-8\">\n\n                <fuse-highlight lang=\"typescript\">\n                    <textarea #source>\n\n                        export class SomeComponent\n                        {\n                            config: any;\n\n                            constructor(private fuseConfig: FuseConfigService)\n                            {\n                                // Subscribe to settings changed event\n                                this.fuseConfig.onConfigChanged.subscribe(\n                                    (newConfig) => {\n                                        this.config = newConfig;\n                                    }\n                                );\n                            }\n\n                            onInit(){\n\n                                // Fully customizable surroundings for this particular component\n                                this.fuseConfig.setConfig({\n                                    layout          : {\n                                        navigation      : 'left',       // 'right', 'left', 'top', none\n                                        navigationFolded: false,        // true, false\n                                        toolbar         : 'below',      // 'above', 'below', none\n                                        footer          : 'none'        // 'above', 'below', none\n                                        mode            : 'fullwidth'   // 'boxed', 'fullwidth'\n                                    },\n                                    colorClasses    : {\n                                        toolbar: 'mat-white-500-bg',\n                                        navbar : 'mat-fuse-dark-700-bg',\n                                        footer : 'mat-fuse-dark-900-bg'\n                                    },\n                                    customScrollbars: true,\n                                    routerAnimation : 'fadeIn'\n                                });\n                            }\n                        }\n\n                    </textarea>\n                </fuse-highlight>\n\n            </p>\n        </div>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/content/services/config/config.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/main/content/services/config/config.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/services/config/config.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/content/services/config/config.component.ts ***!
  \******************************************************************/
/*! exports provided: FuseConfigServiceDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseConfigServiceDocsComponent", function() { return FuseConfigServiceDocsComponent; });
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

var FuseConfigServiceDocsComponent = /** @class */ (function () {
    function FuseConfigServiceDocsComponent() {
    }
    FuseConfigServiceDocsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-config-service-docs',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/main/content/services/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.scss */ "./src/app/main/content/services/config/config.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseConfigServiceDocsComponent);
    return FuseConfigServiceDocsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/services/services.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/content/services/services.module.ts ***!
  \**********************************************************/
/*! exports provided: FuseServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseServicesModule", function() { return FuseServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/config.component */ "./src/app/main/content/services/config/config.component.ts");
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ "./src/app/main/content/services/splash-screen/splash-screen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'config',
        component: _config_config_component__WEBPACK_IMPORTED_MODULE_5__["FuseConfigServiceDocsComponent"]
    },
    {
        path: 'splash-screen',
        component: _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__["FuseSplashScreenServiceDocsComponent"]
    }
];
var FuseServicesModule = /** @class */ (function () {
    function FuseServicesModule() {
    }
    FuseServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _config_config_component__WEBPACK_IMPORTED_MODULE_5__["FuseConfigServiceDocsComponent"],
                _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_6__["FuseSplashScreenServiceDocsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"]
            ],
        })
    ], FuseServicesModule);
    return FuseServicesModule;
}());



/***/ }),

/***/ "./src/app/main/content/services/splash-screen/splash-screen.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/services/splash-screen/splash-screen.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"splash-screen\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Services</span>\n            </div>\n            <div class=\"h2 mt-16\">Splash Screen</div>\n        </div>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n\n        <p>\n            <code>Splash screen</code> is a custom built Fuse service allows to have a fully controllable splash\n            screen. It also has built state for application loading so it will always be available while the app\n            loads.\n        </p>\n\n        <div class=\"my-48\">\n            <h2>Usage</h2>\n            <p class=\"mat-grey-200-bg py-8\">\n\n                <fuse-highlight lang=\"typescript\">\n                    <textarea #source>\n\n                        export class SomeComponent\n                        {\n                            constructor(private fuseSplashScreen: FuseSplashScreenService) {}\n\n                            onInit(){\n                                this.fuseSplashScreen.show();\n                                this.fuseSplashScreen.hide();\n                            }\n                        }\n\n                    </textarea>\n                </fuse-highlight>\n\n            </p>\n        </div>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/content/services/splash-screen/splash-screen.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/services/splash-screen/splash-screen.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/services/splash-screen/splash-screen.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content/services/splash-screen/splash-screen.component.ts ***!
  \********************************************************************************/
/*! exports provided: FuseSplashScreenServiceDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseSplashScreenServiceDocsComponent", function() { return FuseSplashScreenServiceDocsComponent; });
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

var FuseSplashScreenServiceDocsComponent = /** @class */ (function () {
    function FuseSplashScreenServiceDocsComponent() {
    }
    FuseSplashScreenServiceDocsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-splash-screen-service-docs',
            template: __webpack_require__(/*! ./splash-screen.component.html */ "./src/app/main/content/services/splash-screen/splash-screen.component.html"),
            styles: [__webpack_require__(/*! ./splash-screen.component.scss */ "./src/app/main/content/services/splash-screen/splash-screen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSplashScreenServiceDocsComponent);
    return FuseSplashScreenServiceDocsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=main-content-services-services-module.js.map