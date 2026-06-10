import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NumberDecimalPipe implements PipeTransform {
    transform(value: string | number | null | undefined, decimalDigit?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberDecimalPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NumberDecimalPipe, "numberDecimal", true>;
}
