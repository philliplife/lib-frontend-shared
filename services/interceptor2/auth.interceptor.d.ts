import { HttpInterceptorFn } from '@angular/common/http';
import { IWebapiInterceptor } from '../../models/authorization.interface';
export declare function authInterceptor(config: IWebapiInterceptor): HttpInterceptorFn;
