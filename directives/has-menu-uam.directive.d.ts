import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HasMenuUAMDirective implements OnInit {
    menuUrl: string;
    storage: string;
    private templateRef;
    private viewContainer;
    private permissionService;
    ngOnInit(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HasMenuUAMDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HasMenuUAMDirective, "[appHasMenuUAM]", never, { "menuUrl": { "alias": "appHasMenuUAM"; "required": false; }; "storage": { "alias": "appHasMenuUAMStorage"; "required": false; }; }, {}, never, never, true, never>;
}
