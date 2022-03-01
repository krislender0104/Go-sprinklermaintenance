(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-testview-testview-module"],{

/***/ "./src/app/main/content/apps/test/testview/testview.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/test/testview/testview.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"h1 mt-16\">Test Details</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n<div fxLayout=\"row\" >\r\n    <div style=\"width: 30%;\">\r\n    \t<form class=\"mat-elevation-z4 p-20 m-20\">\r\n\t\t\t<div fxLayout=\"column\">\r\n\t\t\t\t<h2>Site Id : {{sites[0].SiteId}}</h2>\r\n\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Sie Type\" value=\"{{sites[0].SiteType}}\">\r\n\t\t\t  \t</mat-form-field>\r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Site Use\" value=\"{{sites[0].SiteUse}}\">\r\n\t\t\t  \t</mat-form-field>\r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t  \t  \t<input matInput placeholder=\"Contact\" value=\"{{sites[0].Contact}}\">\r\n\t\t\t  \t</mat-form-field>\r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Company\" value=\"{{sites[0].Company}}\">\r\n\t\t\t  \t</mat-form-field>\r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t    <textarea matInput placeholder=\"Address\" value=\"{{sites[0].Address}}\" ></textarea>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"City\" value=\"{{sites[0].City}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"State\" value=\"{{sites[0].State}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Zip\" value=\"{{sites[0].ZIP}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Phone Number\" value=\"{{sites[0].PhoneNumber}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Email\" value=\"{{sites[0].Email}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t</div>\t\t\r\n\t\t\t<div class=\"form-hazard-creation-btn\">\r\n\t\t\t\t<button mat-raised-button >Update</button>\r\n\t\t\t</div>\r\n\t\t  </form>\r\n    </div>\r\n    <div fxLayout=\"column\" style=\"width: 70%;\" >\r\n    \t<!-- <div class=\"mat-elevation-z4 p-20 m-20\">\r\n    \t\t<div fxLayout=\"row\" >    \t\t\t\r\n\t\t\t  \t<div class=\"form-hazard-creation-btn\" style=\"padding-right: 50px;float: right;\">\r\n\t\t\t\t\t<button mat-raised-button >Search</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-hazard-creation-btn\" style=\"padding-right: 50px;float: right;\">\r\n\t\t\t\t\t<button mat-raised-button >Send Notices</button>\r\n\t\t\t\t</div>\t\t\t\t\r\n    \t\t</div>\r\n\t\t\t\t\t\r\n    \t</div> -->\r\n    \t<div class=\"mat-elevation-z4 p-20 m-20\">\r\n    \t\t<div class=\"form-hazard-creation-btn\" style=\"padding-right: 50px;float: right;\">\r\n\t\t\t\t<button mat-raised-button >Re-Schedule</button>\r\n\t\t\t</div>\r\n\t\t\t<mat-tab-group>\r\n\t\t\t  \t<mat-tab label=\"Initial Test\">\r\n\t\t\t  \t\t<div fxLayout=\"row\" [formGroup]=\"testgrpview\" >\r\n\t\t\t\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  \t<input matInput [matDatepicker]=\"picker17\" placeholder=\"Test Date\" formControlName=\"TestDate\">\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker17\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker17></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Tester ID\" value=\"{{tests[0].TesterID}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Tester Name\" value=\"{{tests[0].TesterName}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Company\" value=\"{{tests[0].Company}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Test type\" value=\"{{tests[0].TestType}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Test Kit\" value=\"{{tests[0].TestKit}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Line PSI\" value=\"{{tests[0].LinePSI}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\r\n\t\t\t\t\t\t\t<mat-slide-toggle>Test Status</mat-slide-toggle>\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Flag\" value=\"{{tests[0].Flag}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"UDT5\" value=\"{{tests[0].UDT}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<div fxLayout=\"row\">\r\n\t\t\t\t\t\t  \t\t<mat-form-field class=\"example-full-width\" style=\"padding-right: 30px;\">\r\n\t\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Value 1\" value=\"{{tests[0].Value1}}\">\r\n\t\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-radio-group fxLayout=\"row\">\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"1\" style=\"padding-right: 30px;\">Close</mat-radio-button>\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"2\">Leak</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t\t<!-- <mat-radio-group [(ngModel)]=\"after\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t</mat-radio-group> -->\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div fxLayout=\"row\">\r\n\t\t\t\t\t\t  \t\t<mat-form-field class=\"example-full-width\" style=\"padding-right: 30px;\">\r\n\t\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Value 2\" value=\"{{tests[0].Value2}}\">\r\n\t\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-radio-group fxLayout=\"row\">\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"1\" style=\"padding-right: 30px;\">Close</mat-radio-button>\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"2\" >Leak</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  \t<div fxLayout=\"row\">\r\n\t\t\t\t\t\t  \t\t<mat-form-field class=\"example-full-width\" style=\"padding-right: 30px;\">\r\n\t\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Relief\" value=\"{{tests[0].Relief}}\">\r\n\t\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-radio-group fxLayout=\"row\">\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"1\" style=\"padding-right: 30px;\">Open</mat-radio-button>\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"2\">Not</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Buffer\" value=\"{{tests[0].Buffer}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t\r\n\t\t\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-hazard-creation1\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    <textarea matInput placeholder=\"Notes\" value=\"{{tests[0].Notes}}\"></textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-hazard-creation-btn\">\r\n\t\t\t\t\t\t<button mat-raised-button class=\"sitebtn\" >Update</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t  \t</mat-tab>\r\n\t\t\t  \t<mat-tab label=\"Final Test\">\r\n\t\t\t  \t\t<div fxLayout=\"row\" >\r\n\t\t\t\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  \t<input matInput [matDatepicker]=\"picker18\" placeholder=\"Test Date\">\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker18\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker18></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Tester ID\" value=\"{{tests[0].TesterID}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Tester Name\" value=\"{{tests[0].TesterName}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Company\" value=\"{{tests[0].Company}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Test type\" value=\"{{tests[0].TestType}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Test Kit\" value=\"{{tests[0].TestKit}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Line PSI\" value=\"{{tests[0].LinePSI}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\r\n\t\t\t\t\t\t\t<mat-slide-toggle>Test Status</mat-slide-toggle>\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Flag\" value=\"{{tests[0].Flag}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"UDT5\" value=\"{{tests[0].UDT}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<div fxLayout=\"row\">\r\n\t\t\t\t\t\t  \t\t<mat-form-field class=\"example-full-width\" style=\"padding-right: 30px;\">\r\n\t\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Value 1\" value=\"{{tests[0].Value1}}\">\r\n\t\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-radio-group fxLayout=\"row\">\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"1\" style=\"padding-right: 30px;\">Close</mat-radio-button>\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"2\">Leak</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div fxLayout=\"row\">\r\n\t\t\t\t\t\t  \t\t<mat-form-field class=\"example-full-width\" style=\"padding-right: 30px;\">\r\n\t\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Value 2\" value=\"{{tests[0].Value2}}\">\r\n\t\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-radio-group fxLayout=\"row\">\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"1\" style=\"padding-right: 30px;\">Close</mat-radio-button>\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"2\">Leak</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  \t<div fxLayout=\"row\">\r\n\t\t\t\t\t\t  \t\t<mat-form-field class=\"example-full-width\" style=\"padding-right: 30px;\">\r\n\t\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Relief\" value=\"{{tests[0].Relief}}\">\r\n\t\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-radio-group fxLayout=\"row\">\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"1\" style=\"padding-right: 30px;\">Open</mat-radio-button>\r\n\t\t\t\t\t\t\t\t  <mat-radio-button value=\"2\">Not</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Buffer\" value=\"{{tests[0].Buffer}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t\r\n\t\t\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-hazard-creation1\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    <textarea matInput placeholder=\"Notes\" value=\"{{tests[0].Notes}}\"></textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-hazard-creation-btn\">\r\n\t\t\t\t\t\t<button mat-raised-button class=\"sitebtn\" >Update</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t  \t</mat-tab>\r\n\t\t\t  \t<mat-tab label=\"Test Report\">\r\n\t\t\t  \t\t<div fxLayout=\"row\" [formGroup]=\"testgrpview\">\r\n\t\t\t\t  \t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\r\n\t\t\t\t  \t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  \t<input matInput [matDatepicker]=\"picker\" placeholder=\"Test due\"  formControlName=\"TestDueDate\" >\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  \t<input matInput [matDatepicker]=\"picker11\" placeholder=\"Scheduled Date\" formControlName=\"ScheduleDate\" >\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker11\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker11></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\t\r\n\t\t\t\t\t\t\t<br><br><br>\t\t\t\t\t\r\n\t\t\t\t\t\t\t<h3>Notice</h3>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-select placeholder=\"1st Notice\" value=\"{{tests[0].Notice1}}\">\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'Sent'\" >Sent</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'None'\">None</mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-select placeholder=\"2nd Notice\" value=\"{{tests[0].Notice2}}\">\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"'Sent'\" >Sent</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'None'\">None</mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-select placeholder=\"3rd Notice\" value=\"{{tests[0].Notice3}}\">\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'Sent'\" >Sent</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'None'\">None</mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-select placeholder=\"4th Notice\" value=\"{{tests[0].Notice4}}\">\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"'Sent'\" >Sent</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'None'\">None</mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-hazard-creation-btn\">\r\n\t\t\t\t\t\t<button mat-raised-button >Update</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t  \t</mat-tab>\r\n\t\t\t</mat-tab-group>\r\n\t\t</div>\t\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/test/testview/testview.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/test/testview/testview.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.form-hazard-creation {\n  width: 100%;\n  padding: 50px; }\n\n.clm {\n  width: 30%;\n  padding: 20px; }\n\n.form-hazard-creation-btn {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/test/testview/testview.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/apps/test/testview/testview.component.ts ***!
  \***********************************************************************/
/*! exports provided: TestviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestviewComponent", function() { return TestviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _site_site_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../site/site.service */ "./src/app/main/content/apps/site/site.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestviewComponent = /** @class */ (function () {
    function TestviewComponent(siteservice, route) {
        var _this = this;
        this.siteservice = siteservice;
        this.route = route;
        this.parmhazardId = route.snapshot.url[0].path;
        this.tests = this.siteservice.tests;
        this.tests = this.tests.filter(function (element) { return element.TestID == _this.parmhazardId; });
        this.sites = siteservice.sites;
        if (this.tests.length > 0) {
            this.sites = this.sites.filter(function (element) { return element.SiteId == _this.tests[0].SiteId; });
        }
        this.testgrpview = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            TestDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            TestDueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            ScheduleDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
        });
        this.after = "1";
    }
    TestviewComponent.prototype.ngOnInit = function () {
    };
    TestviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testview',
            template: __webpack_require__(/*! ./testview.component.html */ "./src/app/main/content/apps/test/testview/testview.component.html"),
            styles: [__webpack_require__(/*! ./testview.component.scss */ "./src/app/main/content/apps/test/testview/testview.component.scss")]
        }),
        __metadata("design:paramtypes", [_site_site_service__WEBPACK_IMPORTED_MODULE_2__["SiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TestviewComponent);
    return TestviewComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/test/testview/testview.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/content/apps/test/testview/testview.module.ts ***!
  \********************************************************************/
/*! exports provided: TestviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestviewModule", function() { return TestviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _testview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testview.component */ "./src/app/main/content/apps/test/testview/testview.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _site_site_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../site/site.service */ "./src/app/main/content/apps/site/site.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '**',
        component: _testview_component__WEBPACK_IMPORTED_MODULE_3__["TestviewComponent"],
        resolve: {
            site: _site_site_service__WEBPACK_IMPORTED_MODULE_11__["SiteService"],
        }
    }
];
var TestviewModule = /** @class */ (function () {
    function TestviewModule() {
    }
    TestviewModule = __decorate([
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
            declarations: [_testview_component__WEBPACK_IMPORTED_MODULE_3__["TestviewComponent"]]
        })
    ], TestviewModule);
    return TestviewModule;
}());



/***/ })

}]);
//# sourceMappingURL=test-testview-testview-module.js.map