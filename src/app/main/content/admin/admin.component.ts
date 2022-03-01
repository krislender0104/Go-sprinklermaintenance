
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AdminService } from 'app/main/content/admin/admin.service';
import { Subscription } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: fuseAnimations
})
export class AdminComponent implements OnInit {
  deviceInfo = null;
  siteSubscription: Subscription;
  loginForm: FormGroup;
  loginFormErrors: any;
  error: any;
  isSubmitting: boolean = false;
  constructor(private fuseConfig: FuseConfigService, private formBuilder: FormBuilder, private deviceService: DeviceDetectorService,
    private router: Router,
    private loginservice: AdminService, ) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.fuseConfig.setConfig({
      layout: {
        navigation: 'none',
        toolbar: 'none',
        footer: 'none'
      }
    });
    this.loginFormErrors = {
      email: {},
      password: {}
    };
  }
  message: string;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
  }
  onLoginFormValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }

  btnLogIn() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.isSubmitting = true;
    let jsonString = JSON.parse(JSON.stringify(this.loginForm.value));
    this.loginservice.authenticate(jsonString).subscribe(
      user => {
        if (user.length > 0) {
          localStorage.clear();
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('accessToken', user[1]);
          var userid = user[0].UserID;
          this.loginservice.getAdminprivilages(userid).subscribe(useraccess => {
            localStorage.setItem('adminprivilages', JSON.stringify(useraccess["userDetails"][0]));
            
            localStorage.setItem('dataprivilages', JSON.stringify(useraccess["userDataSet"]));
            
            var currentUser = JSON.parse(localStorage.currentUser)[0];
            if (currentUser.WebTestTester) {
              this.router.navigate(['/apps/webtests/Webtesterguide']);
            }
            else {
              if (useraccess["userDetails"][0].Dashboard) {
                this.router.navigate(['/apps/dashboards/project']);
              } else if (useraccess["userDetails"][0].Dashboard2) {
                this.router.navigate(['/apps/dashboards/analytics']);
              } else if (useraccess["userDetails"][0].ViewSiteInfo) {
                this.router.navigate(['/apps/site/sitelist']);
              } else if (useraccess["userDetails"][0].AdvanceReporting) {
                this.router.navigate(['/apps/report']);
              } else if (useraccess["userDetails"][0].ViewTechnicalInfo) {
                this.router.navigate(['/apps/technical']);
              } else if (useraccess["userDetails"][0].Letters) {
                this.router.navigate(['/apps/letter']);
              } else if (useraccess["userDetails"][0].Admin) {
                this.router.navigate(['/apps/contacts']);
              } else if (useraccess["userDetails"][0].Setup) {
                this.router.navigate(['/apps/settings/notice']);
              } else {
                console.log('No permissions!!');
              }
            }
          });
        }
        else {
          this.error = 'Username or Password is incorrect';
          this.isSubmitting = false;
        }
      },
      err => {
        this.error = 'Username or Password is incorrect';
        console.log(err);
        this.isSubmitting = false;
      }
    );
  }

  policyNavigation() {
    console.log("navigating");
  }
}
