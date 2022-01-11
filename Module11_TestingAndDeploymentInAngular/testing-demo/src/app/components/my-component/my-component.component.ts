import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  userCount=20;

  constructor() { }

  ngOnInit(): void {
  }

  registerUser() {
    const newUserCount = ++this.userCount;
    localStorage.setItem('userCount', newUserCount.toString());
    return newUserCount;
  }

  deleteUser() {
    const newUserCount = --this.userCount;
    localStorage.setItem('userCount', newUserCount.toString());
    return newUserCount;
  }

  sum(a:number, b:number){
    return a+b;
  }
}
