import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ChangeTechnicanPasswordService } from './change-technican-password.service';
import { ToastNotifications } from 'ngx-toast-notifications';
import { ErrorStateMatcher } from '@angular/material';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-change-technican-password',
  templateUrl: './change-technican-password.component.html',
  styleUrls: ['./change-technican-password.component.scss']
})
export class ChangeTechnicanPasswordComponent implements OnInit {
  technicanId: any;
  resetform: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private changepasswordservice: ChangeTechnicanPasswordService, private toasts: ToastNotifications) {
    this.technicanId = route.snapshot.url[0].path;
    this.resetform = this.formBuilder.group({
      id: new FormControl(),
      newpassword: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required)
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.newpassword.value;
    let confirmPass = group.controls.confirmpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  resetpassword() {
    let jsonString = JSON.parse(JSON.stringify(this.resetform.value));
    jsonString.id = this.technicanId;
    this.changepasswordservice.changePasswordforTechnican(jsonString).subscribe(data => {
      if (data.status === true) {
        this.toasts.next({ text: data.message, type: 'success' });
        this.router.navigate(['apps/technical']);
      } else {
        this.toasts.next({ text: data.message, type: 'danger' });
      }
    }, err => {
      console.log(err);
      this.toasts.next({ text: 'Password not updated.', type: 'danger' });
    })
  }

  redirect() {
    this.router.navigate(['apps/technical']);
  }
  ngOnInit() {
  }

}
