import { FormGroup } from '@angular/forms';
import { IFormControlDynamic } from '../pla-dynamic-form/form.interface';
import * as i0 from "@angular/core";
export declare class PlaFormMultiSelectComponent {
    listFormGroup: FormGroup;
    control: IFormControlDynamic;
    submitted: boolean;
    isRequired: Function;
    classValidate: Function;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaFormMultiSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaFormMultiSelectComponent, "pla-form-multi-select", never, { "listFormGroup": { "alias": "listFormGroup"; "required": true; }; "control": { "alias": "control"; "required": true; }; "submitted": { "alias": "submitted"; "required": true; }; }, {}, never, never, true, never>;
}
