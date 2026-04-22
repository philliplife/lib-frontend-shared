import { OnInit } from '@angular/core';
import { ITableColumn } from '../../../../models/table.interface';
import { TagSeverity } from '../../../../constant/tag-status.data';
import * as i0 from "@angular/core";
export declare class PlaTableBodyComponent<T = unknown> implements OnInit {
    tableColumns: ITableColumn<T>[];
    rowData: any;
    rowIndex: number;
    ngOnInit(): void;
    getSeverity(status: TagSeverity): "success" | "info" | "warn" | "danger" | "secondary" | "contrast";
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaTableBodyComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaTableBodyComponent<any>, "tr[pla-table-body]", never, { "tableColumns": { "alias": "tableColumns"; "required": true; }; "rowData": { "alias": "rowData"; "required": true; }; "rowIndex": { "alias": "rowIndex"; "required": true; }; }, {}, never, never, true, never>;
}
