import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFormControlDynamic } from '../pla-dynamic-form/form.interface';
import * as i0 from "@angular/core";
export declare class PlaFormInputTextComponent {
    control: IFormControlDynamic;
    listFormGroup: FormGroup;
    formControl: FormControl;
    submitted: boolean;
    valueChange: EventEmitter<any>;
    isRequired: Function;
    classValidate: Function;
    ngOnInit(): void;
    onValueChange(newValue: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaFormInputTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaFormInputTextComponent, "pla-form-input-text", never, { "control": { "alias": "control"; "required": false; }; "listFormGroup": { "alias": "listFormGroup"; "required": false; }; "formControl": { "alias": "formControl"; "required": false; }; "submitted": { "alias": "submitted"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
