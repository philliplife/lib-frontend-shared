import { HttpRequest, HttpEvent, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUrlConfig } from '../../../models/authorization.interface';
import * as i0 from "@angular/core";
/**
 * Handles token refresh logic with queueing for concurrent requests
 */
export declare class TokenRefreshService {
    private readonly loginService;
    private readonly authState;
    private readonly errorModal;
    refreshAndRetry(req: HttpRequest<unknown>, next: HttpHandlerFn, urlConfig: IUrlConfig, clientId: string, applilcationStorageKey: string): Observable<HttpEvent<unknown>>;
    private performRefresh;
    static ɵfac: i0.ɵɵFactoryDeclaration<TokenRefreshService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TokenRefreshService>;
}
