import { AfterViewInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CharCountDirective implements AfterViewInit, OnDestroy {
    private readonly el;
    private readonly renderer;
    maxLength: number | null | undefined;
    inputTypeCount: 'input' | 'textarea';
    private counterEl;
    private wrapperEl;
    private valueSub;
    constructor(el: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private wrapInput;
    private createCounter;
    private watchInputValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<CharCountDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CharCountDirective, "[appCharCount]", never, { "maxLength": { "alias": "appCharCount"; "required": false; }; "inputTypeCount": { "alias": "inputTypeCount"; "required": false; }; }, {}, never, never, true, never>;
}
