import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HasPermissionDirective implements OnInit {
    requiredPermission: string;
    storage: string;
    private readonly templateRef;
    private readonly viewContainer;
    private readonly permissionService;
    ngOnInit(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HasPermissionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HasPermissionDirective, "[appHasPermission]", never, { "requiredPermission": { "alias": "appHasPermission"; "required": false; }; "storage": { "alias": "appHasPermissionStorage"; "required": false; }; }, {}, never, never, true, never>;
}
