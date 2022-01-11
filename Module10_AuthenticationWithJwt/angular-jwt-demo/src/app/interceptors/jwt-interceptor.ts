import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthenticationService } from "../services/authentication.service";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

export class JWTInterceptor implements HttpInterceptor {
    
    constructor(
        private _authService: AuthenticationService
    ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const newReq = req;

        return next
            .handle(newReq)
            .pipe(
                tap(
                    null,
                    (err: HttpErrorResponse) => {
                        switch(err.status) {
                            case 400:
                                throw err;
                            case 401:
                                this._authService.logout();
                                break;
                            case 406:
                                this._authService.logout();
                                break;
                            case 500:
                                alert('Server Error : ' + err.message);
                                break;
                        }
                    }
                )
            )

    }
}