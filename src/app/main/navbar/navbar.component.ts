import { cloneDeep } from 'lodash';
import { filter } from 'rxjs/operators';
import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { navigations, testnavigation } from 'app/navigation/navigation';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSidebarComponent } from '@fuse/components/sidebar/sidebar.component';

@Component({
    selector: 'fuse-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseNavbarComponent implements OnInit, OnDestroy {
    private fusePerfectScrollbar: FusePerfectScrollbarDirective;

    @ViewChild(FusePerfectScrollbarDirective) set directive(theDirective: FusePerfectScrollbarDirective) {
        if (!theDirective) {
            return;
        }

        this.fusePerfectScrollbar = theDirective;

        this.navigationServiceWatcher =
            this.navigationService.onItemCollapseToggled.subscribe(() => {
                this.fusePerfectScrollbarUpdateTimeout = setTimeout(() => {
                    this.fusePerfectScrollbar.update();
                }, 310);
            });
    }

    @Input() layout;
    navigation: any;
    navigationServiceWatcher: Subscription;
    fusePerfectScrollbarUpdateTimeout;
    navigationchildren: any[8];
    constructor(
        private sidebarService: FuseSidebarService,
        private navigationService: FuseNavigationService,
        private router: Router
    ) {
        // Navigation data
        if (localStorage.length > 0) {
            var currentUser = JSON.parse(localStorage.currentUser)[0];
            if (currentUser.WebTestTester) {
                this.navigation =  [
                    {
                        'id': 'applications',
                        'title': '',
                        'translate': 'NAV.APPLICATIONS',
                        'type': 'group',
                        'icon': 'apps',
                        'children': [
                        //     {
                        //     'id': 'calendar',
                        //     'title': 'Calendar',
                        //     'translate': 'NAV.CALENDAR',
                        //     'type': 'item',
                        //     'icon': 'today',
                        //     'url': '/apps/calendar'
                        // },
                        {
                            'id': 'webtesterguide',
                            'title': 'Guide',
                            'type': 'item',
                            'icon': 'list_alt',
                            'url': '/apps/webtests/Webtesterguide'
                        },
                        {
                            'id': 'instruction',
                            'title': 'Instructions',
                            'type': 'item',
                            'icon': 'list_alt',
                            'url': '/apps/webtests/Instructions'
                        },
                        {
                            'id': 'hazardcheck',
                            'title': 'Test Entry',
                            'type': 'item',
                            'icon': 'border_all',
                            'url': '/apps/webtests/addtest'
                        },
                        {
                            'id': 'review-unsubmittedtests',
                            'title': 'Review Unsubmitted  Tests',
                            'type': 'item',
                            'icon': 'settings_input_component',
                            'url': '/apps/webtests/review-unsubmittedtests'
                        },
                        {
                            'id': 'review-submittedtests',
                            'title': 'Submitted Test',
                            'type': 'item',
                            'icon': 'settings_input_component',
                            'url': '/apps/webtests/submittedtests'
                        },
                        {
                            'id': 'appoinments',
                            'title': 'Appoinments',
                            'type': 'item',
                            'icon': 'today',
                            'url': '/apps/academy/courses/courses'
                        }
                        ]
                    }
                ];
            }
            else {
                this.navigation = [
                    {
                        'id': 'applications',
                        'title': '',
                        'translate': 'NAV.APPLICATIONS',
                        'type': 'group',
                        'icon': 'apps',
                        'children': [
                            {
                                'id': 'dashboards',
                                'title': 'Dashboard',
                                'translate': 'NAV.DASHBOARDS',
                                'type': 'item',
                                'icon': 'dashboard',
                                'url': '/apps/dashboards/project'
                            },
                            {
                                'id': 'dashboardsanalytics',
                                'title': 'Dashboard 2',
                                //'translate': 'NAV.DASHBOARDS',
                                'type': 'item',
                                'icon': 'dashboard',
                                'url': '/apps/dashboards/analytics'
                            },
                
                            {
                                'id': 'sites',
                                'title': 'Sites',
                                'type': 'collapse',
                                'icon': 'store',
                                'children': [
                                    {
                                        'id': 'SiteInformation',
                                        'title': 'Site Information',
                                        'type': 'item',
                                        'url': '/apps/site/sitelist'
                                    },
                                    {
                                        'id': 'SiteSummary',
                                        'title': 'Site Summary',
                                        'type': 'item',
                                        'url': '/apps/site/summary'
                                    },
                                    {
                                        'id': 'SiteImport',
                                        'title': 'Site Import',
                                        'type': 'item',
                                        'url': '/apps/site/siteimport'
                                    },
                                    {
                                        'id': 'SiteAddhazard',
                                        'title': 'Add Hazard',
                                        'type': 'item',
                                        'url': '/apps/site/siteaddhazard'
                                    },
                                    {
                                        'id': 'SiteAddtest',
                                        'title': 'Add Test',
                                        'type': 'item',
                                        'url': '/apps/site/siteaddtest'
                                    }
                                ]
                            },
                            {
                                'id': 'technical',
                                'title': 'Technical Information',
                                'type': 'item',
                                'icon': 'recent_actors',
                                'url': '/apps/technical'
                            },
                            {
                                'id': 'advancedreports',
                                'title': 'Advanced Reporting',
                                'type': 'item',
                                'icon': 'system_update_alt',
                                'url': '/apps/report'
                            },
                            {
                                'id': 'letter',
                                'title': 'Letters',
                                'type': 'item',
                                'icon': 'email',
                                'url': '/apps/letter'
                            },
                            {
                                'id': 'admin',
                                'title': 'Admin',
                                'type': 'item',
                                'icon': 'person_add',
                                'url': '/apps/contacts'
                            },
                            {
                                'id': 'setup',
                                'title': 'Notices',
                                'type': 'collapse',
                                'icon': 'settings',
                                'children': [
                                    {
                                        'id': 'notice',
                                        'title': 'Notice Days',
                                        'type': 'item',
                                        'url': '/apps/settings/notice'
                                    },
                                    {
                                        'id': 'mailmerge',
                                        'title': 'Mail Merge',
                                        'type': 'item',
                                        'url': '/apps/settings/mailmerge'
                                    },
                                    // {
                                    //     'id': 'fields',
                                    //     'title': 'Fields',
                                    //     'type': 'item',
                                    //     'url': '/apps/settings/fields'
                                    // },
                                    {
                                        'id': 'generatecustomnotice',
                                        'title': 'Generate Custom Notices',
                                        'type': 'item',
                                        'url': '/apps/settings/generatecustomnotice'
                                    },
                                    {
                                        'id': 'setupcustomnotice',
                                        'title': 'Setup Custom Notices',
                                        'type': 'item',
                                        'url': '/apps/settings/setupcustomnotice'
                                    }/* ,
                                    {
                                        'id': 'export',
                                        'title': 'Export Filtering',
                                        'type': 'item',
                                        'url': '/apps/settings/export'
                                    } */
                                ]
                            },
                
                             {
                                'id': 'email',
                                'title': 'Email',
                                'translate': 'Email',
                                'type': 'collapse',
                                'icon': 'email',
                                'children': [
                                    {
                                        'id': 'sendEmail',
                                        'title': 'Send Email',
                                        'type': 'item',
                                        'url': '/apps/email/sendEmail'
                                    },
                                    {
                                        'id': 'sendList',
                                        'title': 'Send List',
                                        'type': 'item',
                                        'url': '/apps/email/sendList'
                                    }
                                ]
                            }, 
                            {
                                'id': 'webtests',
                                'title': 'Web Tests',
                                'type': 'collapse',
                                'icon': 'developer_board',
                                'children': [
                                    {
                                        'id': 'calendar',
                                        'title': 'Calendar',
                                        'type': 'item',
                                        'url': '/apps/calendar'
                                    },
                                    {
                                        'id': 'webtestsetup',
                                        'title': 'Web Test Setup',
                                        'type': 'item',
                                        'url': '/apps/webtests/websetupcreate'
                                    },
                                    {
                                        'id': 'webtestreview',
                                        'title': 'Web Test Review',
                                        'type': 'item',
                                        'url': '/apps/webtests/webtestreview'
                                    },
                                    {
                                        'id': 'webtestreview2',
                                        'title': 'Web Test Review 2',
                                        'type': 'item',
                                        'url': '/apps/webtests/webtestreview2'
                                    },
                
                                    {
                                        'id': 'hazardcheck',
                                        'title': 'Test Entry',
                                        'type': 'item',
                                        'url': '/apps/webtests/addtest'
                                    },
                
                                    //  {  'id'   : 'testentry',
                                    //          'title': 'Test Entry',
                                    //          'type' : 'item',
                                    //         'url'  : '/apps/webtests/testentry'
                                    //  },
                                    // {
                                    //     'id': 'review-unsubmittedtests',
                                    //     'title': 'Review Unsubmitted Test',
                                    //     'type': 'item',
                                    //     'url': '/apps/webtests/review-unsubmittedtests'
                                    // },
                                    {
                                        'id': 'review-submittedtests',
                                        'title': 'Submitted Test',
                                        'type': 'item',
                                        'url': '/apps/webtests/submittedtests'
                                    },
                
                                    // {
                                    //     'id': 'assigningappoinments',
                                    //     'title': 'Assigning Appointments',
                                    //     'type': 'item',
                                    //     'url': '/apps/webtests/assigningappointments'
                                    // },
                                    // {
                                    //     'id': 'pendingtest',
                                    //     'title': 'Pending Test',
                                    //     'type': 'item',
                                    //     'url': '/apps/webtests/pending-test'
                                    // },
                                ]
                            },
                
                        ]
                    }
                ];
            }
            var admin;
            if(localStorage.adminprivilages!=undefined)
            admin=JSON.parse(localStorage.adminprivilages);
            let navigationCopy = JSON.parse(JSON.stringify(this.navigation));
            if (admin) {
                for (var idx = 0; idx <= this.navigation[0].children.length - 1; idx++) {
                    if (this.navigation[0].children[idx].id == "dashboards") {
                        if (admin.Dashboard == false || admin.Dashboard == null || admin.Dashboard == undefined) {
                            // this.navigation[0].children.splice(idx, 1)
                            navigationCopy[0].children = navigationCopy[0].children.filter((child) => {
                                return child.id !== 'dashboards';
                            });
                        }
                    }
                    if (this.navigation[0].children[idx].id == "dashboardsanalytics") {
                        if (admin.Dashboard2 == false || admin.Dashboard2 == null || admin.Dashboard2 == undefined) {
                            // this.navigation[0].children.splice(idx, 1)
                            navigationCopy[0].children = navigationCopy[0].children.filter((child) => {
                                return child.id !== 'dashboardsanalytics';
                            });
                        }
                    }
                    if (this.navigation[0].children[idx].id == "advancedreports") {
                        if (admin.AdvanceReporting == false || admin.AdvanceReporting == null || admin.AdvanceReporting == undefined) {
                            // this.navigation[0].children.splice(idx, 1)
                            navigationCopy[0].children = navigationCopy[0].children.filter((child) => {
                                return child.id !== 'advancedreports';
                            });
                        }
                    }
                    if (this.navigation[0].children[idx].id == "admin") {
                        if (admin.Admin == false || admin.Admin == null || admin.Admin == undefined) {
                            // this.navigation[0].children.splice(idx, 1)
                            navigationCopy[0].children = navigationCopy[0].children.filter((child) => {
                                return child.id !== 'admin';
                            });
                        }
                    }
                    if (this.navigation[0].children[idx].id == "webtests") {
                        if (admin.WebTestEdit == false || admin.WebTestEdit == null || admin.WebTestEdit == undefined) {
                            // this.navigation[0].children.splice(idx, 1)
                            navigationCopy[0].children = navigationCopy[0].children.filter((child) => {
                                return child.id !== 'webtests';
                            });
                        }
                    }
                    if (this.navigation[0].children[idx].id == "letter") {
                        if (admin.Letters == false || admin.Letters == null || admin.Letters == undefined) {
                            // this.navigation[0].children.splice(idx, 1)
                            navigationCopy[0].children = navigationCopy[0].children.filter((child) => {
                                return child.id !== 'letter';
                            });
                        }
                    }
                    if (this.navigation[0].children[idx].id == "setup") {
                        if (admin.Setup == false || admin.Setup == null || admin.Setup == undefined ) {
                            // this.navigation[0].children.splice(idx, 1)
                            navigationCopy[0].children = navigationCopy[0].children.filter((child) => {
                                return child.id !== 'setup';
                            });
                        }
                        // if (!admin.SetupNotices && !admin.SetupFields) {
                        //     this.navigation[0].children.splice(idx, 1)
                        // } else {
                        //     if (!admin.SetupFields) {
                        //         const childArray = this.navigation[0].children.children;
                        //         const filteredChildren = childArray.filter(obj => obj.id !== 'fields');
                        //         this.navigation[0].children.children = filteredChildren;
                        //     } else if (!admin.SetupNotices) {
                        //         const childArray = this.navigation[0].children.children;
                        //         const filteredChildren = childArray.filter(obj =>
                        //             obj.id !== 'notice' && obj.id !== 'generatecustomnotice' && obj.id !== 'setupcustomnotice');
                        //         this.navigation[0].children.children = filteredChildren;
                        //     }
                        // }
                    }
                    if (this.navigation[0].children[idx].id == "technical") {
                        /** Create and Edit permissions are depends on View permission!!!. 
                        If uers doesn't have View permission sytem should not allow to edit or create even if
                        user has permission for create and edit **/

                        // if (!admin.CreateTechnicalInfo && !admin.ViewTechnicalInfo && !admin.EditTechnicalInfols) {
                        if (admin.ViewTechnicalInfo == false || admin.ViewTechnicalInfo == null || admin.ViewTechnicalInfo == undefined) {
                            // this.navigation[0].children.splice(idx, 1)
                            navigationCopy[0].children = navigationCopy[0].children.filter((child) => {
                                return child.id !== 'technical';
                            });
                        }
                    }
                    if (this.navigation[0].children[idx].id == "email") {
                        if (admin.Email == false || admin.Email == null || admin.Email == undefined ) {
                            // this.navigation[0].children.splice(idx, 1)
                            navigationCopy[0].children = navigationCopy[0].children.filter((child) => {
                                return child.id !== 'email';
                            });
                        }
                    }
                    if (this.navigation[0].children[idx].id == "sites") {
                        /** Create and Edit permissions are depends on View permission!!!. **/
                        if (admin.ViewSiteInfo == false || admin.ViewSiteInfo == null || admin.ViewSiteInfo == undefined) {
                            // this.navigation[0].children.splice(idx, 1)
                            navigationCopy[0].children = navigationCopy[0].children.filter((child) => {
                                return child.id !== 'sites';
                            });
                        }else if (admin.ViewSiteInfo == true){
                            if(admin.CreateSiteInfo == false || admin.CreateSiteInfo == null || admin.CreateSiteInfo == undefined){
                                navigationCopy[0].children.filter((child)=>{
                                    if(child.id=='sites'){
                                        child.children=child.children.filter((chi)=>{
                                            if(chi.id == 'SiteAddhazard')
                                            return chi.id !== 'SiteAddhazard';
                                            else if(chi.id == 'SiteAddtest')
                                            return chi.id !=='SiteAddtest';
                                            else if(chi.id == 'SiteImport')
                                            return chi.id !=='SiteImport';
                                            else 
                                            return chi;
                                        })
                                    }
                                });
                            }
                            
                        }
                    }
                }
            }
            this.navigation[0].children = navigationCopy[0].children;
        }
        // Default layout
        this.layout = 'vertical';
    }

    ngOnInit() {
        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    if (this.sidebarService.getSidebar('navbar')) {
                        this.sidebarService.getSidebar('navbar').close();
                    }
                }
            }
        );
    }

    ngOnDestroy() {
        if (this.fusePerfectScrollbarUpdateTimeout) {
            clearTimeout(this.fusePerfectScrollbarUpdateTimeout);
        }

        if (this.navigationServiceWatcher) {
            this.navigationServiceWatcher.unsubscribe();
        }
    }

    toggleSidebarOpened() {
        this.sidebarService.getSidebar('navbar').toggleOpen();
    }

    toggleSidebarFolded() {
        this.sidebarService.getSidebar('navbar').toggleFold();
    }
}
