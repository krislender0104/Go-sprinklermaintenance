(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-project-project-module"],{

/***/ "./src/app/main/content/apps/dashboards/project/project.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/project/project.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard-project\" class=\"page-layout simple right-sidenav\" fxLayout=\"row\">\n\n    <mat-sidenav-container>\n\n        <!-- CENTER -->\n        <div class=\"center\" fusePerfectScrollbar>\n\n            <!-- HEADER -->\n            <div class=\"header mat-accent-bg p-24 pb-0\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n\n                    <span class=\"mat-display-1 mb-0 welcome-message\" *fuseIfOnDom\n                          [@animate]=\"{value:'*',params:{x:'50px'}}\">Welcome back, John!\n                    </span>\n\n                    <button mat-icon-button fuseMatSidenavToggler=\"dashboards-right-sidenav\" fxHide.gt-md>\n                        <mat-icon>menu</mat-icon>\n                    </button>\n                </div>\n\n                <div fxLayout=\"row\">\n\n                    <div class=\"selected-project\">{{selectedProject.name}}</div>\n\n                    <button mat-icon-button class=\"project-selector\" [matMenuTriggerFor]=\"projectsMenu\"\n                            aria-label=\"Select project\">\n                        <mat-icon>more_horiz</mat-icon>\n                    </button>\n\n                    <mat-menu #projectsMenu=\"matMenu\">\n                        <button mat-menu-item *ngFor=\"let project of projects\" (click)=\"selectedProject = project\">\n                            <span>{{project.name}}</span>\n                        </button>\n                    </mat-menu>\n                </div>\n            </div>\n            <!-- / HEADER -->\n\n            <!-- CONTENT -->\n            <div class=\"content\">\n\n                <mat-tab-group dynamicHeight>\n\n                    <mat-tab label=\"Home\">\n\n                        <div class=\"widget-group grey-100-bg p-12\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\n                             [@animateStagger]=\"{value:'50'}\">\n\n                            <!-- WIDGET 1 -->\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\n                                         fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\n\n                                <!-- Front -->\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\n                                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\n                                         fxLayoutAlign=\"space-between center\">\n                                        <mat-form-field>\n                                            <mat-select class=\"simplified font-size-16\"\n                                                        [(ngModel)]=\"widgets.widget1.currentRange\"\n                                                        aria-label=\"Change range\">\n                                                <mat-option *ngFor=\"let range of widgets.widget1.ranges | keys\"\n                                                            [value]=\"range.key\">\n                                                    {{range.value}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                        <button mat-icon-button fuseWidgetToggle aria-label=\"more\">\n                                            <mat-icon>more_vert</mat-icon>\n                                        </button>\n                                    </div>\n\n                                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                                        <div class=\"light-blue-fg font-size-72 line-height-72\">\n                                            {{widgets.widget1.data.count[widgets.widget1.currentRange]}}\n                                        </div>\n                                        <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget1.data.label}}\n                                        </div>\n                                    </div>\n\n                                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <span class=\"h4 secondary-text text-truncate\">\n                                            {{widgets.widget1.data.extra.label}}:\n                                        </span>\n                                        <span class=\"h4 ml-8\">\n                                            {{widgets.widget1.data.extra.count[widgets.widget1.currentRange]}}\n                                        </span>\n                                    </div>\n                                </div>\n                                <!-- / Front -->\n\n                                <!-- Back -->\n                                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\n                                            aria-label=\"Flip widget\">\n                                        <mat-icon class=\"s-16\">close</mat-icon>\n                                    </button>\n\n                                    <div>\n                                        {{widgets.widget1.detail}}\n                                    </div>\n                                </div>\n                                <!-- / Back -->\n\n                            </fuse-widget>\n                            <!-- / WIDGET 1 -->\n\n                            <!-- WIDGET 2 -->\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\n                                         fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\n\n                                <!-- Front -->\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\n                                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\n                                         fxLayoutAlign=\"space-between center\">\n                                        <div class=\"h3\">{{widgets.widget2.title}}</div>\n\n                                        <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\n                                                aria-label=\"more\">\n                                            <mat-icon>more_vert</mat-icon>\n                                        </button>\n                                    </div>\n\n                                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                                        <div class=\"red-fg font-size-72 line-height-72\">\n                                            {{widgets.widget2.data.count}}\n                                        </div>\n                                        <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget2.data.label}}\n                                        </div>\n                                    </div>\n\n                                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <span class=\"h4 secondary-text text-truncate\">\n                                            {{widgets.widget2.data.extra.label}}:\n                                        </span>\n                                        <span class=\"h4 ml-8\">{{widgets.widget2.data.extra.count}}</span>\n                                    </div>\n                                </div>\n                                <!-- / Front -->\n\n                                <!-- Back -->\n                                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\n                                            aria-label=\"Flip widget\">\n                                        <mat-icon class=\"s-16\">close</mat-icon>\n                                    </button>\n\n                                    <div>\n                                        {{widgets.widget2.detail}}\n                                    </div>\n                                </div>\n                                <!-- / Back -->\n\n                            </fuse-widget>\n                            <!-- / WIDGET 2 -->\n\n                            <!-- WIDGET 3 -->\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\n                                         fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\n\n                                <!-- Front -->\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\n                                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\n                                         fxLayoutAlign=\"space-between center\">\n                                        <div class=\"h3\">{{widgets.widget3.title}}</div>\n\n                                        <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\n                                                aria-label=\"more\">\n                                            <mat-icon>more_vert</mat-icon>\n                                        </button>\n                                    </div>\n\n                                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                                        <div class=\"orange-fg font-size-72 line-height-72\">\n                                            {{widgets.widget3.data.count}}\n                                        </div>\n                                        <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget3.data.label}}\n                                        </div>\n                                    </div>\n\n                                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <span class=\"h4 secondary-text text-truncate\">\n                                            {{widgets.widget3.data.extra.label}}:\n                                        </span>\n                                        <span class=\"h4 ml-8\">{{widgets.widget3.data.extra.count}}</span>\n                                    </div>\n                                </div>\n                                <!-- / Front -->\n\n                                <!-- Back -->\n                                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\n                                            aria-label=\"Flip widget\">\n                                        <mat-icon class=\"s-16\">close</mat-icon>\n                                    </button>\n\n                                    <div>\n                                        {{widgets.widget3.detail}}\n                                    </div>\n                                </div>\n                                <!-- / Back -->\n\n                            </fuse-widget>\n                            <!-- / WIDGET 3 -->\n\n                            <!-- WIDGET 4 -->\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\n                                         fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\n\n                                <!-- Front -->\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\n                                    <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\n                                         fxLayoutAlign=\"space-between center\">\n                                        <div class=\"h3\">{{widgets.widget4.title}}</div>\n\n                                        <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\n                                                aria-label=\"more\">\n                                            <mat-icon>more_vert</mat-icon>\n                                        </button>\n                                    </div>\n\n                                    <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                                        <div class=\"blue-grey-fg font-size-72 line-height-72\">\n                                            {{widgets.widget4.data.count}}\n                                        </div>\n                                        <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget4.data.label}}\n                                        </div>\n                                    </div>\n\n                                    <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <span class=\"h4 secondary-text text-truncate\">\n                                            {{widgets.widget4.data.extra.label}}:\n                                        </span>\n                                        <span class=\"h4 ml-8\">{{widgets.widget4.data.extra.count}}</span>\n                                    </div>\n                                </div>\n                                <!-- / Front -->\n\n                                <!-- Back -->\n                                <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\n                                            aria-label=\"Flip widget\">\n                                        <mat-icon class=\"s-16\">close</mat-icon>\n                                    </button>\n\n                                    <div>\n                                        {{widgets.widget4.detail}}\n                                    </div>\n                                </div>\n                                <!-- / Back -->\n\n                            </fuse-widget>\n                            <!-- / WIDGET 4 -->\n\n                            <!-- WIDGET 5 -->\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" fxLayout=\"row\" fxFlex=\"100\"\n                                         class=\"widget widget5\">\n\n                                <!-- Front -->\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\n\n                                    <div class=\"px-16 border-bottom\" fxLayout=\"row wrap\"\n                                         fxLayoutAlign=\"space-between center\">\n\n                                        <div fxFlex class=\"py-16 h3\">{{widgets.widget5.title}}</div>\n\n                                        <div fxFlex=\"0 1 auto\" class=\"py-16\" fxLayout=\"row\">\n                                            <button mat-button class=\"px-16\"\n                                                    *ngFor=\"let range of widgets.widget5.ranges | keys\"\n                                                    (click)=\"widget5.currentRange = range.key\"\n                                                    [disabled]=\"widget5.currentRange == range.key\">\n                                                {{range.value}}\n                                            </button>\n                                        </div>\n                                    </div>\n\n                                    <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\n\n                                        <div class=\"h-420 my-16\" fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n                                            <ngx-charts-bar-vertical-stacked\n                                                *fuseIfOnDom\n                                                [scheme]=\"widget5.scheme\"\n                                                [results]=\"this.widgets.widget5.mainChart[this.widget5.currentRange]\"\n                                                [gradient]=\"widget5.gradient\"\n                                                [xAxis]=\"widget5.xAxis\"\n                                                [yAxis]=\"widget5.yAxis\"\n                                                [legend]=\"widget5.legend\"\n                                                [showXAxisLabel]=\"widget5.showXAxisLabel\"\n                                                [showYAxisLabel]=\"widget5.showYAxisLabel\"\n                                                [xAxisLabel]=\"widget5.xAxisLabel\"\n                                                [yAxisLabel]=\"widget5.yAxisLabel\"\n                                                (select)=\"widget5.onSelect($event)\">\n                                            </ngx-charts-bar-vertical-stacked>\n                                        </div>\n\n                                        <div class=\"my-16\" fxFlex=\"100\" fxLayout=\"row wrap\" fxFlex.gt-sm=\"50\">\n\n                                            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxLayoutAlign=\"center\"\n                                                 *ngFor=\"let widget of widgets.widget5.supporting | keys\"\n                                                 class=\"mb-24\">\n\n                                                <div class=\"px-24\">\n                                                    <div class=\"h4 secondary-text\">{{widget.value.label}}</div>\n                                                    <div class=\"mat-display-1 m-0\">\n                                                        {{widget.value.count[widget5.currentRange]}}\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"h-64\">\n                                                    <ngx-charts-area-chart\n                                                        *fuseIfOnDom\n                                                        [results]=\"widget.value.chart[widget5.currentRange]\"\n                                                        [scheme]=\"widget5.supporting.scheme\"\n                                                        [gradient]=\"widget5.supporting.gradient\"\n                                                        [xAxis]=\"widget5.supporting.xAxis\"\n                                                        [yAxis]=\"widget5.supporting.yAxis\"\n                                                        [legend]=\"widget5.supporting.legend\"\n                                                        [showXAxisLabel]=\"widget5.supporting.showXAxisLabel\"\n                                                        [showYAxisLabel]=\"widget5.supporting.showYAxisLabel\"\n                                                        [xAxisLabel]=\"widget5.supporting.xAxisLabel\"\n                                                        [yAxisLabel]=\"widget5.supporting.yAxisLabel\"\n                                                        [curve]=\"widget5.supporting.curve\">\n                                                    </ngx-charts-area-chart>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- / Front -->\n\n                            </fuse-widget>\n                            <!-- / WIDGET 5 -->\n\n                            <!-- WIDGET 6 -->\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\n                                         fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n\n                                <!-- Front -->\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\n\n                                    <div class=\"px-16 py-8 border-bottom\" fxLayout=\"row\"\n                                         fxLayoutAlign=\"space-between center\">\n                                        <div class=\"h3\">{{widgets.widget6.title}}</div>\n                                        <mat-form-field>\n                                            <mat-select class=\"simplified\" [(ngModel)]=\"widget6.currentRange\"\n                                                        aria-label=\"Change range\">\n                                                <mat-option *ngFor=\"let range of widgets.widget6.ranges | keys\"\n                                                            [value]=\"range.key\">\n                                                    {{range.value}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n\n                                    <div class=\"h-400\">\n                                        <ngx-charts-pie-chart\n                                            *fuseIfOnDom\n                                            [scheme]=\"widget6.scheme\"\n                                            [results]=\"widgets.widget6.mainChart[widget6.currentRange]\"\n                                            [legend]=\"widget6.showLegend\"\n                                            [explodeSlices]=\"widget6.explodeSlices\"\n                                            [labels]=\"widget6.labels\"\n                                            [doughnut]=\"widget6.doughnut\"\n                                            [gradient]=\"widget6.gradient\"\n                                            (select)=\"widget6.onSelect($event)\">\n                                        </ngx-charts-pie-chart>\n                                    </div>\n\n                                    <div class=\"py-8 mh-16 border-top\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n\n                                        <div class=\"py-8 border-right\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n                                             fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n                                            <span class=\"mat-display-1 mb-0\">\n                                                {{widgets.widget6.footerLeft.count[widget6.currentRange]}}\n                                            </span>\n                                            <span class=\"h4\">{{widgets.widget6.footerLeft.title}}</span>\n                                        </div>\n\n                                        <div class=\"py-8\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100\"\n                                             fxFlex.gt-sm=\"50\">\n                                            <span class=\"mat-display-1 mb-0\">\n                                                {{widgets.widget6.footerRight.count[widget6.currentRange]}}\n                                            </span>\n                                            <span class=\"h4\">{{widgets.widget6.footerRight.title}}</span>\n                                        </div>\n                                    </div>\n\n                                </div>\n                                <!-- / Front -->\n\n                            </fuse-widget>\n                            <!-- / WIDGET 6 -->\n\n                            <!-- WIDGET 7 -->\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\n                                         fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n\n                                <!-- Front -->\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\n\n                                    <div class=\"px-16 py-8 border-bottom\" fxLayout=\"row\"\n                                         fxLayoutAlign=\"space-between center\">\n                                        <div class=\"h3\">{{widgets.widget7.title}}</div>\n                                        <mat-form-field>\n                                            <mat-select class=\"simplified\" [(ngModel)]=\"widget7.currentRange\"\n                                                        aria-label=\"Change range\">\n                                                <mat-option *ngFor=\"let range of widgets.widget7.ranges | keys\"\n                                                            [value]=\"range.key\">\n                                                    {{range.value}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n\n                                    <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\n                                         *ngFor=\"let event of widgets.widget7.schedule[widget7.currentRange]\">\n                                        <div>\n                                            <div class=\"h3\">{{event.title}}</div>\n                                            <div>\n                                                <span class=\"secondary-text\">{{event.time}}</span>\n                                                <span *ngIf=\"event.location\">, {{event.location}}</span>\n                                            </div>\n                                        </div>\n\n                                        <button mat-icon-button aria-label=\"More information\">\n                                            <mat-icon>more_vert</mat-icon>\n                                        </button>\n                                    </div>\n\n                                </div>\n                                <!-- / Front -->\n\n                            </fuse-widget>\n                            <!-- / WIDGET 7 -->\n\n                        </div>\n                        <!-- / WIDGET GROUP -->\n\n                    </mat-tab>\n\n                    <mat-tab label=\"Budget Summary\">\n\n                        <!-- WIDGET GROUP -->\n                        <div class=\"widget-group grey-100-bg\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\n                             [@animateStagger]=\"{value:'50'}\">\n\n                            <!-- WIDGET 8 -->\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\n                                         fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n\n                                <!-- Front -->\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\n                                    <div class=\"h3 px-16 py-24\">\n                                        {{widgets.widget8.title}}\n                                    </div>\n\n                                    <mat-divider></mat-divider>\n\n                                    <div class=\"h-400\">\n                                        <ngx-charts-pie-chart\n                                            *fuseIfOnDom\n                                            [scheme]=\"widget8.scheme\"\n                                            [results]=\"widgets.widget8.mainChart\"\n                                            [legend]=\"widget8.legend\"\n                                            [explodeSlices]=\"widget8.explodeSlices\"\n                                            [labels]=\"widget8.labels\"\n                                            [doughnut]=\"widget8.doughnut\"\n                                            [gradient]=\"widget8.gradient\"\n                                            (select)=\"widget8.onSelect($event)\">\n                                        </ngx-charts-pie-chart>\n                                    </div>\n\n                                </div>\n                                <!-- / Front -->\n\n                            </fuse-widget>\n                            <!-- / WIDGET 8 -->\n\n                            <!-- WIDGET 9 -->\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\n                                         fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n\n                                <!-- Front -->\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\n                                    <div class=\"px-16 py-12 border-bottom\" fxLayout=\"row\"\n                                         fxLayoutAlign=\"space-between center\">\n                                        <div class=\"h3\">{{widgets.widget9.title}}</div>\n                                        <mat-form-field>\n                                            <mat-select [(ngModel)]=\"widget9.currentRange\" aria-label=\"Change range\">\n                                                <mat-option *ngFor=\"let range of widgets.widget9.ranges | keys\"\n                                                            [value]=\"range.key\">\n                                                    {{range.value}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n\n                                    <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                                         fxLayout.gt-xs=\"row\"\n                                         fxLayoutAlign.gt-xs=\"space-between end\">\n                                        <div fxFlex=\"0 1 auto\">\n                                            <div class=\"h4 secondary-text\">{{widgets.widget9.weeklySpent.title}}</div>\n                                            <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\n                                                <span class=\"secondary-text\">$</span>\n                                                <span>{{widgets.widget9.weeklySpent.count[widget9.currentRange]}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"h-52\" fxFlex>\n                                            <ngx-charts-area-chart\n                                                *fuseIfOnDom\n                                                [results]=\"widgets.widget9.weeklySpent.chart[widget9.currentRange]\"\n                                                [scheme]=\"widget9.scheme\"\n                                                [gradient]=\"widget9.gradient\"\n                                                [xAxis]=\"widget9.xAxis\"\n                                                [yAxis]=\"widget9.yAxis\"\n                                                [legend]=\"widget9.legend\"\n                                                [showXAxisLabel]=\"widget9.showXAxisLabel\"\n                                                [showYAxisLabel]=\"widget9.showYAxisLabel\"\n                                                [xAxisLabel]=\"widget9.xAxisLabel\"\n                                                [yAxisLabel]=\"widget9.yAxisLabel\"\n                                                [curve]=\"widget9.curve\">\n                                            </ngx-charts-area-chart>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                                         fxLayout.gt-xs=\"row\"\n                                         fxLayoutAlign.gt-xs=\"space-between end\">\n                                        <div fxFlex=\"0 1 auto\">\n                                            <div class=\"h4 secondary-text\">{{widgets.widget9.totalSpent.title}}</div>\n                                            <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\n                                                <span class=\"secondary-text\">$</span>\n                                                <span>{{widgets.widget9.totalSpent.count[widget9.currentRange]}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"h-52\" fxFlex>\n                                            <ngx-charts-area-chart\n                                                *fuseIfOnDom\n                                                [results]=\"widgets.widget9.totalSpent.chart[widget9.currentRange]\"\n                                                [scheme]=\"widget9.scheme\"\n                                                [gradient]=\"widget9.gradient\"\n                                                [xAxis]=\"widget9.xAxis\"\n                                                [yAxis]=\"widget9.yAxis\"\n                                                [legend]=\"widget9.legend\"\n                                                [showXAxisLabel]=\"widget9.showXAxisLabel\"\n                                                [showYAxisLabel]=\"widget9.showYAxisLabel\"\n                                                [xAxisLabel]=\"widget9.xAxisLabel\"\n                                                [yAxisLabel]=\"widget9.yAxisLabel\"\n                                                [curve]=\"widget9.curve\">\n                                            </ngx-charts-area-chart>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\n                                         fxLayout.gt-xs=\"row\"\n                                         fxLayoutAlign.gt-xs=\"space-between end\">\n                                        <div fxFlex=\"0 1 auto\">\n                                            <div class=\"h4 secondary-text\">{{widgets.widget9.remaining.title}}</div>\n                                            <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\n                                                <span class=\"secondary-text\">$</span>\n                                                <span>{{widgets.widget9.remaining.count[widget9.currentRange]}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"h-52\" fxFlex>\n                                            <ngx-charts-area-chart\n                                                *fuseIfOnDom\n                                                [results]=\"widgets.widget9.remaining.chart[widget9.currentRange]\"\n                                                [scheme]=\"widget9.scheme\"\n                                                [gradient]=\"widget9.gradient\"\n                                                [xAxis]=\"widget9.xAxis\"\n                                                [yAxis]=\"widget9.yAxis\"\n                                                [legend]=\"widget9.legend\"\n                                                [showXAxisLabel]=\"widget9.showXAxisLabel\"\n                                                [showYAxisLabel]=\"widget9.showYAxisLabel\"\n                                                [xAxisLabel]=\"widget9.xAxisLabel\"\n                                                [yAxisLabel]=\"widget9.yAxisLabel\"\n                                                [curve]=\"widget9.curve\">\n                                            </ngx-charts-area-chart>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"px-16 py-24 border-top\">\n                                        <div class=\"h4 secondary-text\">{{widgets.widget9.totalBudget.title}}</div>\n                                        <div class=\"pt-8 mat-display-1 m-0 font-weight-300\">\n                                            <span class=\"secondary-text\">$</span>\n                                            <span>{{widgets.widget9.totalBudget.count}}</span>\n                                        </div>\n                                    </div>\n\n                                </div>\n                                <!-- / Front -->\n\n                            </fuse-widget>\n                            <!-- / WIDGET 9 -->\n\n                            <!-- WIDGET 10 -->\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"row\"\n                                         fxFlex=\"100\">\n\n                                <!-- Front -->\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\n\n                                    <div class=\"simple-table-container\" ms-responsive-table>\n                                        <div class=\" table-title\">\n                                            {{widgets.widget10.title}}\n                                        </div>\n\n                                        <table class=\"simple\">\n\n                                            <thead>\n                                                <tr>\n                                                    <th *ngFor=\"let column of widgets.widget10.table.columns\">\n                                                        {{column.title}}\n                                                    </th>\n                                                </tr>\n                                            </thead>\n\n                                            <tbody>\n                                                <tr *ngFor=\"let row of widgets.widget10.table.rows\">\n                                                    <td *ngFor=\"let cell of row\">\n                                                        <span class=\"p-4\" [ngClass]=\"cell.classes\">\n                                                            {{cell.value}}\n                                                        </span>\n                                                        <mat-icon *ngIf=\"cell.icon\" class=\"s-16\">{{cell.icon}}\n                                                        </mat-icon>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n\n                                </div>\n                                <!-- / Front -->\n\n                            </fuse-widget>\n                            <!-- / WIDGET 10 -->\n\n                        </div>\n                        <!-- / WIDGET GROUP -->\n\n                    </mat-tab>\n\n                    <mat-tab label=\"Team Members\">\n\n                        <!-- WIDGET GROUP -->\n                        <div class=\"widget-group grey-100-bg\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\n                             [@animateStagger]=\"{value:'50'}\">\n\n                            <!-- WIDGET 11 -->\n                            <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"row\"\n                                         fxFlex=\"100\">\n\n                                <!-- Front -->\n                                <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\n\n                                    <div class=\"p-24 mb-8 border-bottom\" fxLayout=\"row\"\n                                         fxLayoutAlign=\"space-between center\">\n                                        <div class=\"h2\">{{widgets.widget11.title}}</div>\n                                        <div class=\"text-boxed red-bg white-fg m-0\">\n                                            {{widgets.widget11.table.rows.length}}\n                                            members\n                                        </div>\n                                    </div>\n\n                                    <mat-table #table [dataSource]=\"widget11.dataSource\">\n\n                                        <!-- Avatar Column -->\n                                        <ng-container cdkColumnDef=\"avatar\">\n                                            <mat-header-cell fxFlex=\"96px\" *cdkHeaderCellDef></mat-header-cell>\n                                            <mat-cell fxFlex=\"96px\" *cdkCellDef=\"let contact\">\n                                                <img class=\"avatar\" *ngIf=\"contact.avatar\" [alt]=\"contact.name\"\n                                                     [src]=\"contact.avatar\"/>\n                                            </mat-cell>\n                                        </ng-container>\n\n                                        <!-- Name Column -->\n                                        <ng-container cdkColumnDef=\"name\">\n                                            <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\n                                            <mat-cell *cdkCellDef=\"let contact\">\n                                                <p class=\"text-truncate font-weight-600\">{{contact.name}}\n                                                    {{contact.lastName}}</p>\n                                            </mat-cell>\n                                        </ng-container>\n\n                                        <!-- Position Column -->\n                                        <ng-container cdkColumnDef=\"position\">\n                                            <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Position\n                                            </mat-header-cell>\n                                            <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\n                                                <p class=\"position text-truncate\">\n                                                    {{contact.position}}\n                                                </p>\n                                            </mat-cell>\n                                        </ng-container>\n\n                                        <!-- Office Column -->\n                                        <ng-container cdkColumnDef=\"office\">\n                                            <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Office\n                                            </mat-header-cell>\n                                            <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-md>\n                                                <p class=\"office text-truncate\">\n                                                    {{contact.office}}\n                                                </p>\n                                            </mat-cell>\n                                        </ng-container>\n\n                                        <!-- Email Column -->\n                                        <ng-container cdkColumnDef=\"email\">\n                                            <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Email\n                                            </mat-header-cell>\n                                            <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\n                                                <p class=\"email text-truncate\">\n                                                    {{contact.email}}\n                                                </p>\n                                            </mat-cell>\n                                        </ng-container>\n\n                                        <!-- Phone Column -->\n                                        <ng-container cdkColumnDef=\"phone\">\n                                            <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Phone\n                                            </mat-header-cell>\n                                            <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-md>\n                                                <p class=\"phone text-truncate\">\n                                                    {{contact.phone}}\n                                                </p>\n                                            </mat-cell>\n                                        </ng-container>\n\n                                        <mat-header-row\n                                            *cdkHeaderRowDef=\"widgets.widget11.table.columns\"></mat-header-row>\n                                        <mat-row *cdkRowDef=\"let contact; columns: widgets.widget11.table.columns;\">\n                                        </mat-row>\n                                    </mat-table>\n                                </div>\n                                <!-- / Front -->\n\n                            </fuse-widget>\n                            <!-- / WIDGET 11 -->\n\n                        </div>\n                        <!-- / WIDGET GROUP -->\n\n                    </mat-tab>\n                </mat-tab-group>\n\n            </div>\n            <!-- / CONTENT -->\n\n        </div>\n        <!-- / CENTER -->\n\n        <!-- SIDENAV -->\n        <mat-sidenav class=\"sidenav\" position=\"end\" mode=\"side\" opened=\"true\"\n                     fuseMatSidenavHelper=\"dashboards-right-sidenav\" mat-is-locked-open=\"gt-md\">\n\n            <div class=\"sidenav-content\" fusePerfectScrollbar>\n\n                <!-- WIDGET GROUP -->\n                <div class=\"widget-group\" fxLayout=\"column\" fxFlex=\"100\" *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\n\n                    <!-- NOW WIDGET -->\n                    <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"sidenav-widget p-0\">\n\n                        <!-- Front -->\n                        <div class=\"fuse-widget-front\">\n\n                            <div class=\"pl-16 pr-8 py-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n                                <div class=\"h3\">{{dateNow | date: 'EEEE, HH:mm:ss'}}</div>\n\n                                <div>\n                                    <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"more\">\n                                        <mat-icon>more_vert</mat-icon>\n                                    </button>\n\n                                    <mat-menu #moreMenu=\"matMenu\">\n                                        <button mat-menu-item aria-label=\"Flip widget\">\n                                            Details\n                                        </button>\n                                    </mat-menu>\n                                </div>\n                            </div>\n\n                            <div class=\"p-16 pb-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                                <div class=\"h1 secondary-text\">\n                                    <span>{{dateNow | date: 'MMMM'}}</span>\n                                </div>\n\n                                <div class=\"font-size-72 line-height-88 secondary-text font-weight-400\">\n                                    {{dateNow | date: 'd'}}\n                                </div>\n\n                                <div class=\"h1 secondary-text\">\n                                    <span>{{dateNow | date: 'y'}}</span>\n                                </div>\n                            </div>\n\n                            <mat-divider></mat-divider>\n                        </div>\n                        <!-- / Front -->\n\n                    </fuse-widget>\n                    <!-- / NOW WIDGET -->\n\n                    <!-- WEATHER WIDGET -->\n                    <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"sidenav-widget p-0\">\n\n                        <!-- Front -->\n                        <div class=\"fuse-widget-front\">\n\n                            <div class=\"pl-16 pr-8 py-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n                                <div class=\"h4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon class=\"mr-8\">place</mat-icon>\n                                    {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].name}}\n                                </div>\n\n                                <div>\n                                    <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"more\">\n                                        <mat-icon>more_vert</mat-icon>\n                                    </button>\n\n                                    <mat-menu #moreMenu=\"matMenu\">\n                                        <button mat-menu-item aria-label=\"Flip widget\">\n                                            Details\n                                        </button>\n                                    </mat-menu>\n                                </div>\n                            </div>\n\n                            <div class=\"p-16 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                                    <mat-icon fontSet=\"meteocons\"\n                                              [fontIcon]=\"widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].icon\"\n                                              class=\"icon s-40 mr-16\"></mat-icon>\n                                    <span class=\"mat-display-2 m-0 font-weight-300 secondary-text\">\n                                        {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].temp[widgets.weatherWidget.tempUnit]}}\n                                    </span>\n                                    <span class=\"font-size-48 font-weight-300 hint-text text-super ml-8\">°</span>\n                                    <span class=\"mat-display-2 mb-0 font-weight-300 hint-text ng-binding\">C</span>\n                                </div>\n                            </div>\n\n                            <div class=\"grey-300-bg p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-windy\" class=\"mr-8 s-16\"></mat-icon>\n                                    <span>\n                                        {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].windSpeed[widgets.weatherWidget.speedUnit]}}\n                                    </span>\n                                    <span class=\"secondary-text ml-5\">{{widgets.weatherWidget.speedUnit}}</span>\n                                </div>\n\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-compass\" class=\"mr-8 s-16\"></mat-icon>\n                                    <span>\n                                        {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].windDirection}}\n                                    </span>\n                                </div>\n\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                    <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-rainy\" class=\"mr-8 s-16\"></mat-icon>\n                                    <span>\n                                        {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].rainProbability}}\n                                    </span>\n                                </div>\n                            </div>\n\n                            <div class=\"py-16\">\n                                <div class=\"py-16 px-24\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\n                                     *ngFor=\"let day of widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].next3Days\">\n                                    <span class=\"h4\">{{day.name}}</span>\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                        <mat-icon fontSet=\"meteocons\" [fontIcon]=\"day.icon\" class=\"mr-16\"></mat-icon>\n                                        <span class=\"h2\">{{day.temp[widgets.weatherWidget.tempUnit]}}</span>\n                                        <span class=\"h2 font-weight-300 secondary-text text-super\">&deg;</span>\n                                        <span class=\"h2 font-weight-300 secondary-text\">\n                                            {{widgets.weatherWidget.tempUnit}}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <mat-divider></mat-divider>\n\n                        </div>\n                        <!-- / Front -->\n\n                    </fuse-widget>\n                    <!-- / WEATHER WIDGET -->\n\n                </div>\n                <!-- / WIDGET GROUP -->\n            </div>\n\n        </mat-sidenav>\n        <!-- / SIDENAV -->\n\n    </mat-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/project/project.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/project/project.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard-project mat-sidenav-container .mat-drawer-content,\n#dashboard-project mat-sidenav-container .mat-sidenav-content {\n  flex: 1 1 100%; }\n\n#dashboard-project mat-sidenav-container .center > .header {\n  height: 160px;\n  min-height: 160px;\n  max-height: 160px; }\n\n#dashboard-project mat-sidenav-container .center > .header .selected-project {\n    background: rgba(0, 0, 0, 0.12);\n    color: #FFFFFF;\n    padding: 8px 16px;\n    height: 40px;\n    line-height: 24px;\n    font-size: 16px; }\n\n#dashboard-project mat-sidenav-container .center > .header .project-selector {\n    margin-left: 1px;\n    border-radius: 0;\n    background: rgba(0, 0, 0, 0.12); }\n\n#dashboard-project mat-sidenav-container .center > .header .project-selector mat-icon {\n      color: #FFFFFF; }\n\n#dashboard-project mat-sidenav-container .center > .content {\n  flex: 1; }\n\n#dashboard-project mat-sidenav-container .center > .content mat-tab-group {\n    height: 100%; }\n\n#dashboard-project mat-sidenav-container .center > .content mat-tab-group .mat-tab-body-wrapper {\n      flex-grow: 1; }\n\n#dashboard-project mat-sidenav-container .center > .content .mat-tab-label-container {\n    padding: 0 24px; }\n\n#dashboard-project mat-sidenav-container .sidenav {\n  width: 250px !important;\n  min-width: 250px !important;\n  max-width: 250px !important; }\n\n#dashboard-project mat-sidenav-container .widget.widget5 .gridline-path.gridline-path-horizontal {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/project/project.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/project/project.component.ts ***!
  \***************************************************************************/
/*! exports provided: FuseProjectDashboardComponent, FilesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseProjectDashboardComponent", function() { return FuseProjectDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDataSource", function() { return FilesDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.service */ "./src/app/main/content/apps/dashboards/project/project.service.ts");
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






var FuseProjectDashboardComponent = /** @class */ (function () {
    function FuseProjectDashboardComponent(projectDashboardService) {
        var _this = this;
        this.projectDashboardService = projectDashboardService;
        this.widget5 = {};
        this.widget6 = {};
        this.widget7 = {};
        this.widget8 = {};
        this.widget9 = {};
        this.widget11 = {};
        this.dateNow = Date.now();
        this.projects = this.projectDashboardService.projects;
        this.selectedProject = this.projects[0];
        this.widgets = this.projectDashboardService.widgets;
        /**
         * Widget 5
         */
        this.widget5 = {
            currentRange: 'TW',
            xAxis: true,
            yAxis: true,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            onSelect: function (ev) {
                console.log(ev);
            },
            supporting: {
                currentRange: '',
                xAxis: false,
                yAxis: false,
                gradient: false,
                legend: false,
                showXAxisLabel: false,
                xAxisLabel: 'Days',
                showYAxisLabel: false,
                yAxisLabel: 'Isues',
                scheme: {
                    domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
                },
                curve: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveBasis"]
            }
        };
        /**
         * Widget 6
         */
        this.widget6 = {
            currentRange: 'TW',
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: true,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
            },
            onSelect: function (ev) {
                console.log(ev);
            }
        };
        /**
         * Widget 7
         */
        this.widget7 = {
            currentRange: 'T'
        };
        /**
         * Widget 8
         */
        this.widget8 = {
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: false,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107']
            },
            onSelect: function (ev) {
                console.log(ev);
            }
        };
        /**
         * Widget 9
         */
        this.widget9 = {
            currentRange: 'TW',
            xAxis: false,
            yAxis: false,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            curve: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveBasis"]
        };
        setInterval(function () {
            _this.dateNow = Date.now();
        }, 1000);
    }
    FuseProjectDashboardComponent.prototype.ngOnInit = function () {
        /**
         * Widget 11
         */
        this.widget11.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.widget11.onContactsChanged.next(this.widgets.widget11.table.rows);
        this.widget11.dataSource = new FilesDataSource(this.widget11);
    };
    FuseProjectDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-project-dashboard',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/main/content/apps/dashboards/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/main/content/apps/dashboards/project/project.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectDashboardService"]])
    ], FuseProjectDashboardComponent);
    return FuseProjectDashboardComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    function FilesDataSource(widget11) {
        var _this = _super.call(this) || this;
        _this.widget11 = widget11;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FilesDataSource.prototype.connect = function () {
        return this.widget11.onContactsChanged;
    };
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/project/project.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/project/project.module.ts ***!
  \************************************************************************/
/*! exports provided: FuseProjectDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseProjectDashboardModule", function() { return FuseProjectDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/widget/widget.module */ "./src/@fuse/components/widget/widget.module.ts");
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project.component */ "./src/app/main/content/apps/dashboards/project/project.component.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project.service */ "./src/app/main/content/apps/dashboards/project/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '**',
        component: _project_component__WEBPACK_IMPORTED_MODULE_7__["FuseProjectDashboardComponent"],
        resolve: {
            data: _project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectDashboardService"]
        }
    }
];
var FuseProjectDashboardModule = /** @class */ (function () {
    function FuseProjectDashboardModule() {
    }
    FuseProjectDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _project_component__WEBPACK_IMPORTED_MODULE_7__["FuseProjectDashboardComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
                _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_6__["FuseWidgetModule"]
            ],
            providers: [
                _project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectDashboardService"]
            ]
        })
    ], FuseProjectDashboardModule);
    return FuseProjectDashboardModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/project/project.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/project/project.service.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashboardService", function() { return ProjectDashboardService; });
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


var ProjectDashboardService = /** @class */ (function () {
    function ProjectDashboardService(http) {
        this.http = http;
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ProjectDashboardService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getProjects(),
                _this.getWidgets()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    ProjectDashboardService.prototype.getProjects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/project-dashboard-projects')
                .subscribe(function (response) {
                _this.projects = response;
                resolve(response);
            }, reject);
        });
    };
    ProjectDashboardService.prototype.getWidgets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/project-dashboard-widgets')
                .subscribe(function (response) {
                _this.widgets = response;
                resolve(response);
            }, reject);
        });
    };
    ProjectDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectDashboardService);
    return ProjectDashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboards-project-project-module.js.map