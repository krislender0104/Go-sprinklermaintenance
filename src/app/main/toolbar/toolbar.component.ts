import { first } from 'rxjs/operators';
import { SiteService } from './../content/apps/site/site.service';
import { transition } from '@angular/animations';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { navigations, testnavigation } from 'app/navigation/navigation';

@Component({
    selector: 'fuse-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class FuseToolbarComponent {
    UserID: any;
    userStatusOptions: any[];
    languages: any;
    selectedLanguage: any;
    showLoadingBar: boolean;
    horizontalNav: boolean;
    noNav: boolean;
    navigation: any;
    firstname: any;
    lastname: any;
    logout() {
        // remove user from local storage to log user out
        var currentUser = JSON.parse(localStorage.currentUser)[0];
        if (currentUser.WebTestTester) {
            this.router.navigate(['app/login']);
        } else {
            this.router.navigate(['/admin']);
        }
        localStorage.removeItem('currentUser');
        localStorage.removeItem('adminprivilages');
        localStorage.removeItem('dataprivilages');
        localStorage.removeItem('accessToken');
        localStorage.clear();
    }
    constructor(
        private router: Router,
        private fuseConfig: FuseConfigService,
        private sidebarService: FuseSidebarService,
        private translate: TranslateService,
        private siteService: SiteService
    ) {
        if (localStorage.currentUser) {
            var currentuser = JSON.parse(localStorage.currentUser);
            this.UserID = currentuser[0].UserID;
            this.firstname = currentuser[0].FullName;
            //this.lastname=currentuser.lastname;
        }
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon': 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon': 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon': 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];

        this.languages = [
            {
                'id': 'en',
                'title': 'English',
                'flag': 'us'
            },
            {
                'id': 'tr',
                'title': 'Turkish',
                'flag': 'tr'
            }
        ];

        this.selectedLanguage = this.languages[0];

        router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    this.showLoadingBar = true;
                }
                if (event instanceof NavigationEnd) {
                    this.showLoadingBar = false;
                }
            });

        this.fuseConfig.onConfigChanged.subscribe((settings) => {
            this.horizontalNav = settings.layout.navigation === 'top';
            this.noNav = settings.layout.navigation === 'none';
        });

        if (localStorage.length > 0) {
            var currentUser = JSON.parse(localStorage.currentUser)[0];
            if (currentUser.WebTestTester) {
                this.navigation = testnavigation;
            }
            else {
                this.navigation = navigations;
            }
        }
    }
    ViewProfile(userId) {
        this.router.navigate(['/pages/profile'])
    }
    ViewEmail() {
        this.router.navigate(['/apps/mail/inbox'])
    }

    toggleSidebarOpened(key) {
        this.sidebarService.getSidebar(key).toggleOpen();
    }

    search(value) {
        // Do your search here...
        console.log(value);
    }

    setLanguage(lang) {
        // Set the selected language for toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this.translate.use(lang.id);
    }
}
