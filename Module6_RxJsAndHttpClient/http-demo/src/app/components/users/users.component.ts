import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from './users.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  
  userObj: User = {
    id: '',
    firstName: '',
    age: 0,
    company: ''
  }
  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
  }

  fetchUsers() {
    this.users = this._userService.fetchUsers();
  }

  createNewUser() {
  this._userService.addUser(this.userObj);
  }
}


