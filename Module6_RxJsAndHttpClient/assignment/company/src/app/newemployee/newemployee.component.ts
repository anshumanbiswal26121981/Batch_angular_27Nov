import { Component, OnInit } from '@angular/core';
import { NewemployeeService } from 'src/app/services/newemployee.service';
import { NewEmployee } from './employee2';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  employee_list : NewEmployee[] = [];

  empObj: NewEmployee = {
    id: '',
    employee_name: '',
    employee_salary: 0,
    employee_age: 0,
    profile_image: ''
  }
  constructor(private _newemployeeservice: NewemployeeService) { 
    
  }

  ngOnInit(): void {
 
  }

  fetchEmployees() {
    //debugger
    this.employee_list = this._newemployeeservice.fetchEmployeeList();
  }


}
