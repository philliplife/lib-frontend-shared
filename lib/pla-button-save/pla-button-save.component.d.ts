import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaButtonSaveComponent {
    class: string;
    style: {};
    disabled: boolean;
    onSave: EventEmitter<void>;
    setDisabledState(isDisabled: boolean): void;
    onSaveClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaButtonSaveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaButtonSaveComponent, "pla-button-save", never, { "class": { "alias": "class"; "required": false; }; "style": { "alias": "style"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "onSave": "onSave"; }, never, never, true, never>;
}
