import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaConfirmModalComponent {
    isVisible: boolean;
    image: string;
    title: string;
    description: string;
    saveText: string;
    cancelText: string;
    isVisibleChange: EventEmitter<boolean>;
    isCancel: EventEmitter<any>;
    isSubmit: EventEmitter<any>;
    onClickCancel(isReject: boolean): void;
    onClickSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaConfirmModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaConfirmModalComponent, "pla-confirm-modal", never, { "isVisible": { "alias": "isVisible"; "required": false; }; "image": { "alias": "image"; "required": false; }; "title": { "alias": "title"; "required": false; }; "description": { "alias": "description"; "required": false; }; "saveText": { "alias": "saveText"; "required": false; }; "cancelText": { "alias": "cancelText"; "required": false; }; }, { "isVisibleChange": "isVisibleChange"; "isCancel": "isCancel"; "isSubmit": "isSubmit"; }, never, never, true, never>;
}
