import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

import { AppConfig } from '../config/app.config';
import { ToastService } from './toast.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    isUserAuthenticated = new BehaviorSubject<boolean>(this.hasToken());
    isUserAdmin = new BehaviorSubject<boolean>(this.hasAdmin());
    apiBaseURL = "http://localhost:8080/api/";//AppConfig.settings.apiServer.baseURL;

    constructor(private http: HttpClient, private router: Router, private toastService: ToastService) { }

    private hasToken(): boolean {
        return !!localStorage.getItem('currentUser');
    }

    isUserLoggedIn(): Observable<boolean> {
        return this.isUserAuthenticated.asObservable();
    }

    private hasAdmin(): boolean {
        let currentUserVar = localStorage.getItem('currentUser');
        if (currentUserVar) {
            return JSON.parse(currentUserVar).isAdmin;
        }
        return false;
    }

    isAdmin(): Observable<boolean> {
        return this.isUserAdmin.asObservable();
    }

    getToken() {
        let currentUserVar = localStorage.getItem('currentUser');
        if (currentUserVar) {
            return JSON.parse(currentUserVar).token;
        }
        return;
    }

    getDecodedToken(token: string): any {
        try {
            return jwt_decode(token);
        }
        catch (Error) {
            return null;
        }
    }

    getTokenExpirationDate(token: string): Date {
        const decodedToken = this.getDecodedToken(token);
        if (decodedToken.exp === undefined) return new Date(0);
        const date = new Date(0);
        date.setUTCSeconds(decodedToken.exp);
        return date;
    }

    isTokenExpired(): boolean {
        var token = this.getToken();
        if (!token) return true;

        const date = this.getTokenExpirationDate(token);
        if (date === undefined) return false;
        return !(date.valueOf() > new Date().valueOf());
    }

    login(email: string, password: string) {
        return this.http.post<any>(this.apiBaseURL + 'users/authenticate', { email: email, password: password })
            .pipe(map(user => {
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('currentUserPhotoId', user.photoId);
                    this.isUserAuthenticated.next(true);
                    this.isUserAdmin.next(user.isAdmin);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.isUserAuthenticated.next(false);
        this.isUserAdmin.next(false);
        this.router.navigate(['/login']);
        this.toastService.openSnackBar('You have been Logout Successfully!', '', 'success-snackbar');
    }
}