import { IFormControlDynamic } from '../pla-dynamic-form/form.interface';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PlaFormErrorMessageComponent {
    listFormGroup: FormGroup;
    control: IFormControlDynamic;
    submitted: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaFormErrorMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaFormErrorMessageComponent, "pla-form-error-message", never, { "listFormGroup": { "alias": "listFormGroup"; "required": true; }; "control": { "alias": "control"; "required": true; }; "submitted": { "alias": "submitted"; "required": true; }; }, {}, never, never, true, never>;
}
