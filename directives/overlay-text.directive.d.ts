import { ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class OverlayTextDirective implements AfterViewInit {
    private el;
    private renderer;
    overlayText: string;
    constructor(el: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OverlayTextDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<OverlayTextDirective, "[appOverlayText]", never, { "overlayText": { "alias": "appOverlayText"; "required": false; }; }, {}, never, never, true, never>;
}
