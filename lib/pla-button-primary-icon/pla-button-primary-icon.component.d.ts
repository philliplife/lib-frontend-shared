import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaButtonPrimaryIconComponent {
    styleClass: string;
    style: {
        [klass: string]: any;
    };
    disabled: boolean;
    label: string;
    icon: string;
    onClick: EventEmitter<void>;
    get mergedStyle(): {
        [x: string]: any;
    };
    setDisabledState(isDisabled: boolean): void;
    onActionClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaButtonPrimaryIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaButtonPrimaryIconComponent, "pla-button-primary-icon", never, { "styleClass": { "alias": "styleClass"; "required": false; }; "style": { "alias": "style"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; }, { "onClick": "onClick"; }, never, never, true, never>;
}
