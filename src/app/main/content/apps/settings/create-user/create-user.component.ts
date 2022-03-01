import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CreateUserService } from './create-user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { ToastNotifications } from 'ngx-toast-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  createform: FormGroup;
  datasets: any;
  roles: any;
  newuser: any;
  user: any;
  constructor(private createuserservice: CreateUserService,
    private toasts: ToastNotifications, private router: Router) {
    this.datasets = this.createuserservice.datasets;
    if(this.datasets.length>0){
      this.datasets = this.datasets.filter(order => order.clientId !== 0);  
    }
    this.roles = this.createuserservice.roles;
    console.log(this.roles);
    this.user = {
      "SysAdmin": "",
      "setupFields": ""
    }

    this.createform = new FormGroup({
      logon: new FormControl(),
      uID: new FormControl(),
      fullName: new FormControl(),
      notes: new FormControl(),
      initials: new FormControl(),
      fullname: new FormControl(),
      disabled: new FormControl(),
      usertype: new FormControl(),
      nameduser: new FormControl(),
      floatinguser: new FormControl(),
      roles: new FormControl(),
      accessAll: new FormControl(),
      modifyAll: new FormControl(),
      datasets: new FormControl(),
      sysAdmin: new FormControl(),
      advanceReporting: new FormControl(),
      CreateSite: new FormControl(),
      CreateTechnician: new FormControl(),
      letters: new FormControl(),
      admin: new FormControl(),
      email: new FormControl(),
      setup: new FormControl(),
      // setupLetters: new FormControl(),
      EditSite: new FormControl(),
      EditTechnician: new FormControl(),
      WebTestAccess: new FormControl(),
      customizeGrids: new FormControl(),
      // setupNotices: new FormControl(),
      ViewSite: new FormControl(),
      ViewTechnician: new FormControl(),
     //WebTestView: new FormControl(),
      dashboard: new FormControl(),
      dashboard2: new FormControl(),
      password: new FormControl(),
      dateStamp: new FormControl(new Date()),
      licenseType: new FormControl(),
      createSiteInfo: new FormControl(),
      editSiteInfo: new FormControl(),
      viewSiteInfo: new FormControl(),
      viewTechnicalInfo: new FormControl(),
      editTechnicalInfo: new FormControl(),
      createTechnicalInfo: new FormControl(),
      WebTestEdit: new FormControl(),
      WebTestTester: new FormControl(),
      Dataset: new FormControl()
    });
  }
  CreateUser() {
    let jsonString = JSON.parse(JSON.stringify(this.createform.value));
    //this.newuser=  this.createuserservice.CreateUser(jsonString);
    let dataprivilages = JSON.parse(JSON.stringify(this.datasets));
    if(this.user.AccessAll==true && this.user.ModifyAll==true){
      var obj={
        "clientId": 0,
      "ClientName": "_ALL_",
      "a_checkedOrUnchecked": true,
      "m_checkedOrUnchecked": true
      }
      dataprivilages.push(obj);
    }else if(this.user.AccessAll==true && this.user.ModifyAll==false){
      var obj={
        "clientId": 0,
      "ClientName": "_ALL_",
      "a_checkedOrUnchecked": true,
      "m_checkedOrUnchecked": false
      }
      dataprivilages.push(obj);
    }else if(this.user.AccessAll==false && this.user.ModifyAll==false){
      var obj={
        "clientId": 0,
      "ClientName": "_ALL_",
      "a_checkedOrUnchecked": false,
      "m_checkedOrUnchecked": false
      }
      dataprivilages.push(obj);
    }
    jsonString.password = "tokaytest";//default password
    //jsonString.roles=dataprivilages;
    //  this.createuserservice.CreateUserInRoles(this.newuser.userId,dataprivilages);
    console.log(dataprivilages);
    this.createuserservice.CreateUser(jsonString, dataprivilages).subscribe(data => {
      if(data.status) {
        this.toasts.next({ text: 'User Created', type: 'success' });
        this.router.navigate(['apps/contacts']);
      } else {
        this.toasts.next({ text: 'Error', type: 'danger' });
      }
    });
  }

  AdminPrivilageCheckAll($event) {
    //  alert($event.checked);

    this.user.SysAdmin = $event.checked;
    this.user.AdvanceReporting = $event.checked;
    this.user.Setup = $event.checked;
    this.user.CustomizeGrids = $event.checked;
    // this.user.SetupLetters = $event.checked;
    // this.user.SetupNotices = $event.checked;
    this.user.CreateSiteInfo = $event.checked;
    this.user.EditSiteInfo = $event.checked;
    this.user.ViewSiteInfo = $event.checked;
    this.user.ViewTechnicalInfo = $event.checked;
    this.user.EditTechnicalInfo = $event.checked;
    this.user.CreateTechnicalInfo = $event.checked;
    this.user.WebTestEdit = $event.checked;
    this.user.Letters = $event.checked;
    this.user.Dashboard = $event.checked;
    this.user.Dashboard2 = $event.checked;
    this.user.WebTestTester = $event.checked;
    this.user.Admin = $event.checked;
    this.user.Email = $event.checked;
    this.user.Dataset = $event.checked;
    this.onPrivilegesChange();

  }
  valueChangeDatasetAccess(datasets, unit, $event, index) {
    if (unit.clientId == 0) {
      this.DataAccessCheckAll($event);
    }
    else {
      if ($event.checked == true) {
        datasets[index].a_checkedOrUnchecked = 1
      }
      else {
        datasets[index].a_checkedOrUnchecked = 0;
        //datasets[0].a_checkedOrUnchecked=0;
        this.valueChangeDatasetModify(datasets, unit, $event, index)//removing modify check if selected
      }
    }
    this.Checkall(datasets);
    this.allCheckBox(datasets);
  }
  Checkall(datasets){
    let accessCount = 0;
    datasets.forEach(element => {
      if (element.a_checkedOrUnchecked === 1 || element.a_checkedOrUnchecked === true) {
        accessCount++;
      }

    });
    if (datasets.length === accessCount) {
      if (this.user) {
        this.user.AccessAll = true;
      }
    } else {
      if (this.user) {
        var x = datasets.length -1;
        if(x === accessCount){
          datasets.forEach(element => {
            if(element.ClientName=='ALL' && element.a_checkedOrUnchecked == 0){
              element.a_checkedOrUnchecked = 1;
            }else if(element.ClientName=='ALL' && element.a_checkedOrUnchecked == 1){
              element.a_checkedOrUnchecked = 0
            }
          });
        }else{
          datasets.forEach(element => {
            if(element.ClientName=='ALL'){
              element.a_checkedOrUnchecked = 0;
            }
          });
        }
        this.user.AccessAll = false;
        this.user.ModifyAll = false;
      }
    }
  }
  valueChangeDatasetModify(datasets, unit, $event, index) {
    if (unit.clientId == 0) {
      this.DataModifyCheckAll($event);
    }
    else {
      if ($event.checked == true) {
        datasets[index].m_checkedOrUnchecked = 1
        this.valueChangeDatasetAccess(datasets, unit, $event, index)
      }
      else {
        datasets[index].m_checkedOrUnchecked = 0
      }
    }
    this.allCheckBox(datasets);
  }
  allCheckBox(datasets) {
    let accessCount = 0;
    let modifyCount = 0;
    datasets.forEach(element => {
      if (element.m_checkedOrUnchecked === 1 || element.m_checkedOrUnchecked === true) {
        modifyCount++;
      }
      if (element.a_checkedOrUnchecked === 1 || element.a_checkedOrUnchecked === true) {
        accessCount++;
      }

    });
    // if(modifyCount === 0){
    //   this.user.ModifyAll = false;
    // }
    // if(accessCount === 0){
    //   this.user.AccessAll = false;
    //   this.user.ModifyAll = false;
    // }
    if (datasets.length === accessCount) {
      if (this.user) {
        this.user.AccessAll = true;
      }
    } else {
      if (this.user) {
        this.user.AccessAll = false;
        this.user.ModifyAll = false;
      }
    }
    if (datasets.length === modifyCount) {
      if (this.user) {
        this.user.ModifyAll = true;
      }
    } else {
      if (this.user) {
        this.user.ModifyAll = false;
      }
    }
  }
  DataAccessCheckAll($event) {
    for (var idx = 0; idx <= this.datasets.length - 1; idx++) {
      this.datasets[idx].a_checkedOrUnchecked = $event.checked;
    }
    //unchecking all modify when access check all is removed
    if (!$event.checked) {
      this.DataModifyCheckAll($event);
      this.user.ModifyAll = false;
    }
  }
  DataModifyCheckAll($event) {
    for (var idx = 0; idx <= this.datasets.length - 1; idx++) {
      this.datasets[idx].m_checkedOrUnchecked = $event.checked;
    }
    if ($event.checked) {
    this.DataAccessCheckAll($event);
    this.user.AccessAll = true;
    }
  }

  // DataAccessCheckAll($event) {
  //   for (var idx = 0; idx <= this.datasets.length - 1; idx++) {
  //     this.datasets[idx].a_checkedOrUnchecked = $event.checked;
  //   }
  // }
  // DataModifyCheckAll($event) {
  //   for (var idx = 0; idx <= this.datasets.length - 1; idx++) {
  //     this.datasets[idx].m_checkedOrUnchecked = $event.checked;
  //   }
  //   this.DataAccessCheckAll($event);
  //   this.user.AccessAll = true;
  // }
  // valueChangeDatasetAccess(datasets, unit, $event, index) {
  //   {
  //     if($event.checked == true){
  //       datasets[index].a_checkedOrUnchecked = 1
  //     }else{
  //       datasets[index].a_checkedOrUnchecked = 0
  //       datasets[index].m_checkedOrUnchecked = 0
  //     }
      
  //   }
  // }
  // valueChangeDatasetModify(datasets, unit, $event, index) {
  //   //set the two-way binding here for the specific unit with the event
  //   //datasets[unit].checked = $event.checked;
  //   if ($event.checked == true) {
  //     datasets[index].m_checkedOrUnchecked = 1
  //     datasets[index].a_checkedOrUnchecked = 1
  //   }
  //   else {
  //     datasets[index].m_checkedOrUnchecked = 0
  //   }
  // }
  
  onPrivilegesChange() {
    const val = this.user;
    if (val.Dashboard || val.Dashboard2 || val.WebTestEdit || val.Letters || val.ViewTechnicalInfo ||
      val.EditTechnicalInfo || val.CreateTechnicalInfo || val.ViewSiteInfo ||
      val.EditSiteInfo || val.CreateSiteInfo || val.Setup || val.AdvanceReporting
      || val.SysAdmin || val.Admin || val.Email) {
      this.user.WebTestTester = false;
      this.createform.controls['WebTestTester'].disable();
    } else {
      this.createform.controls['WebTestTester'].enable();
    }
  }
  ngOnInit() {

  }
}