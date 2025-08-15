import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaButtonPrimaryIconComponent {
    customClass: string | string[] | Set<string> | {
        [klass: string]: any;
    };
    disabled: boolean;
    label: string;
    icon: string;
    onClick: EventEmitter<void>;
    setDisabledState(isDisabled: boolean): void;
    onActionClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaButtonPrimaryIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaButtonPrimaryIconComponent, "pla-button-primary-icon", never, { "customClass": { "alias": "customClass"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; }, { "onClick": "onClick"; }, never, never, true, never>;
}
