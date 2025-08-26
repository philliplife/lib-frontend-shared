import { AbstractControl, FormGroup } from '@angular/forms';
export declare const isRequired: (controlName: string, lisFormGroup: FormGroup) => boolean;
export declare const classValidate: (formControl: AbstractControl | null, submitted?: boolean) => Record<string, boolean>;
