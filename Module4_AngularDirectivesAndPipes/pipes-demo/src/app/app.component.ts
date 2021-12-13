import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-demo';
  title1 = 'piPes-DeMo-2'

  dob = new Date();
  money = 999;

  listOfProducts = [
    {name : 'iPhone', price: 999, isAvailable: true},
    {name : 'iPad', price: 1999, isAvailable: true},
    {name : 'iPod', price: 2999, isAvailable: false},
    {name : 'iMac', price: 3999, isAvailable: true},
    {name : 'iWatch', price: 4999, isAvailable: true},

  ]

  students = [
    {name:"anshuman", grade: 'A'},
    {name:"anupam", grade: 'B'},
    {name:"swati", grade: 'C'},
    {name:"laisha", grade: 'C'},
    {name:"namo", grade: 'C'},
    {name:"anu", grade: 'D'},
    {name:"kanishk", grade: 'A'},
    {name:"akhil", grade: 'A'},
    {name:"neel", grade: 'A'}
  ]


  addStudent() {
    this.students.push({
      'name':`Student-${this.students.length+1}`,
      grade: 'A'

    })
  }
}
