(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["file-manager-file-manager-module"],{

/***/ "./src/app/main/content/apps/file-manager/file-list/file-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-list/file-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\" *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\n\n    <!-- Type Column -->\n    <ng-container cdkColumnDef=\"icon\">\n        <mat-header-cell *cdkHeaderCellDef fxFlex=\"64px\"></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxFlex=\"64px\">\n            <mat-icon class=\"type-icon\" [ngClass]=\"row.type\"></mat-icon>\n        </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n        <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\"> {{row.name}}</mat-cell>\n    </ng-container>\n\n    <!-- Type Column -->\n    <ng-container cdkColumnDef=\"type\">\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Type</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-md> {{row.type}}</mat-cell>\n    </ng-container>\n\n    <!-- Owner Column -->\n    <ng-container cdkColumnDef=\"owner\">\n        <mat-header-cell *cdkHeaderCellDef fxHide.xs>Owner</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide.xs> {{row.owner}}</mat-cell>\n    </ng-container>\n\n    <!-- Size Column -->\n    <ng-container cdkColumnDef=\"size\">\n        <mat-header-cell *cdkHeaderCellDef fxHide.xs>Size</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide.xs>{{row.size === '' ? '-': row.size}}</mat-cell>\n    </ng-container>\n\n    <!-- Modified Column -->\n    <ng-container cdkColumnDef=\"modified\">\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Modified</mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-md>{{row.modified}}</mat-cell>\n    </ng-container>\n\n    <!-- Detail Button Column -->\n    <ng-container cdkColumnDef=\"detail-button\">\n        <mat-header-cell *cdkHeaderCellDef fxFlex=\"48px\" fxHide.gt-md></mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\" fxFlex=\"48px\" fxHide.gt-md>\n            <button mat-icon-button class=\"sidenav-toggle\"\n                    fuseMatSidenavToggler=\"file-manager-right-sidenav\">\n                <mat-icon class=\"secondary-text\">info</mat-icon>\n            </button>\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"\n             (click)=\"onSelect(row)\"\n             [ngClass]=\"{'mat-light-blue-50-bg':row == selected}\"\n             matRipple\n             [@animate]=\"{value:'*',params:{y:'100%'}}\"\n    >\n    </mat-row>\n</mat-table>\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-list/file-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-list/file-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  width: 100%; }\n:host .mat-table {\n    background: transparent;\n    box-shadow: none; }\n:host .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      min-height: 64px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-list/file-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-list/file-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FuseFileManagerFileListComponent, FilesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseFileManagerFileListComponent", function() { return FuseFileManagerFileListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDataSource", function() { return FilesDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../file-manager.service */ "./src/app/main/content/apps/file-manager/file-manager.service.ts");
/* harmony import */ var _fuse_animations_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations/index */ "./src/@fuse/animations/index.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseFileManagerFileListComponent = /** @class */ (function () {
    function FuseFileManagerFileListComponent(fileManagerService) {
        var _this = this;
        this.fileManagerService = fileManagerService;
        this.displayedColumns = ['icon', 'name', 'type', 'owner', 'size', 'modified', 'detail-button'];
        this.fileManagerService.onFilesChanged.subscribe(function (files) {
            _this.files = files;
        });
        this.fileManagerService.onFileSelected.subscribe(function (selected) {
            _this.selected = selected;
        });
    }
    FuseFileManagerFileListComponent.prototype.ngOnInit = function () {
        this.dataSource = new FilesDataSource(this.fileManagerService);
    };
    FuseFileManagerFileListComponent.prototype.onSelect = function (selected) {
        this.fileManagerService.onFileSelected.next(selected);
    };
    FuseFileManagerFileListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-file-list',
            template: __webpack_require__(/*! ./file-list.component.html */ "./src/app/main/content/apps/file-manager/file-list/file-list.component.html"),
            styles: [__webpack_require__(/*! ./file-list.component.scss */ "./src/app/main/content/apps/file-manager/file-list/file-list.component.scss")],
            animations: _fuse_animations_index__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_file_manager_service__WEBPACK_IMPORTED_MODULE_2__["FileManagerService"]])
    ], FuseFileManagerFileListComponent);
    return FuseFileManagerFileListComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    function FilesDataSource(fileManagerService) {
        var _this = _super.call(this) || this;
        _this.fileManagerService = fileManagerService;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FilesDataSource.prototype.connect = function () {
        return this.fileManagerService.onFilesChanged;
    };
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-manager.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-manager.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"file-manager\" class=\"page-layout simple right-sidenav\" fusePerfectScrollbar>\n\n    <mat-sidenav-container>\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav left-sidenav\" position=\"start\" opened=\"false\" mode=\"over\"\n                     fuseMatSidenavHelper=\"file-manager-left-sidenav\">\n            <fuse-file-manager-main-sidenav></fuse-file-manager-main-sidenav>\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n        <!-- CENTER -->\n        <div class=\"center\" fxFlex>\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"space-between start\">\n\n                <!-- TOOLBAR -->\n                <div class=\"toolbar w-100-p\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n                    <div class=\"left-side\" fxLayout=\"row\">\n                        <button mat-icon-button class=\"sidenav-toggle\"\n                                fuseMatSidenavToggler=\"file-manager-left-sidenav\">\n                            <mat-icon>menu</mat-icon>\n                        </button>\n                    </div>\n\n                    <div class=\"right-side\" fxLayout=\"row\">\n                        <button mat-icon-button aria-label=\"Search\" matTooltip=\"Search\">\n                            <mat-icon>search</mat-icon>\n                        </button>\n                    </div>\n                </div>\n                <!-- / TOOLBAR -->\n\n                <!-- BREADCRUMB -->\n                <div class=\"breadcrumb text-truncate h1 pl-72\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                     *fuseIfOnDom [@animate]=\"{value:'*',params:{x:'50px'}}\">\n                    <div *ngFor=\"let path of pathArr; last  as isLast\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <span>{{path}}</span>\n                        <mat-icon *ngIf=\"!isLast\" class=\"separator\">chevron_right</mat-icon>\n                    </div>\n                </div>\n                <!-- / BREADCRUMB -->\n\n                <!-- ADD FILE BUTTON -->\n                <div class=\"file-uploader\">\n                    <input hidden type=\"file\" #fileInput/>\n                    <button mat-fab\n                            class=\"add-file-button mat-warn\"\n                            (click)=\"fileInput.click()\"\n                            aria-label=\"Add file\"\n                            *fuseIfOnDom [@animate]=\"{value:'*', params:{delay:'300ms',scale:'0.2'}}\">\n                        <mat-icon>add</mat-icon>\n                    </button>\n                </div>\n                <!-- / ADD FILE BUTTON -->\n\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div class=\"content mat-white-bg\" fusePerfectScrollbar>\n                <fuse-file-list></fuse-file-list>\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav right-sidenav \" position=\"end\" opened=\"true\" mode=\"side\"\n                     fuseMatSidenavHelper=\"file-manager-right-sidenav\" mat-is-locked-open=\"gt-md\">\n            <fuse-file-manager-details-sidenav></fuse-file-manager-details-sidenav>\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-manager.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-manager.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#file-manager mat-sidenav-container .sidenav {\n  width: 320px !important;\n  min-width: 320px !important;\n  max-width: 320px !important; }\n@media screen and (min-width: 1280px) {\n    #file-manager mat-sidenav-container .sidenav.right-sidenav {\n      z-index: 0; } }\n#file-manager mat-sidenav-container > .mat-sidenav-content,\n#file-manager mat-sidenav-container > .mat-drawer-content {\n  z-index: 1; }\n#file-manager mat-sidenav-container > .mat-sidenav-content .center .header,\n  #file-manager mat-sidenav-container > .mat-drawer-content .center .header {\n    position: relative;\n    height: 160px;\n    min-height: 160px;\n    max-height: 160px; }\n@media (max-width: 959px) {\n      #file-manager mat-sidenav-container > .mat-sidenav-content .center .header,\n      #file-manager mat-sidenav-container > .mat-drawer-content .center .header {\n        height: 120px;\n        min-height: 120px;\n        max-height: 120px; } }\n#file-manager mat-sidenav-container > .mat-sidenav-content .center .header .add-file-button,\n    #file-manager mat-sidenav-container > .mat-drawer-content .center .header .add-file-button {\n      position: absolute;\n      bottom: -28px;\n      left: 16px;\n      z-index: 999; }\n#file-manager .type-icon.folder:before {\n  content: 'folder';\n  color: #FFB300; }\n#file-manager .type-icon.document:before {\n  content: 'insert_drive_file';\n  color: #1565C0; }\n#file-manager .type-icon.spreadsheet:before {\n  content: 'insert_chart';\n  color: #4CAF50; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-manager.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-manager.component.ts ***!
  \**************************************************************************/
/*! exports provided: FuseFileManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseFileManagerComponent", function() { return FuseFileManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-manager.service */ "./src/app/main/content/apps/file-manager/file-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseFileManagerComponent = /** @class */ (function () {
    function FuseFileManagerComponent(fileManagerService) {
        this.fileManagerService = fileManagerService;
    }
    FuseFileManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileManagerService.onFileSelected.subscribe(function (selected) {
            _this.selected = selected;
            _this.pathArr = selected.location.split('>');
        });
    };
    FuseFileManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-file-manager',
            template: __webpack_require__(/*! ./file-manager.component.html */ "./src/app/main/content/apps/file-manager/file-manager.component.html"),
            styles: [__webpack_require__(/*! ./file-manager.component.scss */ "./src/app/main/content/apps/file-manager/file-manager.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_file_manager_service__WEBPACK_IMPORTED_MODULE_2__["FileManagerService"]])
    ], FuseFileManagerComponent);
    return FuseFileManagerComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-manager.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-manager.module.ts ***!
  \***********************************************************************/
/*! exports provided: FuseFileManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseFileManagerModule", function() { return FuseFileManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _file_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-manager.component */ "./src/app/main/content/apps/file-manager/file-manager.component.ts");
/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-manager.service */ "./src/app/main/content/apps/file-manager/file-manager.service.ts");
/* harmony import */ var _file_list_file_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-list/file-list.component */ "./src/app/main/content/apps/file-manager/file-list/file-list.component.ts");
/* harmony import */ var _sidenavs_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidenavs/main/main.component */ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.ts");
/* harmony import */ var _sidenavs_details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidenavs/details/details.component */ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '**',
        component: _file_manager_component__WEBPACK_IMPORTED_MODULE_5__["FuseFileManagerComponent"],
        children: [],
        resolve: {
            files: _file_manager_service__WEBPACK_IMPORTED_MODULE_6__["FileManagerService"]
        }
    }
];
var FuseFileManagerModule = /** @class */ (function () {
    function FuseFileManagerModule() {
    }
    FuseFileManagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _file_manager_component__WEBPACK_IMPORTED_MODULE_5__["FuseFileManagerComponent"],
                _file_list_file_list_component__WEBPACK_IMPORTED_MODULE_7__["FuseFileManagerFileListComponent"],
                _sidenavs_main_main_component__WEBPACK_IMPORTED_MODULE_8__["FuseFileManagerMainSidenavComponent"],
                _sidenavs_details_details_component__WEBPACK_IMPORTED_MODULE_9__["FuseFileManagerDetailsSidenavComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"]
            ],
            providers: [
                _file_manager_service__WEBPACK_IMPORTED_MODULE_6__["FileManagerService"]
            ]
        })
    ], FuseFileManagerModule);
    return FuseFileManagerModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-manager.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-manager.service.ts ***!
  \************************************************************************/
/*! exports provided: FileManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagerService", function() { return FileManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileManagerService = /** @class */ (function () {
    function FileManagerService(http) {
        this.http = http;
        this.onFilesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.onFileSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * The File Manager App Main Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    FileManagerService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getFiles()
            ]).then(function (_a) {
                var files = _a[0];
                resolve();
            }, reject);
        });
    };
    FileManagerService.prototype.getFiles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/file-manager')
                .subscribe(function (response) {
                _this.onFilesChanged.next(response);
                _this.onFileSelected.next(response[0]);
                resolve(response);
            }, reject);
        });
    };
    FileManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileManagerService);
    return FileManagerService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/details/details.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n\n    <div class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n\n        <button mat-icon-button matTooltip=\"Delete\">\n            <mat-icon>delete</mat-icon>\n        </button>\n\n        <button mat-icon-button class=\"\" aria-label=\"Download\" matTooltip=\"Download\">\n            <mat-icon>file_download</mat-icon>\n        </button>\n\n        <button mat-icon-button aria-label=\"More\" matTooltip=\"More\">\n            <mat-icon>more_vert</mat-icon>\n        </button>\n    </div>\n\n    <div>\n        <div class=\"title mb-8\">{{selected.name}}</div>\n        <div class=\"subtitle secondary-text\">\n            <span>Edited</span>\n            <span>: {{selected.modified}}</span>\n        </div>\n    </div>\n</div>\n<!-- / SIDENAV HEADER -->\n\n<!-- SIDENAV CONTENT -->\n<div class=\"content p-24 mat-white-bg\" fusePerfectScrollbar>\n\n    <div class=\"file-details\"\n         *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'200ms'}}\">\n\n        <div class=\"preview file-icon\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            <mat-icon class=\"type-icon s-48\" [ngClass]=\"selected.type\"></mat-icon>\n        </div>\n\n        <div class=\"offline-switch\">\n            <mat-slide-toggle ([ngModel])=\"selected.offline\" labelPosition=\"before\">Available Offline</mat-slide-toggle>\n        </div>\n\n        <div class=\"title\">Info</div>\n\n        <table>\n            <tr class=\"type\">\n                <th>Type</th>\n                <td>{{selected.type}}</td>\n            </tr>\n\n            <tr class=\"size\">\n                <th>Size</th>\n                <td>{{selected.size === '' ? '-': selected.size}}</td>\n            </tr>\n\n            <tr class=\"location\">\n                <th>Location</th>\n                <td>{{selected.location}}</td>\n            </tr>\n\n            <tr class=\"owner\">\n                <th>Owner</th>\n                <td>{{selected.owner}}</td>\n            </tr>\n\n            <tr class=\"modified\">\n                <th>Modified</th>\n                <td>{{selected.modified}}</td>\n            </tr>\n\n            <tr class=\"opened\">\n                <th>Opened</th>\n                <td>{{selected.opened}}</td>\n            </tr>\n\n            <tr class=\"created\">\n                <th>Created</th>\n                <td>{{selected.created}}</td>\n            </tr>\n        </table>\n    </div>\n\n</div>\n<!-- / SIDENAV CONTENT -->\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/details/details.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  height: 100%; }\n  :host > .header {\n    flex: 0 1 auto;\n    height: 160px;\n    min-height: 160px;\n    max-height: 160px; }\n  :host > .content {\n    flex: 1; }\n  :host > .content .file-details .preview {\n      height: 240px; }\n  :host > .content .file-details .offline-switch {\n      padding-bottom: 16px;\n      font-weight: 500; }\n  :host > .content .file-details .title {\n      padding: 16px 0; }\n  :host > .content .file-details table {\n      width: 100%;\n      text-align: left; }\n  :host > .content .file-details table tr th, :host > .content .file-details table tr td {\n        padding: 16px 0; }\n  :host > .content .file-details table tr.type {\n        text-transform: capitalize; }\n  :host > .content .file-details table tr.owner {\n        text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/details/details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FuseFileManagerDetailsSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseFileManagerDetailsSidenavComponent", function() { return FuseFileManagerDetailsSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations/index */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../file-manager.service */ "./src/app/main/content/apps/file-manager/file-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseFileManagerDetailsSidenavComponent = /** @class */ (function () {
    function FuseFileManagerDetailsSidenavComponent(fileManagerService) {
        this.fileManagerService = fileManagerService;
    }
    FuseFileManagerDetailsSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileManagerService.onFileSelected.subscribe(function (selected) {
            _this.selected = selected;
        });
    };
    FuseFileManagerDetailsSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-file-manager-details-sidenav',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.scss")],
            animations: _fuse_animations_index__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_file_manager_service__WEBPACK_IMPORTED_MODULE_2__["FileManagerService"]])
    ], FuseFileManagerDetailsSidenavComponent);
    return FuseFileManagerDetailsSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/main/main.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\n<div class=\"header p-24\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n\n    <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon mr-16\">folder</mat-icon>\n        <span class=\"logo-text h1\">File Manager</span>\n    </div>\n\n</div>\n<!-- / SIDENAV HEADER -->\n\n<!-- SIDENAV CONTENT -->\n<div class=\"content py-16\" fusePerfectScrollbar>\n\n    <div class=\"nav\">\n\n        <div class=\"nav-item\" aria-label=\"inbox\">\n            <a class=\"nav-link\" matRipple>\n                <mat-icon class=\"nav-link-icon\">folder</mat-icon>\n                <span class=\"title\">My Files</span>\n            </a>\n        </div>\n\n        <div class=\"nav-item\" aria-label=\"starred\">\n            <a class=\"nav-link\" matRipple>\n                <mat-icon class=\"nav-link-icon\">star</mat-icon>\n                <div class=\"title\">Starred</div>\n            </a>\n        </div>\n\n        <div class=\"nav-item\" aria-label=\"starred\">\n            <a class=\"nav-link\" matRipple>\n                <mat-icon class=\"nav-link-icon\">folder_shared</mat-icon>\n                <div class=\"title\">Sharred with me</div>\n            </a>\n        </div>\n\n        <div class=\"nav-item\" aria-label=\"starred\">\n            <a class=\"nav-link\" matRipple>\n                <mat-icon class=\"nav-link-icon\">access_time</mat-icon>\n                <div class=\"title\">Recent</div>\n            </a>\n        </div>\n\n        <div class=\"nav-item\" aria-label=\"starred\">\n            <a class=\"nav-link\" matRipple>\n                <mat-icon class=\"nav-link-icon\">not_interested</mat-icon>\n                <div class=\"title\">Offline</div>\n            </a>\n        </div>\n    </div>\n\n</div>\n<!-- / SIDENAV CONTENT -->\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/main/main.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  height: 100%; }\n  :host > .header {\n    flex: 0 1 auto;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/main/main.component.ts ***!
  \********************************************************************************/
/*! exports provided: FuseFileManagerMainSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseFileManagerMainSidenavComponent", function() { return FuseFileManagerMainSidenavComponent; });
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

var FuseFileManagerMainSidenavComponent = /** @class */ (function () {
    function FuseFileManagerMainSidenavComponent() {
    }
    FuseFileManagerMainSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-file-manager-main-sidenav',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseFileManagerMainSidenavComponent);
    return FuseFileManagerMainSidenavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=file-manager-file-manager-module.js.map