import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { Observable, Subscription } from 'rxjs';

import { fuseAnimations } from '@fuse/animations';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { ToastNotifications } from 'ngx-toast-notifications';

@Component({
    selector: 'fuse-contacts-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class FuseContactsContactListComponent implements OnInit {
    @ViewChild('dialogContent') dialogContent: TemplateRef<any>;
    displayedColumns: string[] = ['UserID', 'Logon', 'FullName', 'Select'];
    dataSource = new MatTableDataSource<UserElement>();
    selection: SelectionModel<UserElement> = new SelectionModel<UserElement>(true, []);
    user: any;
    onUserDataChangedSubscription: Subscription;
    dialogRef: any;
    selectedUserIds = [];
    jsonstring;
    constructor(private contactsService: ContactsService, private router: Router, private toast: ToastNotifications) {
        this.contactsService.getUsers();
        this.onUserDataChangedSubscription = this.contactsService.onUsersDataChanged.subscribe(users => {
            this.jsonstring = JSON.parse(JSON.stringify(users));
            this.dataSource = new MatTableDataSource<UserElement>(this.jsonstring);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    ViewUser(userId) {
        //view edit page
        this.router.navigate(['/apps/settings/edituser/' + userId]);
    }
    ngOnInit() {
        this.selection.isSelected = this.isChecked.bind(this);
    }
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    toggleSelection(userId, isChecked) {
        var index = this.selectedUserIds.indexOf(userId);
        if (isChecked) {
            if (index === -1) {
                this.selectedUserIds.push(userId);
                this.selection.select(userId);
            }
        } else {
            if (index !== -1) {
                this.selectedUserIds.splice(index, 1);
                this.selection.deselect(userId);
            }
        }
    }
    deleteSelected() {
        this.contactsService.deleteSelectedUsers(this.selectedUserIds.toString()).subscribe(res => {
            if (res.status) {
                this.toast.next({
                    text: this.selectedUserIds.length + ' user(s) deleted!',
                    caption: 'Deleted',
                    type: 'success',
                });
                this.updateDataSource();
            } else {
                this.toast.next({
                    text: res.message,
                    caption: 'Error',
                    type: 'danger',
                    lifetime: 5000
                });
            }
        });
    }
    updateDataSource() {
        this.jsonstring = this.jsonstring.filter((item) => {
            if (this.selectedUserIds.indexOf(item.UserID) !== -1) {
                return false;
            }
            return true;
        });
        this.dataSource = new MatTableDataSource<UserElement>(this.jsonstring);
        this.dataSource.paginator = this.paginator;
        this.selectedUserIds.length = 0;
        this.selection.deselect();
    }

    isChecked(row: any): boolean {
        var found = this.selection.selected.find(el => el == row);
        if (found) {
            return true;
        }
        return false;
    }
}
export interface UserElement {
    Logon: string,
    UserID: number,
    FullName: string
}
