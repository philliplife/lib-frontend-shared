import { IFormControlDynamic } from './form.interface';
import * as i0 from "@angular/core";
export declare class PlaDynamicForm {
    listFormGroup: any;
    listFormDesign: IFormControlDynamic[];
    submitted: boolean;
    loading: boolean;
    index: number | null;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaDynamicForm, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaDynamicForm, "pla-dynamic-form", never, { "listFormGroup": { "alias": "listFormGroup"; "required": true; }; "listFormDesign": { "alias": "listFormDesign"; "required": true; }; "submitted": { "alias": "submitted"; "required": true; }; "loading": { "alias": "loading"; "required": true; }; "index": { "alias": "index"; "required": false; }; }, {}, never, never, true, never>;
}
