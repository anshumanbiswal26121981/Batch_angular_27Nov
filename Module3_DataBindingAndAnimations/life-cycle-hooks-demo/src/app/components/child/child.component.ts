import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  user = '';

  constructor() { 
    console.log('Inside child constructor');
  }

  ngOnInit(): void {
    console.log('Inside child ngOnInit');
  }

  ngOnChanges() {
    console.log('Inside child ngOnChanges');
  }

  ngAfterViewInit() {
    console.log(' ====> Inside ngAfterViewInit for child')
  }

  ngDoCheck() {
    console.log(' ====> Inside ngDoCheck for child')
  }
}
