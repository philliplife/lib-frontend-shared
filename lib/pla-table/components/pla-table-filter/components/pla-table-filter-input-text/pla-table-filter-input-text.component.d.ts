import { OnChanges, OnInit } from '@angular/core';
import { IAppliedFilters, IOperatorOptions, ITableColumn } from '../../../../../../models/table.interface';
import * as i0 from "@angular/core";
export declare class PlaTableFilterInputTextComponent<T = ITableColumn<any>> implements OnInit, OnChanges {
    column: ITableColumn<T>;
    appliedFilters: IAppliedFilters;
    operatorOptions: IOperatorOptions[];
    private readonly filterTextSubject;
    private skipNextInput;
    ngOnInit(): void;
    ngOnChanges(): void;
    initTextSearch(): void;
    clearFilter(input: HTMLInputElement, field: string, callback: (value: unknown) => void): void;
    onTextFilterChange(event: Event, field: string, callback: (value: unknown) => void): void;
    onTextFilterEnter(event: Event, callback: (value: unknown) => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaTableFilterInputTextComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaTableFilterInputTextComponent<any>, "pla-table-filter-input-text", never, { "column": { "alias": "column"; "required": true; }; "appliedFilters": { "alias": "appliedFilters"; "required": true; }; "operatorOptions": { "alias": "operatorOptions"; "required": true; }; }, {}, never, never, true, never>;
}
