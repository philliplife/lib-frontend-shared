import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BuddhistDatePipe implements PipeTransform {
    private locale;
    transform(value: string | Date | null | undefined, format?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BuddhistDatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<BuddhistDatePipe, "buddhistDate", true>;
}
