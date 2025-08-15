import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaButtonSaveComponent {
    disabled: boolean;
    onSave: EventEmitter<void>;
    setDisabledState(isDisabled: boolean): void;
    onSaveClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaButtonSaveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaButtonSaveComponent, "pla-button-save", never, { "disabled": { "alias": "disabled"; "required": false; }; }, { "onSave": "onSave"; }, never, never, true, never>;
}
