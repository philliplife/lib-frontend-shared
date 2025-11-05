import { OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PlaFormInputArrayComponent implements OnInit {
    private readonly formBuilder;
    pageState: 'View' | 'Edit';
    form: FormGroup;
    formArrayName: string;
    createItemFn: () => FormGroup;
    formSections: any[];
    isSubmitted: boolean;
    isLoadingPackage: boolean;
    isSmallScreen: boolean;
    constructor(formBuilder: FormBuilder);
    ngOnInit(): void;
    get items(): FormArray;
    getNestedFormGroup(i: number, key: string): FormGroup;
    addItem(): void;
    removeItem(index: number): void;
    private defaultCreateItem;
    onSubmit(): void;
    getControls(): FormGroup[];
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaFormInputArrayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaFormInputArrayComponent, "pla-form-input-array", never, { "pageState": { "alias": "pageState"; "required": false; }; "form": { "alias": "form"; "required": false; }; "formArrayName": { "alias": "formArrayName"; "required": false; }; "createItemFn": { "alias": "createItemFn"; "required": true; }; "formSections": { "alias": "formSections"; "required": true; }; "isSubmitted": { "alias": "isSubmitted"; "required": false; }; "isLoadingPackage": { "alias": "isLoadingPackage"; "required": false; }; }, {}, never, never, true, never>;
}
