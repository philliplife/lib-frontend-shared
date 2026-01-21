import { HttpErrorResponse } from '@angular/common/http';
import * as i0 from "@angular/core";
export interface ProcessedError {
    status: number;
    statusText: string;
    message: string;
    ModelState?: Record<string, string[]>;
    shouldRetry: boolean;
    requiresReauth: boolean;
}
/**
 * Processes HTTP errors and determines appropriate handling
 */
export declare class HttpErrorHandler {
    private errorModal;
    private readonly REAUTH_ERROR_CODES;
    processError(error: HttpErrorResponse): ProcessedError;
    shouldSkipAuthHandling(error: HttpErrorResponse): boolean;
    handleProcessedError(processedError: ProcessedError, uamLoginURL: string): void;
    private extractErrorMessage;
    private format422Message;
    private requiresReauthentication;
    private isNetworkError;
    private isStaticResourceError;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpErrorHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpErrorHandler>;
}
