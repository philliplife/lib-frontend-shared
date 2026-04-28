import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaToastComponent implements OnInit {
    private messageService;
    private toastService;
    svgIconPath: string | null;
    ngOnInit(): void;
    onShow(severity: string, summary: string, description: string, life?: number, svgIconPath?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaToastComponent, "pla-toast", never, {}, {}, never, never, true, never>;
}
