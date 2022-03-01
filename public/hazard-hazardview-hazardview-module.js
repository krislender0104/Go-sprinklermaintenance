(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hazard-hazardview-hazardview-module"],{

/***/ "./src/app/main/content/apps/hazard/hazardview/hazardview.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/main/content/apps/hazard/hazardview/hazardview.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\t\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"h1 mt-16\">Hazard Details</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n<div fxLayout=\"row\" >\r\n    <div style=\"width: 30%;\">\r\n    \t<form class=\"mat-elevation-z4 p-20 m-20\">\r\n\t\t\t<div fxLayout=\"column\">\r\n\t\t\t\t<h2>Site Id : {{sites[0].SiteId}}</h2>\r\n\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Sie Type\" value=\"{{sites[0].SiteType}}\">\r\n\t\t\t  \t</mat-form-field>\r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Site Use\" value=\"{{sites[0].SiteUse}}\">\r\n\t\t\t  \t</mat-form-field>\r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t  \t  \t<input matInput placeholder=\"Contact\" value=\"{{sites[0].Contact}}\">\r\n\t\t\t  \t</mat-form-field>\r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Company\" value=\"{{sites[0].Company}}\">\r\n\t\t\t  \t</mat-form-field>\r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t    <textarea matInput placeholder=\"Address\" value=\"{{sites[0].Address}}\" ></textarea>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"City\" value=\"{{sites[0].City}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"State\" value=\"{{sites[0].State}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Zip\" value=\"{{sites[0].ZIP}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Phone Number\" value=\"{{sites[0].PhoneNumber}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t    \t<input matInput placeholder=\"Email\" value=\"{{sites[0].Email}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t</div>\t\t\r\n\t\t\t<div class=\"form-hazard-creation-btn\">\r\n\t\t\t\t<button mat-raised-button >Update</button>\r\n\t\t\t</div>\r\n\t\t  </form>\r\n    </div>\r\n    <div fxLayout=\"column\" style=\"width: 70%;\">\r\n    \t<div class=\"mat-elevation-z4 p-20 m-20\">\r\n    \t\t<!-- <div fxLayout=\"row\" >    \t\t\t\r\n\t\t\t  \t<div class=\"form-hazard-creation-btn\" style=\"padding-right: 50px;float: right;\">\r\n\t\t\t\t\t<button mat-raised-button >Search</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-hazard-creation-btn\" style=\"padding-right: 50px;float: right;\">\r\n\t\t\t\t\t<button mat-raised-button >Send Notices</button>\r\n\t\t\t\t</div>\t\t\t\t\r\n    \t\t</div> -->\r\n    \t\t<div fxLayout=\"row\">\r\n    \t\t\t<mat-form-field class=\"example-full-width \" style=\"padding-right: 50px;\">\r\n\t\t\t\t    <input matInput placeholder=\"Category\" value=\"{{hazards[0].Category}}\">\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"padding-right: 50px;\">\r\n\t\t\t    \t<input matInput placeholder=\"Customer #\" value=\"{{hazards[0].Customer}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"padding-right: 50px;\">\r\n\t\t\t    \t<input matInput placeholder=\"SVC. Pnt. ID\" value=\"{{hazards[0].SvcPntId}}\">\r\n\t\t\t  \t</mat-form-field> \r\n\t\t\t</div>\r\n\t\t\t\t\t\r\n    \t</div>\r\n    \t<div class=\"mat-elevation-z4 p-20 m-20\">\r\n\t\t\t<mat-tab-group>\r\n\t\t\t  \t<mat-tab label=\"Hazard Info\">\r\n\t\t\t  \t\t<div fxLayout=\"row\" >\r\n\t\t\t\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Priority\" value=\"{{hazards[0].Priority}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Serv Class\" value=\"{{hazards[0].ServClass}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Protection\" value=\"{{hazards[0].Protection}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Test Monts\" value=\"{{hazards[0].TestMonts}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Seasonal\" value=\"{{hazards[0].Seasonal}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Heat Type\" value=\"{{hazards[0].HeatType}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Meter\" value=\"{{hazards[0].Meter}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Line Size\" value=\"{{hazards[0].LineSize}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Line status\" value=\"{{hazards[0].LineStatus}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Tap #\" value=\"{{hazards[0].Tap}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Link\" value=\"{{hazards[0].Link}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Device #\" value=\"{{hazards[0].Device}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-hazard-creation1\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t    \t<input matInput placeholder=\"Location\" value=\"{{hazards[0].Location}}\">\r\n\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t    \t<input matInput placeholder=\"Meter Location\" value=\"{{hazards[0].MeterLocation}}\">\r\n\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    <textarea matInput placeholder=\"Recommendation\" value=\"{{hazards[0].Recommendations}}\"></textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    <textarea matInput placeholder=\"Notes\" value=\"{{hazards[0].Notes}}\"></textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-hazard-creation-btn\">\r\n\t\t\t\t\t\t<button mat-raised-button class=\"sitebtn\" >Update</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t  \t</mat-tab>\r\n\t\t\t  \t<mat-tab label=\"Hazard Details\">\r\n\t\t\t  \t\t<div fxLayout=\"row\">\r\n\t\t\t\t  \t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-select placeholder=\"Device Status\" value=\"{{hazards[0].DeviceStatus}}\">\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'Due Install'\">Due Install</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'Due Repair'\">Due Repair</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'Inactive'\">Inactive</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'Installed'\">Installed</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'Internal Not Tested'\">Internal Not Tested</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'Not Installed'\">Not Installed</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'Removed'\">Removed</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'Replaced'\">Replaced</mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Serial #\" value=\"{{hazards[0].Serial}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Manufacturer\" value=\"{{hazards[0].Manufacturer}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Model\" value=\"{{hazards[0].Model}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t   <input matInput placeholder=\"Type\" value=\"{{hazards[0].Type}}\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Size\" value=\"{{hazards[0].Size}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<textarea matInput placeholder=\"Location\" value=\"{{hazards[0].Location}}\"></textarea>\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<textarea matInput placeholder=\"Location 2\" value=\"{{hazards[0].Location2}}\"></textarea>\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t  \t  \t<input matInput placeholder=\"Lead Free\" value=\"{{hazards[0].LeadFree}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"Orient\" value=\"{{hazards[0].Orient}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t    <textarea matInput placeholder=\"Recommendation\" value=\"{{hazards[0].Recommendations}}\"></textarea>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t <textarea matInput placeholder=\"Notes\" value=\"{{hazards[0].Notes}}\"></textarea>\r\n\t\t\t\t\t\t  \t</mat-form-field> \r\n\t\t\t\t\t\t  \t<div class=\"form-hazard-creation-btn\">\r\n\t\t\t\t\t\t\t\t<button mat-raised-button class=\"m-40\">Update</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t</div>\r\n\t\t\t  \t</mat-tab>\r\n\t\t\t  \t<mat-tab label=\"Hazard Status\" [formGroup]=\"myGroup\">\r\n\t\t\t  \t\t<div fxLayout=\"row\">\r\n\t\t\t\t  \t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\r\n\t\t\t\t  \t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t  <input matInput [matDatepicker]=\"picker\" placeholder=\"Install Due date\" \r\n\t\t\t\t\t\t\t\t  formControlName=\"InstalledDueDate\" \r\n\t\t\t\t\t\t\t\t  name=\"InstalledDate\">\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t  <input matInput [matDatepicker]=\"picker11\" placeholder=\"Installed\"\r\n\t\t\t\t\t\t\t\t  formControlName=\"InstalledDate\" >\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker11\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker11></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\t\r\n\t\t\t\t\t\t\t<br><br><br>\t\t\t\t\t\r\n\t\t\t\t\t\t\t<h3>Notice</h3>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-select placeholder=\"1st Notice\" value=\"{{hazards[0].Notice1}}\">\r\n\t\t\t\t\t\t\t\t<mat-option [value]=\"'Sent'\" >Sent</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'None'\">None</mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-select placeholder=\"2nd Notice\" value=\"{{hazards[0].Notice2}}\">\r\n\t\t\t\t\t\t\t\t<mat-option [value]=\"'Sent'\" >Sent</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'None'\">None</mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-select placeholder=\"3rd Notice\" value=\"{{hazards[0].Notice3}}\">\r\n\t\t\t\t\t\t\t\t<mat-option [value]=\"'Sent'\" >Sent</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'None'\">None</mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-select placeholder=\"4th Notice\" value =\"{{hazards[0].Notice4}}\">\r\n\t\t\t\t\t\t\t\t<mat-option [value]=\"'Sent'\" >Sent</mat-option>\r\n\t\t\t\t\t\t\t    <mat-option [value]=\"'None'\">None</mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\">\r\n\t\t\t\t  \t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  \t<input matInput [matDatepicker]=\"picker12\" formControlName=\"RemoveDate\" placeholder=\"Remove / Replace date\">\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker12\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker12></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  \t<input matInput [matDatepicker]=\"picker13\" placeholder=\"Replaced \" formControlName=\"ReplaceDate\">\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker13\" ></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker13></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\t\r\n\t\t\t\t\t\t\t<br><br>\t\t\t\t\t\r\n\t\t\t\t\t\t\t<h3>Info</h3>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  \t<input matInput [matDatepicker]=\"picker14\" placeholder=\"Last Date \" formControlName=\"LastDate\">\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker14\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker14></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  \t<input matInput [matDatepicker]=\"picker15\" placeholder=\"Last Letter \" formControlName=\"LastLetterDate\">\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker15\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker15></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<div fxLayout=\"row\">\r\n\t\t\t\t\t\t\t\t<mat-checkbox style=\"padding-right: 30px;\" [checked]=\"true\">Link</mat-checkbox>\r\n\t\t\t\t\t\t\t\t<mat-checkbox>Link Code</mat-checkbox>\r\n\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t    \t<input matInput placeholder=\"UDH10\" value=\"{{hazards[0].UDH}}\">\r\n\t\t\t\t\t\t  \t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  \t<input matInput [matDatepicker]=\"picker16\" placeholder=\"Shutoff Date \" formControlName=\"ShutoffDate\"  >\r\n\t\t\t\t\t\t\t  \t<mat-datepicker-toggle matSuffix [for]=\"picker16\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t  \t<mat-datepicker #picker16></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-hazard-creation-btn\">\r\n\t\t\t\t\t\t<button mat-raised-button >Update</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t  \t</mat-tab>\r\n\t\t\t</mat-tab-group>\r\n\t\t</div>\t\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/hazard/hazardview/hazardview.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/content/apps/hazard/hazardview/hazardview.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.form-hazard-creation {\n  width: 100%;\n  padding: 50px; }\n\n.clm {\n  width: 30%;\n  padding: 20px; }\n\n.form-hazard-creation-btn {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/hazard/hazardview/hazardview.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/apps/hazard/hazardview/hazardview.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HazardviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HazardviewComponent", function() { return HazardviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _site_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../site/site.service */ "./src/app/main/content/apps/site/site.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HazardviewComponent = /** @class */ (function () {
    function HazardviewComponent(siteservice, route) {
        var _this = this;
        this.siteservice = siteservice;
        this.route = route;
        debugger;
        this.parmhazardId = route.snapshot.url[0].path;
        this.hazards = this.siteservice.hazards;
        // console.log(this.hazards);
        this.hazards = this.hazards.filter(function (element) { return element.HazardID == _this.parmhazardId; });
        this.sites = siteservice.sites;
        if (this.hazards.length > 0) {
            this.sites = this.sites.filter(function (element) { return element.SiteId == _this.hazards[0].SiteId; });
        }
        // console.log(this.sites);
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            InstalledDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            InstalledDueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            RemoveDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            ReplaceDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            LastDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            LastLetterDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            ShutoffDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
        });
    }
    HazardviewComponent.prototype.ngOnInit = function () {
    };
    HazardviewComponent.prototype.onSubmit = function () {
        // this.hazardview.CreateHazard('test')
    };
    HazardviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hazardview',
            template: __webpack_require__(/*! ./hazardview.component.html */ "./src/app/main/content/apps/hazard/hazardview/hazardview.component.html"),
            styles: [__webpack_require__(/*! ./hazardview.component.scss */ "./src/app/main/content/apps/hazard/hazardview/hazardview.component.scss")]
        }),
        __metadata("design:paramtypes", [_site_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HazardviewComponent);
    return HazardviewComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/hazard/hazardview/hazardview.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/apps/hazard/hazardview/hazardview.module.ts ***!
  \**************************************************************************/
/*! exports provided: HazardviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HazardviewModule", function() { return HazardviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hazardview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hazardview.component */ "./src/app/main/content/apps/hazard/hazardview/hazardview.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _site_site_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../site/site.service */ "./src/app/main/content/apps/site/site.service.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '**',
        component: _hazardview_component__WEBPACK_IMPORTED_MODULE_3__["HazardviewComponent"], resolve: {
            site: _site_site_service__WEBPACK_IMPORTED_MODULE_7__["SiteService"]
        }
    }
];
var HazardviewModule = /** @class */ (function () {
    function HazardviewModule() {
    }
    HazardviewModule.prototype.CreateHazard = function (test) {
        alert(test);
    };
    HazardviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            ],
            declarations: [_hazardview_component__WEBPACK_IMPORTED_MODULE_3__["HazardviewComponent"]]
        })
    ], HazardviewModule);
    return HazardviewModule;
}());



/***/ })

}]);
//# sourceMappingURL=hazard-hazardview-hazardview-module.js.map