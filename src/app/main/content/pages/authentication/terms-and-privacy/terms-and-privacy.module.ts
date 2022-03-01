import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { TermsAndPrivacyComponent } from './terms-and-privacy.component';

const routes = [
    {
        path     : 'auth/terms-policy',
        component: TermsAndPrivacyComponent
    }
];

@NgModule({
    declarations: [
        TermsAndPrivacyComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        FuseSharedModule
    ]
})
export class TermsAndPrivacyModule
{
}
