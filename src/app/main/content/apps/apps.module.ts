
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseAngularMaterialModule } from '../components/angular-material/angular-material.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { SubmittedtestsComponent } from './webtests/submittedtests/submittedtests.component';
import { AuthGuard } from 'app/auth.guard';
import { AuthAdminGuard } from 'app/auth.guard';
import { AuthTesterGuard } from 'app/auth.guard';




const routes = [
    {
        path: 'site/summary',
        canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './site/summary/summary.module#SummaryModule'
    },
    {
        path: 'email/sendEmail',
        canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './email/email.module#EmailModule',
    },
    {
        path: 'adsearch',
        canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './adsearch/adsearch.module#AdsearchModule',
    },
    {
        path: 'email/sendList',
        canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './email-list/email-list.module#EmailListModule',
    },
    {
        path: 'academy/courses/courses',
        canActivate: [AuthGuard, AuthTesterGuard],
        loadChildren: './academy/academy.module#FuseAcademyModule'
    },

    {
        path: 'webtests/pending-test',
        canActivate: [AuthGuard],
        loadChildren: './webtests/pendingtest/pendingtest.module#PendingtestModule'
    },
    {
        path: 'webtests/Webtesterguide',
        canActivate: [AuthGuard, AuthTesterGuard],
        loadChildren: './webtests/webtesterguide/webtesterguide.module#WebtesterguideModule'
    },
    {
        path: 'webtests/Instructions',
        canActivate: [AuthGuard, AuthTesterGuard],
        loadChildren: './webtests/instructions/instructions.module#InstructionsModule'
    },
    {
        path: 'webtests/addtest',
        canActivate: [AuthGuard],
        loadChildren: './webtests/hazardcheck/hazardcheck.module#HazardcheckModule'
    },
    {
        path: 'webtests/card',
        canActivate: [AuthGuard],
        loadChildren: './webtests/card/card.module#CardModule'
    },
    {
        path: 'webtests/testverification',
        canActivate: [AuthGuard],
        loadChildren: './webtests/verifyhazard/verifyhazard.module#VerifyhazardModule'
    },
    {
        path: 'webtests/images',
        canActivate: [AuthGuard],
        loadChildren: './webtests/image-gallery/image-gallery.module#ImageGalleryModule'
    },
    {
        path: 'webtests/testentry',
        canActivate: [AuthGuard],
        loadChildren: './webtests/testentry/testentry.module#TestentryModule'
    },
    {
        path: 'webtests/review-unsubmittedtests',
        canActivate: [AuthGuard, AuthTesterGuard],
        loadChildren: './webtests/review-unsubmittedtests/review-unsubmittedtests.module#ReviewUnsubmittedtestsModule'
    },
    {
        path: 'webtests/submittedtests',
        canActivate: [AuthGuard],
        loadChildren: './webtests/submittedtests/submittedtests.module#SubmittedtestsModule'
    },
    {
        path: 'letter/editletter',
        canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './letter/editletter/editletter.module#EditletterModule'
    },
    {
        path: 'webtests/assigningappointments',
        canActivate: [AuthGuard],
        loadChildren: './webtests/assigningappoinments/assigningappoinments.module#AssigningappoinmentsModule'
    },
    {
        path: 'webtests/websetupcreate',
        canActivate: [AuthGuard],
        loadChildren: './webtests/webtestsetup/websetupcreate/websetupcreate.module#WebsetupcreateModule'
    },
    {
        path: 'webtests/techniciansetupcreate',
        canActivate: [AuthGuard],
        loadChildren: './webtests/techniciansetup/techniciancreate/techniciancreate.module#TechniciancreateModule'
    },

    {
        path: 'webtests/webtestreview',
        canActivate: [AuthGuard],
        loadChildren: './webtests/webtestsetup/webtestreview/webtestreview.module#WebtestreviewModule'
    },
    {
        path: 'settings/mailmerge',
        canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './settings/mailmerge/mailmerge.module#MailmergeModule'
    },
    {
        path: 'webtests/webtestreview2',
        canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './webtests/webtestsetup/webtestreview2/webtestreview2.module#Webtestreview2Module'
    },
    {
        path: 'settings/notice',
        canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './settings/managenotice/managenotice.module#ManageNoticeModule'
    },
    {
        path: 'settings/export',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './settings/export/export.module#ExportModule'
    },
    {
        path: 'settings/generatecustomnotice',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './settings/generatecustomnotice/generatecustomnotice.module#GeneratecustomnoticeModule'
    },
    {
        path: 'settings/setupcustomnotice',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './settings/setupcustomnotice/setupcustomnotice.module#SetupcustomnoticeModule'
    },
    {
        path: 'settings/fields',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './settings/managefields/managefields.module#ManagefieldsModule'
    },
    {
        path: 'admin1',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'settings/createuser',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './settings/create-user/create-user.module#CreateUserModule'
    },
    {
        path: 'settings/edituser',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './settings/edit-user/edit-user.module#EditUserModule'
    },
    {
        path: 'site/sitelist',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './site/sitelist/sitelist.module#SitelistModule'
    },
    {
        path: 'hazard/hazardview',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './hazard/hazardview/hazardview.module#HazardviewModule'
    },
    {
        path: 'test/testview',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './test/testview/testview.module#TestviewModule'
    },
    {
        path: 'sites/sitesummary',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './site/sitesummary/sitesummary.module#SitesummaryModule'
    },
    {
        path: 'site/siteimport',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './site/siteimport/siteimport.module#SiteimportModule'
    },
    {
        path: 'site/sitesearch',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './site/sitesearch/sitesearch.module#SitesearchModule'
    },
    {
        path: 'site/siteaddhazard',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './site/siteaddhazard/siteaddhazard.module#SiteaddhazardModule'
    },
    {
        path: 'site/siteaddtest',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './webtests/hazardcheck/hazardcheck.module#HazardcheckModule'
        // loadChildren: './site/siteaddtest/siteaddtest.module#SiteaddtestModule'
    },
    {
        path: 'site/create',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './site/site-create/site-create.module#SiteCreateModule'
    },
    {
        path: 'hazard/create',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './hazard/hazard/hazard.module#HazardModule'
    },
    {
        path: 'test/create',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './test/test/test.module#TestModule'
    },
    {
        path: 'privacypolicy',canActivate: [AuthGuard],
        loadChildren: './privacypolicy/privacypolicy.module#PrivacypolicyModule'
    },
    {
        path: 'letter',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './letter/letter.module#LetterModule'
    },
    {
        path: 'report',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './report/report.module#ReportModule'
    },
    {
        path: 'sendnotice',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './report/sendnotice/sendnotice.module#SendnoticeModule'
    },
    {
        path: 'export/create',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './report/export/export.module#ExportModule'
    },
    {
        path: 'export/edit',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './report/export/exportedit/exportedit.module#ExporteditModule'
    },
    {
        path: 'technical',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './technical/technical.module#TechnicalModule'
    },
    {
        path: 'technicals/create',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './technical/technical-create/technical-create.module#TechnicalCreateModule'
    },
    {
        path: 'technician/create',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './technical/technician-createnew/technician-create.module#TechnicianCreateModule'
    },
    {
        path: 'technicialcompany/create',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './technical/company-createnew/company-create.module#CompanyCreateModule'
    },
    {
        path: 'testkit/create',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './technical/testkit-create/testkit-create.module#TestkitCreateModule'
    },
    {
        path: 'technicals/details',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './technical/technical-details/technical-details.module#TechnicalDetailsModule'
    },
    {
        path: 'technician/details',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './technical/technician-details/technician-details.module#TechnicianDetailsModule'
    },
    {
        path: 'technicialcompany/details',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './technical/company-details/company-details.module#CompanyDetailsModule'
    },
    {
        path: 'testkit/details',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './technical/testkit-details/testkit-details.module#TestkitDetailsModule'
    },
    {
        path: 'technician/changepassword',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './technical/change-technican-password/change-technican-password.module#ChangeTechnicanPasswordModule'
    },
    {
        path: 'site',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './site/site.module#SiteModule'
    },
    {
        path: 'dashboards/analytics',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './dashboards/analytics/analytics.module#FuseAnalyticsDashboardModule'
    },
    {
        path: 'dashboards/project',
        canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './dashboards/project/project.module#FuseProjectDashboardModule'
    },
    {
        path: 'mail',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './mail/mail.module#FuseMailModule'
    },
    {
        path: 'mail-ngrx',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './mail-ngrx/mail.module#FuseMailNgrxModule'
    },
    {
        path: 'chat',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './chat/chat.module#FuseChatModule'
    },
    {
        path: 'calendar',canActivate: [AuthGuard],
        loadChildren: './calendar/calendar.module#FuseCalendarModule'
    },
    {
        path: 'e-commerce',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './e-commerce/e-commerce.module#FuseEcommerceModule'
    },
    {
        path: 'academy',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './academy/academy.module#FuseAcademyModule'
    },
    {
        path: 'todo',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './todo/todo.module#FuseTodoModule'
    },
    {
        path: 'file-manager',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './file-manager/file-manager.module#FuseFileManagerModule'
    },
    {
        path: 'contacts',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './contacts/contacts.module#FuseContactsModule'
    },
    {
        path: 'scrumboard',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './scrumboard/scrumboard.module#FuseScrumboardModule'
    }, {
        path: 'sitesummary',canActivate: [AuthGuard, AuthAdminGuard],
        loadChildren: './site/sitesummary/sitesummary.module#SitesummaryModule'
    }
];

@NgModule({
    imports: [
        FuseSharedModule,
        RouterModule.forChild(routes),
        FuseAngularMaterialModule
    ],
    providers: [AuthGuard],
    declarations: []
})
export class FuseAppsModule {
} 
