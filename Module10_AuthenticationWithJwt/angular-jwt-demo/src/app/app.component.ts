import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jwt-demo';
  isLoggedIn = false;

  constructor(private _router : Router,
    private _authnService: AuthenticationService) {

      // if user is logged in , then isLoggedIn must be set to true
      //need mechanism to check if we have the token or not

      this._authnService.currentUser.subscribe(
        x => {
          if (x && x!== '{}') {
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
          }
        }
      )

  }
  //observe the login
  logout() {
    this._authnService.logout();
    this._router.navigate(['/login']);
  }
}
