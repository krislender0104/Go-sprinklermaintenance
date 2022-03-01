(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["technical-technician-details-technician-details-module"],{

/***/ "./src/app/main/content/apps/technical/technician-details/technician-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technician-details/technician-details.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth\" fxLayout=\"column\" fusePerfectScrollbar>\n<!-- HEADER -->\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div class=\"h1 mt-16\">Technician Details Update</div>\n        </div>\n\t</div>\n\t<!-- {{technician.TechnicianID}} -->\n    <!-- / HEADER -->\n\t<div class=\"mat-elevation-z4 p-20 m-20\" [formGroup]=\"myGroup\" >\n\t\t<div fxLayout=\"row\" style=\"width: 100%\" >\n\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\" class=\"mat-elevation-z4 p-20 m-20\">\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"Status\" value=\"{{technician.Status}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-checkbox style=\"padding-top: 24px;margin-left: 5px;\" [checked]=\"true\" >Show on list</mat-checkbox>\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t    \t<input matInput placeholder=\"First Name\" value=\"{{technician.FirstName}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t  \t\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t\t  \t  \t<input matInput placeholder=\"Last Name\" value=\"{{technician.LastName}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t  \t\n\t\t\t\t\n\t\t\t  \t<div fxLayout=\"row\">\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Address1\" value=\"{{technician.Address1}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"Address2\" value=\"{{technician.Address2}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t  \t<div fxLayout=\"row\">\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t  \t  \t<input matInput placeholder=\"City\" value=\"{{technician.City}}\" >\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t    \t<input matInput placeholder=\"State\" value=\"{{technician.State}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"Zip\" value=\"{{technician.ZIP}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t  \t  \t<input matInput placeholder=\"Phone\" value=\"{{technician.Phone}}\" >\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Fax\" value=\"{{technician.Fax}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"Email\" value=\"{{technician.Email}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Cell\" value=\"{{technician.Cell}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"UDF1\" value=\"{{technician.UDF1}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\" style=\"margin-right: 10px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Fee\" value=\"{{technician.Fee}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field style=\"margin-right: 20px;\">\n\t\t\t\t\t  <mat-select placeholder=\"Fee Paid\">\n\t\t\t\t\t    <mat-option *ngFor=\"let food of foods\" [value]=\"\">\n\t\t\t\t\t     \n\t\t\t\t\t    </mat-option>\n\t\t\t\t\t  </mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Notes\" value=\"{{technician.Notes}}\">\n\t\t\t  \t</mat-form-field> \t\t\t  \t\t\n\t\t\t</div>\n\t\t\t<div fxLayout=\"column\" style=\"width: 100%;margin: 20px;\" class=\"mat-elevation-z4 p-20 m-20\">\n\t\t\t\t<h1>Insurance</h1>\n\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Agency\" value=\"{{technician.Agency}}\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Phone\" value=\"{{technician.InsurancePhone}}\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Carrier\" value=\"{{technician.Carrier}}\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Policy #\" value=\"{{technician.Policy}}\">\n\t\t\t  \t</mat-form-field>\n\t\t\t  \t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t<input matInput [matDatepicker]=\"picker12\" placeholder=\"Expire\" formControlName=\"Expire\" >\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker12\"></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #picker12></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t    \t<input matInput placeholder=\"Liability Amount\" value=\"{{technician.LiabilityAmount}}\">\n\t\t\t  \t</mat-form-field>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div fxLayout=\"row\" style=\"width: 100%\" >\n\t\t\t<div fxLayout=\"column\" style=\"width: 50%;margin: 20px;\" class=\"mat-elevation-z4 p-20 m-20\">\n\t\t\t\t<h2>Licenses</h2>\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-checkbox style=\"padding-top: 24px;margin-right: 20px;\" [checked]=\"true\">City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</mat-checkbox>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"License #\" value=\"{{technician.CityLicense}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker20\" placeholder=\"Expire\" formControlName=\"Expire\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker20\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #picker20></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\t\t\t\t  \t\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-checkbox style=\"padding-top: 24px;margin-right: 20px;\" [checked]=\"true\">Country</mat-checkbox>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"License #\" value=\"{{technician.CountryLicense}}\">\n\t\t\t\t  \t</mat-form-field>\t\n\t\t\t\t  \t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker21\" placeholder=\"Expire\" formControlName=\"Expire\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker21\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #picker21></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\t\t\t  \t\n\t\t\t\t</div>\t\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-checkbox style=\"padding-top: 24px;margin-right: 20px;\" [checked]=\"true\">Plumber</mat-checkbox>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"License #\" value=\"{{technician.PlumberLicense}}\">\n\t\t\t\t  \t</mat-form-field>\t\n\t\t\t\t  \t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker31\" placeholder=\"Expire\" formControlName=\"Expire\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker31\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #picker31></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\t\t\t  \t\n\t\t\t\t</div>\t\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-checkbox style=\"padding-top: 24px;margin-right: 20px;\" [checked]=\"true\">Landscape</mat-checkbox>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"License #\" value=\"{{technician.LandscapeLicense}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"lia\" placeholder=\"Expire\" formControlName=\"Expire\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"lia\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #lia></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\t\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-checkbox style=\"padding-top: 24px;margin-right: 20px;\" [checked]=\"true\">Fire</mat-checkbox>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"License #\" value=\"{{technician.FireLicense}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"lia1\" placeholder=\"Expire\" formControlName=\"Expire\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"lia1\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #lia1></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\t\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-checkbox style=\"padding-top: 24px;margin-right: 20px;\" [checked]=\"true\">Confined Space</mat-checkbox>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"License #\" value=\"{{technician.ConfinedSpaceLicense}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"lia2\" placeholder=\"Expire\" formControlName=\"Expire\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"lia2\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #lia2></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\t\n\t\t\t\t\n\t\t\t\t\t  \t\t\n\t\t\t</div>\n\t\t\t<div fxLayout=\"row\" style=\"width: 50%;\">\n\t\t\t\t<div fxLayout=\"column\" style=\"width: 50%;margin: 20px;\" class=\"mat-elevation-z4 p-20 m-20\">\n\t\t\t\t\t<h2>Last letter</h2>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"letter\" value=\"{{technician.LastLetter}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<div class=\"form-hazard-creation-btn\">\n\t\t\t\t\t\t<button mat-raised-button class=\"sitebtn\" >Sent</button>\n\t\t\t\t\t</div>\n\t\t\t\t  \t\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"column\" style=\"width: 50%;margin: 20px;\" class=\"mat-elevation-z4 p-20 m-20\">\n\t\t\t\t\t<h2>Tester's Web Login</h2>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"Webstatus\" value=\"{{technician.WebStatus}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"User Id\" value=\"{{technician.UserId}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field class=\"example-full-width\">\n\t\t\t\t    \t<input matInput placeholder=\"Password\" value=\"{{technician.Status}}\">\n\t\t\t\t  \t</mat-form-field>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div fxLayout=\"column\" style=\"width: 100%\"  class=\"mat-elevation-z4 p-20 m-20\">\n\t\t\t<h2>Certification</h2>\n\t\t\t<div fxLayout=\"column\">\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-checkbox style=\"padding-top: 24px;margin-right: 20px;\" [checked]=\"true\">Test&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</mat-checkbox>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Certification #\" value=\"{{technician.TestCertification}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"lia13\" placeholder=\"Expire\" formControlName=\"Expire\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"lia13\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #lia13></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\t\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Certified By\" value=\"{{technician.TestCertifiedBy}}\">\n\t\t\t\t  \t</mat-form-field>\t\t\t  \t\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-checkbox style=\"padding-top: 24px;margin-right: 20px;\" [checked]=\"true\">Surveys&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</mat-checkbox>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Certification #\" value=\"{{technician.SurveysCertification}}\">\n\t\t\t\t  \t</mat-form-field>\t\n\t\t\t\t  \t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"lia12\" placeholder=\"Expire\" formControlName=\"Expire\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"lia12\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #lia12></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\t\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Certified By\" value=\"{{technician.SurveysCertifiedBy}}\">\n\t\t\t\t  \t</mat-form-field>\t\t  \t\n\t\t\t\t</div>\t\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-checkbox style=\"padding-top: 24px;margin-right: 20px;\" [checked]=\"true\">Instalation</mat-checkbox>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Certification #\" value=\"{{technician.InstallationCertification}}\">\n\t\t\t\t  \t</mat-form-field>\t\n\t\t\t\t  \t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"lia11\" placeholder=\"Expire\" formControlName=\"Expire\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"lia11\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #lia11></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\t\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Certified By\" value=\"{{technician.InstallationCertifiedBy}}\">\n\t\t\t\t  \t</mat-form-field>\t\t  \t\n\t\t\t\t</div>\t\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<mat-checkbox style=\"padding-top: 24px;margin-right: 20px;\" [checked]=\"true\">Repairs</mat-checkbox>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Certification #\" value=\"{{technician.RepairsCertification}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t  \t<mat-form-field style=\"margin-right: 10px;\">\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"lia10\" placeholder=\"Expire\" formControlName=\"Expire\" >\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"lia10\"></mat-datepicker-toggle>\n\t\t\t\t\t\t<mat-datepicker #lia10></mat-datepicker>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field class=\"example-full-width\" style=\"margin-right: 20px;\">\n\t\t\t\t    \t<input matInput placeholder=\"Certified By\" value=\"{{technician.RepairsCertifiedBy}}\">\n\t\t\t\t  \t</mat-form-field>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div fxLayout=\"column\" style=\"width: 100%\"  class=\"mat-elevation-z4 p-20 m-20\">\n\t\t\t<h2>Companies / TestKit</h2>\n\t\t\t<div>\n                <a href=\"apps/hazard/create\"><mat-icon _ngcontent-c35=\"\" class=\"add-hazard-btn secondary-text s-30 mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">add</mat-icon></a>\n            </div>\n\t\t\t<div fxLayout=\"row\">\n\t\t\t\t<mat-form-field style=\"margin-right: 20px;\">\n\t\t\t\t  <mat-select placeholder=\"select company\">\n\t\t\t\t    <mat-option *ngFor=\"let food of foods\" [value]=\"\">\n\t\t\t\t     \n\t\t\t\t    </mat-option>\n\t\t\t\t  </mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field style=\"margin-right: 20px;\">\n\t\t\t\t  <mat-select placeholder=\"select Kit\">\n\t\t\t\t    <mat-option *ngFor=\"let food of foods\" [value]=\"\">\n\t\t\t\t     \n\t\t\t\t    </mat-option>\n\t\t\t\t  </mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div fxLayout=\"row\">\n\t\t\t\t<mat-form-field style=\"margin-right: 20px;\">\n\t\t\t\t  <mat-select placeholder=\"select company\">\n\t\t\t\t    <mat-option *ngFor=\"let food of foods\" [value]=\"\">\n\t\t\t\t     \n\t\t\t\t    </mat-option>\n\t\t\t\t  </mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field style=\"margin-right: 20px;\">\n\t\t\t\t  <mat-select placeholder=\"select Kit\">\n\t\t\t\t    <mat-option *ngFor=\"let food of foods\" [value]=\"\">\n\t\t\t\t     \n\t\t\t\t    </mat-option>\n\t\t\t\t  </mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-hazard-creation1\">\n\t\t\t<p style=\"padding-right: 30px;\">Last updated: {{technician.LastUpdatedDate}}</p>\n\t\t\t<p style=\"padding-right: 30px;\">By: {{technician.LastupdatedBy}}</p>\n\t\t</div>\n\t\t<div class=\"form-hazard-creation-btn\">\n\t\t\t<button mat-raised-button class=\"sitebtn\" >Update</button>\n\t\t</div>\n\t</div>\n\t\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/technical/technician-details/technician-details.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technician-details/technician-details.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.form-hazard-creation {\n  width: 100%;\n  padding: 50px; }\n\n.clm {\n  width: 30%;\n  padding: 20px; }\n\n.form-hazard-creation-btn {\n  text-align: center; }\n\n.add-hazard-btn {\n  background: #d3d3d3;\n  border-radius: 50%;\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/technical/technician-details/technician-details.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technician-details/technician-details.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TechnicianDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicianDetailsComponent", function() { return TechnicianDetailsComponent; });
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


var Technician_Details_DATA = "\n  {\n       \"TechnicianID\":\"836832\",\n       \"Status\":\"Active\",\n       \"ShowOnList\":\"true\",\n       \"FirstName\":\"KEITH J\",\n       \"LastName\":\"RUZOWICZ\",\n       \"Address1\":\"P O BOX 517\",\n       \"Address2\":\"BROOMALL PA\",\n       \"City\":\"BROOMALL\",\n       \"State\":\"PA\",\n       \"ZIP\":\"19008\",\n       \"Phone\":\"6103259395\",\n       \"Fax\":\"fax@getzfire.com\",\n       \"Email\":\"jackiev@getzfire.com\",\n       \"Cell\":\"4548874514\",\n       \"UDF1\":\"MMNICOSON\",\n       \"Fee\":\"78\",\n       \"Notes\":\"10/07/10 NOT REQIRED TO TEST BACKFLOW PER JOE PAYLOR.  TM   06/19/2009-PER CUST, DOES NOT USE THE IRRIGATION-PUSHED DT TO ONE YR AHD-LR\",\n       \"Agency\":\"FRANK J. STRAHL & SONS, INC.\",\n       \"InsurancePhone\":\"6103259395\",\n       \"Carrier\":\"Test Carrier\",\n       \"Policy\":\"2300720903E\", \n       \"Expire\":\"6/13/2016\",\n       \"LiabilityAmount\":\"10\",\n       \"CityLicense\":\"058-180639\",\n       \"CityLicenseExpiry\":\"\",\n       \"CountryLicense\":\"058-180631\",\n       \"CountryLicenseExpiry\":\"\",\n       \"PlumberLicense\":\"058-180632\",\n       \"PlumberLicenseExpiry\":\"\",\n       \"LandscapeLicense\":\"058-180635\",\n       \"LandscapeLicenseExpiry\":\"\",\n       \"FireLicense\":\"058-180619\",\n       \"FireLicenseExpiry\":\"\",\n       \"ConfinedSpaceLicense\":\"058-120639\",\n       \"ConfinedSpaceLicenseExpiry\":\"\",\n       \"LastLetter\":\"1/12/2015\",\n       \"WebStatus\":\"Active\",\n       \"UserId\":\"RUZOWICZ\",\n       \"Password\":\"\",\n       \"TestCertification\":\"Test Certification1\",\n       \"TestExpire\":\"\",\n       \"TestCertifiedBy\":\"RUZOWICZ\",\n       \"SurveysCertification\":\"Test Survey Certification\",\n       \"SurveysExpire\":\"\",\n       \"SurveysCertifiedBy\":\"RUZOWICZ\",\n       \"InstallationCertification\":\"Test Install Certification\",\n       \"InstallationExpire\":\"\",\n       \"InstallationCertifiedBy\":\"RUZOWICZ\",\n       \"RepairsCertification\":\"Test Repair certification\",\n       \"RepairsExpire\":\"\",\n       \"RepairsCertifiedBy\":\"RUZOWICZ\",\n       \"LastUpdatedDate\":\"6/13/2017\",\n       \"LastupdatedBy\":\"jackiev\"\n    }\n  ";
var TechnicianDetailsComponent = /** @class */ (function () {
    function TechnicianDetailsComponent() {
    }
    TechnicianDetailsComponent.prototype.ngOnInit = function () {
        this.technician = JSON.parse(Technician_Details_DATA);
        //this.InUse='true';
        console.log(this.technician);
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Expire: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2013, 6, 5)),
            CityLicenseExpiry: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2017, 6, 5)),
            PlumberLicenseExpiry: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            LandscapeLicenseExpiry: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            FireLicenseExpiry: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            ConfinedSpaceLicenseExpiry: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            TestExpire: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            SurveysExpire: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            InstallationExpire: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
            RepairsExpire: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2018, 6, 5)),
        });
    };
    TechnicianDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-technician-details',
            template: __webpack_require__(/*! ./technician-details.component.html */ "./src/app/main/content/apps/technical/technician-details/technician-details.component.html"),
            styles: [__webpack_require__(/*! ./technician-details.component.scss */ "./src/app/main/content/apps/technical/technician-details/technician-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TechnicianDetailsComponent);
    return TechnicianDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/technical/technician-details/technician-details.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/apps/technical/technician-details/technician-details.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: TechnicianDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicianDetailsModule", function() { return TechnicianDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _technician_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technician-details.component */ "./src/app/main/content/apps/technical/technician-details/technician-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '**',
        component: _technician_details_component__WEBPACK_IMPORTED_MODULE_3__["TechnicianDetailsComponent"],
    }
];
var TechnicianDetailsModule = /** @class */ (function () {
    function TechnicianDetailsModule() {
    }
    TechnicianDetailsModule = __decorate([
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
            ],
            declarations: [_technician_details_component__WEBPACK_IMPORTED_MODULE_3__["TechnicianDetailsComponent"]]
        })
    ], TechnicianDetailsModule);
    return TechnicianDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=technical-technician-details-technician-details-module.js.map