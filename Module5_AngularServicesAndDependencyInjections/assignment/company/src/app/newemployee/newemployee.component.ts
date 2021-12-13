import { Component, OnInit } from '@angular/core';
import { NewemployeeService } from 'src/app/services/newemployee.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  employee_list : any[] = [];
  constructor(private _newemployeeservice: NewemployeeService) { 
    
  }

  ngOnInit(): void {
    this.employee_list = this._newemployeeservice.getEmployeeList();
  }
}
