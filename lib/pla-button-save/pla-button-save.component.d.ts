import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaButtonSaveComponent {
    onSave: EventEmitter<void>;
    disabled: boolean;
    setDisabledState(isDisabled: boolean): void;
    onSaveClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaButtonSaveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaButtonSaveComponent, "pla-button-save", never, {}, { "onSave": "onSave"; }, never, never, true, never>;
}
