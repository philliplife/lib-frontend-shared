import { DoCheck } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormControlDynamic } from './form.interface';
import * as i0 from "@angular/core";
export declare class PlaFormBaseComponent implements DoCheck {
    listFormGroup: FormGroup;
    control: IFormControlDynamic;
    submitted: boolean;
    index: number | null;
    isRequired: Function;
    classValidate: Function;
    ngDoCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaFormBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PlaFormBaseComponent, never, never, { "listFormGroup": { "alias": "listFormGroup"; "required": true; }; "control": { "alias": "control"; "required": true; }; "submitted": { "alias": "submitted"; "required": true; }; "index": { "alias": "index"; "required": false; }; }, {}, never, never, true, never>;
}
