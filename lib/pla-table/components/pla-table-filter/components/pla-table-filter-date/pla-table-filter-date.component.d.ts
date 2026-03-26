import { OnInit } from '@angular/core';
import { IAppliedFilters, ITableColumn } from '../../../../../../models/table.interface';
import * as i0 from "@angular/core";
export declare class PlaTableFilterDateComponent<T = ITableColumn<any>> implements OnInit {
    appliedFilters: IAppliedFilters;
    column: ITableColumn<T>;
    ngOnInit(): void;
    onDateChange(event: any, filterCallback: Function): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaTableFilterDateComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaTableFilterDateComponent<any>, "pla-table-filter-date", never, { "appliedFilters": { "alias": "appliedFilters"; "required": true; }; "column": { "alias": "column"; "required": false; }; }, {}, never, never, true, never>;
}
