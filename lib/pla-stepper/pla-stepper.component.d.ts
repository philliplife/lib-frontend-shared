import { EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as i0 from "@angular/core";
export declare class PlaStepperComponent {
    activeStep: number;
    activeIndex: number;
    stepItems: MenuItem[];
    formValid: any;
    showValidationErrors: boolean;
    activeIndexChange: EventEmitter<number>;
    constructor();
    isStepInvalid(id: string): boolean;
    onStepClick(activateCallback: () => void, index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaStepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaStepperComponent, "pla-stepper", never, { "activeStep": { "alias": "activeStep"; "required": false; }; "activeIndex": { "alias": "activeIndex"; "required": false; }; "stepItems": { "alias": "stepItems"; "required": false; }; "formValid": { "alias": "formValid"; "required": false; }; "showValidationErrors": { "alias": "showValidationErrors"; "required": false; }; }, { "activeIndexChange": "activeIndexChange"; }, never, never, true, never>;
}
