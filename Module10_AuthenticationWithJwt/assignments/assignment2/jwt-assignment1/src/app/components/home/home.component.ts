import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false;
  currentUser: User[] | undefined
  userFromApi: User | undefined;


  constructor( private userService: UserService,
    private authenticationService: AuthenticationService) { 
      this.currentUser = this.authenticationService.currentUserValue;
    }

  ngOnInit() {
    debugger
      this.loading = true;
    
      if (this.currentUser) {
        const usr = this.currentUser[0] || null;
        if (usr && usr !== null) {
          this.userService.getById(usr.id || 0).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
          });
        } else {
          this.authenticationService.logout();
        }
        
      }
     
  }
}
