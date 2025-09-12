import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaDialogComponent {
    visible: boolean;
    title?: string;
    message?: string;
    icon?: string;
    actionLabel: string;
    width: string;
    height: string;
    visibleChange: EventEmitter<boolean>;
    confirm: EventEmitter<void>;
    cancel: EventEmitter<void>;
    onCancel(): void;
    onConfirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaDialogComponent, "pla-dialog", never, { "visible": { "alias": "visible"; "required": false; }; "title": { "alias": "title"; "required": false; }; "message": { "alias": "message"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "actionLabel": { "alias": "actionLabel"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; }, { "visibleChange": "visibleChange"; "confirm": "confirm"; "cancel": "cancel"; }, never, ["*"], true, never>;
}
