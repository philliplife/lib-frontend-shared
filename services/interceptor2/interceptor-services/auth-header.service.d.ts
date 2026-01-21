import { HttpRequest } from '@angular/common/http';
import { IEnvironment } from '../../../models/authorization.interface';
import * as i0 from "@angular/core";
/**
 * Manages authentication headers for HTTP requests
 */
export declare class AuthHeaderService {
    addAuthHeaders<T>(request: HttpRequest<T>, environment: IEnvironment): HttpRequest<T>;
    private getUserType;
    private getSessionId;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthHeaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthHeaderService>;
}
