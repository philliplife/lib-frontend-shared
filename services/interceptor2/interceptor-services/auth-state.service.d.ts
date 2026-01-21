import { Observable } from 'rxjs';
import { IResRefreshToken } from '../../../models/authorization.interface';
import * as i0 from "@angular/core";
/**
 * Manages token refresh state and session invalidation to prevent concurrent refresh requests
 * and stop requests when session becomes invalid
 */
export declare class AuthStateService {
    private readonly refreshInProgress$;
    private readonly refreshResult$;
    private readonly sessionInvalidated$;
    get isRefreshing(): boolean;
    get isSessionInvalidated(): boolean;
    startRefresh(): void;
    completeRefresh(result: IResRefreshToken): void;
    failRefresh(): void;
    waitForRefresh(): Observable<IResRefreshToken>;
    invalidateSession(): void;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthStateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthStateService>;
}
