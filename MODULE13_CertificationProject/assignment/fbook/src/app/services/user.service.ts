import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { HeaderService } from './header.service';
import { AppConfig } from '../config/app.config';
import { ToastService } from './toast.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    apiBaseURL = "http://localhost:8080/api/";//AppConfig.settings.apiServer.baseURL;

    constructor(private http: HttpClient, private header: HeaderService, private toastService: ToastService) { }

    register(newUser: User): any {
        return this.http.post<User>(this.apiBaseURL + 'users/register', newUser, this.header.requestHeaders()).pipe(res => {
            return res;
        });
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiBaseURL + 'users/').pipe(res => {
            return res;
        });
    }

    getUserById(userId: String): any {
        return this.http.get(this.apiBaseURL + 'users/' + userId).pipe(res => {
            return res;
        });
    };

    getUserByEmail(email: String): any {
        return this.http.post(this.apiBaseURL + 'users/finduserbyemail', { email: email }, this.header.requestHeaders()).pipe(res => {
            return res;
        });
    };

    updateUserPhoto(updatedUser: { id: any; photoId: any; }) {
        return this.http.post(this.apiBaseURL + 'users/updateuserphotoId', updatedUser, this.header.requestHeaders()).pipe(res => {
            this.toastService.openSnackBar('Image Uploaded Successfully', '', 'success-snackbar');
            return res;
        });
    };

    updateUser(updatedUser: { id: any; firstName?: any; lastName?: any; phone?: any; city?: any; state?: any; country?: any; pincode?: any; profession?: any; isActive?: boolean; }) {
        return this.http.put(this.apiBaseURL + 'users/' + updatedUser.id, updatedUser).pipe(res => {
            this.toastService.openSnackBar('Details Updated Successfully', '', 'success-snackbar');
            return res;
        });
    };
}
