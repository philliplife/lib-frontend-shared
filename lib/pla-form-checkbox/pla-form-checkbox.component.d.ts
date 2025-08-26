import { FormGroup } from '@angular/forms';
import { IFormControlDynamic } from '../pla-dynamic-form/form.interface';
import * as i0 from "@angular/core";
export declare class PlaFormCheckboxComponent {
    listFormGroup: FormGroup;
    control: IFormControlDynamic;
    submitted: boolean;
    isRequired: Function;
    classValidate: Function;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaFormCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaFormCheckboxComponent, "pla-form-checkbox", never, { "listFormGroup": { "alias": "listFormGroup"; "required": true; }; "control": { "alias": "control"; "required": true; }; "submitted": { "alias": "submitted"; "required": true; }; }, {}, never, never, true, never>;
}
