import { Component, OnInit } from '@angular/core';
import {Employee} from './employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emplist: Employee[] =[
    {
      employeeId:1,
      firstName:'John',
      lastName:'Smith',
      salary:10000,
      dob:new Date('11/02/1983'),
      email:'john@abc.com',
    },
    {
      employeeId:2,
      firstName:'Anshuman',
      lastName:'Biswal',
      salary:500000,
      dob:new Date('12/26/1981'),
      email:'ab@abc.com',
    },
    {
      employeeId:3,
      firstName:'Swati',
      lastName:'Hans',
      salary:1000000,
      dob:new Date('03/08/1987'),
      email:'swati@abc.com',
    },
    {
      employeeId:4,
      firstName:'Laisha',
      lastName:'Biswal',
      salary:5000000,
      dob:new Date('05/09/2013'),
      email:'laisha@abc.com',
    }
  ]

  showEdit: boolean = false;
  constructor() { 
  }

  ngOnInit(): void {
    this.emplist 
  }

  editEmpoyee() { 
    this.showEdit = true;
  }

  updateEmployee() { 
    this.showEdit = false;
     
    }
}
