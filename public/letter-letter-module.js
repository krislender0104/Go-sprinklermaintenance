(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["letter-letter-module"],{

/***/ "./src/app/main/content/apps/letter/letter.component.html":
/*!****************************************************************!*\
  !*** ./src/app/main/content/apps/letter/letter.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\" class=\"example-tree\">\r\n        <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\r\n          <li class=\"mat-tree-node\">\r\n            <button mat-icon-button disabled></button>\r\n            {{node.filename}}:  {{node.type}}\r\n          </li>\r\n        </mat-tree-node>\r\n      \r\n        <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasNestedChild\">\r\n          <li>\r\n            <div class=\"mat-tree-node\">\r\n              <button mat-icon-button matTreeNodeToggle\r\n                      [attr.aria-label]=\"'toggle ' + node.filename\">\r\n                <mat-icon class=\"mat-icon-rtl-mirror\">\r\n                  {{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n                </mat-icon>\r\n              </button>\r\n              {{node.filename}}\r\n            </div>\r\n            <ul [class.example-tree-invisible]=\"!nestedTreeControl.isExpanded(node)\">\r\n              <ng-container matTreeNodeOutlet></ng-container>\r\n            </ul>\r\n          </li>\r\n        </mat-nested-tree-node>\r\n      </mat-tree>\r\n       \r\n      \r\n      <!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n          Use of this source code is governed by an MIT-style license that\r\n          can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/main/content/apps/letter/letter.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/main/content/apps/letter/letter.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-invisible {\n  display: none; }\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/letter/letter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/content/apps/letter/letter.component.ts ***!
  \**************************************************************/
/*! exports provided: FileNode, FileDatabase, LetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNode", function() { return FileNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDatabase", function() { return FileDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterComponent", function() { return LetterComponent; });
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
var TREE_DATA = "{\n    \"Site 1\": {\n      \"Hazard 1\": {\n        \"Tests\": {\n          \"Test 1\": \"Test\",\n          \"Test 2\": \"Test\"\n        }\n      },\n      \"Hazard 2\": {\n        \"Tests\": {\n          \"Test 1\": \"Test\",\n          \"Test 2\": \"Test\"\n        }\n      }\n    },\n    \"Site 2\": {\n      \"Hazard 1\": {\n        \"Tests\": {\n          \"Test 1\": \"Test\",\n          \"Test 2\": \"Test\"\n        }\n      }\n    }\n   \n  }";
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

var LetterComponent = /** @class */ (function () {
    function LetterComponent(database) {
        var _this = this;
        this._getChildren = function (node) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(node.children); };
        this.hasNestedChild = function (_, nodeData) { return !(nodeData.type); };
        this.nestedTreeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](this._getChildren);
        this.nestedDataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNestedDataSource"]();
        database.dataChange.subscribe(function (data) { return _this.nestedDataSource.data = data; });
    }
    LetterComponent.prototype.ngOnInit = function () {
    };
    LetterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-letter',
            template: __webpack_require__(/*! ./letter.component.html */ "./src/app/main/content/apps/letter/letter.component.html"),
            styles: [__webpack_require__(/*! ./letter.component.scss */ "./src/app/main/content/apps/letter/letter.component.scss")],
            providers: [FileDatabase]
        }),
        __metadata("design:paramtypes", [FileDatabase])
    ], LetterComponent);
    return LetterComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/letter/letter.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/content/apps/letter/letter.module.ts ***!
  \***********************************************************/
/*! exports provided: LetterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterModule", function() { return LetterModule; });
/* harmony import */ var _letter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./letter.component */ "./src/app/main/content/apps/letter/letter.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '**',
        component: _letter_component__WEBPACK_IMPORTED_MODULE_0__["LetterComponent"],
    }
];
var LetterModule = /** @class */ (function () {
    function LetterModule() {
    }
    LetterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
            ],
            declarations: [_letter_component__WEBPACK_IMPORTED_MODULE_0__["LetterComponent"]]
        })
    ], LetterModule);
    return LetterModule;
}());



/***/ })

}]);
//# sourceMappingURL=letter-letter-module.js.map