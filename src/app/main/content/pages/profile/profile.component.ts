import { Component, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'fuse-profile',
    templateUrl  : './profile.component.html',
    styleUrls    : ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class FuseProfileComponent
{

    userName: any;
    constructor()
    {
        if(localStorage.currentUser)
        {
        var currentuser=JSON.parse(localStorage.currentUser);
       //this.UserID=currentuser[0].UserID;
            this.userName=currentuser[0].FullName;
            //this.lastname=currentuser.lastname;
        }
    }
}
