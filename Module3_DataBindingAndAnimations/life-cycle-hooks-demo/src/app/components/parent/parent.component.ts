import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  username = 'abc';

  constructor() { 
    console.log('Inside parent constructor');
  }

  ngOnInit(): void {
    console.log('Inside parent ngOnInit');
  }

  ngOnChanges() {
    console.log('Inside parent   ngOnChanges');
  }

  ngAfterViewInit() {
    console.log(' ====> Inside ngAfterViewInit for parent')
  }

  ngDoCheck() {
    console.log(' ====> Inside ngDoCheck for parent')
  }

  changeUserName() {
    this.username = 'def';
  }
}
