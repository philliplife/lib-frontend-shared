import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as i0 from "@angular/core";
export declare class PlaContentContainerComponent implements OnInit, OnChanges {
    title: string;
    menuList: {
        label_key: string;
        value: string;
    }[];
    selectMenu: {
        label_key: string;
        value: string;
    } | null;
    selectMenuChange: EventEmitter<{
        label_key: string;
        value: string;
    }>;
    splitButtonMenu: MenuItem[];
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): Promise<void>;
    initialMenu(): void;
    onSelectMenu(menu: {
        label_key: string;
        value: string;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaContentContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaContentContainerComponent, "pla-content-container", never, { "title": { "alias": "title"; "required": false; }; "menuList": { "alias": "menuList"; "required": false; }; "selectMenu": { "alias": "selectMenu"; "required": false; }; }, { "selectMenuChange": "selectMenuChange"; }, never, ["*"], true, never>;
}
