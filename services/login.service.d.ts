import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFormLogout, IResAppToken } from '../models/authorization.interface';
import { ResponseStatus } from '../models/response.interface';
import { AuthStateService } from './interceptor2/interceptor-services/auth-state.service';
import * as i0 from "@angular/core";
export declare class LoginService {
    private readonly http;
    private readonly authState;
    private readonly isLoggedInSubject;
    isLoggedIn$: Observable<boolean>;
    constructor(http: HttpClient, authState: AuthStateService);
    refreshToken(uamBaseApiUrl: string, clientId: string): Observable<any>;
    verifyToken(uamBaseApiUrl: string, clientId: string): Observable<ResponseStatus<IResAppToken>>;
    checkAuth(): boolean;
    logout(body: IFormLogout, uamBaseApiUrl: string): Observable<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoginService>;
}
