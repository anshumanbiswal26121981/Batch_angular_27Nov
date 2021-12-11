import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-demo';
  isMacOs = false;
  iWindows = false;
  isUbuntu = false;
  isIos = false;

  listOfProducts = [
    {name : 'iPhone', price: 999, isAvailable: true},
    {name : 'iPad', price: 1999, isAvailable: true},
    {name : 'iPod', price: 2999, isAvailable: false},
    {name : 'iMac', price: 3999, isAvailable: true},
    {name : 'iWatch', price: 4999, isAvailable: true},

  ]

  selectCourses = '';
  proficiency='';
  myColor='';

  selectAngular() {
    this.selectCourses = 'angular';
    this.proficiency = 'good';
    this.myColor = 'tomato';
  }

  selectReact() {
    this.selectCourses = 'react';
    this.proficiency = 'average';
    this.myColor = 'skyblue';
  }

  selectPython() {
    this.selectCourses = 'python';
    this.proficiency = 'better';
    this.myColor = 'purple';
  }

  selectVue() {
    this.selectCourses = 'vue';
    this.proficiency = 'bad';
    this.myColor = 'pink';
  }
}
