import { HttpInterceptorFn } from '@angular/common/http';
/** ==============================
 *  Final Interceptor
 *  ============================== */
export declare function addHeaderInterceptor(clientId: string, redirectUrl: string, localStorageKey: string): HttpInterceptorFn;
