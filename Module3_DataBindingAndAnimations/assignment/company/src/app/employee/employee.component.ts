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
      employeeId:2,
      firstName:'John',
      lastName:'Smith',
      salary:10000,
      dob:new Date('11/02/1983'),
      email:'john@abc.com',
      action: 'Edit'
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
    //this.updateEmployee(emp.employeeId, emp);
  }

  updateEmployee() { 
    this.showEdit = false;
    //  var existing_emp = this.emplist.find(x=> x.id === id) as Employee;
    // if(existing_emp === null) {    
    //   this.addEmployee(emp); 
    //   this.errorItem = false;                       
    // } else {
    // if (id > -1) {
    //   var index  = this.emplist.indexOf(existing_emp);                             
    //   this.emplist.splice(index, 1);// remove 
    //   this.emplist.splice(index,0, emp); // replace the new employee in the sepcified index
    //   this.errorItem = false;  
    //  } else {
    //   this.errorItem = true;  
    //  }
     
    }
}
