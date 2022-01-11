import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentuser')||'{}');
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }

login(email: any, password: any) {
    //   return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
    //       .pipe(map(user => {
    //           // store user details and jwt token in local storage to keep user logged in between page refreshes
    //           localStorage.setItem('currentUser', JSON.stringify(user));
    //           this.currentUserSubject.next(user);
    //           return user;
    //       }));

        return this.http.post<any>(
            `${environment.apiUrl}/users/authenticate`,
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

  logout() {
    localStorage.removeItem('currentuser');
    this.currentUserSubject.next(null);
  }
}
