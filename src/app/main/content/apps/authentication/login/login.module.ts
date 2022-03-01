import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
export const FUSE_CONFIG = new InjectionToken('fuseCustomConfig');

const routes: Routes = [
  {
      path     : '**',
      component: LoginComponent
  }
];
//D:\angular6_tokay\Tokay\src\app
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //RouterModule.forRoot(routes),
    //CommonModule.forRoot(fuseConfiglogin),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    
    FuseSharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule
{
    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : LoginModule,
            providers: [
                {
                    provide : FUSE_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}