import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoginService {
    private readonly http;
    private readonly isLoggedInSubject;
    isLoggedIn$: Observable<boolean>;
    constructor(http: HttpClient);
    refreshToken(): Observable<any>;
    verifyToken(): Observable<any>;
    uamAuthentication(body: any): Observable<any>;
    checkAuth(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoginService>;
}
