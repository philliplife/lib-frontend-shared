import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PlaContainerLayoutComponent implements OnChanges {
    menuTabs: MenuTab[];
    currentTab: string;
    currentTabChange: EventEmitter<string>;
    ngOnChanges(change: SimpleChanges): void;
    onTabChange(event: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaContainerLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaContainerLayoutComponent, "pla-container-layout", never, { "menuTabs": { "alias": "menuTabs"; "required": true; }; "currentTab": { "alias": "currentTab"; "required": true; }; }, { "currentTabChange": "currentTabChange"; }, never, ["[plaHeader]", "*"], true, never>;
}
export interface MenuTab {
    label: string;
    value: string;
    icon: string;
}
