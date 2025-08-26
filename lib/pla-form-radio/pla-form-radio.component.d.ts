import { FormGroup } from '@angular/forms';
import { IFormControlDynamic } from '../pla-dynamic-form/form.interface';
import * as i0 from "@angular/core";
export declare class PlaFormRadioComponent {
    listFormGroup: FormGroup;
    control: IFormControlDynamic;
    submitted: boolean;
    isRequired: Function;
    classValidate: Function;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaFormRadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaFormRadioComponent, "pla-form-radio", never, { "listFormGroup": { "alias": "listFormGroup"; "required": true; }; "control": { "alias": "control"; "required": true; }; "submitted": { "alias": "submitted"; "required": true; }; }, {}, never, never, true, never>;
}
