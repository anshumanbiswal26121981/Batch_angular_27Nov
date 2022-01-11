

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthenticationService } from "../services/authentication.service";
import { Injectable } from '@angular/core';
import { delay, dematerialize, materialize, mergeMap, tap } from 'rxjs/operators';
import { Observable, of, throwError } from "rxjs";
import { User } from "../_models/user";
import { Role } from "../_models/role";

const users: User[] = [
    { id: 1, username: 'admin@gmail.com', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { id: 2, username: 'user@gmail.com', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
];


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        console.log('FakeBackendInterceptor : url is ' + url);
        // wrap in delayed observable to simulate server api call
        // return of(null)
        //     .pipe(mergeMap(handleRoute))
        //     .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        //     .pipe(dematerialize());
        switch (true) {
            case url.endsWith('/users/authenticate') && method === 'POST':
               return authenticate();
            case url.endsWith('/users') && method === 'GET': {
                if(!isLoggedIn) {
                    console.log('user is not logged in');
                    this.authenticationService.logout();
                } else {
                    console.log('user is logged in');
                    return ok(users);
                }
                //return getUsers();
            }
            break;
            case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                    // pass through any requests not handled above
            default:
                // pass through any requests not handled above
                return next.handle(request);
        }
        return next.handle(request);
        
        function authenticate() {
            debugger
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user){
                return error('Username or password is incorrect');
            }
            const userresult: User[] = [{ id: user.id, username: user.username, firstName: user.firstName,password:'', lastName: user.lastName,token: `fake-jwt-token.${user.id}`,  role: user.role }];
            return ok(userresult);
        }
    
        function getUsers() {
            debugger
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
        }
    
        // helper functions
    
        function ok(body?: User[]) {
            return of(new HttpResponse({ status: 200, body }));
        }
    
        function error(message: string) {
            return throwError({ error: { message } });
        }
    
        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }
        
        function currentUser() {
            const authHeader = headers.get('Authorization');
            if ( authHeader != null ) {
                const id = parseInt(authHeader.split('.')[1]);
                return users.find(x => x.id === id);
            }
            return;
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }

        function isLoggedIn() {
            return headers.get('Authorization')?.includes('Bearer fake-jwt-token');
        }

        function isAdmin() {
            const currentUsr = currentUser();
            return currentUsr != null && currentUsr.role === Role.Admin;
        }

        function getUserById(): Observable<HttpEvent<any>> {
            debugger
            if (!isLoggedIn()) return unauthorized();
            const currentUsr = currentUser();
            // only admins can access other user records
            if (!isAdmin() && currentUsr != null && currentUsr.role == Role.Admin) return unauthorized();

            const user = users.find(x => x.id === idFromUrl());
            if (user != undefined) {
                const userresult: User[] = [{ id: user.id, username: user.username, firstName: user.firstName,password:'', lastName: user.lastName,token: `fake-jwt-token.${user.id}`,  role: user.role }];
                return ok(userresult);
            }
           return ok();
        }
    }

}


