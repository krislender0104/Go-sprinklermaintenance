import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';
import { FuseMainModule } from './main/main.module';
import { AppStoreModule } from './store/store.module';
//import {ToastModule} from 'ng2-toastr/ng2-toastr';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import {ToastModule} from 'ng6-toastr/ng2-toastr';
import { ToastrModule } from 'ngx-toastr';
import { ToastNotificationClientModule, ToastNotificationCoreModule } from "ngx-toast-notifications";
import { AuthGuard } from 'app/auth.guard';
import { AuthAdminGuard } from 'app/auth.guard';
import { AuthTesterGuard } from 'app/auth.guard';

const appRoutes: Routes = [
    {
        path: 'apps',
        //canActivate: [AuthGuard],
        loadChildren: './main/content/apps/apps.module#FuseAppsModule'
    },
    {
        path: 'pages',
        //canActivate: [AuthGuard],
        loadChildren: './main/content/pages/pages.module#FusePagesModule'
    },
    {
        path: 'ui',
        loadChildren: './main/content/ui/ui.module#FuseUIModule'
    },
    {
        path: 'services',
        loadChildren: './main/content/services/services.module#FuseServicesModule'
    },
    {
        path: 'components',
        loadChildren: './main/content/components/components.module#FuseComponentsModule'
    },
    {
        path: 'components-third-party',
        loadChildren: './main/content/components-third-party/components-third-party.module#FuseComponentsThirdPartyModule'
    },
    {
        path: 'admin',
        loadChildren: './main/content/admin/admin.module#AdminModule'
    },
    {
        path: '**',
        // redirectTo: 'apps/dashboards/analytics'
        redirectTo: 'pages/auth/login'
    },


];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        //   BrowserModule, ToastModule.forRoot(),
        ToastNotificationCoreModule.forRoot({ lifetime: 6000 }),
        ToastNotificationClientModule,
        BrowserModule,
        // ToastrModule.forRoot({ timeOut: 10000,
        //     positionClass: 'toast-bottom-right',
        //     preventDuplicates: true,}) ,
        BrowserAnimationsModule,
        HttpClientModule,
        //RouterModule.forRoot(appRoutes),
        //Add app routes,useHash when deploy in server
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FuseFakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,

        AppStoreModule,
        FuseMainModule
    ],
    providers: [
        {
            provide: LocationStrategy, useClass: HashLocationStrategy
        },AuthGuard, AuthAdminGuard, AuthTesterGuard
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
