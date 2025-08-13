import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PlaInputText implements ControlValueAccessor {
    label: string;
    type: string;
    class: string;
    style: {};
    value: any;
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    onInputChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaInputText, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaInputText, "pla-input-text", never, { "label": { "alias": "label"; "required": false; }; "type": { "alias": "type"; "required": false; }; "class": { "alias": "class"; "required": false; }; "style": { "alias": "style"; "required": false; }; }, {}, never, never, true, never>;
}
