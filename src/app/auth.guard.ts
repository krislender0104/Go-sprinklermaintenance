import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      if (localStorage.getItem('currentUser') != null) {
        // console.log("currentuser----------->", localStorage.getItem('currentUser'));
      return true;
    }else{
      this.router.navigate(['/pages/auth/login']);
      return false;
    }

  }
}

@Injectable()
export class AuthAdminGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var currentuser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentuser != null) {
      if (currentuser[0].WebTestTester!=true) {
        return true;
      }
    }
    return false;
  }
}

@Injectable()
export class AuthTesterGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var currentuser = JSON.parse(localStorage.getItem('currentUser'));
   
    if (currentuser != null) {
      if (currentuser[0].WebTestTester==true) {
        // console.log("currentuser----------->", localStorage.getItem('currentUser'));
        return true;
      }
    }
    return false;
  }
}
