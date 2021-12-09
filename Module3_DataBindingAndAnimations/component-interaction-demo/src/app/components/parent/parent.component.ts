import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  userObj = {
    name: "Anshuman",
    course: "angular",
    modules:10,
    isActive: true
  }
  
  dataFromChild = null;

  constructor() { }

  ngOnInit(): void {
  }

  comingFromChild(event: any) {
    debugger
    this.dataFromChild = event;
  }

}
