(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/main/content/apps/site/site.service.ts":
/*!********************************************************!*\
  !*** ./src/app/main/content/apps/site/site.service.ts ***!
  \********************************************************/
/*! exports provided: SiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteService", function() { return SiteService; });
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


var SiteService = /** @class */ (function () {
    function SiteService(http) {
        this.http = http;
    }
    /**
      * Get Contacts
      * @returns {Promise<any>}
      */
    SiteService.prototype.getSites = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/site-sites')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    SiteService.prototype.getHazards = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/hazard-hazards')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    SiteService.prototype.getTests = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/test-tests')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    SiteService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getSites(),
                _this.getHazards(),
                _this.getTests()
            ]).then(function (_a) {
                var sites = _a[0], hazards = _a[1], tests = _a[2];
                _this.sites = sites; // sites.subscribe;
                _this.hazards = hazards;
                _this.tests = tests;
                console.log(_this.sites);
                resolve();
            }, reject);
        });
    };
    SiteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SiteService);
    return SiteService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map