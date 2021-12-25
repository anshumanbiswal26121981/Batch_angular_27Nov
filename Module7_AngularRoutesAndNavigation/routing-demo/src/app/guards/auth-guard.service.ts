import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { AccountsComponent } from '../components/accounts/accounts.component';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private _router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // it can allow or disallow the navigation

    if (localStorage.getItem('isLoggedIn')) { // it can be any condition to allow or disallow the user
      return true; // allowing the navigation to happen
    }

    return false; // not allowing the navigation
    
  }

  canDeactivate(component: AccountsComponent) {
      
    // return true or false

    const isMove = window.confirm('Are you sure, you want to leave ?'); 

    return isMove;

  }


}
