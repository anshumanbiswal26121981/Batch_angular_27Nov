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
   // if user is logged in, it means the FE has JWT token. then return true
   //need a mechanism to check if we have token or not
   const jwttoken = this._authenticationService.currentUserValue;
   if (jwttoken && jwttoken != '{}') {
     return true;
   }

   // if not we have to return false
   this._router.navigate(['/login']);
   return false;
  }
}
