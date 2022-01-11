import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Inside JwtInterceptor');
        debugger
       // add authorization header with jwt token if available
       if (this.authenticationService.currentUserValue) {
        let currentUser = this.authenticationService.currentUserValue[0];
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = req.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
    }

        return next.handle(req);
    
            // const newReq = req;
    
            // return next
            //     .handle(newReq)
            //     .pipe(
            //         tap(
            //             null,
            //             (err: HttpErrorResponse) => {
            //                 switch(err.status) {
            //                     case 400:
            //                         throw err;
            //                     case 401:
            //                         this.authenticationService.logout();
            //                         break;
            //                     case 406:
            //                         this.authenticationService.logout();
            //                         break;
            //                     case 500:
            //                         alert('Server Error : ' + err.message);
            //                         break;
            //                 }
            //             }
            //         )
            //     )
    
        }
    
}