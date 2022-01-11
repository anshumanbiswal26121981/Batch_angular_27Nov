import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
 ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router'
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
 
  constructor(private _router: Router,private _authenticationService: AuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    debugger
   // if user is logged in, it means the FE has JWT token. then return true
   //need a mechanism to check if we have token or not
   if (this._authenticationService.currentUserValue) {
    const jwttoken = this._authenticationService.currentUserValue[0];
    if (jwttoken && jwttoken.token != undefined && jwttoken.token  != null) {
 
     // check if route is restricted by role
     if (route.data.roles && route.data.roles.indexOf(jwttoken.role) === -1) {
       // role not authorised so redirect to home page
       // role not authorised so redirect to home page
       this._router.navigate(['/']);
       return false;
     }
 
      return true;
    }
   }
  
   // if not we have to return false
   this._router.navigate(['/login']);
   return false;
  }
}