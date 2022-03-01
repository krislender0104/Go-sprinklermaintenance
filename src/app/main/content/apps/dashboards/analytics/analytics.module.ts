import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatAutocompleteModule,MatInputModule,MatDialogModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule,MatCardModule, MatSelectModule, MatTabsModule } from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { FuseAnalyticsDashboardComponent } from './analytics.component';
import { AnalyticsDashboardService } from './analytics.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertpopupComponent } from './alertpopup/alertpopup.component';
import { AgmMarkerSpiderModule } from 'agm-oms';

const routes: Routes = [
    {
        path     : '**',
        component: FuseAnalyticsDashboardComponent,
        resolve  : {
            data: AnalyticsDashboardService
        }
    }
];

@NgModule({
    declarations: [
        FuseAnalyticsDashboardComponent,
        AlertpopupComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        NgxSpinnerModule,
        MatAutocompleteModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTabsModule,
        MatCardModule,
        MatDividerModule,
        AgmJsMarkerClustererModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBhDFV2aHjt3TCuquYVugJnDwVHGwvmk7c'
        }),
        AgmMarkerSpiderModule,
        ChartsModule,
        NgxChartsModule,
        NgxPaginationModule,
        FuseSharedModule,
        FuseWidgetModule,
        MatDialogModule
    ],  entryComponents: [
        AlertpopupComponent
      ],
    providers   : [
        AnalyticsDashboardService
    ]
})
export class FuseAnalyticsDashboardModule
{
}

