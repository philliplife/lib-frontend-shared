import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaButtonOutlinedComponent {
    disabled: boolean;
    label: string;
    icon: string;
    styleClass: string;
    style: {
        [klass: string]: any;
    };
    onClick: EventEmitter<void>;
    get mergedStyle(): {
        color: string;
    };
    setDisabledState(isDisabled: boolean): void;
    onActionClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaButtonOutlinedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaButtonOutlinedComponent, "pla-button-outlined", never, { "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "styleClass": { "alias": "styleClass"; "required": false; }; "style": { "alias": "style"; "required": false; }; }, { "onClick": "onClick"; }, never, never, true, never>;
}
