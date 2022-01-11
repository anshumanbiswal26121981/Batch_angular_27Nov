import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUser: Observable<any>;
  private currentUserSubject: BehaviorSubject<any>;

  //use RxJx to generate observables
  constructor(private _httpClient: HttpClient) { 
  this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentuser')||'{}');
  this.currentUser = this.currentUserSubject.asObservable();
}

  //login

  login(email:string, password:string) {
    return this._httpClient.post<any>(
      'https://stormy-stream-92408.herokuapp.com/api/users/login',
      {
        username: email,
        password: password
      }
    ).pipe(
      map(user =>{
          //set user info in local storage
          localStorage.setItem('currentuser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
      })
    )
  }

  //logout
  logout() {
    localStorage.removeItem('currentuser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue() : any {
    return this.currentUserSubject.value;
  }
}
