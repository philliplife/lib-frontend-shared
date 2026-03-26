import { OnInit } from '@angular/core';
import { ITableColumn, IAppliedFilters, IOperatorOptions } from '../../../../models/table.interface';
import * as i0 from "@angular/core";
export declare class PlaTableFilterComponent<T = unknown> implements OnInit {
    tableColumns: ITableColumn<T>[];
    appliedFilters: IAppliedFilters;
    readonly operatorOptions: IOperatorOptions[];
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaTableFilterComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaTableFilterComponent<any>, "tr[pla-table-filter]", never, { "tableColumns": { "alias": "tableColumns"; "required": true; }; "appliedFilters": { "alias": "appliedFilters"; "required": true; }; }, {}, never, never, true, never>;
}
