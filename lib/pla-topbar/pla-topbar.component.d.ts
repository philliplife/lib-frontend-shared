import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaTopbar {
    appName: string;
    firstName: string;
    department: string;
    onMenuButtonClick: EventEmitter<void>;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaTopbar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaTopbar, "pla-topbar", never, { "appName": { "alias": "appName"; "required": false; }; "firstName": { "alias": "firstName"; "required": false; }; "department": { "alias": "department"; "required": false; }; }, { "onMenuButtonClick": "onMenuButtonClick"; }, never, never, true, never>;
}
