import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseStatusObject } from '../models/response.interface';
import { IUserProfile } from '../models/user-profile.interface';
import * as i0 from "@angular/core";
export declare class UserProfileService {
    private readonly http;
    private readonly isLoggedInSubject;
    isLoggedIn$: Observable<boolean>;
    constructor(http: HttpClient);
    getProfileUam(userName: string, clientId: string, uamBaseApiUrl: string): Observable<ResponseStatusObject<IUserProfile>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserProfileService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserProfileService>;
}
