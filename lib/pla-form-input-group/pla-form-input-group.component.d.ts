import { IFormControlDynamic } from '../pla-dynamic-form/form.interface';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PlaFormInputGroupComponent {
    listFormGroup: FormGroup;
    control: IFormControlDynamic;
    submitted: boolean;
    index: number | null;
    isRequired: Function;
    classValidate: Function;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaFormInputGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaFormInputGroupComponent, "pla-form-input-group", never, { "listFormGroup": { "alias": "listFormGroup"; "required": true; }; "control": { "alias": "control"; "required": true; }; "submitted": { "alias": "submitted"; "required": true; }; "index": { "alias": "index"; "required": false; }; }, {}, never, never, true, never>;
}
