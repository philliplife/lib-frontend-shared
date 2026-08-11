import { OnInit } from '@angular/core';
import { ITableColumn } from '../../../../models/table.interface';
import * as i0 from "@angular/core";
export declare class PlaTableHeaderComponent<T = unknown> implements OnInit {
    tableColumns: ITableColumn<T>[];
    selectionMode?: 'single' | 'multiple';
    isShowSelectionColumn: boolean;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaTableHeaderComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaTableHeaderComponent<any>, "tr[pla-table-header]", never, { "tableColumns": { "alias": "tableColumns"; "required": true; }; "selectionMode": { "alias": "selectionMode"; "required": false; }; "isShowSelectionColumn": { "alias": "isShowSelectionColumn"; "required": false; }; }, {}, never, never, true, never>;
}
