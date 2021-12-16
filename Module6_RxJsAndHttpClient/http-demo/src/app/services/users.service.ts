import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../components/users/users.model';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersList : User[] = [];
  constructor(private _httpClient: HttpClient) {
    this.getUsers();
   }

  getUsers() {
    const url = "http://localhost:3000/users";
    this._httpClient.get<User[]>(url).subscribe((data: User[] ) => {
      this.usersList = data;
    });
  }
  
  fetchUsers() {
    return this.usersList;
  }

  
  addUser(userObj: User) {
    debugger

    const URL = `http://localhost:3000/users`;

    const requestObject: User = {
      ...userObj
    }

    const headersObj = {
      headers: new HttpHeaders()
                    .set('Content-Type', 'application/json')
                    .set('Content-Length', JSON.stringify(requestObject).length.toString())
                    .set('full-name', 'KartikaiBalan'),
      reportProgress: true, // very helpful when you want to track the progress of the API call and show the loading bar
    }

    this._httpClient.post(
      URL,
      requestObject,
      headersObj
    ).pipe(catchError((error: HttpErrorResponse) => this.errorhandler(error)))
    .subscribe((data: any) => {
      debugger;
    });
  }

  errorhandler(err: HttpErrorResponse) {
    switch (err.status) {
      case 400:
        this.handle400Erro(err);
        break;
      case 401:
        this.handle401Erro(err);
        break;
      case 404:
        this.genericErrorHandler(err);
        break;
      case 500:
        this.genericErrorHandler(err);
        break;
      default:
        this.genericErrorHandler(err);
    }
    return throwError(err);
  }

  handle400Erro(err: HttpErrorResponse) {
    throwError(err);
  }

  handle401Erro(err: HttpErrorResponse) {
    // clear the localstorage and cookies
    // navigate the user to the logout
    throwError(err);
  }

  genericErrorHandler(err: HttpErrorResponse) {
    alert(err);
  }

}
