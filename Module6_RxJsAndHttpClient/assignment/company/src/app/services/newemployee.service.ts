import { Injectable } from '@angular/core';
import { NewEmployee } from '../newemployee/employee2';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { merge } from 'rxjs';
import { from, interval, of, throwError,pipe} from 'rxjs';
import { catchError, filter, find, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewemployeeService {
  private emplist : NewEmployee[] = [];
  constructor(private _httpClient: HttpClient) {
    this.getEmployeeList();
   }
 
getEmployeeList() {
    const url = "http://dummy.restapiexample.com/api/v1/employees";
    this._httpClient.get<NewEmployee[]>(url).subscribe((data: any) => {
      //debugger;
      this.emplist = data.data;
    });
   
    
    
  }

  fetchEmployeeList() {
    //debugger
    return this.emplist;
  }
}
