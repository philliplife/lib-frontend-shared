import { HttpInterceptorFn } from '@angular/common/http';
import { IWebapiInterceptor } from '../../models/authorization.interface';
/** ==============================
 *  Final Interceptor
 *  ============================== */
export declare function addHeaderInterceptor(config: IWebapiInterceptor): HttpInterceptorFn;
