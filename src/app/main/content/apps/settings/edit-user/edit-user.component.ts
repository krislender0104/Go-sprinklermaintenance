import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { EditUserService } from './edit-user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';
import { AdminService } from 'app/main/content/admin/admin.service';
// import { EditUserService } from './edit-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  updateform: FormGroup;
  datasets: any;
  roles: any;
  edituser: any;
  userId: any;
  user: any;
  olduserdata:any;
  userdatasets: any;
  constructor(private edituserservice: EditUserService,private loginservice: AdminService,
    private router: Router, private route: ActivatedRoute, private toasts: ToastNotifications) {
    // this.datasets = this.edituserservice.datasets;
    // this.roles = this.edituserservice.roles;
    this.updateform = new FormGroup({
      UserID: new FormControl(),
      logon: new FormControl(''),
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
      //WebTestAccess: new FormControl(),
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
      webTestEdit: new FormControl(),
      WebTestTester: new FormControl(),
      Dataset: new FormControl()
    });
    this.userId = route.snapshot.url[0].path;
    this.edituserservice.getUser(this.userId).then(data => {
      this.user = data[0];
    });

    this.edituserservice.getDataSets().then(data => {
      this.datasets = data;
      
      this.edituserservice.getUserDataSet(this.userId).then(data => {

        this.userdatasets = data;
        if (this.userdatasets.length != 0) this.allCheckBox(this.userdatasets);
        else {
          this.user.accessAll = false;
          this.user.modifyAll = false;
        }
        if (this.datasets.length > 0) {
          this.datasets = this.datasets.filter(order => order.clientId !== 0);
        }
        if (this.datasets.length > 0 && this.userdatasets.length > 0) {
          for (var idx = 0; idx <= this.datasets.length - 1; idx++) {
            var clientId = this.datasets[idx].clientId;
            var user = this.userdatasets.filter(u => u.DataSetID == clientId);
            if (user.length > 0) {
              this.datasets[idx].a_checkedOrUnchecked = user[0].a_checkedOrUnchecked;
              this.datasets[idx].m_checkedOrUnchecked = user[0].m_checkedOrUnchecked;
              if (this.datasets[idx].a_checkedOrUnchecked == false) {
                this.datasets[idx].a_checkedOrUnchecked = 0;
              }
              if (this.datasets[idx].m_checkedOrUnchecked == false) {
                this.datasets[idx].m_checkedOrUnchecked = 0;
              }
              if (this.datasets[idx].a_checkedOrUnchecked == true) {
                this.datasets[idx].a_checkedOrUnchecked = 1;
              }
              if (this.datasets[idx].m_checkedOrUnchecked == true) {
                this.datasets[idx].m_checkedOrUnchecked = 1;
              }
            }

          }
        }
      });
      //this.allCheckBox(this.datasets);
      this.onPrivilegesChange();
    });
  }

  EditUser() {
    this.updateform.value.UserID = this.userId;
    let jsonString = JSON.parse(JSON.stringify(this.updateform.value));
    let dataprivilages = JSON.parse(JSON.stringify(this.datasets));
    
    var obj = {
      "clientId": 0,
      "ClientName": "_ALL_",
      "a_checkedOrUnchecked": jsonString.accessAll,
      "m_checkedOrUnchecked": jsonString.modifyAll
    }
    dataprivilages.push(obj);
 
    // this.edituser = this.edituserservice.UpdateUser(jsonString, dataprivilages);
    this.edituserservice.UpdateUser(jsonString, dataprivilages).subscribe(data => {
      if (data.status) {
        this.olduserdata=JSON.parse(localStorage.getItem('currentUser'));
        this.loginservice.getAdminprivilages(this.olduserdata[0].UserID).subscribe(useraccess => {
          localStorage.removeItem('adminprivilages');
          localStorage.removeItem('dataprivilages');
          localStorage.setItem('adminprivilages', JSON.stringify(useraccess["userDetails"][0]));
          //store data privilages
          localStorage.setItem('dataprivilages', JSON.stringify(useraccess["userDataSet"]));
        });
        this.toasts.next({ text: 'User updated', type: 'success' });
        this.router.navigate(['apps/contacts']);
      } else {
        this.toasts.next({ text: 'Error', type: 'danger' });
      }
    });
  }
  valueChangeDatasetAccess(datasets, unit, $event, index) {
    if (unit.clientId == 0) {
      this.DataAccessCheckAll($event);
    }
    else {
      if ($event.checked == true) {
        datasets[index].a_checkedOrUnchecked = 1
        // check all records selected

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

  Checkall(datasets) {
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
        var x = datasets.length - 1;
        if (x === accessCount) {
          datasets.forEach(element => {
            if (element.ClientName == 'ALL' && element.a_checkedOrUnchecked == 0) {
              element.a_checkedOrUnchecked = 1;
            } else if (element.ClientName == 'ALL' && element.a_checkedOrUnchecked == 1) {
              element.a_checkedOrUnchecked = 0
            }
          });
        } else {
          datasets.forEach(element => {
            if (element.ClientName == 'ALL') {
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
        //datasets[0].m_checkedOrUnchecked=0;
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
    if (datasets.length === accessCount && this.datasets.length === accessCount) {
      if (this.user) {
        this.user.AccessAll = true;
      }
    } else {
      if (this.user) {
        this.user.AccessAll = false;
        this.user.ModifyAll = false;
      }
    }
    if (datasets.length === modifyCount && this.datasets.length === modifyCount) {
      if (this.user) {
        this.user.ModifyAll = true;
      }
    } else {
      if (this.user) {
        this.user.ModifyAll = false;
      }
    }
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
  ngOnInit() {
  }
  onPrivilegesChange() {
    const val = this.user;
    if (val) {
      if (val.Dashboard || val.WebTestEdit || val.Letters || val.ViewTechnicalInfo ||
        val.EditTechnicalInfo || val.CreateTechnicalInfo || val.ViewSiteInfo ||
        val.EditSiteInfo || val.CreateSiteInfo || val.Setup || val.AdvanceReporting
        || val.SysAdmin || val.Admin || val.Email) {
        this.user.WebTestTester = false;
        this.updateform.controls['WebTestTester'].disable();
      } else {
        this.updateform.controls['WebTestTester'].enable();
      }
    }
  }

}