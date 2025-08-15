import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaButtonOutlinedComponent {
    hostClass: string;
    customClass: string | string[] | Set<string> | {
        [klass: string]: any;
    };
    fullWidth: boolean;
    disabled: boolean;
    label: string;
    icon: string;
    onClick: EventEmitter<void>;
    setDisabledState(isDisabled: boolean): void;
    onActionClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaButtonOutlinedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaButtonOutlinedComponent, "pla-button-outlined", never, { "customClass": { "alias": "customClass"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; }, { "onClick": "onClick"; }, never, never, true, never>;
}
