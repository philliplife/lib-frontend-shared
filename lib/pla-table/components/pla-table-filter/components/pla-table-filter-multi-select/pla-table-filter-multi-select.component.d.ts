import { OnInit } from '@angular/core';
import { IAppliedFilters, IOperatorOptions, ITableColumn } from '../../../../../../models/table.interface';
import * as i0 from "@angular/core";
export declare class PlaTableFilterMultiSelectComponent<T = ITableColumn<any>> implements OnInit {
    column: ITableColumn<T>;
    appliedFilters: IAppliedFilters;
    operatorOptions: IOperatorOptions[];
    ngOnInit(): void;
    onSelectFilter(value: string, callback: (value: unknown) => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaTableFilterMultiSelectComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaTableFilterMultiSelectComponent<any>, "pla-table-filter-multi-select", never, { "column": { "alias": "column"; "required": false; }; "appliedFilters": { "alias": "appliedFilters"; "required": true; }; "operatorOptions": { "alias": "operatorOptions"; "required": true; }; }, {}, never, never, true, never>;
}
