(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-content-apps-apps-module~main-content-components-components-module"],{

/***/ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js ***!
  \*******************************************************************************************/
/*! exports provided: MomentDateModule, MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateModule", function() { return MomentDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMomentDateModule", function() { return MatMomentDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateAdapter", function() { return MomentDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_FORMATS", function() { return MAT_MOMENT_DATE_FORMATS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ moment = moment__WEBPACK_IMPORTED_MODULE_3___default.a || moment__WEBPACK_IMPORTED_MODULE_3__;
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    var /** @type {?} */ valuesArray = Array(length);
    for (var /** @type {?} */ i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts Moment.js Dates for use with Angular Material.
 */
var MomentDateAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MomentDateAdapter, _super);
    function MomentDateAdapter(dateLocale) {
        var _this = _super.call(this) || this;
        _this.setLocale(dateLocale || moment.locale());
        return _this;
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    MomentDateAdapter.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        _super.prototype.setLocale.call(this, locale);
        var /** @type {?} */ momentLocaleData = moment.localeData(locale);
        this._localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            dates: range(31, function (i) { return _this.createDate(2017, 0, i + 1).format('D'); }),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).year();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).month();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).date();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getDayOfWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).day();
    };
    /**
     * @param {?} style
     * @return {?}
     */
    MomentDateAdapter.prototype.getMonthNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
        return style == 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.getDateNames = /**
     * @return {?}
     */
    function () {
        return this._localeData.dates;
    };
    /**
     * @param {?} style
     * @return {?}
     */
    MomentDateAdapter.prototype.getDayOfWeekNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        if (style == 'long') {
            return this._localeData.longDaysOfWeek;
        }
        if (style == 'short') {
            return this._localeData.shortDaysOfWeek;
        }
        return this._localeData.narrowDaysOfWeek;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getYearName = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).format('YYYY');
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        return this._localeData.firstDayOfWeek;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getNumDaysInMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).daysInMonth();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.clone = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.clone().locale(this.locale);
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.createDate = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        // Moment.js will create an invalid date if any of the components are out of bounds, but we
        // explicitly check each case so we can throw more descriptive errors.
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        var /** @type {?} */ result = moment({ year: year, month: month, date: date }).locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.today = /**
     * @return {?}
     */
    function () {
        return moment().locale(this.locale);
    };
    /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    MomentDateAdapter.prototype.parse = /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    function (value, parseFormat) {
        if (value && typeof value == 'string') {
            return moment(value, parseFormat, this.locale);
        }
        return value ? moment(value).locale(this.locale) : null;
    };
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    MomentDateAdapter.prototype.format = /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    function (date, displayFormat) {
        date = this.clone(date);
        if (!this.isValid(date)) {
            throw Error('MomentDateAdapter: Cannot format invalid date.');
        }
        return date.format(displayFormat);
    };
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarYears = /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    function (date, years) {
        return this.clone(date).add({ years: years });
    };
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarMonths = /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    function (date, months) {
        return this.clone(date).add({ months: months });
    };
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarDays = /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    function (date, days) {
        return this.clone(date).add({ days: days });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.toIso8601 = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).format();
    };
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     */
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    MomentDateAdapter.prototype.deserialize = /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ date;
        if (value instanceof Date) {
            date = moment(value);
        }
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            date = moment(value, moment.ISO_8601).locale(this.locale);
        }
        if (date && this.isValid(date)) {
            return date;
        }
        return _super.prototype.deserialize.call(this, value);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    MomentDateAdapter.prototype.isDateInstance = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return moment.isMoment(obj);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.isValid = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).isValid();
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.invalid = /**
     * @return {?}
     */
    function () {
        return moment.invalid();
    };
    MomentDateAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    MomentDateAdapter.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"],] },] },
    ]; };
    return MomentDateAdapter;
}(_angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var /** @type {?} */ MAT_MOMENT_DATE_FORMATS = {
    parse: {
        dateInput: 'l',
    },
    display: {
        dateInput: 'l',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MomentDateModule = /** @class */ (function () {
    function MomentDateModule() {
    }
    MomentDateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    providers: [
                        { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: MomentDateAdapter, deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] }
                    ],
                },] },
    ];
    return MomentDateModule;
}());
var ɵ0 = MAT_MOMENT_DATE_FORMATS;
var MatMomentDateModule = /** @class */ (function () {
    function MatMomentDateModule() {
    }
    MatMomentDateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [MomentDateModule],
                    providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: ɵ0 }],
                },] },
    ];
    return MatMomentDateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=material-moment-adapter.es5.js.map


/***/ }),

/***/ "./src/app/main/content/components/angular-material/angular-material.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/components/angular-material/angular-material.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth angular-material-element\" fusePerfectScrollbar>\n\n    <!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-icon class=\"secondary-text s-16\">home</mat-icon>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Components</span>\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\n                <span class=\"secondary-text\">Angular Material Elements</span>\n            </div>\n            <div class=\"h2 mt-16\">{{title}}</div>\n        </div>\n\n        <a mat-raised-button class=\"reference-button mat-white-bg mt-16 mt-sm-0\" href=\"https://material.angular.io/\" target=\"_blank\">\n            <mat-icon class=\"mr-8\">link</mat-icon>\n            <span>Reference</span>\n        </a>\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content p-24\">\n        <div *ngFor=\"let example of examples\">\n            <fuse-example-viewer [example]=\"example\"></fuse-example-viewer>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/content/components/angular-material/angular-material.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/components/angular-material/angular-material.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .angular-material-element > .content {\n  max-width: 960px; }\n"

/***/ }),

/***/ "./src/app/main/content/components/angular-material/angular-material.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/components/angular-material/angular-material.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FuseAngularMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseAngularMaterialComponent", function() { return FuseAngularMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _example_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example-components */ "./src/app/main/content/components/angular-material/example-components.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseAngularMaterialComponent = /** @class */ (function () {
    function FuseAngularMaterialComponent(route) {
        this.route = route;
    }
    FuseAngularMaterialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            var _title = _this.id.replace('-', ' ');
            _this.title = _title.charAt(0).toUpperCase() + _title.substring(1);
            _this.examples = _example_components__WEBPACK_IMPORTED_MODULE_2__["COMPONENT_MAP"][_this.id];
        });
    };
    FuseAngularMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-angular-material',
            template: __webpack_require__(/*! ./angular-material.component.html */ "./src/app/main/content/components/angular-material/angular-material.component.html"),
            styles: [__webpack_require__(/*! ./angular-material.component.scss */ "./src/app/main/content/components/angular-material/angular-material.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], FuseAngularMaterialComponent);
    return FuseAngularMaterialComponent;
}());



/***/ }),

/***/ "./src/app/main/content/components/angular-material/angular-material.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/content/components/angular-material/angular-material.module.ts ***!
  \*************************************************************************************/
/*! exports provided: FuseAngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseAngularMaterialModule", function() { return FuseAngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_main_content_components_angular_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/content/components/angular-material/material.module */ "./src/app/main/content/components/angular-material/material.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components/widget/widget.module */ "./src/@fuse/components/widget/widget.module.ts");
/* harmony import */ var _example_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example-components */ "./src/app/main/content/components/angular-material/example-components.ts");
/* harmony import */ var _example_viewer_example_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example-viewer/example-viewer */ "./src/app/main/content/components/angular-material/example-viewer/example-viewer.ts");
/* harmony import */ var _angular_material_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-material.component */ "./src/app/main/content/components/angular-material/angular-material.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'angular-material',
        children: [
            {
                path: ':id',
                component: _angular_material_component__WEBPACK_IMPORTED_MODULE_8__["FuseAngularMaterialComponent"]
            }
        ]
    }
];
var FuseAngularMaterialModule = /** @class */ (function () {
    function FuseAngularMaterialModule() {
    }
    FuseAngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _example_components__WEBPACK_IMPORTED_MODULE_6__["EXAMPLE_LIST"].slice(),
                _angular_material_component__WEBPACK_IMPORTED_MODULE_8__["FuseAngularMaterialComponent"],
                _example_viewer_example_viewer__WEBPACK_IMPORTED_MODULE_7__["FuseExampleViewerComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                app_main_content_components_angular_material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"],
                _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_5__["FuseWidgetModule"]
            ],
            entryComponents: _example_components__WEBPACK_IMPORTED_MODULE_6__["EXAMPLE_LIST"],
        })
    ], FuseAngularMaterialModule);
    return FuseAngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/main/content/components/angular-material/example-components.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content/components/angular-material/example-components.ts ***!
  \********************************************************************************/
/*! exports provided: COMPONENT_MAP, EXAMPLE_COMPONENTS, EXAMPLE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_MAP", function() { return COMPONENT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_COMPONENTS", function() { return EXAMPLE_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_LIST", function() { return EXAMPLE_LIST; });
/* harmony import */ var assets_angular_material_examples_autocomplete_auto_active_first_option_autocomplete_auto_active_first_option_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/angular-material-examples/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example */ "./src/assets/angular-material-examples/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example.ts");
/* harmony import */ var assets_angular_material_examples_autocomplete_display_autocomplete_display_example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/angular-material-examples/autocomplete-display/autocomplete-display-example */ "./src/assets/angular-material-examples/autocomplete-display/autocomplete-display-example.ts");
/* harmony import */ var assets_angular_material_examples_autocomplete_filter_autocomplete_filter_example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/angular-material-examples/autocomplete-filter/autocomplete-filter-example */ "./src/assets/angular-material-examples/autocomplete-filter/autocomplete-filter-example.ts");
/* harmony import */ var assets_angular_material_examples_autocomplete_overview_autocomplete_overview_example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/angular-material-examples/autocomplete-overview/autocomplete-overview-example */ "./src/assets/angular-material-examples/autocomplete-overview/autocomplete-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_autocomplete_simple_autocomplete_simple_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/angular-material-examples/autocomplete-simple/autocomplete-simple-example */ "./src/assets/angular-material-examples/autocomplete-simple/autocomplete-simple-example.ts");
/* harmony import */ var assets_angular_material_examples_button_overview_button_overview_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/angular-material-examples/button-overview/button-overview-example */ "./src/assets/angular-material-examples/button-overview/button-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_button_toggle_exclusive_button_toggle_exclusive_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/angular-material-examples/button-toggle-exclusive/button-toggle-exclusive-example */ "./src/assets/angular-material-examples/button-toggle-exclusive/button-toggle-exclusive-example.ts");
/* harmony import */ var assets_angular_material_examples_button_toggle_overview_button_toggle_overview_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/angular-material-examples/button-toggle-overview/button-toggle-overview-example */ "./src/assets/angular-material-examples/button-toggle-overview/button-toggle-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_button_types_button_types_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/angular-material-examples/button-types/button-types-example */ "./src/assets/angular-material-examples/button-types/button-types-example.ts");
/* harmony import */ var assets_angular_material_examples_card_fancy_card_fancy_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/angular-material-examples/card-fancy/card-fancy-example */ "./src/assets/angular-material-examples/card-fancy/card-fancy-example.ts");
/* harmony import */ var assets_angular_material_examples_card_overview_card_overview_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/angular-material-examples/card-overview/card-overview-example */ "./src/assets/angular-material-examples/card-overview/card-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_cdk_table_basic_cdk_table_basic_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/angular-material-examples/cdk-table-basic/cdk-table-basic-example */ "./src/assets/angular-material-examples/cdk-table-basic/cdk-table-basic-example.ts");
/* harmony import */ var assets_angular_material_examples_checkbox_configurable_checkbox_configurable_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/angular-material-examples/checkbox-configurable/checkbox-configurable-example */ "./src/assets/angular-material-examples/checkbox-configurable/checkbox-configurable-example.ts");
/* harmony import */ var assets_angular_material_examples_checkbox_overview_checkbox_overview_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/angular-material-examples/checkbox-overview/checkbox-overview-example */ "./src/assets/angular-material-examples/checkbox-overview/checkbox-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_chips_input_chips_input_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/angular-material-examples/chips-input/chips-input-example */ "./src/assets/angular-material-examples/chips-input/chips-input-example.ts");
/* harmony import */ var assets_angular_material_examples_chips_overview_chips_overview_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/angular-material-examples/chips-overview/chips-overview-example */ "./src/assets/angular-material-examples/chips-overview/chips-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_chips_stacked_chips_stacked_example__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/angular-material-examples/chips-stacked/chips-stacked-example */ "./src/assets/angular-material-examples/chips-stacked/chips-stacked-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_api_datepicker_api_example__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-api/datepicker-api-example */ "./src/assets/angular-material-examples/datepicker-api/datepicker-api-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_disabled_datepicker_disabled_example__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-disabled/datepicker-disabled-example */ "./src/assets/angular-material-examples/datepicker-disabled/datepicker-disabled-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_events_datepicker_events_example__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-events/datepicker-events-example */ "./src/assets/angular-material-examples/datepicker-events/datepicker-events-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_filter_datepicker_filter_example__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-filter/datepicker-filter-example */ "./src/assets/angular-material-examples/datepicker-filter/datepicker-filter-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_formats_datepicker_formats_example__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-formats/datepicker-formats-example */ "./src/assets/angular-material-examples/datepicker-formats/datepicker-formats-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_locale_datepicker_locale_example__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-locale/datepicker-locale-example */ "./src/assets/angular-material-examples/datepicker-locale/datepicker-locale-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_min_max_datepicker_min_max_example__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-min-max/datepicker-min-max-example */ "./src/assets/angular-material-examples/datepicker-min-max/datepicker-min-max-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_moment_datepicker_moment_example__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-moment/datepicker-moment-example */ "./src/assets/angular-material-examples/datepicker-moment/datepicker-moment-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_overview_datepicker_overview_example__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-overview/datepicker-overview-example */ "./src/assets/angular-material-examples/datepicker-overview/datepicker-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_start_view_datepicker_start_view_example__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-start-view/datepicker-start-view-example */ "./src/assets/angular-material-examples/datepicker-start-view/datepicker-start-view-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_touch_datepicker_touch_example__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-touch/datepicker-touch-example */ "./src/assets/angular-material-examples/datepicker-touch/datepicker-touch-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_value_datepicker_value_example__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-value/datepicker-value-example */ "./src/assets/angular-material-examples/datepicker-value/datepicker-value-example.ts");
/* harmony import */ var assets_angular_material_examples_dialog_content_dialog_content_example__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! assets/angular-material-examples/dialog-content/dialog-content-example */ "./src/assets/angular-material-examples/dialog-content/dialog-content-example.ts");
/* harmony import */ var assets_angular_material_examples_dialog_data_dialog_data_example__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! assets/angular-material-examples/dialog-data/dialog-data-example */ "./src/assets/angular-material-examples/dialog-data/dialog-data-example.ts");
/* harmony import */ var assets_angular_material_examples_dialog_elements_dialog_elements_example__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! assets/angular-material-examples/dialog-elements/dialog-elements-example */ "./src/assets/angular-material-examples/dialog-elements/dialog-elements-example.ts");
/* harmony import */ var assets_angular_material_examples_dialog_overview_dialog_overview_example__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! assets/angular-material-examples/dialog-overview/dialog-overview-example */ "./src/assets/angular-material-examples/dialog-overview/dialog-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_elevation_overview_elevation_overview_example__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! assets/angular-material-examples/elevation-overview/elevation-overview-example */ "./src/assets/angular-material-examples/elevation-overview/elevation-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_expansion_overview_expansion_overview_example__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! assets/angular-material-examples/expansion-overview/expansion-overview-example */ "./src/assets/angular-material-examples/expansion-overview/expansion-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_expansion_steps_expansion_steps_example__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! assets/angular-material-examples/expansion-steps/expansion-steps-example */ "./src/assets/angular-material-examples/expansion-steps/expansion-steps-example.ts");
/* harmony import */ var assets_angular_material_examples_form_field_custom_control_form_field_custom_control_example__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! assets/angular-material-examples/form-field-custom-control/form-field-custom-control-example */ "./src/assets/angular-material-examples/form-field-custom-control/form-field-custom-control-example.ts");
/* harmony import */ var assets_angular_material_examples_form_field_error_form_field_error_example__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! assets/angular-material-examples/form-field-error/form-field-error-example */ "./src/assets/angular-material-examples/form-field-error/form-field-error-example.ts");
/* harmony import */ var assets_angular_material_examples_form_field_hint_form_field_hint_example__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! assets/angular-material-examples/form-field-hint/form-field-hint-example */ "./src/assets/angular-material-examples/form-field-hint/form-field-hint-example.ts");
/* harmony import */ var assets_angular_material_examples_form_field_overview_form_field_overview_example__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! assets/angular-material-examples/form-field-overview/form-field-overview-example */ "./src/assets/angular-material-examples/form-field-overview/form-field-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_form_field_prefix_suffix_form_field_prefix_suffix_example__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! assets/angular-material-examples/form-field-prefix-suffix/form-field-prefix-suffix-example */ "./src/assets/angular-material-examples/form-field-prefix-suffix/form-field-prefix-suffix-example.ts");
/* harmony import */ var assets_angular_material_examples_form_field_theming_form_field_theming_example__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! assets/angular-material-examples/form-field-theming/form-field-theming-example */ "./src/assets/angular-material-examples/form-field-theming/form-field-theming-example.ts");
/* harmony import */ var assets_angular_material_examples_grid_list_dynamic_grid_list_dynamic_example__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! assets/angular-material-examples/grid-list-dynamic/grid-list-dynamic-example */ "./src/assets/angular-material-examples/grid-list-dynamic/grid-list-dynamic-example.ts");
/* harmony import */ var assets_angular_material_examples_grid_list_overview_grid_list_overview_example__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! assets/angular-material-examples/grid-list-overview/grid-list-overview-example */ "./src/assets/angular-material-examples/grid-list-overview/grid-list-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_icon_overview_icon_overview_example__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! assets/angular-material-examples/icon-overview/icon-overview-example */ "./src/assets/angular-material-examples/icon-overview/icon-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_input_clearable_input_clearable_example__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! assets/angular-material-examples/input-clearable/input-clearable-example */ "./src/assets/angular-material-examples/input-clearable/input-clearable-example.ts");
/* harmony import */ var assets_angular_material_examples_input_error_state_matcher_input_error_state_matcher_example__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! assets/angular-material-examples/input-error-state-matcher/input-error-state-matcher-example */ "./src/assets/angular-material-examples/input-error-state-matcher/input-error-state-matcher-example.ts");
/* harmony import */ var assets_angular_material_examples_input_errors_input_errors_example__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! assets/angular-material-examples/input-errors/input-errors-example */ "./src/assets/angular-material-examples/input-errors/input-errors-example.ts");
/* harmony import */ var assets_angular_material_examples_input_form_input_form_example__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! assets/angular-material-examples/input-form/input-form-example */ "./src/assets/angular-material-examples/input-form/input-form-example.ts");
/* harmony import */ var assets_angular_material_examples_input_hint_input_hint_example__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! assets/angular-material-examples/input-hint/input-hint-example */ "./src/assets/angular-material-examples/input-hint/input-hint-example.ts");
/* harmony import */ var assets_angular_material_examples_input_overview_input_overview_example__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! assets/angular-material-examples/input-overview/input-overview-example */ "./src/assets/angular-material-examples/input-overview/input-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_input_prefix_suffix_input_prefix_suffix_example__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! assets/angular-material-examples/input-prefix-suffix/input-prefix-suffix-example */ "./src/assets/angular-material-examples/input-prefix-suffix/input-prefix-suffix-example.ts");
/* harmony import */ var assets_angular_material_examples_list_overview_list_overview_example__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! assets/angular-material-examples/list-overview/list-overview-example */ "./src/assets/angular-material-examples/list-overview/list-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_list_sections_list_sections_example__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! assets/angular-material-examples/list-sections/list-sections-example */ "./src/assets/angular-material-examples/list-sections/list-sections-example.ts");
/* harmony import */ var assets_angular_material_examples_list_selection_list_selection_example__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! assets/angular-material-examples/list-selection/list-selection-example */ "./src/assets/angular-material-examples/list-selection/list-selection-example.ts");
/* harmony import */ var assets_angular_material_examples_menu_icons_menu_icons_example__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! assets/angular-material-examples/menu-icons/menu-icons-example */ "./src/assets/angular-material-examples/menu-icons/menu-icons-example.ts");
/* harmony import */ var assets_angular_material_examples_menu_overview_menu_overview_example__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! assets/angular-material-examples/menu-overview/menu-overview-example */ "./src/assets/angular-material-examples/menu-overview/menu-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_nested_menu_nested_menu_example__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! assets/angular-material-examples/nested-menu/nested-menu-example */ "./src/assets/angular-material-examples/nested-menu/nested-menu-example.ts");
/* harmony import */ var assets_angular_material_examples_paginator_configurable_paginator_configurable_example__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! assets/angular-material-examples/paginator-configurable/paginator-configurable-example */ "./src/assets/angular-material-examples/paginator-configurable/paginator-configurable-example.ts");
/* harmony import */ var assets_angular_material_examples_paginator_overview_paginator_overview_example__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! assets/angular-material-examples/paginator-overview/paginator-overview-example */ "./src/assets/angular-material-examples/paginator-overview/paginator-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_progress_bar_buffer_progress_bar_buffer_example__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! assets/angular-material-examples/progress-bar-buffer/progress-bar-buffer-example */ "./src/assets/angular-material-examples/progress-bar-buffer/progress-bar-buffer-example.ts");
/* harmony import */ var assets_angular_material_examples_progress_bar_configurable_progress_bar_configurable_example__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! assets/angular-material-examples/progress-bar-configurable/progress-bar-configurable-example */ "./src/assets/angular-material-examples/progress-bar-configurable/progress-bar-configurable-example.ts");
/* harmony import */ var assets_angular_material_examples_progress_bar_determinate_progress_bar_determinate_example__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! assets/angular-material-examples/progress-bar-determinate/progress-bar-determinate-example */ "./src/assets/angular-material-examples/progress-bar-determinate/progress-bar-determinate-example.ts");
/* harmony import */ var assets_angular_material_examples_progress_bar_indeterminate_progress_bar_indeterminate_example__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! assets/angular-material-examples/progress-bar-indeterminate/progress-bar-indeterminate-example */ "./src/assets/angular-material-examples/progress-bar-indeterminate/progress-bar-indeterminate-example.ts");
/* harmony import */ var assets_angular_material_examples_progress_bar_query_progress_bar_query_example__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! assets/angular-material-examples/progress-bar-query/progress-bar-query-example */ "./src/assets/angular-material-examples/progress-bar-query/progress-bar-query-example.ts");
/* harmony import */ var assets_angular_material_examples_progress_spinner_configurable_progress_spinner_configurable_example__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! assets/angular-material-examples/progress-spinner-configurable/progress-spinner-configurable-example */ "./src/assets/angular-material-examples/progress-spinner-configurable/progress-spinner-configurable-example.ts");
/* harmony import */ var assets_angular_material_examples_progress_spinner_overview_progress_spinner_overview_example__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! assets/angular-material-examples/progress-spinner-overview/progress-spinner-overview-example */ "./src/assets/angular-material-examples/progress-spinner-overview/progress-spinner-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_radio_ng_model_radio_ng_model_example__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! assets/angular-material-examples/radio-ng-model/radio-ng-model-example */ "./src/assets/angular-material-examples/radio-ng-model/radio-ng-model-example.ts");
/* harmony import */ var assets_angular_material_examples_radio_overview_radio_overview_example__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! assets/angular-material-examples/radio-overview/radio-overview-example */ "./src/assets/angular-material-examples/radio-overview/radio-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_select_custom_trigger_select_custom_trigger_example__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! assets/angular-material-examples/select-custom-trigger/select-custom-trigger-example */ "./src/assets/angular-material-examples/select-custom-trigger/select-custom-trigger-example.ts");
/* harmony import */ var assets_angular_material_examples_select_disabled_select_disabled_example__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! assets/angular-material-examples/select-disabled/select-disabled-example */ "./src/assets/angular-material-examples/select-disabled/select-disabled-example.ts");
/* harmony import */ var assets_angular_material_examples_select_error_state_matcher_select_error_state_matcher_example__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! assets/angular-material-examples/select-error-state-matcher/select-error-state-matcher-example */ "./src/assets/angular-material-examples/select-error-state-matcher/select-error-state-matcher-example.ts");
/* harmony import */ var assets_angular_material_examples_select_form_select_form_example__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! assets/angular-material-examples/select-form/select-form-example */ "./src/assets/angular-material-examples/select-form/select-form-example.ts");
/* harmony import */ var assets_angular_material_examples_select_hint_error_select_hint_error_example__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! assets/angular-material-examples/select-hint-error/select-hint-error-example */ "./src/assets/angular-material-examples/select-hint-error/select-hint-error-example.ts");
/* harmony import */ var assets_angular_material_examples_select_multiple_select_multiple_example__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! assets/angular-material-examples/select-multiple/select-multiple-example */ "./src/assets/angular-material-examples/select-multiple/select-multiple-example.ts");
/* harmony import */ var assets_angular_material_examples_select_no_ripple_select_no_ripple_example__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! assets/angular-material-examples/select-no-ripple/select-no-ripple-example */ "./src/assets/angular-material-examples/select-no-ripple/select-no-ripple-example.ts");
/* harmony import */ var assets_angular_material_examples_select_optgroup_select_optgroup_example__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! assets/angular-material-examples/select-optgroup/select-optgroup-example */ "./src/assets/angular-material-examples/select-optgroup/select-optgroup-example.ts");
/* harmony import */ var assets_angular_material_examples_select_overview_select_overview_example__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! assets/angular-material-examples/select-overview/select-overview-example */ "./src/assets/angular-material-examples/select-overview/select-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_select_panel_class_select_panel_class_example__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! assets/angular-material-examples/select-panel-class/select-panel-class-example */ "./src/assets/angular-material-examples/select-panel-class/select-panel-class-example.ts");
/* harmony import */ var assets_angular_material_examples_select_reset_select_reset_example__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! assets/angular-material-examples/select-reset/select-reset-example */ "./src/assets/angular-material-examples/select-reset/select-reset-example.ts");
/* harmony import */ var assets_angular_material_examples_select_value_binding_select_value_binding_example__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! assets/angular-material-examples/select-value-binding/select-value-binding-example */ "./src/assets/angular-material-examples/select-value-binding/select-value-binding-example.ts");
/* harmony import */ var assets_angular_material_examples_sidenav_overview_sidenav_overview_example__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! assets/angular-material-examples/sidenav-overview/sidenav-overview-example */ "./src/assets/angular-material-examples/sidenav-overview/sidenav-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_slide_toggle_configurable_slide_toggle_configurable_example__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! assets/angular-material-examples/slide-toggle-configurable/slide-toggle-configurable-example */ "./src/assets/angular-material-examples/slide-toggle-configurable/slide-toggle-configurable-example.ts");
/* harmony import */ var assets_angular_material_examples_slide_toggle_forms_slide_toggle_forms_example__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! assets/angular-material-examples/slide-toggle-forms/slide-toggle-forms-example */ "./src/assets/angular-material-examples/slide-toggle-forms/slide-toggle-forms-example.ts");
/* harmony import */ var assets_angular_material_examples_slide_toggle_overview_slide_toggle_overview_example__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! assets/angular-material-examples/slide-toggle-overview/slide-toggle-overview-example */ "./src/assets/angular-material-examples/slide-toggle-overview/slide-toggle-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_slider_configurable_slider_configurable_example__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! assets/angular-material-examples/slider-configurable/slider-configurable-example */ "./src/assets/angular-material-examples/slider-configurable/slider-configurable-example.ts");
/* harmony import */ var assets_angular_material_examples_slider_overview_slider_overview_example__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! assets/angular-material-examples/slider-overview/slider-overview-example */ "./src/assets/angular-material-examples/slider-overview/slider-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_snack_bar_component_snack_bar_component_example__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! assets/angular-material-examples/snack-bar-component/snack-bar-component-example */ "./src/assets/angular-material-examples/snack-bar-component/snack-bar-component-example.ts");
/* harmony import */ var assets_angular_material_examples_snack_bar_overview_snack_bar_overview_example__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! assets/angular-material-examples/snack-bar-overview/snack-bar-overview-example */ "./src/assets/angular-material-examples/snack-bar-overview/snack-bar-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_sort_overview_sort_overview_example__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! assets/angular-material-examples/sort-overview/sort-overview-example */ "./src/assets/angular-material-examples/sort-overview/sort-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_stepper_overview_stepper_overview_example__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! assets/angular-material-examples/stepper-overview/stepper-overview-example */ "./src/assets/angular-material-examples/stepper-overview/stepper-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_table_basic_table_basic_example__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! assets/angular-material-examples/table-basic/table-basic-example */ "./src/assets/angular-material-examples/table-basic/table-basic-example.ts");
/* harmony import */ var assets_angular_material_examples_table_filtering_table_filtering_example__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! assets/angular-material-examples/table-filtering/table-filtering-example */ "./src/assets/angular-material-examples/table-filtering/table-filtering-example.ts");
/* harmony import */ var assets_angular_material_examples_table_http_table_http_example__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! assets/angular-material-examples/table-http/table-http-example */ "./src/assets/angular-material-examples/table-http/table-http-example.ts");
/* harmony import */ var assets_angular_material_examples_table_overview_table_overview_example__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! assets/angular-material-examples/table-overview/table-overview-example */ "./src/assets/angular-material-examples/table-overview/table-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_table_pagination_table_pagination_example__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! assets/angular-material-examples/table-pagination/table-pagination-example */ "./src/assets/angular-material-examples/table-pagination/table-pagination-example.ts");
/* harmony import */ var assets_angular_material_examples_table_sorting_table_sorting_example__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! assets/angular-material-examples/table-sorting/table-sorting-example */ "./src/assets/angular-material-examples/table-sorting/table-sorting-example.ts");
/* harmony import */ var assets_angular_material_examples_tabs_overview_tabs_overview_example__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! assets/angular-material-examples/tabs-overview/tabs-overview-example */ "./src/assets/angular-material-examples/tabs-overview/tabs-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_tabs_template_label_tabs_template_label_example__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! assets/angular-material-examples/tabs-template-label/tabs-template-label-example */ "./src/assets/angular-material-examples/tabs-template-label/tabs-template-label-example.ts");
/* harmony import */ var assets_angular_material_examples_toolbar_multirow_toolbar_multirow_example__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! assets/angular-material-examples/toolbar-multirow/toolbar-multirow-example */ "./src/assets/angular-material-examples/toolbar-multirow/toolbar-multirow-example.ts");
/* harmony import */ var assets_angular_material_examples_toolbar_overview_toolbar_overview_example__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! assets/angular-material-examples/toolbar-overview/toolbar-overview-example */ "./src/assets/angular-material-examples/toolbar-overview/toolbar-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_tooltip_overview_tooltip_overview_example__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! assets/angular-material-examples/tooltip-overview/tooltip-overview-example */ "./src/assets/angular-material-examples/tooltip-overview/tooltip-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_tooltip_position_tooltip_position_example__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! assets/angular-material-examples/tooltip-position/tooltip-position-example */ "./src/assets/angular-material-examples/tooltip-position/tooltip-position-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_custom_icon_datepicker_custom_icon_example__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-custom-icon/datepicker-custom-icon-example */ "./src/assets/angular-material-examples/datepicker-custom-icon/datepicker-custom-icon-example.ts");
/* harmony import */ var assets_angular_material_examples_sidenav_autosize_sidenav_autosize_example__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! assets/angular-material-examples/sidenav-autosize/sidenav-autosize-example */ "./src/assets/angular-material-examples/sidenav-autosize/sidenav-autosize-example.ts");
/* harmony import */ var assets_angular_material_examples_snack_bar_position_snack_bar_position_example__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! assets/angular-material-examples/snack-bar-position/snack-bar-position-example */ "./src/assets/angular-material-examples/snack-bar-position/snack-bar-position-example.ts");
/* harmony import */ var assets_angular_material_examples_table_selection_table_selection_example__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! assets/angular-material-examples/table-selection/table-selection-example */ "./src/assets/angular-material-examples/table-selection/table-selection-example.ts");
/* harmony import */ var assets_angular_material_examples_tooltip_delay_tooltip_delay_example__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! assets/angular-material-examples/tooltip-delay/tooltip-delay-example */ "./src/assets/angular-material-examples/tooltip-delay/tooltip-delay-example.ts");
/* harmony import */ var assets_angular_material_examples_tooltip_manual_tooltip_manual_example__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! assets/angular-material-examples/tooltip-manual/tooltip-manual-example */ "./src/assets/angular-material-examples/tooltip-manual/tooltip-manual-example.ts");
/* harmony import */ var assets_angular_material_examples_tooltip_modified_defaults_tooltip_modified_defaults_example__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! assets/angular-material-examples/tooltip-modified-defaults/tooltip-modified-defaults-example */ "./src/assets/angular-material-examples/tooltip-modified-defaults/tooltip-modified-defaults-example.ts");
/* harmony import */ var assets_angular_material_examples_divider_overview_divider_overview_example__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! assets/angular-material-examples/divider-overview/divider-overview-example */ "./src/assets/angular-material-examples/divider-overview/divider-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_form_field_label_form_field_label_example__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! assets/angular-material-examples/form-field-label/form-field-label-example */ "./src/assets/angular-material-examples/form-field-label/form-field-label-example.ts");
/* harmony import */ var assets_angular_material_examples_autocomplete_optgroup_autocomplete_optgroup_example__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! assets/angular-material-examples/autocomplete-optgroup/autocomplete-optgroup-example */ "./src/assets/angular-material-examples/autocomplete-optgroup/autocomplete-optgroup-example.ts");
/* harmony import */ var assets_angular_material_examples_badge_overview_badge_overview_example__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! assets/angular-material-examples/badge-overview/badge-overview-example */ "./src/assets/angular-material-examples/badge-overview/badge-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_bottom_sheet_overview_bottom_sheet_overview_example__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example */ "./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_cdk_tree_flat_cdk_tree_flat_example__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! assets/angular-material-examples/cdk-tree-flat/cdk-tree-flat-example */ "./src/assets/angular-material-examples/cdk-tree-flat/cdk-tree-flat-example.ts");
/* harmony import */ var assets_angular_material_examples_cdk_tree_nested_cdk_tree_nested_example__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! assets/angular-material-examples/cdk-tree-nested/cdk-tree-nested-example */ "./src/assets/angular-material-examples/cdk-tree-nested/cdk-tree-nested-example.ts");
/* harmony import */ var assets_angular_material_examples_chips_autocomplete_chips_autocomplete_example__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! assets/angular-material-examples/chips-autocomplete/chips-autocomplete-example */ "./src/assets/angular-material-examples/chips-autocomplete/chips-autocomplete-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_color_datepicker_color_example__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-color/datepicker-color-example */ "./src/assets/angular-material-examples/datepicker-color/datepicker-color-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_custom_header_datepicker_custom_header_example__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-custom-header/datepicker-custom-header-example */ "./src/assets/angular-material-examples/datepicker-custom-header/datepicker-custom-header-example.ts");
/* harmony import */ var assets_angular_material_examples_datepicker_views_selection_datepicker_views_selection_example__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! assets/angular-material-examples/datepicker-views-selection/datepicker-views-selection-example */ "./src/assets/angular-material-examples/datepicker-views-selection/datepicker-views-selection-example.ts");
/* harmony import */ var assets_angular_material_examples_expansion_expand_collapse_all_expansion_expand_collapse_all_example__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! assets/angular-material-examples/expansion-expand-collapse-all/expansion-expand-collapse-all-example */ "./src/assets/angular-material-examples/expansion-expand-collapse-all/expansion-expand-collapse-all-example.ts");
/* harmony import */ var assets_angular_material_examples_focus_monitor_directives_focus_monitor_directives_example__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! assets/angular-material-examples/focus-monitor-directives/focus-monitor-directives-example */ "./src/assets/angular-material-examples/focus-monitor-directives/focus-monitor-directives-example.ts");
/* harmony import */ var assets_angular_material_examples_focus_monitor_focus_via_focus_monitor_focus_via_example__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! assets/angular-material-examples/focus-monitor-focus-via/focus-monitor-focus-via-example */ "./src/assets/angular-material-examples/focus-monitor-focus-via/focus-monitor-focus-via-example.ts");
/* harmony import */ var assets_angular_material_examples_focus_monitor_overview_focus_monitor_overview_example__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! assets/angular-material-examples/focus-monitor-overview/focus-monitor-overview-example */ "./src/assets/angular-material-examples/focus-monitor-overview/focus-monitor-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_form_field_appearance_form_field_appearance_example__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! assets/angular-material-examples/form-field-appearance/form-field-appearance-example */ "./src/assets/angular-material-examples/form-field-appearance/form-field-appearance-example.ts");
/* harmony import */ var assets_angular_material_examples_icon_svg_icon_svg_example__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! assets/angular-material-examples/icon-svg/icon-svg-example */ "./src/assets/angular-material-examples/icon-svg/icon-svg-example.ts");
/* harmony import */ var assets_angular_material_examples_sidenav_backdrop_sidenav_backdrop_example__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! assets/angular-material-examples/sidenav-backdrop/sidenav-backdrop-example */ "./src/assets/angular-material-examples/sidenav-backdrop/sidenav-backdrop-example.ts");
/* harmony import */ var assets_angular_material_examples_sidenav_disable_close_sidenav_disable_close_example__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! assets/angular-material-examples/sidenav-disable-close/sidenav-disable-close-example */ "./src/assets/angular-material-examples/sidenav-disable-close/sidenav-disable-close-example.ts");
/* harmony import */ var assets_angular_material_examples_sidenav_drawer_overview_sidenav_drawer_overview_example__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! assets/angular-material-examples/sidenav-drawer-overview/sidenav-drawer-overview-example */ "./src/assets/angular-material-examples/sidenav-drawer-overview/sidenav-drawer-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_sidenav_fixed_sidenav_fixed_example__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! assets/angular-material-examples/sidenav-fixed/sidenav-fixed-example */ "./src/assets/angular-material-examples/sidenav-fixed/sidenav-fixed-example.ts");
/* harmony import */ var assets_angular_material_examples_sidenav_mode_sidenav_mode_example__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! assets/angular-material-examples/sidenav-mode/sidenav-mode-example */ "./src/assets/angular-material-examples/sidenav-mode/sidenav-mode-example.ts");
/* harmony import */ var assets_angular_material_examples_sidenav_open_close_sidenav_open_close_example__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! assets/angular-material-examples/sidenav-open-close/sidenav-open-close-example */ "./src/assets/angular-material-examples/sidenav-open-close/sidenav-open-close-example.ts");
/* harmony import */ var assets_angular_material_examples_sidenav_position_sidenav_position_example__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! assets/angular-material-examples/sidenav-position/sidenav-position-example */ "./src/assets/angular-material-examples/sidenav-position/sidenav-position-example.ts");
/* harmony import */ var assets_angular_material_examples_sidenav_responsive_sidenav_responsive_example__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! assets/angular-material-examples/sidenav-responsive/sidenav-responsive-example */ "./src/assets/angular-material-examples/sidenav-responsive/sidenav-responsive-example.ts");
/* harmony import */ var assets_angular_material_examples_slider_formatting_slider_formatting_example__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! assets/angular-material-examples/slider-formatting/slider-formatting-example */ "./src/assets/angular-material-examples/slider-formatting/slider-formatting-example.ts");
/* harmony import */ var assets_angular_material_examples_stepper_editable_stepper_editable_example__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! assets/angular-material-examples/stepper-editable/stepper-editable-example */ "./src/assets/angular-material-examples/stepper-editable/stepper-editable-example.ts");
/* harmony import */ var assets_angular_material_examples_stepper_optional_stepper_optional_example__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! assets/angular-material-examples/stepper-optional/stepper-optional-example */ "./src/assets/angular-material-examples/stepper-optional/stepper-optional-example.ts");
/* harmony import */ var assets_angular_material_examples_table_footer_row_table_footer_row_example__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! assets/angular-material-examples/table-footer-row/table-footer-row-example */ "./src/assets/angular-material-examples/table-footer-row/table-footer-row-example.ts");
/* harmony import */ var assets_angular_material_examples_table_native_only_table_native_only_example__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! assets/angular-material-examples/table-native-only/table-native-only-example */ "./src/assets/angular-material-examples/table-native-only/table-native-only-example.ts");
/* harmony import */ var assets_angular_material_examples_text_field_autofill_directive_text_field_autofill_directive_example__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! assets/angular-material-examples/text-field-autofill-directive/text-field-autofill-directive-example */ "./src/assets/angular-material-examples/text-field-autofill-directive/text-field-autofill-directive-example.ts");
/* harmony import */ var assets_angular_material_examples_text_field_autofill_monitor_text_field_autofill_monitor_example__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! assets/angular-material-examples/text-field-autofill-monitor/text-field-autofill-monitor-example */ "./src/assets/angular-material-examples/text-field-autofill-monitor/text-field-autofill-monitor-example.ts");
/* harmony import */ var assets_angular_material_examples_text_field_autosize_textarea_text_field_autosize_textarea_example__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! assets/angular-material-examples/text-field-autosize-textarea/text-field-autosize-textarea-example */ "./src/assets/angular-material-examples/text-field-autosize-textarea/text-field-autosize-textarea-example.ts");
/* harmony import */ var assets_angular_material_examples_tree_checklist_tree_checklist_example__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! assets/angular-material-examples/tree-checklist/tree-checklist-example */ "./src/assets/angular-material-examples/tree-checklist/tree-checklist-example.ts");
/* harmony import */ var assets_angular_material_examples_tree_dynamic_tree_dynamic_example__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! assets/angular-material-examples/tree-dynamic/tree-dynamic-example */ "./src/assets/angular-material-examples/tree-dynamic/tree-dynamic-example.ts");
/* harmony import */ var assets_angular_material_examples_tree_flat_overview_tree_flat_overview_example__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! assets/angular-material-examples/tree-flat-overview/tree-flat-overview-example */ "./src/assets/angular-material-examples/tree-flat-overview/tree-flat-overview-example.ts");
/* harmony import */ var assets_angular_material_examples_tree_loadmore_tree_loadmore_example__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! assets/angular-material-examples/tree-loadmore/tree-loadmore-example */ "./src/assets/angular-material-examples/tree-loadmore/tree-loadmore-example.ts");
/* harmony import */ var assets_angular_material_examples_tree_nested_overview_tree_nested_overview_example__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! assets/angular-material-examples/tree-nested-overview/tree-nested-overview-example */ "./src/assets/angular-material-examples/tree-nested-overview/tree-nested-overview-example.ts");




















































































































































var COMPONENT_MAP = {
    'autocomplete': [
        'autocomplete-overview',
        'autocomplete-auto-active-first-option',
        'autocomplete-display',
        'autocomplete-filter',
        'autocomplete-optgroup',
        'autocomplete-simple'
    ],
    'badge': [
        'badge-overview'
    ],
    'bottom-sheet': [
        'bottom-sheet-overview'
    ],
    'button': [
        'button-overview',
        'button-types'
    ],
    'button-toggle': [
        'button-toggle-overview',
        'button-toggle-exclusive'
    ],
    'card': [
        'card-overview',
        'card-fancy'
    ],
    // 'cdk-table'       : [
    //     'cdk-table-basic',
    //     'cdk-table-flat'
    // ],
    // 'cdk-tree'        : [
    //     'cdk-tree-nested'
    // ],
    'checkbox': [
        'checkbox-overview',
        'checkbox-configurable'
    ],
    'chips': [
        'chips-overview',
        'chips-autocomplete',
        'chips-input',
        'chips-stacked'
    ],
    'datepicker': [
        'datepicker-overview',
        'datepicker-api',
        'datepicker-color',
        'datepicker-custom-header',
        'datepicker-custom-icon',
        'datepicker-disabled',
        'datepicker-events',
        'datepicker-filter',
        'datepicker-formats',
        'datepicker-locale',
        'datepicker-min-max',
        'datepicker-moment',
        'datepicker-start-view',
        'datepicker-touch',
        'datepicker-value',
        'datepicker-views-selection'
    ],
    'dialog': [
        'dialog-overview',
        'dialog-content',
        'dialog-data',
        'dialog-elements'
    ],
    'divider': [
        'divider-overview'
    ],
    'elevation': [
        'elevation-overview'
    ],
    'expansion-panel': [
        'expansion-overview',
        'expansion-expand-collapse-all',
        'expansion-steps'
    ],
    // 'focus-monitor'   : [
    //     'focus-monitor-overview',
    //     'focus-monitor-directives',
    //     'focus-monitor-focus-via'
    // ],
    'form-field': [
        'form-field-overview',
        'form-field-appearance',
        'form-field-custom-control',
        'form-field-error',
        'form-field-hint',
        'form-field-label',
        'form-field-prefix-suffix',
        'form-field-theming'
    ],
    'grid-list': [
        'grid-list-overview',
        'grid-list-dynamic'
    ],
    'icon': [
        'icon-overview',
        'icon-svg'
    ],
    'input': [
        'input-overview',
        'input-clearable',
        'input-error-state-matcher',
        'input-errors',
        'input-form',
        'input-hint',
        'input-prefix-suffix'
    ],
    'list': [
        'list-overview',
        'list-sections',
        'list-selection'
    ],
    'menu': [
        'menu-overview',
        'menu-icons',
        'nested-menu'
    ],
    'paginator': [
        'paginator-overview',
        'paginator-configurable'
    ],
    'progress-bar': [
        'progress-bar-buffer',
        'progress-bar-configurable',
        'progress-bar-determinate',
        'progress-bar-indeterminate',
        'progress-bar-query'
    ],
    'progress-spinner': [
        'progress-spinner-overview',
        'progress-spinner-configurable'
    ],
    'radio-button': [
        'radio-overview',
        'radio-ng-model'
    ],
    'select': [
        'select-overview',
        'select-custom-trigger',
        'select-disabled',
        'select-error-state-matcher',
        'select-form',
        'select-hint-error',
        'select-multiple',
        'select-no-ripple',
        'select-optgroup',
        'select-panel-class',
        'select-reset',
        'select-value-binding'
    ],
    'sidenav': [
        // 'sidenav-overview',
        'sidenav-drawer-overview',
        'sidenav-autosize',
        'sidenav-backdrop'
        // 'sidenav-disable-close',
        // 'sidenav-fixed',
        // 'sidenav-mode',
        // 'sidenav-open-close',
        // 'sidenav-position',
        // 'sidenav-responsive'
    ],
    'slide-toggle': [
        'slide-toggle-overview',
        'slide-toggle-configurable',
        'slide-toggle-forms'
    ],
    'slider': [
        'slider-overview',
        'slider-configurable',
        'slider-formatting'
    ],
    'snackbar': [
        'snack-bar-overview',
        'snack-bar-position'
    ],
    'sort-header': [
        'sort-overview'
    ],
    'stepper': [
        'stepper-overview',
        'stepper-editable',
        'stepper-optional'
    ],
    'table': [
        'table-overview',
        'table-basic',
        'table-filtering',
        'table-footer-row',
        'table-http',
        'table-native-only',
        'table-pagination',
        'table-selection',
        'table-sorting'
    ],
    'tabs': [
        'tabs-overview',
        'tabs-template-label'
    ],
    'text-field': [
        'text-field-autofill-directive',
        'text-field-autofill-monitor',
        'text-field-autosize-textarea'
    ],
    'toolbar': [
        'toolbar-overview',
        'toolbar-multirow'
    ],
    'tooltip': [
        'tooltip-overview',
        'tooltip-delay',
        'tooltip-manual',
        'tooltip-modified-defaults',
        'tooltip-position'
    ],
    'tree': [
        'tree-flat-overview',
        'tree-nested-overview',
        'tree-checklist',
        'tree-dynamic',
        'tree-loadmore'
    ]
};
var EXAMPLE_COMPONENTS = {
    'autocomplete-auto-active-first-option': {
        title: 'Highlight the first autocomplete option',
        component: assets_angular_material_examples_autocomplete_auto_active_first_option_autocomplete_auto_active_first_option_example__WEBPACK_IMPORTED_MODULE_0__["AutocompleteAutoActiveFirstOptionExample"]
    },
    'autocomplete-display': {
        title: 'Display value autocomplete',
        component: assets_angular_material_examples_autocomplete_display_autocomplete_display_example__WEBPACK_IMPORTED_MODULE_1__["AutocompleteDisplayExample"]
    },
    'autocomplete-filter': {
        title: 'Filter autocomplete',
        component: assets_angular_material_examples_autocomplete_filter_autocomplete_filter_example__WEBPACK_IMPORTED_MODULE_2__["AutocompleteFilterExample"]
    },
    'autocomplete-optgroup': {
        title: 'Option groups autocomplete',
        component: assets_angular_material_examples_autocomplete_optgroup_autocomplete_optgroup_example__WEBPACK_IMPORTED_MODULE_112__["AutocompleteOptgroupExample"]
    },
    'autocomplete-overview': {
        title: 'Autocomplete overview',
        component: assets_angular_material_examples_autocomplete_overview_autocomplete_overview_example__WEBPACK_IMPORTED_MODULE_3__["AutocompleteOverviewExample"]
    },
    'autocomplete-simple': {
        title: 'Simple autocomplete',
        component: assets_angular_material_examples_autocomplete_simple_autocomplete_simple_example__WEBPACK_IMPORTED_MODULE_4__["AutocompleteSimpleExample"]
    },
    'badge-overview': {
        title: 'Badge overview',
        component: assets_angular_material_examples_badge_overview_badge_overview_example__WEBPACK_IMPORTED_MODULE_113__["BadgeOverviewExample"]
    },
    'bottom-sheet-overview': {
        title: 'Bottom Sheet Overview',
        component: assets_angular_material_examples_bottom_sheet_overview_bottom_sheet_overview_example__WEBPACK_IMPORTED_MODULE_114__["BottomSheetOverviewExample"],
        additionalFiles: ['bottom-sheet-overview-example-sheet.html'],
        selectorName: 'BottomSheetOverviewExample, BottomSheetOverviewExampleSheet'
    },
    'button-overview': {
        title: 'Basic buttons',
        component: assets_angular_material_examples_button_overview_button_overview_example__WEBPACK_IMPORTED_MODULE_5__["ButtonOverviewExample"]
    },
    'button-toggle-exclusive': {
        title: 'Exclusive selection',
        component: assets_angular_material_examples_button_toggle_exclusive_button_toggle_exclusive_example__WEBPACK_IMPORTED_MODULE_6__["ButtonToggleExclusiveExample"]
    },
    'button-toggle-overview': {
        title: 'Basic button-toggles',
        component: assets_angular_material_examples_button_toggle_overview_button_toggle_overview_example__WEBPACK_IMPORTED_MODULE_7__["ButtonToggleOverviewExample"]
    },
    'button-types': {
        title: 'Button varieties',
        component: assets_angular_material_examples_button_types_button_types_example__WEBPACK_IMPORTED_MODULE_8__["ButtonTypesExample"]
    },
    'card-fancy': {
        title: 'Card with multiple sections',
        component: assets_angular_material_examples_card_fancy_card_fancy_example__WEBPACK_IMPORTED_MODULE_9__["CardFancyExample"]
    },
    'card-overview': {
        title: 'Basic cards',
        component: assets_angular_material_examples_card_overview_card_overview_example__WEBPACK_IMPORTED_MODULE_10__["CardOverviewExample"]
    },
    'cdk-table-basic': {
        title: 'Basic CDK data-table',
        component: assets_angular_material_examples_cdk_table_basic_cdk_table_basic_example__WEBPACK_IMPORTED_MODULE_11__["CdkTableBasicExample"]
    },
    'cdk-tree-flat': {
        title: 'Tree with flat nodes',
        component: assets_angular_material_examples_cdk_tree_flat_cdk_tree_flat_example__WEBPACK_IMPORTED_MODULE_115__["CdkTreeFlatExample"]
    },
    'cdk-tree-nested': {
        title: 'Tree with nested nodes',
        component: assets_angular_material_examples_cdk_tree_nested_cdk_tree_nested_example__WEBPACK_IMPORTED_MODULE_116__["CdkTreeNestedExample"]
    },
    'checkbox-configurable': {
        title: 'Configurable checkbox',
        component: assets_angular_material_examples_checkbox_configurable_checkbox_configurable_example__WEBPACK_IMPORTED_MODULE_12__["CheckboxConfigurableExample"]
    },
    'checkbox-overview': {
        title: 'Basic checkboxes',
        component: assets_angular_material_examples_checkbox_overview_checkbox_overview_example__WEBPACK_IMPORTED_MODULE_13__["CheckboxOverviewExample"]
    },
    'chips-autocomplete': {
        title: 'Chips Autocomplete',
        component: assets_angular_material_examples_chips_autocomplete_chips_autocomplete_example__WEBPACK_IMPORTED_MODULE_117__["ChipsAutocompleteExample"]
    },
    'chips-input': {
        title: 'Chips with input',
        component: assets_angular_material_examples_chips_input_chips_input_example__WEBPACK_IMPORTED_MODULE_14__["ChipsInputExample"]
    },
    'chips-overview': {
        title: 'Basic chips',
        component: assets_angular_material_examples_chips_overview_chips_overview_example__WEBPACK_IMPORTED_MODULE_15__["ChipsOverviewExample"]
    },
    'chips-stacked': {
        title: 'Stacked chips',
        component: assets_angular_material_examples_chips_stacked_chips_stacked_example__WEBPACK_IMPORTED_MODULE_16__["ChipsStackedExample"]
    },
    'datepicker-api': {
        title: 'Datepicker open method',
        component: assets_angular_material_examples_datepicker_api_datepicker_api_example__WEBPACK_IMPORTED_MODULE_17__["DatepickerApiExample"]
    },
    'datepicker-color': {
        title: 'Datepicker palette colors',
        component: assets_angular_material_examples_datepicker_color_datepicker_color_example__WEBPACK_IMPORTED_MODULE_118__["DatepickerColorExample"]
    },
    'datepicker-custom-header': {
        title: 'Datepicker with custom calendar header',
        component: assets_angular_material_examples_datepicker_custom_header_datepicker_custom_header_example__WEBPACK_IMPORTED_MODULE_119__["DatepickerCustomHeaderExample"],
        selectorName: 'DatepickerCustomHeaderExample, ExampleHeader'
    },
    'datepicker-custom-icon': {
        title: 'Datepicker with custom icon',
        component: assets_angular_material_examples_datepicker_custom_icon_datepicker_custom_icon_example__WEBPACK_IMPORTED_MODULE_103__["DatepickerCustomIconExample"]
    },
    'datepicker-disabled': {
        title: 'Disabled datepicker',
        component: assets_angular_material_examples_datepicker_disabled_datepicker_disabled_example__WEBPACK_IMPORTED_MODULE_18__["DatepickerDisabledExample"]
    },
    'datepicker-events': {
        title: 'Datepicker input and change events',
        component: assets_angular_material_examples_datepicker_events_datepicker_events_example__WEBPACK_IMPORTED_MODULE_19__["DatepickerEventsExample"]
    },
    'datepicker-filter': {
        title: 'Datepicker with filter validation',
        component: assets_angular_material_examples_datepicker_filter_datepicker_filter_example__WEBPACK_IMPORTED_MODULE_20__["DatepickerFilterExample"]
    },
    'datepicker-formats': {
        title: 'Datepicker with custom formats',
        component: assets_angular_material_examples_datepicker_formats_datepicker_formats_example__WEBPACK_IMPORTED_MODULE_21__["DatepickerFormatsExample"]
    },
    'datepicker-locale': {
        title: 'Datepicker with different locale',
        component: assets_angular_material_examples_datepicker_locale_datepicker_locale_example__WEBPACK_IMPORTED_MODULE_22__["DatepickerLocaleExample"]
    },
    'datepicker-min-max': {
        title: 'Datepicker with min & max validation',
        component: assets_angular_material_examples_datepicker_min_max_datepicker_min_max_example__WEBPACK_IMPORTED_MODULE_23__["DatepickerMinMaxExample"]
    },
    'datepicker-moment': {
        title: 'Datepicker that uses Moment.js dates',
        component: assets_angular_material_examples_datepicker_moment_datepicker_moment_example__WEBPACK_IMPORTED_MODULE_24__["DatepickerMomentExample"]
    },
    'datepicker-overview': {
        title: 'Basic datepicker',
        component: assets_angular_material_examples_datepicker_overview_datepicker_overview_example__WEBPACK_IMPORTED_MODULE_25__["DatepickerOverviewExample"]
    },
    'datepicker-start-view': {
        title: 'Datepicker start date',
        component: assets_angular_material_examples_datepicker_start_view_datepicker_start_view_example__WEBPACK_IMPORTED_MODULE_26__["DatepickerStartViewExample"]
    },
    'datepicker-touch': {
        title: 'Datepicker touch UI',
        component: assets_angular_material_examples_datepicker_touch_datepicker_touch_example__WEBPACK_IMPORTED_MODULE_27__["DatepickerTouchExample"]
    },
    'datepicker-value': {
        title: 'Datepicker selected value',
        component: assets_angular_material_examples_datepicker_value_datepicker_value_example__WEBPACK_IMPORTED_MODULE_28__["DatepickerValueExample"]
    },
    'datepicker-views-selection': {
        title: 'Datepicker emulating a Year and month picker',
        component: assets_angular_material_examples_datepicker_views_selection_datepicker_views_selection_example__WEBPACK_IMPORTED_MODULE_120__["DatepickerViewsSelectionExample"]
    },
    'dialog-content': {
        title: 'Dialog with header, scrollable content and actions',
        component: assets_angular_material_examples_dialog_content_dialog_content_example__WEBPACK_IMPORTED_MODULE_29__["DialogContentExample"],
        additionalFiles: ['dialog-content-example-dialog.html'],
        selectorName: 'DialogContentExample, DialogContentExampleDialog'
    },
    'dialog-data': {
        title: 'Injecting data when opening a dialog',
        component: assets_angular_material_examples_dialog_data_dialog_data_example__WEBPACK_IMPORTED_MODULE_30__["DialogDataExample"],
        additionalFiles: ['dialog-data-example-dialog.html'],
        selectorName: 'DialogDataExample, DialogDataExampleDialog'
    },
    'dialog-elements': {
        title: 'Dialog elements',
        component: assets_angular_material_examples_dialog_elements_dialog_elements_example__WEBPACK_IMPORTED_MODULE_31__["DialogElementsExample"],
        additionalFiles: ['dialog-elements-example-dialog.html'],
        selectorName: 'DialogElementsExample, DialogElementsExampleDialog'
    },
    'dialog-overview': {
        title: 'Dialog Overview',
        component: assets_angular_material_examples_dialog_overview_dialog_overview_example__WEBPACK_IMPORTED_MODULE_32__["DialogOverviewExample"],
        additionalFiles: ['dialog-overview-example-dialog.html'],
        selectorName: 'DialogOverviewExample, DialogOverviewExampleDialog'
    },
    'divider-overview': {
        title: 'Basic divider',
        component: assets_angular_material_examples_divider_overview_divider_overview_example__WEBPACK_IMPORTED_MODULE_110__["DividerOverviewExample"]
    },
    'elevation-overview': {
        title: 'Elevation CSS classes',
        component: assets_angular_material_examples_elevation_overview_elevation_overview_example__WEBPACK_IMPORTED_MODULE_33__["ElevationOverviewExample"]
    },
    'expansion-expand-collapse-all': {
        title: 'Accordion with expand/collapse all toggles',
        component: assets_angular_material_examples_expansion_expand_collapse_all_expansion_expand_collapse_all_example__WEBPACK_IMPORTED_MODULE_121__["ExpansionExpandCollapseAllExample"]
    },
    'expansion-overview': {
        title: 'Basic expansion panel',
        component: assets_angular_material_examples_expansion_overview_expansion_overview_example__WEBPACK_IMPORTED_MODULE_34__["ExpansionOverviewExample"]
    },
    'expansion-steps': {
        title: 'Expansion panel as accordion',
        component: assets_angular_material_examples_expansion_steps_expansion_steps_example__WEBPACK_IMPORTED_MODULE_35__["ExpansionStepsExample"]
    },
    'focus-monitor-directives': {
        title: 'Monitoring focus with FocusMonitor',
        component: assets_angular_material_examples_focus_monitor_directives_focus_monitor_directives_example__WEBPACK_IMPORTED_MODULE_122__["FocusMonitorDirectivesExample"]
    },
    'focus-monitor-focus-via': {
        title: 'Focusing with a specific FocusOrigin',
        component: assets_angular_material_examples_focus_monitor_focus_via_focus_monitor_focus_via_example__WEBPACK_IMPORTED_MODULE_123__["FocusMonitorFocusViaExample"]
    },
    'focus-monitor-overview': {
        title: 'Monitoring focus with FocusMonitor',
        component: assets_angular_material_examples_focus_monitor_overview_focus_monitor_overview_example__WEBPACK_IMPORTED_MODULE_124__["FocusMonitorOverviewExample"]
    },
    'form-field-appearance': {
        title: 'Form field appearance variants',
        component: assets_angular_material_examples_form_field_appearance_form_field_appearance_example__WEBPACK_IMPORTED_MODULE_125__["FormFieldAppearanceExample"]
    },
    'form-field-custom-control': {
        title: 'Form field with custom telephone number input control.',
        component: assets_angular_material_examples_form_field_custom_control_form_field_custom_control_example__WEBPACK_IMPORTED_MODULE_36__["FormFieldCustomControlExample"],
        additionalFiles: ['form-field-custom-control-example.html'],
        selectorName: 'FormFieldCustomControlExample, MyTelInput'
    },
    'form-field-error': {
        title: 'Form field with error messages',
        component: assets_angular_material_examples_form_field_error_form_field_error_example__WEBPACK_IMPORTED_MODULE_37__["FormFieldErrorExample"]
    },
    'form-field-hint': {
        title: 'Form field with hints',
        component: assets_angular_material_examples_form_field_hint_form_field_hint_example__WEBPACK_IMPORTED_MODULE_38__["FormFieldHintExample"]
    },
    'form-field-label': {
        title: 'Form field with label',
        component: assets_angular_material_examples_form_field_label_form_field_label_example__WEBPACK_IMPORTED_MODULE_111__["FormFieldLabelExample"]
    },
    'form-field-overview': {
        title: 'Simple form field',
        component: assets_angular_material_examples_form_field_overview_form_field_overview_example__WEBPACK_IMPORTED_MODULE_39__["FormFieldOverviewExample"]
    },
    'form-field-prefix-suffix': {
        title: 'Form field with prefix & suffix',
        component: assets_angular_material_examples_form_field_prefix_suffix_form_field_prefix_suffix_example__WEBPACK_IMPORTED_MODULE_40__["FormFieldPrefixSuffixExample"]
    },
    'form-field-theming': {
        title: 'Form field theming',
        component: assets_angular_material_examples_form_field_theming_form_field_theming_example__WEBPACK_IMPORTED_MODULE_41__["FormFieldThemingExample"]
    },
    'grid-list-dynamic': {
        title: 'Dynamic grid-list',
        component: assets_angular_material_examples_grid_list_dynamic_grid_list_dynamic_example__WEBPACK_IMPORTED_MODULE_42__["GridListDynamicExample"]
    },
    'grid-list-overview': {
        title: 'Basic grid-list',
        component: assets_angular_material_examples_grid_list_overview_grid_list_overview_example__WEBPACK_IMPORTED_MODULE_43__["GridListOverviewExample"]
    },
    'icon-overview': {
        title: 'Basic icons',
        component: assets_angular_material_examples_icon_overview_icon_overview_example__WEBPACK_IMPORTED_MODULE_44__["IconOverviewExample"]
    },
    'icon-svg': {
        title: 'SVG icons',
        component: assets_angular_material_examples_icon_svg_icon_svg_example__WEBPACK_IMPORTED_MODULE_126__["IconSvgExample"]
    },
    'input-clearable': {
        title: 'Input with a clear button',
        component: assets_angular_material_examples_input_clearable_input_clearable_example__WEBPACK_IMPORTED_MODULE_45__["InputClearableExample"]
    },
    'input-error-state-matcher': {
        title: 'Input with a custom ErrorStateMatcher',
        component: assets_angular_material_examples_input_error_state_matcher_input_error_state_matcher_example__WEBPACK_IMPORTED_MODULE_46__["InputErrorStateMatcherExample"]
    },
    'input-errors': {
        title: 'Input with error messages',
        component: assets_angular_material_examples_input_errors_input_errors_example__WEBPACK_IMPORTED_MODULE_47__["InputErrorsExample"]
    },
    'input-form': {
        title: 'Inputs in a form',
        component: assets_angular_material_examples_input_form_input_form_example__WEBPACK_IMPORTED_MODULE_48__["InputFormExample"]
    },
    'input-hint': {
        title: 'Input with hints',
        component: assets_angular_material_examples_input_hint_input_hint_example__WEBPACK_IMPORTED_MODULE_49__["InputHintExample"]
    },
    'input-overview': {
        title: 'Basic Inputs',
        component: assets_angular_material_examples_input_overview_input_overview_example__WEBPACK_IMPORTED_MODULE_50__["InputOverviewExample"]
    },
    'input-prefix-suffix': {
        title: 'Inputs with prefixes and suffixes',
        component: assets_angular_material_examples_input_prefix_suffix_input_prefix_suffix_example__WEBPACK_IMPORTED_MODULE_51__["InputPrefixSuffixExample"]
    },
    'list-overview': {
        title: 'Basic list',
        component: assets_angular_material_examples_list_overview_list_overview_example__WEBPACK_IMPORTED_MODULE_52__["ListOverviewExample"]
    },
    'list-sections': {
        title: 'List with sections',
        component: assets_angular_material_examples_list_sections_list_sections_example__WEBPACK_IMPORTED_MODULE_53__["ListSectionsExample"]
    },
    'list-selection': {
        title: 'List with selection',
        component: assets_angular_material_examples_list_selection_list_selection_example__WEBPACK_IMPORTED_MODULE_54__["ListSelectionExample"]
    },
    'menu-icons': {
        title: 'Menu with icons',
        component: assets_angular_material_examples_menu_icons_menu_icons_example__WEBPACK_IMPORTED_MODULE_55__["MenuIconsExample"]
    },
    'menu-overview': {
        title: 'Basic menu',
        component: assets_angular_material_examples_menu_overview_menu_overview_example__WEBPACK_IMPORTED_MODULE_56__["MenuOverviewExample"]
    },
    'nested-menu': {
        title: 'Nested menu',
        component: assets_angular_material_examples_nested_menu_nested_menu_example__WEBPACK_IMPORTED_MODULE_57__["NestedMenuExample"]
    },
    'paginator-configurable': {
        title: 'Configurable paginator',
        component: assets_angular_material_examples_paginator_configurable_paginator_configurable_example__WEBPACK_IMPORTED_MODULE_58__["PaginatorConfigurableExample"]
    },
    'paginator-overview': {
        title: 'Paginator',
        component: assets_angular_material_examples_paginator_overview_paginator_overview_example__WEBPACK_IMPORTED_MODULE_59__["PaginatorOverviewExample"]
    },
    'progress-bar-buffer': {
        title: 'Buffer progress-bar',
        component: assets_angular_material_examples_progress_bar_buffer_progress_bar_buffer_example__WEBPACK_IMPORTED_MODULE_60__["ProgressBarBufferExample"]
    },
    'progress-bar-configurable': {
        title: 'Configurable progress-bar',
        component: assets_angular_material_examples_progress_bar_configurable_progress_bar_configurable_example__WEBPACK_IMPORTED_MODULE_61__["ProgressBarConfigurableExample"]
    },
    'progress-bar-determinate': {
        title: 'Determinate progress-bar',
        component: assets_angular_material_examples_progress_bar_determinate_progress_bar_determinate_example__WEBPACK_IMPORTED_MODULE_62__["ProgressBarDeterminateExample"]
    },
    'progress-bar-indeterminate': {
        title: 'Indeterminate progress-bar',
        component: assets_angular_material_examples_progress_bar_indeterminate_progress_bar_indeterminate_example__WEBPACK_IMPORTED_MODULE_63__["ProgressBarIndeterminateExample"]
    },
    'progress-bar-query': {
        title: 'Query progress-bar',
        component: assets_angular_material_examples_progress_bar_query_progress_bar_query_example__WEBPACK_IMPORTED_MODULE_64__["ProgressBarQueryExample"]
    },
    'progress-spinner-configurable': {
        title: 'Configurable progress spinner',
        component: assets_angular_material_examples_progress_spinner_configurable_progress_spinner_configurable_example__WEBPACK_IMPORTED_MODULE_65__["ProgressSpinnerConfigurableExample"]
    },
    'progress-spinner-overview': {
        title: 'Basic progress-spinner',
        component: assets_angular_material_examples_progress_spinner_overview_progress_spinner_overview_example__WEBPACK_IMPORTED_MODULE_66__["ProgressSpinnerOverviewExample"]
    },
    'radio-ng-model': {
        title: 'Radios with ngModel',
        component: assets_angular_material_examples_radio_ng_model_radio_ng_model_example__WEBPACK_IMPORTED_MODULE_67__["RadioNgModelExample"]
    },
    'radio-overview': {
        title: 'Basic radios',
        component: assets_angular_material_examples_radio_overview_radio_overview_example__WEBPACK_IMPORTED_MODULE_68__["RadioOverviewExample"]
    },
    'select-custom-trigger': {
        title: 'Select with custom trigger text',
        component: assets_angular_material_examples_select_custom_trigger_select_custom_trigger_example__WEBPACK_IMPORTED_MODULE_69__["SelectCustomTriggerExample"]
    },
    'select-disabled': {
        title: 'Disabled select',
        component: assets_angular_material_examples_select_disabled_select_disabled_example__WEBPACK_IMPORTED_MODULE_70__["SelectDisabledExample"]
    },
    'select-error-state-matcher': {
        title: 'Select with a custom ErrorStateMatcher',
        component: assets_angular_material_examples_select_error_state_matcher_select_error_state_matcher_example__WEBPACK_IMPORTED_MODULE_71__["SelectErrorStateMatcherExample"]
    },
    'select-form': {
        title: 'Select in a form',
        component: assets_angular_material_examples_select_form_select_form_example__WEBPACK_IMPORTED_MODULE_72__["SelectFormExample"]
    },
    'select-hint-error': {
        title: 'Select with form field features',
        component: assets_angular_material_examples_select_hint_error_select_hint_error_example__WEBPACK_IMPORTED_MODULE_73__["SelectHintErrorExample"]
    },
    'select-multiple': {
        title: 'Select with multiple selection',
        component: assets_angular_material_examples_select_multiple_select_multiple_example__WEBPACK_IMPORTED_MODULE_74__["SelectMultipleExample"]
    },
    'select-no-ripple': {
        title: 'Select with no option ripple',
        component: assets_angular_material_examples_select_no_ripple_select_no_ripple_example__WEBPACK_IMPORTED_MODULE_75__["SelectNoRippleExample"]
    },
    'select-optgroup': {
        title: 'Select with option groups',
        component: assets_angular_material_examples_select_optgroup_select_optgroup_example__WEBPACK_IMPORTED_MODULE_76__["SelectOptgroupExample"]
    },
    'select-overview': {
        title: 'Basic select',
        component: assets_angular_material_examples_select_overview_select_overview_example__WEBPACK_IMPORTED_MODULE_77__["SelectOverviewExample"]
    },
    'select-panel-class': {
        title: 'Select with custom panel styling',
        component: assets_angular_material_examples_select_panel_class_select_panel_class_example__WEBPACK_IMPORTED_MODULE_78__["SelectPanelClassExample"]
    },
    'select-reset': {
        title: 'Select with reset option',
        component: assets_angular_material_examples_select_reset_select_reset_example__WEBPACK_IMPORTED_MODULE_79__["SelectResetExample"]
    },
    'select-value-binding': {
        title: 'Select with 2-way value binding',
        component: assets_angular_material_examples_select_value_binding_select_value_binding_example__WEBPACK_IMPORTED_MODULE_80__["SelectValueBindingExample"]
    },
    'sidenav-autosize': {
        title: 'Autosize sidenav',
        component: assets_angular_material_examples_sidenav_autosize_sidenav_autosize_example__WEBPACK_IMPORTED_MODULE_104__["SidenavAutosizeExample"]
    },
    'sidenav-backdrop': {
        title: 'Drawer with explicit backdrop setting',
        component: assets_angular_material_examples_sidenav_backdrop_sidenav_backdrop_example__WEBPACK_IMPORTED_MODULE_127__["SidenavBackdropExample"]
    },
    'sidenav-disable-close': {
        title: 'Sidenav with custom escape and backdrop click behavior',
        component: assets_angular_material_examples_sidenav_disable_close_sidenav_disable_close_example__WEBPACK_IMPORTED_MODULE_128__["SidenavDisableCloseExample"]
    },
    'sidenav-drawer-overview': {
        title: 'Basic drawer',
        component: assets_angular_material_examples_sidenav_drawer_overview_sidenav_drawer_overview_example__WEBPACK_IMPORTED_MODULE_129__["SidenavDrawerOverviewExample"]
    },
    'sidenav-fixed': {
        title: 'Fixed sidenav',
        component: assets_angular_material_examples_sidenav_fixed_sidenav_fixed_example__WEBPACK_IMPORTED_MODULE_130__["SidenavFixedExample"]
    },
    'sidenav-mode': {
        title: 'Sidenav with configurable mode',
        component: assets_angular_material_examples_sidenav_mode_sidenav_mode_example__WEBPACK_IMPORTED_MODULE_131__["SidenavModeExample"]
    },
    'sidenav-open-close': {
        title: 'Sidenav open & close behavior',
        component: assets_angular_material_examples_sidenav_open_close_sidenav_open_close_example__WEBPACK_IMPORTED_MODULE_132__["SidenavOpenCloseExample"]
    },
    'sidenav-overview': {
        title: 'Basic sidenav',
        component: assets_angular_material_examples_sidenav_overview_sidenav_overview_example__WEBPACK_IMPORTED_MODULE_81__["SidenavOverviewExample"]
    },
    'sidenav-position': {
        title: 'Implicit main content with two sidenavs',
        component: assets_angular_material_examples_sidenav_position_sidenav_position_example__WEBPACK_IMPORTED_MODULE_133__["SidenavPositionExample"]
    },
    'sidenav-responsive': {
        title: 'Responsive sidenav',
        component: assets_angular_material_examples_sidenav_responsive_sidenav_responsive_example__WEBPACK_IMPORTED_MODULE_134__["SidenavResponsiveExample"]
    },
    'slide-toggle-configurable': {
        title: 'Configurable slide-toggle',
        component: assets_angular_material_examples_slide_toggle_configurable_slide_toggle_configurable_example__WEBPACK_IMPORTED_MODULE_82__["SlideToggleConfigurableExample"]
    },
    'slide-toggle-forms': {
        title: 'Slide-toggle with forms',
        component: assets_angular_material_examples_slide_toggle_forms_slide_toggle_forms_example__WEBPACK_IMPORTED_MODULE_83__["SlideToggleFormsExample"]
    },
    'slide-toggle-overview': {
        title: 'Basic slide-toggles',
        component: assets_angular_material_examples_slide_toggle_overview_slide_toggle_overview_example__WEBPACK_IMPORTED_MODULE_84__["SlideToggleOverviewExample"]
    },
    'slider-configurable': {
        title: 'Configurable slider',
        component: assets_angular_material_examples_slider_configurable_slider_configurable_example__WEBPACK_IMPORTED_MODULE_85__["SliderConfigurableExample"]
    },
    'slider-formatting': {
        title: 'Slider with custom thumb label formatting.',
        component: assets_angular_material_examples_slider_formatting_slider_formatting_example__WEBPACK_IMPORTED_MODULE_135__["SliderFormattingExample"]
    },
    'slider-overview': {
        title: 'Basic slider',
        component: assets_angular_material_examples_slider_overview_slider_overview_example__WEBPACK_IMPORTED_MODULE_86__["SliderOverviewExample"]
    },
    'snack-bar-component': {
        title: 'Snack-bar with a custom component',
        component: assets_angular_material_examples_snack_bar_component_snack_bar_component_example__WEBPACK_IMPORTED_MODULE_87__["SnackBarComponentExample"],
        additionalFiles: ['snack-bar-component-example-snack.html'],
        selectorName: 'SnackBarComponentExample, PizzaPartyComponent'
    },
    'snack-bar-overview': {
        title: 'Basic snack-bar',
        component: assets_angular_material_examples_snack_bar_overview_snack_bar_overview_example__WEBPACK_IMPORTED_MODULE_88__["SnackBarOverviewExample"]
    },
    'snack-bar-position': {
        title: 'Snack-bar with configurable position',
        component: assets_angular_material_examples_snack_bar_position_snack_bar_position_example__WEBPACK_IMPORTED_MODULE_105__["SnackBarPositionExample"]
    },
    'sort-overview': {
        title: 'Sorting overview',
        component: assets_angular_material_examples_sort_overview_sort_overview_example__WEBPACK_IMPORTED_MODULE_89__["SortOverviewExample"]
    },
    'stepper-editable': {
        title: 'Stepper with editable steps',
        component: assets_angular_material_examples_stepper_editable_stepper_editable_example__WEBPACK_IMPORTED_MODULE_136__["StepperEditableExample"]
    },
    'stepper-optional': {
        title: 'Stepper with optional steps',
        component: assets_angular_material_examples_stepper_optional_stepper_optional_example__WEBPACK_IMPORTED_MODULE_137__["StepperOptionalExample"]
    },
    'stepper-overview': {
        title: 'Stepper overview',
        component: assets_angular_material_examples_stepper_overview_stepper_overview_example__WEBPACK_IMPORTED_MODULE_90__["StepperOverviewExample"]
    },
    'table-basic': {
        title: 'Basic table',
        component: assets_angular_material_examples_table_basic_table_basic_example__WEBPACK_IMPORTED_MODULE_91__["TableBasicExample"]
    },
    'table-filtering': {
        title: 'Table with filtering',
        component: assets_angular_material_examples_table_filtering_table_filtering_example__WEBPACK_IMPORTED_MODULE_92__["TableFilteringExample"]
    },
    'table-footer-row': {
        title: 'Footer row table',
        component: assets_angular_material_examples_table_footer_row_table_footer_row_example__WEBPACK_IMPORTED_MODULE_138__["TableFooterRowExample"]
    },
    'table-http': {
        title: 'Table retrieving data through HTTP',
        component: assets_angular_material_examples_table_http_table_http_example__WEBPACK_IMPORTED_MODULE_93__["TableHttpExample"]
    },
    'table-native-only': {
        title: 'Native `<table>` that only applies the Material styles',
        component: assets_angular_material_examples_table_native_only_table_native_only_example__WEBPACK_IMPORTED_MODULE_139__["TableNativeOnlyExample"]
    },
    'table-overview': {
        title: 'Data table with sorting, pagination, and filtering.',
        component: assets_angular_material_examples_table_overview_table_overview_example__WEBPACK_IMPORTED_MODULE_94__["TableOverviewExample"]
    },
    'table-pagination': {
        title: 'Table with pagination',
        component: assets_angular_material_examples_table_pagination_table_pagination_example__WEBPACK_IMPORTED_MODULE_95__["TablePaginationExample"]
    },
    'table-selection': {
        title: 'Table with selection',
        component: assets_angular_material_examples_table_selection_table_selection_example__WEBPACK_IMPORTED_MODULE_106__["TableSelectionExample"]
    },
    'table-sorting': {
        title: 'Table with sorting',
        component: assets_angular_material_examples_table_sorting_table_sorting_example__WEBPACK_IMPORTED_MODULE_96__["TableSortingExample"]
    },
    'tabs-overview': {
        title: 'Basic tabs',
        component: assets_angular_material_examples_tabs_overview_tabs_overview_example__WEBPACK_IMPORTED_MODULE_97__["TabsOverviewExample"]
    },
    'tabs-template-label': {
        title: 'Complex Example',
        component: assets_angular_material_examples_tabs_template_label_tabs_template_label_example__WEBPACK_IMPORTED_MODULE_98__["TabsTemplateLabelExample"]
    },
    'text-field-autofill-directive': {
        title: 'Monitoring autofill state with cdkAutofill',
        component: assets_angular_material_examples_text_field_autofill_directive_text_field_autofill_directive_example__WEBPACK_IMPORTED_MODULE_140__["TextFieldAutofillDirectiveExample"]
    },
    'text-field-autofill-monitor': {
        title: 'Monitoring autofill state with AutofillMonitor',
        component: assets_angular_material_examples_text_field_autofill_monitor_text_field_autofill_monitor_example__WEBPACK_IMPORTED_MODULE_141__["TextFieldAutofillMonitorExample"]
    },
    'text-field-autosize-textarea': {
        title: 'Auto-resizing textarea',
        component: assets_angular_material_examples_text_field_autosize_textarea_text_field_autosize_textarea_example__WEBPACK_IMPORTED_MODULE_142__["TextFieldAutosizeTextareaExample"]
    },
    'toolbar-multirow': {
        title: 'Multi-row toolbar',
        component: assets_angular_material_examples_toolbar_multirow_toolbar_multirow_example__WEBPACK_IMPORTED_MODULE_99__["ToolbarMultirowExample"]
    },
    'toolbar-overview': {
        title: 'Basic toolbar',
        component: assets_angular_material_examples_toolbar_overview_toolbar_overview_example__WEBPACK_IMPORTED_MODULE_100__["ToolbarOverviewExample"]
    },
    'tooltip-delay': {
        title: 'Tooltip with a show and hide delay',
        component: assets_angular_material_examples_tooltip_delay_tooltip_delay_example__WEBPACK_IMPORTED_MODULE_107__["TooltipDelayExample"]
    },
    'tooltip-manual': {
        title: 'Tooltip that can be manually shown/hidden.',
        component: assets_angular_material_examples_tooltip_manual_tooltip_manual_example__WEBPACK_IMPORTED_MODULE_108__["TooltipManualExample"]
    },
    'tooltip-modified-defaults': {
        title: 'Tooltip with a show and hide delay',
        component: assets_angular_material_examples_tooltip_modified_defaults_tooltip_modified_defaults_example__WEBPACK_IMPORTED_MODULE_109__["TooltipModifiedDefaultsExample"]
    },
    'tooltip-overview': {
        title: 'Basic tooltip',
        component: assets_angular_material_examples_tooltip_overview_tooltip_overview_example__WEBPACK_IMPORTED_MODULE_101__["TooltipOverviewExample"]
    },
    'tooltip-position': {
        title: 'Tooltip with custom position',
        component: assets_angular_material_examples_tooltip_position_tooltip_position_example__WEBPACK_IMPORTED_MODULE_102__["TooltipPositionExample"]
    },
    'tree-checklist': {
        title: 'Tree with checkboxes',
        component: assets_angular_material_examples_tree_checklist_tree_checklist_example__WEBPACK_IMPORTED_MODULE_143__["TreeChecklistExample"]
    },
    'tree-dynamic': {
        title: 'Tree with dynamic data',
        component: assets_angular_material_examples_tree_dynamic_tree_dynamic_example__WEBPACK_IMPORTED_MODULE_144__["TreeDynamicExample"]
    },
    'tree-flat-overview': {
        title: 'Tree with flat nodes',
        component: assets_angular_material_examples_tree_flat_overview_tree_flat_overview_example__WEBPACK_IMPORTED_MODULE_145__["TreeFlatOverviewExample"]
    },
    'tree-loadmore': {
        title: 'Tree with partially loaded data',
        component: assets_angular_material_examples_tree_loadmore_tree_loadmore_example__WEBPACK_IMPORTED_MODULE_146__["TreeLoadmoreExample"]
    },
    'tree-nested-overview': {
        title: 'Tree with nested nodes',
        component: assets_angular_material_examples_tree_nested_overview_tree_nested_overview_example__WEBPACK_IMPORTED_MODULE_147__["TreeNestedOverviewExample"]
    }
};
var EXAMPLE_LIST = [
    assets_angular_material_examples_autocomplete_auto_active_first_option_autocomplete_auto_active_first_option_example__WEBPACK_IMPORTED_MODULE_0__["AutocompleteAutoActiveFirstOptionExample"],
    assets_angular_material_examples_autocomplete_display_autocomplete_display_example__WEBPACK_IMPORTED_MODULE_1__["AutocompleteDisplayExample"],
    assets_angular_material_examples_autocomplete_filter_autocomplete_filter_example__WEBPACK_IMPORTED_MODULE_2__["AutocompleteFilterExample"],
    assets_angular_material_examples_autocomplete_optgroup_autocomplete_optgroup_example__WEBPACK_IMPORTED_MODULE_112__["AutocompleteOptgroupExample"],
    assets_angular_material_examples_autocomplete_overview_autocomplete_overview_example__WEBPACK_IMPORTED_MODULE_3__["AutocompleteOverviewExample"],
    assets_angular_material_examples_autocomplete_simple_autocomplete_simple_example__WEBPACK_IMPORTED_MODULE_4__["AutocompleteSimpleExample"],
    assets_angular_material_examples_badge_overview_badge_overview_example__WEBPACK_IMPORTED_MODULE_113__["BadgeOverviewExample"],
    assets_angular_material_examples_bottom_sheet_overview_bottom_sheet_overview_example__WEBPACK_IMPORTED_MODULE_114__["BottomSheetOverviewExample"], assets_angular_material_examples_bottom_sheet_overview_bottom_sheet_overview_example__WEBPACK_IMPORTED_MODULE_114__["BottomSheetOverviewExampleSheet"],
    assets_angular_material_examples_button_overview_button_overview_example__WEBPACK_IMPORTED_MODULE_5__["ButtonOverviewExample"],
    assets_angular_material_examples_button_toggle_exclusive_button_toggle_exclusive_example__WEBPACK_IMPORTED_MODULE_6__["ButtonToggleExclusiveExample"],
    assets_angular_material_examples_button_toggle_overview_button_toggle_overview_example__WEBPACK_IMPORTED_MODULE_7__["ButtonToggleOverviewExample"],
    assets_angular_material_examples_button_types_button_types_example__WEBPACK_IMPORTED_MODULE_8__["ButtonTypesExample"],
    assets_angular_material_examples_card_fancy_card_fancy_example__WEBPACK_IMPORTED_MODULE_9__["CardFancyExample"],
    assets_angular_material_examples_card_overview_card_overview_example__WEBPACK_IMPORTED_MODULE_10__["CardOverviewExample"],
    assets_angular_material_examples_cdk_table_basic_cdk_table_basic_example__WEBPACK_IMPORTED_MODULE_11__["CdkTableBasicExample"],
    assets_angular_material_examples_cdk_tree_flat_cdk_tree_flat_example__WEBPACK_IMPORTED_MODULE_115__["CdkTreeFlatExample"],
    assets_angular_material_examples_cdk_tree_nested_cdk_tree_nested_example__WEBPACK_IMPORTED_MODULE_116__["CdkTreeNestedExample"],
    assets_angular_material_examples_checkbox_configurable_checkbox_configurable_example__WEBPACK_IMPORTED_MODULE_12__["CheckboxConfigurableExample"],
    assets_angular_material_examples_checkbox_overview_checkbox_overview_example__WEBPACK_IMPORTED_MODULE_13__["CheckboxOverviewExample"],
    assets_angular_material_examples_chips_autocomplete_chips_autocomplete_example__WEBPACK_IMPORTED_MODULE_117__["ChipsAutocompleteExample"],
    assets_angular_material_examples_chips_input_chips_input_example__WEBPACK_IMPORTED_MODULE_14__["ChipsInputExample"],
    assets_angular_material_examples_chips_overview_chips_overview_example__WEBPACK_IMPORTED_MODULE_15__["ChipsOverviewExample"],
    assets_angular_material_examples_chips_stacked_chips_stacked_example__WEBPACK_IMPORTED_MODULE_16__["ChipsStackedExample"],
    assets_angular_material_examples_datepicker_api_datepicker_api_example__WEBPACK_IMPORTED_MODULE_17__["DatepickerApiExample"],
    assets_angular_material_examples_datepicker_color_datepicker_color_example__WEBPACK_IMPORTED_MODULE_118__["DatepickerColorExample"],
    assets_angular_material_examples_datepicker_custom_header_datepicker_custom_header_example__WEBPACK_IMPORTED_MODULE_119__["DatepickerCustomHeaderExample"], assets_angular_material_examples_datepicker_custom_header_datepicker_custom_header_example__WEBPACK_IMPORTED_MODULE_119__["ExampleHeader"],
    assets_angular_material_examples_datepicker_custom_icon_datepicker_custom_icon_example__WEBPACK_IMPORTED_MODULE_103__["DatepickerCustomIconExample"],
    assets_angular_material_examples_datepicker_disabled_datepicker_disabled_example__WEBPACK_IMPORTED_MODULE_18__["DatepickerDisabledExample"],
    assets_angular_material_examples_datepicker_events_datepicker_events_example__WEBPACK_IMPORTED_MODULE_19__["DatepickerEventsExample"],
    assets_angular_material_examples_datepicker_filter_datepicker_filter_example__WEBPACK_IMPORTED_MODULE_20__["DatepickerFilterExample"],
    assets_angular_material_examples_datepicker_formats_datepicker_formats_example__WEBPACK_IMPORTED_MODULE_21__["DatepickerFormatsExample"],
    assets_angular_material_examples_datepicker_locale_datepicker_locale_example__WEBPACK_IMPORTED_MODULE_22__["DatepickerLocaleExample"],
    assets_angular_material_examples_datepicker_min_max_datepicker_min_max_example__WEBPACK_IMPORTED_MODULE_23__["DatepickerMinMaxExample"],
    assets_angular_material_examples_datepicker_moment_datepicker_moment_example__WEBPACK_IMPORTED_MODULE_24__["DatepickerMomentExample"],
    assets_angular_material_examples_datepicker_overview_datepicker_overview_example__WEBPACK_IMPORTED_MODULE_25__["DatepickerOverviewExample"],
    assets_angular_material_examples_datepicker_start_view_datepicker_start_view_example__WEBPACK_IMPORTED_MODULE_26__["DatepickerStartViewExample"],
    assets_angular_material_examples_datepicker_touch_datepicker_touch_example__WEBPACK_IMPORTED_MODULE_27__["DatepickerTouchExample"],
    assets_angular_material_examples_datepicker_value_datepicker_value_example__WEBPACK_IMPORTED_MODULE_28__["DatepickerValueExample"],
    assets_angular_material_examples_datepicker_views_selection_datepicker_views_selection_example__WEBPACK_IMPORTED_MODULE_120__["DatepickerViewsSelectionExample"],
    assets_angular_material_examples_dialog_content_dialog_content_example__WEBPACK_IMPORTED_MODULE_29__["DialogContentExample"], assets_angular_material_examples_dialog_content_dialog_content_example__WEBPACK_IMPORTED_MODULE_29__["DialogContentExampleDialog"],
    assets_angular_material_examples_dialog_data_dialog_data_example__WEBPACK_IMPORTED_MODULE_30__["DialogDataExample"], assets_angular_material_examples_dialog_data_dialog_data_example__WEBPACK_IMPORTED_MODULE_30__["DialogDataExampleDialog"],
    assets_angular_material_examples_dialog_elements_dialog_elements_example__WEBPACK_IMPORTED_MODULE_31__["DialogElementsExample"], assets_angular_material_examples_dialog_elements_dialog_elements_example__WEBPACK_IMPORTED_MODULE_31__["DialogElementsExampleDialog"],
    assets_angular_material_examples_dialog_overview_dialog_overview_example__WEBPACK_IMPORTED_MODULE_32__["DialogOverviewExample"], assets_angular_material_examples_dialog_overview_dialog_overview_example__WEBPACK_IMPORTED_MODULE_32__["DialogOverviewExampleDialog"],
    assets_angular_material_examples_divider_overview_divider_overview_example__WEBPACK_IMPORTED_MODULE_110__["DividerOverviewExample"],
    assets_angular_material_examples_elevation_overview_elevation_overview_example__WEBPACK_IMPORTED_MODULE_33__["ElevationOverviewExample"],
    assets_angular_material_examples_expansion_expand_collapse_all_expansion_expand_collapse_all_example__WEBPACK_IMPORTED_MODULE_121__["ExpansionExpandCollapseAllExample"],
    assets_angular_material_examples_expansion_overview_expansion_overview_example__WEBPACK_IMPORTED_MODULE_34__["ExpansionOverviewExample"],
    assets_angular_material_examples_expansion_steps_expansion_steps_example__WEBPACK_IMPORTED_MODULE_35__["ExpansionStepsExample"],
    assets_angular_material_examples_focus_monitor_directives_focus_monitor_directives_example__WEBPACK_IMPORTED_MODULE_122__["FocusMonitorDirectivesExample"],
    assets_angular_material_examples_focus_monitor_focus_via_focus_monitor_focus_via_example__WEBPACK_IMPORTED_MODULE_123__["FocusMonitorFocusViaExample"],
    assets_angular_material_examples_focus_monitor_overview_focus_monitor_overview_example__WEBPACK_IMPORTED_MODULE_124__["FocusMonitorOverviewExample"],
    assets_angular_material_examples_form_field_appearance_form_field_appearance_example__WEBPACK_IMPORTED_MODULE_125__["FormFieldAppearanceExample"],
    assets_angular_material_examples_form_field_custom_control_form_field_custom_control_example__WEBPACK_IMPORTED_MODULE_36__["FormFieldCustomControlExample"], assets_angular_material_examples_form_field_custom_control_form_field_custom_control_example__WEBPACK_IMPORTED_MODULE_36__["MyTelInput"],
    assets_angular_material_examples_form_field_error_form_field_error_example__WEBPACK_IMPORTED_MODULE_37__["FormFieldErrorExample"],
    assets_angular_material_examples_form_field_hint_form_field_hint_example__WEBPACK_IMPORTED_MODULE_38__["FormFieldHintExample"],
    assets_angular_material_examples_form_field_label_form_field_label_example__WEBPACK_IMPORTED_MODULE_111__["FormFieldLabelExample"],
    assets_angular_material_examples_form_field_overview_form_field_overview_example__WEBPACK_IMPORTED_MODULE_39__["FormFieldOverviewExample"],
    assets_angular_material_examples_form_field_prefix_suffix_form_field_prefix_suffix_example__WEBPACK_IMPORTED_MODULE_40__["FormFieldPrefixSuffixExample"],
    assets_angular_material_examples_form_field_theming_form_field_theming_example__WEBPACK_IMPORTED_MODULE_41__["FormFieldThemingExample"],
    assets_angular_material_examples_grid_list_dynamic_grid_list_dynamic_example__WEBPACK_IMPORTED_MODULE_42__["GridListDynamicExample"],
    assets_angular_material_examples_grid_list_overview_grid_list_overview_example__WEBPACK_IMPORTED_MODULE_43__["GridListOverviewExample"],
    assets_angular_material_examples_icon_overview_icon_overview_example__WEBPACK_IMPORTED_MODULE_44__["IconOverviewExample"],
    assets_angular_material_examples_icon_svg_icon_svg_example__WEBPACK_IMPORTED_MODULE_126__["IconSvgExample"],
    assets_angular_material_examples_input_clearable_input_clearable_example__WEBPACK_IMPORTED_MODULE_45__["InputClearableExample"],
    assets_angular_material_examples_input_error_state_matcher_input_error_state_matcher_example__WEBPACK_IMPORTED_MODULE_46__["InputErrorStateMatcherExample"],
    assets_angular_material_examples_input_errors_input_errors_example__WEBPACK_IMPORTED_MODULE_47__["InputErrorsExample"],
    assets_angular_material_examples_input_form_input_form_example__WEBPACK_IMPORTED_MODULE_48__["InputFormExample"],
    assets_angular_material_examples_input_hint_input_hint_example__WEBPACK_IMPORTED_MODULE_49__["InputHintExample"],
    assets_angular_material_examples_input_overview_input_overview_example__WEBPACK_IMPORTED_MODULE_50__["InputOverviewExample"],
    assets_angular_material_examples_input_prefix_suffix_input_prefix_suffix_example__WEBPACK_IMPORTED_MODULE_51__["InputPrefixSuffixExample"],
    assets_angular_material_examples_list_overview_list_overview_example__WEBPACK_IMPORTED_MODULE_52__["ListOverviewExample"],
    assets_angular_material_examples_list_sections_list_sections_example__WEBPACK_IMPORTED_MODULE_53__["ListSectionsExample"],
    assets_angular_material_examples_list_selection_list_selection_example__WEBPACK_IMPORTED_MODULE_54__["ListSelectionExample"],
    assets_angular_material_examples_menu_icons_menu_icons_example__WEBPACK_IMPORTED_MODULE_55__["MenuIconsExample"],
    assets_angular_material_examples_menu_overview_menu_overview_example__WEBPACK_IMPORTED_MODULE_56__["MenuOverviewExample"],
    assets_angular_material_examples_nested_menu_nested_menu_example__WEBPACK_IMPORTED_MODULE_57__["NestedMenuExample"],
    assets_angular_material_examples_paginator_configurable_paginator_configurable_example__WEBPACK_IMPORTED_MODULE_58__["PaginatorConfigurableExample"],
    assets_angular_material_examples_paginator_overview_paginator_overview_example__WEBPACK_IMPORTED_MODULE_59__["PaginatorOverviewExample"],
    assets_angular_material_examples_progress_bar_buffer_progress_bar_buffer_example__WEBPACK_IMPORTED_MODULE_60__["ProgressBarBufferExample"],
    assets_angular_material_examples_progress_bar_configurable_progress_bar_configurable_example__WEBPACK_IMPORTED_MODULE_61__["ProgressBarConfigurableExample"],
    assets_angular_material_examples_progress_bar_determinate_progress_bar_determinate_example__WEBPACK_IMPORTED_MODULE_62__["ProgressBarDeterminateExample"],
    assets_angular_material_examples_progress_bar_indeterminate_progress_bar_indeterminate_example__WEBPACK_IMPORTED_MODULE_63__["ProgressBarIndeterminateExample"],
    assets_angular_material_examples_progress_bar_query_progress_bar_query_example__WEBPACK_IMPORTED_MODULE_64__["ProgressBarQueryExample"],
    assets_angular_material_examples_progress_spinner_configurable_progress_spinner_configurable_example__WEBPACK_IMPORTED_MODULE_65__["ProgressSpinnerConfigurableExample"],
    assets_angular_material_examples_progress_spinner_overview_progress_spinner_overview_example__WEBPACK_IMPORTED_MODULE_66__["ProgressSpinnerOverviewExample"],
    assets_angular_material_examples_radio_ng_model_radio_ng_model_example__WEBPACK_IMPORTED_MODULE_67__["RadioNgModelExample"],
    assets_angular_material_examples_radio_overview_radio_overview_example__WEBPACK_IMPORTED_MODULE_68__["RadioOverviewExample"],
    assets_angular_material_examples_select_custom_trigger_select_custom_trigger_example__WEBPACK_IMPORTED_MODULE_69__["SelectCustomTriggerExample"],
    assets_angular_material_examples_select_disabled_select_disabled_example__WEBPACK_IMPORTED_MODULE_70__["SelectDisabledExample"],
    assets_angular_material_examples_select_error_state_matcher_select_error_state_matcher_example__WEBPACK_IMPORTED_MODULE_71__["SelectErrorStateMatcherExample"],
    assets_angular_material_examples_select_form_select_form_example__WEBPACK_IMPORTED_MODULE_72__["SelectFormExample"],
    assets_angular_material_examples_select_hint_error_select_hint_error_example__WEBPACK_IMPORTED_MODULE_73__["SelectHintErrorExample"],
    assets_angular_material_examples_select_multiple_select_multiple_example__WEBPACK_IMPORTED_MODULE_74__["SelectMultipleExample"],
    assets_angular_material_examples_select_no_ripple_select_no_ripple_example__WEBPACK_IMPORTED_MODULE_75__["SelectNoRippleExample"],
    assets_angular_material_examples_select_optgroup_select_optgroup_example__WEBPACK_IMPORTED_MODULE_76__["SelectOptgroupExample"],
    assets_angular_material_examples_select_overview_select_overview_example__WEBPACK_IMPORTED_MODULE_77__["SelectOverviewExample"],
    assets_angular_material_examples_select_panel_class_select_panel_class_example__WEBPACK_IMPORTED_MODULE_78__["SelectPanelClassExample"],
    assets_angular_material_examples_select_reset_select_reset_example__WEBPACK_IMPORTED_MODULE_79__["SelectResetExample"],
    assets_angular_material_examples_select_value_binding_select_value_binding_example__WEBPACK_IMPORTED_MODULE_80__["SelectValueBindingExample"],
    assets_angular_material_examples_sidenav_autosize_sidenav_autosize_example__WEBPACK_IMPORTED_MODULE_104__["SidenavAutosizeExample"],
    assets_angular_material_examples_sidenav_backdrop_sidenav_backdrop_example__WEBPACK_IMPORTED_MODULE_127__["SidenavBackdropExample"],
    assets_angular_material_examples_sidenav_disable_close_sidenav_disable_close_example__WEBPACK_IMPORTED_MODULE_128__["SidenavDisableCloseExample"],
    assets_angular_material_examples_sidenav_drawer_overview_sidenav_drawer_overview_example__WEBPACK_IMPORTED_MODULE_129__["SidenavDrawerOverviewExample"],
    assets_angular_material_examples_sidenav_fixed_sidenav_fixed_example__WEBPACK_IMPORTED_MODULE_130__["SidenavFixedExample"],
    assets_angular_material_examples_sidenav_mode_sidenav_mode_example__WEBPACK_IMPORTED_MODULE_131__["SidenavModeExample"],
    assets_angular_material_examples_sidenav_open_close_sidenav_open_close_example__WEBPACK_IMPORTED_MODULE_132__["SidenavOpenCloseExample"],
    assets_angular_material_examples_sidenav_overview_sidenav_overview_example__WEBPACK_IMPORTED_MODULE_81__["SidenavOverviewExample"],
    assets_angular_material_examples_sidenav_position_sidenav_position_example__WEBPACK_IMPORTED_MODULE_133__["SidenavPositionExample"],
    assets_angular_material_examples_sidenav_responsive_sidenav_responsive_example__WEBPACK_IMPORTED_MODULE_134__["SidenavResponsiveExample"],
    assets_angular_material_examples_slide_toggle_configurable_slide_toggle_configurable_example__WEBPACK_IMPORTED_MODULE_82__["SlideToggleConfigurableExample"],
    assets_angular_material_examples_slide_toggle_forms_slide_toggle_forms_example__WEBPACK_IMPORTED_MODULE_83__["SlideToggleFormsExample"],
    assets_angular_material_examples_slide_toggle_overview_slide_toggle_overview_example__WEBPACK_IMPORTED_MODULE_84__["SlideToggleOverviewExample"],
    assets_angular_material_examples_slider_configurable_slider_configurable_example__WEBPACK_IMPORTED_MODULE_85__["SliderConfigurableExample"],
    assets_angular_material_examples_slider_formatting_slider_formatting_example__WEBPACK_IMPORTED_MODULE_135__["SliderFormattingExample"],
    assets_angular_material_examples_slider_overview_slider_overview_example__WEBPACK_IMPORTED_MODULE_86__["SliderOverviewExample"],
    assets_angular_material_examples_snack_bar_component_snack_bar_component_example__WEBPACK_IMPORTED_MODULE_87__["SnackBarComponentExample"], assets_angular_material_examples_snack_bar_component_snack_bar_component_example__WEBPACK_IMPORTED_MODULE_87__["PizzaPartyComponent"],
    assets_angular_material_examples_snack_bar_overview_snack_bar_overview_example__WEBPACK_IMPORTED_MODULE_88__["SnackBarOverviewExample"],
    assets_angular_material_examples_snack_bar_position_snack_bar_position_example__WEBPACK_IMPORTED_MODULE_105__["SnackBarPositionExample"],
    assets_angular_material_examples_sort_overview_sort_overview_example__WEBPACK_IMPORTED_MODULE_89__["SortOverviewExample"],
    assets_angular_material_examples_stepper_editable_stepper_editable_example__WEBPACK_IMPORTED_MODULE_136__["StepperEditableExample"],
    assets_angular_material_examples_stepper_optional_stepper_optional_example__WEBPACK_IMPORTED_MODULE_137__["StepperOptionalExample"],
    assets_angular_material_examples_stepper_overview_stepper_overview_example__WEBPACK_IMPORTED_MODULE_90__["StepperOverviewExample"],
    assets_angular_material_examples_table_basic_table_basic_example__WEBPACK_IMPORTED_MODULE_91__["TableBasicExample"],
    assets_angular_material_examples_table_filtering_table_filtering_example__WEBPACK_IMPORTED_MODULE_92__["TableFilteringExample"],
    assets_angular_material_examples_table_footer_row_table_footer_row_example__WEBPACK_IMPORTED_MODULE_138__["TableFooterRowExample"],
    assets_angular_material_examples_table_http_table_http_example__WEBPACK_IMPORTED_MODULE_93__["TableHttpExample"],
    assets_angular_material_examples_table_native_only_table_native_only_example__WEBPACK_IMPORTED_MODULE_139__["TableNativeOnlyExample"],
    assets_angular_material_examples_table_overview_table_overview_example__WEBPACK_IMPORTED_MODULE_94__["TableOverviewExample"],
    assets_angular_material_examples_table_pagination_table_pagination_example__WEBPACK_IMPORTED_MODULE_95__["TablePaginationExample"],
    assets_angular_material_examples_table_selection_table_selection_example__WEBPACK_IMPORTED_MODULE_106__["TableSelectionExample"],
    assets_angular_material_examples_table_sorting_table_sorting_example__WEBPACK_IMPORTED_MODULE_96__["TableSortingExample"],
    assets_angular_material_examples_tabs_overview_tabs_overview_example__WEBPACK_IMPORTED_MODULE_97__["TabsOverviewExample"],
    assets_angular_material_examples_tabs_template_label_tabs_template_label_example__WEBPACK_IMPORTED_MODULE_98__["TabsTemplateLabelExample"],
    assets_angular_material_examples_text_field_autofill_directive_text_field_autofill_directive_example__WEBPACK_IMPORTED_MODULE_140__["TextFieldAutofillDirectiveExample"],
    assets_angular_material_examples_text_field_autofill_monitor_text_field_autofill_monitor_example__WEBPACK_IMPORTED_MODULE_141__["TextFieldAutofillMonitorExample"],
    assets_angular_material_examples_text_field_autosize_textarea_text_field_autosize_textarea_example__WEBPACK_IMPORTED_MODULE_142__["TextFieldAutosizeTextareaExample"],
    assets_angular_material_examples_toolbar_multirow_toolbar_multirow_example__WEBPACK_IMPORTED_MODULE_99__["ToolbarMultirowExample"],
    assets_angular_material_examples_toolbar_overview_toolbar_overview_example__WEBPACK_IMPORTED_MODULE_100__["ToolbarOverviewExample"],
    assets_angular_material_examples_tooltip_delay_tooltip_delay_example__WEBPACK_IMPORTED_MODULE_107__["TooltipDelayExample"],
    assets_angular_material_examples_tooltip_manual_tooltip_manual_example__WEBPACK_IMPORTED_MODULE_108__["TooltipManualExample"],
    assets_angular_material_examples_tooltip_modified_defaults_tooltip_modified_defaults_example__WEBPACK_IMPORTED_MODULE_109__["TooltipModifiedDefaultsExample"],
    assets_angular_material_examples_tooltip_overview_tooltip_overview_example__WEBPACK_IMPORTED_MODULE_101__["TooltipOverviewExample"],
    assets_angular_material_examples_tooltip_position_tooltip_position_example__WEBPACK_IMPORTED_MODULE_102__["TooltipPositionExample"],
    assets_angular_material_examples_tree_checklist_tree_checklist_example__WEBPACK_IMPORTED_MODULE_143__["TreeChecklistExample"],
    assets_angular_material_examples_tree_dynamic_tree_dynamic_example__WEBPACK_IMPORTED_MODULE_144__["TreeDynamicExample"],
    assets_angular_material_examples_tree_flat_overview_tree_flat_overview_example__WEBPACK_IMPORTED_MODULE_145__["TreeFlatOverviewExample"],
    assets_angular_material_examples_tree_loadmore_tree_loadmore_example__WEBPACK_IMPORTED_MODULE_146__["TreeLoadmoreExample"],
    assets_angular_material_examples_tree_nested_overview_tree_nested_overview_example__WEBPACK_IMPORTED_MODULE_147__["TreeNestedOverviewExample"]
];


/***/ }),

/***/ "./src/app/main/content/components/angular-material/example-viewer/example-viewer.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/components/angular-material/example-viewer/example-viewer.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-viewer-wrapper mat-white-bg mat-elevation-z2\">\n\n    <div class=\"example-viewer-header\">\n\n        <div class=\"example-viewer-title\">{{exampleData?.title}}</div>\n\n        <button mat-icon-button type=\"button\" (click)=\"toggleSourceView()\"\n                [matTooltip]=\"'View source'\">\n            <mat-icon>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fit=\"\"\n                     preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\">\n                    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"></path>\n                    <path\n                        d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"></path>\n                </svg>\n            </mat-icon>\n        </button>\n    </div>\n\n    <div class=\"example-viewer-source\" [fxShow]=\"showSource\">\n\n        <mat-tab-group [(selectedIndex)]=\"selectedIndex\">\n            <mat-tab label=\"HTML\"></mat-tab>\n            <mat-tab label=\"TS\"></mat-tab>\n            <mat-tab label=\"CSS\"></mat-tab>\n        </mat-tab-group>\n        <div class=\"tab-content\">\n            <section class=\"tab\" *ngIf=\"selectedIndex === 0\"\n                     [@animate]=\"{value:'*',params:{opacity:'0',duration:'200ms'}}\">\n                <button mat-icon-button type=\"button\" class=\"example-source-copy\"\n                        title=\"Copy example source\" aria-label=\"Copy example source to clipboard\"\n                        (click)=\"copySource(htmlView.el.nativeElement.innerText)\">\n                    <mat-icon>content_copy</mat-icon>\n                </button>\n                <fuse-highlight lang=\"html\"\n                                [path]=\"'/assets/angular-material-examples/'+example+'/'+example+'-example.html'\">\n                </fuse-highlight>\n            </section>\n\n            <section class=\"tab\" *ngIf=\"selectedIndex === 1\"\n                     [@animate]=\"{value:'*',params:{opacity:'0',duration:'200ms'}}\">\n                <button mat-icon-button type=\"button\" class=\"example-source-copy\"\n                        title=\"Copy example source\" aria-label=\"Copy example source to clipboard\"\n                        (click)=\"copySource(tsView.el.nativeElement.innerText)\">\n                    <mat-icon>content_copy</mat-icon>\n                </button>\n                <fuse-highlight lang=\"typescript\"\n                                [path]=\"'/assets/angular-material-examples/'+example+'/'+example+'-example.ts'\">\n                </fuse-highlight>\n            </section>\n\n            <section class=\"tab\" *ngIf=\"selectedIndex === 2\"\n                     [@animate]=\"{value:'*',params:{opacity:'0',duration:'200ms'}}\">\n                <button mat-icon-button type=\"button\" class=\"example-source-copy\"\n                        title=\"Copy example source\" aria-label=\"Copy example source to clipboard\"\n                        (click)=\"copySource(cssView.el.nativeElement.innerText)\">\n                    <mat-icon>content_copy</mat-icon>\n                </button>\n                <fuse-highlight lang=\"css\"\n                                [path]=\"'/assets/angular-material-examples/'+example+'/'+example+'-example.css'\">\n                </fuse-highlight>\n            </section>\n        </div>\n    </div>\n\n    <div class=\"example-viewer-body\" [fxHide]=\"showSource\">\n        <!--<ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>-->\n        <!--<ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>-->\n        <div #previewContainer></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/components/angular-material/example-viewer/example-viewer.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/components/angular-material/example-viewer/example-viewer.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-example-viewer {\n  display: block;\n  padding: 24px 0; }\nfuse-example-viewer .example-viewer-wrapper {\n    border: 1px solid rgba(0, 0, 0, 0.03);\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\n    margin: 4px; }\nfuse-example-viewer .example-viewer-wrapper h3 {\n      margin-top: 10px; }\nfuse-example-viewer .example-viewer-header {\n    align-content: center;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    padding: 8px 20px;\n    color: rgba(0, 0, 0, 0.54);\n    background: rgba(0, 0, 0, 0.03);\n    flex: 1 1 auto; }\nfuse-example-viewer .example-viewer-header .example-viewer-title {\n      flex: 1 1 auto; }\nfuse-example-viewer .example-viewer-source .tab-content {\n    background: #263238; }\nfuse-example-viewer .example-viewer-source .tab-content .tab {\n      position: relative; }\nfuse-example-viewer .example-viewer-source .tab-content .tab .example-source-copy {\n        position: absolute;\n        top: 8px;\n        display: none;\n        right: 8px; }\nfuse-example-viewer .example-viewer-source .tab-content .tab .example-source-copy mat-icon {\n          color: rgba(255, 255, 255, 0.87); }\nfuse-example-viewer .example-viewer-source .tab-content .tab:hover .example-source-copy {\n        display: inline-block; }\nfuse-example-viewer .example-viewer-source .tab-content .tab .example-source {\n        display: flex;\n        padding: 0;\n        margin: 0;\n        min-height: 150px;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\nfuse-example-viewer .example-viewer-source .tab-content .tab .example-source > pre {\n          width: 100%; }\nfuse-example-viewer .example-viewer-body {\n    padding: 24px; }\n"

/***/ }),

/***/ "./src/app/main/content/components/angular-material/example-viewer/example-viewer.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/components/angular-material/example-viewer/example-viewer.ts ***!
  \*******************************************************************************************/
/*! exports provided: FuseExampleViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseExampleViewerComponent", function() { return FuseExampleViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-scss */ "./node_modules/prismjs/components/prism-scss.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _example_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../example-components */ "./src/app/main/content/components/angular-material/example-components.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_services_copier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/services/copier.service */ "./src/@fuse/services/copier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FuseExampleViewerComponent = /** @class */ (function () {
    function FuseExampleViewerComponent(snackbar, copier, _resolver) {
        this.snackbar = snackbar;
        this.copier = copier;
        this._resolver = _resolver;
        this.selectedIndex = 0;
        /** Whether the source for the example is being displayed. */
        this.showSource = false;
    }
    Object.defineProperty(FuseExampleViewerComponent.prototype, "container", {
        get: function () {
            return this._previewContainer;
        },
        set: function (value) {
            this._previewContainer = value;
        },
        enumerable: true,
        configurable: true
    });
    FuseExampleViewerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var cmpFactory = _this._resolver.resolveComponentFactory(_this.exampleData.component);
            _this.previewRef = _this._previewContainer.createComponent(cmpFactory);
        }, 0);
    };
    FuseExampleViewerComponent.prototype.ngOnDestroy = function () {
        if (this.previewRef) {
            this.previewRef.destroy();
        }
    };
    Object.defineProperty(FuseExampleViewerComponent.prototype, "example", {
        get: function () {
            return this._example;
        },
        set: function (example) {
            if (example && _example_components__WEBPACK_IMPORTED_MODULE_4__["EXAMPLE_COMPONENTS"][example]) {
                this._example = example;
                this.exampleData = _example_components__WEBPACK_IMPORTED_MODULE_4__["EXAMPLE_COMPONENTS"][example];
            }
            else {
                console.log('MISSING EXAMPLE: ', example);
            }
        },
        enumerable: true,
        configurable: true
    });
    FuseExampleViewerComponent.prototype.toggleSourceView = function () {
        this.showSource = !this.showSource;
    };
    FuseExampleViewerComponent.prototype.copySource = function (text) {
        if (this.copier.copyText(text)) {
            this.snackbar.open('Code copied', '', { duration: 2500 });
        }
        else {
            this.snackbar.open('Copy failed. Please try again!', '', { duration: 2500 });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('previewContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], FuseExampleViewerComponent.prototype, "_previewContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], FuseExampleViewerComponent.prototype, "example", null);
    FuseExampleViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-example-viewer',
            template: __webpack_require__(/*! ./example-viewer.html */ "./src/app/main/content/components/angular-material/example-viewer/example-viewer.html"),
            styles: [__webpack_require__(/*! ./example-viewer.scss */ "./src/app/main/content/components/angular-material/example-viewer/example-viewer.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _fuse_services_copier_service__WEBPACK_IMPORTED_MODULE_6__["FuseCopierService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], FuseExampleViewerComponent);
    return FuseExampleViewerComponent;
}());



/***/ }),

/***/ "./src/app/main/content/components/angular-material/material.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/components/angular-material/material.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MatMomentDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"]
            ],
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MatMomentDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example.css":
/*!**************************************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{ option }}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: AutocompleteAutoActiveFirstOptionExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteAutoActiveFirstOptionExample", function() { return AutocompleteAutoActiveFirstOptionExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * @title Highlight the first autocomplete option
 */
var AutocompleteAutoActiveFirstOptionExample = /** @class */ (function () {
    function AutocompleteAutoActiveFirstOptionExample() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
    }
    AutocompleteAutoActiveFirstOptionExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.filter(val); }));
    };
    AutocompleteAutoActiveFirstOptionExample.prototype.filter = function (val) {
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(val.toLowerCase()) === 0; });
    };
    AutocompleteAutoActiveFirstOptionExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'autocomplete-auto-active-first-option-example',
            template: __webpack_require__(/*! ./autocomplete-auto-active-first-option-example.html */ "./src/assets/angular-material-examples/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example.html"),
            styles: [__webpack_require__(/*! ./autocomplete-auto-active-first-option-example.css */ "./src/assets/angular-material-examples/autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example.css")]
        })
    ], AutocompleteAutoActiveFirstOptionExample);
    return AutocompleteAutoActiveFirstOptionExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-display/autocomplete-display-example.css":
/*!****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-display/autocomplete-display-example.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-display/autocomplete-display-example.html":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-display/autocomplete-display-example.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{ option.name }}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-display/autocomplete-display-example.ts":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-display/autocomplete-display-example.ts ***!
  \***************************************************************************************************/
/*! exports provided: User, AutocompleteDisplayExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteDisplayExample", function() { return AutocompleteDisplayExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());

/**
 * @title Display value autocomplete
 */
var AutocompleteDisplayExample = /** @class */ (function () {
    function AutocompleteDisplayExample() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = [
            new User('Mary'),
            new User('Shelley'),
            new User('Igor')
        ];
    }
    AutocompleteDisplayExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) { return name ? _this.filter(name) : _this.options.slice(); }));
    };
    AutocompleteDisplayExample.prototype.filter = function (name) {
        return this.options.filter(function (option) {
            return option.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    AutocompleteDisplayExample.prototype.displayFn = function (user) {
        return user ? user.name : undefined;
    };
    AutocompleteDisplayExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'autocomplete-display-example',
            template: __webpack_require__(/*! ./autocomplete-display-example.html */ "./src/assets/angular-material-examples/autocomplete-display/autocomplete-display-example.html"),
            styles: [__webpack_require__(/*! ./autocomplete-display-example.css */ "./src/assets/angular-material-examples/autocomplete-display/autocomplete-display-example.css")]
        })
    ], AutocompleteDisplayExample);
    return AutocompleteDisplayExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-filter/autocomplete-filter-example.css":
/*!**************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-filter/autocomplete-filter-example.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-filter/autocomplete-filter-example.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-filter/autocomplete-filter-example.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{ option }}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-filter/autocomplete-filter-example.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-filter/autocomplete-filter-example.ts ***!
  \*************************************************************************************************/
/*! exports provided: AutocompleteFilterExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteFilterExample", function() { return AutocompleteFilterExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * @title Filter autocomplete
 */
var AutocompleteFilterExample = /** @class */ (function () {
    function AutocompleteFilterExample() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
    }
    AutocompleteFilterExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.filter(val); }));
    };
    AutocompleteFilterExample.prototype.filter = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AutocompleteFilterExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'autocomplete-filter-example',
            template: __webpack_require__(/*! ./autocomplete-filter-example.html */ "./src/assets/angular-material-examples/autocomplete-filter/autocomplete-filter-example.html"),
            styles: [__webpack_require__(/*! ./autocomplete-filter-example.css */ "./src/assets/angular-material-examples/autocomplete-filter/autocomplete-filter-example.css")]
        })
    ], AutocompleteFilterExample);
    return AutocompleteFilterExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-optgroup/autocomplete-optgroup-example.css":
/*!******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-optgroup/autocomplete-optgroup-example.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-optgroup/autocomplete-optgroup-example.html":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-optgroup/autocomplete-optgroup-example.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\"/>\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{ name }}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n  </mat-form-field> \n</form>  \n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-optgroup/autocomplete-optgroup-example.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-optgroup/autocomplete-optgroup-example.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AutocompleteOptgroupExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteOptgroupExample", function() { return AutocompleteOptgroupExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @title Option groups autocomplete
 */
var AutocompleteOptgroupExample = /** @class */ (function () {
    function AutocompleteOptgroupExample(fb) {
        this.fb = fb;
        this.stateForm = this.fb.group({
            stateGroup: '',
        });
        this.stateGroups = [{
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
            }, {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut']
            }, {
                letter: 'D',
                names: ['Delaware']
            }, {
                letter: 'F',
                names: ['Florida']
            }, {
                letter: 'G',
                names: ['Georgia']
            }, {
                letter: 'H',
                names: ['Hawaii']
            }, {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
            }, {
                letter: 'K',
                names: ['Kansas', 'Kentucky']
            }, {
                letter: 'L',
                names: ['Louisiana']
            }, {
                letter: 'M',
                names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                    'Minnesota', 'Mississippi', 'Missouri', 'Montana']
            }, {
                letter: 'N',
                names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                    'New Mexico', 'New York', 'North Carolina', 'North Dakota']
            }, {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon']
            }, {
                letter: 'P',
                names: ['Pennsylvania']
            }, {
                letter: 'R',
                names: ['Rhode Island']
            }, {
                letter: 'S',
                names: ['South Carolina', 'South Dakota']
            }, {
                letter: 'T',
                names: ['Tennessee', 'Texas']
            }, {
                letter: 'U',
                names: ['Utah']
            }, {
                letter: 'V',
                names: ['Vermont', 'Virginia']
            }, {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
            }];
    }
    AutocompleteOptgroupExample.prototype.ngOnInit = function () {
        var _this = this;
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.filterGroup(val); }));
    };
    AutocompleteOptgroupExample.prototype.filterGroup = function (val) {
        var _this = this;
        if (val) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _this._filter(group.names, val) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    AutocompleteOptgroupExample.prototype._filter = function (opt, val) {
        var filterValue = val.toLowerCase();
        return opt.filter(function (item) { return item.toLowerCase().startsWith(filterValue); });
    };
    AutocompleteOptgroupExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./autocomplete-optgroup-example.html */ "./src/assets/angular-material-examples/autocomplete-optgroup/autocomplete-optgroup-example.html"),
            styles: [__webpack_require__(/*! ./autocomplete-optgroup-example.css */ "./src/assets/angular-material-examples/autocomplete-optgroup/autocomplete-optgroup-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AutocompleteOptgroupExample);
    return AutocompleteOptgroupExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-overview/autocomplete-overview-example.css":
/*!******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-overview/autocomplete-overview-example.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-overview/autocomplete-overview-example.html":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-overview/autocomplete-overview-example.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\n        <span>{{ state.name }}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br />\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-overview/autocomplete-overview-example.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-overview/autocomplete-overview-example.ts ***!
  \*****************************************************************************************************/
/*! exports provided: State, AutocompleteOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteOverviewExample", function() { return AutocompleteOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var State = /** @class */ (function () {
    function State(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
    return State;
}());

/**
 * @title Autocomplete overview
 */
var AutocompleteOverviewExample = /** @class */ (function () {
    function AutocompleteOverviewExample() {
        var _this = this;
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return state ? _this.filterStates(state) : _this.states.slice(); }));
    }
    AutocompleteOverviewExample.prototype.filterStates = function (name) {
        return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    AutocompleteOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'autocomplete-overview-example',
            template: __webpack_require__(/*! ./autocomplete-overview-example.html */ "./src/assets/angular-material-examples/autocomplete-overview/autocomplete-overview-example.html"),
            styles: [__webpack_require__(/*! ./autocomplete-overview-example.css */ "./src/assets/angular-material-examples/autocomplete-overview/autocomplete-overview-example.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AutocompleteOverviewExample);
    return AutocompleteOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-simple/autocomplete-simple-example.css":
/*!**************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-simple/autocomplete-simple-example.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-simple/autocomplete-simple-example.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-simple/autocomplete-simple-example.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n        {{ option }}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/autocomplete-simple/autocomplete-simple-example.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/autocomplete-simple/autocomplete-simple-example.ts ***!
  \*************************************************************************************************/
/*! exports provided: AutocompleteSimpleExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteSimpleExample", function() { return AutocompleteSimpleExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * @title Simple autocomplete
 */
var AutocompleteSimpleExample = /** @class */ (function () {
    function AutocompleteSimpleExample() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
    }
    AutocompleteSimpleExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'autocomplete-simple-example',
            template: __webpack_require__(/*! ./autocomplete-simple-example.html */ "./src/assets/angular-material-examples/autocomplete-simple/autocomplete-simple-example.html"),
            styles: [__webpack_require__(/*! ./autocomplete-simple-example.css */ "./src/assets/angular-material-examples/autocomplete-simple/autocomplete-simple-example.css")]
        })
    ], AutocompleteSimpleExample);
    return AutocompleteSimpleExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/badge-overview/badge-overview-example.css":
/*!****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/badge-overview/badge-overview-example.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/badge-overview/badge-overview-example.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/badge-overview/badge-overview-example.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n</p>\n\n<p>\n  Button with a badge on the left\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n</p>\n\n<p>\n  Icon with a badge\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n</p>\n\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/badge-overview/badge-overview-example.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/badge-overview/badge-overview-example.ts ***!
  \***************************************************************************************/
/*! exports provided: BadgeOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeOverviewExample", function() { return BadgeOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Badge overview
 */
var BadgeOverviewExample = /** @class */ (function () {
    function BadgeOverviewExample() {
    }
    BadgeOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'badge-overview-example',
            template: __webpack_require__(/*! ./badge-overview-example.html */ "./src/assets/angular-material-examples/badge-overview/badge-overview-example.html"),
            styles: [__webpack_require__(/*! ./badge-overview-example.css */ "./src/assets/angular-material-examples/badge-overview/badge-overview-example.css")]
        })
    ], BadgeOverviewExample);
    return BadgeOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example-sheet.html":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example-sheet.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example.css":
/*!******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example.html":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You have receive a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BottomSheetOverviewExample, BottomSheetOverviewExampleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExample", function() { return BottomSheetOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheet", function() { return BottomSheetOverviewExampleSheet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Bottom Sheet Overview
 */
var BottomSheetOverviewExample = /** @class */ (function () {
    function BottomSheetOverviewExample(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    BottomSheetOverviewExample.prototype.openBottomSheet = function () {
        this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    };
    BottomSheetOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bottom-sheet-overview-example',
            template: __webpack_require__(/*! ./bottom-sheet-overview-example.html */ "./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet-overview-example.css */ "./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"]])
    ], BottomSheetOverviewExample);
    return BottomSheetOverviewExample;
}());

var BottomSheetOverviewExampleSheet = /** @class */ (function () {
    function BottomSheetOverviewExampleSheet(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    BottomSheetOverviewExampleSheet.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheet = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bottom-sheet-overview-example-sheet',
            template: __webpack_require__(/*! ./bottom-sheet-overview-example-sheet.html */ "./src/assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example-sheet.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]])
    ], BottomSheetOverviewExampleSheet);
    return BottomSheetOverviewExampleSheet;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/button-overview/button-overview-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-overview/button-overview-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/button-overview/button-overview-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-overview/button-overview-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button>Click me!</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/button-overview/button-overview-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-overview/button-overview-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: ButtonOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonOverviewExample", function() { return ButtonOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic buttons
 */
var ButtonOverviewExample = /** @class */ (function () {
    function ButtonOverviewExample() {
    }
    ButtonOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'button-overview-example',
            template: __webpack_require__(/*! ./button-overview-example.html */ "./src/assets/angular-material-examples/button-overview/button-overview-example.html"),
            styles: [__webpack_require__(/*! ./button-overview-example.css */ "./src/assets/angular-material-examples/button-overview/button-overview-example.css")],
        })
    ], ButtonOverviewExample);
    return ButtonOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/button-toggle-exclusive/button-toggle-exclusive-example.css":
/*!**********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-toggle-exclusive/button-toggle-exclusive-example.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-selected-value {\n  margin: 15px 0;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/button-toggle-exclusive/button-toggle-exclusive-example.html":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-toggle-exclusive/button-toggle-exclusive-example.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled>\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/button-toggle-exclusive/button-toggle-exclusive-example.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-toggle-exclusive/button-toggle-exclusive-example.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ButtonToggleExclusiveExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonToggleExclusiveExample", function() { return ButtonToggleExclusiveExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Exclusive selection
 */
var ButtonToggleExclusiveExample = /** @class */ (function () {
    function ButtonToggleExclusiveExample() {
    }
    ButtonToggleExclusiveExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'button-toggle-exclusive-example',
            template: __webpack_require__(/*! ./button-toggle-exclusive-example.html */ "./src/assets/angular-material-examples/button-toggle-exclusive/button-toggle-exclusive-example.html"),
            styles: [__webpack_require__(/*! ./button-toggle-exclusive-example.css */ "./src/assets/angular-material-examples/button-toggle-exclusive/button-toggle-exclusive-example.css")],
        })
    ], ButtonToggleExclusiveExample);
    return ButtonToggleExclusiveExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/button-toggle-overview/button-toggle-overview-example.css":
/*!********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-toggle-overview/button-toggle-overview-example.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/button-toggle-overview/button-toggle-overview-example.html":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-toggle-overview/button-toggle-overview-example.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n</mat-button-toggle-group>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/button-toggle-overview/button-toggle-overview-example.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-toggle-overview/button-toggle-overview-example.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ButtonToggleOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonToggleOverviewExample", function() { return ButtonToggleOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic button-toggles
 */
var ButtonToggleOverviewExample = /** @class */ (function () {
    function ButtonToggleOverviewExample() {
    }
    ButtonToggleOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'button-toggle-overview-example',
            template: __webpack_require__(/*! ./button-toggle-overview-example.html */ "./src/assets/angular-material-examples/button-toggle-overview/button-toggle-overview-example.html"),
            styles: [__webpack_require__(/*! ./button-toggle-overview-example.css */ "./src/assets/angular-material-examples/button-toggle-overview/button-toggle-overview-example.css")],
        })
    ], ButtonToggleOverviewExample);
    return ButtonToggleOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/button-types/button-types-example.css":
/*!************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-types/button-types-example.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/button-types/button-types-example.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-types/button-types-example.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Basic Buttons</h3>\n<div class=\"button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"button-row\">\n  <button mat-icon-button>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"primary\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"accent\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"warn\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <button mat-icon-button disabled>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"button-row\">\n  <button mat-fab>Basic</button>\n  <button mat-fab color=\"primary\">Primary</button>\n  <button mat-fab color=\"accent\">Accent</button>\n  <button mat-fab color=\"warn\">Warn</button>\n  <button mat-fab disabled>Disabled</button>\n  <button mat-fab>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <a mat-fab routerLink=\".\">Link</a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"button-row\">\n  <button mat-mini-fab>Basic</button>\n  <button mat-mini-fab color=\"primary\">Primary</button>\n  <button mat-mini-fab color=\"accent\">Accent</button>\n  <button mat-mini-fab color=\"warn\">Warn</button>\n  <button mat-mini-fab disabled>Disabled</button>\n  <button mat-mini-fab>\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n  </button>\n  <a mat-mini-fab routerLink=\".\">Link</a>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/button-types/button-types-example.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/button-types/button-types-example.ts ***!
  \***********************************************************************************/
/*! exports provided: ButtonTypesExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTypesExample", function() { return ButtonTypesExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Button varieties
 */
var ButtonTypesExample = /** @class */ (function () {
    function ButtonTypesExample() {
    }
    ButtonTypesExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'button-types-example',
            template: __webpack_require__(/*! ./button-types-example.html */ "./src/assets/angular-material-examples/button-types/button-types-example.html"),
            styles: [__webpack_require__(/*! ./button-types-example.css */ "./src/assets/angular-material-examples/button-types/button-types-example.css")],
        })
    ], ButtonTypesExample);
    return ButtonTypesExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/card-fancy/card-fancy-example.css":
/*!********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/card-fancy/card-fancy-example.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/card-fancy/card-fancy-example.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/card-fancy/card-fancy-example.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/card-fancy/card-fancy-example.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/angular-material-examples/card-fancy/card-fancy-example.ts ***!
  \*******************************************************************************/
/*! exports provided: CardFancyExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFancyExample", function() { return CardFancyExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Card with multiple sections
 */
var CardFancyExample = /** @class */ (function () {
    function CardFancyExample() {
    }
    CardFancyExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card-fancy-example',
            template: __webpack_require__(/*! ./card-fancy-example.html */ "./src/assets/angular-material-examples/card-fancy/card-fancy-example.html"),
            styles: [__webpack_require__(/*! ./card-fancy-example.css */ "./src/assets/angular-material-examples/card-fancy/card-fancy-example.css")],
        })
    ], CardFancyExample);
    return CardFancyExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/card-overview/card-overview-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/card-overview/card-overview-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/card-overview/card-overview-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/card-overview/card-overview-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>Simple card</mat-card>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/card-overview/card-overview-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/card-overview/card-overview-example.ts ***!
  \*************************************************************************************/
/*! exports provided: CardOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardOverviewExample", function() { return CardOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic cards
 */
var CardOverviewExample = /** @class */ (function () {
    function CardOverviewExample() {
    }
    CardOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card-overview-example',
            template: __webpack_require__(/*! ./card-overview-example.html */ "./src/assets/angular-material-examples/card-overview/card-overview-example.html"),
            styles: [__webpack_require__(/*! ./card-overview-example.css */ "./src/assets/angular-material-examples/card-overview/card-overview-example.css")],
        })
    ], CardOverviewExample);
    return CardOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/cdk-table-basic/cdk-table-basic-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/cdk-table-basic/cdk-table-basic-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n/*\n * Styles to make the demo's cdk-table match the material design spec\n * https://material.io/guidelines/components/data-tables.html\n */\n.example-table {\n  flex: 1 1 auto;\n  overflow: auto;\n  max-height: 500px;\n}\n.example-header-row, .example-row {\n  display: flex;\n  border-bottom: 1px solid #ccc;\n  align-items: center;\n  height: 32px;\n  padding: 0 8px;\n}\n.example-cell, .example-header-cell {\n  flex: 1;\n}\n.example-header-cell {\n  font-size: 12px;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.54);\n}\n.example-cell {\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.87);\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/cdk-table-basic/cdk-table-basic-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/cdk-table-basic/cdk-table-basic-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <cdk-table #table [dataSource]=\"dataSource\" class=\"example-table\">\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container cdkColumnDef=\"userId\">\n      <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\"> ID </cdk-header-cell>\n      <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\"> {{row.id}} </cdk-cell>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container cdkColumnDef=\"progress\">\n      <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\"> Progress </cdk-header-cell>\n      <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\"> {{row.progress}}% </cdk-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"userName\">\n      <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\"> Name </cdk-header-cell>\n      <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\"> {{row.name}} </cdk-cell>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container cdkColumnDef=\"color\">\n      <cdk-header-cell *cdkHeaderCellDef class=\"example-header-cell\">Color</cdk-header-cell>\n      <cdk-cell *cdkCellDef=\"let row\" class=\"example-cell\"\n                [style.color]=\"row.color\">\n        {{row.color}}\n      </cdk-cell>\n    </ng-container>\n\n    <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\" class=\"example-header-row\"></cdk-header-row>\n    <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" class=\"example-row\"></cdk-row>\n  </cdk-table>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/cdk-table-basic/cdk-table-basic-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/cdk-table-basic/cdk-table-basic-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: CdkTableBasicExample, ExampleDatabase, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableBasicExample", function() { return CdkTableBasicExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDatabase", function() { return ExampleDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * @title Basic CDK data-table
 */
var CdkTableBasicExample = /** @class */ (function () {
    function CdkTableBasicExample() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase();
    }
    CdkTableBasicExample.prototype.ngOnInit = function () {
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
    };
    CdkTableBasicExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-table-basic-example',
            styles: [__webpack_require__(/*! ./cdk-table-basic-example.css */ "./src/assets/angular-material-examples/cdk-table-basic/cdk-table-basic-example.css")],
            template: __webpack_require__(/*! ./cdk-table-basic-example.html */ "./src/assets/angular-material-examples/cdk-table-basic/cdk-table-basic-example.html"),
        })
    ], CdkTableBasicExample);
    return CdkTableBasicExample;
}());

/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return this._exampleDatabase.dataChange;
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));



/***/ }),

/***/ "./src/assets/angular-material-examples/cdk-tree-flat/cdk-tree-flat-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/cdk-tree-flat/cdk-tree-flat-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-tree-node {\n  display: flex;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/cdk-tree-flat/cdk-tree-flat-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/cdk-tree-flat/cdk-tree-flat-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding class=\"demo-tree-node\">\n    <button mat-icon-button disabled></button>\n    {{node.filename}}:  {{node.type}}\n  </cdk-tree-node>\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding class=\"demo-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.filename}}:  {{node.type}}\n  </cdk-tree-node>\n</cdk-tree>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/cdk-tree-flat/cdk-tree-flat-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/cdk-tree-flat/cdk-tree-flat-example.ts ***!
  \*************************************************************************************/
/*! exports provided: FileNode, FileFlatNode, FileDatabase, CdkTreeFlatExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNode", function() { return FileNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFlatNode", function() { return FileFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDatabase", function() { return FileDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeFlatExample", function() { return CdkTreeFlatExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
var FileNode = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());

/** Flat node with expandable and level information */
var FileFlatNode = /** @class */ (function () {
    function FileFlatNode() {
    }
    return FileFlatNode;
}());

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
var TREE_DATA = "\n  {\n    \"Documents\": {\n      \"angular\": {\n        \"src\": {\n          \"core\": \"ts\",\n          \"compiler\": \"ts\"\n        }\n      },\n      \"material2\": {\n        \"src\": {\n          \"button\": \"ts\",\n          \"checkbox\": \"ts\",\n          \"input\": \"ts\"\n        }\n      }\n    },\n    \"Downloads\": {\n        \"Tutorial\": \"html\",\n        \"November\": \"pdf\",\n        \"October\": \"pdf\"\n    },\n    \"Pictures\": {\n        \"Sun\": \"png\",\n        \"Woods\": \"jpg\",\n        \"Photo Booth Library\": {\n          \"Contents\": \"dir\",\n          \"Pictures\": \"dir\"\n        }\n    },\n    \"Applications\": {\n        \"Chrome\": \"app\",\n        \"Calendar\": \"app\",\n        \"Webstorm\": \"app\"\n    }\n}";
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    FileDatabase.prototype.initialize = function () {
        // Parse the string to json object.
        var dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    FileDatabase.prototype.buildFileTree = function (value, level) {
        var data = [];
        for (var k in value) {
            var v = value[k];
            var node = new FileNode();
            node.filename = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.type = v;
            }
            data.push(node);
        }
        return data;
    };
    FileDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FileDatabase);
    return FileDatabase;
}());

/**
 * @title Tree with flat nodes
 */
var CdkTreeFlatExample = /** @class */ (function () {
    function CdkTreeFlatExample(database) {
        var _this = this;
        this.transformer = function (node, level) {
            var flatNode = new FileFlatNode();
            flatNode.filename = node.filename;
            flatNode.type = node.type;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            return flatNode;
        };
        this._getLevel = function (node) { return node.level; };
        this._isExpandable = function (node) { return node.expandable; };
        this._getChildren = function (node) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(node.children); };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this._getLevel, this._isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    CdkTreeFlatExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-tree-flat-example',
            template: __webpack_require__(/*! ./cdk-tree-flat-example.html */ "./src/assets/angular-material-examples/cdk-tree-flat/cdk-tree-flat-example.html"),
            styles: [__webpack_require__(/*! ./cdk-tree-flat-example.css */ "./src/assets/angular-material-examples/cdk-tree-flat/cdk-tree-flat-example.css")],
            providers: [FileDatabase]
        }),
        __metadata("design:paramtypes", [FileDatabase])
    ], CdkTreeFlatExample);
    return CdkTreeFlatExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/cdk-tree-nested/cdk-tree-nested-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/cdk-tree-nested/cdk-tree-nested-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n.example-tree-node {\n  display: block;\n  padding-left: 40px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/cdk-tree-nested/cdk-tree-nested-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/cdk-tree-nested/cdk-tree-nested-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\">\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <button mat-icon-button disabled></button>\n    {{node.filename}}:  {{node.type}}\n  </cdk-nested-tree-node>\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasNestedChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.filename}}:  {{node.type}}\n    <div [class.example-tree-invisible]=\"!nestedTreeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/cdk-tree-nested/cdk-tree-nested-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/cdk-tree-nested/cdk-tree-nested-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: FileNode, FileDatabase, CdkTreeNestedExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNode", function() { return FileNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDatabase", function() { return FileDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTreeNestedExample", function() { return CdkTreeNestedExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
var FileNode = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());

/**
 * The Json tree data in string. The data could be parsed into Json object
 */
var TREE_DATA = "\n  {\n    \"Documents\": {\n      \"angular\": {\n        \"src\": {\n          \"core\": \"ts\",\n          \"compiler\": \"ts\"\n        }\n      },\n      \"material2\": {\n        \"src\": {\n          \"button\": \"ts\",\n          \"checkbox\": \"ts\",\n          \"input\": \"ts\"\n        }\n      }\n    },\n    \"Downloads\": {\n        \"Tutorial\": \"html\",\n        \"November\": \"pdf\",\n        \"October\": \"pdf\"\n    },\n    \"Pictures\": {\n        \"Sun\": \"png\",\n        \"Woods\": \"jpg\",\n        \"Photo Booth Library\": {\n          \"Contents\": \"dir\",\n          \"Pictures\": \"dir\"\n        }\n    },\n    \"Applications\": {\n        \"Chrome\": \"app\",\n        \"Calendar\": \"app\",\n        \"Webstorm\": \"app\"\n    }\n  }";
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    FileDatabase.prototype.initialize = function () {
        // Parse the string to json object.
        var dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    FileDatabase.prototype.buildFileTree = function (value, level) {
        var data = [];
        for (var k in value) {
            var v = value[k];
            var node = new FileNode();
            node.filename = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.type = v;
            }
            data.push(node);
        }
        return data;
    };
    FileDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FileDatabase);
    return FileDatabase;
}());

/**
 * @title Tree with nested nodes
 */
var CdkTreeNestedExample = /** @class */ (function () {
    function CdkTreeNestedExample(database) {
        var _this = this;
        this._getChildren = function (node) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(node.children); };
        this.hasNestedChild = function (_, nodeData) { return !(nodeData.type); };
        this.nestedTreeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](this._getChildren);
        this.nestedDataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNestedDataSource"]();
        database.dataChange.subscribe(function (data) { return _this.nestedDataSource.data = data; });
    }
    CdkTreeNestedExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-tree-nested-example',
            template: __webpack_require__(/*! ./cdk-tree-nested-example.html */ "./src/assets/angular-material-examples/cdk-tree-nested/cdk-tree-nested-example.html"),
            styles: [__webpack_require__(/*! ./cdk-tree-nested-example.css */ "./src/assets/angular-material-examples/cdk-tree-nested/cdk-tree-nested-example.css")],
            providers: [FileDatabase]
        }),
        __metadata("design:paramtypes", [FileDatabase])
    ], CdkTreeNestedExample);
    return CdkTreeNestedExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/checkbox-configurable/checkbox-configurable-example.css":
/*!******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/checkbox-configurable/checkbox-configurable-example.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/checkbox-configurable/checkbox-configurable-example.html":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/checkbox-configurable/checkbox-configurable-example.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox\n          class=\"example-margin\"\n          [(ngModel)]=\"checked\"\n          [(indeterminate)]=\"indeterminate\"\n          [labelPosition]=\"labelPosition\"\n          [disabled]=\"disabled\">\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/checkbox-configurable/checkbox-configurable-example.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/checkbox-configurable/checkbox-configurable-example.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CheckboxConfigurableExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxConfigurableExample", function() { return CheckboxConfigurableExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Configurable checkbox
 */
var CheckboxConfigurableExample = /** @class */ (function () {
    function CheckboxConfigurableExample() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
    CheckboxConfigurableExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkbox-configurable-example',
            template: __webpack_require__(/*! ./checkbox-configurable-example.html */ "./src/assets/angular-material-examples/checkbox-configurable/checkbox-configurable-example.html"),
            styles: [__webpack_require__(/*! ./checkbox-configurable-example.css */ "./src/assets/angular-material-examples/checkbox-configurable/checkbox-configurable-example.css")],
        })
    ], CheckboxConfigurableExample);
    return CheckboxConfigurableExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/checkbox-overview/checkbox-overview-example.css":
/*!**********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/checkbox-overview/checkbox-overview-example.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/checkbox-overview/checkbox-overview-example.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/checkbox-overview/checkbox-overview-example.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-checkbox>Check me!</mat-checkbox>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/checkbox-overview/checkbox-overview-example.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/checkbox-overview/checkbox-overview-example.ts ***!
  \*********************************************************************************************/
/*! exports provided: CheckboxOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxOverviewExample", function() { return CheckboxOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic checkboxes
 */
var CheckboxOverviewExample = /** @class */ (function () {
    function CheckboxOverviewExample() {
    }
    CheckboxOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkbox-overview-example',
            template: __webpack_require__(/*! ./checkbox-overview-example.html */ "./src/assets/angular-material-examples/checkbox-overview/checkbox-overview-example.html"),
            styles: [__webpack_require__(/*! ./checkbox-overview-example.css */ "./src/assets/angular-material-examples/checkbox-overview/checkbox-overview-example.css")],
        })
    ], CheckboxOverviewExample);
    return CheckboxOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/chips-autocomplete/chips-autocomplete-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-autocomplete/chips-autocomplete-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-chip-list {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/chips-autocomplete/chips-autocomplete-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-autocomplete/chips-autocomplete-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"demo-chip-list\">\n  <mat-chip-list #chipList>\n    <mat-chip\n      *ngFor=\"let fruit of fruits\"\n      [selectable]=\"selectable\"\n      [removable]=\"removable\"\n      (removed)=\"remove(fruit)\">\n      {{fruit.name}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input\n      placeholder=\"New fruit...\"\n      #fruitInput\n      [formControl]=\"fruitCtrl\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\"\n    />\n  </mat-chip-list>\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n    <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n      {{ fruit }}\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/chips-autocomplete/chips-autocomplete-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-autocomplete/chips-autocomplete-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: ChipsAutocompleteExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsAutocompleteExample", function() { return ChipsAutocompleteExample; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @title Chips Autocomplete
 */
var ChipsAutocompleteExample = /** @class */ (function () {
    function ChipsAutocompleteExample() {
        var _this = this;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.fruits = [
            { name: 'Lemon' },
        ];
        this.allFruits = [
            'Orange',
            'Strawberry',
            'Lime',
            'Apple',
        ];
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (fruit) { return fruit ? _this.filter(fruit) : _this.allFruits.slice(); }));
    }
    ChipsAutocompleteExample.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ChipsAutocompleteExample.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsAutocompleteExample.prototype.filter = function (name) {
        return this.allFruits.filter(function (fruit) {
            return fruit.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    ChipsAutocompleteExample.prototype.selected = function (event) {
        this.fruits.push({ name: event.option.viewValue });
        this.fruitInput.nativeElement.value = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fruitInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChipsAutocompleteExample.prototype, "fruitInput", void 0);
    ChipsAutocompleteExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chips-autocomplete-example',
            template: __webpack_require__(/*! ./chips-autocomplete-example.html */ "./src/assets/angular-material-examples/chips-autocomplete/chips-autocomplete-example.html"),
            styles: [__webpack_require__(/*! ./chips-autocomplete-example.css */ "./src/assets/angular-material-examples/chips-autocomplete/chips-autocomplete-example.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChipsAutocompleteExample);
    return ChipsAutocompleteExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/chips-input/chips-input-example.css":
/*!**********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-input/chips-input-example.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-chip-list {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/chips-input/chips-input-example.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-input/chips-input-example.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"demo-chip-list\">\n  <mat-chip-list #chipList>\n    <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\n             [removable]=\"removable\" (removed)=\"remove(fruit)\">\n      {{fruit.name}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipList\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\" />\n  </mat-chip-list>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/chips-input/chips-input-example.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-input/chips-input-example.ts ***!
  \*********************************************************************************/
/*! exports provided: ChipsInputExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsInputExample", function() { return ChipsInputExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * @title Chips with input
 */
var ChipsInputExample = /** @class */ (function () {
    function ChipsInputExample() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
    }
    ChipsInputExample.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ChipsInputExample.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsInputExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chips-input-example',
            template: __webpack_require__(/*! ./chips-input-example.html */ "./src/assets/angular-material-examples/chips-input/chips-input-example.html"),
            styles: [__webpack_require__(/*! ./chips-input-example.css */ "./src/assets/angular-material-examples/chips-input/chips-input-example.css")]
        })
    ], ChipsInputExample);
    return ChipsInputExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/chips-overview/chips-overview-example.css":
/*!****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-overview/chips-overview-example.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/chips-overview/chips-overview-example.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-overview/chips-overview-example.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-chip-list>\n  <mat-chip>One fish</mat-chip>\n  <mat-chip>Two fish</mat-chip>\n  <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\n  <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\n</mat-chip-list>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/chips-overview/chips-overview-example.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-overview/chips-overview-example.ts ***!
  \***************************************************************************************/
/*! exports provided: ChipsOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsOverviewExample", function() { return ChipsOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic chips
 */
var ChipsOverviewExample = /** @class */ (function () {
    function ChipsOverviewExample() {
    }
    ChipsOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chips-overview-example',
            template: __webpack_require__(/*! ./chips-overview-example.html */ "./src/assets/angular-material-examples/chips-overview/chips-overview-example.html"),
            styles: [__webpack_require__(/*! ./chips-overview-example.css */ "./src/assets/angular-material-examples/chips-overview/chips-overview-example.css")],
        })
    ], ChipsOverviewExample);
    return ChipsOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/chips-stacked/chips-stacked-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-stacked/chips-stacked-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-chip {\n  max-width: 200px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/chips-stacked/chips-stacked-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-stacked/chips-stacked-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-chip-list class=\"mat-chip-list-stacked\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected=\"true\" [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/chips-stacked/chips-stacked-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/chips-stacked/chips-stacked-example.ts ***!
  \*************************************************************************************/
/*! exports provided: ChipsStackedExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsStackedExample", function() { return ChipsStackedExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Stacked chips
 */
var ChipsStackedExample = /** @class */ (function () {
    function ChipsStackedExample() {
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsStackedExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chips-stacked-example',
            template: __webpack_require__(/*! ./chips-stacked-example.html */ "./src/assets/angular-material-examples/chips-stacked/chips-stacked-example.html"),
            styles: [__webpack_require__(/*! ./chips-stacked-example.css */ "./src/assets/angular-material-examples/chips-stacked/chips-stacked-example.css")],
        })
    ], ChipsStackedExample);
    return ChipsStackedExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-api/datepicker-api-example.css":
/*!****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-api/datepicker-api-example.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-api/datepicker-api-example.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-api/datepicker-api-example.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-api/datepicker-api-example.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-api/datepicker-api-example.ts ***!
  \***************************************************************************************/
/*! exports provided: DatepickerApiExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerApiExample", function() { return DatepickerApiExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Datepicker open method */
var DatepickerApiExample = /** @class */ (function () {
    function DatepickerApiExample() {
    }
    DatepickerApiExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-api-example',
            template: __webpack_require__(/*! ./datepicker-api-example.html */ "./src/assets/angular-material-examples/datepicker-api/datepicker-api-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-api-example.css */ "./src/assets/angular-material-examples/datepicker-api/datepicker-api-example.css")],
        })
    ], DatepickerApiExample);
    return DatepickerApiExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-color/datepicker-color-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-color/datepicker-color-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-color/datepicker-color-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-color/datepicker-color-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field color=\"accent\">\n  <mat-label>Inherited calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker1\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field color=\"accent\">\n  <mat-label>Custom calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker2\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-color/datepicker-color-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-color/datepicker-color-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: DatepickerColorExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerColorExample", function() { return DatepickerColorExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Datepicker palette colors */
var DatepickerColorExample = /** @class */ (function () {
    function DatepickerColorExample() {
    }
    DatepickerColorExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-color-example',
            template: __webpack_require__(/*! ./datepicker-color-example.html */ "./src/assets/angular-material-examples/datepicker-color/datepicker-color-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-color-example.css */ "./src/assets/angular-material-examples/datepicker-color/datepicker-color-example.css")],
        })
    ], DatepickerColorExample);
    return DatepickerColorExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-custom-header/datepicker-custom-header-example.css":
/*!************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-custom-header/datepicker-custom-header-example.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header {\n  display: flex;\n  align-items: center;\n  padding: 0.5em;\n}\n\n.example-header-label {\n  flex: 1;\n  height: 1em;\n  font-weight: bold;\n  text-align: center;\n}\n\n.example-double-arrow .mat-icon {\n  margin: -22%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-custom-header/datepicker-custom-header-example.html":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-custom-header/datepicker-custom-header-example.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-custom-header/datepicker-custom-header-example.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-custom-header/datepicker-custom-header-example.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DatepickerCustomHeaderExample, ExampleHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerCustomHeaderExample", function() { return DatepickerCustomHeaderExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHeader", function() { return ExampleHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/** @title Datepicker with custom calendar header */
var DatepickerCustomHeaderExample = /** @class */ (function () {
    function DatepickerCustomHeaderExample() {
        this.exampleHeader = ExampleHeader;
    }
    DatepickerCustomHeaderExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-custom-header-example',
            template: __webpack_require__(/*! ./datepicker-custom-header-example.html */ "./src/assets/angular-material-examples/datepicker-custom-header/datepicker-custom-header-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-custom-header-example.css */ "./src/assets/angular-material-examples/datepicker-custom-header/datepicker-custom-header-example.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        })
    ], DatepickerCustomHeaderExample);
    return DatepickerCustomHeaderExample;
}());

/** Custom header component for datepicker. */
var ExampleHeader = /** @class */ (function () {
    function ExampleHeader(calendar, dateAdapter, dateFormats, cdr) {
        this.calendar = calendar;
        this.dateAdapter = dateAdapter;
        this.dateFormats = dateFormats;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        calendar.stateChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed))
            .subscribe(function () { return cdr.markForCheck(); });
    }
    ExampleHeader.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    Object.defineProperty(ExampleHeader.prototype, "periodLabel", {
        get: function () {
            return this.dateAdapter
                .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
                .toLocaleUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    ExampleHeader.prototype.previousClicked = function (mode) {
        this.calendar.activeDate = mode == 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
    };
    ExampleHeader.prototype.nextClicked = function (mode) {
        this.calendar.activeDate = mode == 'month' ?
            this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
    };
    ExampleHeader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'example-header',
            template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCalendar"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ExampleHeader);
    return ExampleHeader;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-custom-icon/datepicker-custom-icon-example.css":
/*!********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-custom-icon/datepicker-custom-icon-example.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-custom-icon/datepicker-custom-icon-example.html":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-custom-icon/datepicker-custom-icon-example.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\">\n    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n  </mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-custom-icon/datepicker-custom-icon-example.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-custom-icon/datepicker-custom-icon-example.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DatepickerCustomIconExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerCustomIconExample", function() { return DatepickerCustomIconExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Datepicker with custom icon */
var DatepickerCustomIconExample = /** @class */ (function () {
    function DatepickerCustomIconExample() {
    }
    DatepickerCustomIconExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-custom-icon-example',
            template: __webpack_require__(/*! ./datepicker-custom-icon-example.html */ "./src/assets/angular-material-examples/datepicker-custom-icon/datepicker-custom-icon-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-custom-icon-example.css */ "./src/assets/angular-material-examples/datepicker-custom-icon/datepicker-custom-icon-example.css")],
        })
    ], DatepickerCustomIconExample);
    return DatepickerCustomIconExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-disabled/datepicker-disabled-example.css":
/*!**************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-disabled/datepicker-disabled-example.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-disabled/datepicker-disabled-example.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-disabled/datepicker-disabled-example.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\n    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-disabled/datepicker-disabled-example.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-disabled/datepicker-disabled-example.ts ***!
  \*************************************************************************************************/
/*! exports provided: DatepickerDisabledExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerDisabledExample", function() { return DatepickerDisabledExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Disabled datepicker */
var DatepickerDisabledExample = /** @class */ (function () {
    function DatepickerDisabledExample() {
    }
    DatepickerDisabledExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-disabled-example',
            template: __webpack_require__(/*! ./datepicker-disabled-example.html */ "./src/assets/angular-material-examples/datepicker-disabled/datepicker-disabled-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-disabled-example.css */ "./src/assets/angular-material-examples/datepicker-disabled/datepicker-disabled-example.css")],
        })
    ], DatepickerDisabledExample);
    return DatepickerDisabledExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-events/datepicker-events-example.css":
/*!**********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-events/datepicker-events-example.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-events {\n  width: 400px;\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-events/datepicker-events-example.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-events/datepicker-events-example.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\"\n         (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n\n<div class=\"example-events\">\n  <div *ngFor=\"let e of events\">{{e}}</div>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-events/datepicker-events-example.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-events/datepicker-events-example.ts ***!
  \*********************************************************************************************/
/*! exports provided: DatepickerEventsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerEventsExample", function() { return DatepickerEventsExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Datepicker input and change events */
var DatepickerEventsExample = /** @class */ (function () {
    function DatepickerEventsExample() {
        this.events = [];
    }
    DatepickerEventsExample.prototype.addEvent = function (type, event) {
        this.events.push(type + ": " + event.value);
    };
    DatepickerEventsExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-events-example',
            template: __webpack_require__(/*! ./datepicker-events-example.html */ "./src/assets/angular-material-examples/datepicker-events/datepicker-events-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-events-example.css */ "./src/assets/angular-material-examples/datepicker-events/datepicker-events-example.css")],
        })
    ], DatepickerEventsExample);
    return DatepickerEventsExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-filter/datepicker-filter-example.css":
/*!**********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-filter/datepicker-filter-example.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-filter/datepicker-filter-example.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-filter/datepicker-filter-example.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-filter/datepicker-filter-example.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-filter/datepicker-filter-example.ts ***!
  \*********************************************************************************************/
/*! exports provided: DatepickerFilterExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerFilterExample", function() { return DatepickerFilterExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Datepicker with filter validation */
var DatepickerFilterExample = /** @class */ (function () {
    function DatepickerFilterExample() {
        this.myFilter = function (d) {
            var day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    DatepickerFilterExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-filter-example',
            template: __webpack_require__(/*! ./datepicker-filter-example.html */ "./src/assets/angular-material-examples/datepicker-filter/datepicker-filter-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-filter-example.css */ "./src/assets/angular-material-examples/datepicker-filter/datepicker-filter-example.css")],
        })
    ], DatepickerFilterExample);
    return DatepickerFilterExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-formats/datepicker-formats-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-formats/datepicker-formats-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-formats/datepicker-formats-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-formats/datepicker-formats-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Verbose datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-formats/datepicker-formats-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-formats/datepicker-formats-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: MY_FORMATS, DatepickerFormatsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerFormatsExample", function() { return DatepickerFormatsExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

// tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment} from 'moment';
// const moment = _rollupMoment || _moment;
var moment = moment__WEBPACK_IMPORTED_MODULE_4__;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Datepicker with custom formats */
var DatepickerFormatsExample = /** @class */ (function () {
    function DatepickerFormatsExample() {
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment());
    }
    DatepickerFormatsExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-formats-example',
            template: __webpack_require__(/*! ./datepicker-formats-example.html */ "./src/assets/angular-material-examples/datepicker-formats/datepicker-formats-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-formats-example.css */ "./src/assets/angular-material-examples/datepicker-formats/datepicker-formats-example.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        })
    ], DatepickerFormatsExample);
    return DatepickerFormatsExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-locale/datepicker-locale-example.css":
/*!**********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-locale/datepicker-locale-example.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-locale/datepicker-locale-example.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-locale/datepicker-locale-example.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-locale/datepicker-locale-example.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-locale/datepicker-locale-example.ts ***!
  \*********************************************************************************************/
/*! exports provided: DatepickerLocaleExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerLocaleExample", function() { return DatepickerLocaleExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** @title Datepicker with different locale */
var DatepickerLocaleExample = /** @class */ (function () {
    function DatepickerLocaleExample(adapter) {
        this.adapter = adapter;
    }
    DatepickerLocaleExample.prototype.french = function () {
        this.adapter.setLocale('fr');
    };
    DatepickerLocaleExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-locale-example',
            template: __webpack_require__(/*! ./datepicker-locale-example.html */ "./src/assets/angular-material-examples/datepicker-locale/datepicker-locale-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-locale-example.css */ "./src/assets/angular-material-examples/datepicker-locale/datepicker-locale-example.css")],
            providers: [
                // The locale would typically be provided on the root module of your application. We do it at
                // the component level here, due to limitations of our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"], useValue: 'ja-JP' },
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__["MAT_MOMENT_DATE_FORMATS"] },
            ],
        }),
        __metadata("design:paramtypes", [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]])
    ], DatepickerLocaleExample);
    return DatepickerLocaleExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-min-max/datepicker-min-max-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-min-max/datepicker-min-max-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-min-max/datepicker-min-max-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-min-max/datepicker-min-max-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\">\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-min-max/datepicker-min-max-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-min-max/datepicker-min-max-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: DatepickerMinMaxExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerMinMaxExample", function() { return DatepickerMinMaxExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Datepicker with min & max validation */
var DatepickerMinMaxExample = /** @class */ (function () {
    function DatepickerMinMaxExample() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
    DatepickerMinMaxExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-min-max-example',
            template: __webpack_require__(/*! ./datepicker-min-max-example.html */ "./src/assets/angular-material-examples/datepicker-min-max/datepicker-min-max-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-min-max-example.css */ "./src/assets/angular-material-examples/datepicker-min-max/datepicker-min-max-example.css")],
        })
    ], DatepickerMinMaxExample);
    return DatepickerMinMaxExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-moment/datepicker-moment-example.css":
/*!**********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-moment/datepicker-moment-example.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-moment/datepicker-moment-example.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-moment/datepicker-moment-example.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-moment/datepicker-moment-example.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-moment/datepicker-moment-example.ts ***!
  \*********************************************************************************************/
/*! exports provided: DatepickerMomentExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerMomentExample", function() { return DatepickerMomentExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

// tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment} from 'moment';
// const moment = _rollupMoment || _moment;
var moment = moment__WEBPACK_IMPORTED_MODULE_4__;
/** @title Datepicker that uses Moment.js dates */
var DatepickerMomentExample = /** @class */ (function () {
    function DatepickerMomentExample() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment([2017, 0, 1]));
    }
    DatepickerMomentExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-moment-example',
            template: __webpack_require__(/*! ./datepicker-moment-example.html */ "./src/assets/angular-material-examples/datepicker-moment/datepicker-moment-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-moment-example.css */ "./src/assets/angular-material-examples/datepicker-moment/datepicker-moment-example.css")],
            providers: [
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MAT_MOMENT_DATE_FORMATS"] },
            ],
        })
    ], DatepickerMomentExample);
    return DatepickerMomentExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-overview/datepicker-overview-example.css":
/*!**************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-overview/datepicker-overview-example.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-overview/datepicker-overview-example.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-overview/datepicker-overview-example.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-overview/datepicker-overview-example.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-overview/datepicker-overview-example.ts ***!
  \*************************************************************************************************/
/*! exports provided: DatepickerOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerOverviewExample", function() { return DatepickerOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Basic datepicker */
var DatepickerOverviewExample = /** @class */ (function () {
    function DatepickerOverviewExample() {
    }
    DatepickerOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-overview-example',
            template: __webpack_require__(/*! ./datepicker-overview-example.html */ "./src/assets/angular-material-examples/datepicker-overview/datepicker-overview-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-overview-example.css */ "./src/assets/angular-material-examples/datepicker-overview/datepicker-overview-example.css")],
        })
    ], DatepickerOverviewExample);
    return DatepickerOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-start-view/datepicker-start-view-example.css":
/*!******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-start-view/datepicker-start-view-example.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-start-view/datepicker-start-view-example.html":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-start-view/datepicker-start-view-example.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-start-view/datepicker-start-view-example.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-start-view/datepicker-start-view-example.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DatepickerStartViewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerStartViewExample", function() { return DatepickerStartViewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Datepicker start date */
var DatepickerStartViewExample = /** @class */ (function () {
    function DatepickerStartViewExample() {
        this.startDate = new Date(1990, 0, 1);
    }
    DatepickerStartViewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-start-view-example',
            template: __webpack_require__(/*! ./datepicker-start-view-example.html */ "./src/assets/angular-material-examples/datepicker-start-view/datepicker-start-view-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-start-view-example.css */ "./src/assets/angular-material-examples/datepicker-start-view/datepicker-start-view-example.css")],
        })
    ], DatepickerStartViewExample);
    return DatepickerStartViewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-touch/datepicker-touch-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-touch/datepicker-touch-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-touch/datepicker-touch-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-touch/datepicker-touch-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker touchUi=\"true\" #picker></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-touch/datepicker-touch-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-touch/datepicker-touch-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: DatepickerTouchExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerTouchExample", function() { return DatepickerTouchExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Datepicker touch UI */
var DatepickerTouchExample = /** @class */ (function () {
    function DatepickerTouchExample() {
    }
    DatepickerTouchExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-touch-example',
            template: __webpack_require__(/*! ./datepicker-touch-example.html */ "./src/assets/angular-material-examples/datepicker-touch/datepicker-touch-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-touch-example.css */ "./src/assets/angular-material-examples/datepicker-touch/datepicker-touch-example.css")],
        })
    ], DatepickerTouchExample);
    return DatepickerTouchExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-value/datepicker-value-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-value/datepicker-value-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-value/datepicker-value-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-value/datepicker-value-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\"\n         [formControl]=\"serializedDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-value/datepicker-value-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-value/datepicker-value-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: DatepickerValueExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerValueExample", function() { return DatepickerValueExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** @title Datepicker selected value */
var DatepickerValueExample = /** @class */ (function () {
    function DatepickerValueExample() {
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((new Date()).toISOString());
    }
    DatepickerValueExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-value-example',
            template: __webpack_require__(/*! ./datepicker-value-example.html */ "./src/assets/angular-material-examples/datepicker-value/datepicker-value-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-value-example.css */ "./src/assets/angular-material-examples/datepicker-value/datepicker-value-example.css")],
        })
    ], DatepickerValueExample);
    return DatepickerValueExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-views-selection/datepicker-views-selection-example.css":
/*!****************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-views-selection/datepicker-views-selection-example.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-views-selection/datepicker-views-selection-example.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-views-selection/datepicker-views-selection-example.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Month and Year\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (yearSelected)=\"chosenYearHandler($event)\"\n                  (monthSelected)=\"chosenMonthHandler($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/datepicker-views-selection/datepicker-views-selection-example.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/datepicker-views-selection/datepicker-views-selection-example.ts ***!
  \***************************************************************************************************************/
/*! exports provided: MY_FORMATS, DatepickerViewsSelectionExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerViewsSelectionExample", function() { return DatepickerViewsSelectionExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

// tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment, Moment} from 'moment';
// const moment = _rollupMoment || _moment;
var moment = moment__WEBPACK_IMPORTED_MODULE_4__;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
var MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Datepicker emulating a Year and month picker */
var DatepickerViewsSelectionExample = /** @class */ (function () {
    function DatepickerViewsSelectionExample() {
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment());
    }
    DatepickerViewsSelectionExample.prototype.chosenYearHandler = function (normalizedYear) {
        var ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    };
    DatepickerViewsSelectionExample.prototype.chosenMonthHandler = function (normlizedMonth, datepicker) {
        var ctrlValue = this.date.value;
        ctrlValue.month(normlizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    };
    DatepickerViewsSelectionExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'datepicker-views-selection-example',
            template: __webpack_require__(/*! ./datepicker-views-selection-example.html */ "./src/assets/angular-material-examples/datepicker-views-selection/datepicker-views-selection-example.html"),
            styles: [__webpack_require__(/*! ./datepicker-views-selection-example.css */ "./src/assets/angular-material-examples/datepicker-views-selection/datepicker-views-selection-example.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        })
    ], DatepickerViewsSelectionExample);
    return DatepickerViewsSelectionExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-content/dialog-content-example-dialog.html":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-content/dialog-content-example-dialog.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content>\n  <h3>DEVELOP ACROSS ALL PLATFORMS</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build \n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n  \n  <h3>SPEED &amp; PERFORMANCE</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web \n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements \n    by building data models on RxJS, Immutable.js or another push-model.</p>\n  \n  <h3>INCREDIBLE TOOLING</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with your own \n    components and use a wide array of existing components. Get immediate Angular-specific help and feedback \n    with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather \n    than trying to make the code work.</p>\n  \n  <h3>LOVED BY MILLIONS</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable infrastructure \n    that supports Google's largest applications.</p>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-content/dialog-content-example.css":
/*!****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-content/dialog-content-example.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-content/dialog-content-example.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-content/dialog-content-example.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-content/dialog-content-example.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-content/dialog-content-example.ts ***!
  \***************************************************************************************/
/*! exports provided: DialogContentExample, DialogContentExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExample", function() { return DialogContentExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function() { return DialogContentExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Dialog with header, scrollable content and actions
 */
var DialogContentExample = /** @class */ (function () {
    function DialogContentExample(dialog) {
        this.dialog = dialog;
    }
    DialogContentExample.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogContentExampleDialog, {
            height: '350px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    DialogContentExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-content-example',
            template: __webpack_require__(/*! ./dialog-content-example.html */ "./src/assets/angular-material-examples/dialog-content/dialog-content-example.html"),
            styles: [__webpack_require__(/*! ./dialog-content-example.css */ "./src/assets/angular-material-examples/dialog-content/dialog-content-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogContentExample);
    return DialogContentExample;
}());

var DialogContentExampleDialog = /** @class */ (function () {
    function DialogContentExampleDialog() {
    }
    DialogContentExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-content-example-dialog',
            template: __webpack_require__(/*! ./dialog-content-example-dialog.html */ "./src/assets/angular-material-examples/dialog-content/dialog-content-example-dialog.html"),
        })
    ], DialogContentExampleDialog);
    return DialogContentExampleDialog;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-data/dialog-data-example-dialog.html":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-data/dialog-data-example-dialog.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-data/dialog-data-example.css":
/*!**********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-data/dialog-data-example.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-data/dialog-data-example.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-data/dialog-data-example.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-data/dialog-data-example.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-data/dialog-data-example.ts ***!
  \*********************************************************************************/
/*! exports provided: DialogDataExample, DialogDataExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataExample", function() { return DialogDataExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataExampleDialog", function() { return DialogDataExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * @title Injecting data when opening a dialog
 */
var DialogDataExample = /** @class */ (function () {
    function DialogDataExample(dialog) {
        this.dialog = dialog;
    }
    DialogDataExample.prototype.openDialog = function () {
        this.dialog.open(DialogDataExampleDialog, {
            data: {
                animal: 'panda'
            }
        });
    };
    DialogDataExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-data-example',
            template: __webpack_require__(/*! ./dialog-data-example.html */ "./src/assets/angular-material-examples/dialog-data/dialog-data-example.html"),
            styles: [__webpack_require__(/*! ./dialog-data-example.css */ "./src/assets/angular-material-examples/dialog-data/dialog-data-example.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogDataExample);
    return DialogDataExample;
}());

var DialogDataExampleDialog = /** @class */ (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-data-example-dialog',
            template: __webpack_require__(/*! ./dialog-data-example-dialog.html */ "./src/assets/angular-material-examples/dialog-data/dialog-data-example-dialog.html"),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], DialogDataExampleDialog);
    return DialogDataExampleDialog;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-elements/dialog-elements-example-dialog.html":
/*!**************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-elements/dialog-elements-example-dialog.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Dialog with elements</h1>\n<div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-elements/dialog-elements-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-elements/dialog-elements-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-elements/dialog-elements-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-elements/dialog-elements-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\">Launch dialog</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-elements/dialog-elements-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-elements/dialog-elements-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: DialogElementsExample, DialogElementsExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogElementsExample", function() { return DialogElementsExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogElementsExampleDialog", function() { return DialogElementsExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Dialog elements
 */
var DialogElementsExample = /** @class */ (function () {
    function DialogElementsExample(dialog) {
        this.dialog = dialog;
    }
    DialogElementsExample.prototype.openDialog = function () {
        this.dialog.open(DialogElementsExampleDialog);
    };
    DialogElementsExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-elements-example',
            template: __webpack_require__(/*! ./dialog-elements-example.html */ "./src/assets/angular-material-examples/dialog-elements/dialog-elements-example.html"),
            styles: [__webpack_require__(/*! ./dialog-elements-example.css */ "./src/assets/angular-material-examples/dialog-elements/dialog-elements-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogElementsExample);
    return DialogElementsExample;
}());

var DialogElementsExampleDialog = /** @class */ (function () {
    function DialogElementsExampleDialog() {
    }
    DialogElementsExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-elements-example-dialog',
            template: __webpack_require__(/*! ./dialog-elements-example-dialog.html */ "./src/assets/angular-material-examples/dialog-elements/dialog-elements-example-dialog.html"),
        })
    ], DialogElementsExampleDialog);
    return DialogElementsExampleDialog;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-overview/dialog-overview-example-dialog.html":
/*!**************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-overview/dialog-overview-example-dialog.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-overview/dialog-overview-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-overview/dialog-overview-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-overview/dialog-overview-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-overview/dialog-overview-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol>\n  <li>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/dialog-overview/dialog-overview-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/dialog-overview/dialog-overview-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: DialogOverviewExample, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExample", function() { return DialogOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * @title Dialog Overview
 */
var DialogOverviewExample = /** @class */ (function () {
    function DialogOverviewExample(dialog) {
        this.dialog = dialog;
    }
    DialogOverviewExample.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example',
            template: __webpack_require__(/*! ./dialog-overview-example.html */ "./src/assets/angular-material-examples/dialog-overview/dialog-overview-example.html"),
            styles: [__webpack_require__(/*! ./dialog-overview-example.css */ "./src/assets/angular-material-examples/dialog-overview/dialog-overview-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogOverviewExample);
    return DialogOverviewExample;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/assets/angular-material-examples/dialog-overview/dialog-overview-example-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/divider-overview/divider-overview-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/divider-overview/divider-overview-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/divider-overview/divider-overview-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/divider-overview/divider-overview-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/divider-overview/divider-overview-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/divider-overview/divider-overview-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: DividerOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerOverviewExample", function() { return DividerOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic divider
 */
var DividerOverviewExample = /** @class */ (function () {
    function DividerOverviewExample() {
    }
    DividerOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'divider-overview-example',
            template: __webpack_require__(/*! ./divider-overview-example.html */ "./src/assets/angular-material-examples/divider-overview/divider-overview-example.html"),
            styles: [__webpack_require__(/*! ./divider-overview-example.css */ "./src/assets/angular-material-examples/divider-overview/divider-overview-example.css")],
        })
    ], DividerOverviewExample);
    return DividerOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/elevation-overview/elevation-overview-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/elevation-overview/elevation-overview-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/elevation-overview/elevation-overview-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/elevation-overview/elevation-overview-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/elevation-overview/elevation-overview-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/elevation-overview/elevation-overview-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: ElevationOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElevationOverviewExample", function() { return ElevationOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Elevation CSS classes
 */
var ElevationOverviewExample = /** @class */ (function () {
    function ElevationOverviewExample() {
        this.isActive = false;
    }
    ElevationOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'elevation-overview-example',
            styles: [__webpack_require__(/*! ./elevation-overview-example.css */ "./src/assets/angular-material-examples/elevation-overview/elevation-overview-example.css")],
            template: __webpack_require__(/*! ./elevation-overview-example.html */ "./src/assets/angular-material-examples/elevation-overview/elevation-overview-example.html"),
        })
    ], ElevationOverviewExample);
    return ElevationOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/expansion-expand-collapse-all/expansion-expand-collapse-all-example.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/expansion-expand-collapse-all/expansion-expand-collapse-all-example.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/expansion-expand-collapse-all/expansion-expand-collapse-all-example.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/expansion-expand-collapse-all/expansion-expand-collapse-all-example.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-action-buttons\">\n    <button mat-button (click)=\"accordion.openAll()\">Expand All</button>\n    <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button>\n</div>\n<mat-accordion class=\"example-headers-align\" [multi]=\"true\">\n    <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                Personal data\n            </mat-panel-title>\n            <mat-panel-description>\n                Type your name and age\n                <mat-icon>account_circle</mat-icon>\n            </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n            <input matInput placeholder=\"First name\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n        </mat-form-field>\n\n    </mat-expansion-panel>\n\n    <mat-expansion-panel [disabled]=\"true\">\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                Destination\n            </mat-panel-title>\n            <mat-panel-description>\n                Type the country name\n                <mat-icon>map</mat-icon>\n            </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Country\">\n        </mat-form-field>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                Day of the trip\n            </mat-panel-title>\n            <mat-panel-description>\n                Inform the date you wish to travel\n                <mat-icon>date_range</mat-icon>\n            </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n        </mat-form-field>\n        <mat-datepicker #picker></mat-datepicker>\n    </mat-expansion-panel>\n\n</mat-accordion>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/expansion-expand-collapse-all/expansion-expand-collapse-all-example.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/expansion-expand-collapse-all/expansion-expand-collapse-all-example.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ExpansionExpandCollapseAllExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionExpandCollapseAllExample", function() { return ExpansionExpandCollapseAllExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Accordion with expand/collapse all toggles
 */
var ExpansionExpandCollapseAllExample = /** @class */ (function () {
    function ExpansionExpandCollapseAllExample() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"])
    ], ExpansionExpandCollapseAllExample.prototype, "accordion", void 0);
    ExpansionExpandCollapseAllExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'expansion-toggle-all-example',
            template: __webpack_require__(/*! ./expansion-expand-collapse-all-example.html */ "./src/assets/angular-material-examples/expansion-expand-collapse-all/expansion-expand-collapse-all-example.html"),
            styles: [__webpack_require__(/*! ./expansion-expand-collapse-all-example.css */ "./src/assets/angular-material-examples/expansion-expand-collapse-all/expansion-expand-collapse-all-example.css")]
        })
    ], ExpansionExpandCollapseAllExample);
    return ExpansionExpandCollapseAllExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/expansion-overview/expansion-overview-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/expansion-overview/expansion-overview-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/expansion-overview/expansion-overview-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/expansion-overview/expansion-overview-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Age\">\n    </mat-form-field>\n  </mat-expansion-panel>\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/expansion-overview/expansion-overview-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/expansion-overview/expansion-overview-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: ExpansionOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionOverviewExample", function() { return ExpansionOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic expansion panel
 */
var ExpansionOverviewExample = /** @class */ (function () {
    function ExpansionOverviewExample() {
        this.panelOpenState = false;
    }
    ExpansionOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'expansion-overview-example',
            template: __webpack_require__(/*! ./expansion-overview-example.html */ "./src/assets/angular-material-examples/expansion-overview/expansion-overview-example.html"),
            styles: [__webpack_require__(/*! ./expansion-overview-example.css */ "./src/assets/angular-material-examples/expansion-overview/expansion-overview-example.css")],
        })
    ], ExpansionOverviewExample);
    return ExpansionOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/expansion-steps/expansion-steps-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/expansion-steps/expansion-steps-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title, \n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/expansion-steps/expansion-steps-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/expansion-steps/expansion-steps-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n    </mat-form-field>\n\n    <mat-action-row>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Country\">\n    </mat-form-field>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n</mat-accordion>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/expansion-steps/expansion-steps-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/expansion-steps/expansion-steps-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: ExpansionStepsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionStepsExample", function() { return ExpansionStepsExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Expansion panel as accordion
 */
var ExpansionStepsExample = /** @class */ (function () {
    function ExpansionStepsExample() {
        this.step = 0;
    }
    ExpansionStepsExample.prototype.setStep = function (index) {
        this.step = index;
    };
    ExpansionStepsExample.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionStepsExample.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionStepsExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'expansion-steps-example',
            template: __webpack_require__(/*! ./expansion-steps-example.html */ "./src/assets/angular-material-examples/expansion-steps/expansion-steps-example.html"),
            styles: [__webpack_require__(/*! ./expansion-steps-example.css */ "./src/assets/angular-material-examples/expansion-steps/expansion-steps-example.css")]
        })
    ], ExpansionStepsExample);
    return ExpansionStepsExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/focus-monitor-directives/focus-monitor-directives-example.css":
/*!************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/focus-monitor-directives/focus-monitor-directives-example.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/focus-monitor-directives/focus-monitor-directives-example.html":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/focus-monitor-directives/focus-monitor-directives-example.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-focus-monitor\">\n  <button cdkMonitorSubtreeFocus\n          (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">\n    Focus Monitored Element ({{elementOrigin}})\n  </button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div cdkMonitorSubtreeFocus\n       (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\">\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/focus-monitor-directives/focus-monitor-directives-example.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/focus-monitor-directives/focus-monitor-directives-example.ts ***!
  \***********************************************************************************************************/
/*! exports provided: FocusMonitorDirectivesExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitorDirectivesExample", function() { return FocusMonitorDirectivesExample; });
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

/** @title Monitoring focus with FocusMonitor */
var FocusMonitorDirectivesExample = /** @class */ (function () {
    function FocusMonitorDirectivesExample(ngZone, cdr) {
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    FocusMonitorDirectivesExample.prototype.formatOrigin = function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    FocusMonitorDirectivesExample.prototype.markForCheck = function () {
        var _this = this;
        this.ngZone.run(function () { return _this.cdr.markForCheck(); });
    };
    FocusMonitorDirectivesExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'focus-monitor-directives-example',
            template: __webpack_require__(/*! ./focus-monitor-directives-example.html */ "./src/assets/angular-material-examples/focus-monitor-directives/focus-monitor-directives-example.html"),
            styles: [__webpack_require__(/*! ./focus-monitor-directives-example.css */ "./src/assets/angular-material-examples/focus-monitor-directives/focus-monitor-directives-example.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], FocusMonitorDirectivesExample);
    return FocusMonitorDirectivesExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/focus-monitor-focus-via/focus-monitor-focus-via-example.css":
/*!**********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/focus-monitor-focus-via/focus-monitor-focus-via-example.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor button:focus {\n  box-shadow: 0 0 30px cyan;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/focus-monitor-focus-via/focus-monitor-focus-via-example.html":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/focus-monitor-focus-via/focus-monitor-focus-via-example.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-focus-monitor\">\n  <button #monitored>1. Focus Monitored Element ({{origin}})</button>\n  <button #unmonitored>2. Not Monitored</button>\n</div>\n\n<mat-form-field>\n  <mat-label>Simulated focus origin</mat-label>\n  <mat-select #simulatedOrigin value=\"mouse\">\n    <mat-option value=\"mouse\">Mouse</mat-option>\n    <mat-option value=\"keyboard\">Keyboard</mat-option>\n    <mat-option value=\"touch\">Touch</mat-option>\n    <mat-option value=\"program\">Programmatic</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button (click)=\"focusMonitor.focusVia(monitored, simulatedOrigin.value)\">\n  Focus button #1\n</button>\n<button (click)=\"focusMonitor.focusVia(unmonitored, simulatedOrigin.value)\">\n  Focus button #2\n</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/focus-monitor-focus-via/focus-monitor-focus-via-example.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/focus-monitor-focus-via/focus-monitor-focus-via-example.ts ***!
  \*********************************************************************************************************/
/*! exports provided: FocusMonitorFocusViaExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitorFocusViaExample", function() { return FocusMonitorFocusViaExample; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** @title Focusing with a specific FocusOrigin */
var FocusMonitorFocusViaExample = /** @class */ (function () {
    function FocusMonitorFocusViaExample(focusMonitor, cdr, ngZone) {
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.origin = this.formatOrigin(null);
    }
    FocusMonitorFocusViaExample.prototype.ngOnInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.monitoredEl.nativeElement)
            .subscribe(function (origin) { return _this.ngZone.run(function () {
            _this.origin = _this.formatOrigin(origin);
            _this.cdr.markForCheck();
        }); });
    };
    FocusMonitorFocusViaExample.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.monitoredEl.nativeElement);
    };
    FocusMonitorFocusViaExample.prototype.formatOrigin = function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('monitored'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FocusMonitorFocusViaExample.prototype, "monitoredEl", void 0);
    FocusMonitorFocusViaExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'focus-monitor-focus-via-example',
            template: __webpack_require__(/*! ./focus-monitor-focus-via-example.html */ "./src/assets/angular-material-examples/focus-monitor-focus-via/focus-monitor-focus-via-example.html"),
            styles: [__webpack_require__(/*! ./focus-monitor-focus-via-example.css */ "./src/assets/angular-material-examples/focus-monitor-focus-via/focus-monitor-focus-via-example.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], FocusMonitorFocusViaExample);
    return FocusMonitorFocusViaExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/focus-monitor-overview/focus-monitor-overview-example.css":
/*!********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/focus-monitor-overview/focus-monitor-overview-example.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/focus-monitor-overview/focus-monitor-overview-example.html":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/focus-monitor-overview/focus-monitor-overview-example.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-focus-monitor\">\n  <button #element>Focus Monitored Element ({{elementOrigin}})</button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div #subtree>\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/focus-monitor-overview/focus-monitor-overview-example.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/focus-monitor-overview/focus-monitor-overview-example.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FocusMonitorOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitorOverviewExample", function() { return FocusMonitorOverviewExample; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** @title Monitoring focus with FocusMonitor */
var FocusMonitorOverviewExample = /** @class */ (function () {
    function FocusMonitorOverviewExample(focusMonitor, cdr, ngZone) {
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    FocusMonitorOverviewExample.prototype.ngOnInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.element.nativeElement)
            .subscribe(function (origin) { return _this.ngZone.run(function () {
            _this.elementOrigin = _this.formatOrigin(origin);
            _this.cdr.markForCheck();
        }); });
        this.focusMonitor.monitor(this.subtree.nativeElement, true)
            .subscribe(function (origin) { return _this.ngZone.run(function () {
            _this.subtreeOrigin = _this.formatOrigin(origin);
            _this.cdr.markForCheck();
        }); });
    };
    FocusMonitorOverviewExample.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.element.nativeElement);
        this.focusMonitor.stopMonitoring(this.subtree.nativeElement);
    };
    FocusMonitorOverviewExample.prototype.formatOrigin = function (origin) {
        return origin ? origin + ' focused' : 'blurred';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('element'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FocusMonitorOverviewExample.prototype, "element", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subtree'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FocusMonitorOverviewExample.prototype, "subtree", void 0);
    FocusMonitorOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'focus-monitor-overview-example',
            template: __webpack_require__(/*! ./focus-monitor-overview-example.html */ "./src/assets/angular-material-examples/focus-monitor-overview/focus-monitor-overview-example.html"),
            styles: [__webpack_require__(/*! ./focus-monitor-overview-example.css */ "./src/assets/angular-material-examples/focus-monitor-overview/focus-monitor-overview-example.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], FocusMonitorOverviewExample);
    return FocusMonitorOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-appearance/form-field-appearance-example.css":
/*!******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-appearance/form-field-appearance-example.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-appearance/form-field-appearance-example.html":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-appearance/form-field-appearance-example.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <mat-form-field appearance=\"legacy\">\n    <mat-label>Legacy form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"standard\">\n    <mat-label>Standard form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-appearance/form-field-appearance-example.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-appearance/form-field-appearance-example.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FormFieldAppearanceExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldAppearanceExample", function() { return FormFieldAppearanceExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Form field appearance variants */
var FormFieldAppearanceExample = /** @class */ (function () {
    function FormFieldAppearanceExample() {
    }
    FormFieldAppearanceExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-field-appearance-example',
            template: __webpack_require__(/*! ./form-field-appearance-example.html */ "./src/assets/angular-material-examples/form-field-appearance/form-field-appearance-example.html"),
            styles: [__webpack_require__(/*! ./form-field-appearance-example.css */ "./src/assets/angular-material-examples/form-field-appearance/form-field-appearance-example.css")]
        })
    ], FormFieldAppearanceExample);
    return FormFieldAppearanceExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-custom-control/form-field-custom-control-example.css":
/*!**************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-custom-control/form-field-custom-control-example.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  display: flex;\n}\n\ninput {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\nspan {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.floating span {\n  opacity: 1;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-custom-control/form-field-custom-control-example.html":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-custom-control/form-field-custom-control-example.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"parts\">\n  <input class=\"area\" formControlName=\"area\" size=\"3\">\n  <span>&ndash;</span>\n  <input class=\"exchange\" formControlName=\"exchange\" size=\"3\">\n  <span>&ndash;</span>\n  <input class=\"subscriber\" formControlName=\"subscriber\" size=\"4\">\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-custom-control/form-field-custom-control-example.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-custom-control/form-field-custom-control-example.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MyTel, MyTelInput, FormFieldCustomControlExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTel", function() { return MyTel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTelInput", function() { return MyTelInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldCustomControlExample", function() { return FormFieldCustomControlExample; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/** Data structure for holding telephone number. */
var MyTel = /** @class */ (function () {
    function MyTel(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
    return MyTel;
}());

/** Custom `MatFormFieldControl` for telephone number input. */
var MyTelInput = /** @class */ (function () {
    function MyTelInput(fb, fm, elRef) {
        var _this = this;
        this.fm = fm;
        this.elRef = elRef;
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.focused = false;
        this.ngControl = null;
        this.errorState = false;
        this.controlType = 'my-tel-input';
        this.id = "my-tel-input-" + MyTelInput_1.nextId++;
        this.describedBy = '';
        this._required = false;
        this._disabled = false;
        this.parts = fb.group({
            'area': '',
            'exchange': '',
            'subscriber': '',
        });
        fm.monitor(elRef.nativeElement, true).subscribe(function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
    }
    MyTelInput_1 = MyTelInput;
    Object.defineProperty(MyTelInput.prototype, "empty", {
        get: function () {
            var n = this.parts.value;
            return !n.area && !n.exchange && !n.subscriber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "shouldLabelFloat", {
        get: function () { return this.focused || !this.empty; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "placeholder", {
        get: function () { return this._placeholder; },
        set: function (plh) {
            this._placeholder = plh;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "required", {
        get: function () { return this._required; },
        set: function (req) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (dis) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(dis);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "value", {
        get: function () {
            var n = this.parts.value;
            if (n.area.length == 3 && n.exchange.length == 3 && n.subscriber.length == 4) {
                return new MyTel(n.area, n.exchange, n.subscriber);
            }
            return null;
        },
        set: function (tel) {
            tel = tel || new MyTel('', '', '');
            this.parts.setValue({ area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber });
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    MyTelInput.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef.nativeElement);
    };
    MyTelInput.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    MyTelInput.prototype.onContainerClick = function (event) {
        if (event.target.tagName.toLowerCase() != 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    };
    MyTelInput.nextId = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MyTelInput.prototype, "placeholder", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MyTelInput.prototype, "required", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MyTelInput.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", MyTel),
        __metadata("design:paramtypes", [MyTel])
    ], MyTelInput.prototype, "value", null);
    MyTelInput = MyTelInput_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'my-tel-input',
            template: __webpack_require__(/*! ./form-field-custom-control-example.html */ "./src/assets/angular-material-examples/form-field-custom-control/form-field-custom-control-example.html"),
            styles: [__webpack_require__(/*! ./form-field-custom-control-example.css */ "./src/assets/angular-material-examples/form-field-custom-control/form-field-custom-control-example.css")],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], useExisting: MyTelInput_1 }],
            host: {
                '[class.floating]': 'shouldLabelFloat',
                '[id]': 'id',
                '[attr.aria-describedby]': 'describedBy',
            }
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], MyTelInput);
    return MyTelInput;
    var MyTelInput_1;
}());

/** @title Form field with custom telephone number input control. */
var FormFieldCustomControlExample = /** @class */ (function () {
    function FormFieldCustomControlExample() {
    }
    FormFieldCustomControlExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'form-field-custom-control-example',
            template: "\n    <mat-form-field>\n      <my-tel-input placeholder=\"Phone number\" required></my-tel-input>\n      <mat-icon matSuffix>phone</mat-icon>\n      <mat-hint>Include area code</mat-hint>\n    </mat-form-field>\n  "
        })
    ], FormFieldCustomControlExample);
    return FormFieldCustomControlExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-error/form-field-error-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-error/form-field-error-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-error/form-field-error-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-error/form-field-error-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-error/form-field-error-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-error/form-field-error-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: FormFieldErrorExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldErrorExample", function() { return FormFieldErrorExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** @title Form field with error messages */
var FormFieldErrorExample = /** @class */ (function () {
    function FormFieldErrorExample() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
    }
    FormFieldErrorExample.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    FormFieldErrorExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-field-error-example',
            template: __webpack_require__(/*! ./form-field-error-example.html */ "./src/assets/angular-material-examples/form-field-error/form-field-error-example.html"),
            styles: [__webpack_require__(/*! ./form-field-error-example.css */ "./src/assets/angular-material-examples/form-field-error/form-field-error-example.css")]
        })
    ], FormFieldErrorExample);
    return FormFieldErrorExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-hint/form-field-hint-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-hint/form-field-hint-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-hint/form-field-hint-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-hint/form-field-hint-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\n    <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select me\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-hint/form-field-hint-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-hint/form-field-hint-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: FormFieldHintExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldHintExample", function() { return FormFieldHintExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Form field with hints */
var FormFieldHintExample = /** @class */ (function () {
    function FormFieldHintExample() {
    }
    FormFieldHintExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-field-hint-example',
            template: __webpack_require__(/*! ./form-field-hint-example.html */ "./src/assets/angular-material-examples/form-field-hint/form-field-hint-example.html"),
            styles: [__webpack_require__(/*! ./form-field-hint-example.css */ "./src/assets/angular-material-examples/form-field-hint/form-field-hint-example.css")]
        })
    ], FormFieldHintExample);
    return FormFieldHintExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-label/form-field-label-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-label/form-field-label-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 5px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-label/form-field-label-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-label/form-field-label-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <form class=\"example-container\" [formGroup]=\"options\">\n    <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group formControlName=\"floatLabel\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n        <mat-radio-button value=\"never\">Never</mat-radio-button>\n      </mat-radio-group>\n    </div>\n  </form>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <input matInput placeholder=\"Simple placeholder\" required>\n  </mat-form-field>\n\n  <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n    <mat-label>Both a label and a placeholder</mat-label>\n    <input matInput placeholder=\"Simple placeholder\">\n  </mat-form-field>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <mat-select required>\n      <mat-option>-- None --</mat-option>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-label/form-field-label-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-label/form-field-label-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: FormFieldLabelExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldLabelExample", function() { return FormFieldLabelExample; });
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


/** @title Form field with label */
var FormFieldLabelExample = /** @class */ (function () {
    function FormFieldLabelExample(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    FormFieldLabelExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-field-label-example',
            template: __webpack_require__(/*! ./form-field-label-example.html */ "./src/assets/angular-material-examples/form-field-label/form-field-label-example.html"),
            styles: [__webpack_require__(/*! ./form-field-label-example.css */ "./src/assets/angular-material-examples/form-field-label/form-field-label-example.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormFieldLabelExample);
    return FormFieldLabelExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-overview/form-field-overview-example.css":
/*!**************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-overview/form-field-overview-example.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-overview/form-field-overview-example.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-overview/form-field-overview-example.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Input\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Textarea\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-overview/form-field-overview-example.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-overview/form-field-overview-example.ts ***!
  \*************************************************************************************************/
/*! exports provided: FormFieldOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldOverviewExample", function() { return FormFieldOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Simple form field */
var FormFieldOverviewExample = /** @class */ (function () {
    function FormFieldOverviewExample() {
    }
    FormFieldOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-field-overview-example',
            template: __webpack_require__(/*! ./form-field-overview-example.html */ "./src/assets/angular-material-examples/form-field-overview/form-field-overview-example.html"),
            styles: [__webpack_require__(/*! ./form-field-overview-example.css */ "./src/assets/angular-material-examples/form-field-overview/form-field-overview-example.css")]
        })
    ], FormFieldOverviewExample);
    return FormFieldOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-prefix-suffix/form-field-prefix-suffix-example.css":
/*!************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-prefix-suffix/form-field-prefix-suffix-example.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-prefix-suffix/form-field-prefix-suffix-example.html":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-prefix-suffix/form-field-prefix-suffix-example.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\">\n    <span matPrefix>$&nbsp;</span>\n    <span matSuffix>.00</span>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-prefix-suffix/form-field-prefix-suffix-example.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-prefix-suffix/form-field-prefix-suffix-example.ts ***!
  \***********************************************************************************************************/
/*! exports provided: FormFieldPrefixSuffixExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldPrefixSuffixExample", function() { return FormFieldPrefixSuffixExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Form field with prefix & suffix */
var FormFieldPrefixSuffixExample = /** @class */ (function () {
    function FormFieldPrefixSuffixExample() {
        this.hide = true;
    }
    FormFieldPrefixSuffixExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-field-prefix-suffix-example',
            template: __webpack_require__(/*! ./form-field-prefix-suffix-example.html */ "./src/assets/angular-material-examples/form-field-prefix-suffix/form-field-prefix-suffix-example.html"),
            styles: [__webpack_require__(/*! ./form-field-prefix-suffix-example.css */ "./src/assets/angular-material-examples/form-field-prefix-suffix/form-field-prefix-suffix-example.css")]
        })
    ], FormFieldPrefixSuffixExample);
    return FormFieldPrefixSuffixExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-theming/form-field-theming-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-theming/form-field-theming-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-theming/form-field-theming-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-theming/form-field-theming-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\">\n  <mat-form-field [color]=\"options.value.color\">\n    <mat-select placeholder=\"Color\" formControlName=\"color\">\n      <mat-option value=\"primary\">Primary</mat-option>\n      <mat-option value=\"accent\">Accent</mat-option>\n      <mat-option value=\"warn\">Warn</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field [color]=\"options.value.color\">\n    <input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\n    <mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/form-field-theming/form-field-theming-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/form-field-theming/form-field-theming-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: FormFieldThemingExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldThemingExample", function() { return FormFieldThemingExample; });
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


/** @title Form field theming */
var FormFieldThemingExample = /** @class */ (function () {
    function FormFieldThemingExample(fb) {
        this.options = fb.group({
            'color': 'primary',
            'fontSize': [16, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10)],
        });
    }
    FormFieldThemingExample.prototype.getFontSize = function () {
        return Math.max(10, this.options.value.fontSize);
    };
    FormFieldThemingExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-field-theming-example',
            template: __webpack_require__(/*! ./form-field-theming-example.html */ "./src/assets/angular-material-examples/form-field-theming/form-field-theming-example.html"),
            styles: [__webpack_require__(/*! ./form-field-theming-example.css */ "./src/assets/angular-material-examples/form-field-theming/form-field-theming-example.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormFieldThemingExample);
    return FormFieldThemingExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/grid-list-dynamic/grid-list-dynamic-example.css":
/*!**********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/grid-list-dynamic/grid-list-dynamic-example.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/grid-list-dynamic/grid-list-dynamic-example.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/grid-list-dynamic/grid-list-dynamic-example.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/grid-list-dynamic/grid-list-dynamic-example.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/grid-list-dynamic/grid-list-dynamic-example.ts ***!
  \*********************************************************************************************/
/*! exports provided: GridListDynamicExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridListDynamicExample", function() { return GridListDynamicExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Dynamic grid-list
 */
var GridListDynamicExample = /** @class */ (function () {
    function GridListDynamicExample() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    GridListDynamicExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-list-dynamic-example',
            template: __webpack_require__(/*! ./grid-list-dynamic-example.html */ "./src/assets/angular-material-examples/grid-list-dynamic/grid-list-dynamic-example.html"),
            styles: [__webpack_require__(/*! ./grid-list-dynamic-example.css */ "./src/assets/angular-material-examples/grid-list-dynamic/grid-list-dynamic-example.css")],
        })
    ], GridListDynamicExample);
    return GridListDynamicExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/grid-list-overview/grid-list-overview-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/grid-list-overview/grid-list-overview-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/grid-list-overview/grid-list-overview-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/grid-list-overview/grid-list-overview-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/grid-list-overview/grid-list-overview-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/grid-list-overview/grid-list-overview-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: GridListOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridListOverviewExample", function() { return GridListOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic grid-list
 */
var GridListOverviewExample = /** @class */ (function () {
    function GridListOverviewExample() {
    }
    GridListOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-list-overview-example',
            styles: [__webpack_require__(/*! ./grid-list-overview-example.css */ "./src/assets/angular-material-examples/grid-list-overview/grid-list-overview-example.css")],
            template: __webpack_require__(/*! ./grid-list-overview-example.html */ "./src/assets/angular-material-examples/grid-list-overview/grid-list-overview-example.html"),
        })
    ], GridListOverviewExample);
    return GridListOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/icon-overview/icon-overview-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/icon-overview/icon-overview-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/icon-overview/icon-overview-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/icon-overview/icon-overview-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-icon>home</mat-icon>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/icon-overview/icon-overview-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/icon-overview/icon-overview-example.ts ***!
  \*************************************************************************************/
/*! exports provided: IconOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconOverviewExample", function() { return IconOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic icons
 */
var IconOverviewExample = /** @class */ (function () {
    function IconOverviewExample() {
    }
    IconOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'icon-overview-example',
            template: __webpack_require__(/*! ./icon-overview-example.html */ "./src/assets/angular-material-examples/icon-overview/icon-overview-example.html"),
            styles: [__webpack_require__(/*! ./icon-overview-example.css */ "./src/assets/angular-material-examples/icon-overview/icon-overview-example.css")]
        })
    ], IconOverviewExample);
    return IconOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/icon-svg/icon-svg-example.css":
/*!****************************************************************************!*\
  !*** ./src/assets/angular-material-examples/icon-svg/icon-svg-example.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/icon-svg/icon-svg-example.html":
/*!*****************************************************************************!*\
  !*** ./src/assets/angular-material-examples/icon-svg/icon-svg-example.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-icon svgIcon=\"thumbs-up\"></mat-icon>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/icon-svg/icon-svg-example.ts":
/*!***************************************************************************!*\
  !*** ./src/assets/angular-material-examples/icon-svg/icon-svg-example.ts ***!
  \***************************************************************************/
/*! exports provided: IconSvgExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSvgExample", function() { return IconSvgExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @title SVG icons
 */
var IconSvgExample = /** @class */ (function () {
    function IconSvgExample(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/images/examples/thumbup-icon.svg'));
    }
    IconSvgExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'icon-svg-example',
            template: __webpack_require__(/*! ./icon-svg-example.html */ "./src/assets/angular-material-examples/icon-svg/icon-svg-example.html"),
            styles: [__webpack_require__(/*! ./icon-svg-example.css */ "./src/assets/angular-material-examples/icon-svg/icon-svg-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], IconSvgExample);
    return IconSvgExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/input-clearable/input-clearable-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-clearable/input-clearable-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form-field {\n  width: 200px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-clearable/input-clearable-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-clearable/input-clearable-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"example-form-field\">\n  <input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\"/>\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-clearable/input-clearable-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-clearable/input-clearable-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: InputClearableExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputClearableExample", function() { return InputClearableExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Input with a clear button
 */
var InputClearableExample = /** @class */ (function () {
    function InputClearableExample() {
        this.value = 'Clear me';
    }
    InputClearableExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-clearable-example',
            template: __webpack_require__(/*! ./input-clearable-example.html */ "./src/assets/angular-material-examples/input-clearable/input-clearable-example.html"),
            styles: [__webpack_require__(/*! ./input-clearable-example.css */ "./src/assets/angular-material-examples/input-clearable/input-clearable-example.css")],
        })
    ], InputClearableExample);
    return InputClearableExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/input-error-state-matcher/input-error-state-matcher-example.css":
/*!**************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-error-state-matcher/input-error-state-matcher-example.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-error-state-matcher/input-error-state-matcher-example.html":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-error-state-matcher/input-error-state-matcher-example.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-error-state-matcher/input-error-state-matcher-example.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-error-state-matcher/input-error-state-matcher-example.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MyErrorStateMatcher, InputErrorStateMatcherExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputErrorStateMatcherExample", function() { return InputErrorStateMatcherExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

/** @title Input with a custom ErrorStateMatcher */
var InputErrorStateMatcherExample = /** @class */ (function () {
    function InputErrorStateMatcherExample() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    InputErrorStateMatcherExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-error-state-matcher-example',
            template: __webpack_require__(/*! ./input-error-state-matcher-example.html */ "./src/assets/angular-material-examples/input-error-state-matcher/input-error-state-matcher-example.html"),
            styles: [__webpack_require__(/*! ./input-error-state-matcher-example.css */ "./src/assets/angular-material-examples/input-error-state-matcher/input-error-state-matcher-example.css")],
        })
    ], InputErrorStateMatcherExample);
    return InputErrorStateMatcherExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/input-errors/input-errors-example.css":
/*!************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-errors/input-errors-example.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-errors/input-errors-example.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-errors/input-errors-example.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-errors/input-errors-example.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-errors/input-errors-example.ts ***!
  \***********************************************************************************/
/*! exports provided: InputErrorsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputErrorsExample", function() { return InputErrorsExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * @title Input with error messages
 */
var InputErrorsExample = /** @class */ (function () {
    function InputErrorsExample() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
    }
    InputErrorsExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-errors-example',
            template: __webpack_require__(/*! ./input-errors-example.html */ "./src/assets/angular-material-examples/input-errors/input-errors-example.html"),
            styles: [__webpack_require__(/*! ./input-errors-example.css */ "./src/assets/angular-material-examples/input-errors/input-errors-example.css")],
        })
    ], InputErrorsExample);
    return InputErrorsExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/input-form/input-form-example.css":
/*!********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-form/input-form-example.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-form/input-form-example.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-form/input-form-example.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"First name\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address 2\"></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"City\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"State\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-form/input-form-example.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-form/input-form-example.ts ***!
  \*******************************************************************************/
/*! exports provided: InputFormExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormExample", function() { return InputFormExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Inputs in a form
 */
var InputFormExample = /** @class */ (function () {
    function InputFormExample() {
    }
    InputFormExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-form-example',
            template: __webpack_require__(/*! ./input-form-example.html */ "./src/assets/angular-material-examples/input-form/input-form-example.html"),
            styles: [__webpack_require__(/*! ./input-form-example.css */ "./src/assets/angular-material-examples/input-form/input-form-example.css")],
        })
    ], InputFormExample);
    return InputFormExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/input-hint/input-hint-example.css":
/*!********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-hint/input-hint-example.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-hint/input-hint-example.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-hint/input-hint-example.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput #message maxlength=\"256\" placeholder=\"Message\">\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n  </mat-form-field>\n  \n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-hint/input-hint-example.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-hint/input-hint-example.ts ***!
  \*******************************************************************************/
/*! exports provided: InputHintExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputHintExample", function() { return InputHintExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Input with hints
 */
var InputHintExample = /** @class */ (function () {
    function InputHintExample() {
    }
    InputHintExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-hint-example',
            template: __webpack_require__(/*! ./input-hint-example.html */ "./src/assets/angular-material-examples/input-hint/input-hint-example.html"),
            styles: [__webpack_require__(/*! ./input-hint-example.css */ "./src/assets/angular-material-examples/input-hint/input-hint-example.css")],
        })
    ], InputHintExample);
    return InputHintExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/input-overview/input-overview-example.css":
/*!****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-overview/input-overview-example.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-overview/input-overview-example.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-overview/input-overview-example.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Leave a comment\"></textarea>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-overview/input-overview-example.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-overview/input-overview-example.ts ***!
  \***************************************************************************************/
/*! exports provided: InputOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputOverviewExample", function() { return InputOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic Inputs
 */
var InputOverviewExample = /** @class */ (function () {
    function InputOverviewExample() {
    }
    InputOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-overview-example',
            styles: [__webpack_require__(/*! ./input-overview-example.css */ "./src/assets/angular-material-examples/input-overview/input-overview-example.css")],
            template: __webpack_require__(/*! ./input-overview-example.html */ "./src/assets/angular-material-examples/input-overview/input-overview-example.html"),
        })
    ], InputOverviewExample);
    return InputOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/input-prefix-suffix/input-prefix-suffix-example.css":
/*!**************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-prefix-suffix/input-prefix-suffix-example.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-prefix-suffix/input-prefix-suffix-example.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-prefix-suffix/input-prefix-suffix-example.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n\n  <mat-form-field class=\"example-full-width\">\n    <span matPrefix>+1 &nbsp;</span>\n    <input type=\"tel\" matInput placeholder=\"Telephone\">\n    <mat-icon matSuffix>mode_edit</mat-icon>\n  </mat-form-field>\n  \n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/input-prefix-suffix/input-prefix-suffix-example.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/input-prefix-suffix/input-prefix-suffix-example.ts ***!
  \*************************************************************************************************/
/*! exports provided: InputPrefixSuffixExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPrefixSuffixExample", function() { return InputPrefixSuffixExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Inputs with prefixes and suffixes
 */
var InputPrefixSuffixExample = /** @class */ (function () {
    function InputPrefixSuffixExample() {
    }
    InputPrefixSuffixExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-prefix-suffix-example',
            template: __webpack_require__(/*! ./input-prefix-suffix-example.html */ "./src/assets/angular-material-examples/input-prefix-suffix/input-prefix-suffix-example.html"),
            styles: [__webpack_require__(/*! ./input-prefix-suffix-example.css */ "./src/assets/angular-material-examples/input-prefix-suffix/input-prefix-suffix-example.css")],
        })
    ], InputPrefixSuffixExample);
    return InputPrefixSuffixExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/list-overview/list-overview-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/list-overview/list-overview-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/list-overview/list-overview-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/list-overview/list-overview-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/list-overview/list-overview-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/list-overview/list-overview-example.ts ***!
  \*************************************************************************************/
/*! exports provided: ListOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOverviewExample", function() { return ListOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic list
 */
var ListOverviewExample = /** @class */ (function () {
    function ListOverviewExample() {
    }
    ListOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-overview-example',
            template: __webpack_require__(/*! ./list-overview-example.html */ "./src/assets/angular-material-examples/list-overview/list-overview-example.html"),
            styles: [__webpack_require__(/*! ./list-overview-example.css */ "./src/assets/angular-material-examples/list-overview/list-overview-example.css")],
        })
    ], ListOverviewExample);
    return ListOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/list-sections/list-sections-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/list-sections/list-sections-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/list-sections/list-sections-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/list-sections/list-sections-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>{{folder.name}}</h4>\n    <p mat-line> {{folder.updated | date}} </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <h4 mat-line>{{note.name}}</h4>\n    <p mat-line> {{note.updated | date}} </p>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/list-sections/list-sections-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/list-sections/list-sections-example.ts ***!
  \*************************************************************************************/
/*! exports provided: ListSectionsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSectionsExample", function() { return ListSectionsExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title List with sections
 */
var ListSectionsExample = /** @class */ (function () {
    function ListSectionsExample() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    ListSectionsExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-sections-example',
            styles: [__webpack_require__(/*! ./list-sections-example.css */ "./src/assets/angular-material-examples/list-sections/list-sections-example.css")],
            template: __webpack_require__(/*! ./list-sections-example.html */ "./src/assets/angular-material-examples/list-sections/list-sections-example.html"),
        })
    ], ListSectionsExample);
    return ListSectionsExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/list-selection/list-selection-example.css":
/*!****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/list-selection/list-selection-example.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No styles for this example. */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/list-selection/list-selection-example.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/list-selection/list-selection-example.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/list-selection/list-selection-example.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/list-selection/list-selection-example.ts ***!
  \***************************************************************************************/
/*! exports provided: ListSelectionExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSelectionExample", function() { return ListSelectionExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title List with selection
 */
var ListSelectionExample = /** @class */ (function () {
    function ListSelectionExample() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    ListSelectionExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-selection-example',
            styles: [__webpack_require__(/*! ./list-selection-example.css */ "./src/assets/angular-material-examples/list-selection/list-selection-example.css")],
            template: __webpack_require__(/*! ./list-selection-example.html */ "./src/assets/angular-material-examples/list-selection/list-selection-example.html"),
        })
    ], ListSelectionExample);
    return ListSelectionExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/menu-icons/menu-icons-example.css":
/*!********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/menu-icons/menu-icons-example.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/menu-icons/menu-icons-example.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/menu-icons/menu-icons-example.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voicemail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/menu-icons/menu-icons-example.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/angular-material-examples/menu-icons/menu-icons-example.ts ***!
  \*******************************************************************************/
/*! exports provided: MenuIconsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIconsExample", function() { return MenuIconsExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Menu with icons
 */
var MenuIconsExample = /** @class */ (function () {
    function MenuIconsExample() {
    }
    MenuIconsExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu-icons-example',
            template: __webpack_require__(/*! ./menu-icons-example.html */ "./src/assets/angular-material-examples/menu-icons/menu-icons-example.html"),
            styles: [__webpack_require__(/*! ./menu-icons-example.css */ "./src/assets/angular-material-examples/menu-icons/menu-icons-example.css")],
        })
    ], MenuIconsExample);
    return MenuIconsExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/menu-overview/menu-overview-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/menu-overview/menu-overview-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/menu-overview/menu-overview-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/menu-overview/menu-overview-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/menu-overview/menu-overview-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/menu-overview/menu-overview-example.ts ***!
  \*************************************************************************************/
/*! exports provided: MenuOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOverviewExample", function() { return MenuOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic menu
 */
var MenuOverviewExample = /** @class */ (function () {
    function MenuOverviewExample() {
    }
    MenuOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu-overview-example',
            template: __webpack_require__(/*! ./menu-overview-example.html */ "./src/assets/angular-material-examples/menu-overview/menu-overview-example.html"),
            styles: [__webpack_require__(/*! ./menu-overview-example.css */ "./src/assets/angular-material-examples/menu-overview/menu-overview-example.css")],
        })
    ], MenuOverviewExample);
    return MenuOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/nested-menu/nested-menu-example.css":
/*!**********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/nested-menu/nested-menu-example.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/nested-menu/nested-menu-example.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/nested-menu/nested-menu-example.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n\n<mat-menu #animals=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n</mat-menu>\n\n<mat-menu #vertebrates=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n  <button mat-menu-item>Birds</button>\n  <button mat-menu-item>Mammals</button>\n</mat-menu>\n\n<mat-menu #invertebrates=\"matMenu\">\n  <button mat-menu-item>Insects</button>\n  <button mat-menu-item>Molluscs</button>\n  <button mat-menu-item>Crustaceans</button>\n  <button mat-menu-item>Corals</button>\n  <button mat-menu-item>Arachnids</button>\n  <button mat-menu-item>Velvet worms</button>\n  <button mat-menu-item>Horseshoe crabs</button>\n</mat-menu>\n\n<mat-menu #fish=\"matMenu\">\n  <button mat-menu-item>Baikal oilfish</button>\n  <button mat-menu-item>Bala shark</button>\n  <button mat-menu-item>Ballan wrasse</button>\n  <button mat-menu-item>Bamboo shark</button>\n  <button mat-menu-item>Banded killifish</button>\n</mat-menu>\n\n<mat-menu #amphibians=\"matMenu\">\n  <button mat-menu-item>Sonoran desert toad</button>\n  <button mat-menu-item>Western toad</button>\n  <button mat-menu-item>Arroyo toad</button>\n  <button mat-menu-item>Yosemite toad</button>\n</mat-menu>\n\n<mat-menu #reptiles=\"matMenu\">\n  <button mat-menu-item>Banded Day Gecko</button>\n  <button mat-menu-item>Banded Gila Monster</button>\n  <button mat-menu-item>Black Tree Monitor</button>\n  <button mat-menu-item>Blue Spiny Lizard</button>\n  <button mat-menu-item disabled>Velociraptor</button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/nested-menu/nested-menu-example.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/nested-menu/nested-menu-example.ts ***!
  \*********************************************************************************/
/*! exports provided: NestedMenuExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedMenuExample", function() { return NestedMenuExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Nested menu
 */
var NestedMenuExample = /** @class */ (function () {
    function NestedMenuExample() {
    }
    NestedMenuExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nested-menu-example',
            template: __webpack_require__(/*! ./nested-menu-example.html */ "./src/assets/angular-material-examples/nested-menu/nested-menu-example.html"),
            styles: [__webpack_require__(/*! ./nested-menu-example.css */ "./src/assets/angular-material-examples/nested-menu/nested-menu-example.css")]
        })
    ], NestedMenuExample);
    return NestedMenuExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/paginator-configurable/paginator-configurable-example.css":
/*!********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/paginator-configurable/paginator-configurable-example.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/paginator-configurable/paginator-configurable-example.html":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/paginator-configurable/paginator-configurable-example.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  List length:\n  <input matInput [(ngModel)]=\"length\">\n</mat-form-field>\n\n<mat-form-field>\n  Page size:\n  <input matInput [(ngModel)]=\"pageSize\">\n</mat-form-field>\n<mat-form-field>\n  Page size options:\n  <input matInput\n         [ngModel]=\"pageSizeOptions\"\n         (ngModelChange)=\"setPageSizeOptions($event)\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              (page)=\"pageEvent = $event\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/paginator-configurable/paginator-configurable-example.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/paginator-configurable/paginator-configurable-example.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PaginatorConfigurableExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorConfigurableExample", function() { return PaginatorConfigurableExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Configurable paginator
 */
var PaginatorConfigurableExample = /** @class */ (function () {
    function PaginatorConfigurableExample() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    PaginatorConfigurableExample.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    PaginatorConfigurableExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'paginator-configurable-example',
            template: __webpack_require__(/*! ./paginator-configurable-example.html */ "./src/assets/angular-material-examples/paginator-configurable/paginator-configurable-example.html"),
            styles: [__webpack_require__(/*! ./paginator-configurable-example.css */ "./src/assets/angular-material-examples/paginator-configurable/paginator-configurable-example.css")],
        })
    ], PaginatorConfigurableExample);
    return PaginatorConfigurableExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/paginator-overview/paginator-overview-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/paginator-overview/paginator-overview-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/paginator-overview/paginator-overview-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/paginator-overview/paginator-overview-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/paginator-overview/paginator-overview-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/paginator-overview/paginator-overview-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: PaginatorOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorOverviewExample", function() { return PaginatorOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Paginator
 */
var PaginatorOverviewExample = /** @class */ (function () {
    function PaginatorOverviewExample() {
    }
    PaginatorOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'paginator-overview-example',
            template: __webpack_require__(/*! ./paginator-overview-example.html */ "./src/assets/angular-material-examples/paginator-overview/paginator-overview-example.html"),
            styles: [__webpack_require__(/*! ./paginator-overview-example.css */ "./src/assets/angular-material-examples/paginator-overview/paginator-overview-example.css")],
        })
    ], PaginatorOverviewExample);
    return PaginatorOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-buffer/progress-bar-buffer-example.css":
/*!**************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-buffer/progress-bar-buffer-example.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-buffer/progress-bar-buffer-example.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-buffer/progress-bar-buffer-example.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-buffer/progress-bar-buffer-example.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-buffer/progress-bar-buffer-example.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProgressBarBufferExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarBufferExample", function() { return ProgressBarBufferExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Buffer progress-bar
 */
var ProgressBarBufferExample = /** @class */ (function () {
    function ProgressBarBufferExample() {
    }
    ProgressBarBufferExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'progress-bar-buffer-example',
            template: __webpack_require__(/*! ./progress-bar-buffer-example.html */ "./src/assets/angular-material-examples/progress-bar-buffer/progress-bar-buffer-example.html"),
            styles: [__webpack_require__(/*! ./progress-bar-buffer-example.css */ "./src/assets/angular-material-examples/progress-bar-buffer/progress-bar-buffer-example.css")],
        })
    ], ProgressBarBufferExample);
    return ProgressBarBufferExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-configurable/progress-bar-configurable-example.css":
/*!**************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-configurable/progress-bar-configurable-example.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-configurable/progress-bar-configurable-example.html":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-configurable/progress-bar-configurable-example.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\n          Buffer\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"query\">\n          Query\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode == 'buffer'\">\n      <label class=\"example-margin\">Buffer:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-progress-bar\n          class=\"example-margin\"\n          [color]=\"color\"\n          [mode]=\"mode\"\n          [value]=\"value\"\n          [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-configurable/progress-bar-configurable-example.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-configurable/progress-bar-configurable-example.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProgressBarConfigurableExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarConfigurableExample", function() { return ProgressBarConfigurableExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Configurable progress-bar
 */
var ProgressBarConfigurableExample = /** @class */ (function () {
    function ProgressBarConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    ProgressBarConfigurableExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'progress-bar-configurable-example',
            template: __webpack_require__(/*! ./progress-bar-configurable-example.html */ "./src/assets/angular-material-examples/progress-bar-configurable/progress-bar-configurable-example.html"),
            styles: [__webpack_require__(/*! ./progress-bar-configurable-example.css */ "./src/assets/angular-material-examples/progress-bar-configurable/progress-bar-configurable-example.css")],
        })
    ], ProgressBarConfigurableExample);
    return ProgressBarConfigurableExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-determinate/progress-bar-determinate-example.css":
/*!************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-determinate/progress-bar-determinate-example.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-determinate/progress-bar-determinate-example.html":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-determinate/progress-bar-determinate-example.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-determinate/progress-bar-determinate-example.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-determinate/progress-bar-determinate-example.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProgressBarDeterminateExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarDeterminateExample", function() { return ProgressBarDeterminateExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Determinate progress-bar
 */
var ProgressBarDeterminateExample = /** @class */ (function () {
    function ProgressBarDeterminateExample() {
    }
    ProgressBarDeterminateExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'progress-bar-determinate-example',
            template: __webpack_require__(/*! ./progress-bar-determinate-example.html */ "./src/assets/angular-material-examples/progress-bar-determinate/progress-bar-determinate-example.html"),
            styles: [__webpack_require__(/*! ./progress-bar-determinate-example.css */ "./src/assets/angular-material-examples/progress-bar-determinate/progress-bar-determinate-example.css")],
        })
    ], ProgressBarDeterminateExample);
    return ProgressBarDeterminateExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-indeterminate/progress-bar-indeterminate-example.css":
/*!****************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-indeterminate/progress-bar-indeterminate-example.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-indeterminate/progress-bar-indeterminate-example.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-indeterminate/progress-bar-indeterminate-example.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-indeterminate/progress-bar-indeterminate-example.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-indeterminate/progress-bar-indeterminate-example.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ProgressBarIndeterminateExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarIndeterminateExample", function() { return ProgressBarIndeterminateExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Indeterminate progress-bar
 */
var ProgressBarIndeterminateExample = /** @class */ (function () {
    function ProgressBarIndeterminateExample() {
    }
    ProgressBarIndeterminateExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'progress-bar-indeterminate-example',
            template: __webpack_require__(/*! ./progress-bar-indeterminate-example.html */ "./src/assets/angular-material-examples/progress-bar-indeterminate/progress-bar-indeterminate-example.html"),
            styles: [__webpack_require__(/*! ./progress-bar-indeterminate-example.css */ "./src/assets/angular-material-examples/progress-bar-indeterminate/progress-bar-indeterminate-example.css")],
        })
    ], ProgressBarIndeterminateExample);
    return ProgressBarIndeterminateExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-query/progress-bar-query-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-query/progress-bar-query-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-query/progress-bar-query-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-query/progress-bar-query-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"query\"></mat-progress-bar>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-bar-query/progress-bar-query-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-bar-query/progress-bar-query-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProgressBarQueryExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarQueryExample", function() { return ProgressBarQueryExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Query progress-bar
 */
var ProgressBarQueryExample = /** @class */ (function () {
    function ProgressBarQueryExample() {
    }
    ProgressBarQueryExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'progress-bar-query-example',
            template: __webpack_require__(/*! ./progress-bar-query-example.html */ "./src/assets/angular-material-examples/progress-bar-query/progress-bar-query-example.html"),
            styles: [__webpack_require__(/*! ./progress-bar-query-example.css */ "./src/assets/angular-material-examples/progress-bar-query/progress-bar-query-example.css")],
        })
    ], ProgressBarQueryExample);
    return ProgressBarQueryExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/progress-spinner-configurable/progress-spinner-configurable-example.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-spinner-configurable/progress-spinner-configurable-example.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-spinner-configurable/progress-spinner-configurable-example.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-spinner-configurable/progress-spinner-configurable-example.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress spinner configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode == 'determinate'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <mat-progress-spinner\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"value\">\n    </mat-progress-spinner>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-spinner-configurable/progress-spinner-configurable-example.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-spinner-configurable/progress-spinner-configurable-example.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ProgressSpinnerConfigurableExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerConfigurableExample", function() { return ProgressSpinnerConfigurableExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Configurable progress spinner
 */
var ProgressSpinnerConfigurableExample = /** @class */ (function () {
    function ProgressSpinnerConfigurableExample() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    ProgressSpinnerConfigurableExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'progress-spinner-configurable-example',
            template: __webpack_require__(/*! ./progress-spinner-configurable-example.html */ "./src/assets/angular-material-examples/progress-spinner-configurable/progress-spinner-configurable-example.html"),
            styles: [__webpack_require__(/*! ./progress-spinner-configurable-example.css */ "./src/assets/angular-material-examples/progress-spinner-configurable/progress-spinner-configurable-example.css")],
        })
    ], ProgressSpinnerConfigurableExample);
    return ProgressSpinnerConfigurableExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/progress-spinner-overview/progress-spinner-overview-example.css":
/*!**************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-spinner-overview/progress-spinner-overview-example.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-spinner-overview/progress-spinner-overview-example.html":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-spinner-overview/progress-spinner-overview-example.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner></mat-spinner>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/progress-spinner-overview/progress-spinner-overview-example.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/progress-spinner-overview/progress-spinner-overview-example.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ProgressSpinnerOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerOverviewExample", function() { return ProgressSpinnerOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic progress-spinner
 */
var ProgressSpinnerOverviewExample = /** @class */ (function () {
    function ProgressSpinnerOverviewExample() {
    }
    ProgressSpinnerOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'progress-spinner-overview-example',
            template: __webpack_require__(/*! ./progress-spinner-overview-example.html */ "./src/assets/angular-material-examples/progress-spinner-overview/progress-spinner-overview-example.html"),
            styles: [__webpack_require__(/*! ./progress-spinner-overview-example.css */ "./src/assets/angular-material-examples/progress-spinner-overview/progress-spinner-overview-example.css")],
        })
    ], ProgressSpinnerOverviewExample);
    return ProgressSpinnerOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/radio-ng-model/radio-ng-model-example.css":
/*!****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/radio-ng-model/radio-ng-model-example.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n\n.example-selected-value {\n  margin: 15px 0;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/radio-ng-model/radio-ng-model-example.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/radio-ng-model/radio-ng-model-example.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/radio-ng-model/radio-ng-model-example.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/radio-ng-model/radio-ng-model-example.ts ***!
  \***************************************************************************************/
/*! exports provided: RadioNgModelExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioNgModelExample", function() { return RadioNgModelExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Radios with ngModel
 */
var RadioNgModelExample = /** @class */ (function () {
    function RadioNgModelExample() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    RadioNgModelExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'radio-ng-model-example',
            template: __webpack_require__(/*! ./radio-ng-model-example.html */ "./src/assets/angular-material-examples/radio-ng-model/radio-ng-model-example.html"),
            styles: [__webpack_require__(/*! ./radio-ng-model-example.css */ "./src/assets/angular-material-examples/radio-ng-model/radio-ng-model-example.css")],
        })
    ], RadioNgModelExample);
    return RadioNgModelExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/radio-overview/radio-overview-example.css":
/*!****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/radio-overview/radio-overview-example.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/radio-overview/radio-overview-example.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/radio-overview/radio-overview-example.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-radio-group>\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/radio-overview/radio-overview-example.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/radio-overview/radio-overview-example.ts ***!
  \***************************************************************************************/
/*! exports provided: RadioOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioOverviewExample", function() { return RadioOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic radios
 */
var RadioOverviewExample = /** @class */ (function () {
    function RadioOverviewExample() {
    }
    RadioOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'radio-overview-example',
            template: __webpack_require__(/*! ./radio-overview-example.html */ "./src/assets/angular-material-examples/radio-overview/radio-overview-example.html"),
            styles: [__webpack_require__(/*! ./radio-overview-example.css */ "./src/assets/angular-material-examples/radio-overview/radio-overview-example.css")],
        })
    ], RadioOverviewExample);
    return RadioOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-custom-trigger/select-custom-trigger-example.css":
/*!******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-custom-trigger/select-custom-trigger-example.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-custom-trigger/select-custom-trigger-example.html":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-custom-trigger/select-custom-trigger-example.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n    <mat-select-trigger>\n      {{toppings.value ? toppings.value[0] : ''}}\n      <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">\n        (+{{toppings.value.length - 1}} others)\n      </span>\n    </mat-select-trigger>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-custom-trigger/select-custom-trigger-example.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-custom-trigger/select-custom-trigger-example.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SelectCustomTriggerExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCustomTriggerExample", function() { return SelectCustomTriggerExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** @title Select with custom trigger text */
var SelectCustomTriggerExample = /** @class */ (function () {
    function SelectCustomTriggerExample() {
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectCustomTriggerExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-custom-trigger-example',
            template: __webpack_require__(/*! ./select-custom-trigger-example.html */ "./src/assets/angular-material-examples/select-custom-trigger/select-custom-trigger-example.html"),
            styles: [__webpack_require__(/*! ./select-custom-trigger-example.css */ "./src/assets/angular-material-examples/select-custom-trigger/select-custom-trigger-example.css")],
        })
    ], SelectCustomTriggerExample);
    return SelectCustomTriggerExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-disabled/select-disabled-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-disabled/select-disabled-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-disabled/select-disabled-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-disabled/select-disabled-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox>\n</p>\n<p>\n  <mat-form-field>\n    <mat-select placeholder=\"Choose an option\" [disabled]=\"disableSelect.value\">\n      <mat-option value=\"option1\">Option 1</mat-option>\n      <mat-option value=\"option2\" disabled>Option 2 (disabled)</mat-option>\n      <mat-option value=\"option3\">Option 3</mat-option>\n    </mat-select>\n  </mat-form-field>\n</p>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-disabled/select-disabled-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-disabled/select-disabled-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: SelectDisabledExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDisabledExample", function() { return SelectDisabledExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** @title Disabled select */
var SelectDisabledExample = /** @class */ (function () {
    function SelectDisabledExample() {
        this.disableSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
    }
    SelectDisabledExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-disabled-example',
            template: __webpack_require__(/*! ./select-disabled-example.html */ "./src/assets/angular-material-examples/select-disabled/select-disabled-example.html"),
            styles: [__webpack_require__(/*! ./select-disabled-example.css */ "./src/assets/angular-material-examples/select-disabled/select-disabled-example.css")],
        })
    ], SelectDisabledExample);
    return SelectDisabledExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-error-state-matcher/select-error-state-matcher-example.css":
/*!****************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-error-state-matcher/select-error-state-matcher-example.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-error-state-matcher/select-error-state-matcher-example.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-error-state-matcher/select-error-state-matcher-example.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Choose one\" [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\n    <mat-option>Clear</mat-option>\n    <mat-option value=\"valid\">Valid option</mat-option>\n    <mat-option value=\"invalid\">Invalid option</mat-option>\n  </mat-select>\n  <mat-hint>Errors appear instantly!</mat-hint>\n  <mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error>\n  <mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">\n    Your selection is invalid\n  </mat-error>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-error-state-matcher/select-error-state-matcher-example.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-error-state-matcher/select-error-state-matcher-example.ts ***!
  \***************************************************************************************************************/
/*! exports provided: MyErrorStateMatcher, SelectErrorStateMatcherExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectErrorStateMatcherExample", function() { return SelectErrorStateMatcherExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

/** @title Select with a custom ErrorStateMatcher */
var SelectErrorStateMatcherExample = /** @class */ (function () {
    function SelectErrorStateMatcherExample() {
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('valid', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    SelectErrorStateMatcherExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-error-state-matcher-example',
            template: __webpack_require__(/*! ./select-error-state-matcher-example.html */ "./src/assets/angular-material-examples/select-error-state-matcher/select-error-state-matcher-example.html"),
            styles: [__webpack_require__(/*! ./select-error-state-matcher-example.css */ "./src/assets/angular-material-examples/select-error-state-matcher/select-error-state-matcher-example.css")],
        })
    ], SelectErrorStateMatcherExample);
    return SelectErrorStateMatcherExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-form/select-form-example.css":
/*!**********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-form/select-form-example.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-form/select-form-example.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-form/select-form-example.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <mat-form-field>\n    <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\n      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <p> Selected value: {{selectedValue}} </p>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-form/select-form-example.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-form/select-form-example.ts ***!
  \*********************************************************************************/
/*! exports provided: SelectFormExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFormExample", function() { return SelectFormExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Select in a form
 */
var SelectFormExample = /** @class */ (function () {
    function SelectFormExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    SelectFormExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-form-example',
            template: __webpack_require__(/*! ./select-form-example.html */ "./src/assets/angular-material-examples/select-form/select-form-example.html"),
            styles: [__webpack_require__(/*! ./select-form-example.css */ "./src/assets/angular-material-examples/select-form/select-form-example.css")],
        })
    ], SelectFormExample);
    return SelectFormExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-hint-error/select-hint-error-example.css":
/*!**********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-hint-error/select-hint-error-example.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-hint-error/select-hint-error-example.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-hint-error/select-hint-error-example.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Favorite animal\" [formControl]=\"animalControl\" required>\n    <mat-option>--</mat-option>\n    <mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\n      {{animal.name}}\n    </mat-option>\n  </mat-select>\n  <mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\n  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-hint-error/select-hint-error-example.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-hint-error/select-hint-error-example.ts ***!
  \*********************************************************************************************/
/*! exports provided: SelectHintErrorExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectHintErrorExample", function() { return SelectHintErrorExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** @title Select with form field features */
var SelectHintErrorExample = /** @class */ (function () {
    function SelectHintErrorExample() {
        this.animalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
    SelectHintErrorExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-hint-error-example',
            template: __webpack_require__(/*! ./select-hint-error-example.html */ "./src/assets/angular-material-examples/select-hint-error/select-hint-error-example.html"),
            styles: [__webpack_require__(/*! ./select-hint-error-example.css */ "./src/assets/angular-material-examples/select-hint-error/select-hint-error-example.css")],
        })
    ], SelectHintErrorExample);
    return SelectHintErrorExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-multiple/select-multiple-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-multiple/select-multiple-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-multiple/select-multiple-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-multiple/select-multiple-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-multiple/select-multiple-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-multiple/select-multiple-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: SelectMultipleExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleExample", function() { return SelectMultipleExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** @title Select with multiple selection */
var SelectMultipleExample = /** @class */ (function () {
    function SelectMultipleExample() {
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectMultipleExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-multiple-example',
            template: __webpack_require__(/*! ./select-multiple-example.html */ "./src/assets/angular-material-examples/select-multiple/select-multiple-example.html"),
            styles: [__webpack_require__(/*! ./select-multiple-example.css */ "./src/assets/angular-material-examples/select-multiple/select-multiple-example.css")],
        })
    ], SelectMultipleExample);
    return SelectMultipleExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-no-ripple/select-no-ripple-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-no-ripple/select-no-ripple-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-no-ripple/select-no-ripple-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-no-ripple/select-no-ripple-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Select an option\" disableRipple>\n    <mat-option value=\"1\">Option 1</mat-option>\n    <mat-option value=\"2\">Option 2</mat-option>\n    <mat-option value=\"3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-no-ripple/select-no-ripple-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-no-ripple/select-no-ripple-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: SelectNoRippleExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectNoRippleExample", function() { return SelectNoRippleExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Select with no option ripple */
var SelectNoRippleExample = /** @class */ (function () {
    function SelectNoRippleExample() {
    }
    SelectNoRippleExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-no-ripple-example',
            template: __webpack_require__(/*! ./select-no-ripple-example.html */ "./src/assets/angular-material-examples/select-no-ripple/select-no-ripple-example.html"),
            styles: [__webpack_require__(/*! ./select-no-ripple-example.css */ "./src/assets/angular-material-examples/select-no-ripple/select-no-ripple-example.css")],
        })
    ], SelectNoRippleExample);
    return SelectNoRippleExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-optgroup/select-optgroup-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-optgroup/select-optgroup-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-optgroup/select-optgroup-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-optgroup/select-optgroup-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{ pokemon.viewValue }}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-optgroup/select-optgroup-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-optgroup/select-optgroup-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: SelectOptgroupExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOptgroupExample", function() { return SelectOptgroupExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** @title Select with option groups */
var SelectOptgroupExample = /** @class */ (function () {
    function SelectOptgroupExample() {
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
    }
    SelectOptgroupExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-optgroup-example',
            template: __webpack_require__(/*! ./select-optgroup-example.html */ "./src/assets/angular-material-examples/select-optgroup/select-optgroup-example.html"),
            styles: [__webpack_require__(/*! ./select-optgroup-example.css */ "./src/assets/angular-material-examples/select-optgroup/select-optgroup-example.css")],
        })
    ], SelectOptgroupExample);
    return SelectOptgroupExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-overview/select-overview-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-overview/select-overview-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-overview/select-overview-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-overview/select-overview-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Favorite food\">\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{ food.viewValue }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-overview/select-overview-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-overview/select-overview-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: SelectOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOverviewExample", function() { return SelectOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic select
 */
var SelectOverviewExample = /** @class */ (function () {
    function SelectOverviewExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    SelectOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-overview-example',
            template: __webpack_require__(/*! ./select-overview-example.html */ "./src/assets/angular-material-examples/select-overview/select-overview-example.html"),
            styles: [__webpack_require__(/*! ./select-overview-example.css */ "./src/assets/angular-material-examples/select-overview/select-overview-example.css")],
        })
    ], SelectOverviewExample);
    return SelectOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-panel-class/select-panel-class-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-panel-class/select-panel-class-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-panel-red .mat-select-content {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green .mat-select-content {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue .mat-select-content {\n  background: rgba(0, 0, 255, 0.5);\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-panel-class/select-panel-class-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-panel-class/select-panel-class-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Panel color\" [formControl]=\"panelColor\"\n              panelClass=\"example-panel-{{panelColor.value}}\">\n    <mat-option value=\"red\">Red</mat-option>\n    <mat-option value=\"green\">Green</mat-option>\n    <mat-option value=\"blue\">Blue</mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-panel-class/select-panel-class-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-panel-class/select-panel-class-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: SelectPanelClassExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPanelClassExample", function() { return SelectPanelClassExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * @title Select with custom panel styling
 */
var SelectPanelClassExample = /** @class */ (function () {
    function SelectPanelClassExample() {
        this.panelColor = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('red');
    }
    SelectPanelClassExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-panel-class-example',
            template: __webpack_require__(/*! ./select-panel-class-example.html */ "./src/assets/angular-material-examples/select-panel-class/select-panel-class-example.html"),
            styles: [__webpack_require__(/*! ./select-panel-class-example.css */ "./src/assets/angular-material-examples/select-panel-class/select-panel-class-example.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        })
    ], SelectPanelClassExample);
    return SelectPanelClassExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-reset/select-reset-example.css":
/*!************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-reset/select-reset-example.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-reset/select-reset-example.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-reset/select-reset-example.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"State\">\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-reset/select-reset-example.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-reset/select-reset-example.ts ***!
  \***********************************************************************************/
/*! exports provided: SelectResetExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectResetExample", function() { return SelectResetExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Select with reset option */
var SelectResetExample = /** @class */ (function () {
    function SelectResetExample() {
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
    }
    SelectResetExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-reset-example',
            template: __webpack_require__(/*! ./select-reset-example.html */ "./src/assets/angular-material-examples/select-reset/select-reset-example.html"),
            styles: [__webpack_require__(/*! ./select-reset-example.css */ "./src/assets/angular-material-examples/select-reset/select-reset-example.css")],
        })
    ], SelectResetExample);
    return SelectResetExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/select-value-binding/select-value-binding-example.css":
/*!****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-value-binding/select-value-binding-example.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-value-binding/select-value-binding-example.html":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-value-binding/select-value-binding-example.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select [(value)]=\"selected\">\n    <mat-option>None</mat-option>\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\">Option 2</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<p>You selected: {{selected}}</p>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/select-value-binding/select-value-binding-example.ts":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/select-value-binding/select-value-binding-example.ts ***!
  \***************************************************************************************************/
/*! exports provided: SelectValueBindingExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectValueBindingExample", function() { return SelectValueBindingExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Select with 2-way value binding */
var SelectValueBindingExample = /** @class */ (function () {
    function SelectValueBindingExample() {
        this.selected = 'option2';
    }
    SelectValueBindingExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-value-binding-example',
            template: __webpack_require__(/*! ./select-value-binding-example.html */ "./src/assets/angular-material-examples/select-value-binding/select-value-binding-example.html"),
            styles: [__webpack_require__(/*! ./select-value-binding-example.css */ "./src/assets/angular-material-examples/select-value-binding/select-value-binding-example.css")],
        })
    ], SelectValueBindingExample);
    return SelectValueBindingExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-autosize/sidenav-autosize-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-autosize/sidenav-autosize-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-autosize/sidenav-autosize-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-autosize/sidenav-autosize-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-autosize/sidenav-autosize-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-autosize/sidenav-autosize-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: SidenavAutosizeExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavAutosizeExample", function() { return SidenavAutosizeExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Autosize sidenav
 */
var SidenavAutosizeExample = /** @class */ (function () {
    function SidenavAutosizeExample() {
        this.showFiller = false;
    }
    SidenavAutosizeExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-autosize-example',
            template: __webpack_require__(/*! ./sidenav-autosize-example.html */ "./src/assets/angular-material-examples/sidenav-autosize/sidenav-autosize-example.html"),
            styles: [__webpack_require__(/*! ./sidenav-autosize-example.css */ "./src/assets/angular-material-examples/sidenav-autosize/sidenav-autosize-example.css")],
        })
    ], SidenavAutosizeExample);
    return SidenavAutosizeExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-backdrop/sidenav-backdrop-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-backdrop/sidenav-backdrop-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-backdrop/sidenav-backdrop-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-backdrop/sidenav-backdrop-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\">\n  <mat-drawer #drawer [mode]=\"mode.value\">I'm a drawer</mat-drawer>\n  <mat-drawer-content>\n    <mat-form-field>\n      <mat-label>Sidenav mode</mat-label>\n      <mat-select #mode value=\"side\">\n        <mat-option value=\"side\">Side</mat-option>\n        <mat-option value=\"over\">Over</mat-option>\n        <mat-option value=\"push\">Push</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Has backdrop</mat-label>\n      <mat-select #hasBackdrop>\n        <mat-option>Unset</mat-option>\n        <mat-option [value]=\"true\">True</mat-option>\n        <mat-option [value]=\"false\">False</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-backdrop/sidenav-backdrop-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-backdrop/sidenav-backdrop-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: SidenavBackdropExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavBackdropExample", function() { return SidenavBackdropExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Drawer with explicit backdrop setting */
var SidenavBackdropExample = /** @class */ (function () {
    function SidenavBackdropExample() {
    }
    SidenavBackdropExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-backdrop-example',
            template: __webpack_require__(/*! ./sidenav-backdrop-example.html */ "./src/assets/angular-material-examples/sidenav-backdrop/sidenav-backdrop-example.html"),
            styles: [__webpack_require__(/*! ./sidenav-backdrop-example.css */ "./src/assets/angular-material-examples/sidenav-backdrop/sidenav-backdrop-example.css")],
        })
    ], SidenavBackdropExample);
    return SidenavBackdropExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-disable-close/sidenav-disable-close-example.css":
/*!******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-disable-close/sidenav-disable-close-example.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-disable-close/sidenav-disable-close-example.html":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-disable-close/sidenav-disable-close-example.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\n    <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.open()\">Open</button></p>\n    <p>Closed due to: {{reason}}</p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-disable-close/sidenav-disable-close-example.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-disable-close/sidenav-disable-close-example.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SidenavDisableCloseExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavDisableCloseExample", function() { return SidenavDisableCloseExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** @title Sidenav with custom escape and backdrop click behavior */
var SidenavDisableCloseExample = /** @class */ (function () {
    function SidenavDisableCloseExample() {
        this.reason = '';
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavDisableCloseExample.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], SidenavDisableCloseExample.prototype, "sidenav", void 0);
    SidenavDisableCloseExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-disable-close-example',
            template: __webpack_require__(/*! ./sidenav-disable-close-example.html */ "./src/assets/angular-material-examples/sidenav-disable-close/sidenav-disable-close-example.html"),
            styles: [__webpack_require__(/*! ./sidenav-disable-close-example.css */ "./src/assets/angular-material-examples/sidenav-disable-close/sidenav-disable-close-example.css")],
        })
    ], SidenavDisableCloseExample);
    return SidenavDisableCloseExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-drawer-overview/sidenav-drawer-overview-example.css":
/*!**********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-drawer-overview/sidenav-drawer-overview-example.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-drawer-overview/sidenav-drawer-overview-example.html":
/*!***********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-drawer-overview/sidenav-drawer-overview-example.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened=\"true\">Drawer content</mat-drawer>\n  <mat-drawer-content>Main content</mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-drawer-overview/sidenav-drawer-overview-example.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-drawer-overview/sidenav-drawer-overview-example.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SidenavDrawerOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavDrawerOverviewExample", function() { return SidenavDrawerOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Basic drawer */
var SidenavDrawerOverviewExample = /** @class */ (function () {
    function SidenavDrawerOverviewExample() {
    }
    SidenavDrawerOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-drawer-overview-example',
            template: __webpack_require__(/*! ./sidenav-drawer-overview-example.html */ "./src/assets/angular-material-examples/sidenav-drawer-overview/sidenav-drawer-overview-example.html"),
            styles: [__webpack_require__(/*! ./sidenav-drawer-overview-example.css */ "./src/assets/angular-material-examples/sidenav-drawer-overview/sidenav-drawer-overview-example.css")],
        })
    ], SidenavDrawerOverviewExample);
    return SidenavDrawerOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-fixed/sidenav-fixed-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-fixed/sidenav-fixed-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-fixed/sidenav-fixed-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-fixed/sidenav-fixed-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"shouldRun\">\n  <mat-toolbar class=\"example-header\">Header</mat-toolbar>\n\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" opened=\"true\" class=\"example-sidenav\"\n                 [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\"\n                 [fixedBottomGap]=\"options.value.bottom\">\n      {{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav\n    </mat-sidenav>\n\n    <mat-sidenav-content [formGroup]=\"options\">\n      <p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p>\n      <p><mat-form-field>\n        <input matInput type=\"number\" formControlName=\"top\" placeholder=\"Top gap\">\n      </mat-form-field></p>\n      <p><mat-form-field>\n        <input matInput type=\"number\" formControlName=\"bottom\" placeholder=\"Bottom gap\">\n      </mat-form-field></p>\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n  <mat-toolbar class=\"example-footer\">Footer</mat-toolbar>\n</ng-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-fixed/sidenav-fixed-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-fixed/sidenav-fixed-example.ts ***!
  \*************************************************************************************/
/*! exports provided: SidenavFixedExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavFixedExample", function() { return SidenavFixedExample; });
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


/** @title Fixed sidenav */
var SidenavFixedExample = /** @class */ (function () {
    function SidenavFixedExample(fb) {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.options = fb.group({
            'fixed': false,
            'top': 0,
            'bottom': 0,
        });
    }
    SidenavFixedExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-fixed-example',
            template: __webpack_require__(/*! ./sidenav-fixed-example.html */ "./src/assets/angular-material-examples/sidenav-fixed/sidenav-fixed-example.html"),
            styles: [__webpack_require__(/*! ./sidenav-fixed-example.css */ "./src/assets/angular-material-examples/sidenav-fixed/sidenav-fixed-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SidenavFixedExample);
    return SidenavFixedExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-mode/sidenav-mode-example.css":
/*!************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-mode/sidenav-mode-example.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-mode/sidenav-mode-example.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-mode/sidenav-mode-example.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav [mode]=\"mode.value\">\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-mode/sidenav-mode-example.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-mode/sidenav-mode-example.ts ***!
  \***********************************************************************************/
/*! exports provided: SidenavModeExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavModeExample", function() { return SidenavModeExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** @title Sidenav with configurable mode */
var SidenavModeExample = /** @class */ (function () {
    function SidenavModeExample() {
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('over');
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavModeExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-mode-example',
            template: __webpack_require__(/*! ./sidenav-mode-example.html */ "./src/assets/angular-material-examples/sidenav-mode/sidenav-mode-example.html"),
            styles: [__webpack_require__(/*! ./sidenav-mode-example.css */ "./src/assets/angular-material-examples/sidenav-mode/sidenav-mode-example.css")],
        })
    ], SidenavModeExample);
    return SidenavModeExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-open-close/sidenav-open-close-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-open-close/sidenav-open-close-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-open-close/sidenav-open-close-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-open-close/sidenav-open-close-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\n               (closed)=\"events.push('close!')\">\n    Sidenav content\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p>\n    <p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p>\n    <p>Events:</p>\n    <div class=\"example-events\">\n      <div *ngFor=\"let e of events\">{{e}}</div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-open-close/sidenav-open-close-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-open-close/sidenav-open-close-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: SidenavOpenCloseExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavOpenCloseExample", function() { return SidenavOpenCloseExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Sidenav open & close behavior */
var SidenavOpenCloseExample = /** @class */ (function () {
    function SidenavOpenCloseExample() {
        this.events = [];
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOpenCloseExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-open-close-example',
            template: __webpack_require__(/*! ./sidenav-open-close-example.html */ "./src/assets/angular-material-examples/sidenav-open-close/sidenav-open-close-example.html"),
            styles: [__webpack_require__(/*! ./sidenav-open-close-example.css */ "./src/assets/angular-material-examples/sidenav-open-close/sidenav-open-close-example.css")],
        })
    ], SidenavOpenCloseExample);
    return SidenavOpenCloseExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-overview/sidenav-overview-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-overview/sidenav-overview-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-overview/sidenav-overview-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-overview/sidenav-overview-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n  <mat-sidenav-content>Main content</mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-overview/sidenav-overview-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-overview/sidenav-overview-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: SidenavOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavOverviewExample", function() { return SidenavOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Basic sidenav */
var SidenavOverviewExample = /** @class */ (function () {
    function SidenavOverviewExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-overview-example',
            template: __webpack_require__(/*! ./sidenav-overview-example.html */ "./src/assets/angular-material-examples/sidenav-overview/sidenav-overview-example.html"),
            styles: [__webpack_require__(/*! ./sidenav-overview-example.css */ "./src/assets/angular-material-examples/sidenav-overview/sidenav-overview-example.css")],
        })
    ], SidenavOverviewExample);
    return SidenavOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-position/sidenav-position-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-position/sidenav-position-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-position/sidenav-position-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-position/sidenav-position-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav opened mode=\"side\">Start content</mat-sidenav>\n  <mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>\n  Implicit main content\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-position/sidenav-position-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-position/sidenav-position-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: SidenavPositionExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavPositionExample", function() { return SidenavPositionExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Implicit main content with two sidenavs */
var SidenavPositionExample = /** @class */ (function () {
    function SidenavPositionExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavPositionExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidenav-position-example',
            template: __webpack_require__(/*! ./sidenav-position-example.html */ "./src/assets/angular-material-examples/sidenav-position/sidenav-position-example.html"),
            styles: [__webpack_require__(/*! ./sidenav-position-example.css */ "./src/assets/angular-material-examples/sidenav-position/sidenav-position-example.css")],
        })
    ], SidenavPositionExample);
    return SidenavPositionExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-responsive/sidenav-responsive-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-responsive/sidenav-responsive-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.example-app-name {\n  margin-left: 8px;\n}\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-responsive/sidenav-responsive-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-responsive/sidenav-responsive-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">Responsive App</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p *ngFor=\"let content of fillerContent\">{{content}}</p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sidenav-responsive/sidenav-responsive-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sidenav-responsive/sidenav-responsive-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: SidenavResponsiveExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavResponsiveExample", function() { return SidenavResponsiveExample; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** @title Responsive sidenav */
var SidenavResponsiveExample = /** @class */ (function () {
    function SidenavResponsiveExample(changeDetectorRef, media) {
        this.fillerNav = Array(50).fill(0).map(function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array(50).fill(0).map(function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    SidenavResponsiveExample.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    SidenavResponsiveExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sidenav-responsive-example',
            template: __webpack_require__(/*! ./sidenav-responsive-example.html */ "./src/assets/angular-material-examples/sidenav-responsive/sidenav-responsive-example.html"),
            styles: [__webpack_require__(/*! ./sidenav-responsive-example.css */ "./src/assets/angular-material-examples/sidenav-responsive/sidenav-responsive-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]])
    ], SidenavResponsiveExample);
    return SidenavResponsiveExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/slide-toggle-configurable/slide-toggle-configurable-example.css":
/*!**************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slide-toggle-configurable/slide-toggle-configurable-example.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slide-toggle-configurable/slide-toggle-configurable-example.html":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slide-toggle-configurable/slide-toggle-configurable-example.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-slide-toggle\n          class=\"example-margin\"\n          [color]=\"color\"\n          [checked]=\"checked\"\n          [disabled]=\"disabled\">\n        Slide me!\n      </mat-slide-toggle>\n    </section>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slide-toggle-configurable/slide-toggle-configurable-example.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slide-toggle-configurable/slide-toggle-configurable-example.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SlideToggleConfigurableExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideToggleConfigurableExample", function() { return SlideToggleConfigurableExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Configurable slide-toggle
 */
var SlideToggleConfigurableExample = /** @class */ (function () {
    function SlideToggleConfigurableExample() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    SlideToggleConfigurableExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slide-toggle-configurable-example',
            template: __webpack_require__(/*! ./slide-toggle-configurable-example.html */ "./src/assets/angular-material-examples/slide-toggle-configurable/slide-toggle-configurable-example.html"),
            styles: [__webpack_require__(/*! ./slide-toggle-configurable-example.css */ "./src/assets/angular-material-examples/slide-toggle-configurable/slide-toggle-configurable-example.css")],
        })
    ], SlideToggleConfigurableExample);
    return SlideToggleConfigurableExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/slide-toggle-forms/slide-toggle-forms-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slide-toggle-forms/slide-toggle-forms-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form mat-slide-toggle {\n  margin: 8px 0;\n  display: block;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slide-toggle-forms/slide-toggle-forms-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slide-toggle-forms/slide-toggle-forms-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Slide Toggle using a simple NgModel.</p>\n\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{ isChecked }}</mat-slide-toggle>\n\n<p>Slide Toggle inside of a Template-driven form</p>\n\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit(form.value)\" ngNativeValidate>\n\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n\n<p>Slide Toggle inside of a Reactive form</p>\n\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit(formGroup.value)\" ngNativeValidate>\n\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\n\n  <p>Form Group Status: {{ formGroup.status}}</p>\n\n  <button mat-rasied-button type=\"submit\">Save Settings</button>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slide-toggle-forms/slide-toggle-forms-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slide-toggle-forms/slide-toggle-forms-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: SlideToggleFormsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideToggleFormsExample", function() { return SlideToggleFormsExample; });
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


/**
 * @title Slide-toggle with forms
 */
var SlideToggleFormsExample = /** @class */ (function () {
    function SlideToggleFormsExample(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]
        });
    }
    SlideToggleFormsExample.prototype.onFormSubmit = function (formValue) {
        alert(JSON.stringify(formValue, null, 2));
    };
    SlideToggleFormsExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slide-toggle-forms-example',
            template: __webpack_require__(/*! ./slide-toggle-forms-example.html */ "./src/assets/angular-material-examples/slide-toggle-forms/slide-toggle-forms-example.html"),
            styles: [__webpack_require__(/*! ./slide-toggle-forms-example.css */ "./src/assets/angular-material-examples/slide-toggle-forms/slide-toggle-forms-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SlideToggleFormsExample);
    return SlideToggleFormsExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/slide-toggle-overview/slide-toggle-overview-example.css":
/*!******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slide-toggle-overview/slide-toggle-overview-example.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slide-toggle-overview/slide-toggle-overview-example.html":
/*!*******************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slide-toggle-overview/slide-toggle-overview-example.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-slide-toggle>Slide me!</mat-slide-toggle>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slide-toggle-overview/slide-toggle-overview-example.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slide-toggle-overview/slide-toggle-overview-example.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SlideToggleOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideToggleOverviewExample", function() { return SlideToggleOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic slide-toggles
 */
var SlideToggleOverviewExample = /** @class */ (function () {
    function SlideToggleOverviewExample() {
    }
    SlideToggleOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slide-toggle-overview-example',
            template: __webpack_require__(/*! ./slide-toggle-overview-example.html */ "./src/assets/angular-material-examples/slide-toggle-overview/slide-toggle-overview-example.html"),
            styles: [__webpack_require__(/*! ./slide-toggle-overview-example.css */ "./src/assets/angular-material-examples/slide-toggle-overview/slide-toggle-overview-example.css")],
        })
    ], SlideToggleOverviewExample);
    return SlideToggleOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/slider-configurable/slider-configurable-example.css":
/*!**************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slider-configurable/slider-configurable-example.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n\n.mat-slider-horizontal {\n  width: 300px;\n}\n\n.mat-slider-vertical {\n  height: 300px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slider-configurable/slider-configurable-example.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slider-configurable/slider-configurable-example.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\n        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [invert]=\"invert\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [thumbLabel]=\"thumbLabel\"\n        [tickInterval]=\"tickInterval\"\n        [(ngModel)]=\"value\"\n        [vertical]=\"vertical\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slider-configurable/slider-configurable-example.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slider-configurable/slider-configurable-example.ts ***!
  \*************************************************************************************************/
/*! exports provided: SliderConfigurableExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderConfigurableExample", function() { return SliderConfigurableExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Configurable slider
 */
var SliderConfigurableExample = /** @class */ (function () {
    function SliderConfigurableExample() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
    }
    Object.defineProperty(SliderConfigurableExample.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (v) {
            this._tickInterval = Number(v);
        },
        enumerable: true,
        configurable: true
    });
    SliderConfigurableExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slider-configurable-example',
            template: __webpack_require__(/*! ./slider-configurable-example.html */ "./src/assets/angular-material-examples/slider-configurable/slider-configurable-example.html"),
            styles: [__webpack_require__(/*! ./slider-configurable-example.css */ "./src/assets/angular-material-examples/slider-configurable/slider-configurable-example.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        })
    ], SliderConfigurableExample);
    return SliderConfigurableExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/slider-formatting/slider-formatting-example.css":
/*!**********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slider-formatting/slider-formatting-example.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-slider {\n  width: 300px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slider-formatting/slider-formatting-example.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slider-formatting/slider-formatting-example.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  min=\"1\"\n  max=\"100000\"></mat-slider>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slider-formatting/slider-formatting-example.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slider-formatting/slider-formatting-example.ts ***!
  \*********************************************************************************************/
/*! exports provided: SliderFormattingExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderFormattingExample", function() { return SliderFormattingExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Slider with custom thumb label formatting.
 */
var SliderFormattingExample = /** @class */ (function () {
    function SliderFormattingExample() {
    }
    SliderFormattingExample.prototype.formatLabel = function (value) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    };
    SliderFormattingExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slider-formatting-example',
            template: __webpack_require__(/*! ./slider-formatting-example.html */ "./src/assets/angular-material-examples/slider-formatting/slider-formatting-example.html"),
            styles: [__webpack_require__(/*! ./slider-formatting-example.css */ "./src/assets/angular-material-examples/slider-formatting/slider-formatting-example.css")],
        })
    ], SliderFormattingExample);
    return SliderFormattingExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/slider-overview/slider-overview-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slider-overview/slider-overview-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\nmat-slider {\n  width: 300px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slider-overview/slider-overview-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slider-overview/slider-overview-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-slider></mat-slider>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/slider-overview/slider-overview-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/slider-overview/slider-overview-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: SliderOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderOverviewExample", function() { return SliderOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic slider
 */
var SliderOverviewExample = /** @class */ (function () {
    function SliderOverviewExample() {
    }
    SliderOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slider-overview-example',
            template: __webpack_require__(/*! ./slider-overview-example.html */ "./src/assets/angular-material-examples/slider-overview/slider-overview-example.html"),
            styles: [__webpack_require__(/*! ./slider-overview-example.css */ "./src/assets/angular-material-examples/slider-overview/slider-overview-example.css")],
        })
    ], SliderOverviewExample);
    return SliderOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/snack-bar-component/snack-bar-component-example-snack.html":
/*!*********************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/snack-bar-component/snack-bar-component-example-snack.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"example-pizza-party\">\n  Pizza party!!! 🍕\n</span>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/snack-bar-component/snack-bar-component-example.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/snack-bar-component/snack-bar-component-example.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/snack-bar-component/snack-bar-component-example.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/snack-bar-component/snack-bar-component-example.ts ***!
  \*************************************************************************************************/
/*! exports provided: SnackBarComponentExample, PizzaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponentExample", function() { return SnackBarComponentExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyComponent", function() { return PizzaPartyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Snack-bar with a custom component
 */
var SnackBarComponentExample = /** @class */ (function () {
    function SnackBarComponentExample(snackBar) {
        this.snackBar = snackBar;
    }
    SnackBarComponentExample.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 500,
        });
    };
    SnackBarComponentExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'snack-bar-component-example',
            template: __webpack_require__(/*! ./snack-bar-component-example.html */ "./src/assets/angular-material-examples/snack-bar-component/snack-bar-component-example.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackBarComponentExample);
    return SnackBarComponentExample;
}());

var PizzaPartyComponent = /** @class */ (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'snack-bar-component-example-snack',
            template: __webpack_require__(/*! ./snack-bar-component-example-snack.html */ "./src/assets/angular-material-examples/snack-bar-component/snack-bar-component-example-snack.html"),
            styles: [".example-pizza-party { color: hotpink; }"],
        })
    ], PizzaPartyComponent);
    return PizzaPartyComponent;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/snack-bar-overview/snack-bar-overview-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/snack-bar-overview/snack-bar-overview-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/snack-bar-overview/snack-bar-overview-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/snack-bar-overview/snack-bar-overview-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/snack-bar-overview/snack-bar-overview-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/snack-bar-overview/snack-bar-overview-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: SnackBarOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarOverviewExample", function() { return SnackBarOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Basic snack-bar
 */
var SnackBarOverviewExample = /** @class */ (function () {
    function SnackBarOverviewExample(snackBar) {
        this.snackBar = snackBar;
    }
    SnackBarOverviewExample.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackBarOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'snack-bar-overview-example',
            template: __webpack_require__(/*! ./snack-bar-overview-example.html */ "./src/assets/angular-material-examples/snack-bar-overview/snack-bar-overview-example.html"),
            styles: [__webpack_require__(/*! ./snack-bar-overview-example.css */ "./src/assets/angular-material-examples/snack-bar-overview/snack-bar-overview-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackBarOverviewExample);
    return SnackBarOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/snack-bar-position/snack-bar-position-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/snack-bar-position/snack-bar-position-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select placeholder=\"Horizontal position\" [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-select placeholder=\"Vertical position\" [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/snack-bar-position/snack-bar-position-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/snack-bar-position/snack-bar-position-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: SnackBarPositionExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarPositionExample", function() { return SnackBarPositionExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Snack-bar with configurable position
 */
var SnackBarPositionExample = /** @class */ (function () {
    function SnackBarPositionExample(snackBar) {
        this.snackBar = snackBar;
        this.horizontalPosition = 'start';
        this.verticalPosition = 'bottom';
    }
    SnackBarPositionExample.prototype.openSnackBar = function () {
        this.snackBar.open('Canonball!!', 'End now', {
            duration: 500,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    };
    SnackBarPositionExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'snack-bar-position-example',
            template: __webpack_require__(/*! ./snack-bar-position-example.html */ "./src/assets/angular-material-examples/snack-bar-position/snack-bar-position-example.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackBarPositionExample);
    return SnackBarPositionExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/sort-overview/sort-overview-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sort-overview/sort-overview-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-sort-header-container {\n  align-items: center;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sort-overview/sort-overview-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sort-overview/sort-overview-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\">Fat (g)</th>\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\n    <th mat-sort-header=\"protein\">Protein (g)</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/sort-overview/sort-overview-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/sort-overview/sort-overview-example.ts ***!
  \*************************************************************************************/
/*! exports provided: SortOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortOverviewExample", function() { return SortOverviewExample; });
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

/**
 * @title Sorting overview
 */
var SortOverviewExample = /** @class */ (function () {
    function SortOverviewExample() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4' },
            { name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4' },
            { name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6' },
            { name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4' },
            { name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4' },
        ];
        this.sortedData = this.desserts.slice();
    }
    SortOverviewExample.prototype.sortData = function (sort) {
        var data = this.desserts.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(+a.calories, +b.calories, isAsc);
                case 'fat': return compare(+a.fat, +b.fat, isAsc);
                case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
                case 'protein': return compare(+a.protein, +b.protein, isAsc);
                default: return 0;
            }
        });
    };
    SortOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sort-overview-example',
            template: __webpack_require__(/*! ./sort-overview-example.html */ "./src/assets/angular-material-examples/sort-overview/sort-overview-example.html"),
            styles: [__webpack_require__(/*! ./sort-overview-example.css */ "./src/assets/angular-material-examples/sort-overview/sort-overview-example.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SortOverviewExample);
    return SortOverviewExample;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/assets/angular-material-examples/stepper-editable/stepper-editable-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/stepper-editable/stepper-editable-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/stepper-editable/stepper-editable-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/stepper-editable/stepper-editable-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"isEditable = !isEditable\">\n  {{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}\n</button>\n\n<mat-horizontal-stepper [linear]=\"true\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/stepper-editable/stepper-editable-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/stepper-editable/stepper-editable-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: StepperEditableExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperEditableExample", function() { return StepperEditableExample; });
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


/**
 * @title Stepper with editable steps
 */
var StepperEditableExample = /** @class */ (function () {
    function StepperEditableExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isEditable = false;
    }
    StepperEditableExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    StepperEditableExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stepper-editable-example',
            template: __webpack_require__(/*! ./stepper-editable-example.html */ "./src/assets/angular-material-examples/stepper-editable/stepper-editable-example.html"),
            styles: [__webpack_require__(/*! ./stepper-editable-example.css */ "./src/assets/angular-material-examples/stepper-editable/stepper-editable-example.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StepperEditableExample);
    return StepperEditableExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/stepper-optional/stepper-optional-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/stepper-optional/stepper-optional-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/stepper-optional/stepper-optional-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/stepper-optional/stepper-optional-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"isOptional = !isOptional\">\n  {{!isOptional ? 'Enable optional steps' : 'Disable optional steps'}}\n</button>\n\n<mat-horizontal-stepper [linear]=\"true\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/stepper-optional/stepper-optional-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/stepper-optional/stepper-optional-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: StepperOptionalExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperOptionalExample", function() { return StepperOptionalExample; });
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


/**
 * @title Stepper with optional steps
 */
var StepperOptionalExample = /** @class */ (function () {
    function StepperOptionalExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isOptional = false;
    }
    StepperOptionalExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ''
        });
    };
    StepperOptionalExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stepper-optional-example',
            template: __webpack_require__(/*! ./stepper-optional-example.html */ "./src/assets/angular-material-examples/stepper-optional/stepper-optional-example.html"),
            styles: [__webpack_require__(/*! ./stepper-optional-example.css */ "./src/assets/angular-material-examples/stepper-optional/stepper-optional-example.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StepperOptionalExample);
    return StepperOptionalExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/stepper-overview/stepper-overview-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/stepper-overview/stepper-overview-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/stepper-overview/stepper-overview-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/stepper-overview/stepper-overview-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button>\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/stepper-overview/stepper-overview-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/stepper-overview/stepper-overview-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: StepperOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperOverviewExample", function() { return StepperOverviewExample; });
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


/**
 * @title Stepper overview
 */
var StepperOverviewExample = /** @class */ (function () {
    function StepperOverviewExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    StepperOverviewExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    StepperOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'stepper-overview-example',
            template: __webpack_require__(/*! ./stepper-overview-example.html */ "./src/assets/angular-material-examples/stepper-overview/stepper-overview-example.html"),
            styles: [__webpack_require__(/*! ./stepper-overview-example.css */ "./src/assets/angular-material-examples/stepper-overview/stepper-overview-example.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StepperOverviewExample);
    return StepperOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/table-basic/table-basic-example.css":
/*!**********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-basic/table-basic-example.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-basic/table-basic-example.html":
/*!***********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-basic/table-basic-example.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-basic/table-basic-example.ts":
/*!*********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-basic/table-basic-example.ts ***!
  \*********************************************************************************/
/*! exports provided: TableBasicExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBasicExample", function() { return TableBasicExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic table
 */
var TableBasicExample = /** @class */ (function () {
    function TableBasicExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    TableBasicExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-basic-example',
            styles: [__webpack_require__(/*! ./table-basic-example.css */ "./src/assets/angular-material-examples/table-basic/table-basic-example.css")],
            template: __webpack_require__(/*! ./table-basic-example.html */ "./src/assets/angular-material-examples/table-basic/table-basic-example.html"),
        })
    ], TableBasicExample);
    return TableBasicExample;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/assets/angular-material-examples/table-filtering/table-filtering-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-filtering/table-filtering-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  max-height: 500px;\n  overflow: auto;\n}\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-filtering/table-filtering-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-filtering/table-filtering-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </div>\n\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-filtering/table-filtering-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-filtering/table-filtering-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: TableFilteringExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilteringExample", function() { return TableFilteringExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * @title Table with filtering
 */
var TableFilteringExample = /** @class */ (function () {
    function TableFilteringExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    TableFilteringExample.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    TableFilteringExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-filtering-example',
            styles: [__webpack_require__(/*! ./table-filtering-example.css */ "./src/assets/angular-material-examples/table-filtering/table-filtering-example.css")],
            template: __webpack_require__(/*! ./table-filtering-example.html */ "./src/assets/angular-material-examples/table-filtering/table-filtering-example.html"),
        })
    ], TableFilteringExample);
    return TableFilteringExample;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/assets/angular-material-examples/table-footer-row/table-footer-row-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-footer-row/table-footer-row-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-footer-row/table-footer-row-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-footer-row/table-footer-row-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <mat-table [dataSource]=\"transactions\">\n\n    <!-- Item Column -->\n    <ng-container matColumnDef=\"item\">\n      <mat-header-cell *matHeaderCellDef> Item </mat-header-cell>\n      <mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef></mat-footer-cell>\n    </ng-container>\n\n    <!-- Cost Column -->\n    <ng-container matColumnDef=\"cost\">\n      <mat-header-cell *matHeaderCellDef> Cost </mat-header-cell>\n      <mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> getTotalCost() </mat-footer-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    <mat-footer-row *matFooterRowDef=\"displayedColumns\"></mat-footer-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-footer-row/table-footer-row-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-footer-row/table-footer-row-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: TableFooterRowExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFooterRowExample", function() { return TableFooterRowExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Footer row table
 */
var TableFooterRowExample = /** @class */ (function () {
    function TableFooterRowExample() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    TableFooterRowExample.prototype.getTotalCost = function () {
        return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    TableFooterRowExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-footer-row-example',
            styles: [__webpack_require__(/*! ./table-footer-row-example.css */ "./src/assets/angular-material-examples/table-footer-row/table-footer-row-example.css")],
            template: __webpack_require__(/*! ./table-footer-row-example.html */ "./src/assets/angular-material-examples/table-footer-row/table-footer-row-example.html"),
        })
    ], TableFooterRowExample);
    return TableFooterRowExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/table-http/table-http-example.css":
/*!********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-http/table-http-example.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  position: relative;\n  max-height: 500px;\n  overflow: auto;\n}\n.example-header {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px;\n}\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px;\n}\n.mat-column-created {\n  max-width: 124px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-http/table-http-example.html":
/*!*********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-http/table-http-example.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n      GitHub's API rate limit has been reached. It will be reset in one minute.\n    </div>\n  </div>\n\n  <table mat-table #table [dataSource]=\"dataSource\" class=\"example-table\"\n             matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"asc\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Number Column -->\n    <ng-container matColumnDef=\"number\">\n      <th mat-header-cell *matHeaderCellDef>#</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.number }}</td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef>Title</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.title }}</td>\n    </ng-container>\n\n    <!-- State Column -->\n    <ng-container matColumnDef=\"state\">\n      <th mat-header-cell *matHeaderCellDef>State</th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.state }}</td>\n    </ng-container>\n\n    <!-- Created Column -->\n    <ng-container matColumnDef=\"created\">\n      <th mat-header-cell *matHeaderCellDef\n                       mat-sort-header\n                       disableClear=\"true\">\n        Created\n      </th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.created_at | date }}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-http/table-http-example.ts":
/*!*******************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-http/table-http-example.ts ***!
  \*******************************************************************************/
/*! exports provided: TableHttpExample, ExampleHttpDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHttpExample", function() { return TableHttpExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHttpDao", function() { return ExampleHttpDao; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @title Table retrieving data through HTTP
 */
var TableHttpExample = /** @class */ (function () {
    function TableHttpExample(http) {
        this.http = http;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    TableHttpExample.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.exampleDatabase.getRepoIssues(_this.sort.active, _this.sort.direction, _this.paginator.pageIndex);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            // Flip flag to show that loading has finished.
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            _this.resultsLength = data.total_count;
            return data.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            _this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        })).subscribe(function (data) { return _this.dataSource.data = data; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TableHttpExample.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], TableHttpExample.prototype, "sort", void 0);
    TableHttpExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'table-http-example',
            styles: [__webpack_require__(/*! ./table-http-example.css */ "./src/assets/angular-material-examples/table-http/table-http-example.css")],
            template: __webpack_require__(/*! ./table-http-example.html */ "./src/assets/angular-material-examples/table-http/table-http-example.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], TableHttpExample);
    return TableHttpExample;
}());

/** An example database that the data source uses to retrieve data for the table. */
var ExampleHttpDao = /** @class */ (function () {
    function ExampleHttpDao(http) {
        this.http = http;
    }
    ExampleHttpDao.prototype.getRepoIssues = function (sort, order, page) {
        var href = 'https://api.github.com/search/issues';
        var requestUrl = href + "?q=repo:angular/material2&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
        return this.http.get(requestUrl);
    };
    return ExampleHttpDao;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/table-native-only/table-native-only-example.css":
/*!**********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-native-only/table-native-only-example.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/assets/angular-material-examples/table-native-only/table-native-only-example.html":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-native-only/table-native-only-example.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"mat-table\">\n  <thead>\n    <tr class=\"mat-header-row\">\n      <th class=\"mat-header-cell\"> No. </th>\n      <th class=\"mat-header-cell\"> Name </th>\n      <th class=\"mat-header-cell\"> Weight </th>\n      <th class=\"mat-header-cell\"> Symbol </th>\n    </tr>\n    </thead>\n  <tbody>\n    <tr class=\"mat-row\" *ngFor=\"let element of elements\">\n      <td class=\"mat-cell\"> {{element.position}} </td>\n      <td class=\"mat-cell\"> {{element.name}} </td>\n      <td class=\"mat-cell\"> {{element.weight}} </td>\n      <td class=\"mat-cell\"> {{element.symbol}} </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-native-only/table-native-only-example.ts":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-native-only/table-native-only-example.ts ***!
  \*********************************************************************************************/
/*! exports provided: TableNativeOnlyExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableNativeOnlyExample", function() { return TableNativeOnlyExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Native `<table>` that only applies the Material styles
 */
var TableNativeOnlyExample = /** @class */ (function () {
    function TableNativeOnlyExample() {
        this.elements = [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        ];
    }
    TableNativeOnlyExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-native-only-example',
            styles: [__webpack_require__(/*! ./table-native-only-example.css */ "./src/assets/angular-material-examples/table-native-only/table-native-only-example.css")],
            template: __webpack_require__(/*! ./table-native-only-example.html */ "./src/assets/angular-material-examples/table-native-only/table-native-only-example.html"),
        })
    ], TableNativeOnlyExample);
    return TableNativeOnlyExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/table-overview/table-overview-example.css":
/*!****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-overview/table-overview-example.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  max-height: 500px;\n  overflow: auto;\n}\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-overview/table-overview-example.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-overview/table-overview-example.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-header\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-overview/table-overview-example.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-overview/table-overview-example.ts ***!
  \***************************************************************************************/
/*! exports provided: TableOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOverviewExample", function() { return TableOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Data table with sorting, pagination, and filtering.
 */
var TableOverviewExample = /** @class */ (function () {
    function TableOverviewExample() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        var users = [];
        for (var i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](users);
    }
    TableOverviewExample.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TableOverviewExample.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TableOverviewExample.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TableOverviewExample.prototype, "sort", void 0);
    TableOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-overview-example',
            styles: [__webpack_require__(/*! ./table-overview-example.css */ "./src/assets/angular-material-examples/table-overview/table-overview-example.css")],
            template: __webpack_require__(/*! ./table-overview-example.html */ "./src/assets/angular-material-examples/table-overview/table-overview-example.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TableOverviewExample);
    return TableOverviewExample;
}());

/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];


/***/ }),

/***/ "./src/assets/angular-material-examples/table-pagination/table-pagination-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-pagination/table-pagination-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  max-height: 500px;\n  overflow: auto;\n}\n\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-pagination/table-pagination-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-pagination/table-pagination-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n                 [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5, 10, 20]\"\n                 [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-pagination/table-pagination-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-pagination/table-pagination-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: TablePaginationExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePaginationExample", function() { return TablePaginationExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Table with pagination
 */
var TablePaginationExample = /** @class */ (function () {
    function TablePaginationExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    TablePaginationExample.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TablePaginationExample.prototype, "paginator", void 0);
    TablePaginationExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-pagination-example',
            styles: [__webpack_require__(/*! ./table-pagination-example.css */ "./src/assets/angular-material-examples/table-pagination/table-pagination-example.css")],
            template: __webpack_require__(/*! ./table-pagination-example.html */ "./src/assets/angular-material-examples/table-pagination/table-pagination-example.html"),
        })
    ], TablePaginationExample);
    return TablePaginationExample;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/assets/angular-material-examples/table-selection/table-selection-example.css":
/*!******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-selection/table-selection-example.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.mat-column-select {\n  overflow: visible;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-selection/table-selection-example.html":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-selection/table-selection-example.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <th mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                      (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n             (click)=\"selection.toggle(row)\">\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-selection/table-selection-example.ts":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-selection/table-selection-example.ts ***!
  \*****************************************************************************************/
/*! exports provided: TableSelectionExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSelectionExample", function() { return TableSelectionExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * @title Table with selection
 */
var TableSelectionExample = /** @class */ (function () {
    function TableSelectionExample() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    TableSelectionExample.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    TableSelectionExample.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    TableSelectionExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-selection-example',
            styles: [__webpack_require__(/*! ./table-selection-example.css */ "./src/assets/angular-material-examples/table-selection/table-selection-example.css")],
            template: __webpack_require__(/*! ./table-selection-example.html */ "./src/assets/angular-material-examples/table-selection/table-selection-example.html"),
        })
    ], TableSelectionExample);
    return TableSelectionExample;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/assets/angular-material-examples/table-sorting/table-sorting-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-sorting/table-sorting-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-header-cell.mat-sort-header-sorted {\n  color: black;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-sorting/table-sorting-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-sorting/table-sorting-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/table-sorting/table-sorting-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/table-sorting/table-sorting-example.ts ***!
  \*************************************************************************************/
/*! exports provided: TableSortingExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSortingExample", function() { return TableSortingExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @title Table with sorting
 */
var TableSortingExample = /** @class */ (function () {
    function TableSortingExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    TableSortingExample.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TableSortingExample.prototype, "sort", void 0);
    TableSortingExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'table-sorting-example',
            styles: [__webpack_require__(/*! ./table-sorting-example.css */ "./src/assets/angular-material-examples/table-sorting/table-sorting-example.css")],
            template: __webpack_require__(/*! ./table-sorting-example.html */ "./src/assets/angular-material-examples/table-sorting/table-sorting-example.html"),
        })
    ], TableSortingExample);
    return TableSortingExample;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


/***/ }),

/***/ "./src/assets/angular-material-examples/tabs-overview/tabs-overview-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tabs-overview/tabs-overview-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tabs-overview/tabs-overview-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tabs-overview/tabs-overview-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Tab 1\">Content 1</mat-tab>\n  <mat-tab label=\"Tab 2\">Content 2</mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tabs-overview/tabs-overview-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tabs-overview/tabs-overview-example.ts ***!
  \*************************************************************************************/
/*! exports provided: TabsOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsOverviewExample", function() { return TabsOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic tabs
 */
var TabsOverviewExample = /** @class */ (function () {
    function TabsOverviewExample() {
    }
    TabsOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tabs-overview-example',
            template: __webpack_require__(/*! ./tabs-overview-example.html */ "./src/assets/angular-material-examples/tabs-overview/tabs-overview-example.html"),
            styles: [__webpack_require__(/*! ./tabs-overview-example.css */ "./src/assets/angular-material-examples/tabs-overview/tabs-overview-example.css")],
        })
    ], TabsOverviewExample);
    return TabsOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/tabs-template-label/tabs-template-label-example.css":
/*!**************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tabs-template-label/tabs-template-label-example.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-tab-group {\n  border: 1px solid #e8e8e8;\n}\n\n.demo-tab-content {\n  padding: 16px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tabs-template-label/tabs-template-label-example.html":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tabs-template-label/tabs-template-label-example.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Tabs with text labels</h2>\n    <mat-tab-group class=\"demo-tab-group\">\n      <mat-tab label=\"Tab 1\">\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 2\">\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>  \n      </mat-tab>\n      <mat-tab label=\"Tab 3\" disabled>\n        No content  \n      </mat-tab>\n      <mat-tab label=\"Tab 4\">\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n          <br />\n          <br />\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>  \n      </mat-tab>\n      <mat-tab label=\"Tab 5\">\n        No content  \n      </mat-tab>\n      <mat-tab label=\"Tab 6\">\n        No content  \n      </mat-tab>\n    </mat-tab-group>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Tabs with icon labels</h2>\n    <mat-tab-group class=\"demo-tab-group\">\n      <mat-tab label=\"Tab 1\">\n        <ng-template mat-tab-label>\n          <mat-icon>security</mat-icon>\n        </ng-template>\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Tab 2\">\n        <ng-template mat-tab-label>\n          <mat-icon>attach_file</mat-icon>\n        </ng-template>\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>  \n      </mat-tab>\n      <mat-tab label=\"Tab 3\" disabled>\n        <ng-template mat-tab-label>\n          <mat-icon>block</mat-icon>\n        </ng-template>\n        No content  \n      </mat-tab>\n      <mat-tab label=\"Tab 4\">\n        <ng-template mat-tab-label>\n          <mat-icon>loop</mat-icon>\n        </ng-template>\n        <div class=\"demo-tab-content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n          <br />\n          <br />\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\n          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\n          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\n          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\n          orci enim rutrum enim, vel tempor sapien arcu a tellus.\n        </div>  \n      </mat-tab>\n      <mat-tab label=\"Tab 5\">\n        <ng-template mat-tab-label>\n          <mat-icon>build</mat-icon>\n        </ng-template>\n        No content  \n      </mat-tab>\n      <mat-tab label=\"Tab 6\">\n        <ng-template mat-tab-label>\n          <mat-icon>thumb_down</mat-icon>\n        </ng-template>\n        No content  \n      </mat-tab>\n    </mat-tab-group>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tabs-template-label/tabs-template-label-example.ts":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tabs-template-label/tabs-template-label-example.ts ***!
  \*************************************************************************************************/
/*! exports provided: TabsTemplateLabelExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsTemplateLabelExample", function() { return TabsTemplateLabelExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Complex Example
 */
var TabsTemplateLabelExample = /** @class */ (function () {
    function TabsTemplateLabelExample() {
    }
    TabsTemplateLabelExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tabs-template-label-example',
            template: __webpack_require__(/*! ./tabs-template-label-example.html */ "./src/assets/angular-material-examples/tabs-template-label/tabs-template-label-example.html"),
            styles: [__webpack_require__(/*! ./tabs-template-label-example.css */ "./src/assets/angular-material-examples/tabs-template-label/tabs-template-label-example.css")]
        })
    ], TabsTemplateLabelExample);
    return TabsTemplateLabelExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/text-field-autofill-directive/text-field-autofill-directive-example.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/text-field-autofill-directive/text-field-autofill-directive-example.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/text-field-autofill-directive/text-field-autofill-directive-example.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/text-field-autofill-directive/text-field-autofill-directive-example.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/text-field-autofill-directive/text-field-autofill-directive-example.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/text-field-autofill-directive/text-field-autofill-directive-example.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: TextFieldAutofillDirectiveExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldAutofillDirectiveExample", function() { return TextFieldAutofillDirectiveExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** @title Monitoring autofill state with cdkAutofill */
var TextFieldAutofillDirectiveExample = /** @class */ (function () {
    function TextFieldAutofillDirectiveExample() {
    }
    TextFieldAutofillDirectiveExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'text-field-autofill-directive-example',
            template: __webpack_require__(/*! ./text-field-autofill-directive-example.html */ "./src/assets/angular-material-examples/text-field-autofill-directive/text-field-autofill-directive-example.html"),
            styles: [__webpack_require__(/*! ./text-field-autofill-directive-example.css */ "./src/assets/angular-material-examples/text-field-autofill-directive/text-field-autofill-directive-example.css")],
        })
    ], TextFieldAutofillDirectiveExample);
    return TextFieldAutofillDirectiveExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/text-field-autofill-monitor/text-field-autofill-monitor-example.css":
/*!******************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/text-field-autofill-monitor/text-field-autofill-monitor-example.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/text-field-autofill-monitor/text-field-autofill-monitor-example.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/text-field-autofill-monitor/text-field-autofill-monitor-example.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/text-field-autofill-monitor/text-field-autofill-monitor-example.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/text-field-autofill-monitor/text-field-autofill-monitor-example.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: TextFieldAutofillMonitorExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldAutofillMonitorExample", function() { return TextFieldAutofillMonitorExample; });
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** @title Monitoring autofill state with AutofillMonitor */
var TextFieldAutofillMonitorExample = /** @class */ (function () {
    function TextFieldAutofillMonitorExample(autofill) {
        this.autofill = autofill;
    }
    TextFieldAutofillMonitorExample.prototype.ngOnInit = function () {
        var _this = this;
        this.autofill.monitor(this.firstName.nativeElement)
            .subscribe(function (e) { return _this.firstNameAutofilled = e.isAutofilled; });
        this.autofill.monitor(this.lastName.nativeElement)
            .subscribe(function (e) { return _this.lastNameAutofilled = e.isAutofilled; });
    };
    TextFieldAutofillMonitorExample.prototype.ngOnDestroy = function () {
        this.autofill.stopMonitoring(this.firstName.nativeElement);
        this.autofill.stopMonitoring(this.lastName.nativeElement);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('first', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TextFieldAutofillMonitorExample.prototype, "firstName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('last', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TextFieldAutofillMonitorExample.prototype, "lastName", void 0);
    TextFieldAutofillMonitorExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'text-field-autofill-monitor-example',
            template: __webpack_require__(/*! ./text-field-autofill-monitor-example.html */ "./src/assets/angular-material-examples/text-field-autofill-monitor/text-field-autofill-monitor-example.html"),
            styles: [__webpack_require__(/*! ./text-field-autofill-monitor-example.css */ "./src/assets/angular-material-examples/text-field-autofill-monitor/text-field-autofill-monitor-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]])
    ], TextFieldAutofillMonitorExample);
    return TextFieldAutofillMonitorExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/text-field-autosize-textarea/text-field-autosize-textarea-example.css":
/*!********************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/text-field-autosize-textarea/text-field-autosize-textarea-example.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/text-field-autosize-textarea/text-field-autosize-textarea-example.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/text-field-autosize-textarea/text-field-autosize-textarea-example.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"2\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/text-field-autosize-textarea/text-field-autosize-textarea-example.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/text-field-autosize-textarea/text-field-autosize-textarea-example.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: TextFieldAutosizeTextareaExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldAutosizeTextareaExample", function() { return TextFieldAutosizeTextareaExample; });
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** @title Auto-resizing textarea */
var TextFieldAutosizeTextareaExample = /** @class */ (function () {
    function TextFieldAutosizeTextareaExample(ngZone) {
        this.ngZone = ngZone;
    }
    TextFieldAutosizeTextareaExample.prototype.triggerResize = function () {
        var _this = this;
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(function () { return _this.autosize.resizeToFitContent(true); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autosize'),
        __metadata("design:type", _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"])
    ], TextFieldAutosizeTextareaExample.prototype, "autosize", void 0);
    TextFieldAutosizeTextareaExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'text-field-autosize-textarea-example',
            template: __webpack_require__(/*! ./text-field-autosize-textarea-example.html */ "./src/assets/angular-material-examples/text-field-autosize-textarea/text-field-autosize-textarea-example.html"),
            styles: [__webpack_require__(/*! ./text-field-autosize-textarea-example.css */ "./src/assets/angular-material-examples/text-field-autosize-textarea/text-field-autosize-textarea-example.css")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], TextFieldAutosizeTextareaExample);
    return TextFieldAutosizeTextareaExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/toolbar-multirow/toolbar-multirow-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/toolbar-multirow/toolbar-multirow-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/toolbar-multirow/toolbar-multirow-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/toolbar-multirow/toolbar-multirow-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/toolbar-multirow/toolbar-multirow-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/toolbar-multirow/toolbar-multirow-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: ToolbarMultirowExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarMultirowExample", function() { return ToolbarMultirowExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Multi-row toolbar
 */
var ToolbarMultirowExample = /** @class */ (function () {
    function ToolbarMultirowExample() {
    }
    ToolbarMultirowExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toolbar-multirow-example',
            template: __webpack_require__(/*! ./toolbar-multirow-example.html */ "./src/assets/angular-material-examples/toolbar-multirow/toolbar-multirow-example.html"),
            styles: [__webpack_require__(/*! ./toolbar-multirow-example.css */ "./src/assets/angular-material-examples/toolbar-multirow/toolbar-multirow-example.css")],
        })
    ], ToolbarMultirowExample);
    return ToolbarMultirowExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/toolbar-overview/toolbar-overview-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/toolbar-overview/toolbar-overview-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/toolbar-overview/toolbar-overview-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/toolbar-overview/toolbar-overview-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>My App</mat-toolbar>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/toolbar-overview/toolbar-overview-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/toolbar-overview/toolbar-overview-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: ToolbarOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarOverviewExample", function() { return ToolbarOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic toolbar
 */
var ToolbarOverviewExample = /** @class */ (function () {
    function ToolbarOverviewExample() {
    }
    ToolbarOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toolbar-overview-example',
            template: __webpack_require__(/*! ./toolbar-overview-example.html */ "./src/assets/angular-material-examples/toolbar-overview/toolbar-overview-example.html"),
            styles: [__webpack_require__(/*! ./toolbar-overview-example.css */ "./src/assets/angular-material-examples/toolbar-overview/toolbar-overview-example.css")],
        })
    ], ToolbarOverviewExample);
    return ToolbarOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-delay/tooltip-delay-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-delay/tooltip-delay-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 8px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-delay/tooltip-delay-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-delay/tooltip-delay-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button matTooltip=\"Tooltip!\" matTooltipShowDelay=\"1000\">\n  My tooltip waits one second to show\n</button>\n\n<button mat-raised-button matTooltip=\"Tooltip!\" matTooltipHideDelay=\"2000\">\n  My tooltip waits two seconds to hide\n</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-delay/tooltip-delay-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-delay/tooltip-delay-example.ts ***!
  \*************************************************************************************/
/*! exports provided: TooltipDelayExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDelayExample", function() { return TooltipDelayExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Tooltip with a show and hide delay
 */
var TooltipDelayExample = /** @class */ (function () {
    function TooltipDelayExample() {
    }
    TooltipDelayExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tooltip-delay-example',
            template: __webpack_require__(/*! ./tooltip-delay-example.html */ "./src/assets/angular-material-examples/tooltip-delay/tooltip-delay-example.html"),
            styles: [__webpack_require__(/*! ./tooltip-delay-example.css */ "./src/assets/angular-material-examples/tooltip-delay/tooltip-delay-example.css")],
        })
    ], TooltipDelayExample);
    return TooltipDelayExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-manual/tooltip-manual-example.css":
/*!****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-manual/tooltip-manual-example.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-manual/tooltip-manual-example.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-manual/tooltip-manual-example.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"tooltip.show()\"> Show tooltip </button>\n\n<span matTooltip=\"This is the tooltip message\" #tooltip=\"matTooltip\">\n  I have a tooltip\n</span>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-manual/tooltip-manual-example.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-manual/tooltip-manual-example.ts ***!
  \***************************************************************************************/
/*! exports provided: TooltipManualExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipManualExample", function() { return TooltipManualExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Tooltip that can be manually shown/hidden.
 */
var TooltipManualExample = /** @class */ (function () {
    function TooltipManualExample() {
    }
    TooltipManualExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tooltip-manual-example',
            template: __webpack_require__(/*! ./tooltip-manual-example.html */ "./src/assets/angular-material-examples/tooltip-manual/tooltip-manual-example.html"),
            styles: [__webpack_require__(/*! ./tooltip-manual-example.css */ "./src/assets/angular-material-examples/tooltip-manual/tooltip-manual-example.css")],
        })
    ], TooltipManualExample);
    return TooltipManualExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-modified-defaults/tooltip-modified-defaults-example.css":
/*!**************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-modified-defaults/tooltip-modified-defaults-example.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-modified-defaults/tooltip-modified-defaults-example.html":
/*!***************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-modified-defaults/tooltip-modified-defaults-example.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button matTooltip=\"By default, I delay\">\n  Button with delay-default tooltip\n</button>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-modified-defaults/tooltip-modified-defaults-example.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-modified-defaults/tooltip-modified-defaults-example.ts ***!
  \*************************************************************************************************************/
/*! exports provided: myCustomTooltipDefaults, TooltipModifiedDefaultsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myCustomTooltipDefaults", function() { return myCustomTooltipDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModifiedDefaultsExample", function() { return TooltipModifiedDefaultsExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/** Custom options the configure the tooltip's default show/hide delays. */
var myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
/**
 * @title Tooltip with a show and hide delay
 */
var TooltipModifiedDefaultsExample = /** @class */ (function () {
    function TooltipModifiedDefaultsExample() {
    }
    TooltipModifiedDefaultsExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tooltip-modified-defaults-example',
            template: __webpack_require__(/*! ./tooltip-modified-defaults-example.html */ "./src/assets/angular-material-examples/tooltip-modified-defaults/tooltip-modified-defaults-example.html"),
            styles: [__webpack_require__(/*! ./tooltip-modified-defaults-example.css */ "./src/assets/angular-material-examples/tooltip-modified-defaults/tooltip-modified-defaults-example.css")],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_TOOLTIP_DEFAULT_OPTIONS"], useValue: myCustomTooltipDefaults }
            ],
        })
    ], TooltipModifiedDefaultsExample);
    return TooltipModifiedDefaultsExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-overview/tooltip-overview-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-overview/tooltip-overview-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-overview/tooltip-overview-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-overview/tooltip-overview-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span matTooltip=\"Tooltip!\">I have a tooltip</span>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-overview/tooltip-overview-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-overview/tooltip-overview-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: TooltipOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipOverviewExample", function() { return TooltipOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Basic tooltip
 */
var TooltipOverviewExample = /** @class */ (function () {
    function TooltipOverviewExample() {
    }
    TooltipOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tooltip-overview-example',
            template: __webpack_require__(/*! ./tooltip-overview-example.html */ "./src/assets/angular-material-examples/tooltip-overview/tooltip-overview-example.html"),
            styles: [__webpack_require__(/*! ./tooltip-overview-example.css */ "./src/assets/angular-material-examples/tooltip-overview/tooltip-overview-example.css")],
        })
    ], TooltipOverviewExample);
    return TooltipOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-position/tooltip-position-example.css":
/*!********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-position/tooltip-position-example.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tooltip-host {\n  display: inline-flex;\n  align-items: center;\n  margin: 50px;\n}\n\n.example-select {\n  margin: 0 10px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-position/tooltip-position-example.html":
/*!*********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-position/tooltip-position-example.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-tooltip-host\" matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\">\n  <span>Show tooltip</span>\n  <mat-form-field>\n    <mat-select class=\"example-select\" [(ngModel)]=\"position\">\n      <mat-option value=\"before\">Before</mat-option>\n      <mat-option value=\"after\">After</mat-option>\n      <mat-option value=\"above\">Above</mat-option>\n      <mat-option value=\"below\">Below</mat-option>\n      <mat-option value=\"left\">Left</mat-option>\n      <mat-option value=\"right\">Right</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tooltip-position/tooltip-position-example.ts":
/*!*******************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tooltip-position/tooltip-position-example.ts ***!
  \*******************************************************************************************/
/*! exports provided: TooltipPositionExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipPositionExample", function() { return TooltipPositionExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @title Tooltip with custom position
 */
var TooltipPositionExample = /** @class */ (function () {
    function TooltipPositionExample() {
        this.position = 'before';
    }
    TooltipPositionExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tooltip-position-example',
            template: __webpack_require__(/*! ./tooltip-position-example.html */ "./src/assets/angular-material-examples/tooltip-position/tooltip-position-example.html"),
            styles: [__webpack_require__(/*! ./tooltip-position-example.css */ "./src/assets/angular-material-examples/tooltip-position/tooltip-position-example.css")],
        })
    ], TooltipPositionExample);
    return TooltipPositionExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/tree-checklist/tree-checklist-example.css":
/*!****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-checklist/tree-checklist-example.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/assets/angular-material-examples/tree-checklist/tree-checklist-example.html":
/*!*****************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-checklist/tree-checklist-example.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"checklistSelection.toggle(node);\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field>\n      <input matInput #itemValue placeholder=\"New item...\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tree-checklist/tree-checklist-example.ts":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-checklist/tree-checklist-example.ts ***!
  \***************************************************************************************/
/*! exports provided: TodoItemNode, TodoItemFlatNode, ChecklistDatabase, TreeChecklistExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function() { return ChecklistDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeChecklistExample", function() { return TreeChecklistExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Node for to-do item
 */
var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());

/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());

/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {
    'Reminders': [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Application to Angular'
    ],
    'Groceries': {
        'Organic eggs': null,
        'Protein Powder': null,
        'Almond Meal flour': null,
        'Fruits': {
            'Apple': null,
            'Orange': null,
            'Berries': ['Blueberry', 'Raspberry']
        }
    }
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase.prototype.initialize = function () {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        var data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    ChecklistDatabase.prototype.buildFileTree = function (value, level) {
        var data = [];
        for (var k in value) {
            var v = value[k];
            var node = new TodoItemNode();
            node.item = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.item = v;
            }
            data.push(node);
        }
        return data;
    };
    /** Add an item to to-do list */
    ChecklistDatabase.prototype.insertItem = function (parent, name) {
        var child = { item: name };
        if (parent.children) {
            parent.children.push(child);
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChecklistDatabase);
    return ChecklistDatabase;
}());

/**
 * @title Tree with checkboxes
 */
var TreeChecklistExample = /** @class */ (function () {
    function TreeChecklistExample(database) {
        var _this = this;
        this.database = database;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true /* multiple */);
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(node.children);
        };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var flatNode = _this.nestedNodeMap.has(node) && _this.nestedNodeMap.get(node).item === node.item
                ? _this.nestedNodeMap.get(node)
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    /** Whether all the descendants of the node are selected */
    TreeChecklistExample.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    TreeChecklistExample.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    TreeChecklistExample.prototype.todoItemSelectionToggle = function (node) {
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
        var _a, _b;
    };
    /** Select the category so we can insert the new item. */
    TreeChecklistExample.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    TreeChecklistExample.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    TreeChecklistExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tree-checklist-example',
            template: __webpack_require__(/*! ./tree-checklist-example.html */ "./src/assets/angular-material-examples/tree-checklist/tree-checklist-example.html"),
            styles: [__webpack_require__(/*! ./tree-checklist-example.css */ "./src/assets/angular-material-examples/tree-checklist/tree-checklist-example.css")],
            providers: [ChecklistDatabase]
        }),
        __metadata("design:paramtypes", [ChecklistDatabase])
    ], TreeChecklistExample);
    return TreeChecklistExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/tree-dynamic/tree-dynamic-example.css":
/*!************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-dynamic/tree-dynamic-example.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tree-dynamic/tree-dynamic-example.html":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-dynamic/tree-dynamic-example.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n                      mode=\"indeterminate\"\n                      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tree-dynamic/tree-dynamic-example.ts":
/*!***********************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-dynamic/tree-dynamic-example.ts ***!
  \***********************************************************************************/
/*! exports provided: DynamicFlatNode, DynamicDatabase, DynamicDataSource, TreeDynamicExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function() { return DynamicFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDatabase", function() { return DynamicDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function() { return DynamicDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeDynamicExample", function() { return TreeDynamicExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/** Flat node with expandable and level information */
var DynamicFlatNode = /** @class */ (function () {
    function DynamicFlatNode(item, level, expandable, isLoading) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (isLoading === void 0) { isLoading = false; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
    return DynamicFlatNode;
}());

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
var DynamicDatabase = /** @class */ (function () {
    function DynamicDatabase() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    DynamicDatabase.prototype.initialData = function () {
        return this.rootLevelNodes.map(function (name) { return new DynamicFlatNode(name, 0, true); });
    };
    DynamicDatabase.prototype.getChildren = function (node) {
        return this.dataMap.get(node);
    };
    DynamicDatabase.prototype.isExpandable = function (node) {
        return this.dataMap.has(node);
    };
    return DynamicDatabase;
}());

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var DynamicDataSource = /** @class */ (function () {
    function DynamicDataSource(treeControl, database) {
        this.treeControl = treeControl;
        this.database = database;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(DynamicDataSource.prototype, "data", {
        get: function () { return this.dataChange.value; },
        set: function (value) {
            this.treeControl.dataNodes = value;
            this.dataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    DynamicDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this.treeControl.expansionModel.onChange.subscribe(function (change) {
            if (change.added ||
                change.removed) {
                _this.handleTreeControl(change);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.data; }));
    };
    /** Handle expand/collapse behaviors */
    DynamicDataSource.prototype.handleTreeControl = function (change) {
        var _this = this;
        if (change.added) {
            change.added.forEach(function (node) { return _this.toggleNode(node, true); });
        }
        if (change.removed) {
            change.removed.reverse().forEach(function (node) { return _this.toggleNode(node, false); });
        }
    };
    /**
     * Toggle the node, remove from display list
     */
    DynamicDataSource.prototype.toggleNode = function (node, expand) {
        var _this = this;
        var children = this.database.getChildren(node.item);
        var index = this.data.indexOf(node);
        if (!children || index < 0) {
            return;
        }
        node.isLoading = true;
        setTimeout(function () {
            if (expand) {
                var nodes = children.map(function (name) {
                    return new DynamicFlatNode(name, node.level + 1, _this.database.isExpandable(name));
                });
                (_a = _this.data).splice.apply(_a, [index + 1, 0].concat(nodes));
            }
            else {
                _this.data.splice(index + 1, children.length);
            }
            // notify the change
            _this.dataChange.next(_this.data);
            node.isLoading = false;
            var _a;
        }, 1000);
    };
    DynamicDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"],
            DynamicDatabase])
    ], DynamicDataSource);
    return DynamicDataSource;
}());

/**
 * @title Tree with dynamic data
 */
var TreeDynamicExample = /** @class */ (function () {
    function TreeDynamicExample(database) {
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
        this.dataSource.data = database.initialData();
    }
    TreeDynamicExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tree-dynamic-example',
            template: __webpack_require__(/*! ./tree-dynamic-example.html */ "./src/assets/angular-material-examples/tree-dynamic/tree-dynamic-example.html"),
            styles: [__webpack_require__(/*! ./tree-dynamic-example.css */ "./src/assets/angular-material-examples/tree-dynamic/tree-dynamic-example.css")],
            providers: [DynamicDatabase]
        }),
        __metadata("design:paramtypes", [DynamicDatabase])
    ], TreeDynamicExample);
    return TreeDynamicExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/tree-flat-overview/tree-flat-overview-example.css":
/*!************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-flat-overview/tree-flat-overview-example.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/assets/angular-material-examples/tree-flat-overview/tree-flat-overview-example.html":
/*!*************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-flat-overview/tree-flat-overview-example.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.filename}} : {{node.type}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.filename}} : {{node.type}}\n  </mat-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tree-flat-overview/tree-flat-overview-example.ts":
/*!***********************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-flat-overview/tree-flat-overview-example.ts ***!
  \***********************************************************************************************/
/*! exports provided: FileNode, FileFlatNode, FileDatabase, TreeFlatOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNode", function() { return FileNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFlatNode", function() { return FileFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDatabase", function() { return FileDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeFlatOverviewExample", function() { return TreeFlatOverviewExample; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
var FileNode = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());

/** Flat node with expandable and level information */
var FileFlatNode = /** @class */ (function () {
    function FileFlatNode() {
    }
    return FileFlatNode;
}());

/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
var TREE_DATA = "\n  {\n    \"Documents\": {\n      \"angular\": {\n        \"src\": {\n          \"core\": \"ts\",\n          \"compiler\": \"ts\"\n        }\n      },\n      \"material2\": {\n        \"src\": {\n          \"button\": \"ts\",\n          \"checkbox\": \"ts\",\n          \"input\": \"ts\"\n        }\n      }\n    },\n    \"Downloads\": {\n        \"Tutorial\": \"html\",\n        \"November\": \"pdf\",\n        \"October\": \"pdf\"\n    },\n    \"Pictures\": {\n        \"Sun\": \"png\",\n        \"Woods\": \"jpg\",\n        \"Photo Booth Library\": {\n          \"Contents\": \"dir\",\n          \"Pictures\": \"dir\"\n        }\n    },\n    \"Applications\": {\n        \"Chrome\": \"app\",\n        \"Calendar\": \"app\",\n        \"Webstorm\": \"app\"\n    }\n}";
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    FileDatabase.prototype.initialize = function () {
        // Parse the string to json object.
        var dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    FileDatabase.prototype.buildFileTree = function (value, level) {
        var data = [];
        for (var k in value) {
            var v = value[k];
            var node = new FileNode();
            node.filename = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.type = v;
            }
            data.push(node);
        }
        return data;
    };
    FileDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FileDatabase);
    return FileDatabase;
}());

/**
 * @title Tree with flat nodes
 */
var TreeFlatOverviewExample = /** @class */ (function () {
    function TreeFlatOverviewExample(database) {
        var _this = this;
        this.transformer = function (node, level) {
            var flatNode = new FileFlatNode();
            flatNode.filename = node.filename;
            flatNode.type = node.type;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            return flatNode;
        };
        this._getLevel = function (node) { return node.level; };
        this._isExpandable = function (node) { return node.expandable; };
        this._getChildren = function (node) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(node.children);
        };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["FlatTreeControl"](this._getLevel, this._isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    TreeFlatOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tree-flat-overview-example',
            template: __webpack_require__(/*! ./tree-flat-overview-example.html */ "./src/assets/angular-material-examples/tree-flat-overview/tree-flat-overview-example.html"),
            styles: [__webpack_require__(/*! ./tree-flat-overview-example.css */ "./src/assets/angular-material-examples/tree-flat-overview/tree-flat-overview-example.css")],
            providers: [FileDatabase]
        }),
        __metadata("design:paramtypes", [FileDatabase])
    ], TreeFlatOverviewExample);
    return TreeFlatOverviewExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/tree-loadmore/tree-loadmore-example.css":
/*!**************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-loadmore/tree-loadmore-example.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/assets/angular-material-examples/tree-loadmore/tree-loadmore-example.html":
/*!***************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-loadmore/tree-loadmore-example.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'toggle ' + node.filename\"\n            (click)=\"loadChildren(node)\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\">\n    <button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">\n      Load more...\n    </button>\n  </mat-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tree-loadmore/tree-loadmore-example.ts":
/*!*************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-loadmore/tree-loadmore-example.ts ***!
  \*************************************************************************************/
/*! exports provided: LoadmoreNode, LoadmoreFlatNode, LoadmoreDatabase, TreeLoadmoreExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadmoreNode", function() { return LoadmoreNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadmoreFlatNode", function() { return LoadmoreFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadmoreDatabase", function() { return LoadmoreDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeLoadmoreExample", function() { return TreeLoadmoreExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




var LOAD_MORE = 'LOAD_MORE';
/** Nested node */
var LoadmoreNode = /** @class */ (function () {
    function LoadmoreNode(item, hasChildren, loadMoreParentItem) {
        if (hasChildren === void 0) { hasChildren = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    Object.defineProperty(LoadmoreNode.prototype, "children", {
        get: function () {
            return this.childrenChange.value;
        },
        enumerable: true,
        configurable: true
    });
    return LoadmoreNode;
}());

/** Flat node with expandable and level information */
var LoadmoreFlatNode = /** @class */ (function () {
    function LoadmoreFlatNode(item, level, expandable, loadMoreParentItem) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
    return LoadmoreFlatNode;
}());

/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
var LoadmoreDatabase = /** @class */ (function () {
    function LoadmoreDatabase() {
        this.batchNumber = 5;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.nodeMap = new Map();
        /** The data */
        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    LoadmoreDatabase.prototype.initialize = function () {
        var _this = this;
        var data = this.rootLevelNodes.map(function (name) { return _this._generateNode(name); });
        this.dataChange.next(data);
    };
    /** Expand a node whose children are not loaded */
    LoadmoreDatabase.prototype.loadMore = function (item, onlyFirstTime) {
        var _this = this;
        if (onlyFirstTime === void 0) { onlyFirstTime = false; }
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        var parent = this.nodeMap.get(item);
        var children = this.dataMap.get(item);
        if (onlyFirstTime && parent.children.length > 0) {
            return;
        }
        var newChildrenNumber = parent.children.length + this.batchNumber;
        var nodes = children.slice(0, newChildrenNumber)
            .map(function (name) { return _this._generateNode(name); });
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    };
    LoadmoreDatabase.prototype._generateNode = function (item) {
        if (this.nodeMap.has(item)) {
            return this.nodeMap.get(item);
        }
        var result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    };
    LoadmoreDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoadmoreDatabase);
    return LoadmoreDatabase;
}());

/**
 * @title Tree with partially loaded data
 */
var TreeLoadmoreExample = /** @class */ (function () {
    function TreeLoadmoreExample(database) {
        var _this = this;
        this.database = database;
        this.nodeMap = new Map();
        this.getChildren = function (node) { return node.childrenChange; };
        this.transformer = function (node, level) {
            if (_this.nodeMap.has(node.item)) {
                return _this.nodeMap.get(node.item);
            }
            var newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            _this.nodeMap.set(node.item, newNode);
            return newNode;
        };
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.isLoadMore = function (_, _nodeData) { return _nodeData.item === LOAD_MORE; };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
        database.initialize();
    }
    /** Load more nodes from data source */
    TreeLoadmoreExample.prototype.loadMore = function (item) {
        this.database.loadMore(item);
    };
    TreeLoadmoreExample.prototype.loadChildren = function (node) {
        this.database.loadMore(node.item, true);
    };
    TreeLoadmoreExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tree-loadmore-example',
            template: __webpack_require__(/*! ./tree-loadmore-example.html */ "./src/assets/angular-material-examples/tree-loadmore/tree-loadmore-example.html"),
            styles: [__webpack_require__(/*! ./tree-loadmore-example.css */ "./src/assets/angular-material-examples/tree-loadmore/tree-loadmore-example.css")],
            providers: [LoadmoreDatabase]
        }),
        __metadata("design:paramtypes", [LoadmoreDatabase])
    ], TreeLoadmoreExample);
    return TreeLoadmoreExample;
}());



/***/ }),

/***/ "./src/assets/angular-material-examples/tree-nested-overview/tree-nested-overview-example.css":
/*!****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-nested-overview/tree-nested-overview-example.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tree-nested-overview/tree-nested-overview-example.html":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-nested-overview/tree-nested-overview-example.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\" class=\"example-tree\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n    <li class=\"mat-tree-node\">\n      <button mat-icon-button disabled></button>\n      {{node.filename}}:  {{node.type}}\n    </li>\n  </mat-tree-node>\n\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasNestedChild\">\n    <li>\n      <div class=\"mat-tree-node\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'toggle ' + node.filename\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        {{node.filename}}\n      </div>\n      <ul [class.example-tree-invisible]=\"!nestedTreeControl.isExpanded(node)\">\n        <ng-container matTreeNodeOutlet></ng-container>\n      </ul>\n    </li>\n  </mat-nested-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "./src/assets/angular-material-examples/tree-nested-overview/tree-nested-overview-example.ts":
/*!***************************************************************************************************!*\
  !*** ./src/assets/angular-material-examples/tree-nested-overview/tree-nested-overview-example.ts ***!
  \***************************************************************************************************/
/*! exports provided: FileNode, FileDatabase, TreeNestedOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNode", function() { return FileNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDatabase", function() { return FileDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNestedOverviewExample", function() { return TreeNestedOverviewExample; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
var FileNode = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());

/**
 * The Json tree data in string. The data could be parsed into Json object
 */
var TREE_DATA = "\n  {\n    \"Documents\": {\n      \"angular\": {\n        \"src\": {\n          \"core\": \"ts\",\n          \"compiler\": \"ts\"\n        }\n      },\n      \"material2\": {\n        \"src\": {\n          \"button\": \"ts\",\n          \"checkbox\": \"ts\",\n          \"input\": \"ts\"\n        }\n      }\n    },\n    \"Downloads\": {\n        \"Tutorial\": \"html\",\n        \"November\": \"pdf\",\n        \"October\": \"pdf\"\n    },\n    \"Pictures\": {\n        \"Sun\": \"png\",\n        \"Woods\": \"jpg\",\n        \"Photo Booth Library\": {\n          \"Contents\": \"dir\",\n          \"Pictures\": \"dir\"\n        }\n    },\n    \"Applications\": {\n        \"Chrome\": \"app\",\n        \"Calendar\": \"app\",\n        \"Webstorm\": \"app\"\n    }\n  }";
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase = /** @class */ (function () {
    function FileDatabase() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    FileDatabase.prototype.initialize = function () {
        // Parse the string to json object.
        var dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        var data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    FileDatabase.prototype.buildFileTree = function (value, level) {
        var data = [];
        for (var k in value) {
            var v = value[k];
            var node = new FileNode();
            node.filename = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.type = v;
            }
            data.push(node);
        }
        return data;
    };
    FileDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FileDatabase);
    return FileDatabase;
}());

/**
 * @title Tree with nested nodes
 */
var TreeNestedOverviewExample = /** @class */ (function () {
    function TreeNestedOverviewExample(database) {
        var _this = this;
        this._getChildren = function (node) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(node.children); };
        this.hasNestedChild = function (_, nodeData) { return !(nodeData.type); };
        this.nestedTreeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["NestedTreeControl"](this._getChildren);
        this.nestedDataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNestedDataSource"]();
        database.dataChange.subscribe(function (data) { return _this.nestedDataSource.data = data; });
    }
    TreeNestedOverviewExample = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tree-nested-overview-example',
            template: __webpack_require__(/*! ./tree-nested-overview-example.html */ "./src/assets/angular-material-examples/tree-nested-overview/tree-nested-overview-example.html"),
            styles: [__webpack_require__(/*! ./tree-nested-overview-example.css */ "./src/assets/angular-material-examples/tree-nested-overview/tree-nested-overview-example.css")],
            providers: [FileDatabase]
        }),
        __metadata("design:paramtypes", [FileDatabase])
    ], TreeNestedOverviewExample);
    return TreeNestedOverviewExample;
}());



/***/ })

}]);
//# sourceMappingURL=main-content-apps-apps-module~main-content-components-components-module.js.map