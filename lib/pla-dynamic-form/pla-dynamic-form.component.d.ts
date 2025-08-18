import { AbstractControl } from '@angular/forms';
import { IFormControlDynamic } from './form.interface';
import * as i0 from "@angular/core";
export declare class PlaDynamicForm {
    lisFormGroup: any;
    lisFormDesign: IFormControlDynamic[];
    submitted: boolean;
    loading: boolean;
    constructor();
    isRequired(controlName: string): boolean;
    classValidate(formControl: AbstractControl | null, submitted?: boolean): Record<string, boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaDynamicForm, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaDynamicForm, "pla-dynamic-form", never, { "lisFormGroup": { "alias": "lisFormGroup"; "required": true; }; "lisFormDesign": { "alias": "lisFormDesign"; "required": true; }; "submitted": { "alias": "submitted"; "required": true; }; "loading": { "alias": "loading"; "required": true; }; }, {}, never, never, true, never>;
}
