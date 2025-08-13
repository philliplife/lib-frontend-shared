import { ControlValueAccessor, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PlaInputSelect implements ControlValueAccessor {
    drpData: any[];
    label: string;
    style: {
        [klass: string]: any;
    };
    class: string;
    innerControl: FormControl<any>;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaInputSelect, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaInputSelect, "pla-input-select", never, { "drpData": { "alias": "drpData"; "required": false; }; "label": { "alias": "label"; "required": false; }; "style": { "alias": "style"; "required": false; }; "class": { "alias": "class"; "required": false; }; }, {}, never, never, true, never>;
}
