import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PlaFormBaseComponent } from '../pla-dynamic-form/pla-form-base.component';
import * as i0 from "@angular/core";
export declare class PlaFormInputTextComponent extends PlaFormBaseComponent {
    formControl: FormControl;
    valueChange: EventEmitter<any>;
    onValueChange(newValue: any): void;
    onHandle(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaFormInputTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaFormInputTextComponent, "pla-form-input-text", never, { "formControl": { "alias": "formControl"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
