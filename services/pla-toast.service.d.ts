import * as i0 from "@angular/core";
export declare class PlaToastService {
    private messageSubject;
    message$: import("rxjs").Observable<ToastPayload>;
    show(message: ToastPayload): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PlaToastService>;
}
export interface ToastPayload {
    severity: string;
    summary: string;
    description: string;
    life: number;
    svgIconPath?: string;
}
export interface ErrorStatus {
    status: string;
    statusCode: string;
    message: string;
    messageType: 'Success' | 'Warning' | 'Error';
    data: null;
}
