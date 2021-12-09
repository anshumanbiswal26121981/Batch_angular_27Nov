import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  user: any = null; // receibving this from parent compinent. so @Input is used

  //child to parent interaction
  @Output()
  onchangeInChild = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


  buttonClick() {
    debugger
    this.onchangeInChild.emit("Hi from child component"); // then in parent bind the onChangeInChild
  }
}
