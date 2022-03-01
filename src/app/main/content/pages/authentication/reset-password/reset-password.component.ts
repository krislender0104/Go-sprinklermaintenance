import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Params } from '@angular/router';
import { ResetPasswordService } from './reset-password-service';

@Component({
    selector: 'fuse-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss'],
    animations: fuseAnimations
})
export class FuseResetPasswordComponent implements OnInit {
    resetPasswordForm: FormGroup;
    linkValid: boolean = false;
    tokenValidationResponse: any;
    isSubmitting: boolean = false;
    resetPasswordResponse: any = '';

    constructor(private fuseConfig: FuseConfigService, private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute, private resetPasswordService: ResetPasswordService) {

        // subscribe to router event
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            let token = params['token'];
            this.resetPasswordService.authenticateToken(token).subscribe((res) => {
                console.log(res);
                this.tokenValidationResponse = res;
                this.createRestForm();
            });
        });

        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
    }

    ngOnInit() {

    }
    createRestForm() {
        this.resetPasswordForm = new FormGroup({
            email: new FormControl('', { validators: [Validators.required, Validators.email] }),
            password: new FormControl('', { validators: [Validators.required] }),
            passwordConfirm: new FormControl('', { validators: [Validators.required, confirmPassword] })
        });

        if (this.tokenValidationResponse.status) {
            this.resetPasswordForm.get('email').setValue(this.tokenValidationResponse['email']);
            this.resetPasswordForm.get('email').updateValueAndValidity({ onlySelf: true });
        }
    }
    resetPassword() {
        if (this.resetPasswordForm.valid) {
            this.isSubmitting = true;
            const userEmail = this.resetPasswordForm.controls['email'].value;
            const newPass = this.resetPasswordForm.controls['password'].value;
            console.log(userEmail, newPass);
            this.resetPasswordService.resetPassword(userEmail, newPass).subscribe((res) => {
                this.resetPasswordResponse = res;
            });
        }
    }
}

function confirmPassword(control: AbstractControl) {
    if (!control.parent || !control) {
        return;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if (!password || !passwordConfirm) {
        return;
    }

    if (passwordConfirm.value === '') {
        return;
    }

    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}
