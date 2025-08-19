import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaMessageMappingPipe implements PipeTransform {
    transform(path: string | null | undefined, arg?: {
        maxValue?: number;
        minValue?: number;
    }): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaMessageMappingPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PlaMessageMappingPipe, "plaMessage", true>;
}
export declare const messageModels: Record<string, string>;
