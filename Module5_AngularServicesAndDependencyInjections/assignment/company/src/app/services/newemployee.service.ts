import { Injectable } from '@angular/core';
import { NewEmployee } from '../newemployee/employee2';

@Injectable({
  providedIn: 'root'
})
export class NewemployeeService {
  emplist: NewEmployee[] =[
    {
      id:1,
      employee_name:'John',
      employee_salary:'$10000',
      employee_age:56,
      profile_image:'https://url of the image',
    },
    {
      id:2,
      employee_name:'Anshuman',
      employee_salary:'$100000',
      employee_age:41,
      profile_image:'https://url of the image',
    },
    {
      id:3,
      employee_name:'Swati',
      employee_salary:'$50000',
      employee_age:34,
      profile_image:'https://url of the image',
    }
    ,{
      id:4,
      employee_name:'Anupam',
      employee_salary:'$1500000',
      employee_age:39,
      profile_image:'https://url of the image',
    
    },
    {
      id:5,
      employee_name:'Anupriya',
      employee_salary:'$90000',
      employee_age:38,
      profile_image:'https://url of the image',
    },
    {
      id:6,
      employee_name:'George',
      employee_salary:'$200000',
      employee_age:59,
      profile_image:'https://url of the image',
    }
  ]
  constructor() { }

  getEmployeeList() {
    return this.emplist;
  }
}
