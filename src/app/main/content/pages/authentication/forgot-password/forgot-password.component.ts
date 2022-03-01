import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
    selector: 'fuse-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    animations: fuseAnimations
})
export class FuseForgotPasswordComponent implements OnInit {
    forgotPasswordForm: FormGroup;
    forgotPasswordFormErrors: any;
    emailVerificationResponse: any = 'string';
    isSubmiting: boolean = false;

    constructor(
        private fuseConfig: FuseConfigService,
        private formBuilder: FormBuilder,
        private forgotPassService: ForgotPasswordService
    ) {
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });

        this.forgotPasswordFormErrors = {
            email: {}
        };
    }

    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });

        this.forgotPasswordForm.valueChanges.subscribe(() => {
            this.onForgotPasswordFormValuesChanged();
        });
    }

    onForgotPasswordFormValuesChanged() {
        for (const field in this.forgotPasswordFormErrors) {
            if (!this.forgotPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }

            // Clear previous errors
            this.forgotPasswordFormErrors[field] = {};

            // Get the control
            const control = this.forgotPasswordForm.get(field);

            if (control && control.dirty && !control.valid) {
                this.forgotPasswordFormErrors[field] = control.errors;
            }
        }
    }

    verifyEmailAndSendLink() {
        if (this.forgotPasswordForm.controls['email'].valid) {
            this.isSubmiting = true;
            this.emailVerificationResponse = 'string';
            const email = this.forgotPasswordForm.controls['email'].value;
            this.forgotPassService.authenticateEmailAndSendLink(email).subscribe((res) => {
                this.emailVerificationResponse = res;
                if (this.emailVerificationResponse === true) {
                    this.isSubmiting = true; 
                    this.forgotPasswordForm.reset();  
                }else{
                    this.isSubmiting = false; 
                }

            });
        }
    }
}
