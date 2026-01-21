import { HttpRequest } from '@angular/common/http';
import * as i0 from "@angular/core";
/**
 * Manages authentication headers for HTTP requests
 */
export declare class AuthHeaderService {
    addAuthHeaders<T>(request: HttpRequest<T>, envName: 'dev' | 'uat' | 'preprod' | 'prod', clientId: string, authorizationType: string): HttpRequest<T>;
    private getUserType;
    private getSessionId;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthHeaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthHeaderService>;
}
