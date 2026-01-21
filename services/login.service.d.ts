import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResAppToken } from '../models/authorization.interface';
import { ResponseStatus } from '../models/response.interface';
import * as i0 from "@angular/core";
export declare class LoginService {
    private readonly http;
    private readonly isLoggedInSubject;
    isLoggedIn$: Observable<boolean>;
    constructor(http: HttpClient);
    refreshToken(uamBaseApiUrl: string, clientId: string): Observable<any>;
    verifyToken(uamBaseApiUrl: string): Observable<ResponseStatus<IResAppToken>>;
    checkAuth(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoginService>;
}
