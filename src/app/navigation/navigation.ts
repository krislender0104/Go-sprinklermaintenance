export const navigations = [
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
export const testnavigation = [
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
            'id': 'instruction',
            'title': 'Instructions',
            'type': 'item',
            'icon': 'list_alt',
            'url': '/apps/webtests/Webtesterguide'
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